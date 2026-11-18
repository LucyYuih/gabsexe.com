
if (typeof gdjs.evtsExt__GabsPause__ExibirQuadroPausado !== "undefined") {
  gdjs.evtsExt__GabsPause__ExibirQuadroPausado.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GabsPause__ExibirQuadroPausado = {};
gdjs.evtsExt__GabsPause__ExibirQuadroPausado.idToCallbackMap = new Map();


gdjs.evtsExt__GabsPause__ExibirQuadroPausado.userFunc0x21255e0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const game = runtimeScene.getGame();
const layer = runtimeScene.getLayer("QuadroPausado");
const frame = game.__gabsPauseFrame;
if (frame) {
    const sprite = new PIXI.Sprite(PIXI.Texture.from(frame));
    layer.getRenderer().getRendererObject().addChild(sprite);
    runtimeScene.__gabsPauseBackdrop = sprite;
    game.__gabsPauseFrame = null;
}
const sprite = runtimeScene.__gabsPauseBackdrop;
if (sprite) {
    sprite.width = layer.getCameraWidth(0);
    sprite.height = layer.getCameraHeight(0);
    sprite.position.set(layer.getCameraX(0) - sprite.width / 2, layer.getCameraY(0) - sprite.height / 2);
}
};
gdjs.evtsExt__GabsPause__ExibirQuadroPausado.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__GabsPause__ExibirQuadroPausado.userFunc0x21255e0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__GabsPause__ExibirQuadroPausado.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__GabsPause__ExibirQuadroPausado.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__GabsPause__ExibirQuadroPausado.registeredGdjsCallbacks = [];