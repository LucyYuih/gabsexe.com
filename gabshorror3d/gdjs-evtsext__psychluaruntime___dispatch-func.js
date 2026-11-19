
if (typeof gdjs.evtsExt__PsychLuaRuntime___Dispatch !== "undefined") {
  gdjs.evtsExt__PsychLuaRuntime___Dispatch.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PsychLuaRuntime___Dispatch = {};
gdjs.evtsExt__PsychLuaRuntime___Dispatch.idToCallbackMap = new Map();


gdjs.evtsExt__PsychLuaRuntime___Dispatch.userFunc0x8039ea8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var host = globalThis.__psychLuaRuntimeHost;
var args = [
    eventsFunctionContext.getArgument("Arg1"),
    eventsFunctionContext.getArgument("Arg2"),
    eventsFunctionContext.getArgument("Arg3"),
    eventsFunctionContext.getArgument("Arg4")
];
while (args.length && args[args.length - 1] === "") args.pop();
for (var i = 0; i < args.length; i += 1) args[i] = host.coerceArgument(args[i]);
host.dispatch(runtimeScene, eventsFunctionContext.getArgument("ScriptId"),
    eventsFunctionContext.getArgument("Callback"), args);
};
gdjs.evtsExt__PsychLuaRuntime___Dispatch.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PsychLuaRuntime___Dispatch.userFunc0x8039ea8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__PsychLuaRuntime___Dispatch.func = function(runtimeScene, ScriptId, Callback, Arg1, Arg2, Arg3, Arg4, parentEventsFunctionContext) {
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
if (argName === "Callback") return Callback;
if (argName === "Arg1") return Arg1;
if (argName === "Arg2") return Arg2;
if (argName === "Arg3") return Arg3;
if (argName === "Arg4") return Arg4;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PsychLuaRuntime___Dispatch.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__PsychLuaRuntime___Dispatch.registeredGdjsCallbacks = [];