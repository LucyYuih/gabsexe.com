
if (typeof gdjs.evtsExt__PsychLuaRuntime__DispatchOnEvent !== "undefined") {
  gdjs.evtsExt__PsychLuaRuntime__DispatchOnEvent.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PsychLuaRuntime__DispatchOnEvent = {};
gdjs.evtsExt__PsychLuaRuntime__DispatchOnEvent.idToCallbackMap = new Map();


gdjs.evtsExt__PsychLuaRuntime__DispatchOnEvent.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__PsychLuaRuntime__Dispatch.func(runtimeScene, eventsFunctionContext.getArgument("ScriptId"), "onEvent", eventsFunctionContext.getArgument("EventName"), eventsFunctionContext.getArgument("Value1"), eventsFunctionContext.getArgument("Value2"), "", eventsFunctionContext);
}
}

}


};

gdjs.evtsExt__PsychLuaRuntime__DispatchOnEvent.func = function(runtimeScene, ScriptId, EventName, Value1, Value2, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PsychLuaRuntime"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PsychLuaRuntime"),
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
if (argName === "ScriptId") return ScriptId;
if (argName === "EventName") return EventName;
if (argName === "Value1") return Value1;
if (argName === "Value2") return Value2;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PsychLuaRuntime__DispatchOnEvent.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__PsychLuaRuntime__DispatchOnEvent.registeredGdjsCallbacks = [];