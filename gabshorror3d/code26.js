gdjs.finalCode = {};
gdjs.finalCode.localVariables = [];
gdjs.finalCode.idToCallbackMap = new Map();
gdjs.finalCode.GDTextoFinalObjects1= [];
gdjs.finalCode.GDTextoFinalObjects2= [];
gdjs.finalCode.GDTextoFinal2Objects1= [];
gdjs.finalCode.GDTextoFinal2Objects2= [];
gdjs.finalCode.GDAbrirPausaObjects1= [];
gdjs.finalCode.GDAbrirPausaObjects2= [];
gdjs.finalCode.GDStatisticsObjects1= [];
gdjs.finalCode.GDStatisticsObjects2= [];
gdjs.finalCode.GDComboNumbersObjects1= [];
gdjs.finalCode.GDComboNumbersObjects2= [];
gdjs.finalCode.GDNotesSplashObjects1= [];
gdjs.finalCode.GDNotesSplashObjects2= [];
gdjs.finalCode.GDfpsObjects1= [];
gdjs.finalCode.GDfpsObjects2= [];
gdjs.finalCode.GDEngineTextObjects1= [];
gdjs.finalCode.GDEngineTextObjects2= [];
gdjs.finalCode.GDLongUpscrollBFObjects1= [];
gdjs.finalCode.GDLongUpscrollBFObjects2= [];
gdjs.finalCode.GDLongUpscrollOPPObjects1= [];
gdjs.finalCode.GDLongUpscrollOPPObjects2= [];
gdjs.finalCode.GDHitboxLeftObjects1= [];
gdjs.finalCode.GDHitboxLeftObjects2= [];
gdjs.finalCode.GDHitboxDownObjects1= [];
gdjs.finalCode.GDHitboxDownObjects2= [];
gdjs.finalCode.GDHitboxUpObjects1= [];
gdjs.finalCode.GDHitboxUpObjects2= [];
gdjs.finalCode.GDhitrightObjects1= [];
gdjs.finalCode.GDhitrightObjects2= [];
gdjs.finalCode.GDBFIconObjects1= [];
gdjs.finalCode.GDBFIconObjects2= [];
gdjs.finalCode.GDPauseButtonObjects1= [];
gdjs.finalCode.GDPauseButtonObjects2= [];
gdjs.finalCode.GDPauseButton2Objects1= [];
gdjs.finalCode.GDPauseButton2Objects2= [];
gdjs.finalCode.GDBlackScreenObjects1= [];
gdjs.finalCode.GDBlackScreenObjects2= [];
gdjs.finalCode.GDPauseTextObjects1= [];
gdjs.finalCode.GDPauseTextObjects2= [];
gdjs.finalCode.GDExitTextObjects1= [];
gdjs.finalCode.GDExitTextObjects2= [];
gdjs.finalCode.GDRestartTextObjects1= [];
gdjs.finalCode.GDRestartTextObjects2= [];
gdjs.finalCode.GDmisses_9595challenge_9595textObjects1= [];
gdjs.finalCode.GDmisses_9595challenge_9595textObjects2= [];
gdjs.finalCode.GDBfUpNoteObjects1= [];
gdjs.finalCode.GDBfUpNoteObjects2= [];
gdjs.finalCode.GDBfDownNoteObjects1= [];
gdjs.finalCode.GDBfDownNoteObjects2= [];
gdjs.finalCode.GDBfLeftNoteObjects1= [];
gdjs.finalCode.GDBfLeftNoteObjects2= [];
gdjs.finalCode.GDBfRightNoteObjects1= [];
gdjs.finalCode.GDBfRightNoteObjects2= [];
gdjs.finalCode.GDOppIconObjects1= [];
gdjs.finalCode.GDOppIconObjects2= [];
gdjs.finalCode.GDtimerBarObjects1= [];
gdjs.finalCode.GDtimerBarObjects2= [];
gdjs.finalCode.GDtimeObjects1= [];
gdjs.finalCode.GDtimeObjects2= [];
gdjs.finalCode.GDtimerBar2Objects1= [];
gdjs.finalCode.GDtimerBar2Objects2= [];
gdjs.finalCode.GDRatinsPopUpObjects1= [];
gdjs.finalCode.GDRatinsPopUpObjects2= [];
gdjs.finalCode.GDLongNoteObjects1= [];
gdjs.finalCode.GDLongNoteObjects2= [];
gdjs.finalCode.GDnotesObjects1= [];
gdjs.finalCode.GDnotesObjects2= [];
gdjs.finalCode.GDOppLeftNoteObjects1= [];
gdjs.finalCode.GDOppLeftNoteObjects2= [];
gdjs.finalCode.GDOppDownNoteObjects1= [];
gdjs.finalCode.GDOppDownNoteObjects2= [];
gdjs.finalCode.GDOppUpNoteObjects1= [];
gdjs.finalCode.GDOppUpNoteObjects2= [];
gdjs.finalCode.GDOppRightNoteObjects1= [];
gdjs.finalCode.GDOppRightNoteObjects2= [];
gdjs.finalCode.GDLongNoteOppObjects1= [];
gdjs.finalCode.GDLongNoteOppObjects2= [];
gdjs.finalCode.GDPsychLuaSpriteObjects1= [];
gdjs.finalCode.GDPsychLuaSpriteObjects2= [];
gdjs.finalCode.GDPsychLuaTextObjects1= [];
gdjs.finalCode.GDPsychLuaTextObjects2= [];
gdjs.finalCode.GDPauseDimOverlayObjects1= [];
gdjs.finalCode.GDPauseDimOverlayObjects2= [];
gdjs.finalCode.GDVsGabsVolumePanelObjects1= [];
gdjs.finalCode.GDVsGabsVolumePanelObjects2= [];
gdjs.finalCode.GDVsGabsVolumeBarObjects1= [];
gdjs.finalCode.GDVsGabsVolumeBarObjects2= [];
gdjs.finalCode.GDVsGabsVolumeLabelObjects1= [];
gdjs.finalCode.GDVsGabsVolumeLabelObjects2= [];


gdjs.finalCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(169).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("GabsHorrorInterface", "LimiteFPS", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(168));
}
{runtimeScene.getGame().getVariables().getFromIndex(168).setNumber(Math.max(0, Math.round(runtimeScene.getGame().getVariables().getFromIndex(168).getAsNumber())));
}
{gdjs.evtsExt__GabsPause__AplicarFPS.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(168).getAsNumber(), null);
}
{runtimeScene.getGame().getVariables().getFromIndex(169).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TextoFinal"), gdjs.finalCode.GDTextoFinalObjects1);
{for(var i = 0, len = gdjs.finalCode.GDTextoFinalObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDTextoFinalObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),660);
}
}
}

}


};

gdjs.finalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.finalCode.GDTextoFinalObjects1.length = 0;
gdjs.finalCode.GDTextoFinalObjects2.length = 0;
gdjs.finalCode.GDTextoFinal2Objects1.length = 0;
gdjs.finalCode.GDTextoFinal2Objects2.length = 0;
gdjs.finalCode.GDAbrirPausaObjects1.length = 0;
gdjs.finalCode.GDAbrirPausaObjects2.length = 0;
gdjs.finalCode.GDStatisticsObjects1.length = 0;
gdjs.finalCode.GDStatisticsObjects2.length = 0;
gdjs.finalCode.GDComboNumbersObjects1.length = 0;
gdjs.finalCode.GDComboNumbersObjects2.length = 0;
gdjs.finalCode.GDNotesSplashObjects1.length = 0;
gdjs.finalCode.GDNotesSplashObjects2.length = 0;
gdjs.finalCode.GDfpsObjects1.length = 0;
gdjs.finalCode.GDfpsObjects2.length = 0;
gdjs.finalCode.GDEngineTextObjects1.length = 0;
gdjs.finalCode.GDEngineTextObjects2.length = 0;
gdjs.finalCode.GDLongUpscrollBFObjects1.length = 0;
gdjs.finalCode.GDLongUpscrollBFObjects2.length = 0;
gdjs.finalCode.GDLongUpscrollOPPObjects1.length = 0;
gdjs.finalCode.GDLongUpscrollOPPObjects2.length = 0;
gdjs.finalCode.GDHitboxLeftObjects1.length = 0;
gdjs.finalCode.GDHitboxLeftObjects2.length = 0;
gdjs.finalCode.GDHitboxDownObjects1.length = 0;
gdjs.finalCode.GDHitboxDownObjects2.length = 0;
gdjs.finalCode.GDHitboxUpObjects1.length = 0;
gdjs.finalCode.GDHitboxUpObjects2.length = 0;
gdjs.finalCode.GDhitrightObjects1.length = 0;
gdjs.finalCode.GDhitrightObjects2.length = 0;
gdjs.finalCode.GDBFIconObjects1.length = 0;
gdjs.finalCode.GDBFIconObjects2.length = 0;
gdjs.finalCode.GDPauseButtonObjects1.length = 0;
gdjs.finalCode.GDPauseButtonObjects2.length = 0;
gdjs.finalCode.GDPauseButton2Objects1.length = 0;
gdjs.finalCode.GDPauseButton2Objects2.length = 0;
gdjs.finalCode.GDBlackScreenObjects1.length = 0;
gdjs.finalCode.GDBlackScreenObjects2.length = 0;
gdjs.finalCode.GDPauseTextObjects1.length = 0;
gdjs.finalCode.GDPauseTextObjects2.length = 0;
gdjs.finalCode.GDExitTextObjects1.length = 0;
gdjs.finalCode.GDExitTextObjects2.length = 0;
gdjs.finalCode.GDRestartTextObjects1.length = 0;
gdjs.finalCode.GDRestartTextObjects2.length = 0;
gdjs.finalCode.GDmisses_9595challenge_9595textObjects1.length = 0;
gdjs.finalCode.GDmisses_9595challenge_9595textObjects2.length = 0;
gdjs.finalCode.GDBfUpNoteObjects1.length = 0;
gdjs.finalCode.GDBfUpNoteObjects2.length = 0;
gdjs.finalCode.GDBfDownNoteObjects1.length = 0;
gdjs.finalCode.GDBfDownNoteObjects2.length = 0;
gdjs.finalCode.GDBfLeftNoteObjects1.length = 0;
gdjs.finalCode.GDBfLeftNoteObjects2.length = 0;
gdjs.finalCode.GDBfRightNoteObjects1.length = 0;
gdjs.finalCode.GDBfRightNoteObjects2.length = 0;
gdjs.finalCode.GDOppIconObjects1.length = 0;
gdjs.finalCode.GDOppIconObjects2.length = 0;
gdjs.finalCode.GDtimerBarObjects1.length = 0;
gdjs.finalCode.GDtimerBarObjects2.length = 0;
gdjs.finalCode.GDtimeObjects1.length = 0;
gdjs.finalCode.GDtimeObjects2.length = 0;
gdjs.finalCode.GDtimerBar2Objects1.length = 0;
gdjs.finalCode.GDtimerBar2Objects2.length = 0;
gdjs.finalCode.GDRatinsPopUpObjects1.length = 0;
gdjs.finalCode.GDRatinsPopUpObjects2.length = 0;
gdjs.finalCode.GDLongNoteObjects1.length = 0;
gdjs.finalCode.GDLongNoteObjects2.length = 0;
gdjs.finalCode.GDnotesObjects1.length = 0;
gdjs.finalCode.GDnotesObjects2.length = 0;
gdjs.finalCode.GDOppLeftNoteObjects1.length = 0;
gdjs.finalCode.GDOppLeftNoteObjects2.length = 0;
gdjs.finalCode.GDOppDownNoteObjects1.length = 0;
gdjs.finalCode.GDOppDownNoteObjects2.length = 0;
gdjs.finalCode.GDOppUpNoteObjects1.length = 0;
gdjs.finalCode.GDOppUpNoteObjects2.length = 0;
gdjs.finalCode.GDOppRightNoteObjects1.length = 0;
gdjs.finalCode.GDOppRightNoteObjects2.length = 0;
gdjs.finalCode.GDLongNoteOppObjects1.length = 0;
gdjs.finalCode.GDLongNoteOppObjects2.length = 0;
gdjs.finalCode.GDPsychLuaSpriteObjects1.length = 0;
gdjs.finalCode.GDPsychLuaSpriteObjects2.length = 0;
gdjs.finalCode.GDPsychLuaTextObjects1.length = 0;
gdjs.finalCode.GDPsychLuaTextObjects2.length = 0;
gdjs.finalCode.GDPauseDimOverlayObjects1.length = 0;
gdjs.finalCode.GDPauseDimOverlayObjects2.length = 0;
gdjs.finalCode.GDVsGabsVolumePanelObjects1.length = 0;
gdjs.finalCode.GDVsGabsVolumePanelObjects2.length = 0;
gdjs.finalCode.GDVsGabsVolumeBarObjects1.length = 0;
gdjs.finalCode.GDVsGabsVolumeBarObjects2.length = 0;
gdjs.finalCode.GDVsGabsVolumeLabelObjects1.length = 0;
gdjs.finalCode.GDVsGabsVolumeLabelObjects2.length = 0;

gdjs.finalCode.eventsList0(runtimeScene);
gdjs.finalCode.GDTextoFinalObjects1.length = 0;
gdjs.finalCode.GDTextoFinalObjects2.length = 0;
gdjs.finalCode.GDTextoFinal2Objects1.length = 0;
gdjs.finalCode.GDTextoFinal2Objects2.length = 0;
gdjs.finalCode.GDAbrirPausaObjects1.length = 0;
gdjs.finalCode.GDAbrirPausaObjects2.length = 0;
gdjs.finalCode.GDStatisticsObjects1.length = 0;
gdjs.finalCode.GDStatisticsObjects2.length = 0;
gdjs.finalCode.GDComboNumbersObjects1.length = 0;
gdjs.finalCode.GDComboNumbersObjects2.length = 0;
gdjs.finalCode.GDNotesSplashObjects1.length = 0;
gdjs.finalCode.GDNotesSplashObjects2.length = 0;
gdjs.finalCode.GDfpsObjects1.length = 0;
gdjs.finalCode.GDfpsObjects2.length = 0;
gdjs.finalCode.GDEngineTextObjects1.length = 0;
gdjs.finalCode.GDEngineTextObjects2.length = 0;
gdjs.finalCode.GDLongUpscrollBFObjects1.length = 0;
gdjs.finalCode.GDLongUpscrollBFObjects2.length = 0;
gdjs.finalCode.GDLongUpscrollOPPObjects1.length = 0;
gdjs.finalCode.GDLongUpscrollOPPObjects2.length = 0;
gdjs.finalCode.GDHitboxLeftObjects1.length = 0;
gdjs.finalCode.GDHitboxLeftObjects2.length = 0;
gdjs.finalCode.GDHitboxDownObjects1.length = 0;
gdjs.finalCode.GDHitboxDownObjects2.length = 0;
gdjs.finalCode.GDHitboxUpObjects1.length = 0;
gdjs.finalCode.GDHitboxUpObjects2.length = 0;
gdjs.finalCode.GDhitrightObjects1.length = 0;
gdjs.finalCode.GDhitrightObjects2.length = 0;
gdjs.finalCode.GDBFIconObjects1.length = 0;
gdjs.finalCode.GDBFIconObjects2.length = 0;
gdjs.finalCode.GDPauseButtonObjects1.length = 0;
gdjs.finalCode.GDPauseButtonObjects2.length = 0;
gdjs.finalCode.GDPauseButton2Objects1.length = 0;
gdjs.finalCode.GDPauseButton2Objects2.length = 0;
gdjs.finalCode.GDBlackScreenObjects1.length = 0;
gdjs.finalCode.GDBlackScreenObjects2.length = 0;
gdjs.finalCode.GDPauseTextObjects1.length = 0;
gdjs.finalCode.GDPauseTextObjects2.length = 0;
gdjs.finalCode.GDExitTextObjects1.length = 0;
gdjs.finalCode.GDExitTextObjects2.length = 0;
gdjs.finalCode.GDRestartTextObjects1.length = 0;
gdjs.finalCode.GDRestartTextObjects2.length = 0;
gdjs.finalCode.GDmisses_9595challenge_9595textObjects1.length = 0;
gdjs.finalCode.GDmisses_9595challenge_9595textObjects2.length = 0;
gdjs.finalCode.GDBfUpNoteObjects1.length = 0;
gdjs.finalCode.GDBfUpNoteObjects2.length = 0;
gdjs.finalCode.GDBfDownNoteObjects1.length = 0;
gdjs.finalCode.GDBfDownNoteObjects2.length = 0;
gdjs.finalCode.GDBfLeftNoteObjects1.length = 0;
gdjs.finalCode.GDBfLeftNoteObjects2.length = 0;
gdjs.finalCode.GDBfRightNoteObjects1.length = 0;
gdjs.finalCode.GDBfRightNoteObjects2.length = 0;
gdjs.finalCode.GDOppIconObjects1.length = 0;
gdjs.finalCode.GDOppIconObjects2.length = 0;
gdjs.finalCode.GDtimerBarObjects1.length = 0;
gdjs.finalCode.GDtimerBarObjects2.length = 0;
gdjs.finalCode.GDtimeObjects1.length = 0;
gdjs.finalCode.GDtimeObjects2.length = 0;
gdjs.finalCode.GDtimerBar2Objects1.length = 0;
gdjs.finalCode.GDtimerBar2Objects2.length = 0;
gdjs.finalCode.GDRatinsPopUpObjects1.length = 0;
gdjs.finalCode.GDRatinsPopUpObjects2.length = 0;
gdjs.finalCode.GDLongNoteObjects1.length = 0;
gdjs.finalCode.GDLongNoteObjects2.length = 0;
gdjs.finalCode.GDnotesObjects1.length = 0;
gdjs.finalCode.GDnotesObjects2.length = 0;
gdjs.finalCode.GDOppLeftNoteObjects1.length = 0;
gdjs.finalCode.GDOppLeftNoteObjects2.length = 0;
gdjs.finalCode.GDOppDownNoteObjects1.length = 0;
gdjs.finalCode.GDOppDownNoteObjects2.length = 0;
gdjs.finalCode.GDOppUpNoteObjects1.length = 0;
gdjs.finalCode.GDOppUpNoteObjects2.length = 0;
gdjs.finalCode.GDOppRightNoteObjects1.length = 0;
gdjs.finalCode.GDOppRightNoteObjects2.length = 0;
gdjs.finalCode.GDLongNoteOppObjects1.length = 0;
gdjs.finalCode.GDLongNoteOppObjects2.length = 0;
gdjs.finalCode.GDPsychLuaSpriteObjects1.length = 0;
gdjs.finalCode.GDPsychLuaSpriteObjects2.length = 0;
gdjs.finalCode.GDPsychLuaTextObjects1.length = 0;
gdjs.finalCode.GDPsychLuaTextObjects2.length = 0;
gdjs.finalCode.GDPauseDimOverlayObjects1.length = 0;
gdjs.finalCode.GDPauseDimOverlayObjects2.length = 0;
gdjs.finalCode.GDVsGabsVolumePanelObjects1.length = 0;
gdjs.finalCode.GDVsGabsVolumePanelObjects2.length = 0;
gdjs.finalCode.GDVsGabsVolumeBarObjects1.length = 0;
gdjs.finalCode.GDVsGabsVolumeBarObjects2.length = 0;
gdjs.finalCode.GDVsGabsVolumeLabelObjects1.length = 0;
gdjs.finalCode.GDVsGabsVolumeLabelObjects2.length = 0;


return;

}

gdjs['finalCode'] = gdjs.finalCode;
