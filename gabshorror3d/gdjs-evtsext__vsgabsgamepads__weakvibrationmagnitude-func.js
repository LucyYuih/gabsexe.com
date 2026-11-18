
if (typeof gdjs.evtsExt__VsGabsGamepads__WeakVibrationMagnitude !== "undefined") {
  gdjs.evtsExt__VsGabsGamepads__WeakVibrationMagnitude.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__VsGabsGamepads__WeakVibrationMagnitude = {};
gdjs.evtsExt__VsGabsGamepads__WeakVibrationMagnitude.idToCallbackMap = new Map();


gdjs.evtsExt__VsGabsGamepads__WeakVibrationMagnitude.userFunc0x64b1d18 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const playerId = eventsFunctionContext.getArgument("Player_ID") - 1;
eventsFunctionContext.returnValue = gdjs._vsGabsExtensionController.players[playerId].rumble.weakMagnitude;
};
gdjs.evtsExt__VsGabsGamepads__WeakVibrationMagnitude.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__VsGabsGamepads__WeakVibrationMagnitude.userFunc0x64b1d18(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__VsGabsGamepads__WeakVibrationMagnitude.func = function(runtimeScene, Player_ID, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("VsGabsGamepads"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("VsGabsGamepads"),
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
if (argName === "Player_ID") return Player_ID;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__VsGabsGamepads__WeakVibrationMagnitude.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__VsGabsGamepads__WeakVibrationMagnitude.registeredGdjsCallbacks = [];