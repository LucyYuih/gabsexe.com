
if (typeof gdjs.evtsExt__FNF__RestoreRapidTouchId !== "undefined") {
  gdjs.evtsExt__FNF__RestoreRapidTouchId.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__FNF__RestoreRapidTouchId = {};
gdjs.evtsExt__FNF__RestoreRapidTouchId.idToCallbackMap = new Map();


gdjs.evtsExt__FNF__RestoreRapidTouchId.userFunc0x8c1888 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// Restore rapid repeated raw touch identifiers before the next rendered frame.
// Event-driven only; no per-frame loops. All lane picking and note judgement remain native.
const im = runtimeScene.getGame().getInputManager();
if (im && !im.__fnfRapidTouchRestoreV1 &&
    Array.isArray(im._endedTouches) &&
    typeof im._addTouch === "function" &&
    typeof im._removeTouch === "function" &&
    typeof im._moveTouch === "function" &&
    typeof im.onTouchStart === "function" &&
    typeof im.getPublicTouchIdentifier === "function") {
  const oldStart = im.onTouchStart.bind(im);
  const oldMove = im.onTouchMove.bind(im);
  const oldEnd = im.onTouchEnd.bind(im);
  const aliases = new Map();
  let serial = 0;
  im.onTouchStart = function(rawIdentifier, x, y) {
    const regularIdentifier = this.getPublicTouchIdentifier(rawIdentifier);
    if (!this._endedTouches.includes(regularIdentifier)) {
      oldStart(rawIdentifier, x, y);
      return;
    }
    const syntheticIdentifier = -10000000 - (++serial);
    this._addTouch(syntheticIdentifier, x, y);
    aliases.set(rawIdentifier, syntheticIdentifier);
    if (this.isSimulatingMouseWithTouch()) {
      this._setCursorPosition(x, y);
      this._setMouseButtonPressed(0);
    }
  };
  im.onTouchMove = function(rawIdentifier, x, y) {
    const syntheticIdentifier = aliases.get(rawIdentifier);
    if (syntheticIdentifier === undefined) {
      oldMove(rawIdentifier, x, y);
    } else {
      this._moveTouch(syntheticIdentifier, x, y);
      if (this.isSimulatingMouseWithTouch()) this._setCursorPosition(x, y);
    }
  };
  im.onTouchEnd = function(rawIdentifier) {
    const syntheticIdentifier = aliases.get(rawIdentifier);
    if (syntheticIdentifier === undefined) {
      oldEnd(rawIdentifier);
    } else {
      this._removeTouch(syntheticIdentifier);
      aliases.delete(rawIdentifier);
      if (this.isSimulatingMouseWithTouch()) this._setMouseButtonReleased(0);
    }
  };
  im.onTouchCancel = function(rawIdentifier) { this.onTouchEnd(rawIdentifier); };
  im.__fnfRapidTouchRestoreV1 = true;
}
};
gdjs.evtsExt__FNF__RestoreRapidTouchId.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FNF__RestoreRapidTouchId.userFunc0x8c1888(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__FNF__RestoreRapidTouchId.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__FNF__RestoreRapidTouchId.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__FNF__RestoreRapidTouchId.registeredGdjsCallbacks = [];