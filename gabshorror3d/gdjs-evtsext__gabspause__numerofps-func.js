
if (typeof gdjs.evtsExt__GabsPause__NumeroFPS !== "undefined") {
  gdjs.evtsExt__GabsPause__NumeroFPS.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GabsPause__NumeroFPS = {};
gdjs.evtsExt__GabsPause__NumeroFPS.idToCallbackMap = new Map();


gdjs.evtsExt__GabsPause__NumeroFPS.userFunc0x87db688 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const text = eventsFunctionContext.getArgument("Valor").trim();
const value = Number(text);
eventsFunctionContext.returnValue = /^\d+$/.test(text) && Number.isSafeInteger(value) ? value : -1;
};
gdjs.evtsExt__GabsPause__NumeroFPS.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__GabsPause__NumeroFPS.userFunc0x87db688(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__GabsPause__NumeroFPS.func = function(runtimeScene, Valor, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("GabsPause"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("GabsPause"),
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
if (argName === "Valor") return Valor;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__GabsPause__NumeroFPS.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__GabsPause__NumeroFPS.registeredGdjsCallbacks = [];