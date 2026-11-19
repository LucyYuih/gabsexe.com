
gdjs.evtsExt__FNF__FNF_Background_Animator = gdjs.evtsExt__FNF__FNF_Background_Animator || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__FNF__FNF_Background_Animator.FNF_Background_Animator = class FNF_Background_Animator extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__FNF__FNF_Background_Animator.FNF_Background_Animator.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
  }

  // Properties:
  
}

/**
 * Shared data generated from 
 */
gdjs.evtsExt__FNF__FNF_Background_Animator.FNF_Background_Animator.SharedData = class FNF_Background_AnimatorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__FNF__FNF_Background_Animator.FNF_Background_Animator.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._FNF_FNF_Background_AnimatorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._FNF_FNF_Background_AnimatorSharedData = new gdjs.evtsExt__FNF__FNF_Background_Animator.FNF_Background_Animator.SharedData(
      initialData
    );
  }
  return instanceContainer._FNF_FNF_Background_AnimatorSharedData;
}

// Methods:
gdjs.evtsExt__FNF__FNF_Background_Animator.FNF_Background_Animator.prototype.LoadStageContext = {};
gdjs.evtsExt__FNF__FNF_Background_Animator.FNF_Background_Animator.prototype.LoadStageContext.idToCallbackMap = new Map();
gdjs.evtsExt__FNF__FNF_Background_Animator.FNF_Background_Animator.prototype.LoadStageContext.GDObjectObjects1= [];


gdjs.evtsExt__FNF__FNF_Background_Animator.FNF_Background_Animator.prototype.LoadStageContext.userFunc0x7b2cb40 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const objList = eventsFunctionContext.getObjects("Object");
if (objList.length === 0) return;

const baseObjectName = objList[0].getName();
const stageNameRaw = String(eventsFunctionContext.getArgument("StageName") || "").trim();
const stageName = stageNameRaw.toLowerCase();
const rawModName = String(eventsFunctionContext.getArgument("ModName") || "").trim();
const modName = rawModName.toLowerCase();

const globalVars = runtimeScene.getGame().getVariables();
const optOptions = globalVars.get("OptOptions");
const __fnfLoadingRoot = globalVars.get("FNF_Loading");
const __fnfStageLoading = __fnfLoadingRoot.getChild("Stage");
const __fnfLoadingToken = __fnfLoadingRoot.getChild("Token").getAsNumber();
const __fnfStageResolutionScale = __fnfClampResolutionScale(__fnfStageLoading.getChild("ResolutionPercent").getAsNumber());
__fnfStageLoading.getChild("Requested").setBoolean(true);
__fnfStageLoading.getChild("Loaded").setBoolean(false);
let __fnfStageFinished = false;
const __fnfFinishStageLoad = (ok) => {
    if (__fnfStageFinished) return;
    __fnfStageFinished = true;
    if (__fnfLoadingRoot.getChild("Token").getAsNumber() !== __fnfLoadingToken) return;
    if (!ok) __fnfStageLoading.getChild("Error").setString(stageNameRaw || stageName || "stage");
    __fnfStageLoading.getChild("Loaded").setBoolean(true);
};

function __fnfClampResolutionScale(percentValue) {
    const percent = Number(percentValue);
    const clamped = Number.isFinite(percent) ? Math.max(5, Math.min(100, percent)) : 100;
    return clamped / 100;
}
const __fnfGetTextureCache = () => {
    if (!runtimeScene._fnfOptimizedTextureCache) runtimeScene._fnfOptimizedTextureCache = {};
    return runtimeScene._fnfOptimizedTextureCache;
};
const __fnfTextureKey = (path, scale) => `${String(path || "")}@${Math.round(scale * 1000)}`;
const __fnfWaitForTexture = (texture) => {
    if (!texture) return Promise.resolve(null);
    const isReady = () => {
        if (texture.destroyed) return true;
        if (texture.valid === true) return true;
        const base = texture.baseTexture || null;
        if (base && base.valid === true) return true;
        const source = texture.source || (base && base.resource) || null;
        const nativeSource = source && (source.source || (source.resource && source.resource.source));
        return !!(nativeSource && nativeSource.complete && (nativeSource.naturalWidth || nativeSource.width));
    };
    if (isReady()) return Promise.resolve(texture);
    return new Promise((resolve) => {
        let settled = false;
        const finish = () => {
            if (settled) return;
            settled = true;
            resolve(texture);
        };
        const finishIfReady = () => {
            if (isReady()) finish();
        };
        const listenOnce = (target, eventName, callback) => {
            if (target && typeof target.once === "function") {
                try { target.once(eventName, callback); } catch (e) {}
            }
        };
        const base = texture.baseTexture || null;
        const source = texture.source || (base && base.resource) || null;
        listenOnce(base, "loaded", finishIfReady);
        listenOnce(base, "error", finish);
        listenOnce(source, "loaded", finishIfReady);
        listenOnce(source, "update", finishIfReady);
        listenOnce(source, "error", finish);
        const nativeSource = source && (source.source || (source.resource && source.resource.source));
        if (nativeSource && typeof nativeSource.addEventListener === "function") {
            try {
                nativeSource.addEventListener("load", finishIfReady, { once: true });
                nativeSource.addEventListener("error", finish, { once: true });
            } catch (e) {}
        }
        const poll = () => {
            if (settled) return;
            if (isReady()) {
                finish();
                return;
            }
            setTimeout(poll, 16);
        };
        poll();
    });
};
const __fnfPrimeOptimizedTexture = (path, resolutionScale) => {
    const cleanPath = String(path || "");
    const scale = Math.max(0.05, Math.min(1, Number(resolutionScale) || 1));
    if (!cleanPath) return Promise.resolve(null);
    if (scale >= 0.999 || typeof document === "undefined" || typeof Image === "undefined") {
        return __fnfWaitForTexture(PIXI.Texture.from(cleanPath));
    }
    const cache = __fnfGetTextureCache();
    const key = __fnfTextureKey(cleanPath, scale);
    if (cache[key] && cache[key].texture && !cache[key].texture.destroyed) return Promise.resolve(cache[key].texture);
    if (cache[key] && cache[key].promise) return cache[key].promise;
    const promise = new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            try {
                const sourceW = img.naturalWidth || img.width || 1;
                const sourceH = img.naturalHeight || img.height || 1;
                const canvas = document.createElement("canvas");
                canvas.width = Math.max(1, Math.round(sourceW * scale));
                canvas.height = Math.max(1, Math.round(sourceH * scale));
                const ctx = canvas.getContext("2d");
                if (!ctx) {
                    __fnfWaitForTexture(PIXI.Texture.from(cleanPath)).then(resolve);
                    return;
                }
                ctx.imageSmoothingEnabled = true;
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                const texture = PIXI.Texture.from(canvas);
                texture._fnfResolutionScale = scale;
                texture._fnfSourceWidth = sourceW;
                texture._fnfSourceHeight = sourceH;
                cache[key] = { texture };
                resolve(texture);
            } catch (e) {
                __fnfWaitForTexture(PIXI.Texture.from(cleanPath)).then(resolve);
            }
        };
        img.onerror = () => __fnfWaitForTexture(PIXI.Texture.from(cleanPath)).then(resolve);
        img.src = cleanPath;
    });
    cache[key] = { promise };
    return promise;
};


let frameLimit = Infinity;
if (optOptions.getChild(17).getAsString() === "OneFrame") frameLimit = 1;
else if (optOptions.getChild(16).getAsString() === "TwoFrames") frameLimit = 2;

const resources = runtimeScene.getGame().getGameData().resources.resources;
let jsonRes = "", jsonPath = "";
let resourceMap = {};

const normalizePath = value => String(value || "").replace(/\\/g, "/").toLowerCase();
const registerResource = (key, value) => {
    const cleanKey = normalizePath(key);
    if (cleanKey) resourceMap[cleanKey] = String(value || key).replace(/\\/g, "/");
};

for (let i = 0; i < resources.length; i++) {
    const res = resources[i];
    if (!res.name) continue;
    const resNameLower = normalizePath(res.name);
    const cleanPath = String(res.file || res.name).replace(/\\/g, "/");
    registerResource(res.name, cleanPath);
    registerResource(res.file || res.name, cleanPath);
    if (res.kind === "json" && resNameLower.includes(`mods/${modName}/stages/${stageName}.json`)) {
        jsonRes = res.name;
        jsonPath = cleanPath;
    } else if (!jsonRes && res.kind === "json" && resNameLower.includes(`stages/${stageName}.json`)) {
        jsonRes = res.name;
        jsonPath = cleanPath;
    }
}

const fallbackStagePaths = [
    `mods/${rawModName}/Stages/${stageNameRaw}.json`,
    `mods/${rawModName}/stages/${stageNameRaw}.json`,
    `mods/${rawModName}/processed_stages/Stages/${stageNameRaw}.json`,
    `mods/${rawModName}/processed_stages/stages/${stageNameRaw}.json`,
    `mods/${modName}/Stages/${stageName}.json`,
    `mods/${modName}/stages/${stageName}.json`,
    `mods/${modName}/processed_stages/Stages/${stageName}.json`,
    `mods/${modName}/processed_stages/stages/${stageName}.json`
].filter(path => path && !path.includes("//"));

if (!jsonPath && fallbackStagePaths.length > 0) jsonPath = fallbackStagePaths[0];
if (!jsonRes && !jsonPath) {
    __fnfFinishStageLoad(false);
    return;
}

const stageZBase = 10;
const defaultPlayerState = {
    boyfriend: { key: "BF", z: 36, visible: true, layer: "" },
    opponent: { key: "Dad", z: 37, visible: true, layer: "" },
    girlfriend: { key: "GF", z: 20, visible: true, layer: "" }
};

const finiteNumber = (value, fallback) => {
    const parsed = parseFloat(value);
    return Number.isFinite(parsed) ? parsed : fallback;
};
const sceneZ = (value, fallbackIndex) => stageZBase + finiteNumber(value, fallbackIndex);
const normalizePlayerName = value => {
    const text = String(value || "").toLowerCase();
    if (text === "bf" || text === "boyfriend" || text === "boyfriendgroup") return "boyfriend";
    if (text === "dad" || text === "opponent" || text === "dadgroup") return "opponent";
    if (text === "gf" || text === "girlfriend" || text === "gfgroup") return "girlfriend";
    return "";
};
const setGlobalNumber = (name, value) => globalVars.get(name).setNumber(finiteNumber(value, 0));
const setGlobalString = (name, value) => globalVars.get(name).setString(String(value || ""));
const setPlayerState = (player, options) => {
    const base = defaultPlayerState[player];
    if (!base) return;
    const z = options && options.z !== undefined ? options.z : base.z;
    const visible = options && options.visible !== undefined ? options.visible !== false : base.visible;
    const layer = options && options.layer !== undefined ? options.layer : base.layer;
    setGlobalNumber(`Stage_${base.key}_Z`, z);
    setGlobalNumber(`Stage_${base.key}_Visible`, visible ? 1 : 0);
    setGlobalString(`Stage_${base.key}_Layer`, layer || "");
};
const cameraKind = camera => {
    const cam = String(camera || "").toLowerCase();
    if (cam.includes("hud")) return "hud";
    if (cam.includes("other")) return "other";
    if (cam.includes("ui")) return "hud";
    return "game";
};
const layerFromCamera = camera => {
    const kind = cameraKind(camera);
    if (kind === "hud" || kind === "other") return "ui";
    return "";
};
const setObjectLayerIfPossible = (object, layerName) => {
    if (!layerName || typeof object.setLayer !== "function") return;
    try {
        if (typeof runtimeScene.hasLayer === "function" && !runtimeScene.hasLayer(layerName)) return;
        object.setLayer(layerName);
    } catch (e) {}
};
const cleanImageName = image => String(image || "").replace(/\\/g, "/").replace(/^images\//i, "").replace(/^stages\//i, "").replace(/\.png$/i, "");
const resolveStageImage = image => {
    const raw = String(image || "").replace(/\\/g, "/").replace(/\.png$/i, "");
    const clean = cleanImageName(raw);
    const candidates = [
        `mods/${modName}/images/${raw}.png`,
        `mods/${modName}/images/stages/${clean}.png`,
        `mods/${modName}/stages/${clean}.png`,
        `mods/${modName}/${raw}.png`,
        raw.endsWith(".png") ? raw : `${raw}.png`
    ].map(normalizePath);
    for (let i = 0; i < candidates.length; i++) {
        if (resourceMap[candidates[i]]) return resourceMap[candidates[i]];
    }
    return candidates[1] || "";
};
const spriteFromObject = obj => {
    const scale = Array.isArray(obj.scale) ? obj.scale : [1, 1];
    const scroll = Array.isArray(obj.scroll) ? obj.scroll : [1, 1];
    return {
        tag: obj.name || obj.tag || obj.image || "stageSprite",
        image: obj.image || obj.name || "",
        x: obj.x || 0,
        y: obj.y || 0,
        scaleX: scale[0] !== undefined ? scale[0] : 1,
        scaleY: scale[1] !== undefined ? scale[1] : 1,
        scrollX: scroll[0] !== undefined ? scroll[0] : 1,
        scrollY: scroll[1] !== undefined ? scroll[1] : 1,
        alpha: obj.alpha !== undefined ? obj.alpha : 1,
        visible: obj.visible !== false,
        angle: obj.angle || 0,
        flipX: obj.flipX === true,
        flipY: obj.flipY === true,
        color: obj.color || "FFFFFF",
        blendMode: obj.blendMode || obj.blend || "normal",
        camera: obj.camera || "game",
        animated: false
    };
};

const buildStage = (stageData) => {
    if (!stageData) {
        __fnfFinishStageLoad(false);
        return;
    }
    const __fnfStageTexturePromises = [];
    runtimeScene.getObjects(baseObjectName).forEach(stageObj => {
        if (stageObj._isFnfGeneratedStageSprite) stageObj.deleteFromScene();
        else if (stageObj._stageBaseX === undefined) stageObj.hide(true);
    });

    const stageZoom = stageData.zoom !== undefined ? parseFloat(stageData.zoom) : (stageData.defaultZoom !== undefined ? parseFloat(stageData.defaultZoom) : 1.0);
    globalVars.get("Stage_Zoom").setNumber(Number.isFinite(stageZoom) ? stageZoom : 1.0);

    const cameraData = stageData.camera || {};
    const cameraSpeed = cameraData.speed !== undefined ? cameraData.speed : (stageData.camera_speed !== undefined ? stageData.camera_speed : 1);
    globalVars.get("Stage_CameraSpeed").setNumber(finiteNumber(cameraSpeed, 1));
    const setStageCameraOffset = (key, raw) => {
        const pair = Array.isArray(raw) ? raw : [0, 0];
        globalVars.get(`Stage_${key}_CameraOffsetX`).setNumber(finiteNumber(pair[0], 0));
        globalVars.get(`Stage_${key}_CameraOffsetY`).setNumber(finiteNumber(pair[1], 0));
    };
    setStageCameraOffset("BF", cameraData.boyfriend || cameraData.bf || stageData.camera_boyfriend || [0, 0]);
    setStageCameraOffset("Dad", cameraData.opponent || cameraData.dad || stageData.camera_opponent || [0, 0]);
    setStageCameraOffset("GF", cameraData.girlfriend || cameraData.gf || stageData.camera_girlfriend || [0, 0]);


    const positions = Object.assign({}, stageData.positions || {});
    if (!positions.boyfriend && stageData.boyfriend) positions.boyfriend = stageData.boyfriend;
    if (!positions.opponent && stageData.opponent) positions.opponent = stageData.opponent;
    if (!positions.girlfriend && stageData.girlfriend) positions.girlfriend = stageData.girlfriend;
    if (positions.boyfriend) {
        globalVars.get("Stage_BF_X").setNumber(finiteNumber(positions.boyfriend[0], 0));
        globalVars.get("Stage_BF_Y").setNumber(finiteNumber(positions.boyfriend[1], 0));
    }
    if (positions.opponent) {
        globalVars.get("Stage_Dad_X").setNumber(finiteNumber(positions.opponent[0], 0));
        globalVars.get("Stage_Dad_Y").setNumber(finiteNumber(positions.opponent[1], 0));
    }
    if (positions.girlfriend) {
        globalVars.get("Stage_GF_X").setNumber(finiteNumber(positions.girlfriend[0], 0));
        globalVars.get("Stage_GF_Y").setNumber(finiteNumber(positions.girlfriend[1], 0));
    }

    setPlayerState("girlfriend", defaultPlayerState.girlfriend);
    setPlayerState("opponent", defaultPlayerState.opponent);
    setPlayerState("boyfriend", defaultPlayerState.boyfriend);

    const drawOrder = Array.isArray(stageData.drawOrder) ? stageData.drawOrder.slice() : [];
    if (drawOrder.length === 0 && Array.isArray(stageData.objects)) {
        stageData.objects.forEach(obj => {
            if (!obj || typeof obj !== "object") return;
            if (obj.type === "sprite") drawOrder.push({ type: "sprite", tag: obj.name || obj.tag || obj.image });
            else {
                const player = normalizePlayerName(obj.type);
                if (player) drawOrder.push({ type: "player", player });
            }
        });
    }

    const spriteOrderByTag = {};
    drawOrder.forEach((entry, index) => {
        if (!entry) return;
        if (entry.type === "sprite") {
            const tag = String(entry.tag || entry.id || "");
            if (tag) spriteOrderByTag[tag] = index;
        } else if (entry.type === "player") {
            const player = normalizePlayerName(entry.player || entry.id || entry.group);
            if (player) setPlayerState(player, { z: sceneZ(entry.zOrder !== undefined ? entry.zOrder : index, index), visible: entry.visible !== false, layer: entry.layer || "" });
        }
    });

    if (stageData.playerLayers) {
        Object.keys(stageData.playerLayers).forEach(playerName => {
            const player = normalizePlayerName(playerName);
            const layerData = stageData.playerLayers[playerName] || {};
            if (!player) return;
            const fallbackIndex = drawOrder.findIndex(entry => normalizePlayerName(entry.player || entry.id || entry.group) === player);
            setPlayerState(player, {
                z: sceneZ(layerData.zOrder !== undefined ? layerData.zOrder : fallbackIndex, fallbackIndex >= 0 ? fallbackIndex : 0),
                visible: layerData.visible !== false,
                layer: layerData.layer || ""
            });
        });
    }

    if (stageData.hide_girlfriend === true) {
        setPlayerState("girlfriend", { z: globalVars.get("Stage_GF_Z").getAsNumber(), visible: false, layer: globalVars.get("Stage_GF_Layer").getAsString() });
    }
    globalVars.get("CurrentLoadedStage").setString(stageNameRaw || stageName);

    let sprites = Array.isArray(stageData.sprites) ? stageData.sprites.slice() : [];
    if (sprites.length === 0 && Array.isArray(stageData.objects)) {
        sprites = stageData.objects.filter(obj => obj && obj.type === "sprite").map(spriteFromObject);
    }
    if (sprites.length === 0) {
        __fnfFinishStageLoad(true);
        return;
    }

    sprites.forEach((spr, index) => {
        if (!spr) return;
        let newStageObj = runtimeScene.createObject(baseObjectName);
        if (!newStageObj) return;
        const tag = String(spr.tag || spr.name || spr.image || `stageSprite${index}`);
        const orderIndex = spriteOrderByTag[tag] !== undefined ? spriteOrderByTag[tag] : (spr.zOrder !== undefined ? spr.zOrder : index);
        const spriteLayer = layerFromCamera(spr.camera || spr.layerName || spr.gdevelopLayer);
        const spriteCameraKind = cameraKind(spr.camera || spr.layerName || spr.gdevelopLayer);
        const isHudSprite = spriteCameraKind === "hud" || spriteCameraKind === "other" || spriteLayer === "ui";
        const alpha = spr.alpha !== undefined ? Math.max(0, Math.min(1, finiteNumber(spr.alpha, 1))) : 1;

        newStageObj._isFnfGeneratedStageSprite = true;
        newStageObj._stageTag = tag;
        newStageObj._stageCamera = spriteCameraKind;
        newStageObj._stageIsHud = isHudSprite;
        newStageObj._stageHudFront = spr.front === true || String(spr.layer || "").toLowerCase() === "foreground";
        newStageObj.pauseAnimation();
        newStageObj._stageBaseX = finiteNumber(spr.x, 0);
        newStageObj._stageBaseY = finiteNumber(spr.y, 0);
        newStageObj._stageScaleX = finiteNumber(spr.scaleX, 1);
        newStageObj._stageScaleY = finiteNumber(spr.scaleY, 1);
        newStageObj._stageResolutionScale = __fnfStageResolutionScale;
        newStageObj._stageFlipX = spr.flipX === true;
        newStageObj._stageFlipY = spr.flipY === true;
        newStageObj._stageAngle = finiteNumber(spr.angle, 0);
        newStageObj._stageOpacity = alpha;
        newStageObj._stageVisible = spr.visible !== false;
        newStageObj._stageBlendMode = spr.blendMode || spr.blend || "normal";
        newStageObj._stageTint = spr.color || spr.tint || "FFFFFF";

        setObjectLayerIfPossible(newStageObj, spriteLayer);
        newStageObj.hide(!newStageObj._stageVisible);
        newStageObj.setOpacity(Math.round(alpha * 255));
        if (isHudSprite) {
            const hudZBase = newStageObj._stageHudFront ? 1000 : -1000;
            newStageObj.setZOrder(hudZBase + finiteNumber(orderIndex, index));
        } else {
            newStageObj.setZOrder(sceneZ(orderIndex, index));
        }
        if (typeof newStageObj.setAngle === "function") newStageObj.setAngle(newStageObj._stageAngle);
        newStageObj.getVariables().get("ParallaxX").setNumber(finiteNumber(spr.scrollX, 1));
        newStageObj.getVariables().get("ParallaxY").setNumber(finiteNumber(spr.scrollY, 1));

        if (spr.animated && spr.frames && spr.frames.length > 0) {
            newStageObj._isAnim = true;
            let framesArr = spr.frames.slice();
            if (framesArr.length > frameLimit) framesArr = framesArr.slice(0, frameLimit);
            framesArr.forEach(fr => {
                const frameImage = String(fr.image || "").replace(/\\/g, "/");
                let expectedLower = normalizePath(`mods/${modName}/images/${frameImage}`);
                fr.exactImage = resourceMap[expectedLower] || resolveStageImage(frameImage);
                if (fr.exactImage) __fnfStageTexturePromises.push(__fnfPrimeOptimizedTexture(fr.exactImage, __fnfStageResolutionScale));
            });
            newStageObj._frames = framesArr;
            newStageObj._frameIdx = 0;
            newStageObj._timer = 0;
        } else {
            newStageObj._isAnim = false;
            newStageObj._exactImage = resolveStageImage(spr.image || spr.name || tag);
            if (newStageObj._exactImage) __fnfStageTexturePromises.push(__fnfPrimeOptimizedTexture(newStageObj._exactImage, __fnfStageResolutionScale));
        }
    });
    __fnfStageLoading.getChild("TextureCount").setNumber(__fnfStageTexturePromises.length);
    Promise.all(__fnfStageTexturePromises).then(() => __fnfFinishStageLoad(true)).catch(() => __fnfFinishStageLoad(true));
};

const requestStageJson = (path) => {
    if (!path) {
        __fnfFinishStageLoad(false);
        return;
    }
    try {
        let xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/json");
        xhr.open("GET", path, true);
        xhr.onload = () => {
            if (xhr.status === 200 || xhr.status === 0) {
                try { buildStage(JSON.parse(xhr.responseText)); } catch (e) { __fnfFinishStageLoad(false); }
            } else __fnfFinishStageLoad(false);
        };
        xhr.onerror = () => __fnfFinishStageLoad(false);
        xhr.send();
    } catch(e) { __fnfFinishStageLoad(false); }
};

if (jsonRes) {
    runtimeScene.getGame().getJsonManager().loadJson(jsonRes, (error, data) => {
        if (!error && data) return buildStage(data);
        requestStageJson(jsonPath);
    });
} else {
    requestStageJson(jsonPath);
}
};
gdjs.evtsExt__FNF__FNF_Background_Animator.FNF_Background_Animator.prototype.LoadStageContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FNF__FNF_Background_Animator.FNF_Background_Animator.prototype.LoadStageContext.userFunc0x7b2cb40(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__FNF__FNF_Background_Animator.FNF_Background_Animator.prototype.LoadStage = function(ModName, StageName, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "ModName") return ModName;
if (argName === "StageName") return StageName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FNF__FNF_Background_Animator.FNF_Background_Animator.prototype.LoadStageContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__FNF__FNF_Background_Animator.FNF_Background_Animator.prototype.LoadStageContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FNF__FNF_Background_Animator.FNF_Background_Animator.prototype.LoadStageContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__FNF__FNF_Background_Animator.FNF_Background_Animator.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__FNF__FNF_Background_Animator.FNF_Background_Animator.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__FNF__FNF_Background_Animator.FNF_Background_Animator.prototype.doStepPreEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__FNF__FNF_Background_Animator.FNF_Background_Animator.prototype.doStepPreEventsContext.userFunc0x7b41fa8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const obj = eventsFunctionContext.getObjects("Object")[0];
if (!obj || obj._stageBaseX === undefined) return;
if (obj._stageVisible === false) {
    obj.hide(true);
    return;
}
obj.hide(false);

const dt = runtimeScene.getTimeManager().getElapsedTime();

const __fnfClampResolutionScale = (scaleValue) => {
    const scale = Number(scaleValue);
    return Number.isFinite(scale) ? Math.max(0.05, Math.min(1, scale)) : 1;
};
const __fnfGetOptimizedTexture = (path, resolutionScale) => {
    const cleanPath = String(path || "");
    const scale = __fnfClampResolutionScale(resolutionScale);
    if (!cleanPath || scale >= 0.999) return PIXI.Texture.from(cleanPath);
    const cache = runtimeScene._fnfOptimizedTextureCache || {};
    const key = `${cleanPath}@${Math.round(scale * 1000)}`;
    const entry = cache[key];
    if (entry && entry.texture && !entry.texture.destroyed) return entry.texture;
    return PIXI.Texture.from(cleanPath);
};

let currentImagePath = "";
let tX = 0, tY = 0;
if (obj._isAnim && obj._frames) {
    const msPerFrame = 1000 / 24;
    const maxFrames = obj._frames.length;
    obj._timer += dt;
    if (obj._timer >= msPerFrame) {
        obj._frameIdx += Math.floor(obj._timer / msPerFrame);
        obj._timer %= msPerFrame;
        if (obj._frameIdx >= maxFrames) obj._frameIdx = 0;
    }
    const currentFrame = obj._frames[Math.floor(obj._frameIdx)];
    currentImagePath = currentFrame.exactImage;
    tX = currentFrame.tX || 0;
    tY = currentFrame.tY || 0;
} else if (!obj._isAnim && obj._exactImage) {
    currentImagePath = obj._exactImage;
} else return;

const pixiTexture = __fnfGetOptimizedTexture(currentImagePath, obj._stageResolutionScale || 1);
const applyRendererVisuals = (renderer) => {
    if (!renderer) return;
    const mode = String(obj._stageBlendMode || "normal").toLowerCase();
    const blendModes = PIXI.BLEND_MODES || {};
    const blendMap = { normal: blendModes.NORMAL, add: blendModes.ADD, additive: blendModes.ADD, multiply: blendModes.MULTIPLY, screen: blendModes.SCREEN, subtract: blendModes.SUBTRACT };
    if (blendMap[mode] !== undefined) renderer.blendMode = blendMap[mode];
    const color = String(obj._stageTint || "FFFFFF").replace("#", "");
    const tint = parseInt(color, 16);
    if (Number.isFinite(tint) && renderer.tint !== undefined) renderer.tint = tint;
    if (renderer.alpha !== undefined) renderer.alpha = obj._stageOpacity !== undefined ? obj._stageOpacity : 1;
    if (renderer.children && renderer.children.length > 0) renderer.children.forEach(child => applyRendererVisuals(child));
};

if (pixiTexture && pixiTexture.valid) {
    const ro = obj.getRendererObject();
    if (ro) {
        if (ro.texture !== undefined) ro.texture = pixiTexture;
        if (obj._fnfGPUPrewarmProbe === true) obj._fnfWarmAppliedTaskId = obj._fnfWarmTargetTaskId;
        else if (ro.sprite) ro.sprite.texture = pixiTexture;
        else if (ro._sprite) ro._sprite.texture = pixiTexture;
        else if (ro.children && ro.children.length > 0 && ro.children[0].texture !== undefined) ro.children[0].texture = pixiTexture;
        if (obj._customUnscaledWidth !== pixiTexture.width) {
            obj.getUnscaledWidth = function() { return pixiTexture.width; };
            obj.getUnscaledHeight = function() { return pixiTexture.height; };
            obj._customUnscaledWidth = pixiTexture.width;
        }
        const scaleX = obj._stageScaleX !== undefined ? obj._stageScaleX : 1;
        const scaleY = obj._stageScaleY !== undefined ? obj._stageScaleY : 1;
        const isHudSprite = obj._stageIsHud === true || obj._stageCamera === "hud" || obj._stageCamera === "other";
        const gameW = runtimeScene.getGame().getGameResolutionWidth();
        const gameH = runtimeScene.getGame().getGameResolutionHeight();
        const hudScaleX = isHudSprite ? gameW / 1280 : 1;
        const hudScaleY = isHudSprite ? gameH / 720 : 1;
        const textureResolutionScale = pixiTexture._fnfResolutionScale || obj._stageResolutionScale || 1;
        const renderScaleX = (scaleX * hudScaleX) / Math.max(0.05, textureResolutionScale);
        const renderScaleY = (scaleY * hudScaleY) / Math.max(0.05, textureResolutionScale);
        const sourceRenderScaleX = scaleX * hudScaleX;
        const sourceRenderScaleY = scaleY * hudScaleY;
        const tW = pixiTexture.width * Math.abs(renderScaleX);
        const tH = pixiTexture.height * Math.abs(renderScaleY);
        if (obj.getWidth() !== tW) obj.setWidth(tW);
        if (obj.getHeight() !== tH) obj.setHeight(tH);
        if (typeof obj.flipX === "function") obj.flipX(obj._stageFlipX === true);
        if (typeof obj.flipY === "function") obj.flipY(obj._stageFlipY === true);
        if (typeof obj.setAngle === "function" && obj._stageAngle !== undefined && obj.getAngle && obj.getAngle() !== obj._stageAngle) obj.setAngle(obj._stageAngle);
        if (obj._stageOpacity !== undefined) obj.setOpacity(Math.round(Math.max(0, Math.min(1, obj._stageOpacity)) * 255));
        applyRendererVisuals(ro);

        if (isHudSprite) {
            const fX = (obj._stageBaseX * hudScaleX) - (tX * sourceRenderScaleX);
            const fY = (obj._stageBaseY * hudScaleY) - (tY * sourceRenderScaleY);
            if (obj.getX() !== fX) obj.setX(fX);
            if (obj.getY() !== fY) obj.setY(fY);
            return;
        }

        const layerName = obj.getLayer();
        const layer = runtimeScene.getLayer(layerName);
        const camX = layer.getCameraX();
        const camY = layer.getCameraY();
        const winW = gameW;
        const winH = gameH;
        const camLeft = camX - (winW / 2);
        const camTop = camY - (winH / 2);
        const prlxX = obj.getVariables().get("ParallaxX").getAsNumber();
        const prlxY = obj.getVariables().get("ParallaxY").getAsNumber();
        const fX = obj._stageBaseX + (camLeft * (1 - prlxX)) - (tX * scaleX);
        const fY = obj._stageBaseY + (camTop * (1 - prlxY)) - (tY * scaleY);
        if (obj.getX() !== fX) obj.setX(fX);
        if (obj.getY() !== fY) obj.setY(fY);
    }
}
};
gdjs.evtsExt__FNF__FNF_Background_Animator.FNF_Background_Animator.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FNF__FNF_Background_Animator.FNF_Background_Animator.prototype.doStepPreEventsContext.userFunc0x7b41fa8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__FNF__FNF_Background_Animator.FNF_Background_Animator.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FNF__FNF_Background_Animator.FNF_Background_Animator.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__FNF__FNF_Background_Animator.FNF_Background_Animator.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FNF__FNF_Background_Animator.FNF_Background_Animator.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;


return;
}


gdjs.registerBehavior("FNF::FNF_Background_Animator", gdjs.evtsExt__FNF__FNF_Background_Animator.FNF_Background_Animator);
