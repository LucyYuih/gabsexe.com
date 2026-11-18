
if (typeof gdjs.evtsExt__FNF__MusicPath !== "undefined") {
  gdjs.evtsExt__FNF__MusicPath.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__FNF__MusicPath = {};
gdjs.evtsExt__FNF__MusicPath.idToCallbackMap = new Map();


gdjs.evtsExt__FNF__MusicPath.userFunc0x4cb4d80 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const p = String(eventsFunctionContext.getArgument("Path"));
const m = String(eventsFunctionContext.getArgument("Music")).toLowerCase().replace(/ /g, "-");
const base = `mods\\${p}\\Songs\\${m}\\${m}`;

const recursos = globalThis.gdjs.projectData.resources.resources || [];

const ext = [".aac", ".ogg", ".mp3", ".wav", ".m4a"].find(e => 
    recursos.some(r => r.name === base + e)
) || ".aac";

eventsFunctionContext.returnValue = base + ext;
};
gdjs.evtsExt__FNF__MusicPath.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FNF__MusicPath.userFunc0x4cb4d80(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__FNF__MusicPath.func = function(runtimeScene, Path, Music, parentEventsFunctionContext) {
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
if (argName === "Path") return Path;
if (argName === "Music") return Music;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__FNF__MusicPath.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__FNF__MusicPath.registeredGdjsCallbacks = [];