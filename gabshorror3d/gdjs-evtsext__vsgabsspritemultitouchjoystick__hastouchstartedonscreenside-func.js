
if (typeof gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide !== "undefined") {
  gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide = {};
gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide.idToCallbackMap = new Map();
gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects1= [];
gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects2= [];
gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects3= [];


gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Side") == "Left");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getTouchX(runtimeScene, gdjs.evtTools.input.getStartedTouchOrMouseIdentifier(runtimeScene, 0), (( gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects2[0].getLayer()), 0) < gdjs.evtTools.camera.getCameraX(runtimeScene, (( gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects2[0].getLayer()), 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Side") == "Right");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getTouchX(runtimeScene, gdjs.evtTools.input.getStartedTouchOrMouseIdentifier(runtimeScene, 0), (( gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects1[0].getLayer()), 0) >= gdjs.evtTools.camera.getCameraX(runtimeScene, (( gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects1[0].getLayer()), 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide.func = function(runtimeScene, Object, Side, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("VsGabsSpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("VsGabsSpriteMultitouchJoystick"),
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
if (argName === "Side") return Side;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects1.length = 0;
gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects2.length = 0;
gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects3.length = 0;

gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects1.length = 0;
gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects2.length = 0;
gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects3.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__VsGabsSpriteMultitouchJoystick__HasTouchStartedOnScreenSide.registeredGdjsCallbacks = [];