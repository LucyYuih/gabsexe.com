
if (typeof gdjs.evtsExt__FNF__SetCharactersResolution !== "undefined") {
  gdjs.evtsExt__FNF__SetCharactersResolution.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__FNF__SetCharactersResolution = {};
gdjs.evtsExt__FNF__SetCharactersResolution.idToCallbackMap = new Map();


gdjs.evtsExt__FNF__SetCharactersResolution.userFunc0x18982b0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const raw = Number(eventsFunctionContext.getArgument("Percent"));
const percent = Number.isFinite(raw) ? Math.max(5, Math.min(100, raw)) : 100;
runtimeScene.getGame().getVariables().get("FNF_Loading").getChild("Characters").getChild("ResolutionPercent").setNumber(percent);
};
gdjs.evtsExt__FNF__SetCharactersResolution.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FNF__SetCharactersResolution.userFunc0x18982b0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__FNF__SetCharactersResolution.func = function(runtimeScene, Percent, parentEventsFunctionContext) {
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
if (argName === "Percent") return Percent;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__FNF__SetCharactersResolution.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__FNF__SetCharactersResolution.registeredGdjsCallbacks = [];