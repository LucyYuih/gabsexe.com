
if (typeof gdjs.evtsExt__FNF__ResetLoadingState !== "undefined") {
  gdjs.evtsExt__FNF__ResetLoadingState.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__FNF__ResetLoadingState = {};
gdjs.evtsExt__FNF__ResetLoadingState.idToCallbackMap = new Map();


gdjs.evtsExt__FNF__ResetLoadingState.userFunc0x12ccd08 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// Stop any previous visual GPU prewarm and restore Pixi's texture GC budget.
if (runtimeScene._fnfGPUPrewarmSession) {
    try { runtimeScene._fnfGPUPrewarmSession.cleanup(); } catch (e) {}
}
runtimeScene._fnfGPUPrewarmSession = null;
const game = runtimeScene.getGame();
const vars = game.getVariables();
const retry = game._fnfCompletedGPUPrewarm;
const sameSong = retry &&
    retry.sceneName === runtimeScene.getName() &&
    retry.song === vars.get("SongName").getAsString() &&
    retry.difficulty === vars.get("ResolvedDifficulty").getAsString();
runtimeScene._fnfGPUWarmCharacterJSON = sameSong ? retry.characterJSON : Object.create(null);
runtimeScene._fnfOptimizedTextureCache = sameSong ? retry.optimized : {};
runtimeScene._fnfPrimeCharacterTexture = null;

const root = runtimeScene.getGame().getVariables().get("FNF_Loading");
const clampPercent = (value) => {
    const n = Number(value);
    return Number.isFinite(n) ? Math.max(5, Math.min(100, n)) : 100;
};
const preservePercent = (slot) => {
    const current = clampPercent(slot.getChild("ResolutionPercent").getAsNumber());
    slot.getChild("ResolutionPercent").setNumber(current);
};
root.getChild("Token").setNumber(root.getChild("Token").getAsNumber() + 1);
const stage = root.getChild("Stage");
const characters = root.getChild("Characters");
preservePercent(stage);
preservePercent(characters);
stage.getChild("Requested").setBoolean(false);
stage.getChild("Loaded").setBoolean(false);
stage.getChild("TextureCount").setNumber(0);
stage.getChild("Error").setString("");
characters.getChild("Requested").setBoolean(false);
characters.getChild("Loaded").setBoolean(false);
characters.getChild("Started").setNumber(0);
characters.getChild("Done").setNumber(0);
characters.getChild("TextureCount").setNumber(0);
characters.getChild("Error").setString("");
};
gdjs.evtsExt__FNF__ResetLoadingState.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FNF__ResetLoadingState.userFunc0x12ccd08(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__FNF__ResetLoadingState.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__FNF__ResetLoadingState.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__FNF__ResetLoadingState.registeredGdjsCallbacks = [];