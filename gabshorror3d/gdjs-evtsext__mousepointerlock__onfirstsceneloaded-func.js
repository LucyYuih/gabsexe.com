
if (typeof gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded = {};
gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.idToCallbackMap = new Map();


gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.userFunc0x31dde60 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
class PointerLockHandler {
    movementX = 0;
    movementY = 0;
    requestPending = false;
    legacyRawRequest = null;
    /**
     * @type {gdjs.RuntimeGame}
     */
    game;

    /**
     * @param {gdjs.RuntimeGame} game
     */
    constructor(game) {
        this.game = game;
        const canvas = game.getRenderer().getCanvas();

        canvas.addEventListener("pointermove", event => {
            if (!!document.pointerLockElement) {
                this.movementX += event.movementX || 0;
                this.movementY += event.movementY || 0;
            }
        }, false);

        document.addEventListener("pointerlockchange", () => {
            if (this.legacyRawRequest === null) return;
            this.legacyRawRequest = null;
            this.requestPending = false;
        });
        document.addEventListener("pointerlockerror", () => {
            if (this.legacyRawRequest === null) return;
            const retry = this.legacyRawRequest;
            this.legacyRawRequest = null;
            this.finishPointerLockError(canvas, retry);
        });
    }

    requestPointerLock() {
        const canvas = this.game.getRenderer().getCanvas();
        if (!canvas.requestPointerLock || document.pointerLockElement || this.requestPending) return;
        this.requestPending = true;
        this.tryPointerLock(canvas, true);
    }

    tryPointerLock(canvas, raw) {
        try {
            const result = raw
                ? canvas.requestPointerLock({ unadjustedMovement: true })
                : canvas.requestPointerLock();
            if (result && typeof result.then === "function") {
                result.then(
                    () => { this.requestPending = false; },
                    () => this.finishPointerLockError(canvas, raw)
                );
            } else {
                this.legacyRawRequest = raw;
            }
        } catch (error) {
            this.finishPointerLockError(canvas, raw);
        }
    }

    finishPointerLockError(canvas, retry) {
        if (retry) this.tryPointerLock(canvas, false);
        else this.requestPending = false;
    }

    exitPointerLock() {
        if (document.exitPointerLock) {
            document.exitPointerLock();
        }
    }

    isPointerLocked() {
        return !!document.pointerLockElement;
    }

    resetMovement() {
        this.movementX = 0;
        this.movementY = 0;
    }
};

gdjs._MousePointerLockExtension = { handler: new PointerLockHandler(runtimeScene.getGame()) };
};
gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.userFunc0x31dde60(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MousePointerLock"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MousePointerLock"),
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


gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
