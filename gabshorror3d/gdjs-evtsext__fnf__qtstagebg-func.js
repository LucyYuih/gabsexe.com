
if (typeof gdjs.evtsExt__FNF__QTStageBG !== "undefined") {
  gdjs.evtsExt__FNF__QTStageBG.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__FNF__QTStageBG = {};
gdjs.evtsExt__FNF__QTStageBG.idToCallbackMap = new Map();


gdjs.evtsExt__FNF__QTStageBG.userFunc0x2423cf8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// Stage visibility adapter used exclusively by native QT BG events.
const state=Number(eventsFunctionContext.getArgument("State"));
const show={streetError:true,streetBack:state===0,
  streetBackError:state===1,streetFront:true,
  streetFrontError:state===2};
let found=0;
for(const obj of runtimeScene.getObjects("STAGE")){
 if(!obj._isFnfGeneratedStageSprite)continue;
 const tag=obj._stageTag;
 if(!Object.prototype.hasOwnProperty.call(show,tag))continue;
 obj._stageVisible=show[tag];obj.hide(!show[tag]);found++;
}
if(found)runtimeScene.getVariables().get("QTNative").getChild("BGApplied").setNumber(state);
};
gdjs.evtsExt__FNF__QTStageBG.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FNF__QTStageBG.userFunc0x2423cf8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__FNF__QTStageBG.func = function(runtimeScene, State, parentEventsFunctionContext) {
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
if (argName === "State") return State;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__FNF__QTStageBG.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__FNF__QTStageBG.registeredGdjsCallbacks = [];