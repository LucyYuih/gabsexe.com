
if (typeof gdjs.evtsExt__GabsPause__RetomarMidia !== "undefined") {
  gdjs.evtsExt__GabsPause__RetomarMidia.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GabsPause__RetomarMidia = {};
gdjs.evtsExt__GabsPause__RetomarMidia.idToCallbackMap = new Map();


gdjs.evtsExt__GabsPause__RetomarMidia.userFunc0x87db688 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const game = runtimeScene.getGame();
const backdrop = runtimeScene.__gabsPauseBackdrop;
if (backdrop) {
    backdrop.destroy({ texture: true, baseTexture: true });
    runtimeScene.__gabsPauseBackdrop = null;
}
game.__gabsPauseFrame = null;
game.getSoundManager().resumeAllActiveSounds();
for (const video of game.__gabsPauseVideos || []) video.play();
game.__gabsPauseVideos = [];
};
gdjs.evtsExt__GabsPause__RetomarMidia.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__GabsPause__RetomarMidia.userFunc0x87db688(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__GabsPause__RetomarMidia.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__GabsPause__RetomarMidia.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__GabsPause__RetomarMidia.registeredGdjsCallbacks = [];