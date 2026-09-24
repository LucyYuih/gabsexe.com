gdjs.Gabs3DCode = {};
gdjs.Gabs3DCode.localVariables = [];
gdjs.Gabs3DCode.idToCallbackMap = new Map();
gdjs.Gabs3DCode.forEachIndex2 = 0;

gdjs.Gabs3DCode.forEachObjects2 = [];

gdjs.Gabs3DCode.forEachTemporary2 = null;

gdjs.Gabs3DCode.forEachTotalCount2 = 0;

gdjs.Gabs3DCode.GDGroundObjects1= [];
gdjs.Gabs3DCode.GDGroundObjects2= [];
gdjs.Gabs3DCode.GDGroundObjects3= [];
gdjs.Gabs3DCode.GDObstacleObjects1= [];
gdjs.Gabs3DCode.GDObstacleObjects2= [];
gdjs.Gabs3DCode.GDObstacleObjects3= [];
gdjs.Gabs3DCode.GDPushableBoxObjects1= [];
gdjs.Gabs3DCode.GDPushableBoxObjects2= [];
gdjs.Gabs3DCode.GDPushableBoxObjects3= [];
gdjs.Gabs3DCode.GDMovementJoystickObjects1= [];
gdjs.Gabs3DCode.GDMovementJoystickObjects2= [];
gdjs.Gabs3DCode.GDMovementJoystickObjects3= [];
gdjs.Gabs3DCode.GDJumpButtonObjects1= [];
gdjs.Gabs3DCode.GDJumpButtonObjects2= [];
gdjs.Gabs3DCode.GDJumpButtonObjects3= [];
gdjs.Gabs3DCode.GDPlayerObjects1= [];
gdjs.Gabs3DCode.GDPlayerObjects2= [];
gdjs.Gabs3DCode.GDPlayerObjects3= [];
gdjs.Gabs3DCode.GDControlsToggleObjects1= [];
gdjs.Gabs3DCode.GDControlsToggleObjects2= [];
gdjs.Gabs3DCode.GDControlsToggleObjects3= [];
gdjs.Gabs3DCode.GDGabsObjects1= [];
gdjs.Gabs3DCode.GDGabsObjects2= [];
gdjs.Gabs3DCode.GDGabsObjects3= [];
gdjs.Gabs3DCode.GDMeioDedoObjects1= [];
gdjs.Gabs3DCode.GDMeioDedoObjects2= [];
gdjs.Gabs3DCode.GDMeioDedoObjects3= [];
gdjs.Gabs3DCode.GDoiObjects1= [];
gdjs.Gabs3DCode.GDoiObjects2= [];
gdjs.Gabs3DCode.GDoiObjects3= [];
gdjs.Gabs3DCode.GDtempoObjects1= [];
gdjs.Gabs3DCode.GDtempoObjects2= [];
gdjs.Gabs3DCode.GDtempoObjects3= [];


gdjs.Gabs3DCode.eventsList0 = function(runtimeScene) {

};gdjs.Gabs3DCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.Gabs3DCode.GDJumpButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("MovementJoystick"), gdjs.Gabs3DCode.GDMovementJoystickObjects2);
{for(var i = 0, len = gdjs.Gabs3DCode.GDMovementJoystickObjects2.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDMovementJoystickObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Gabs3DCode.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDJumpButtonObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Gabs3DCode.GDMovementJoystickObjects2.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDMovementJoystickObjects2[i].ActivateControl(false, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gabs"), gdjs.Gabs3DCode.GDGabsObjects1);

for (gdjs.Gabs3DCode.forEachIndex2 = 0;gdjs.Gabs3DCode.forEachIndex2 < gdjs.Gabs3DCode.GDGabsObjects1.length;++gdjs.Gabs3DCode.forEachIndex2) {
gdjs.Gabs3DCode.GDGabsObjects2.length = 0;


gdjs.Gabs3DCode.forEachTemporary2 = gdjs.Gabs3DCode.GDGabsObjects1[gdjs.Gabs3DCode.forEachIndex2];
gdjs.Gabs3DCode.GDGabsObjects2.push(gdjs.Gabs3DCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gabs3DCode.GDGabsObjects2.length;i<l;++i) {
    if ( gdjs.Gabs3DCode.GDGabsObjects2[i].getY() != 295 ) {
        isConditionTrue_0 = true;
        gdjs.Gabs3DCode.GDGabsObjects2[k] = gdjs.Gabs3DCode.GDGabsObjects2[i];
        ++k;
    }
}
gdjs.Gabs3DCode.GDGabsObjects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Gabs3DCode.GDGabsObjects2.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDGabsObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Gabs3DCode.GDGabsObjects2.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDGabsObjects2[i].activateBehavior("Physics3D", false);
}
}
}
}

}


};gdjs.Gabs3DCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Gabs3DCode.GDControlsToggleObjects1, gdjs.Gabs3DCode.GDControlsToggleObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gabs3DCode.GDControlsToggleObjects2.length;i<l;++i) {
    if ( gdjs.Gabs3DCode.GDControlsToggleObjects2[i].IsChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Gabs3DCode.GDControlsToggleObjects2[k] = gdjs.Gabs3DCode.GDControlsToggleObjects2[i];
        ++k;
    }
}
gdjs.Gabs3DCode.GDControlsToggleObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.Gabs3DCode.GDJumpButtonObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Touch");
}
{for(var i = 0, len = gdjs.Gabs3DCode.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDJumpButtonObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Gabs3DCode.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDJumpButtonObjects2[i].activateBehavior("MultitouchButton", true);
}
}
}

}


{

/* Reuse gdjs.Gabs3DCode.GDControlsToggleObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gabs3DCode.GDControlsToggleObjects1.length;i<l;++i) {
    if ( !(gdjs.Gabs3DCode.GDControlsToggleObjects1[i].IsChecked(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Gabs3DCode.GDControlsToggleObjects1[k] = gdjs.Gabs3DCode.GDControlsToggleObjects1[i];
        ++k;
    }
}
gdjs.Gabs3DCode.GDControlsToggleObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.Gabs3DCode.GDJumpButtonObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Keyboard");
}
{for(var i = 0, len = gdjs.Gabs3DCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDJumpButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Gabs3DCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDJumpButtonObjects1[i].activateBehavior("MultitouchButton", false);
}
}
}

}


};gdjs.Gabs3DCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.Gabs3DCode.GDControlsToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gabs3DCode.GDControlsToggleObjects1.length;i<l;++i) {
    if ( gdjs.Gabs3DCode.GDControlsToggleObjects1[i].HasJustBeenToggled(null) ) {
        isConditionTrue_0 = true;
        gdjs.Gabs3DCode.GDControlsToggleObjects1[k] = gdjs.Gabs3DCode.GDControlsToggleObjects1[i];
        ++k;
    }
}
gdjs.Gabs3DCode.GDControlsToggleObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Gabs3DCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Gabs3DCode.mapOfGDgdjs_9546Gabs3DCode_9546GDControlsToggleObjects1Objects = Hashtable.newFrom({"ControlsToggle": gdjs.Gabs3DCode.GDControlsToggleObjects1});
gdjs.Gabs3DCode.mapOfGDgdjs_9546Gabs3DCode_9546GDMovementJoystickObjects2Objects = Hashtable.newFrom({"MovementJoystick": gdjs.Gabs3DCode.GDMovementJoystickObjects2});
gdjs.Gabs3DCode.mapOfGDgdjs_9546Gabs3DCode_9546GDMovementJoystickObjects1Objects = Hashtable.newFrom({"MovementJoystick": gdjs.Gabs3DCode.GDMovementJoystickObjects1});
gdjs.Gabs3DCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.Gabs3DCode.GDJumpButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovementJoystick"), gdjs.Gabs3DCode.GDMovementJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.func(runtimeScene, gdjs.Gabs3DCode.mapOfGDgdjs_9546Gabs3DCode_9546GDMovementJoystickObjects1Objects, "Left", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gabs3DCode.GDJumpButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.Gabs3DCode.GDJumpButtonObjects1[i].getBehavior("MultitouchButton").IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Gabs3DCode.GDJumpButtonObjects1[k] = gdjs.Gabs3DCode.GDJumpButtonObjects1[i];
        ++k;
    }
}
gdjs.Gabs3DCode.GDJumpButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gabs3DCode.GDMovementJoystickObjects1.length;i<l;++i) {
    if ( !(gdjs.Gabs3DCode.GDMovementJoystickObjects1[i].IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Gabs3DCode.GDMovementJoystickObjects1[k] = gdjs.Gabs3DCode.GDMovementJoystickObjects1[i];
        ++k;
    }
}
gdjs.Gabs3DCode.GDMovementJoystickObjects1.length = k;
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, null);
}
}

}


};gdjs.Gabs3DCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MovementJoystick"), gdjs.Gabs3DCode.GDMovementJoystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.func(runtimeScene, gdjs.Gabs3DCode.mapOfGDgdjs_9546Gabs3DCode_9546GDMovementJoystickObjects2Objects, "Left", null);
if (isConditionTrue_0) {
/* Reuse gdjs.Gabs3DCode.GDMovementJoystickObjects2 */
{for(var i = 0, len = gdjs.Gabs3DCode.GDMovementJoystickObjects2.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDMovementJoystickObjects2[i].TeleportAndPress(null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14398244);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Gabs3DCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Gabs3DCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.Gabs3DCode.GDControlsToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Touch");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Gabs3DCode.mapOfGDgdjs_9546Gabs3DCode_9546GDControlsToggleObjects1Objects, runtimeScene, true, true);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Gabs3DCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Gabs3DCode.mapOfGDgdjs_9546Gabs3DCode_9546GDControlsToggleObjects1Objects = Hashtable.newFrom({"ControlsToggle": gdjs.Gabs3DCode.GDControlsToggleObjects1});
gdjs.Gabs3DCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.Gabs3DCode.GDControlsToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Keyboard");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Gabs3DCode.mapOfGDgdjs_9546Gabs3DCode_9546GDControlsToggleObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, null));
}
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, null);
}
}

}


};gdjs.Gabs3DCode.mapOfGDgdjs_9546Gabs3DCode_9546GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.Gabs3DCode.GDObstacleObjects1});
gdjs.Gabs3DCode.mapOfGDgdjs_9546Gabs3DCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Gabs3DCode.GDPlayerObjects1});
gdjs.Gabs3DCode.mapOfGDgdjs_9546Gabs3DCode_9546GDGroundObjects1Objects = Hashtable.newFrom({"Ground": gdjs.Gabs3DCode.GDGroundObjects1});
gdjs.Gabs3DCode.mapOfGDgdjs_9546Gabs3DCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Gabs3DCode.GDPlayerObjects1});
gdjs.Gabs3DCode.asyncCallback14406460 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Gabs3DCode.localVariables);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "ui");
}
gdjs.Gabs3DCode.localVariables.length = 0;
}
gdjs.Gabs3DCode.idToCallbackMap.set(14406460, gdjs.Gabs3DCode.asyncCallback14406460);
gdjs.Gabs3DCode.eventsList8 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Gabs3DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Gabs3DCode.asyncCallback14406460(runtimeScene, asyncObjectsList)), 14406460, asyncObjectsList);
}
}

}


};gdjs.Gabs3DCode.asyncCallback14406124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Gabs3DCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.Gabs3DCode.GDPlayerObjects2);

gdjs.copyArray(runtimeScene.getObjects("tempo"), gdjs.Gabs3DCode.GDtempoObjects2);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Tempo");
}
{for(var i = 0, len = gdjs.Gabs3DCode.GDtempoObjects2.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDtempoObjects2[i].getBehavior("Text").setText(gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS000.func(runtimeScene, gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Tempo"), null) + gdjs.evtTools.string.newLine() + "Altura: " + gdjs.evtTools.common.toString((( gdjs.Gabs3DCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Gabs3DCode.GDPlayerObjects2[0].getBehavior("Object3D").getZ())));
}
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "ui2");
}

{ //Subevents
gdjs.Gabs3DCode.eventsList8(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Gabs3DCode.localVariables.length = 0;
}
gdjs.Gabs3DCode.idToCallbackMap.set(14406124, gdjs.Gabs3DCode.asyncCallback14406124);
gdjs.Gabs3DCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Gabs3DCode.localVariables);
for (const obj of gdjs.Gabs3DCode.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Gabs3DCode.asyncCallback14406124(runtimeScene, asyncObjectsList)), 14406124, asyncObjectsList);
}
}

}


};gdjs.Gabs3DCode.eventsList10 = function(runtimeScene) {

};gdjs.Gabs3DCode.mapOfGDgdjs_9546Gabs3DCode_9546GDGabsObjects1Objects = Hashtable.newFrom({"Gabs": gdjs.Gabs3DCode.GDGabsObjects1});
gdjs.Gabs3DCode.mapOfGDgdjs_9546Gabs3DCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Gabs3DCode.GDPlayerObjects1});
gdjs.Gabs3DCode.mapOfGDgdjs_9546Gabs3DCode_9546GDGabsObjects1Objects = Hashtable.newFrom({"Gabs": gdjs.Gabs3DCode.GDGabsObjects1});
gdjs.Gabs3DCode.mapOfGDgdjs_9546Gabs3DCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Gabs3DCode.GDPlayerObjects1});
gdjs.Gabs3DCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MeioDedo"), gdjs.Gabs3DCode.GDMeioDedoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Gabs3DCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Gabs3DCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDPlayerObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Gabs3DCode.GDMeioDedoObjects1.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDMeioDedoObjects1[i].hide();
}
}

{ //Subevents
gdjs.Gabs3DCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.Gabs3DCode.eventsList3(runtimeScene);
}


{


gdjs.Gabs3DCode.eventsList6(runtimeScene);
}


{


gdjs.Gabs3DCode.eventsList7(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Gabs"), gdjs.Gabs3DCode.GDGabsObjects1);
gdjs.copyArray(runtimeScene.getObjects("MeioDedo"), gdjs.Gabs3DCode.GDMeioDedoObjects1);
{for(var i = 0, len = gdjs.Gabs3DCode.GDGabsObjects1.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDGabsObjects1[i].setAngle(gdjs.Gabs3DCode.GDGabsObjects1[i].getAngle() + (1));
}
}
{for(var i = 0, len = gdjs.Gabs3DCode.GDMeioDedoObjects1.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDMeioDedoObjects1[i].setAngle(gdjs.Gabs3DCode.GDMeioDedoObjects1[i].getAngle() + (1));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Gabs3DCode.GDObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Gabs3DCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.Gabs3DCode.mapOfGDgdjs_9546Gabs3DCode_9546GDObstacleObjects1Objects, "Physics3D", gdjs.Gabs3DCode.mapOfGDgdjs_9546Gabs3DCode_9546GDPlayerObjects1Objects, "Physics3D", false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gabs3DCode.GDObstacleObjects1.length;i<l;++i) {
    if ( gdjs.Gabs3DCode.GDObstacleObjects1[i].getVariableBoolean(gdjs.Gabs3DCode.GDObstacleObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Gabs3DCode.GDObstacleObjects1[k] = gdjs.Gabs3DCode.GDObstacleObjects1[i];
        ++k;
    }
}
gdjs.Gabs3DCode.GDObstacleObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Gabs3DCode.GDObstacleObjects1 */
{for(var i = 0, len = gdjs.Gabs3DCode.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDObstacleObjects1[i].returnVariable(gdjs.Gabs3DCode.GDObstacleObjects1[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{for(var i = 0, len = gdjs.Gabs3DCode.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDObstacleObjects1[i].setFaceResourceName("right", "gabsyellow.jpg");
}
}
{for(var i = 0, len = gdjs.Gabs3DCode.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDObstacleObjects1[i].setFaceResourceName("left", "gabsyellow.jpg");
}
}
{for(var i = 0, len = gdjs.Gabs3DCode.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDObstacleObjects1[i].setFaceResourceName("front", "gabsyellow.jpg");
}
}
{for(var i = 0, len = gdjs.Gabs3DCode.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDObstacleObjects1[i].setFaceResourceName("back", "gabsyellow.jpg");
}
}
{for(var i = 0, len = gdjs.Gabs3DCode.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDObstacleObjects1[i].setFaceResourceName("top", "gabsyellow.jpg");
}
}
{for(var i = 0, len = gdjs.Gabs3DCode.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDObstacleObjects1[i].setFaceResourceName("bottom", "gabsyellow.jpg");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gabs"), gdjs.Gabs3DCode.GDGabsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.Gabs3DCode.GDGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Gabs3DCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.Gabs3DCode.mapOfGDgdjs_9546Gabs3DCode_9546GDGroundObjects1Objects, "Physics3D", gdjs.Gabs3DCode.mapOfGDgdjs_9546Gabs3DCode_9546GDPlayerObjects1Objects, "Physics3D", false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() >= 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gabs3DCode.GDGabsObjects1.length;i<l;++i) {
    if ( gdjs.Gabs3DCode.GDGabsObjects1[i].getY() == 295 ) {
        isConditionTrue_0 = true;
        gdjs.Gabs3DCode.GDGabsObjects1[k] = gdjs.Gabs3DCode.GDGabsObjects1[i];
        ++k;
    }
}
gdjs.Gabs3DCode.GDGabsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14404212);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Gabs3DCode.GDGabsObjects1 */
/* Reuse gdjs.Gabs3DCode.GDGroundObjects1 */
{for(var i = 0, len = gdjs.Gabs3DCode.GDGroundObjects1.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDGroundObjects1[i].setFaceResourceName("front", "gabsyellow.jpg");
}
}
{for(var i = 0, len = gdjs.Gabs3DCode.GDGabsObjects1.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDGabsObjects1[i].getBehavior("Tween").addObjectPositionZTween2("Object3D", "Ascendeu", 1, "linear", 3, false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(true);
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "ui");
}

{ //Subevents
gdjs.Gabs3DCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Gabs3DCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("tempo"), gdjs.Gabs3DCode.GDtempoObjects1);
{for(var i = 0, len = gdjs.Gabs3DCode.GDtempoObjects1.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDtempoObjects1[i].getBehavior("Text").setText(gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS000.func(runtimeScene, gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Tempo"), null) + gdjs.evtTools.string.newLine() + "Altura: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo((( gdjs.Gabs3DCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Gabs3DCode.GDPlayerObjects1[0].getBehavior("Object3D").getZ()) / 4, 2)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gabs"), gdjs.Gabs3DCode.GDGabsObjects1);

for (gdjs.Gabs3DCode.forEachIndex2 = 0;gdjs.Gabs3DCode.forEachIndex2 < gdjs.Gabs3DCode.GDGabsObjects1.length;++gdjs.Gabs3DCode.forEachIndex2) {
gdjs.Gabs3DCode.GDGabsObjects2.length = 0;


gdjs.Gabs3DCode.forEachTemporary2 = gdjs.Gabs3DCode.GDGabsObjects1[gdjs.Gabs3DCode.forEachIndex2];
gdjs.Gabs3DCode.GDGabsObjects2.push(gdjs.Gabs3DCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gabs3DCode.GDGabsObjects2.length;i<l;++i) {
    if ( gdjs.Gabs3DCode.GDGabsObjects2[i].getY() != 295 ) {
        isConditionTrue_0 = true;
        gdjs.Gabs3DCode.GDGabsObjects2[k] = gdjs.Gabs3DCode.GDGabsObjects2[i];
        ++k;
    }
}
gdjs.Gabs3DCode.GDGabsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14407924);
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Gabs3DCode.GDGabsObjects2.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDGabsObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Gabs3DCode.GDGabsObjects2.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDGabsObjects2[i].activateBehavior("Physics3D", true);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gabs"), gdjs.Gabs3DCode.GDGabsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Gabs3DCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.Gabs3DCode.mapOfGDgdjs_9546Gabs3DCode_9546GDGabsObjects1Objects, "Physics3D", gdjs.Gabs3DCode.mapOfGDgdjs_9546Gabs3DCode_9546GDPlayerObjects1Objects, "Physics3D", false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gabs3DCode.GDGabsObjects1.length;i<l;++i) {
    if ( gdjs.Gabs3DCode.GDGabsObjects1[i].getBehavior("Object3D").getZ() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Gabs3DCode.GDGabsObjects1[k] = gdjs.Gabs3DCode.GDGabsObjects1[i];
        ++k;
    }
}
gdjs.Gabs3DCode.GDGabsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14409500);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Nyan Cat! [Official].mp3", 1, true, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gabs"), gdjs.Gabs3DCode.GDGabsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Gabs3DCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.Gabs3DCode.mapOfGDgdjs_9546Gabs3DCode_9546GDGabsObjects1Objects, "Physics3D", gdjs.Gabs3DCode.mapOfGDgdjs_9546Gabs3DCode_9546GDPlayerObjects1Objects, "Physics3D", false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gabs3DCode.GDGabsObjects1.length;i<l;++i) {
    if ( gdjs.Gabs3DCode.GDGabsObjects1[i].getBehavior("Object3D").getZ() == 1249 ) {
        isConditionTrue_0 = true;
        gdjs.Gabs3DCode.GDGabsObjects1[k] = gdjs.Gabs3DCode.GDGabsObjects1[i];
        ++k;
    }
}
gdjs.Gabs3DCode.GDGabsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 3));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14411468);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MeioDedo"), gdjs.Gabs3DCode.GDMeioDedoObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Atumalaca Estourado.mp3", 2, false, 80, 1);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sementes-anhanguera.mp3", 3, true, 100, 1);
}
{for(var i = 0, len = gdjs.Gabs3DCode.GDMeioDedoObjects1.length ;i < len;++i) {
    gdjs.Gabs3DCode.GDMeioDedoObjects1[i].hide(false);
}
}
}

}


};

gdjs.Gabs3DCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Gabs3DCode.GDGroundObjects1.length = 0;
gdjs.Gabs3DCode.GDGroundObjects2.length = 0;
gdjs.Gabs3DCode.GDGroundObjects3.length = 0;
gdjs.Gabs3DCode.GDObstacleObjects1.length = 0;
gdjs.Gabs3DCode.GDObstacleObjects2.length = 0;
gdjs.Gabs3DCode.GDObstacleObjects3.length = 0;
gdjs.Gabs3DCode.GDPushableBoxObjects1.length = 0;
gdjs.Gabs3DCode.GDPushableBoxObjects2.length = 0;
gdjs.Gabs3DCode.GDPushableBoxObjects3.length = 0;
gdjs.Gabs3DCode.GDMovementJoystickObjects1.length = 0;
gdjs.Gabs3DCode.GDMovementJoystickObjects2.length = 0;
gdjs.Gabs3DCode.GDMovementJoystickObjects3.length = 0;
gdjs.Gabs3DCode.GDJumpButtonObjects1.length = 0;
gdjs.Gabs3DCode.GDJumpButtonObjects2.length = 0;
gdjs.Gabs3DCode.GDJumpButtonObjects3.length = 0;
gdjs.Gabs3DCode.GDPlayerObjects1.length = 0;
gdjs.Gabs3DCode.GDPlayerObjects2.length = 0;
gdjs.Gabs3DCode.GDPlayerObjects3.length = 0;
gdjs.Gabs3DCode.GDControlsToggleObjects1.length = 0;
gdjs.Gabs3DCode.GDControlsToggleObjects2.length = 0;
gdjs.Gabs3DCode.GDControlsToggleObjects3.length = 0;
gdjs.Gabs3DCode.GDGabsObjects1.length = 0;
gdjs.Gabs3DCode.GDGabsObjects2.length = 0;
gdjs.Gabs3DCode.GDGabsObjects3.length = 0;
gdjs.Gabs3DCode.GDMeioDedoObjects1.length = 0;
gdjs.Gabs3DCode.GDMeioDedoObjects2.length = 0;
gdjs.Gabs3DCode.GDMeioDedoObjects3.length = 0;
gdjs.Gabs3DCode.GDoiObjects1.length = 0;
gdjs.Gabs3DCode.GDoiObjects2.length = 0;
gdjs.Gabs3DCode.GDoiObjects3.length = 0;
gdjs.Gabs3DCode.GDtempoObjects1.length = 0;
gdjs.Gabs3DCode.GDtempoObjects2.length = 0;
gdjs.Gabs3DCode.GDtempoObjects3.length = 0;

gdjs.Gabs3DCode.eventsList11(runtimeScene);
gdjs.Gabs3DCode.GDGroundObjects1.length = 0;
gdjs.Gabs3DCode.GDGroundObjects2.length = 0;
gdjs.Gabs3DCode.GDGroundObjects3.length = 0;
gdjs.Gabs3DCode.GDObstacleObjects1.length = 0;
gdjs.Gabs3DCode.GDObstacleObjects2.length = 0;
gdjs.Gabs3DCode.GDObstacleObjects3.length = 0;
gdjs.Gabs3DCode.GDPushableBoxObjects1.length = 0;
gdjs.Gabs3DCode.GDPushableBoxObjects2.length = 0;
gdjs.Gabs3DCode.GDPushableBoxObjects3.length = 0;
gdjs.Gabs3DCode.GDMovementJoystickObjects1.length = 0;
gdjs.Gabs3DCode.GDMovementJoystickObjects2.length = 0;
gdjs.Gabs3DCode.GDMovementJoystickObjects3.length = 0;
gdjs.Gabs3DCode.GDJumpButtonObjects1.length = 0;
gdjs.Gabs3DCode.GDJumpButtonObjects2.length = 0;
gdjs.Gabs3DCode.GDJumpButtonObjects3.length = 0;
gdjs.Gabs3DCode.GDPlayerObjects1.length = 0;
gdjs.Gabs3DCode.GDPlayerObjects2.length = 0;
gdjs.Gabs3DCode.GDPlayerObjects3.length = 0;
gdjs.Gabs3DCode.GDControlsToggleObjects1.length = 0;
gdjs.Gabs3DCode.GDControlsToggleObjects2.length = 0;
gdjs.Gabs3DCode.GDControlsToggleObjects3.length = 0;
gdjs.Gabs3DCode.GDGabsObjects1.length = 0;
gdjs.Gabs3DCode.GDGabsObjects2.length = 0;
gdjs.Gabs3DCode.GDGabsObjects3.length = 0;
gdjs.Gabs3DCode.GDMeioDedoObjects1.length = 0;
gdjs.Gabs3DCode.GDMeioDedoObjects2.length = 0;
gdjs.Gabs3DCode.GDMeioDedoObjects3.length = 0;
gdjs.Gabs3DCode.GDoiObjects1.length = 0;
gdjs.Gabs3DCode.GDoiObjects2.length = 0;
gdjs.Gabs3DCode.GDoiObjects3.length = 0;
gdjs.Gabs3DCode.GDtempoObjects1.length = 0;
gdjs.Gabs3DCode.GDtempoObjects2.length = 0;
gdjs.Gabs3DCode.GDtempoObjects3.length = 0;


return;

}

gdjs['Gabs3DCode'] = gdjs.Gabs3DCode;
