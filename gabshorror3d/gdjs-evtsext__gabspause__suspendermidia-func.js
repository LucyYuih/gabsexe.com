
if (typeof gdjs.evtsExt__GabsPause__SuspenderMidia !== "undefined") {
  gdjs.evtsExt__GabsPause__SuspenderMidia.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GabsPause__SuspenderMidia = {};
gdjs.evtsExt__GabsPause__SuspenderMidia.idToCallbackMap = new Map();


gdjs.evtsExt__GabsPause__SuspenderMidia.userFunc0x87db688 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const game = runtimeScene.getGame();
const canvas = runtimeScene.getGame().getRenderer().getCanvas();
game.__gabsPauseFrame = null;
if (canvas && canvas.width > 0 && canvas.height > 0) {
    const frame = document.createElement("canvas");
    frame.width = canvas.width;
    frame.height = canvas.height;
    const painter = frame.getContext("2d", { alpha: false });
    if (painter) {
        painter.drawImage(canvas, 0, 0);
        painter.fillStyle = "rgba(0,0,0,0.58)";
        painter.fillRect(0, 0, frame.width, frame.height);
        game.__gabsPauseFrame = frame;
    }
}
const videos = [];
if (gdjs.VideoRuntimeObject) {
  for (const video of runtimeScene.getAdhocListOfAllInstances()) {
    if (video instanceof gdjs.VideoRuntimeObject && video.isPlayed()) {
      video.pause();
      videos.push(video);
    }
  }
}
game.__gabsPauseVideos = videos;
game.getSoundManager().pauseAllActiveSounds();
runtimeScene.__onlyUpCastle?.course?.setPause(true);
};
gdjs.evtsExt__GabsPause__SuspenderMidia.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__GabsPause__SuspenderMidia.userFunc0x87db688(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__GabsPause__SuspenderMidia.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__GabsPause__SuspenderMidia.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__GabsPause__SuspenderMidia.registeredGdjsCallbacks = [];