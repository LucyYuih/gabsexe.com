
if (typeof gdjs.evtsExt__PsychLuaRuntime__LoadScript !== "undefined") {
  gdjs.evtsExt__PsychLuaRuntime__LoadScript.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PsychLuaRuntime__LoadScript = {};
gdjs.evtsExt__PsychLuaRuntime__LoadScript.idToCallbackMap = new Map();


gdjs.evtsExt__PsychLuaRuntime__LoadScript.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getChild("ScriptId").setString(eventsFunctionContext.getArgument("ScriptId"));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getChild("Callback").setString("load");
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getChild("Failed").setBoolean(false);
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getChild("Error").setString("");
}
{gdjs.evtsExt__PsychLuaRuntime___LoadManifestScript.func(runtimeScene, eventsFunctionContext.getArgument("ScriptId"), eventsFunctionContext.getArgument("ScriptPath"), eventsFunctionContext);
}
}

}


};

gdjs.evtsExt__PsychLuaRuntime__LoadScript.func = function(runtimeScene, ScriptId, ScriptPath, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PsychLuaRuntime__LoadScript.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__PsychLuaRuntime__LoadScript.registeredGdjsCallbacks = [];