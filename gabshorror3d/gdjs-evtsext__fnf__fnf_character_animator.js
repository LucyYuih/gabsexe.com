
gdjs.evtsExt__FNF__FNF_Character_Animator = gdjs.evtsExt__FNF__FNF_Character_Animator || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator = class FNF_Character_Animator extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.getSharedData(
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
gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.SharedData = class FNF_Character_AnimatorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._FNF_FNF_Character_AnimatorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._FNF_FNF_Character_AnimatorSharedData = new gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.SharedData(
      initialData
    );
  }
  return instanceContainer._FNF_FNF_Character_AnimatorSharedData;
}

// Methods:
gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.LoadCharacterContext = {};
gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.LoadCharacterContext.idToCallbackMap = new Map();
gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.LoadCharacterContext.GDObjectObjects1= [];


gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.LoadCharacterContext.userFunc0x305fe80 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const globalVars = runtimeScene.getGame().getVariables();
const optOptions = globalVars.get("OptOptions");
const obj = eventsFunctionContext.getObjects("Object")[0];

if (!obj) return;

const __fnfLoadingRoot = globalVars.get("FNF_Loading");
const __fnfCharacterLoading = __fnfLoadingRoot.getChild("Characters");
const __fnfLoadingToken = __fnfLoadingRoot.getChild("Token").getAsNumber();
const __fnfCharacterResolutionScale = __fnfClampResolutionScale(__fnfCharacterLoading.getChild("ResolutionPercent").getAsNumber());
__fnfCharacterLoading.getChild("Requested").setBoolean(true);
__fnfCharacterLoading.getChild("Loaded").setBoolean(false);
__fnfCharacterLoading.getChild("Started").setNumber(__fnfCharacterLoading.getChild("Started").getAsNumber() + 1);
let __fnfCharacterFinished = false;
const __fnfFinishCharacterLoad = (ok) => {
    if (__fnfCharacterFinished) return;
    __fnfCharacterFinished = true;
    if (__fnfLoadingRoot.getChild("Token").getAsNumber() !== __fnfLoadingToken) return;
    const done = __fnfCharacterLoading.getChild("Done").getAsNumber() + 1;
    __fnfCharacterLoading.getChild("Done").setNumber(done);
    if (!ok) __fnfCharacterLoading.getChild("Error").setString(String(eventsFunctionContext.getArgument("CharName") || "character"));
    if (done >= Math.max(1, __fnfCharacterLoading.getChild("Started").getAsNumber())) __fnfCharacterLoading.getChild("Loaded").setBoolean(true);
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
// Make the same downscaled texture cache accessible to the loading GPU prewarmer.
runtimeScene._fnfPrimeCharacterTexture = __fnfPrimeOptimizedTexture;

let frameLimit = Infinity;
if (optOptions.getChild(17).getAsString() === "OneFrame") frameLimit = 1;
else if (optOptions.getChild(16).getAsString() === "TwoFrames") frameLimit = 2;

const modName = eventsFunctionContext.getArgument("ModName");
// Legacy charts may have only six metadata fields (no GF name).
// Keep every explicit modern character name untouched.
const __fnfRequestedCharacterName = String(eventsFunctionContext.getArgument("CharName") || "").trim();
const __fnfSideVar = obj.getVariables().has("Side") ? obj.getVariables().get("Side").getAsString().toUpperCase().trim() : "";
const __fnfObjectName = String(obj.getName() || "").toLowerCase();
const charName = __fnfRequestedCharacterName ||
    ((__fnfSideVar === "GF" || __fnfObjectName === "gf" || __fnfObjectName === "girlfriend") ? "gf" : "");
const resources = runtimeScene.getGame().getGameData().resources.resources;
const basePath = `mods/${modName}/characters/${charName}/`.toLowerCase();

let fileMap = {}, jsonRes = "", jsonPath = "";
for (let i = 0, len = resources.length; i < len; i++) {
    const res = resources[i];
    const resName = res.name.toLowerCase().replace(/\\/g, "/");
    if (resName.includes(basePath)) {
        if (resName.endsWith(".json")) {
            jsonRes = res.name;
            jsonPath = res.file || res.name;
        } else if (resName.endsWith(".png")) {
            fileMap[resName.split("/").pop()] = res.file || res.name;
        }
    }
}

const detectCharSide = () => {
    let charSide = "";
    if (obj.getVariables().has("Side")) {
        charSide = obj.getVariables().get("Side").getAsString().toUpperCase().trim();
    }
    if (charSide === "") {
        const lowerName = String(charName || obj.getName()).toLowerCase();
        if (lowerName.includes("gf") || lowerName.includes("girlfriend")) charSide = "GF";
        else if (lowerName.includes("bf") || lowerName.includes("boyfriend")) charSide = "BF";
        else charSide = "DAD";
    }
    if (charSide === "OPPONENT") charSide = "DAD";
    return charSide;
};
const normalizeHealthIconName = (raw) => {
    let key = String(raw || "").replace(/\\/g, "/").trim();
    if (!key) return "";
    key = key.replace(/\.png$/i, "");
    const lower = key.toLowerCase();
    if (lower === "bf" || lower === "boyfriend") return "bf";
    if (lower === "bf-old" || lower === "bfold" || lower.endsWith("/bfold")) return "bfold";
    if (lower === "etherold-reanimated" || lower === "etherold" || lower.endsWith("/etherold")) return "etherold";
    if (lower === "nikca") return "nikca";
    if (lower === "vane") return "vane";
    if (lower === "ether") return "ether";
    return lower.split("/").pop().replace(/^icon-/, "");
};
const applyHealthIconFromCharacter = (charSide, data) => {
    if (charSide !== "BF" && charSide !== "DAD") return;
    const iconName = normalizeHealthIconName(data && data.healthicon ? data.healthicon : charName);
    if (!iconName) return;
    globalVars.get("Icons").getChild(charSide === "BF" ? 0 : 1).setString(iconName);
};
const stageKeyForSide = (charSide) => charSide === "BF" ? "BF" : (charSide === "GF" ? "GF" : "Dad");
const applyStageRenderState = (charSide) => {
    const stageKey = stageKeyForSide(charSide);
    const visibleName = `Stage_${stageKey}_Visible`;
    const zName = `Stage_${stageKey}_Z`;
    const layerName = `Stage_${stageKey}_Layer`;
    if (globalVars.has(visibleName) && globalVars.get(visibleName).getAsNumber() <= 0) {
        obj.hide(true);
        return false;
    }
    obj.hide(false);
    if (globalVars.has(zName)) {
        const z = globalVars.get(zName).getAsNumber();
        if (Number.isFinite(z)) obj.setZOrder(z);
    }
    if (globalVars.has(layerName) && typeof obj.setLayer === "function") {
        const targetLayer = globalVars.get(layerName).getAsString();
        if (targetLayer) {
            try {
                if (typeof runtimeScene.hasLayer !== "function" || runtimeScene.hasLayer(targetLayer)) obj.setLayer(targetLayer);
            } catch (e) {}
        }
    }
    return true;
};

const processData = (data) => {
    if (!data || !data.animations) return Promise.resolve(false);
    const __fnfCharacterTexturePromises = [];
    let richAnim = {};
    let charSide = detectCharSide();
    obj._charSide = charSide;
    applyHealthIconFromCharacter(charSide, data);
    if (!applyStageRenderState(charSide)) return Promise.resolve(true);

    let stageX = 0, stageY = 0;
    if (charSide === "BF") {
        stageX = globalVars.get("Stage_BF_X").getAsNumber();
        stageY = globalVars.get("Stage_BF_Y").getAsNumber();
    } else if (charSide === "DAD") {
        stageX = globalVars.get("Stage_Dad_X").getAsNumber();
        stageY = globalVars.get("Stage_Dad_Y").getAsNumber();
    } else if (charSide === "GF") {
        stageX = globalVars.get("Stage_GF_X").getAsNumber();
        stageY = globalVars.get("Stage_GF_Y").getAsNumber();
    }
    obj._anchorX = stageX;
    obj._anchorY = stageY;

    let jsonFlipX = data.flip_x === true;
    if (charSide === "BF") jsonFlipX = !jsonFlipX;
    obj._charFlipX = jsonFlipX;
    obj._charScale = data.scale !== undefined ? parseFloat(data.scale) : 1.0;
    obj._charResolutionScale = __fnfCharacterResolutionScale;
    const healthColorArray = Array.isArray(data.healthbar_colors) ? data.healthbar_colors : [255, 255, 255];
    const healthColorChannel = (index) => {
        const raw = Number(healthColorArray[index]);
        return Number.isFinite(raw) ? Math.max(0, Math.min(255, Math.round(raw))) : 255;
    };
    const healthR = healthColorChannel(0);
    const healthG = healthColorChannel(1);
    const healthB = healthColorChannel(2);
    obj._healthColor = (healthR << 16) + (healthG << 8) + healthB;
    const healthHud = runtimeScene.getVariables().get("PsychHUD").getChild("HealthBar");
    const healthSide = charSide === "BF" ? healthHud.getChild("BF") : (charSide === "DAD" ? healthHud.getChild("Dad") : null);
    if (healthSide) {
        healthSide.getChild("R").setNumber(healthR);
        healthSide.getChild("G").setNumber(healthG);
        healthSide.getChild("B").setNumber(healthB);
        healthSide.getChild("Color").setString(`${healthR};${healthG};${healthB}`);
        healthHud.getChild("Dirty").setBoolean(true);
    }
    let pos = data.position || [0, 0];
    obj._charPosX = parseFloat(pos[0]) || 0;
    obj._charPosY = parseFloat(pos[1]) || 0;
    let camPos = data.camera_position || [0, 0];
    obj._camOffsetX = parseFloat(camPos[0]) || 0;
    obj._camOffsetY = parseFloat(camPos[1]) || 0;

    data.animations.forEach(anim => {
        let key = anim.anim.toLowerCase().replace("sing", "");
        let gX = anim.offsets ? anim.offsets[0] : 0;
        let gY = anim.offsets ? anim.offsets[1] : 0;
        let framesArr = anim.frames || [];
        if (framesArr.length > frameLimit) framesArr = framesArr.slice(0, frameLimit);
        richAnim[key] = framesArr.map(fr => {
            let p = fileMap[fr.file.toLowerCase()] || "";
            if (p !== "") __fnfCharacterTexturePromises.push(__fnfPrimeOptimizedTexture(p, __fnfCharacterResolutionScale));
            const trim = fr._fnf_trim || null;
            return { path: p, tX: fr.frameX || 0, tY: fr.frameY || 0,
                frameW: fr.frameWidth || fr.width || (trim ? trim.originalWidth : 0),
                frameH: fr.frameHeight || fr.height || (trim ? trim.originalHeight : 0),
                trim: trim, gX: gX, gY: gY };
        });
    });

    if (richAnim["danceleft"] && richAnim["danceleft"].length > 15) {
        if (!richAnim["danceright"] || richAnim["danceright"].length === 0) {
            richAnim["danceright"] = richAnim["danceleft"].slice(15, 30);
            richAnim["danceleft"] = richAnim["danceleft"].slice(0, 15);
        }
    }
    obj.modAnimData = richAnim;
    obj._sundayCharacterName = charName;
    if (charSide === "DAD") runtimeScene.getVariables().get("SundayLaughReady").setBoolean(charName === "happymouse2" && Boolean(richAnim["down-alt"]?.length));
    if (richAnim["danceleft"] && richAnim["danceleft"].length > 0) {
        obj._hasDanceIdle = true;
        obj._modCurrentAnim = "danceleft";
    } else {
        obj._hasDanceIdle = false;
        obj._modCurrentAnim = "idle";
    }
    obj._modFrameIndex = obj._frameTimer = obj._beatTimer = obj._beatsPassed = 0;
    obj.pauseAnimation();
    __fnfCharacterLoading.getChild("TextureCount").setNumber(__fnfCharacterLoading.getChild("TextureCount").getAsNumber() + __fnfCharacterTexturePromises.length);
    return Promise.all(__fnfCharacterTexturePromises).then(() => true).catch(() => true);
};

if (!jsonRes) {
    __fnfFinishCharacterLoad(false);
    return;
}
const __fnfPrewarmedJsonKey = String(modName || "").toLowerCase() + "/" + String(charName || "").toLowerCase();
const __fnfPrewarmedJsonCache = runtimeScene._fnfGPUWarmCharacterJSON || null;
if (__fnfPrewarmedJsonCache && __fnfPrewarmedJsonCache[__fnfPrewarmedJsonKey]) {
    processData(__fnfPrewarmedJsonCache[__fnfPrewarmedJsonKey])
        .then(ok => __fnfFinishCharacterLoad(ok !== false))
        .catch(() => __fnfFinishCharacterLoad(false));
    return;
}
// GDJS JsonManager.loadJson callback is (error, content), not (content).
runtimeScene.getGame().getJsonManager().loadJson(jsonRes, (error, data) => {
    if (!error && data) {
        processData(data).then((ok) => __fnfFinishCharacterLoad(ok !== false)).catch(() => __fnfFinishCharacterLoad(false));
        return;
    }
    try {
        let xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/json");
        xhr.open('GET', jsonPath, true);
        xhr.onload = () => {
            if (xhr.status === 200 || xhr.status === 0) {
                try {
                    processData(JSON.parse(xhr.responseText)).then((ok) => __fnfFinishCharacterLoad(ok !== false)).catch(() => __fnfFinishCharacterLoad(false));
                } catch (e) { __fnfFinishCharacterLoad(false); }
            } else __fnfFinishCharacterLoad(false);
        };
        xhr.onerror = () => __fnfFinishCharacterLoad(false);
        xhr.send();
    } catch(e) { __fnfFinishCharacterLoad(false); }
});
};
gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.LoadCharacterContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.LoadCharacterContext.userFunc0x305fe80(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.LoadCharacter = function(ModName, CharName, parentEventsFunctionContext) {

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
if (argName === "CharName") return CharName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.LoadCharacterContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.LoadCharacterContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.LoadCharacterContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.PlayAnimationContext = {};
gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.PlayAnimationContext.idToCallbackMap = new Map();
gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.PlayAnimationContext.GDObjectObjects1= [];


gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.PlayAnimationContext.userFunc0x258ebe8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const obj = eventsFunctionContext.getObjects("Object")[0];
if (!obj.modAnimData) return;

let animName = eventsFunctionContext.getArgument("AnimName").toLowerCase().replace("sing", "");
// QT Termination: reuse the original BF dodge frames in place of the Hey animation.
// This code lives only inside the FNF extension; other songs and characters are unchanged.
const __qtGlobal = runtimeScene.getGame().getVariables();
const __qtSong = __qtGlobal.has("SongName") ? String(__qtGlobal.get("SongName").getAsString()).toLowerCase() : "";
const __qtIsBF = obj._charSide === "BF";
const __qtIsDodgeSong = __qtIsBF && __qtSong === "termination" && runtimeScene.getVariables().has("QTNative");
const __qtData = __qtIsDodgeSong ? runtimeScene.getVariables().get("QTNative") : null;
if (__qtIsDodgeSong && animName === "hey" && obj.modAnimData["dodge"]) animName = "dodge";
if (__qtIsDodgeSong && obj._modCurrentAnim === "dodge"
    && __qtData.getChild("DodgeUntil").getAsNumber() > __qtGlobal.get("Timer1").getAsNumber()
    && animName !== "dodge" && animName !== "hurt") return;

// Redirecionamento Automático: Se pedir "idle" para a GF, toca a dança correta
if (animName === "idle" && obj._hasDanceIdle) {
    animName = (obj._beatsPassed % 2 === 0) ? "danceleft" : "danceright";
}

if (obj.modAnimData[animName]) {
    if (obj._modCurrentAnim !== animName) {
        obj._modCurrentAnim = animName;
        obj._modFrameIndex = 0;
        obj._frameTimer = 0;
    } else {
        // Reinicia a animação se não for a dança base
        if (animName !== "idle" && animName !== "danceleft" && animName !== "danceright" && obj._modFrameIndex > 0) {
            obj._modFrameIndex = 0;
            obj._frameTimer = 0;
        }
    }
    
}
};
gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.PlayAnimationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.PlayAnimationContext.userFunc0x258ebe8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.PlayAnimation = function(AnimName, parentEventsFunctionContext) {

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
if (argName === "AnimName") return AnimName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.PlayAnimationContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.PlayAnimationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.PlayAnimationContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.doStepPreEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.doStepPreEventsContext.userFunc0x4a64288 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const obj = eventsFunctionContext.getObjects("Object")[0];
if (!obj.modAnimData || obj._anchorX === undefined) return;

const dt = runtimeScene.getTimeManager().getElapsedTime();
const vars = runtimeScene.getGame().getVariables();
const bpm = vars.has("bpm") ? vars.get("bpm").getAsNumber() || 100 : 100;
const crochet = (60 / bpm) * 1000;

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


const stageKeyForSide = (charSide) => charSide === "BF" ? "BF" : (charSide === "GF" ? "GF" : "Dad");
const applyStageRenderState = () => {
    const charSide = obj._charSide || "DAD";
    const stageKey = stageKeyForSide(charSide);
    const visibleName = `Stage_${stageKey}_Visible`;
    const zName = `Stage_${stageKey}_Z`;
    const layerName = `Stage_${stageKey}_Layer`;
    if (vars.has(visibleName) && vars.get(visibleName).getAsNumber() <= 0) {
        obj.hide(true);
        return false;
    }
    obj.hide(false);
    if (vars.has(zName)) {
        const z = vars.get(zName).getAsNumber();
        if (Number.isFinite(z) && obj.getZOrder() !== z) obj.setZOrder(z);
    }
    if (vars.has(layerName) && typeof obj.setLayer === "function") {
        const targetLayer = vars.get(layerName).getAsString();
        if (targetLayer && obj.getLayer() !== targetLayer) {
            try {
                if (typeof runtimeScene.hasLayer !== "function" || runtimeScene.hasLayer(targetLayer)) obj.setLayer(targetLayer);
            } catch (e) {}
        }
    }
    return true;
};
const __fnfIsWarmProbe = obj._fnfGPUPrewarmProbe === true;
if (!__fnfIsWarmProbe && !applyStageRenderState()) return;
const updateStageAnchor = () => {
    const charSide = obj._charSide || "DAD";
    const stageKey = stageKeyForSide(charSide);
    const xName = `Stage_${stageKey}_X`;
    const yName = `Stage_${stageKey}_Y`;
    if (vars.has(xName)) obj._anchorX = vars.get(xName).getAsNumber();
    if (vars.has(yName)) obj._anchorY = vars.get(yName).getAsNumber();
};
if (!__fnfIsWarmProbe) updateStageAnchor();

let curAnim = obj._modCurrentAnim;
const isDanceIdle = obj._hasDanceIdle === true;
const originalZavodilaGF = !__fnfIsWarmProbe && obj._charSide === "GF" &&
    vars.get("SongName").getAsString().toLowerCase() === "zavodila" &&
    vars.get("ResolvedDifficulty").getAsString() === "original";
const loopScared = originalZavodilaGF && curAnim === "scared" && obj._zavodilaScared === true;
// QT GF beat cadence is mod-specific and keeps other songs' animator unchanged.
const __qtGFRelevant = obj._charSide === "GF"
    && vars.has("SongName")
    && String(vars.get("SongName").getAsString()).toLowerCase() === "termination"
    && runtimeScene.getVariables().has("QTNative");
const __qtGFBeatVar = __qtGFRelevant
    ? runtimeScene.getVariables().get("QTNative").getChild("GFBeatSpeed").getAsNumber()
    : 1;
const __qtGFBeatSpeed = Number.isFinite(__qtGFBeatVar) && __qtGFBeatVar >= 1
    ? Math.max(1, Math.floor(__qtGFBeatVar)) : 1;
obj._beatTimer += dt;
if (obj._beatTimer >= crochet) {
    obj._beatTimer %= crochet;
    obj._beatsPassed++;
    if (isDanceIdle && obj._beatsPassed % __qtGFBeatSpeed === 0) {
        if (curAnim === "danceleft" || curAnim === "danceright" || curAnim === "idle" ||
            (originalZavodilaGF && curAnim === "scared" && !loopScared)) {
            curAnim = obj._modCurrentAnim = (Math.floor(obj._beatsPassed / __qtGFBeatSpeed) % 2 === 0) ? "danceleft" : "danceright";
            obj._modFrameIndex = 0;
            obj._frameTimer = 0;
        }
    } else if (curAnim === "idle" && obj._beatsPassed % 2 === 0) {
        obj._modFrameIndex = 0;
        obj._frameTimer = 0;
    }
}

const animArray = obj.modAnimData[curAnim];
if (!animArray || animArray.length === 0) return;
const msPerFrame = 1000 / 24;
const maxFrames = animArray.length;
if (!__fnfIsWarmProbe && (loopScared || obj._modFrameIndex < maxFrames - 1)) {
    obj._frameTimer += dt;
    if (obj._frameTimer >= msPerFrame) {
        obj._modFrameIndex += Math.floor(obj._frameTimer / msPerFrame);
        obj._frameTimer %= msPerFrame;
        if (obj._modFrameIndex >= maxFrames) obj._modFrameIndex = loopScared ? obj._modFrameIndex % maxFrames : maxFrames - 1;
    }
}

const currentFrame = animArray[Math.floor(obj._modFrameIndex)];
if (!currentFrame || !currentFrame.path) return;
const pixiTexture = __fnfGetOptimizedTexture(currentFrame.path, obj._charResolutionScale || 1);
if (pixiTexture && pixiTexture.valid) {
    const ro = obj.getRendererObject();
    if (ro) {
        const charScale = obj._charScale !== undefined ? obj._charScale : 1.0;
        const textureResolutionScale = pixiTexture._fnfResolutionScale || obj._charResolutionScale || 1;
        const visualScale = charScale / Math.max(0.05, textureResolutionScale);
        const charPosX = obj._charPosX || 0;
        const charPosY = obj._charPosY || 0;
        const isFlipped = obj._charFlipX === true;
        if (ro.texture !== undefined) ro.texture = pixiTexture;
        else if (ro.sprite) ro.sprite.texture = pixiTexture;
        if (__fnfIsWarmProbe) obj._fnfWarmAppliedTaskId = obj._fnfWarmTargetTaskId;
        const tW = pixiTexture.width * Math.abs(visualScale);
        const tH = pixiTexture.height * Math.abs(visualScale);
        const psychFrameW = currentFrame.frameW ? currentFrame.frameW * charScale : tW;
        const psychFrameH = currentFrame.frameH ? currentFrame.frameH * charScale : tH;
        if (obj.getWidth() !== tW) obj.setWidth(tW);
        if (obj.getHeight() !== tH) obj.setHeight(tH);
        // The loader preserves the original virtual frameWidth/frameHeight.
        // With this renderer's flipX formula, cropping the LEFT margin must
        // offset frameX by the same amount for both normal and flipped states.
        const extraTrim = currentFrame.trim || null;
        const effectiveTX = (currentFrame.tX || 0) - (extraTrim ? (Number(extraTrim.left) || 0) : 0);
        const effectiveTY = (currentFrame.tY || 0) - (extraTrim ? (Number(extraTrim.top) || 0) : 0);
        const trimX = -effectiveTX * charScale;
        const frameOriginX = obj._anchorX + charPosX - currentFrame.gX * charScale;
        const fX = frameOriginX + (isFlipped ? psychFrameW - trimX : trimX);
        const fY = obj._anchorY + charPosY - currentFrame.gY * charScale - effectiveTY * charScale;
        if (obj.getX() !== fX) obj.setX(fX);
        if (obj.getY() !== fY) obj.setY(fY);
        if (ro.scale) {
            ro.scale.x = isFlipped ? -visualScale : visualScale;
            ro.scale.y = visualScale;
        }
        const isCameraReferenceFrame = curAnim === "idle" || curAnim === "danceleft" || curAnim === "danceright";
        if (!obj._camHitboxW || isCameraReferenceFrame) {
            obj._camHitboxW = psychFrameW;
            obj._camHitboxH = psychFrameH;
        }
        const cameraHitboxW = obj._camHitboxW || tW;
        const cameraHitboxH = obj._camHitboxH || tH;
        let midX = obj._anchorX + charPosX + (cameraHitboxW / 2);
        let midY = obj._anchorY + charPosY + (cameraHitboxH / 2);
        let cOffsetX = obj._camOffsetX || 0;
        let cOffsetY = obj._camOffsetY || 0;
        let charSide = obj._charSide || "";
        if (charSide === "") {
            let n = obj.getName().toLowerCase();
            if (n.includes("gf") || n.includes("girlfriend")) charSide = "GF";
            else if (n.includes("bf") || n.includes("boyfriend")) charSide = "BF";
            else charSide = "DAD";
        }
        if (__fnfIsWarmProbe) return;
        const stageCameraOffset = (side) => {
            const stageKey = side === "BF" ? "BF" : (side === "GF" ? "GF" : "Dad");
            const xName = `Stage_${stageKey}_CameraOffsetX`;
            const yName = `Stage_${stageKey}_CameraOffsetY`;
            return {
                x: vars.has(xName) ? vars.get(xName).getAsNumber() : 0,
                y: vars.has(yName) ? vars.get(yName).getAsNumber() : 0
            };
        };
        const stageCam = stageCameraOffset(charSide);
        let sceneVars = runtimeScene.getVariables();
        if (charSide === "BF") {
            sceneVars.get("BFX").setNumber(midX - 100 - cOffsetX + stageCam.x);
            sceneVars.get("BFY").setNumber(midY - 100 + cOffsetY + stageCam.y);
        } else if (charSide === "DAD" || charSide === "OPPONENT") {
            sceneVars.get("OPPX").setNumber(midX + 150 + cOffsetX + stageCam.x);
            sceneVars.get("OPPY").setNumber(midY - 100 + cOffsetY + stageCam.y);
        } else if (charSide === "GF") {
            sceneVars.get("GFX").setNumber(midX + cOffsetX + stageCam.x);
            sceneVars.get("GFY").setNumber(midY + cOffsetY + stageCam.y);
        }
    }
}
};
gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.doStepPreEventsContext.userFunc0x4a64288(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.IsSingingContext = {};
gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.IsSingingContext.idToCallbackMap = new Map();
gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.IsSingingContext.GDObjectObjects1= [];


gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.IsSingingContext.userFunc0x36e42b0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const obj = eventsFunctionContext.getObjects("Object")[0];
const current = obj?._modCurrentAnim;
eventsFunctionContext.returnValue = /^(left|down|up|right)(-alt)?$/.test(current ?? "");
};
gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.IsSingingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.IsSingingContext.userFunc0x36e42b0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.IsSinging = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.IsSingingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.IsSingingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator.prototype.IsSingingContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("FNF::FNF_Character_Animator", gdjs.evtsExt__FNF__FNF_Character_Animator.FNF_Character_Animator);
