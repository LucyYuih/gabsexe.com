
if (typeof gdjs.evtsExt__PsychLuaRuntime___SyncRuntimeState !== "undefined") {
  gdjs.evtsExt__PsychLuaRuntime___SyncRuntimeState.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PsychLuaRuntime___SyncRuntimeState = {};
gdjs.evtsExt__PsychLuaRuntime___SyncRuntimeState.idToCallbackMap = new Map();


gdjs.evtsExt__PsychLuaRuntime___SyncRuntimeState.userFunc0x87db688 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var host = globalThis.__psychLuaRuntimeHost;
var extensionState = runtimeScene.getVariablesForExtension("PsychLuaRuntime").get("Runtime");
var globalState = runtimeScene.getGame().getVariables().get("PsychLuaRuntime");
var now = Date.now();
var sceneData = host && host.ensureCompatibilityData ? host.ensureCompatibilityData(runtimeScene) : null;
var preferenceLocked = Boolean(sceneData && sceneData.preferences && sceneData.preferences.locked);
var manifestReady = Boolean(host && host.isPsychLuaManifestReady && host.isPsychLuaManifestReady(runtimeScene));
var stable = Boolean(host && host.factory && manifestReady && preferenceLocked);
if (stable && sceneData.performance.runtimeStateNextAt > now) return;
if (stable) sceneData.performance.runtimeStateNextAt = now + 250;

var state = "NotStarted";
var ready = false;
var failed = false;
var error = "";
var version = "";
if (host && host.ensurePsychLuaManifest) host.ensurePsychLuaManifest(runtimeScene);
if (host && host.applyLiveSettingsToGlobals) host.applyLiveSettingsToGlobals(runtimeScene);
if (host && host.updatePreferenceReadiness) host.updatePreferenceReadiness(runtimeScene);
manifestReady = Boolean(host && host.isPsychLuaManifestReady && host.isPsychLuaManifestReady(runtimeScene));
if (host && host.factory) {
    state = "Ready";
    ready = true;
    version = globalThis.PsychLuaRuntime && globalThis.PsychLuaRuntime.runtimeVersion ?
        globalThis.PsychLuaRuntime.runtimeVersion : "Lua 5.1";
} else if (host && host.failed) {
    state = "Failed";
    failed = true;
    error = host.error || "Lua runtime initialization failed";
} else if (host && host.initializing) {
    state = "Initializing";
}

var statusCache = sceneData ? (sceneData.runtimeStatusCache || (sceneData.runtimeStatusCache = Object.create(null))) : Object.create(null);
var write = function(root, name, method, value, cachePrefix) {
    var key = cachePrefix + name;
    if (Object.prototype.hasOwnProperty.call(statusCache, key) && statusCache[key] === value) return;
    statusCache[key] = value;
    root.getChild(name)[method](value);
};
write(extensionState, "State", "setString", state, "extension:");
write(extensionState, "Ready", "setBoolean", ready, "extension:");
write(extensionState, "ManifestReady", "setBoolean", manifestReady, "extension:");
write(extensionState, "Failed", "setBoolean", failed, "extension:");
write(extensionState, "Error", "setString", error, "extension:");
write(extensionState, "Version", "setString", version, "extension:");
write(globalState, "State", "setString", state, "global:");
write(globalState, "Ready", "setBoolean", ready, "global:");
write(globalState, "ManifestReady", "setBoolean", manifestReady, "global:");
write(globalState, "Failed", "setBoolean", failed, "global:");
write(globalState, "Error", "setString", error, "global:");
write(globalState, "Version", "setString", version, "global:");
write(globalState, "BridgeVersion", "setString", "1.9.2", "global:");
};
gdjs.evtsExt__PsychLuaRuntime___SyncRuntimeState.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PsychLuaRuntime___SyncRuntimeState.userFunc0x87db688(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__PsychLuaRuntime___SyncRuntimeState.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PsychLuaRuntime___SyncRuntimeState.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__PsychLuaRuntime___SyncRuntimeState.registeredGdjsCallbacks = [];