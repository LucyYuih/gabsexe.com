gdjs.JogoCode = {};
gdjs.JogoCode.localVariables = [];
gdjs.JogoCode.idToCallbackMap = new Map();
gdjs.JogoCode.GDInventoryEmptyObjects1= [];
gdjs.JogoCode.GDInventoryEmptyObjects2= [];
gdjs.JogoCode.GDInventoryEmptyObjects3= [];
gdjs.JogoCode.GDGabsObjects1= [];
gdjs.JogoCode.GDGabsObjects2= [];
gdjs.JogoCode.GDGabsObjects3= [];
gdjs.JogoCode.GDGabismosTextObjects1= [];
gdjs.JogoCode.GDGabismosTextObjects2= [];
gdjs.JogoCode.GDGabismosTextObjects3= [];
gdjs.JogoCode.GDUpgradeButtonObjects1= [];
gdjs.JogoCode.GDUpgradeButtonObjects2= [];
gdjs.JogoCode.GDUpgradeButtonObjects3= [];
gdjs.JogoCode.GDB_95244nusObjects1= [];
gdjs.JogoCode.GDB_95244nusObjects2= [];
gdjs.JogoCode.GDB_95244nusObjects3= [];
gdjs.JogoCode.GDUpgradesTextObjects1= [];
gdjs.JogoCode.GDUpgradesTextObjects2= [];
gdjs.JogoCode.GDUpgradesTextObjects3= [];
gdjs.JogoCode.GDIconsObjects1= [];
gdjs.JogoCode.GDIconsObjects2= [];
gdjs.JogoCode.GDIconsObjects3= [];
gdjs.JogoCode.GDASopaObjects1= [];
gdjs.JogoCode.GDASopaObjects2= [];
gdjs.JogoCode.GDASopaObjects3= [];
gdjs.JogoCode.GDMadeByTextObjects1= [];
gdjs.JogoCode.GDMadeByTextObjects2= [];
gdjs.JogoCode.GDMadeByTextObjects3= [];
gdjs.JogoCode.GDBGObjects1= [];
gdjs.JogoCode.GDBGObjects2= [];
gdjs.JogoCode.GDBGObjects3= [];
gdjs.JogoCode.GDUpgradeButton2Objects1= [];
gdjs.JogoCode.GDUpgradeButton2Objects2= [];
gdjs.JogoCode.GDUpgradeButton2Objects3= [];
gdjs.JogoCode.GDInventoryEmpty2Objects1= [];
gdjs.JogoCode.GDInventoryEmpty2Objects2= [];
gdjs.JogoCode.GDInventoryEmpty2Objects3= [];
gdjs.JogoCode.GDFinalTextObjects1= [];
gdjs.JogoCode.GDFinalTextObjects2= [];
gdjs.JogoCode.GDFinalTextObjects3= [];
gdjs.JogoCode.GDEndlessButtonObjects1= [];
gdjs.JogoCode.GDEndlessButtonObjects2= [];
gdjs.JogoCode.GDEndlessButtonObjects3= [];
gdjs.JogoCode.GDTempoTextObjects1= [];
gdjs.JogoCode.GDTempoTextObjects2= [];
gdjs.JogoCode.GDTempoTextObjects3= [];


gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDUpgradeButtonObjects1Objects = Hashtable.newFrom({"UpgradeButton": gdjs.JogoCode.GDUpgradeButtonObjects1});
gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDUpgradeButtonObjects1Objects = Hashtable.newFrom({"UpgradeButton": gdjs.JogoCode.GDUpgradeButtonObjects1});
gdjs.JogoCode.asyncCallback11919604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.JogoCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Bônus"), gdjs.JogoCode.GDB_95244nusObjects2);

{for(var i = 0, len = gdjs.JogoCode.GDB_95244nusObjects2.length ;i < len;++i) {
    gdjs.JogoCode.GDB_95244nusObjects2[i].setX(542);
}
}
gdjs.JogoCode.localVariables.length = 0;
}
gdjs.JogoCode.idToCallbackMap.set(11919604, gdjs.JogoCode.asyncCallback11919604);
gdjs.JogoCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.JogoCode.localVariables);
for (const obj of gdjs.JogoCode.GDB_95244nusObjects1) asyncObjectsList.addObject("Bônus", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.8), (runtimeScene) => (gdjs.JogoCode.asyncCallback11919604(runtimeScene, asyncObjectsList)), 11919604, asyncObjectsList);
}
}

}


};gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDUpgradeButtonObjects1Objects = Hashtable.newFrom({"UpgradeButton": gdjs.JogoCode.GDUpgradeButtonObjects1});
gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDUpgradeButton2Objects1Objects = Hashtable.newFrom({"UpgradeButton2": gdjs.JogoCode.GDUpgradeButton2Objects1});
gdjs.JogoCode.mapOfEmptyGDASopaObjects = Hashtable.newFrom({"ASopa": []});
gdjs.JogoCode.asyncCallback10321116 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.JogoCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("ASopa"), gdjs.JogoCode.GDASopaObjects2);
{for(var i = 0, len = gdjs.JogoCode.GDASopaObjects2.length ;i < len;++i) {
    gdjs.JogoCode.GDASopaObjects2[i].deleteFromScene(runtimeScene);
}
}
gdjs.JogoCode.localVariables.length = 0;
}
gdjs.JogoCode.idToCallbackMap.set(10321116, gdjs.JogoCode.asyncCallback10321116);
gdjs.JogoCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.JogoCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(8), (runtimeScene) => (gdjs.JogoCode.asyncCallback10321116(runtimeScene, asyncObjectsList)), 10321116, asyncObjectsList);
}
}

}


};gdjs.JogoCode.asyncCallback13370340 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.JogoCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}
gdjs.JogoCode.localVariables.length = 0;
}
gdjs.JogoCode.idToCallbackMap.set(13370340, gdjs.JogoCode.asyncCallback13370340);
gdjs.JogoCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.JogoCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.JogoCode.asyncCallback13370340(runtimeScene, asyncObjectsList)), 13370340, asyncObjectsList);
}
}

}


};gdjs.JogoCode.mapOfEmptyGDASopaObjects = Hashtable.newFrom({"ASopa": []});
gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDASopaObjects1Objects = Hashtable.newFrom({"ASopa": gdjs.JogoCode.GDASopaObjects1});
gdjs.JogoCode.asyncCallback10423172 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.JogoCode.localVariables);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Final");
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 256, "", 0);
}
gdjs.JogoCode.localVariables.length = 0;
}
gdjs.JogoCode.idToCallbackMap.set(10423172, gdjs.JogoCode.asyncCallback10423172);
gdjs.JogoCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.JogoCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.JogoCode.asyncCallback10423172(runtimeScene, asyncObjectsList)), 10423172, asyncObjectsList);
}
}

}


};gdjs.JogoCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.JogoCode.GDUpgradeButtonObjects1, gdjs.JogoCode.GDUpgradeButtonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JogoCode.GDUpgradeButtonObjects2.length;i<l;++i) {
    if ( gdjs.JogoCode.GDUpgradeButtonObjects2[i].getVariableNumber(gdjs.JogoCode.GDUpgradeButtonObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.JogoCode.GDUpgradeButtonObjects2[k] = gdjs.JogoCode.GDUpgradeButtonObjects2[i];
        ++k;
    }
}
gdjs.JogoCode.GDUpgradeButtonObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Base").add(1);
}
}

}


{

gdjs.copyArray(gdjs.JogoCode.GDUpgradeButtonObjects1, gdjs.JogoCode.GDUpgradeButtonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JogoCode.GDUpgradeButtonObjects2.length;i<l;++i) {
    if ( gdjs.JogoCode.GDUpgradeButtonObjects2[i].getVariableNumber(gdjs.JogoCode.GDUpgradeButtonObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.JogoCode.GDUpgradeButtonObjects2[k] = gdjs.JogoCode.GDUpgradeButtonObjects2[i];
        ++k;
    }
}
gdjs.JogoCode.GDUpgradeButtonObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Multiplayer").add(0.5);
}
}

}


{

gdjs.copyArray(gdjs.JogoCode.GDUpgradeButtonObjects1, gdjs.JogoCode.GDUpgradeButtonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JogoCode.GDUpgradeButtonObjects2.length;i<l;++i) {
    if ( gdjs.JogoCode.GDUpgradeButtonObjects2[i].getVariableNumber(gdjs.JogoCode.GDUpgradeButtonObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.JogoCode.GDUpgradeButtonObjects2[k] = gdjs.JogoCode.GDUpgradeButtonObjects2[i];
        ++k;
    }
}
gdjs.JogoCode.GDUpgradeButtonObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Porcentage").add(100);
}
}

}


{

gdjs.copyArray(gdjs.JogoCode.GDUpgradeButtonObjects1, gdjs.JogoCode.GDUpgradeButtonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JogoCode.GDUpgradeButtonObjects2.length;i<l;++i) {
    if ( gdjs.JogoCode.GDUpgradeButtonObjects2[i].getVariableNumber(gdjs.JogoCode.GDUpgradeButtonObjects2[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.JogoCode.GDUpgradeButtonObjects2[k] = gdjs.JogoCode.GDUpgradeButtonObjects2[i];
        ++k;
    }
}
gdjs.JogoCode.GDUpgradeButtonObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}
}

}


{

/* Reuse gdjs.JogoCode.GDUpgradeButtonObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JogoCode.GDUpgradeButtonObjects1.length;i<l;++i) {
    if ( gdjs.JogoCode.GDUpgradeButtonObjects1[i].getVariableNumber(gdjs.JogoCode.GDUpgradeButtonObjects1[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.JogoCode.GDUpgradeButtonObjects1[k] = gdjs.JogoCode.GDUpgradeButtonObjects1[i];
        ++k;
    }
}
gdjs.JogoCode.GDUpgradeButtonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(7).add(1);
}
}

}


};gdjs.JogoCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("UpgradesText"), gdjs.JogoCode.GDUpgradesTextObjects1);
{for(var i = 0, len = gdjs.JogoCode.GDUpgradesTextObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDUpgradesTextObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Sopa");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Time");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "sementes-anhanguera.mp3");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "bônus.mp3");
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 1024, "Final", 0);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Stickerbush Symphony Restored to HD.mp3", 1, false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GabismosText"), gdjs.JogoCode.GDGabismosTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Gabs"), gdjs.JogoCode.GDGabsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JogoCode.GDGabismosTextObjects1.length;i<l;++i) {
    if ( gdjs.JogoCode.GDGabismosTextObjects1[i].getCenterXInScene() != (( gdjs.JogoCode.GDGabsObjects1.length === 0 ) ? 0 :gdjs.JogoCode.GDGabsObjects1[0].getCenterXInScene()) ) {
        isConditionTrue_0 = true;
        gdjs.JogoCode.GDGabismosTextObjects1[k] = gdjs.JogoCode.GDGabismosTextObjects1[i];
        ++k;
    }
}
gdjs.JogoCode.GDGabismosTextObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JogoCode.GDGabismosTextObjects1 */
/* Reuse gdjs.JogoCode.GDGabsObjects1 */
{for(var i = 0, len = gdjs.JogoCode.GDGabismosTextObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDGabismosTextObjects1[i].setCenterXInScene((( gdjs.JogoCode.GDGabsObjects1.length === 0 ) ? 0 :gdjs.JogoCode.GDGabsObjects1[0].getCenterXInScene()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gabs"), gdjs.JogoCode.GDGabsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JogoCode.GDGabsObjects1.length;i<l;++i) {
    if ( gdjs.JogoCode.GDGabsObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.JogoCode.GDGabsObjects1[k] = gdjs.JogoCode.GDGabsObjects1[i];
        ++k;
    }
}
gdjs.JogoCode.GDGabsObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(((runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Base").getAsNumber() * runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Multiplayer").getAsNumber()) * (runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Porcentage").getAsNumber() / 100)) * runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(8).add(runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber());
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GabismosText"), gdjs.JogoCode.GDGabismosTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JogoCode.GDGabismosTextObjects1.length;i<l;++i) {
    if ( gdjs.JogoCode.GDGabismosTextObjects1[i].getBehavior("Text").getText() != "Gabismos: " + gdjs.evtTools.common.toString(Math.round(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() / Math.pow(1000, Math.floor(gdjs.evtTools.common.log10(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()) / 3)) * 100) / 100) + runtimeScene.getScene().getVariables().getFromIndex(5).getChild(Math.floor(gdjs.evtTools.common.log10(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()) / 3)).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.JogoCode.GDGabismosTextObjects1[k] = gdjs.JogoCode.GDGabismosTextObjects1[i];
        ++k;
    }
}
gdjs.JogoCode.GDGabismosTextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() != 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JogoCode.GDGabismosTextObjects1 */
{for(var i = 0, len = gdjs.JogoCode.GDGabismosTextObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDGabismosTextObjects1[i].getBehavior("Text").setText("Gabismos: " + gdjs.evtTools.common.toString(Math.round(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() / Math.pow(1000, Math.floor(gdjs.evtTools.common.log10(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()) / 3)) * 100) / 100) + runtimeScene.getScene().getVariables().getFromIndex(5).getChild(Math.floor(gdjs.evtTools.common.log10(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()) / 3)).getAsString() + gdjs.evtTools.string.newLine() + "Aura: " + runtimeScene.getScene().getVariables().getFromIndex(8).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GabismosText"), gdjs.JogoCode.GDGabismosTextObjects1);
{for(var i = 0, len = gdjs.JogoCode.GDGabismosTextObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDGabismosTextObjects1[i].getBehavior("Text").setText("Gabismos: " + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + gdjs.evtTools.string.newLine() + "Aura: " + runtimeScene.getScene().getVariables().getFromIndex(8).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UpgradeButton"), gdjs.JogoCode.GDUpgradeButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDUpgradeButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "pointer", null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UpgradeButton"), gdjs.JogoCode.GDUpgradeButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDUpgradeButtonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "default", null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UpgradeButton"), gdjs.JogoCode.GDUpgradeButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JogoCode.GDUpgradeButtonObjects1.length;i<l;++i) {
    if ( gdjs.JogoCode.GDUpgradeButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.JogoCode.GDUpgradeButtonObjects1[k] = gdjs.JogoCode.GDUpgradeButtonObjects1[i];
        ++k;
    }
}
gdjs.JogoCode.GDUpgradeButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JogoCode.GDUpgradeButtonObjects1.length;i<l;++i) {
    if ( gdjs.JogoCode.GDUpgradeButtonObjects1[i].getVariableNumber(gdjs.JogoCode.GDUpgradeButtonObjects1[i].getVariables().getFromIndex(0)) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.JogoCode.GDUpgradeButtonObjects1[k] = gdjs.JogoCode.GDUpgradeButtonObjects1[i];
        ++k;
    }
}
gdjs.JogoCode.GDUpgradeButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getChild("Upgraded").getChild(5).getAsNumber() >= 168);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bônus"), gdjs.JogoCode.GDB_95244nusObjects1);
{for(var i = 0, len = gdjs.JogoCode.GDB_95244nusObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDB_95244nusObjects1[i].setPosition(0,0);
}
}
{for(var i = 0, len = gdjs.JogoCode.GDB_95244nusObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDB_95244nusObjects1[i].play();
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "bônus.mp3", false, 100, 1);
}

{ //Subevents
gdjs.JogoCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TempoText"), gdjs.JogoCode.GDTempoTextObjects1);
{for(var i = 0, len = gdjs.JogoCode.GDTempoTextObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDTempoTextObjects1[i].getBehavior("Text").setText(gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS000.func(runtimeScene, gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Time"), null));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UpgradeButton"), gdjs.JogoCode.GDUpgradeButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDUpgradeButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.JogoCode.GDUpgradeButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("UpgradesText"), gdjs.JogoCode.GDUpgradesTextObjects1);
{for(var i = 0, len = gdjs.JogoCode.GDUpgradesTextObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDUpgradesTextObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(6).getChild("info").getChild("Name").getChild(((gdjs.JogoCode.GDUpgradeButtonObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JogoCode.GDUpgradeButtonObjects1[0].getVariables()).getFromIndex(0).getAsNumber()).getAsString() + gdjs.evtTools.string.newLine() + runtimeScene.getScene().getVariables().getFromIndex(6).getChild("info").getChild("Descrição").getChild(((gdjs.JogoCode.GDUpgradeButtonObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JogoCode.GDUpgradeButtonObjects1[0].getVariables()).getFromIndex(0).getAsNumber()).getAsString() + gdjs.evtTools.string.newLine() + "Preço: " + gdjs.evtTools.common.toString(Math.round(runtimeScene.getScene().getVariables().getFromIndex(6).getChild("Price").getChild(((gdjs.JogoCode.GDUpgradeButtonObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JogoCode.GDUpgradeButtonObjects1[0].getVariables()).getFromIndex(0).getAsNumber()).getAsNumber() / Math.pow(1000, Math.floor(gdjs.evtTools.common.log10(runtimeScene.getScene().getVariables().getFromIndex(6).getChild("Price").getChild(((gdjs.JogoCode.GDUpgradeButtonObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JogoCode.GDUpgradeButtonObjects1[0].getVariables()).getFromIndex(0).getAsNumber()).getAsNumber()) / 3)) * 100) / 100) + runtimeScene.getScene().getVariables().getFromIndex(5).getChild(Math.floor(gdjs.evtTools.common.log10(runtimeScene.getScene().getVariables().getFromIndex(6).getChild("Price").getChild(((gdjs.JogoCode.GDUpgradeButtonObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JogoCode.GDUpgradeButtonObjects1[0].getVariables()).getFromIndex(0).getAsNumber()).getAsNumber()) / 3)).getAsString() + gdjs.evtTools.string.newLine() + runtimeScene.getScene().getVariables().getFromIndex(6).getChild("Upgraded").getChild(((gdjs.JogoCode.GDUpgradeButtonObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JogoCode.GDUpgradeButtonObjects1[0].getVariables()).getFromIndex(0).getAsNumber()).getAsString() + " / " + runtimeScene.getScene().getVariables().getFromIndex(6).getChild("Limit").getChild(((gdjs.JogoCode.GDUpgradeButtonObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JogoCode.GDUpgradeButtonObjects1[0].getVariables()).getFromIndex(0).getAsNumber()).getAsString());
}
}
{for(var i = 0, len = gdjs.JogoCode.GDUpgradesTextObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDUpgradesTextObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UpgradeButton2"), gdjs.JogoCode.GDUpgradeButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDUpgradeButton2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("UpgradesText"), gdjs.JogoCode.GDUpgradesTextObjects1);
{for(var i = 0, len = gdjs.JogoCode.GDUpgradesTextObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDUpgradesTextObjects1[i].getBehavior("Text").setText("Gabismo Supremo" + gdjs.evtTools.string.newLine() + "Desbloqueia o verdadeiro poder do gabismo" + gdjs.evtTools.string.newLine() + "Preço: 29K AURA");
}
}
{for(var i = 0, len = gdjs.JogoCode.GDUpgradesTextObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDUpgradesTextObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.JogoCode.mapOfEmptyGDASopaObjects) >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13388004);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.JogoCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ASopa"), gdjs.JogoCode.GDASopaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JogoCode.GDASopaObjects1.length;i<l;++i) {
    if ( gdjs.JogoCode.GDASopaObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.JogoCode.GDASopaObjects1[k] = gdjs.JogoCode.GDASopaObjects1[i];
        ++k;
    }
}
gdjs.JogoCode.GDASopaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11251596);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JogoCode.GDASopaObjects1 */
{for(var i = 0, len = gdjs.JogoCode.GDASopaObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDASopaObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(3);
}

{ //Subevents
gdjs.JogoCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "Sopa", gdjs.randomInRange(90, 180), null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.JogoCode.mapOfEmptyGDASopaObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10748204);
}
}
}
}
if (isConditionTrue_0) {
gdjs.JogoCode.GDASopaObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDASopaObjects1Objects, gdjs.randomInRange(0, 200), gdjs.randomInRange(0, 300), "");
}
{for(var i = 0, len = gdjs.JogoCode.GDASopaObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDASopaObjects1[i].getBehavior("Resizable").setSize(64, 64);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UpgradeButton2"), gdjs.JogoCode.GDUpgradeButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JogoCode.GDUpgradeButton2Objects1.length;i<l;++i) {
    if ( gdjs.JogoCode.GDUpgradeButton2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.JogoCode.GDUpgradeButton2Objects1[k] = gdjs.JogoCode.GDUpgradeButton2Objects1[i];
        ++k;
    }
}
gdjs.JogoCode.GDUpgradeButton2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() >= 0);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sementes-anhanguera.mp3", 2, false, 100, 1);
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "Final");
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 1024, "", 0);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 256, "Final", 0);
}
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 1, 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isSoundOnChannelStopped(runtimeScene, 2);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13248916);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 1, 100);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EndlessButton"), gdjs.JogoCode.GDEndlessButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JogoCode.GDEndlessButtonObjects1.length;i<l;++i) {
    if ( gdjs.JogoCode.GDEndlessButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.JogoCode.GDEndlessButtonObjects1[k] = gdjs.JogoCode.GDEndlessButtonObjects1[i];
        ++k;
    }
}
gdjs.JogoCode.GDEndlessButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Final");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.JogoCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UpgradeButton"), gdjs.JogoCode.GDUpgradeButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JogoCode.GDUpgradeButtonObjects1.length;i<l;++i) {
    if ( gdjs.JogoCode.GDUpgradeButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.JogoCode.GDUpgradeButtonObjects1[k] = gdjs.JogoCode.GDUpgradeButtonObjects1[i];
        ++k;
    }
}
gdjs.JogoCode.GDUpgradeButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(6).getChild("Price").getChild(((gdjs.JogoCode.GDUpgradeButtonObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JogoCode.GDUpgradeButtonObjects1[0].getVariables()).getFromIndex(0).getAsNumber()).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getChild("Upgraded").getChild(((gdjs.JogoCode.GDUpgradeButtonObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JogoCode.GDUpgradeButtonObjects1[0].getVariables()).getFromIndex(0).getAsNumber()).getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(6).getChild("Limit").getChild(((gdjs.JogoCode.GDUpgradeButtonObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JogoCode.GDUpgradeButtonObjects1[0].getVariables()).getFromIndex(0).getAsNumber()).getAsNumber());
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JogoCode.GDUpgradeButtonObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(runtimeScene.getScene().getVariables().getFromIndex(6).getChild("Price").getChild(((gdjs.JogoCode.GDUpgradeButtonObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JogoCode.GDUpgradeButtonObjects1[0].getVariables()).getFromIndex(0).getAsNumber()).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(6).getChild("Upgraded").getChild(((gdjs.JogoCode.GDUpgradeButtonObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JogoCode.GDUpgradeButtonObjects1[0].getVariables()).getFromIndex(0).getAsNumber()).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).getChild("Price").getChild(((gdjs.JogoCode.GDUpgradeButtonObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JogoCode.GDUpgradeButtonObjects1[0].getVariables()).getFromIndex(0).getAsNumber()).mul(runtimeScene.getScene().getVariables().getFromIndex(6).getChild("Mult").getChild(((gdjs.JogoCode.GDUpgradeButtonObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JogoCode.GDUpgradeButtonObjects1[0].getVariables()).getFromIndex(0).getAsNumber()).getAsNumber());
}

{ //Subevents
gdjs.JogoCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.JogoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.JogoCode.GDInventoryEmptyObjects1.length = 0;
gdjs.JogoCode.GDInventoryEmptyObjects2.length = 0;
gdjs.JogoCode.GDInventoryEmptyObjects3.length = 0;
gdjs.JogoCode.GDGabsObjects1.length = 0;
gdjs.JogoCode.GDGabsObjects2.length = 0;
gdjs.JogoCode.GDGabsObjects3.length = 0;
gdjs.JogoCode.GDGabismosTextObjects1.length = 0;
gdjs.JogoCode.GDGabismosTextObjects2.length = 0;
gdjs.JogoCode.GDGabismosTextObjects3.length = 0;
gdjs.JogoCode.GDUpgradeButtonObjects1.length = 0;
gdjs.JogoCode.GDUpgradeButtonObjects2.length = 0;
gdjs.JogoCode.GDUpgradeButtonObjects3.length = 0;
gdjs.JogoCode.GDB_95244nusObjects1.length = 0;
gdjs.JogoCode.GDB_95244nusObjects2.length = 0;
gdjs.JogoCode.GDB_95244nusObjects3.length = 0;
gdjs.JogoCode.GDUpgradesTextObjects1.length = 0;
gdjs.JogoCode.GDUpgradesTextObjects2.length = 0;
gdjs.JogoCode.GDUpgradesTextObjects3.length = 0;
gdjs.JogoCode.GDIconsObjects1.length = 0;
gdjs.JogoCode.GDIconsObjects2.length = 0;
gdjs.JogoCode.GDIconsObjects3.length = 0;
gdjs.JogoCode.GDASopaObjects1.length = 0;
gdjs.JogoCode.GDASopaObjects2.length = 0;
gdjs.JogoCode.GDASopaObjects3.length = 0;
gdjs.JogoCode.GDMadeByTextObjects1.length = 0;
gdjs.JogoCode.GDMadeByTextObjects2.length = 0;
gdjs.JogoCode.GDMadeByTextObjects3.length = 0;
gdjs.JogoCode.GDBGObjects1.length = 0;
gdjs.JogoCode.GDBGObjects2.length = 0;
gdjs.JogoCode.GDBGObjects3.length = 0;
gdjs.JogoCode.GDUpgradeButton2Objects1.length = 0;
gdjs.JogoCode.GDUpgradeButton2Objects2.length = 0;
gdjs.JogoCode.GDUpgradeButton2Objects3.length = 0;
gdjs.JogoCode.GDInventoryEmpty2Objects1.length = 0;
gdjs.JogoCode.GDInventoryEmpty2Objects2.length = 0;
gdjs.JogoCode.GDInventoryEmpty2Objects3.length = 0;
gdjs.JogoCode.GDFinalTextObjects1.length = 0;
gdjs.JogoCode.GDFinalTextObjects2.length = 0;
gdjs.JogoCode.GDFinalTextObjects3.length = 0;
gdjs.JogoCode.GDEndlessButtonObjects1.length = 0;
gdjs.JogoCode.GDEndlessButtonObjects2.length = 0;
gdjs.JogoCode.GDEndlessButtonObjects3.length = 0;
gdjs.JogoCode.GDTempoTextObjects1.length = 0;
gdjs.JogoCode.GDTempoTextObjects2.length = 0;
gdjs.JogoCode.GDTempoTextObjects3.length = 0;

gdjs.JogoCode.eventsList5(runtimeScene);
gdjs.JogoCode.GDInventoryEmptyObjects1.length = 0;
gdjs.JogoCode.GDInventoryEmptyObjects2.length = 0;
gdjs.JogoCode.GDInventoryEmptyObjects3.length = 0;
gdjs.JogoCode.GDGabsObjects1.length = 0;
gdjs.JogoCode.GDGabsObjects2.length = 0;
gdjs.JogoCode.GDGabsObjects3.length = 0;
gdjs.JogoCode.GDGabismosTextObjects1.length = 0;
gdjs.JogoCode.GDGabismosTextObjects2.length = 0;
gdjs.JogoCode.GDGabismosTextObjects3.length = 0;
gdjs.JogoCode.GDUpgradeButtonObjects1.length = 0;
gdjs.JogoCode.GDUpgradeButtonObjects2.length = 0;
gdjs.JogoCode.GDUpgradeButtonObjects3.length = 0;
gdjs.JogoCode.GDB_95244nusObjects1.length = 0;
gdjs.JogoCode.GDB_95244nusObjects2.length = 0;
gdjs.JogoCode.GDB_95244nusObjects3.length = 0;
gdjs.JogoCode.GDUpgradesTextObjects1.length = 0;
gdjs.JogoCode.GDUpgradesTextObjects2.length = 0;
gdjs.JogoCode.GDUpgradesTextObjects3.length = 0;
gdjs.JogoCode.GDIconsObjects1.length = 0;
gdjs.JogoCode.GDIconsObjects2.length = 0;
gdjs.JogoCode.GDIconsObjects3.length = 0;
gdjs.JogoCode.GDASopaObjects1.length = 0;
gdjs.JogoCode.GDASopaObjects2.length = 0;
gdjs.JogoCode.GDASopaObjects3.length = 0;
gdjs.JogoCode.GDMadeByTextObjects1.length = 0;
gdjs.JogoCode.GDMadeByTextObjects2.length = 0;
gdjs.JogoCode.GDMadeByTextObjects3.length = 0;
gdjs.JogoCode.GDBGObjects1.length = 0;
gdjs.JogoCode.GDBGObjects2.length = 0;
gdjs.JogoCode.GDBGObjects3.length = 0;
gdjs.JogoCode.GDUpgradeButton2Objects1.length = 0;
gdjs.JogoCode.GDUpgradeButton2Objects2.length = 0;
gdjs.JogoCode.GDUpgradeButton2Objects3.length = 0;
gdjs.JogoCode.GDInventoryEmpty2Objects1.length = 0;
gdjs.JogoCode.GDInventoryEmpty2Objects2.length = 0;
gdjs.JogoCode.GDInventoryEmpty2Objects3.length = 0;
gdjs.JogoCode.GDFinalTextObjects1.length = 0;
gdjs.JogoCode.GDFinalTextObjects2.length = 0;
gdjs.JogoCode.GDFinalTextObjects3.length = 0;
gdjs.JogoCode.GDEndlessButtonObjects1.length = 0;
gdjs.JogoCode.GDEndlessButtonObjects2.length = 0;
gdjs.JogoCode.GDEndlessButtonObjects3.length = 0;
gdjs.JogoCode.GDTempoTextObjects1.length = 0;
gdjs.JogoCode.GDTempoTextObjects2.length = 0;
gdjs.JogoCode.GDTempoTextObjects3.length = 0;


return;

}

gdjs['JogoCode'] = gdjs.JogoCode;
