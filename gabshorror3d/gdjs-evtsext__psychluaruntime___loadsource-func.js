
if (typeof gdjs.evtsExt__PsychLuaRuntime___LoadSource !== "undefined") {
  gdjs.evtsExt__PsychLuaRuntime___LoadSource.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PsychLuaRuntime___LoadSource = {};
gdjs.evtsExt__PsychLuaRuntime___LoadSource.idToCallbackMap = new Map();


gdjs.evtsExt__PsychLuaRuntime___LoadSource.userFunc0x87db688 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var id = eventsFunctionContext.getArgument("ScriptId");
var path = eventsFunctionContext.getArgument("ScriptPath");
var source = eventsFunctionContext.getArgument("LuaSource");
try {
    var host = globalThis.__psychLuaRuntimeHost;
    host.incrementDiagnostic(runtimeScene, "LoadCalls");
    host.setDiagnostic(runtimeScene, "SourceLoadEntered", id, path);
    if (host.loadSource(runtimeScene, id, path, source)) {
        host.incrementDiagnostic(runtimeScene, "OnCreateCalls");
        host.setDiagnostic(runtimeScene, "DispatchingOnCreate", id, path);
        host.dispatch(runtimeScene, id, "onCreate", []);
        host.setDiagnostic(runtimeScene, "OnCreateComplete", id, path);
    } else {
        host.setDiagnostic(runtimeScene, "SourceLoadFailed", id, path);
    }
} catch (error) {
    globalThis.__psychLuaRuntimeHost.setDiagnostic(runtimeScene, "SourceLoadException", id, path);
    globalThis.__psychLuaRuntimeHost.setLastError(runtimeScene, id, "load", error);
    console.error("Psych Lua source load failed", id, error);
}
};
gdjs.evtsExt__PsychLuaRuntime___LoadSource.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PsychLuaRuntime___LoadSource.userFunc0x87db688(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__PsychLuaRuntime___LoadSource.func = function(runtimeScene, ScriptId, ScriptPath, LuaSource, parentEventsFunctionContext) {
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


gdjs.evtsExt__PsychLuaRuntime___LoadSource.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__PsychLuaRuntime___LoadSource.registeredGdjsCallbacks = [];