
if (typeof gdjs.evtsExt__FNF__QTStageTV !== "undefined") {
  gdjs.evtsExt__FNF__QTStageTV.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__FNF__QTStageTV = {};
gdjs.evtsExt__FNF__QTStageTV.idToCallbackMap = new Map();


gdjs.evtsExt__FNF__QTStageTV.userFunc0x4cb4d80 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// Only stage animation visual adapter; event timing is native.
const state=Number(eventsFunctionContext.getArgument("State"));
const prefixes={0:"TV_Idle",1:"TV_Attention",2:"TV_Instructions-Normal",
3:"TV_GoodLuck",4:"TV_Watchout",5:"TV_brutality",6:"TV_Error",
7:"TV_Bluescreen",8:"TV_End",9:"TV_Drop",69:"TV_sus",420:"TV_sus"};
const prefix=prefixes[state]||"TV_Idle";
for(const obj of runtimeScene.getObjects("STAGE")){
 if(!obj._isFnfGeneratedStageSprite||obj._stageTag!=="qtTV"||!obj._frames)continue;
 if(!obj._qtAllFrames)obj._qtAllFrames=obj._frames.slice();
 if(obj._qtCurrentPrefix===prefix)continue;
 const frames=obj._qtAllFrames.filter(f=>{
   const s=String(f.image||f.exactImage||"").replace(/\\/g,"/");
   return s.slice(s.lastIndexOf("/")+1).startsWith(prefix);
 });
 if(frames.length){
   obj._frames=frames;obj._frameIdx=0;obj._timer=0;
   obj._qtCurrentPrefix=prefix;obj._stageVisible=true;obj.hide(false);
   runtimeScene.getVariables().get("QTNative").getChild("TVApplied").setNumber(state);
 }
}
};
gdjs.evtsExt__FNF__QTStageTV.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FNF__QTStageTV.userFunc0x4cb4d80(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__FNF__QTStageTV.func = function(runtimeScene, State, parentEventsFunctionContext) {
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


gdjs.evtsExt__FNF__QTStageTV.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__FNF__QTStageTV.registeredGdjsCallbacks = [];