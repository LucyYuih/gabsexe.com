
if (typeof gdjs.evtsExt__FNF__CleanupRuntimeCaches !== "undefined") {
  gdjs.evtsExt__FNF__CleanupRuntimeCaches.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__FNF__CleanupRuntimeCaches = {};
gdjs.evtsExt__FNF__CleanupRuntimeCaches.idToCallbackMap = new Map();


gdjs.evtsExt__FNF__CleanupRuntimeCaches.userFunc0x12ccd08 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
runtimeScene.getGame()._fnfCompletedGPUPrewarm = null;
// Stop any previous visual GPU prewarm and restore Pixi's texture GC budget.
if (runtimeScene._fnfGPUPrewarmSession) {
    try { runtimeScene._fnfGPUPrewarmSession.cleanup(); } catch (e) {}
}
runtimeScene._fnfGPUPrewarmSession = null;
runtimeScene._fnfGPUWarmCharacterJSON = Object.create(null);
runtimeScene._fnfPrimeCharacterTexture = null;

const namesToDelete = [
    "BfLeftNote", "BfDownNote", "BfUpNote", "BfRightNote",
    "OppLeftNote", "OppDownNote", "OppUpNote", "OppRightNote",
    "LongNote", "LongNoteOpp", "Hurt", "NotesSplash", "RatinsPopUp",
    "FlashCamera", "holdCoverBlue", "holdCoverPurple", "holdCoverGreen", "holdCoverRed"
];
for (const name of namesToDelete) {
    try {
        for (const object of runtimeScene.getObjects(name)) object.deleteFromScene();
    } catch (e) {}
}
try {
    for (const object of runtimeScene.getObjects("STAGE")) {
        if (object._isFnfGeneratedStageSprite) object.deleteFromScene();
    }
} catch (e) {}
for (const name of ["BF", "Sarvente2", "gf", "Sarvente"]) {
    try {
        for (const object of runtimeScene.getObjects(name)) {
            object.modAnimData = null;
            object._frames = null;
            const renderer = typeof object.getRendererObject === "function" ? object.getRendererObject() : null;
            if (renderer && PIXI && PIXI.Texture && PIXI.Texture.EMPTY) {
                if (renderer.texture !== undefined) renderer.texture = PIXI.Texture.EMPTY;
                else if (renderer.sprite) renderer.sprite.texture = PIXI.Texture.EMPTY;
                else if (renderer._sprite) renderer._sprite.texture = PIXI.Texture.EMPTY;
            }
        }
    } catch (e) {}
}
const ghostTrailState = runtimeScene.__fnfGhostTrail;
if (ghostTrailState) {
    const spritesToDestroy = [];
    if (Array.isArray(ghostTrailState.ghosts)) {
        for (const entry of ghostTrailState.ghosts) {
            const sprite = entry && entry.sprite;
            if (sprite) spritesToDestroy.push(sprite);
        }
    }
    if (Array.isArray(ghostTrailState.pool)) {
        for (const sprite of ghostTrailState.pool) {
            if (sprite) spritesToDestroy.push(sprite);
        }
    }
    for (const sprite of spritesToDestroy) {
        try {
            if (sprite.parent) sprite.parent.removeChild(sprite);
            if (typeof sprite.destroy === "function" && !sprite.destroyed) sprite.destroy({ children: false, texture: false, baseTexture: false });
        } catch (e) {}
    }
}
runtimeScene.__fnfGhostTrail = { ghosts: [], pool: [] };
const cache = runtimeScene._fnfOptimizedTextureCache || {};
for (const key of Object.keys(cache)) {
    const entry = cache[key];
    const texture = entry && entry.texture;
    if (!texture || texture.destroyed || typeof texture.destroy !== "function") continue;
    try {
        texture.destroy(true);
    } catch (e) {
        try { texture.destroy(false); } catch (e2) {}
    }
}
runtimeScene._fnfOptimizedTextureCache = {};
runtimeScene._fnfPsychSmoothCamera = null;
runtimeScene._fnfSmoothCamera = null;
};
gdjs.evtsExt__FNF__CleanupRuntimeCaches.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FNF__CleanupRuntimeCaches.userFunc0x12ccd08(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__FNF__CleanupRuntimeCaches.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__FNF__CleanupRuntimeCaches.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__FNF__CleanupRuntimeCaches.registeredGdjsCallbacks = [];