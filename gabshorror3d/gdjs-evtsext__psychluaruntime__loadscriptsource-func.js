
if (typeof gdjs.evtsExt__PsychLuaRuntime__LoadScriptSource !== "undefined") {
  gdjs.evtsExt__PsychLuaRuntime__LoadScriptSource.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PsychLuaRuntime__LoadScriptSource = {};
gdjs.evtsExt__PsychLuaRuntime__LoadScriptSource.idToCallbackMap = new Map();


gdjs.evtsExt__PsychLuaRuntime__LoadScriptSource.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__PsychLuaRuntime___LoadSource.func(runtimeScene, eventsFunctionContext.getArgument("ScriptId"), eventsFunctionContext.getArgument("ScriptPath"), eventsFunctionContext.getArgument("LuaSource"), eventsFunctionContext);
}
}

}


};

gdjs.evtsExt__PsychLuaRuntime__LoadScriptSource.func = function(runtimeScene, ScriptId, ScriptPath, LuaSource, parentEventsFunctionContext) {
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
if (argName === "ScriptPath") return ScriptPath;
if (argName === "LuaSource") return LuaSource;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PsychLuaRuntime__LoadScriptSource.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__PsychLuaRuntime__LoadScriptSource.registeredGdjsCallbacks = [];