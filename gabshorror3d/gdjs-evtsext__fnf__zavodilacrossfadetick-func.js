
if (typeof gdjs.evtsExt__FNF__ZavodilaCrossfadeTick !== "undefined") {
  gdjs.evtsExt__FNF__ZavodilaCrossfadeTick.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__FNF__ZavodilaCrossfadeTick = {};
gdjs.evtsExt__FNF__ZavodilaCrossfadeTick.idToCallbackMap = new Map();


gdjs.evtsExt__FNF__ZavodilaCrossfadeTick.userFunc0x8c1888 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const vars = runtimeScene.getVariables();
const active = vars.get("ZavodilaOriginal").getChild("Trails").getAsBoolean();
const renderer = runtimeScene.getLayer("").getRenderer();
const actors = [
    {name: "BF", hits: runtimeScene.getGame().getVariables().get("NoteCombo").getAsNumber(), player: true, tint: 0x0000ff},
    {name: "Sarvente2", hits: vars.get("OpponentNativeHitsTotal").getAsNumber(), player: false, tint: 0x3d3954}
];
const state = runtimeScene.__fnfZavodilaCrossfades ||= { sprites: [], hitCounts: {}, pending: {} };
const dt = runtimeScene.getTimeManager().getElapsedTime() / 1000;
const globalVars = runtimeScene.getGame().getVariables();
const combo = globalVars.get("NoteCombo").getAsNumber();
const opponentHits = vars.get("OpponentNativeHitsTotal").getAsNumber();
const gf = runtimeScene.getObjects("gf")[0];
if (gf?.modAnimData?.scared?.length) {
    if (opponentHits > (state.lastOpponentHits ?? 0)) {
        gf._zavodilaScared = true;
        gf._modCurrentAnim = "scared";
        gf._modFrameIndex = 0;
        gf._frameTimer = 0;
    }
    if (combo > (state.lastPlayerCombo ?? 0)) gf._zavodilaScared = false;
}
state.lastOpponentHits = opponentHits;
state.lastPlayerCombo = combo;
for (let index = state.sprites.length - 1; index >= 0; --index) {
    const ghost = state.sprites[index];
    ghost.remaining -= dt;
    if (ghost.remaining <= 0) {
        ghost.sprite.destroy();
        state.sprites.splice(index, 1);
        continue;
    }
    ghost.sprite.x += ghost.velocity * dt;
    ghost.sprite.alpha = 0.5 * ghost.remaining / 0.75;
}
for (const actor of actors) {
    if (active && state.pending[actor.name]) {
        const body = runtimeScene.getObjects(actor.name)[0];
        const view = body?.getRendererObject();
        if (view?.texture?.valid && !body.isHidden()) {
            const sprite = new PIXI.Sprite(view.texture);
            sprite.x = view.x + (actor.player ? -40 : 40);
            sprite.y = view.y;
            sprite.anchor.copyFrom(view.anchor);
            sprite.scale.copyFrom(view.scale);
            sprite.rotation = view.rotation;
            sprite.tint = actor.tint;
            sprite.alpha = 0.5;
            renderer.addRendererObject(sprite, body.getZOrder() - 0.1);
            state.sprites.push({sprite, remaining: 0.75, velocity: 200 + Math.random() * 40});
        }
    }
    state.pending[actor.name] = active && actor.hits > (state.hitCounts[actor.name] ?? actor.hits);
    state.hitCounts[actor.name] = actor.hits;
}
};
gdjs.evtsExt__FNF__ZavodilaCrossfadeTick.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FNF__ZavodilaCrossfadeTick.userFunc0x8c1888(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__FNF__ZavodilaCrossfadeTick.func = function(runtimeScene, Scene, parentEventsFunctionContext) {
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
if (argName === "Scene") return Scene;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__FNF__ZavodilaCrossfadeTick.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__FNF__ZavodilaCrossfadeTick.registeredGdjsCallbacks = [];