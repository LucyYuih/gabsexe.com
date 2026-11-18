
if (typeof gdjs.evtsExt__PsychLuaRuntime___LoadManifestScript !== "undefined") {
  gdjs.evtsExt__PsychLuaRuntime___LoadManifestScript.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PsychLuaRuntime___LoadManifestScript = {};
gdjs.evtsExt__PsychLuaRuntime___LoadManifestScript.idToCallbackMap = new Map();


gdjs.evtsExt__PsychLuaRuntime___LoadManifestScript.userFunc0x4128e60 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var id = eventsFunctionContext.getArgument("ScriptId");
var path = eventsFunctionContext.getArgument("ScriptPath");
try {
    var host = globalThis.__psychLuaRuntimeHost;
    host.incrementDiagnostic(runtimeScene, "LoadCalls");
    host.setDiagnostic(runtimeScene, "ManifestLoadEntered", id, path);
    host.loadManifestScript(runtimeScene, id, path).then(function(loaded) {
        if (!loaded) {
            host.setDiagnostic(runtimeScene, "ManifestLoadFailed", id, path);
            return;
        }
        host.incrementDiagnostic(runtimeScene, "OnCreateCalls");
        host.setDiagnostic(runtimeScene, "DispatchingOnCreate", id, path);
        host.dispatch(runtimeScene, id, "onCreate", []);
        host.setDiagnostic(runtimeScene, "OnCreateComplete", id, path);
    }).catch(function(error) {
        host.setDiagnostic(runtimeScene, "ManifestLoadException", id, path);
        host.setLastError(runtimeScene, id, "load", error);
        host.setScriptStatus(runtimeScene, String(id || path || "script"), path, false, true, false,
            error && error.stack ? error.stack : String(error));
        console.error("Psych Lua manifest load failed", id, path, error);
    });
} catch (error) {
    globalThis.__psychLuaRuntimeHost.setDiagnostic(runtimeScene, "ManifestLoadException", id, path);
    globalThis.__psychLuaRuntimeHost.setLastError(runtimeScene, id, "load", error);
    console.error("Psych Lua manifest load failed", id, path, error);
}
};
gdjs.evtsExt__PsychLuaRuntime___LoadManifestScript.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PsychLuaRuntime___LoadManifestScript.userFunc0x4128e60(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__PsychLuaRuntime___LoadManifestScript.func = function(runtimeScene, ScriptId, ScriptPath, parentEventsFunctionContext) {
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


gdjs.evtsExt__PsychLuaRuntime___LoadManifestScript.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__PsychLuaRuntime___LoadManifestScript.registeredGdjsCallbacks = [];