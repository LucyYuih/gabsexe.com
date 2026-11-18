
if (typeof gdjs.evtsExt__FNF__GPUPrewarmTick !== "undefined") {
  gdjs.evtsExt__FNF__GPUPrewarmTick.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__FNF__GPUPrewarmTick = {};
gdjs.evtsExt__FNF__GPUPrewarmTick.idToCallbackMap = new Map();


gdjs.evtsExt__FNF__GPUPrewarmTick.userFunc0x4cb4d80 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
try {
/* Sunday GDevelop / Real Sprite GPU prewarm v6.0 song-scoped / occluded
 * Called once per gameplay tick BEFORE GameBasicV3 music-start gates.
 * Renders every unique texture used by current/future character animations,
 * generated stage sprites, and native GDevelop gameplay Sprite animations.
 * Death/game-over animation groups are never enumerated.
 * A batch is counted only on the NEXT tick after it has been on stage.
 */
(() => {
  const scene = runtimeScene;
  const game = scene.getGame();
  const globalVars = game.getVariables();
  const sceneVars = scene.getVariables();
  const loading = sceneVars.get("FNFLoad");
  const token = globalVars.get("FNF_Loading").getChild("Token").getAsNumber();
  const status = (phase, percent = 0) => {
    loading.getChild("GPUWarmStatus").setString(String(phase));
    loading.getChild("GPUWarmPercent").setNumber(percent);
  };
  const complete = value => loading.getChild("GPUWarmComplete").setBoolean(Boolean(value));
  const reportCount = (done, total) => {
    loading.getChild("GPUWarmDone").setNumber(done);
    loading.getChild("GPUWarmTotal").setNumber(total);
    status("Renderizacao GPU", total ? Math.round(100 * done / total) : 0);
  };
  let state = scene._fnfGPUPrewarmSession;
  if (!state || state.token !== token) {
    if (state && typeof state.cleanup === "function") state.cleanup();
    state = scene._fnfGPUPrewarmSession = {
      token, phase: "waiting", shown: 0, submitted: 0, queue: [], errors: [], skipped: 0,
      slots: [], cover: null, label: null, keepGC: false, originalGCIdle: null,
      pending: 0, confirmedRenderIds: new Set(), resident: new Set(), createdAt: Date.now()
    };
    state.cleanup = function () {
      try {
        if (this.cover && this.cover.parent) this.cover.parent.removeChild(this.cover);
        if (this.cover && !this.cover.destroyed) this.cover.destroy({ children: true, texture: false, baseTexture: false });
      } catch (e) {}
      this.cover = null;
      this.destroyProbes();

      if (this.keepGC && this.renderer && this.renderer.textureGC && this.originalGCIdle !== null) {
        try { this.renderer.textureGC.maxIdle = this.originalGCIdle; } catch (e) {}
      }
      this.keepGC = false;
    };
    state.destroyProbes = function() {
      for (const slot of this.slots) {
        for (const obj of Object.values(slot.objects || {})) {
          try { obj._fnfGPUPrewarmProbe = false; scene.markObjectForDeletion(obj); } catch (e) {}
        }
      }
      this.slots.length = 0;
    };
    complete(false);
    reportCount(0, 0);
  }
  
  // v0.2: failures and excessive preparation time can never lock the song forever.
  const failOpen = reason => {
    if (state.phase === "complete" || state.phase === "degraded") return;
    state.phase = "degraded";
    state.errors.push(String(reason));
    loading.getChild("GPUWarmDegraded").setBoolean(true);
    loading.getChild("GPUWarmError").setString(String(reason));
    status("Pre-warm parcial: " + String(reason), loading.getChild("GPUWarmPercent").getAsNumber());
    try { state.cleanup(); } catch (_) {}
    complete(true);
    console.warn("[SundayGPUPrewarm] Recovering from GPU warmup failure:", reason);
  };
  if (state.phase === "error") {
    failOpen(state.errors[state.errors.length - 1] || "erro de textura");
    return;
  }
  if (state.phase === "degraded" || state.phase === "complete" || state.phase === "reused") return;
  if (Date.now() - state.createdAt > (typeof navigator !== "undefined" && /Android|Mobile/i.test(navigator.userAgent || "") ? 75000 : 25000)) {
    failOpen("limite de tempo excedido");
    return;
  }
  if (loading.getChild("MusicStarted").getAsBoolean()) return;

  const PIXI = globalThis.PIXI || (typeof gdjs !== "undefined" && gdjs.PIXI) || null;
  if (!PIXI || !PIXI.Sprite || !PIXI.Container) {
    state.phase = "error";
    status("ERRO: PIXI indisponivel", 0);
    loading.getChild("GPUWarmError").setString("PIXI indisponivel");
    return;
  }
  const available = () => (
    loading.getChild("ChartReady").getAsBoolean() &&
    globalVars.get("FNF_Loading").getChild("Stage").getChild("Loaded").getAsBoolean() &&
    globalVars.get("FNF_Loading").getChild("Characters").getChild("Loaded").getAsBoolean()
  );
  if (state.phase === "waiting") {
    if (!available()) return;
    const settings = globalVars.get("OptOptions");
    const loaders = globalVars.get("FNF_Loading");
    const song = globalVars.get("SongName").getAsString();
    const difficulty = globalVars.get("ResolvedDifficulty").getAsString();
    const sceneName = scene.getName();
    const key = JSON.stringify([
      sceneName, song, difficulty, globalVars.get("NoteSkin").getAsString(),
      loaders.getChild("Stage").getChild("ResolutionPercent").getAsNumber(),
      loaders.getChild("Characters").getChild("ResolutionPercent").getAsNumber(),
      ...[8, 16, 17].map(i => settings.getChild(i).getAsString())
    ]);
    const renderer = game.getRenderer().getPIXIRenderer();
    const uid = renderer && renderer.CONTEXT_UID;
    const saved = game._fnfCompletedGPUPrewarm;
    if (!game._fnfGPUPrewarmHooks) {
      game._fnfGPUPrewarmHooks = true;
      gdjs.registerRuntimeSceneUnloadingCallback(oldScene => {
        if (oldScene.getGame() !== game) return;
        const warm = oldScene._fnfGPUPrewarmSession;
        if (!warm) return;
        oldScene._fnfGPUPrewarmSession = null;
        warm.cleanup();
      });
      gdjs.registerRuntimeScenePostEventsCallback(activeScene => {
        if (activeScene.getGame() !== game) return;
        const cache = game._fnfCompletedGPUPrewarm;
        const gc = cache && cache.renderer.textureGC;
        if (!gc || gc.count - cache.lastTouch < 60) return;
        cache.lastTouch = gc.count;
        // Keep only this chart's uploaded textures resident for subsequent attempts.
        for (const base of cache.resident.keys()) if (!base.destroyed) base.touched = gc.count;
      });
    }
    if (saved && saved.key === key && saved.renderer === renderer && saved.uid === uid &&
        renderer.context && !renderer.context.isLost &&
        [...saved.resident].every(([base, gpu]) =>
          !base.destroyed && base.valid && base._glTextures[uid] === gpu)) {
      state.phase = "reused";
      status("Texturas reaproveitadas", 100);
      complete(true);
      return;
    }
    game._fnfCompletedGPUPrewarm = null;
    state.identity = { key, song, difficulty, sceneName, renderer, uid };
    const uiLayer = scene.getLayer("PauseMenu");
    const layerContainer = uiLayer && uiLayer.getRenderer && uiLayer.getRenderer().getRendererObject();
    if (!layerContainer || typeof layerContainer.addChild !== "function") {
      state.phase = "error";
      status("ERRO: camada PIXI de loading indisponivel", 0);
      loading.getChild("GPUWarmError").setString("Camada PIXI de loading indisponivel");
      return;
    }

    const isMobile = typeof navigator !== "undefined" && /Android|Mobile|iPhone|iPad/i.test(navigator.userAgent || "");
    state.mobile = isMobile;
    state.maxSlots = isMobile ? 12 : 12;
    state.bytesPerTick = isMobile ? (typeof navigator.deviceMemory === 'number' && navigator.deviceMemory <= 2 ? 3 : 6) * 1024 * 1024 : 12 * 1024 * 1024;
    const cover = new PIXI.Container();
    cover.name = "SundayGPUPrewarm";
    cover.x = 14;
    cover.y = 16;
    // The GDevelop BlackScreen is created on the PauseMenu layer at scene
    // startup. This direct Pixi overlay must sort ABOVE that sprite.
    cover.zIndex = 2147483646;
    state.cover = cover;
    const style = { fontFamily: "Arial", fontSize: 15, fill: 0xffffff, stroke: 0x000000, strokeThickness: 2 };
    const title = new PIXI.Text("GPU PRE-WARM  ·  Preparando texturas...", style);
    title.x = 2;
    title.y = 2;
    cover.addChild(title);
    state.label = title;
    state.slots = Array.from({ length: state.maxSlots }, () => ({ objects: Object.create(null), id: -1, kind: "" }));
    layerContainer.addChild(cover);

    state.phase = "preparing";
    status("Baixando e preparando frames", 0);

    const resources = game.getGameData().resources.resources || [];
    const resourceByName = new Map();
    for (const resource of resources) {
      const clean = String(resource.name || "").replace(/\\/g, "/").toLowerCase();
      resourceByName.set(clean, resource);
    }
    const tasks = [];
    const taskKeys = new Set();
    const addTask = (key, makeTexture, meta) => {
      if (!key || taskKeys.has(key)) return;
      taskKeys.add(key);
      tasks.push({ key, makeTexture, meta });
    };
    const resolution = Math.max(0.05, Math.min(1,
      globalVars.get("FNF_Loading").getChild("Characters").getChild("ResolutionPercent").getAsNumber() / 100 || 1
    ));
    const maxFrameOpt = globalVars.get("OptOptions");
    const frameLimit = maxFrameOpt.getChild(17).getAsString() === "OneFrame" ? 1
      : maxFrameOpt.getChild(16).getAsString() === "TwoFrames" ? 2 : Infinity;
    const isDeathAnimation = name => /(?:death|dead|dies|dying|game.?over|lose|first.?death)/i.test(String(name || ""));
    const prime = (path, scale) => {
      if (typeof scene._fnfPrimeCharacterTexture === "function") return scene._fnfPrimeCharacterTexture(path, scale);
      return Promise.resolve(PIXI.Texture.from(path));
    };
    const addCharacterTexture = (path, scale, meta) => {
      if (!path || !meta) return;
      const factor = Number(scale) || 1;
      const key = "char:" + String(path) + "@" + Math.round(factor * 1000)
        + ":" + String(meta.identity || "") + ":" + String(meta.animName || "") + ":" + String(meta.frameIndex);
      addTask(key, () => prime(path, factor), meta);
    };

    // Current actors (already loaded and decoded by FNF_Character_Animator).
    for (const objectName of ["BF", "Sarvente2", "gf"]) {
      for (const object of scene.getObjects(objectName)) {
        const animations = object.modAnimData || null;
        if (!animations) continue;
        const factor = object._charResolutionScale || resolution;
        for (const [animName, frames] of Object.entries(animations)) {
          if (isDeathAnimation(animName) || !Array.isArray(frames)) continue;
          for (let i = 0; i < frames.length; i++) {
            const frame = frames[i];
            if (frame && frame.path) addCharacterTexture(frame.path, factor, {
              kind: "character", identity: objectName, animData: animations,
              animName, frameIndex: i, resolution: factor,
              charScale: object._charScale || 1, flipX: Boolean(object._charFlipX)
            });
          }
        }
      }
    }

    // Stages may have animated frames or standalone textures.
    for (const object of scene.getObjects("STAGE")) {
      const factor = object._stageResolutionScale || 1;
      const stageMeta = path => ({
        kind: "stage", path, resolution: factor,
        scaleX: object._stageScaleX || 1, scaleY: object._stageScaleY || 1,
        opacity: object._stageOpacity, tint: object._stageTint,
        blendMode: object._stageBlendMode, angle: object._stageAngle,
        flipX: Boolean(object._stageFlipX), flipY: Boolean(object._stageFlipY)
      });
      if (Array.isArray(object._frames)) {
        for (const frame of object._frames) {
          const path = frame && (frame.exactImage || frame.path || frame.image);
          if (path) addTask("stage:" + path + "@" + factor, () => prime(path, factor), stageMeta(path));
        }
      }
      if (object._exactImage) addTask("stage:" + object._exactImage + "@" + factor,
        () => prime(object._exactImage, factor), stageMeta(object._exactImage));
    }

    // Native GDevelop Sprite frames: notes, receptors, splash animations, icons,
    // hold covers and gameplay sprites that may only be instantiated later.
    const project = game.getGameData();
    const sceneData = (project.layouts || []).find(s => s.name === scene.getName());
    const objectDefs = [...(project.objects || []), ...((sceneData && sceneData.objects) || [])];
    const imageManager = game.getImageManager && game.getImageManager();
    const nativeDef = objectDefs.find(def => def.name === "FNF_GPUWarmNative");
    const nativeAnimations = new Map();
    if (nativeDef) (nativeDef.animations || []).forEach((a, index) => {
      const frame = a.directions && a.directions[0] && a.directions[0].sprites &&
        a.directions[0].sprites[0];
      if (frame && frame.image) nativeAnimations.set(String(frame.image).toLowerCase(), index);
    });
    // Native assets must be selected by the active song. Do not render
    // QT saws in Happy, Bacon jumpscare in Cuidado, or all unrelated icons.
    const songKey = String(globalVars.get("SongName").getAsString() || "").toLowerCase().trim();
    const activeSongSpecific = new Set(
      songKey === "termination" ? [
        "QTWarningVisual", "QTBladeVisual", "QTClampVisual", "QTKillVisual",
        "QTAlarmGradientLeft", "QTAlarmGradientRight", "HitboxSpace"
      ] : songKey === "bacon" ? ["BaconJumpscare"] : []
    );
    const nonNativeActors = new Set(["BF", "Sarvente2", "gf", "STAGE", "Sarvente"]);
    const optionalSongSpecific = new Set([
      "BaconJumpscare", "QTWarningVisual", "QTBladeVisual", "QTClampVisual",
      "QTKillVisual", "QTAlarmGradientLeft", "QTAlarmGradientRight", "HitboxSpace"
    ]);
    const liveIconNames = new Set();
    const normalizeIcon = raw => String(raw || "").trim().toLowerCase()
      .replace(/\\/g, "/").replace(/\.png$/i, "").split("/").pop().replace(/^icon-/, "");
    const iconsVariable = globalVars.get("Icons");
    for (const side of [0, 1]) {
      const normalized = normalizeIcon(iconsVariable.getChild(side).getAsString());
      if (normalized) liveIconNames.add(normalized);
    }
    const nativeStats = { ignoredTypes: [], selectedTypes: [], selectedImages: 0,
      ignoredFrames: 0, iconNames: [], song: songKey };
    const addNativeTasksForSong = (futureIcons) => {
      const iconNames = new Set(liveIconNames);
      for (const name of futureIcons) if (normalizeIcon(name)) iconNames.add(normalizeIcon(name));
      nativeStats.iconNames = Array.from(iconNames);
      const noIcons = String(globalVars.get("OptOptions").getChild(8).getAsString()).toLowerCase() === "noicons";
      for (const definition of objectDefs) {
        if (definition.type !== "Sprite" || String(definition.name).startsWith("FNF_GPUWarm")) continue;
        const type = String(definition.name);
        if (nonNativeActors.has(type) ||
            (optionalSongSpecific.has(type) && !activeSongSpecific.has(type)) ||
            ((type === "BFIcon" || type === "OppIcon") && noIcons)) {
          nativeStats.ignoredTypes.push(type);
          continue;
        }
        let selected = false;
        const isHealthIcon = type === "BFIcon" || type === "OppIcon";
        for (const animation of definition.animations || []) {
          if (isDeathAnimation(animation.name)) continue;
          if (isHealthIcon) {
            const name = String(animation.name || "").toLowerCase();
            const withoutLose = name.replace(/lose$/, "");
            if (!iconNames.has(withoutLose)) { nativeStats.ignoredFrames += 1; continue; }
          }
          for (const direction of animation.directions || []) {
            for (const nativeFrame of direction.sprites || []) {
              const name = String(nativeFrame.image || "");
              if (!name) continue;
              const animationIndex = nativeAnimations.get(name.toLowerCase());
              if (animationIndex === undefined) throw new Error("Sprite bank missing: " + name);
              const wasPresent = taskKeys.has("native:" + name.toLowerCase());
              addTask("native:" + name.toLowerCase(), async () => {
                await imageManager.loadResource(name);
                const texture = imageManager.getPIXITexture(name);
                if (typeof imageManager.getInvalidPIXITexture === "function" &&
                    texture === imageManager.getInvalidPIXITexture()) {
                  throw new Error("Imagem nativa invalida: " + name);
                }
                return texture;
              }, { kind: "native", animation: animationIndex });
              if (!wasPresent) nativeStats.selectedImages += 1;
              selected = true;
            }
          }
        }
        if (selected) nativeStats.selectedTypes.push(type);
      }
      state.selection = nativeStats;
    };

    // Scheduled Change Character event names are known before the music starts.
    // Resource format: [time, "Change Character", side, character, ...].
    const eventArray = globalVars.get("EventsArray");
    const eventLength = eventArray.getChildrenCount ? eventArray.getChildrenCount() : 0;
    const future = new Map();
    for (let i = 0; i + 3 < eventLength; i += 4) {
      const eventName = String(eventArray.getChild(i + 1).getAsString()).trim().toLowerCase();
      if (eventName !== "change character" && eventName !== "changecharacter") continue;
      const rawName = String(eventArray.getChild(i + 3).getAsString()).trim();
      if (!rawName || rawName === "null") continue;
      future.set(rawName.toLowerCase(), rawName);
    }

    if (!scene._fnfGPUWarmCharacterJSON) scene._fnfGPUWarmCharacterJSON = Object.create(null);
    const jsonManager = game.getJsonManager();
    const fetchCharacterJSON = (resourceName) => new Promise((resolve, reject) => {
      try {
        jsonManager.loadJson(resourceName, (error, content) => {
          if (error || !content) reject(error || new Error("JSON vazio: " + resourceName));
          else resolve(content);
        });
      } catch (e) { reject(e); }
    });

    state.futureCharacterCount = future.size;
    const prepare = async () => {
      const futureIconNames = new Set();
      for (const [key, humanName] of future) {
        const charPrefix = "mods/vsgabs/characters/" + key + "/";
        const frameMap = Object.create(null);
        let jsonRes = "";
        for (const [resourceName, res] of resourceByName) {
          if (!resourceName.startsWith(charPrefix)) continue;
          if (resourceName.endsWith(".png")) frameMap[resourceName.slice(charPrefix.length)] = res.file || res.name;
          if (resourceName.endsWith(".json")) jsonRes = res.name;
        }
        if (!jsonRes) {
          throw new Error("Personagem da timeline nao encontrado: " + humanName);
        }
        const cacheKey = "vsgabs/" + key;
        const data = await fetchCharacterJSON(jsonRes);
        scene._fnfGPUWarmCharacterJSON[cacheKey] = data;
        futureIconNames.add(String(data.healthicon || key));
        const richAnims = Object.create(null);
        for (const animation of data.animations || []) {
          if (isDeathAnimation(animation.anim)) continue;
          const animName = String(animation.anim || "").toLowerCase().replace("sing", "");
          richAnims[animName] = (animation.frames || []).slice(0, frameLimit).map(frame => {
            const path = frameMap[String(frame.file || "").toLowerCase()];
            if (!path) throw new Error("Frame da timeline nao encontrado: " + key + "/" + String(frame.file));
            const trim = frame._fnf_trim || null;
            return {
              path, tX: frame.frameX || 0, tY: frame.frameY || 0,
              frameW: frame.frameWidth || frame.width || (trim ? trim.originalWidth : 0),
              frameH: frame.frameHeight || frame.height || (trim ? trim.originalHeight : 0),
              trim, gX: animation.offsets ? animation.offsets[0] : 0,
              gY: animation.offsets ? animation.offsets[1] : 0
            };
          });
        }
        if (richAnims.danceleft && richAnims.danceleft.length > 15 &&
            (!richAnims.danceright || !richAnims.danceright.length)) {
          richAnims.danceright = richAnims.danceleft.slice(15, 30);
          richAnims.danceleft = richAnims.danceleft.slice(0, 15);
        }
        for (const [animName, frames] of Object.entries(richAnims)) {
          for (let i = 0; i < frames.length; i++) {
            addCharacterTexture(frames[i].path, resolution, {
              kind: "character", identity: key, animData: richAnims,
              animName, frameIndex: i, resolution,
              charScale: Number(data.scale) || 1, flipX: Boolean(data.flip_x)
            });
          }
        }
      }

      // Resolve native render tasks only after the current/future song icons are known.
      if (imageManager && typeof imageManager.loadResource === "function") addNativeTasksForSong(futureIconNames);

      // Streaming: keep task metadata only. Load at most one small batch, draw on
      // actual GDevelop sprites, confirm GPU _render, then load the next batch.
      // This avoids keeping hundreds of decoded textures in a separate JS array.
      if (scene._fnfGPUPrewarmSession !== state) return;
      state.queue = tasks;
      state.phase = "drawing";
      state.batchLoading = false;
      reportCount(0, tasks.length);
      loading.getChild("GPUWarmFutureCharacters").setNumber(state.futureCharacterCount);
      state.renderer = game.getRenderer && game.getRenderer().getPIXIRenderer();
      const gc = state.renderer && state.renderer.textureGC;
      if (gc && typeof gc.maxIdle === "number") {
        // Keep early batches resident until every batch has been drawn.
        state.originalGCIdle = gc.maxIdle;
        gc.maxIdle = Math.max(gc.maxIdle, 18000);
        state.keepGC = true;
      }
    };
    prepare().catch(error => {
      if (scene._fnfGPUPrewarmSession !== state) return;
      state.phase = "error";
      const message = String(error && error.message || error);
      state.errors.push(message);
      status("ERRO no pre-warm: " + message, 0);
      loading.getChild("GPUWarmError").setString(message);
      if (state.label) state.label.text = "GPU PRE-WARM FALHOU: " + message;
      console.error("[SundayGPUPrewarm]", error);
    });
    return;
  }
  // Real GDevelop Sprite instances: never enumerate playable BF/notes as warm probes.
  // These object types are isolated, and only the FNF extension owns their lifecycle.
  const __fnfWarmKinds = {
    native: "FNF_GPUWarmNative",
    character: "FNF_GPUWarmCharacter",
    stage: "FNF_GPUWarmStage"
  };
  const __fnfWarmTextureMatches = (actual, expected) => Boolean(
    actual && expected && (actual === expected ||
      (actual.baseTexture && actual.baseTexture === expected.baseTexture &&
       actual.frame && expected.frame &&
       actual.frame.x === expected.frame.x && actual.frame.y === expected.frame.y &&
       actual.frame.width === expected.frame.width && actual.frame.height === expected.frame.height))
  );
  const __fnfGetWarmProbe = (slot, kind) => {
    if (slot.objects[kind]) return slot.objects[kind];
    const obj = scene.createObject(__fnfWarmKinds[kind]);
    if (!obj || !obj.getRendererObject) throw new Error("GDevelop Sprite probe unavailable: " + kind);
    obj._fnfGPUPrewarmProbe = true;
    if (typeof obj.setLayer === "function") obj.setLayer("edge"); // Below opaque PauseMenu/BlackScreen; still renders to GPU.
    if (typeof obj.setZOrder === "function") obj.setZOrder(2147483647); // Restricted to edge layer; cannot appear above BlackScreen.
    if (typeof obj.pauseAnimation === "function") obj.pauseAnimation();
    obj.hide(true);
    const ro = obj.getRendererObject();
    const pixi = ro && typeof ro._render === "function" ? ro :
      (ro && ro.sprite && typeof ro.sprite._render === "function" ? ro.sprite : null);
    if (!pixi) throw new Error("Real GDevelop Sprite has no PIXI._render: " + kind);
    const oldRender = pixi._render;
    pixi._render = function(renderer) {
      const result = oldRender.call(this, renderer);
      const id = slot.id;
      const record = state.queue && state.queue[id];
      if (id >= 0 && slot.kind === kind && obj._fnfGPUWarmActive &&
          obj._fnfWarmAppliedTaskId === id && this.visible && record && __fnfWarmTextureMatches(
            this.texture || (this.sprite && this.sprite.texture),
            record.texture)) {
        state.confirmedRenderIds.add(id);
      }
      return result;
    };
    slot.objects[kind] = obj;
    return obj;
  };
  const __fnfWarmApplyTask = (slot, record, slotIndex) => {
    for (const [kind, obj] of Object.entries(slot.objects)) {
      obj._fnfGPUWarmActive = false;
      obj.hide(true);
    }
    const meta = record.meta;
    const kind = meta.kind;
    const obj = __fnfGetWarmProbe(slot, kind);
    slot.kind = kind;
    slot.id = state.submitted;
    obj._fnfWarmTargetTaskId = slot.id;
    obj._fnfWarmAppliedTaskId = kind === "native" ? slot.id : -1;
    const x = 18 + (slotIndex % 8) * 25;
    const y = 52 + Math.floor(slotIndex / 8) * 25;
    if (kind === "native") {
      if (typeof obj.setAnimation !== "function" ||
          typeof obj.setAnimationFrame !== "function")
        throw new Error("Native animation methods unavailable");
      obj.setAnimation(meta.animation);
      obj.setAnimationFrame(0);
    } else if (kind === "character") {
      obj.modAnimData = meta.animData;
      obj._charSide = "WARM";
      obj._anchorX = 0;
      obj._anchorY = 0;
      obj._charPosX = 0;
      obj._charPosY = 0;
      obj._charScale = meta.charScale || 1;
      obj._charResolutionScale = meta.resolution || 1;
      obj._charFlipX = Boolean(meta.flipX);
      obj._hasDanceIdle = false;
      obj._modCurrentAnim = meta.animName;
      obj._modFrameIndex = meta.frameIndex;
      obj._frameTimer = obj._beatTimer = obj._beatsPassed = 0;
    } else if (kind === "stage") {
      obj._stageBaseX = 0;
      obj._stageBaseY = 0;
      obj._stageVisible = true;
      obj._stageIsHud = true;
      obj._isAnim = false;
      obj._exactImage = meta.path;
      obj._frames = null;
      obj._stageResolutionScale = meta.resolution || 1;
      obj._stageScaleX = meta.scaleX || 1;
      obj._stageScaleY = meta.scaleY || 1;
      obj._stageBlendMode = meta.blendMode || "normal";
      obj._stageTint = meta.tint || "FFFFFF";
      obj._stageOpacity = meta.opacity === undefined ? 1 : meta.opacity;
      obj._stageFlipX = Boolean(meta.flipX);
      obj._stageFlipY = Boolean(meta.flipY);
      obj._stageAngle = meta.angle || 0;
    }
    obj.hide(false);
    obj._fnfGPUWarmActive = true;
    if (typeof obj.setX === "function") obj.setX(x);
    if (typeof obj.setY === "function") obj.setY(y);
    if (typeof obj.setWidth === "function") obj.setWidth(18);
    if (typeof obj.setHeight === "function") obj.setHeight(18);
    return obj;
  };

  if (state.phase === "preparing") {
    if (state.label) state.label.text = "GPU PRE-WARM  ·  Preparando frames (" +
      loading.getChild("GPUWarmDecoded").getAsNumber() + ")...";
    return;
  }
  if (state.phase !== "drawing") return;

  // A previous batch is counted ONLY when Pixi Sprite._render actually
  // visited every texture. Logic updates alone cannot certify a real draw.
  if (state.pending > 0) {
    for (let si = 0; si < state.pending; si++) {
      const slot = state.slots[si];
      const obj = slot && slot.objects[slot.kind];
      if (obj) {
        const x = 18 + (si % 8) * 25;
        const y = 52 + Math.floor(si / 8) * 25;
        if (obj.getX && obj.getX() !== x) obj.setX(x);
        if (obj.getY && obj.getY() !== y) obj.setY(y);
        if (obj.setWidth) obj.setWidth(18);
        if (obj.setHeight) obj.setHeight(18);
      }
    }
    const first = state.submitted - state.pending;
    let fullyRendered = true;
    for (let i = first; i < state.submitted; i++) {
      if (!state.confirmedRenderIds.has(i)) {
        fullyRendered = false;
        break;
      }
    }
    if (!fullyRendered) {
      // Keep the exact same sprites and textures visible until a genuine
      // render pass occurs. Global watchdog still provides fail-open.
      status("Esperando renderizador PIXI confirmar frames", loading.getChild("GPUWarmPercent").getAsNumber());
      return;
    }
    for (let i = first; i < state.submitted; i++) state.confirmedRenderIds.delete(i);
    state.shown += state.pending;
    for (let i = first; i < state.submitted; i++) {
      const task = state.queue[i];
      const base = task && task.texture && task.texture.baseTexture;
      if (base) state.resident.add(base);
      if (task) task.texture = null;
    }
    state.pending = 0;
    loading.getChild("GPUWarmDrawConfirmed").setNumber(state.shown);
    reportCount(state.shown, state.queue.length);
  }
    for (const slot of state.slots) {
      slot.id = -1;
      for (const obj of Object.values(slot.objects)) {
        obj._fnfGPUWarmActive = false;
        obj.hide(true);
      }
    }

  // Bounded decoder. The prewarm must not decode the entire chart's images
  // before the GPU can start drawing (particularly on small Android GPUs).
  if (state.pending === 0 && state.submitted < state.queue.length &&
      !state.queue[state.submitted].texture && !state.batchLoading) {
    const begin = state.submitted;
    const end = Math.min(state.queue.length, begin + state.maxSlots);
    state.batchLoading = true;
    const manager = game.getImageManager && game.getImageManager();
    if (!state.resourceNamesByFile) {
      state.resourceNamesByFile = new Map();
      for (const resource of game.getGameData().resources.resources || []) {
        if (resource.kind === "image" && resource.file) {
          state.resourceNamesByFile.set(String(resource.file).replace(/\\/g, "/").toLowerCase(), resource.name);
        }
      }
    }
    const loadOne = async task => {
      let texture = await task.makeTexture();
      if (!texture || texture.destroyed || !texture.valid) {
        // GDevelop exports rename duplicate filenames. Resolve the canonical
        // ResourceManager name, instead of trusting a stale PIXI URL cache.
        const rawPath = task.meta.kind === "stage" ? task.meta.path :
          (task.key.startsWith("char:") ? task.key.slice(5).split("@")[0] : "");
        const resourceName = state.resourceNamesByFile.get(String(rawPath).replace(/\\/g, "/").toLowerCase());
        if (manager && resourceName) {
          try {
            await manager.loadResource(resourceName);
            const fallback = manager.getPIXITexture(resourceName);
            if (fallback && fallback.valid && !fallback.destroyed) {
              texture = fallback;
              // The animator uses PIXI.Texture.from(exportedFilename).
              // Reuse this exact uploaded texture for that lookup as well.
              if (PIXI.Texture.addToCache && Number(task.meta.resolution || 1) >= .999) {
                try { PIXI.Texture.addToCache(texture, rawPath); } catch (_) {}
              }
            }
          } catch (_) {}
        }
      }
      if (!texture || texture.destroyed || !texture.valid) {
        throw new Error("Textura nao carregou nem via ResourceManager: " + task.key);
      }
      task.texture = texture;
      task.makeTexture = null;
      loading.getChild("GPUWarmDecoded").setNumber(
        loading.getChild("GPUWarmDecoded").getAsNumber() + 1);
    };
    (async () => {
      let cursor = begin;
      const workers = Math.min(state.mobile ? 4 : 8, end - begin);
      await Promise.all(Array.from({ length: workers }, async () => {
        while (cursor < end) {
          if (state.token !== globalVars.get("FNF_Loading").getChild("Token").getAsNumber()) return;
          await loadOne(state.queue[cursor++]);
        }
      }));
      if (scene._fnfGPUPrewarmSession === state) state.batchLoading = false;
    })().catch(error => {
      if (scene._fnfGPUPrewarmSession !== state) return;
      state.errors.push(String(error && error.message || error));
      state.batchLoading = false;
      state.phase = "error";
      console.error("[SundayGPUPrewarm/stream]", error);
    });
    status("Decodificando lote " + begin + "/" + state.queue.length,
      state.queue.length ? Math.round(100 * state.shown / state.queue.length) : 0);
    return;
  }
  if (state.batchLoading) return;

  if (state.shown >= state.queue.length) {
    state.phase = "complete";
    if (state.label) state.label.text = "GPU PRE-WARM  ·  100%";
    complete(true);
    loading.getChild("GPUWarmDegraded").setBoolean(false);
    status("Concluido", 100);
    const {renderer, uid} = state.identity;
    const resident = new Map();
    for (const base of state.resident) {
      const gpu = base._glTextures && base._glTextures[uid];
      if (gpu && base.valid && !base.destroyed) resident.set(base, gpu);
    }
    if (renderer && renderer.context && !renderer.context.isLost &&
        resident.size > 0 && resident.size === state.resident.size) {
      const count = renderer.textureGC.count;
      for (const base of resident.keys()) base.touched = count;
      game._fnfCompletedGPUPrewarm = {
        ...state.identity, resident, lastTouch: count,
        characterJSON: scene._fnfGPUWarmCharacterJSON || Object.create(null),
        optimized: scene._fnfOptimizedTextureCache || {}
      };
    }
    state.resident.clear();
    state.cleanup();
    state.queue.length = 0;
    state.resourceNamesByFile = null;
    return;
  }

  let used = 0;
  let usedBytes = 0;
  while (state.submitted < state.queue.length && used < state.maxSlots) {
    const record = state.queue[state.submitted];
    const texture = record.texture;
    if (!texture) break; // Remaining tasks are decoded in the next bounded batch.
    const w = Number(texture.width) || 1;
    const h = Number(texture.height) || 1;
    const bytes = w * h * 4;
    if (used > 0 && usedBytes + bytes > state.bytesPerTick) break;
    const slot = state.slots[used];
    __fnfWarmApplyTask(slot, record, used);
    state.submitted++;
    used++;
    usedBytes += bytes;
  }
  state.pending = used;
  if (state.label) state.label.text = "GPU PRE-WARM  ·  " + state.shown +
    "/" + state.queue.length + " frames";
})();

} catch (__fnfWarmFatal) {

  // A failed shader, PIXI API mismatch, unloaded image, or unexpected type
  // must not leave Happy stuck on a permanent black screen.
  try {
    const __load = runtimeScene.getVariables().get("FNFLoad");
    const __msg = String(__fnfWarmFatal && __fnfWarmFatal.message || __fnfWarmFatal);
    __load.getChild("GPUWarmError").setString(__msg);
    __load.getChild("GPUWarmStatus").setString("Fallback apos excecao no prewarm");
    if (runtimeScene._fnfGPUPrewarmSession) {
      runtimeScene._fnfGPUPrewarmSession.phase = "degraded";
      try { runtimeScene._fnfGPUPrewarmSession.cleanup(); } catch (_) {}
    }
    __load.getChild("GPUWarmDegraded").setBoolean(true);
    __load.getChild("GPUWarmComplete").setBoolean(true);
    console.error("[SundayGPUPrewarm] fail-open after exception:", __fnfWarmFatal);
  } catch (__) {
    // Fail-safe cannot recover if even the scene variable container is gone.
    console.error("[SundayGPUPrewarm] fatal fallback error", __);
  }
}
};
gdjs.evtsExt__FNF__GPUPrewarmTick.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FNF__GPUPrewarmTick.userFunc0x4cb4d80(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__FNF__GPUPrewarmTick.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FNF"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FNF"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__FNF__GPUPrewarmTick.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__FNF__GPUPrewarmTick.registeredGdjsCallbacks = [];