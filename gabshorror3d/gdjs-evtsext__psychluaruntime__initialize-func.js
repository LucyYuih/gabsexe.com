
if (typeof gdjs.evtsExt__PsychLuaRuntime__Initialize !== "undefined") {
  gdjs.evtsExt__PsychLuaRuntime__Initialize.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PsychLuaRuntime__Initialize = {};
gdjs.evtsExt__PsychLuaRuntime__Initialize.idToCallbackMap = new Map();


gdjs.evtsExt__PsychLuaRuntime__Initialize.userFunc0x2199608 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var extensionState = runtimeScene.getVariablesForExtension("PsychLuaRuntime");
var psychState = runtimeScene.getGame().getVariables().get("PsychLuaRuntime");
var psychDiagnostics = psychState.getChild("Diagnostics");
psychState.getChild("BridgeVersion").setString("1.9.2");
psychDiagnostics.getChild("InitializeCalls").setNumber(psychDiagnostics.getChild("InitializeCalls").getAsNumber() + 1);
psychDiagnostics.getChild("EventReached").setBoolean(false);
psychDiagnostics.getChild("LoadCalls").setNumber(0);
psychDiagnostics.getChild("OnCreateCalls").setNumber(0);
psychDiagnostics.getChild("LastPhase").setString("Initialize");
psychDiagnostics.getChild("LastScriptId").setString("");
psychDiagnostics.getChild("LastPath").setString("");
psychState.getChild("LastDebugMessage").setString("");
var setPsychState = function(name, ready, failed, error) {
    extensionState.get("Runtime").getChild("State").setString(name);
    extensionState.get("Runtime").getChild("Ready").setBoolean(ready);
    extensionState.get("Runtime").getChild("Failed").setBoolean(failed);
    extensionState.get("Runtime").getChild("Error").setString(error || "");
    psychState.getChild("State").setString(name);
    psychState.getChild("Ready").setBoolean(ready);
    psychState.getChild("Failed").setBoolean(failed);
    psychState.getChild("Error").setString(error || "");
};
var runtimeHost = globalThis.__psychLuaRuntimeHost || (globalThis.__psychLuaRuntimeHost = {
    factory: null, promise: null, initializing: false, failed: false, error: ""
});
runtimeHost.scenes = runtimeHost.scenes || new WeakMap();
// BEGIN PSYCH LUA RESOURCE MANIFEST
runtimeHost.modSettingDefaults = {"skipintro":false,"shading":true,"musicvisualizer":false,"musicvisualizerintensity":2};
runtimeHost.manifestResourceName = "FORPsychLuaSources";
runtimeHost.manifest = runtimeHost.manifest && Array.isArray(runtimeHost.manifest.Scripts) ? runtimeHost.manifest : null;
runtimeHost.manifestState = runtimeHost.manifest ? "Ready" : (runtimeHost.manifestState || "NotRequested");
runtimeHost.manifestFailed = Boolean(runtimeHost.manifestFailed);
runtimeHost.manifestError = String(runtimeHost.manifestError || "");
runtimeHost.manifestRequestCount = Number(runtimeHost.manifestRequestCount) || 0;
runtimeHost.manifestScriptCount = runtimeHost.manifest ? runtimeHost.manifest.Scripts.length : 0;
runtimeHost.manifestStartedAt = Number(runtimeHost.manifestStartedAt) || 0;
runtimeHost.manifestFinishedAt = Number(runtimeHost.manifestFinishedAt) || 0;
runtimeHost.manifestRequestInFlight = Boolean(runtimeHost.manifestRequestInFlight);
runtimeHost.manifestSource = runtimeHost.manifest ? "GDevelop JsonManager cache" : "";
runtimeHost.manifestMessage = String(runtimeHost.manifestMessage || "");

runtimeHost.writeManifestStatus = function(scene) {
    if (!scene) return;
    // Async JSON callbacks can outlive the extension-function variable container.
    // Persist diagnostics in the declared global structure, which is scene-independent.
    var globalRoot = scene.getGame().getVariables().get("PsychLuaRuntime");
    var root = globalRoot && globalRoot.getChild ? globalRoot.getChild("Manifest") : null;
    if (!root) return;
    var ready = Boolean(runtimeHost.manifest && Array.isArray(runtimeHost.manifest.Scripts));
    var elapsed = runtimeHost.manifestStartedAt > 0
        ? Math.max(0, (runtimeHost.manifestFinishedAt || Date.now()) - runtimeHost.manifestStartedAt)
        : 0;
    var write = function(name, method, value) {
        try {
            var child = root.getChild(name);
            if (child && typeof child[method] === "function") child[method](value);
        } catch (error) {}
    };
    write("State", "setString", String(runtimeHost.manifestState || "NotRequested"));
    write("Ready", "setBoolean", ready);
    write("Failed", "setBoolean", Boolean(runtimeHost.manifestFailed));
    write("Error", "setString", String(runtimeHost.manifestError || ""));
    write("Message", "setString", String(runtimeHost.manifestMessage || ""));
    write("ResourceName", "setString", runtimeHost.manifestResourceName);
    write("Source", "setString", String(runtimeHost.manifestSource || ""));
    write("ScriptCount", "setNumber", Number(runtimeHost.manifestScriptCount) || 0);
    write("RequestCount", "setNumber", Number(runtimeHost.manifestRequestCount) || 0);
    write("ElapsedMs", "setNumber", elapsed);
};
runtimeHost.acceptPsychLuaManifest = function(scene, content, source) {
    if (!content || !Array.isArray(content.Scripts)) {
        throw new Error("FORPsychLuaSources was loaded, but it has no Scripts array");
    }
    runtimeHost.manifest = content;
    runtimeHost.manifestState = "Ready";
    runtimeHost.manifestFailed = false;
    runtimeHost.manifestError = "";
    runtimeHost.manifestMessage = "External JSON manifest loaded successfully";
    runtimeHost.manifestScriptCount = content.Scripts.length;
    runtimeHost.manifestFinishedAt = Date.now();
    runtimeHost.manifestRequestInFlight = false;
    runtimeHost.manifestSource = String(source || "GDevelop JsonManager.loadJson");
    if (runtimeHost.setDiagnostic) runtimeHost.setDiagnostic(scene, "ManifestReady", "", runtimeHost.manifestResourceName);
    runtimeHost.writeManifestStatus(scene);
    return content;
};

runtimeHost.failPsychLuaManifest = function(scene, error) {
    var message = error && error.stack ? error.stack : String(error || "Unknown manifest loading error");
    runtimeHost.manifest = null;
    runtimeHost.manifestState = "Failed";
    runtimeHost.manifestFailed = true;
    runtimeHost.manifestError = message;
    runtimeHost.manifestMessage = "The external JSON manifest could not be loaded";
    runtimeHost.manifestScriptCount = 0;
    runtimeHost.manifestFinishedAt = Date.now();
    runtimeHost.manifestRequestInFlight = false;
    runtimeHost.manifestSource = "GDevelop JsonManager.loadJson";
    if (runtimeHost.setDiagnostic) runtimeHost.setDiagnostic(scene, "ManifestFailed", "", runtimeHost.manifestResourceName);
    runtimeHost.writeManifestStatus(scene);
    console.error("Psych Lua manifest loading failed", runtimeHost.manifestResourceName, error);
    return null;
};

runtimeHost.getPsychLuaManifest = function(scene) {
    if (runtimeHost.manifest && Array.isArray(runtimeHost.manifest.Scripts)) return runtimeHost.manifest;
    try {
        var manager = scene && scene.getGame ? scene.getGame().getJsonManager() : null;
        var cached = manager && typeof manager.getLoadedJson === "function"
            ? manager.getLoadedJson(runtimeHost.manifestResourceName)
            : null;
        if (cached && Array.isArray(cached.Scripts)) {
            return runtimeHost.acceptPsychLuaManifest(scene, cached, "GDevelop JsonManager cache");
        }
    } catch (error) {
        runtimeHost.manifestMessage = "Cache inspection failed; explicit load will be attempted";
    }
    return null;
};

runtimeHost.ensurePsychLuaManifest = function(scene) {
    var ready = runtimeHost.getPsychLuaManifest(scene);
    if (ready) {
        runtimeHost.writeManifestStatus(scene);
        return true;
    }
    if (runtimeHost.manifestRequestInFlight) {
        runtimeHost.writeManifestStatus(scene);
        return false;
    }
    if (runtimeHost.manifestFailed && runtimeHost.manifestState === "Failed") {
        runtimeHost.writeManifestStatus(scene);
        return false;
    }
    try {
        var manager = scene.getGame().getJsonManager();
        if (!manager || typeof manager.loadJson !== "function") {
            throw new Error("GDevelop JsonManager.loadJson is unavailable");
        }
        runtimeHost.manifestRequestInFlight = true;
        runtimeHost.manifestState = "Loading";
        runtimeHost.manifestFailed = false;
        runtimeHost.manifestError = "";
        runtimeHost.manifestMessage = "Requesting the external JSON resource";
        runtimeHost.manifestSource = "GDevelop JsonManager.loadJson";
        runtimeHost.manifestStartedAt = Date.now();
        runtimeHost.manifestFinishedAt = 0;
        runtimeHost.manifestRequestCount += 1;
        if (runtimeHost.setDiagnostic) runtimeHost.setDiagnostic(scene, "ManifestLoading", "", runtimeHost.manifestResourceName);
        runtimeHost.writeManifestStatus(scene);
        manager.loadJson(runtimeHost.manifestResourceName, function(error, content) {
            if (error) {
                runtimeHost.failPsychLuaManifest(scene, error);
                return;
            }
            try {
                runtimeHost.acceptPsychLuaManifest(scene, content, "GDevelop JsonManager.loadJson");
            } catch (validationError) {
                runtimeHost.failPsychLuaManifest(scene, validationError);
            }
        });
    } catch (error) {
        runtimeHost.failPsychLuaManifest(scene, error);
    }
    return false;
};

runtimeHost.isPsychLuaManifestReady = function(scene) {
    return Boolean(runtimeHost.getPsychLuaManifest(scene));
};
// END PSYCH LUA RESOURCE MANIFEST
runtimeHost.getSceneData = runtimeHost.getSceneData || function(scene) {
    var data = runtimeHost.scenes.get(scene);
    if (!data) {
        data = { scripts: new Map(), eventQueue: [], properties: Object.create(null) };
        runtimeHost.scenes.set(scene, data);
    }
    return data;
};
runtimeHost.extensionVariables = function(scene) {
    return scene.getVariablesForExtension("PsychLuaRuntime");
};
runtimeHost.globalVariables = function(scene) {
    return scene.getGame().getVariables().get("PsychLuaRuntime");
};
runtimeHost.setDiagnostic = function(scene, phase, id, path) {
    var root = runtimeHost.globalVariables(scene).getChild("Diagnostics");
    if (typeof phase !== "undefined") root.getChild("LastPhase").setString(String(phase || ""));
    if (typeof id !== "undefined") root.getChild("LastScriptId").setString(String(id || ""));
    if (typeof path !== "undefined") root.getChild("LastPath").setString(String(path || ""));
};
runtimeHost.incrementDiagnostic = function(scene, name) {
    var variable = runtimeHost.globalVariables(scene).getChild("Diagnostics").getChild(name);
    variable.setNumber(variable.getAsNumber() + 1);
};
runtimeHost.writeLastCall = function(scene, id, callback, result, stopped, continued, failed, error) {
    var roots = [
        runtimeHost.extensionVariables(scene).get("LastCall"),
        runtimeHost.globalVariables(scene).getChild("LastCall")
    ];
    for (var i = 0; i < roots.length; i += 1) {
        roots[i].getChild("ScriptId").setString(id || "");
        roots[i].getChild("Callback").setString(callback || "");
        roots[i].getChild("Return").setString(result || "##PSYCHLUA_FUNCTIONCONTINUE");
        roots[i].getChild("Stopped").setBoolean(Boolean(stopped));
        roots[i].getChild("Continued").setBoolean(Boolean(continued));
        roots[i].getChild("Failed").setBoolean(Boolean(failed));
        roots[i].getChild("Error").setString(error || "");
    }
};
runtimeHost.incrementStat = function(scene, name) {
    var data = runtimeHost.ensureCompatibilityData(scene);
    var performanceState = data.performance;
    var roots = [
        runtimeHost.extensionVariables(scene).get("Stats"),
        runtimeHost.globalVariables(scene).getChild("Stats")
    ];
    if (!Object.prototype.hasOwnProperty.call(performanceState.stats, name)) {
        var current = 0;
        for (var rootIndex = 0; rootIndex < roots.length; rootIndex += 1) {
            try { current = Math.max(current, roots[rootIndex].getChild(name).getAsNumber()); } catch (error) {}
        }
        performanceState.stats[name] = current;
    }
    performanceState.stats[name] += 1;
    var force = name === "ErrorCount";
    if (!force && !runtimeHost.shouldWriteDiagnostic(scene, "stats")) return;
    for (var i = 0; i < roots.length; i += 1) {
        roots[i].getChild(name).setNumber(performanceState.stats[name]);
    }
};
runtimeHost.valueText = function(value) {
    if (value === null || typeof value === "undefined") return "";
    if (typeof value === "string") return value;
    try { return String(value); } catch (error) { return ""; }
};
runtimeHost.coerceArgument = function(value) {
    if (typeof value !== "string") return value;
    if (value === "true") return true;
    if (value === "false") return false;
    if (value !== "" && isFinite(Number(value))) return Number(value);
    return value;
};
runtimeHost.setScriptStatus = function(scene, id, path, loaded, disabled, closed, error) {
    var roots = [
        runtimeHost.extensionVariables(scene).get("Scripts").getChild(id),
        runtimeHost.globalVariables(scene).getChild("Scripts").getChild(id)
    ];
    for (var i = 0; i < roots.length; i += 1) {
        roots[i].getChild("Id").setString(id);
        roots[i].getChild("Path").setString(path || "");
        roots[i].getChild("Loaded").setBoolean(Boolean(loaded));
        roots[i].getChild("Disabled").setBoolean(Boolean(disabled));
        roots[i].getChild("Closed").setBoolean(Boolean(closed));
        roots[i].getChild("Error").setString(error || "");
    }
};
runtimeHost.updateScriptCount = function(scene) {
    var data = runtimeHost.getSceneData(scene);
    var count = 0;
    data.scripts.forEach(function(script) { if (!script.closed) count += 1; });
    runtimeHost.extensionVariables(scene).get("Stats").getChild("ScriptCount").setNumber(count);
    runtimeHost.globalVariables(scene).getChild("Stats").getChild("ScriptCount").setNumber(count);
};
runtimeHost.setLastError = function(scene, id, callback, error) {
    var message = error && error.stack ? error.stack : String(error);
    runtimeHost.writeLastCall(scene, id, callback, "##PSYCHLUA_FUNCTIONCONTINUE", false, true, true, message);
    runtimeHost.incrementStat(scene, "ErrorCount");
};
runtimeHost.parsePathCache = runtimeHost.parsePathCache || new Map();
runtimeHost.parsePath = function(path) {
    var text = String(path || "");
    var cached = runtimeHost.parsePathCache.get(text);
    if (cached) return cached;
    var parsed = text.match(/[^.[\]]+/g) || [];
    if (runtimeHost.parsePathCache.size >= 2048) runtimeHost.parsePathCache.clear();
    runtimeHost.parsePathCache.set(text, parsed);
    return parsed;
};
// Lua tables arrive from Wasmoon as proxy objects. Keep one bridge that accepts
// JavaScript arrays/objects, Maps and live LuaTable proxies without guessing.
runtimeHost.luaField = function(value, key) {
    if (value === null || typeof value === "undefined") return undefined;
    if (value instanceof Map) {
        if (value.has(key)) return value.get(key);
        if (value.has(String(key))) return value.get(String(key));
    }
    try {
        if (typeof value.$get === "function") {
            var direct = value.$get(key);
            if (typeof direct !== "undefined") return direct;
        }
    } catch (error) {}
    try {
        var property = value[key];
        if (typeof property !== "undefined") return property;
    } catch (error) {}
    try {
        if (typeof value.get === "function") {
            var mapped = value.get(key);
            if (typeof mapped !== "undefined") return mapped;
        }
    } catch (error) {}
    return undefined;
};
runtimeHost.luaArray = function(value, limit) {
    if (Array.isArray(value)) return value.slice();
    var result = [];
    var max = Math.max(1, Math.floor(Number(limit) || 64));
    if (value instanceof Map) {
        for (var mapIndex = 1; mapIndex <= max; mapIndex += 1) {
            var mapValue = value.has(mapIndex) ? value.get(mapIndex) : value.get(String(mapIndex));
            if (typeof mapValue === "undefined") break;
            result.push(mapValue);
        }
        return result;
    }
    for (var index = 1; index <= max; index += 1) {
        var item = runtimeHost.luaField(value, index);
        if (typeof item === "undefined") break;
        result.push(item);
    }
    return result;
};
runtimeHost.luaRecordForObject = function(scene, object) {
    if (!scene || !object) return null;
    var data = runtimeHost.getSceneData(scene);
    if (!data.luaObjects) return null;
    var found = null;
    data.luaObjects.forEach(function(record) { if (!found && record && record.object === object) found = record; });
    return found;
};
runtimeHost.isLuaManagedObject = function(scene, object) { return Boolean(runtimeHost.luaRecordForObject(scene, object)); };
runtimeHost.isScreenCamera = function(camera) {
    var lower = String(camera || 'game').toLowerCase();
    return lower.indexOf('hud') !== -1 || lower.indexOf('other') !== -1 || lower.indexOf('ui') !== -1;
};
runtimeHost.objectUsesScreenSpace = function(scene, object) {
    var record = runtimeHost.luaRecordForObject(scene, object);
    if (record) return runtimeHost.isScreenCamera(record.camera);
    try {
        var layer = String(object.getLayer ? object.getLayer() : '').toLowerCase();
        return layer === 'ui' || layer === 'flash' || layer === 'pausemenu' || layer === 'mobile';
    } catch (error) { return false; }
};
runtimeHost.objectCoordinateScaleX = function(scene, object) { return runtimeHost.objectUsesScreenSpace(scene, object) ? runtimeHost.viewportMetrics(scene).scaleX : 1; };
runtimeHost.objectCoordinateScaleY = function(scene, object) { return runtimeHost.objectUsesScreenSpace(scene, object) ? runtimeHost.viewportMetrics(scene).scaleY : 1; };
runtimeHost.toObjectScaleX = function(scene, object, value) {
    var record = runtimeHost.luaRecordForObject(scene, object);
    if (record) return (Number(value) || 0) * (runtimeHost.isScreenCamera(record.camera) ? runtimeHost.viewportMetrics(scene).scaleX : 1);
    return Number(value) || 0;
};
runtimeHost.toObjectScaleY = function(scene, object, value) {
    var record = runtimeHost.luaRecordForObject(scene, object);
    if (record) return (Number(value) || 0) * (runtimeHost.isScreenCamera(record.camera) ? runtimeHost.viewportMetrics(scene).scaleY : 1);
    return Number(value) || 0;
};
runtimeHost.fromObjectScaleX = function(scene, object, value) {
    var record = runtimeHost.luaRecordForObject(scene, object);
    if (record && typeof record.logicalScaleX === 'number') return record.logicalScaleX;
    return Number(value) || 0;
};
runtimeHost.fromObjectScaleY = function(scene, object, value) {
    var record = runtimeHost.luaRecordForObject(scene, object);
    if (record && typeof record.logicalScaleY === 'number') return record.logicalScaleY;
    return Number(value) || 0;
};
runtimeHost.psychZoomFactor = function(scene) {
    var metrics = runtimeHost.viewportMetrics(scene);
    return Math.max(metrics.scaleX, metrics.scaleY) * 1.05;
};
runtimeHost.psychToGameZoom = function(scene, value) { return (Number(value) || 0) * runtimeHost.psychZoomFactor(scene); };
runtimeHost.gameToPsychZoom = function(scene, value) { return (Number(value) || 0) / Math.max(0.0001, runtimeHost.psychZoomFactor(scene)); };
runtimeHost.isStageScript = function(script) { return Boolean(script && /^stages\//i.test(String(script.path || ''))); };
runtimeHost.isStageBootstrap = function(record) { return Boolean(record && record.stageAlias && record.ownerScript && record.ownerScript.activeCallback === 'onCreate'); };
runtimeHost.findNativeStageObject = function(scene, tag) {
    var wanted=String(tag || '').toLowerCase();
    var objects=[];
    try { objects=scene.getObjects('STAGE') || []; } catch (error) {}
    for (var i=0;i<objects.length;i+=1) if (String(objects[i]._stageTag || '').toLowerCase()===wanted) return objects[i];
    return null;
};
runtimeHost.writeStageBridgeStatus = function(scene) {
    if (!runtimeHost.shouldWriteDiagnostic(scene, "stageBridge")) return;
    var data=runtimeHost.ensureCompatibilityData(scene), root=runtimeHost.globalVariables(scene).getChild('StageBridge');
    var aliases=0; if(data.luaObjects) data.luaObjects.forEach(function(r){ if(r && r.stageAlias) aliases+=1; });
    root.getChild('AliasCount').setNumber(aliases);
    root.getChild('CurrentStage').setString(scene.getGame().getVariables().get('CurrentLoadedStage').getAsString());
    root.getChild('WorldCoordinatesUnscaled').setBoolean(true);
    root.getChild('ScreenCoordinatesScaled').setBoolean(true);
    root.getChild('State').setString(aliases>0?'Aliased':'Waiting');
};
runtimeHost.ensureOverlayCamera = function(scene, camera) {
    if (!runtimeHost.isScreenCamera(camera)) return;
    var layerName=runtimeHost.resolveLayerName(scene,camera), lower=String(camera||'').toLowerCase();
    if (!layerName || !scene.hasLayer(layerName)) return;
    var layer=scene.getLayer(layerName), metrics=runtimeHost.viewportMetrics(scene);
    // camOther in Psych is an independent fixed 1280x720 overlay. Never inherit game zoom/position.
    if (lower.indexOf('other')!==-1 && layer) {
        try { layer.setCameraX(metrics.width/2,0); layer.setCameraY(metrics.height/2,0); layer.setCameraZoom(1,0); layer.setCameraRotation(0,0); } catch(error) {}
    }
};
runtimeHost.applyLuaRecordTransform = function(scene, record) {
    if (!record || !record.object) return false;
    if (record.pixiBacked) return runtimeHost.applyPixiLuaRecordTransform(scene, record);
    var object=record.object;
    if (record.stageAlias) {
        if (runtimeHost.isStageBootstrap(record)) return true;
        object._stageBaseX=Number(record.logicalX)||0; object._stageBaseY=Number(record.logicalY)||0;
        object._stageScaleX=Number(record.logicalScaleX); if(!isFinite(object._stageScaleX)) object._stageScaleX=1;
        object._stageScaleY=Number(record.logicalScaleY); if(!isFinite(object._stageScaleY)) object._stageScaleY=1;
        object._stageOpacity=Math.max(0,Math.min(1,Number(record.alpha))); object._stageVisible=record.visible!==false;
        object._stageCamera=runtimeHost.isScreenCamera(record.camera)?(String(record.camera).toLowerCase().indexOf('other')!==-1?'other':'hud'):'game';
        object._stageIsHud=object._stageCamera!=='game';
        object._stageBlendMode=record.blendMode||object._stageBlendMode||'normal';
        try { object.getVariables().get('ParallaxX').setNumber(Number(record.scrollX)); object.getVariables().get('ParallaxY').setNumber(Number(record.scrollY)); } catch(error) {}
        return true;
    }
    runtimeHost.ensureOverlayCamera(scene,record.camera);
    var screen=runtimeHost.isScreenCamera(record.camera), metrics=runtimeHost.viewportMetrics(scene);
    var sx=screen?metrics.scaleX:1, sy=screen?metrics.scaleY:1;
    try { if(object.setLayer) object.setLayer(runtimeHost.resolveLayerName(scene,record.camera)); } catch(error) {}
    var x=(Number(record.logicalX)||0)*sx, y=(Number(record.logicalY)||0)*sy;
    if(object.setPosition) object.setPosition(x,y); else { if(object.setX)object.setX(x); if(object.setY)object.setY(y); }
    if(record.kind==='text') {
        if(object.setCharacterSize && isFinite(record.logicalTextSize)) object.setCharacterSize(Math.max(1,record.logicalTextSize*sy));
        if(object.setWrappingWidth && Number(record.logicalWrapWidth)>0) object.setWrappingWidth(record.logicalWrapWidth*sx);
    } else if(record.graphic) {
        if(object.setWidth) object.setWidth(Math.max(1,record.baseLogicalWidth*record.logicalScaleX*sx));
        if(object.setHeight) object.setHeight(Math.max(1,record.baseLogicalHeight*record.logicalScaleY*sy));
    } else {
        if(object.setScaleX) object.setScaleX(record.logicalScaleX*sx);
        if(object.setScaleY) object.setScaleY(record.logicalScaleY*sy);
    }
    if(object.setOpacity) object.setOpacity(Math.round(Math.max(0,Math.min(1,Number(record.alpha)))*255));
    if(object.hide) object.hide(!(record.added && record.visible!==false));
    return true;
};
runtimeHost.objectCandidates = function(name) {
    var lower = String(name || "").toLowerCase();
    if (lower === "boyfriend" || lower === "bf") return ["BF", "Boyfriend", "boyfriend"];
    if (lower === "dad" || lower === "opponent") return ["Sarvente2", "Dad", "dad", "Opponent"];
    if (lower === "gf" || lower === "girlfriend") return ["gf", "GF", "Girlfriend"];
    if (lower === "iconp1") return ["BF_icon", "BFIcon", "iconP1"];
    if (lower === "iconp2") return ["Opp_icon", "OppIcon", "iconP2"];
    if (lower === "healthbar") return ["LifeBar", "healthBar"];
    return [name];
};
runtimeHost.findObject = function(scene, name) {
    var data = runtimeHost.getSceneData(scene);
    var dynamic = data.luaObjects && data.luaObjects.get(String(name || ""));
    if (dynamic && dynamic.object) return dynamic.object;
    var candidates = runtimeHost.objectCandidates(name);
    for (var i = 0; i < candidates.length; i += 1) {
        try {
            if (typeof scene.isObjectRegistered === "function" && !scene.isObjectRegistered(candidates[i])) continue;
            var objects = scene.getObjects(candidates[i]);
            if (objects && objects.length) return objects[0];
        } catch (error) {}
    }
    return null;
};
runtimeHost.groupObjects = function(scene, name) {
    var lower = String(name || "").toLowerCase();
    var names;
    if (lower === "strumlinenotes") {
        names = ["OppLeftNoteStatic", "OppDownNoteStatic", "OppUpNoteStatic", "OppRightNoteStatic",
            "BfLeftNoteStatic", "BfDownNoteStatic", "BfUpNoteStatic", "BfRightNoteStatic"];
    } else if (lower === "playerstrums") {
        names = ["BfLeftNoteStatic", "BfDownNoteStatic", "BfUpNoteStatic", "BfRightNoteStatic"];
    } else if (lower === "opponentstrums") {
        names = ["OppLeftNoteStatic", "OppDownNoteStatic", "OppUpNoteStatic", "OppRightNoteStatic"];
    } else {
        names = [name];
    }
    var result = [];
    for (var i = 0; i < names.length; i += 1) {
        try {
            if (typeof scene.isObjectRegistered === "function" && !scene.isObjectRegistered(names[i])) continue;
            var objects = scene.getObjects(names[i]);
            for (var j = 0; j < objects.length; j += 1) result.push(objects[j]);
        } catch (error) {}
    }
    return result;
};
runtimeHost.virtualScreenWidth = 1280;
runtimeHost.virtualScreenHeight = 720;
runtimeHost.viewportMetrics = function(scene) {
    var data = runtimeHost.getSceneData(scene);
    var metrics = data.viewportMetrics;
    if (!metrics) metrics = data.viewportMetrics = { width: 1280, height: 720, scaleX: 1, scaleY: 1 };
    var actualWidth = Number(scene && scene.getViewportWidth ? scene.getViewportWidth() : runtimeHost.virtualScreenWidth) || runtimeHost.virtualScreenWidth;
    var actualHeight = Number(scene && scene.getViewportHeight ? scene.getViewportHeight() : runtimeHost.virtualScreenHeight) || runtimeHost.virtualScreenHeight;
    var scaleX = actualWidth / runtimeHost.virtualScreenWidth;
    var scaleY = actualHeight / runtimeHost.virtualScreenHeight;
    if (!isFinite(scaleX) || scaleX <= 0) scaleX = 1;
    if (!isFinite(scaleY) || scaleY <= 0) scaleY = 1;
    metrics.width = actualWidth;
    metrics.height = actualHeight;
    metrics.scaleX = scaleX;
    metrics.scaleY = scaleY;
    return metrics;
};
runtimeHost.toGameX = function(scene, value) { return (Number(value) || 0) * runtimeHost.viewportMetrics(scene).scaleX; };
runtimeHost.toGameY = function(scene, value) { return (Number(value) || 0) * runtimeHost.viewportMetrics(scene).scaleY; };
runtimeHost.fromGameX = function(scene, value) { return (Number(value) || 0) / runtimeHost.viewportMetrics(scene).scaleX; };
runtimeHost.fromGameY = function(scene, value) { return (Number(value) || 0) / runtimeHost.viewportMetrics(scene).scaleY; };
runtimeHost.toGameScaleX = function(scene, value) { return (Number(value) || 0) * runtimeHost.viewportMetrics(scene).scaleX; };
runtimeHost.toGameScaleY = function(scene, value) { return (Number(value) || 0) * runtimeHost.viewportMetrics(scene).scaleY; };
runtimeHost.fromGameScaleX = function(scene, value) { return (Number(value) || 0) / runtimeHost.viewportMetrics(scene).scaleX; };
runtimeHost.fromGameScaleY = function(scene, value) { return (Number(value) || 0) / runtimeHost.viewportMetrics(scene).scaleY; };
runtimeHost.readObjectValue = function(scene, object, parts) {
    var key = parts.join('.').toLowerCase();
    var record=runtimeHost.luaRecordForObject(scene,object);
    if(record) {
        if(key==='x') return Number(record.logicalX)||0;
        if(key==='y') return Number(record.logicalY)||0;
        if(key==='scale.x') return Number(record.logicalScaleX)||0;
        if(key==='scale.y') return Number(record.logicalScaleY)||0;
        if(key==='alpha') return Number(record.alpha);
        if(key==='visible') return record.visible!==false;
        if(key==='width') { if(record.graphic) return record.baseLogicalWidth*record.logicalScaleX; var w=object.getWidth?object.getWidth():0; return w/runtimeHost.objectCoordinateScaleX(scene,object); }
        if(key==='height') { if(record.graphic) return record.baseLogicalHeight*record.logicalScaleY; var h=object.getHeight?object.getHeight():0; return h/runtimeHost.objectCoordinateScaleY(scene,object); }
    }
    if (record) {
        if (key === 'offset.x') return Number(record.offsetX) || 0;
        if (key === 'offset.y') return Number(record.offsetY) || 0;
        if (key === 'flipx') return Boolean(record.flipX);
        if (key === 'color') return Number.isFinite(Number(record.color)) ? Number(record.color) : 0xffffff;
        if (key === 'angle') return Number(record.angle) || 0;
        if (key === 'animation.name' || key === 'animation.curanim.name') return String(record.currentAnimation || '');
        if (key === 'animation.framename') return String(record.lastPrefix || record.currentAnimation || '');
    }
    if (object && object.modAnimData) {
        if (key === 'imagefile') return runtimeHost.psychCharacterToken(object);
        if (key === 'offset.x' || key === 'offset.y') return 0;
        if (key === 'animation.framename') return runtimeHost.psychCharacterToken(object) + ':' + String(object._modCurrentAnim || '') + ':' + String(Math.floor(Number(object._modFrameIndex) || 0));
        if (key.indexOf('healthcolorarray.') === 0) {
            var channel = Math.max(0, Math.min(2, Math.floor(Number(key.split('.').pop()) || 0)));
            var tint = Number.isFinite(Number(object._healthColor)) ? Number(object._healthColor) : 0xffffff;
            return channel === 0 ? ((tint >> 16) & 255) : (channel === 1 ? ((tint >> 8) & 255) : (tint & 255));
        }
        var sourceDisplay = runtimeHost.pixiLuaSourceDisplay(object);
        if (key === 'scale.x' && sourceDisplay && sourceDisplay.scale) return Math.abs(Number(sourceDisplay.scale.x) || 1);
        if (key === 'scale.y' && sourceDisplay && sourceDisplay.scale) return Math.abs(Number(sourceDisplay.scale.y) || 1);
        if (key === 'flipx' && sourceDisplay && sourceDisplay.scale) return Number(sourceDisplay.scale.x) < 0;
    }
    if (key === 'imagefile') return '';
    if (key === 'pixel') return false;
    if (key === 'offset.x' || key === 'offset.y') return 0;
    if (key.indexOf('healthcolorarray.') === 0) return 255;
    if (key === 'frame.uv.x' || key === 'frame.uv.y') return 0;
    if (key === 'frame.uv.width' || key === 'frame.uv.height') return 1;
    if (key === 'animation.curanim.curframe' && typeof object.getAnimationFrame === 'function') return object.getAnimationFrame();
    if (key === 'animation.curanim.framerate') return 24;
    if (key === 'color' && typeof object.getColor === 'function') return object.getColor();
    if ((key === 'text' || key === 'string') && typeof object.getString === 'function') return object.getString();
    if (key === 'x' && typeof object.getX === 'function') return object.getX()/runtimeHost.objectCoordinateScaleX(scene,object);
    if (key === 'y' && typeof object.getY === 'function') return object.getY()/runtimeHost.objectCoordinateScaleY(scene,object);
    if (key === 'width' && typeof object.getWidth === 'function') return object.getWidth()/runtimeHost.objectCoordinateScaleX(scene,object);
    if (key === 'height' && typeof object.getHeight === 'function') return object.getHeight()/runtimeHost.objectCoordinateScaleY(scene,object);
    if (key === 'angle' && typeof object.getAngle === 'function') return object.getAngle();
    if (key === 'alpha' && typeof object.getOpacity === 'function') return object.getOpacity()/255;
    if (key === 'visible') { if(typeof object.isVisible==='function')return object.isVisible(); if(typeof object.isHidden==='function')return !object.isHidden(); }
    if (key === 'scale.x' && typeof object.getScaleX === 'function') return object.getScaleX();
    if (key === 'scale.y' && typeof object.getScaleY === 'function') return object.getScaleY();
    if (key === 'flipx' && typeof object.isFlippedX === 'function') return object.isFlippedX();
    if ((key === 'animation.name' || key === 'animation.curanim.name' || key === 'animation.framename') && typeof object.getAnimationName === 'function') return object.getAnimationName();
    var value=object; for(var i=0;i<parts.length;i+=1){ if(value==null)return undefined; value=value[parts[i]]; }
    return typeof value==='function'?undefined:value;
};
runtimeHost.writeObjectValue = function(scene, object, parts, value) {
    var key=parts.join('.').toLowerCase(), record=runtimeHost.luaRecordForObject(scene,object);
    if(record) {
        if(key==='x'){record.logicalX=Number(value)||0; runtimeHost.applyLuaRecordTransform(scene,record); return true;}
        if(key==='y'){record.logicalY=Number(value)||0; runtimeHost.applyLuaRecordTransform(scene,record); return true;}
        if(key==='scale.x'){record.scaleExplicitX=true;record.logicalScaleX=Number(value)||0; runtimeHost.applyLuaRecordTransform(scene,record); return true;}
        if(key==='scale.y'){record.scaleExplicitY=true;record.logicalScaleY=Number(value)||0; runtimeHost.applyLuaRecordTransform(scene,record); return true;}
        if(key==='alpha'){record.alpha=Math.max(0,Math.min(1,Number(value))); runtimeHost.applyLuaRecordTransform(scene,record); return true;}
        if(key==='visible'){record.visible=Boolean(value); runtimeHost.applyLuaRecordTransform(scene,record); return true;}
        if(key==='offset.x'){record.offsetX=Number(value)||0; runtimeHost.applyLuaRecordTransform(scene,record); return true;}
        if(key==='offset.y'){record.offsetY=Number(value)||0; runtimeHost.applyLuaRecordTransform(scene,record); return true;}
        if(key==='flipx'){record.flipX=Boolean(value); runtimeHost.applyLuaRecordTransform(scene,record); return true;}
        if(key==='color'){record.color=Number(value); runtimeHost.applyLuaRecordTransform(scene,record); return true;}
        if(key==='angle'){record.angleExplicit=true;record.angle=Number(value)||0; runtimeHost.applyLuaRecordTransform(scene,record); return true;}
        if(key==='width' && record.graphic){record.baseLogicalWidth=Math.max(1,Number(value)/(record.logicalScaleX||1)); runtimeHost.applyLuaRecordTransform(scene,record); return true;}
        if(key==='height' && record.graphic){record.baseLogicalHeight=Math.max(1,Number(value)/(record.logicalScaleY||1)); runtimeHost.applyLuaRecordTransform(scene,record); return true;}
    }
    if (key === 'color') return runtimeHost.setObjectColor ? runtimeHost.setObjectColor(object,value):false;
    if ((key === 'text' || key === 'string') && typeof object.setString === 'function'){object.setString(String(value));return true;}
    if (key === 'animation.curanim.curframe' && typeof object.setAnimationFrame === 'function'){object.setAnimationFrame(Math.max(0,Math.floor(Number(value)||0)));return true;}
    if (key === 'animation.curanim.framerate' || key === 'offset.x' || key === 'offset.y') return true;
    if (key === 'x' && typeof object.setX === 'function'){object.setX((Number(value)||0)*runtimeHost.objectCoordinateScaleX(scene,object));return true;}
    if (key === 'y' && typeof object.setY === 'function'){object.setY((Number(value)||0)*runtimeHost.objectCoordinateScaleY(scene,object));return true;}
    if (key === 'width' && typeof object.setWidth === 'function'){object.setWidth(Math.max(0,(Number(value)||0)*runtimeHost.objectCoordinateScaleX(scene,object)));return true;}
    if (key === 'height' && typeof object.setHeight === 'function'){object.setHeight(Math.max(0,(Number(value)||0)*runtimeHost.objectCoordinateScaleY(scene,object)));return true;}
    if (key === 'angle' && typeof object.setAngle === 'function'){object.setAngle(Number(value)); if(record&&record.stageAlias)object._stageAngle=Number(value)||0; return true;}
    if (key === 'alpha' && typeof object.setOpacity === 'function'){object.setOpacity(Math.max(0,Math.min(255,Number(value)*255)));return true;}
    if (key === 'visible' && typeof object.hide === 'function'){object.hide(!Boolean(value));return true;}
    if (key === 'scale.x' && typeof object.setScaleX === 'function'){object.setScaleX(Number(value)||0);return true;}
    if (key === 'scale.y' && typeof object.setScaleY === 'function'){object.setScaleY(Number(value)||0);return true;}
    if (key === 'flipx' && typeof object.flipX === 'function'){object.flipX(Boolean(value));return true;}
    if ((key === 'animation.name' || key === 'animation.curanim.name') && typeof object.setAnimationName === 'function'){object.setAnimationName(String(value));return true;}
    var target=object; for(var i=0;i<parts.length-1;i+=1){if(target[parts[i]]===null||typeof target[parts[i]]!=='object')return false;target=target[parts[i]];}
    if(parts.length&&Object.prototype.hasOwnProperty.call(target,parts[parts.length-1])){target[parts[parts.length-1]]=value;return true;} return false;
};
runtimeHost.cameraLayerName = function(name) {
    var lower = String(name || "").toLowerCase();
    if (lower === "camhud" || lower === "hud") return "ui";
    if (lower === "camother" || lower === "other") return "Flash";
    return "";
};
runtimeHost.readCameraValue = function(scene, cameraName, property) {
    var layer=scene.getLayer(runtimeHost.cameraLayerName(cameraName)), key=String(property||'').toLowerCase();
    var game=String(cameraName||'').toLowerCase()==='camgame' || runtimeHost.cameraLayerName(cameraName)==='';
    if(key==='zoom'&&layer.getCameraZoom) { var z=layer.getCameraZoom(0); return game?runtimeHost.gameToPsychZoom(scene,z):z; }
    if(key==='x'&&layer.getCameraX) return game?layer.getCameraX(0):runtimeHost.fromGameX(scene,layer.getCameraX(0));
    if(key==='y'&&layer.getCameraY) return game?layer.getCameraY(0):runtimeHost.fromGameY(scene,layer.getCameraY(0));
    if(key==='angle'&&layer.getCameraRotation)return layer.getCameraRotation(0); return undefined;
};
runtimeHost.writeCameraValue = function(scene, cameraName, property, value) {
    var layer=scene.getLayer(runtimeHost.cameraLayerName(cameraName)), key=String(property||'').toLowerCase();
    var game=String(cameraName||'').toLowerCase()==='camgame' || runtimeHost.cameraLayerName(cameraName)==='';
    if(key==='zoom'&&layer.setCameraZoom){layer.setCameraZoom(game?runtimeHost.psychToGameZoom(scene,value):Number(value),0);return true;}
    if(key==='x'&&layer.setCameraX){layer.setCameraX(game?(Number(value)||0):runtimeHost.toGameX(scene,value),0);return true;}
    if(key==='y'&&layer.setCameraY){layer.setCameraY(game?(Number(value)||0):runtimeHost.toGameY(scene,value),0);return true;}
    if(key==='angle'&&layer.setCameraRotation){layer.setCameraRotation(Number(value),0);return true;} return false;
};

// Psych PlayState 0.7.x engine zoom decay. It runs after Lua onUpdate and before onUpdatePost.
runtimeHost.psychCameraZoomDecayReady = function(scene) {
    try {
        var globals = scene.getGame().getVariables();
        var autoLoader = globals.get('PsychLuaRuntime').getChild('AutoLoader');
        if (!autoLoader.getChild('Completed').getAsBoolean() || autoLoader.getChild('Failed').getAsBoolean()) return false;
        if (!scene.getVariables().get('FNFLoad').getChild('MusicStarted').getAsBoolean()) return false;
        if (!scene.getVariables().get('PsychEvents').getChild('SmoothCamera').getChild('ZoomInitialized').getAsBoolean()) return false;
        if (Number(globals.get('Timer1').getAsNumber()) < 0) return false;
        return runtimeHost.getProperty(scene, 'camZooming') !== false;
    } catch (error) {
        return false;
    }
};
runtimeHost.writePsychCameraZoomDecayStatus = function(scene, state) {
    if (!runtimeHost.shouldWriteDiagnostic(scene, "cameraZoom")) return;
    try {
        var root = scene.getGame().getVariables().get('PsychLuaRuntime').getChild('SmoothCam');
        root.getChild('EngineDecayActive').setBoolean(Boolean(state.active));
        root.getChild('EngineDecayCount').setNumber(Number(state.count) || 0);
        root.getChild('EngineDecayGameTarget').setNumber(Number(state.gameTarget) || 1);
        root.getChild('EngineDecayHudTarget').setNumber(Number(state.hudTarget) || 1);
        root.getChild('EngineDecayGameZoom').setNumber(Number(state.gameZoom) || 1);
        root.getChild('EngineDecayHudZoom').setNumber(Number(state.hudZoom) || 1);
    } catch (error) {}
};
runtimeHost.applyPsychCameraZoomDecay = function(scene, elapsed) {
    var data = runtimeHost.ensureCompatibilityData(scene);
    var state = data.psychCameraZoomDecay || (data.psychCameraZoomDecay = {
        active:false,count:0,gameTarget:1,hudTarget:1,gameZoom:1,hudZoom:1
    });
    state.active = runtimeHost.psychCameraZoomDecayReady(scene);
    if (!state.active) {
        runtimeHost.writePsychCameraZoomDecayStatus(scene, state);
        return false;
    }

    var dt = Math.max(0, Number(elapsed) || 0);
    var decay = Number(runtimeHost.getProperty(scene, 'camZoomingDecay'));
    var playbackRate = Number(runtimeHost.getProperty(scene, 'playbackRate'));
    if (!isFinite(decay) || decay <= 0) decay = 1;
    if (!isFinite(playbackRate) || playbackRate <= 0) playbackRate = 1;

    var gameTarget = Number(runtimeHost.getProperty(scene, 'defaultCamZoom'));
    var hudTarget = 1;
    var gameZoom = Number(runtimeHost.readCameraValue(scene, 'camGame', 'zoom'));
    var hudZoom = Number(runtimeHost.readCameraValue(scene, 'camHUD', 'zoom'));
    if (!isFinite(gameTarget) || gameTarget <= 0) gameTarget = 1;
    if (!isFinite(gameZoom)) gameZoom = gameTarget;
    if (!isFinite(hudZoom)) hudZoom = hudTarget;

    // FlxMath.lerp(target, current, exp(-elapsed * 3.125 * decay * playbackRate)).
    var retain = Math.exp(-dt * 3.125 * decay * playbackRate);
    var nextGameZoom = gameTarget + (gameZoom - gameTarget) * retain;
    var nextHudZoom = hudTarget + (hudZoom - hudTarget) * retain;
    if (Math.abs(nextGameZoom - gameTarget) < 0.000001) nextGameZoom = gameTarget;
    if (Math.abs(nextHudZoom - hudTarget) < 0.000001) nextHudZoom = hudTarget;

    runtimeHost.writeCameraValue(scene, 'camGame', 'zoom', nextGameZoom);
    runtimeHost.writeCameraValue(scene, 'camHUD', 'zoom', nextHudZoom);
    state.count += 1;
    state.gameTarget = gameTarget;
    state.hudTarget = hudTarget;
    state.gameZoom = nextGameZoom;
    state.hudZoom = nextHudZoom;
    runtimeHost.writePsychCameraZoomDecayStatus(scene, state);
    return true;
};
runtimeHost.readVariablePath = function(container, parts) {
    if (!parts.length) return undefined;
    var variable = container.get(parts[0]);
    for (var i = 1; i < parts.length; i += 1) variable = variable.getChild(parts[i]);
    if (typeof variable.getType === "function") {
        var type = variable.getType();
        if (type === "boolean") return variable.getAsBoolean();
        if (type === "number") return variable.getAsNumber();
    }
    var text = variable.getAsString();
    var number = variable.getAsNumber();
    return text !== "" ? text : number;
};
runtimeHost.writeVariablePath = function(container, parts, value) {
    if (!parts.length) return false;
    var variable = container.get(parts[0]);
    for (var i = 1; i < parts.length; i += 1) variable = variable.getChild(parts[i]);
    if (typeof value === "boolean") variable.setBoolean(value);
    else if (typeof value === "number") variable.setNumber(value);
    else variable.setString(String(value));
    return true;
};
runtimeHost.getProperty = function(scene, path) {
    var parts = runtimeHost.parsePath(path);
    if (!parts.length) return null;

var canonical=String(path||'').toLowerCase();
if(canonical==='iscameraonforcedpos') {
    try { return scene.getVariables().get('PsychEvents').getChild('MidCam').getChild('Enabled').getAsBoolean(); }
    catch(error) { return false; }
}
if(canonical==='defaultcamzoom' || canonical==='sundaybasecamzoom') return scene.getGame().getVariables().get('Stage_Zoom').getAsNumber() || 1;
if(canonical==='cameraspeed') return scene.getGame().getVariables().get('Stage_CameraSpeed').getAsNumber() || 1;

    var first = String(parts[0]).toLowerCase();
    if (first === "camgame" || first === "camhud" || first === "camother") {
        var cameraValue = runtimeHost.readCameraValue(scene, parts[0], parts[1]);
        if (typeof cameraValue !== "undefined") return cameraValue;
    }
    if (first === "camfollow" || first === "camfollowpos") {
        var forcedCamera = runtimeHost.getSceneData(scene).forcedCamera;
        var followKey = String(parts[1] || '').toLowerCase();
        if (forcedCamera && forcedCamera.active && (followKey === 'x' || followKey === 'y')) {
            return followKey === 'x' ? forcedCamera.x : forcedCamera.y;
        }
        var followValue = runtimeHost.readCameraValue(scene, "camGame", parts[1]);
        if (typeof followValue !== "undefined") return followValue;
    }
    if (parts.length >= 3 && String(parts[1]).toLowerCase() === "members") {
        var memberObjects = runtimeHost.groupObjects(scene, parts[0]);
        var memberObject = memberObjects[Math.max(0, Math.floor(Number(parts[2]) || 0))];
        if (memberObject) {
            var memberValue = runtimeHost.readObjectValue(scene, memberObject, parts.slice(3));
            if (typeof memberValue !== "undefined") return memberValue;
        }
    }
    var dynamicRecord = runtimeHost.getSceneData(scene).luaObjects && runtimeHost.getSceneData(scene).luaObjects.get(String(parts[0]));
    if (dynamicRecord && parts.slice(1).join(".").toLowerCase() === "imagefile") return dynamicRecord.image || "";
    var object = runtimeHost.findObject(scene, parts[0]);
    if (object) {
        var objectValue = runtimeHost.readObjectValue(scene, object, parts.slice(1));
        if (typeof objectValue !== "undefined") return objectValue;
    }
    var data = runtimeHost.getSceneData(scene);
    if (Object.prototype.hasOwnProperty.call(data.properties, String(path))) return data.properties[String(path)];
    if (runtimeHost.propertyDefaults && Object.prototype.hasOwnProperty.call(runtimeHost.propertyDefaults, String(path))) return runtimeHost.propertyDefaults[String(path)];
    try { return runtimeHost.readVariablePath(scene.getVariables(), parts); } catch (error) { return null; }
};
runtimeHost.setProperty = function(scene, path, value) {
    var parts = runtimeHost.parsePath(path);
    if (!parts.length) return value;

var canonical=String(path||'').toLowerCase();
if(canonical==='iscameraonforcedpos') {
    var forcedActive = Boolean(value);
    var forcedData = runtimeHost.ensureCompatibilityData(scene);
    forcedData.forcedCamera = forcedData.forcedCamera || {active:false,x:0,y:0};
    if (forcedActive && !forcedData.forcedCamera.active) {
        forcedData.forcedCamera.x = Number(runtimeHost.readCameraValue(scene,'camGame','x')) || 0;
        forcedData.forcedCamera.y = Number(runtimeHost.readCameraValue(scene,'camGame','y')) || 0;
    }
    forcedData.forcedCamera.active = forcedActive;
    try {
        var midCamRoot = scene.getVariables().get('PsychEvents').getChild('MidCam');
        midCamRoot.getChild('Enabled').setBoolean(forcedActive);
        midCamRoot.getChild('TargetX').setNumber(forcedData.forcedCamera.x);
        midCamRoot.getChild('TargetY').setNumber(forcedData.forcedCamera.y);
    } catch(error) {}
    if (forcedActive && runtimeHost.applyForcedCamera) runtimeHost.applyForcedCamera(scene);
    return forcedActive;
}
if(canonical==='sundaybasecamzoom') {
    var oldBase = Number(runtimeHost.getProperty(scene, 'defaultCamZoom'));
    var pulse = Math.max(0, Number(runtimeHost.readCameraValue(scene, 'camGame', 'zoom')) - oldBase);
    runtimeHost.setProperty(scene, 'defaultCamZoom', value);
    runtimeHost.writeCameraValue(scene, 'camGame', Number(value) + (Number.isFinite(pulse) ? pulse : 0));
    return value;
}
if(canonical==='defaultcamzoom') {
    var logical=Math.max(0.01,Number(value)||1); scene.getGame().getVariables().get('Stage_Zoom').setNumber(logical);
    runtimeHost.writeCameraValue(scene,'camGame','zoom',logical);
    try { scene.getVariables().get('PsychEvents').getChild('SmoothCamera').getChild('BaseZoom').setNumber(runtimeHost.psychToGameZoom(scene,logical)); } catch(error) {}
    return value;
}
if(canonical==='cameraspeed') { scene.getGame().getVariables().get('Stage_CameraSpeed').setNumber(Number(value)||1); return value; }

    var first = String(parts[0]).toLowerCase();
    if (first === "camgame" || first === "camhud" || first === "camother") {
        if (runtimeHost.writeCameraValue(scene, parts[0], parts[1], value)) return value;
    }
    if (first === "camfollow" || first === "camfollowpos") {
        var forcedCamera = runtimeHost.getSceneData(scene).forcedCamera;
        var followKey = String(parts[1] || '').toLowerCase();
        if (forcedCamera && forcedCamera.active && (followKey === 'x' || followKey === 'y')) {
            if (followKey === 'x') forcedCamera.x = Number(value) || 0;
            else forcedCamera.y = Number(value) || 0;
            try {
                var midCamRoot = scene.getVariables().get('PsychEvents').getChild('MidCam');
                midCamRoot.getChild(followKey === 'x' ? 'TargetX' : 'TargetY').setNumber(Number(value) || 0);
            } catch(error) {}
        }
        if (runtimeHost.writeCameraValue(scene, "camGame", parts[1], value)) return value;
    }
    if (parts.length >= 3 && String(parts[1]).toLowerCase() === "members") {
        var memberObjects = runtimeHost.groupObjects(scene, parts[0]);
        var memberObject = memberObjects[Math.max(0, Math.floor(Number(parts[2]) || 0))];
        if (memberObject && runtimeHost.writeObjectValue(scene, memberObject, parts.slice(3), value)) return value;
    }
    var object = runtimeHost.findObject(scene, parts[0]);
    if (object && runtimeHost.writeObjectValue(scene, object, parts.slice(1), value)) return value;
    runtimeHost.getSceneData(scene).properties[String(path)] = value;
    try { runtimeHost.writeVariablePath(scene.getVariables(), parts, value); } catch (error) {}
    return value;
};
runtimeHost.getPropertyFromGroup = function(scene, group, index, property) {
    var objects = runtimeHost.groupObjects(scene, group);
    var object = objects[Math.max(0, Math.floor(Number(index) || 0))];
    if (!object) return null;
    var value = runtimeHost.readObjectValue(scene, object, runtimeHost.parsePath(property));
    return typeof value === "undefined" ? null : value;
};
runtimeHost.setPropertyFromGroup = function(scene, group, index, property, value) {
    var objects = runtimeHost.groupObjects(scene, group);
    var object = objects[Math.max(0, Math.floor(Number(index) || 0))];
    if (object) runtimeHost.writeObjectValue(scene, object, runtimeHost.parsePath(property), value);
    return value;
};
// BEGIN PSYCH LUA COMPATIBILITY API 1.6.0
runtimeHost.ensureCompatibilityData = function(scene) {
    var data = runtimeHost.getSceneData(scene);
    data.luaObjects = data.luaObjects || new Map();
    data.tweens = data.tweens || new Map();
    data.timers = data.timers || new Map();
    data.warnings = data.warnings || new Set();
    data.achievements = data.achievements || new Map();
    data.pixiLuaSpritePool = data.pixiLuaSpritePool || [];
    data.pixiLuaSpriteCreated = Number(data.pixiLuaSpriteCreated) || 0;
    data.pixiLuaSpriteReused = Number(data.pixiLuaSpriteReused) || 0;
    data.pixiLuaSpriteRecycled = Number(data.pixiLuaSpriteRecycled) || 0;
    if (typeof data.nextBackZ !== "number") data.nextBackZ = -1000;
    if (typeof data.nextFrontZ !== "number") data.nextFrontZ = 1000;
    if (!data.performance) {
        data.performance = {
            diagnosticInterval: 0.25,
            diagnosticElapsed: 0.25,
            diagnosticsDue: true,
            diagnosticGeneration: 0,
            diagnosticWritten: Object.create(null),
            stats: Object.create(null),
            luaGlobalWrites: 0,
            luaGlobalSkips: 0,
            callbackDispatches: 0,
            runtimeStateNextAt: 0,
            globalSnapshot: Object.create(null),
            globalSnapshotNames: [],
            dispatcherFrames: 0,
            dispatcherLastMs: 0,
            dispatcherAverageMs: 0,
            dispatcherMaxMs: 0,
            dispatcherSpikeCount: 0,
            gcStepCount: 0,
            gcFullCount: 0,
            gcEmergencyCount: 0,
            gcLastStepMs: 0,
            gcMaxStepMs: 0,
            luaMemoryKb: 0
        };
    }
    data.callbackScripts = data.callbackScripts || new Map();
    data.callbackTargetCache = data.callbackTargetCache || new Map();
    data.callbackIndexVersion = Number(data.callbackIndexVersion) || 0;
    data.emptyCallbackTargets = data.emptyCallbackTargets || [];
    data.completedTweens = data.completedTweens || [];
    data.completedTimers = data.completedTimers || [];
    data.tweenCallbackArgs = data.tweenCallbackArgs || [""];
    data.timerCallbackArgs = data.timerCallbackArgs || ["", 0, 0];
    data.ownedTagsScratch = data.ownedTagsScratch || [];
    data.gcScripts = data.gcScripts || [];
    data.gcQueue = data.gcQueue || new Array(64);
    data.gcQueueHead = Number(data.gcQueueHead) || 0;
    data.gcQueueTail = Number(data.gcQueueTail) || 0;
    data.gcQueueCount = Number(data.gcQueueCount) || 0;
    data.pixiLuaRecordPool = data.pixiLuaRecordPool || [];
    data.pixiLuaRecordCreated = Number(data.pixiLuaRecordCreated) || 0;
    data.pixiLuaRecordReused = Number(data.pixiLuaRecordReused) || 0;
    data.pixiLuaRecordRecycled = Number(data.pixiLuaRecordRecycled) || 0;
    return data;
};
runtimeHost.nowMs = function() {
    return typeof performance !== "undefined" && performance && typeof performance.now === "function"
        ? performance.now()
        : Date.now();
};
runtimeHost.beginPerformanceFrame = function(scene, elapsed) {
    var performanceState = runtimeHost.ensureCompatibilityData(scene).performance;
    var interval = Math.max(0.05, Number(performanceState.diagnosticInterval) || 0.25);
    performanceState.diagnosticElapsed += Math.max(0, Number(elapsed) || 0);
    performanceState.diagnosticsDue = performanceState.diagnosticElapsed >= interval;
    if (performanceState.diagnosticsDue) performanceState.diagnosticElapsed %= interval;
    performanceState.diagnosticGeneration += 1;
    return performanceState;
};
runtimeHost.shouldWriteDiagnostic = function(scene, key, force) {
    var performanceState = runtimeHost.ensureCompatibilityData(scene).performance;
    if (!force && !performanceState.diagnosticsDue) return false;
    key = String(key || "default");
    if (!force && performanceState.diagnosticWritten[key] === performanceState.diagnosticGeneration) return false;
    performanceState.diagnosticWritten[key] = performanceState.diagnosticGeneration;
    return true;
};
runtimeHost.queueLuaGc = function(scene, script) {
    if (!script || script.closed || script.disabled || !script.gcStepFn || script.gcQueued) return;
    var data = runtimeHost.ensureCompatibilityData(scene);
    if (data.gcQueueCount >= data.gcQueue.length) return;
    data.gcQueue[data.gcQueueTail] = script;
    data.gcQueueTail = (data.gcQueueTail + 1) % data.gcQueue.length;
    data.gcQueueCount += 1;
    script.gcQueued = true;
};
runtimeHost.stepLuaGarbage = function(scene, elapsed) {
    var data = runtimeHost.ensureCompatibilityData(scene);
    if (!data.gcQueueCount) return;
    var performanceState = data.performance;
    var musicStarted = false;
    try {
        musicStarted = scene.getVariables()
            .get("FNFLoad").getChild("MusicStarted").getAsBoolean();
    } catch (ignored) {}
    var songPosition = Number(runtimeHost.globalValue(scene, ["Timer1"], 0)) || 0;
    var safeWindow = !musicStarted || songPosition < 0;
    var steps = safeWindow ? Math.min(data.gcQueueCount, 4) : Math.min(data.gcQueueCount, 1);
    for (var i = 0; i < steps; i += 1) {
        var script = data.gcQueue[data.gcQueueHead];
        data.gcQueue[data.gcQueueHead] = null;
        data.gcQueueHead = (data.gcQueueHead + 1) % data.gcQueue.length;
        data.gcQueueCount -= 1;
        if (!script) continue;
        script.gcQueued = false;
        if (script.closed || script.disabled || typeof script.gcStepFn !== "function") continue;
        var started = runtimeHost.nowMs();
        try {
            var budgetKb = safeWindow ? 64 : (script.luaMemoryKb > 7168 ? 32 : 16);
            var memoryKb = Number(script.gcStepFn(budgetKb));
            if (isFinite(memoryKb) && memoryKb >= 0) script.luaMemoryKb = memoryKb;
            var duration = runtimeHost.nowMs() - started;
            performanceState.gcStepCount += 1;
            performanceState.gcLastStepMs = duration;
            if (duration > performanceState.gcMaxStepMs) performanceState.gcMaxStepMs = duration;
            if (safeWindow && script.luaMemoryKb > 7168 && typeof script.gcCollectFn === "function") {
                var emergencyStarted = runtimeHost.nowMs();
                script.luaMemoryKb = Number(script.gcCollectFn()) || script.luaMemoryKb;
                performanceState.gcEmergencyCount += 1;
                performanceState.gcFullCount += 1;
                var emergencyDuration = runtimeHost.nowMs() - emergencyStarted;
                if (emergencyDuration > performanceState.gcMaxStepMs) performanceState.gcMaxStepMs = emergencyDuration;
            }
        } catch (error) {
            script.gcStepFn = null;
            script.gcCollectFn = null;
        }
    }
};
runtimeHost.collectLuaGarbage = function(scene, full) {
    var data = runtimeHost.ensureCompatibilityData(scene);
    var performanceState = data.performance;
    for (var i = 0; i < data.gcScripts.length; i += 1) {
        var script = data.gcScripts[i];
        if (!script || script.closed || script.disabled) continue;
        var fn = full ? script.gcCollectFn : script.gcStepFn;
        if (typeof fn !== "function") continue;
        var started = runtimeHost.nowMs();
        try {
            script.luaMemoryKb = Number(full ? fn() : fn(64)) || script.luaMemoryKb;
            if (full) performanceState.gcFullCount += 1;
            else performanceState.gcStepCount += 1;
            var duration = runtimeHost.nowMs() - started;
            performanceState.gcLastStepMs = duration;
            if (duration > performanceState.gcMaxStepMs) performanceState.gcMaxStepMs = duration;
        } catch (error) {}
    }
};
runtimeHost.finishPerformanceFrame = function(scene, startedAt) {
    var performanceState = runtimeHost.ensureCompatibilityData(scene).performance;
    var duration = Math.max(0, runtimeHost.nowMs() - startedAt);
    performanceState.dispatcherFrames += 1;
    performanceState.dispatcherLastMs = duration;
    performanceState.dispatcherAverageMs += (duration - performanceState.dispatcherAverageMs) * 0.02;
    if (duration > performanceState.dispatcherMaxMs) performanceState.dispatcherMaxMs = duration;
    if (duration > 2) performanceState.dispatcherSpikeCount += 1;
};
runtimeHost.writePerformanceStatus = function(scene) {
    if (!runtimeHost.shouldWriteDiagnostic(scene, "performance")) return;
    var data = runtimeHost.ensureCompatibilityData(scene);
    var performanceState = data.performance;
    var memoryKb = 0;
    for (var i = 0; i < data.gcScripts.length; i += 1) memoryKb += Number(data.gcScripts[i] && data.gcScripts[i].luaMemoryKb) || 0;
    performanceState.luaMemoryKb = memoryKb;
    var root = runtimeHost.globalVariables(scene).getChild("Performance");
    root.getChild("DispatcherLastMs").setNumber(performanceState.dispatcherLastMs);
    root.getChild("DispatcherAverageMs").setNumber(performanceState.dispatcherAverageMs);
    root.getChild("DispatcherMaxMs").setNumber(performanceState.dispatcherMaxMs);
    root.getChild("DispatcherSpikeCount").setNumber(performanceState.dispatcherSpikeCount);
    root.getChild("LuaGCStepLastMs").setNumber(performanceState.gcLastStepMs);
    root.getChild("LuaGCStepMaxMs").setNumber(performanceState.gcMaxStepMs);
    root.getChild("LuaGCStepCount").setNumber(performanceState.gcStepCount);
    root.getChild("LuaGCFullCount").setNumber(performanceState.gcFullCount);
    root.getChild("LuaGCEmergencyCount").setNumber(performanceState.gcEmergencyCount);
    root.getChild("LuaMemoryKB").setNumber(memoryKb);
    root.getChild("GCQueueCount").setNumber(data.gcQueueCount);
    root.getChild("CallbackDispatches").setNumber(performanceState.callbackDispatches);
    root.getChild("LuaGlobalWrites").setNumber(performanceState.luaGlobalWrites);
    root.getChild("LuaGlobalSkips").setNumber(performanceState.luaGlobalSkips);
    root.getChild("GhostSpritePool").setNumber(data.pixiLuaSpritePool.length);
    root.getChild("GhostRecordPool").setNumber(data.pixiLuaRecordPool.length);
    if (typeof performance !== "undefined" && performance && performance.memory) {
        root.getChild("JSHeapUsedMB").setNumber(Number(performance.memory.usedJSHeapSize) / 1048576);
    }
};
runtimeHost.applyForcedCamera = function(scene) {
    var data = runtimeHost.ensureCompatibilityData(scene);
    var forcedCamera = data.forcedCamera;
    if (!forcedCamera || !forcedCamera.active) return false;
    runtimeHost.writeCameraValue(scene, 'camGame', 'x', forcedCamera.x);
    runtimeHost.writeCameraValue(scene, 'camGame', 'y', forcedCamera.y);
    return true;
};

runtimeHost.writeCountdownStatus = function(scene) {
    if (!runtimeHost.shouldWriteDiagnostic(scene, "countdown")) return;
    if (!scene) return;
    var data = runtimeHost.ensureCompatibilityData(scene);
    data.countdown = data.countdown || { nextTick: 0, completed: false, state: "NotStarted", lastCounter: -1, timer: -999, dispatchedCount: 0 };
    var roots = [
        runtimeHost.extensionVariables(scene).get("Countdown"),
        runtimeHost.globalVariables(scene).getChild("Countdown")
    ];
    for (var i = 0; i < roots.length; i += 1) {
        roots[i].getChild("State").setString(String(data.countdown.state || "NotStarted"));
        roots[i].getChild("NextTick").setNumber(Number(data.countdown.nextTick) || 0);
        roots[i].getChild("LastCounter").setNumber(Number(data.countdown.lastCounter));
        roots[i].getChild("Timer").setNumber(Number(data.countdown.timer) || 0);
        roots[i].getChild("DispatchedCount").setNumber(Number(data.countdown.dispatchedCount) || 0);
        roots[i].getChild("Completed").setBoolean(Boolean(data.countdown.completed));
    }
};
runtimeHost.writeStrumStatus = function(scene) {
    if (!runtimeHost.shouldWriteDiagnostic(scene, "strums")) return;
    if (!scene) return;
    var data = runtimeHost.ensureCompatibilityData(scene);
    var roots = [
        runtimeHost.extensionVariables(scene).get("Strums"),
        runtimeHost.globalVariables(scene).getChild("Strums")
    ];
    for (var i = 0; i < roots.length; i += 1) {
        roots[i].getChild("Captured").setBoolean(Boolean(data.defaultStrums && data.defaultStrums.length === 8));
        roots[i].getChild("CaptureCount").setNumber(Number(data.strumCaptureCount) || 0);
        roots[i].getChild("ObjectCount").setNumber(Number(data.strumObjectCount) || 0);
        roots[i].getChild("InvalidCount").setNumber(Number(data.strumInvalidCount) || 0);
        roots[i].getChild("RecoveredCount").setNumber(Number(data.strumRecoveredCount) || 0);
        roots[i].getChild("Snapshot").setString(String(data.strumSnapshot || ""));
    }
};
runtimeHost.captureDefaultStrums = function(scene, force) {
    var data = runtimeHost.ensureCompatibilityData(scene);
    if (!force && data.defaultStrums && data.defaultStrums.length === 8) {
        runtimeHost.writeStrumStatus(scene);
        return true;
    }
    var objects = runtimeHost.groupObjects(scene, "strumLineNotes");
    data.strumObjectCount = objects.length;
    data.strumCaptureCount = (Number(data.strumCaptureCount) || 0) + 1;
    var snapshot = [];
    var invalid = 0;
    if (objects.length < 8) invalid += 8 - objects.length;
    for (var i = 0; i < 8; i += 1) {
        var object = objects[i];
        if (!object) { invalid += 1; continue; }
        var entry = {
            x: Number(runtimeHost.readObjectValue(scene, object, ["x"])),
            y: Number(runtimeHost.readObjectValue(scene, object, ["y"])),
            scaleX: Number(runtimeHost.readObjectValue(scene, object, ["scale", "x"])),
            scaleY: Number(runtimeHost.readObjectValue(scene, object, ["scale", "y"])),
            alpha: Number(runtimeHost.readObjectValue(scene, object, ["alpha"])),
            visible: runtimeHost.readObjectValue(scene, object, ["visible"]) !== false
        };
        if (!isFinite(entry.x) || !isFinite(entry.y) || !isFinite(entry.scaleX) || !isFinite(entry.scaleY) || entry.scaleX <= 0 || entry.scaleY <= 0) {
            invalid += 1;
        }
        snapshot.push(entry);
    }
    data.strumInvalidCount = invalid;
    if (snapshot.length === 8 && invalid === 0) {
        data.defaultStrums = snapshot;
        data.strumSnapshot = snapshot.map(function(item, index) {
            return index + ":" + [item.x, item.y, item.scaleX, item.scaleY, item.alpha].map(function(value) {
                return Math.round(Number(value) * 1000) / 1000;
            }).join(",");
        }).join(" | ");
    } else {
        data.defaultStrums = null;
        data.strumSnapshot = "capture failed: objects=" + objects.length + ", invalid=" + invalid;
    }
    runtimeHost.writeStrumStatus(scene);
    return Boolean(data.defaultStrums && data.defaultStrums.length === 8);
};
runtimeHost.resetCountdown = function(scene) {
    var data = runtimeHost.ensureCompatibilityData(scene);
    data.countdown = {
        nextTick: 0,
        completed: false,
        state: "WaitingForMusic",
        lastCounter: -1,
        timer: -999,
        dispatchedCount: 0
    };
    runtimeHost.writeCountdownStatus(scene);
};
runtimeHost.sanitizeStrums = function(scene, counter) {
    var data = runtimeHost.ensureCompatibilityData(scene);
    var defaults = data.defaultStrums || [];
    var objects = runtimeHost.groupObjects(scene, "strumLineNotes");
    var prefs = data.songPreferences || { middle: runtimeHost.liveSetting(scene, "MiddleScroll", false) };
    var middle = Boolean(prefs.middle);
    var recovered = 0;
    var invalid = 0;
    for (var i = 0; i < 8; i += 1) {
        var object = objects[i];
        var fallback = defaults[i];
        if (!object) { invalid += 1; continue; }
        var x = Number(runtimeHost.readObjectValue(scene, object, ["x"]));
        var y = Number(runtimeHost.readObjectValue(scene, object, ["y"]));
        var sx = Number(runtimeHost.readObjectValue(scene, object, ["scale", "x"]));
        var sy = Number(runtimeHost.readObjectValue(scene, object, ["scale", "y"]));
        if (!isFinite(x) && fallback) { runtimeHost.writeObjectValue(scene, object, ["x"], fallback.x); recovered += 1; }
        if (!isFinite(y) && fallback) { runtimeHost.writeObjectValue(scene, object, ["y"], fallback.y); recovered += 1; }
        if ((!isFinite(sx) || sx <= 0.001) && fallback) { runtimeHost.writeObjectValue(scene, object, ["scale", "x"], fallback.scaleX); recovered += 1; }
        if ((!isFinite(sy) || sy <= 0.001) && fallback) { runtimeHost.writeObjectValue(scene, object, ["scale", "y"], fallback.scaleY); recovered += 1; }
        if (Number(counter) >= 3 && fallback) {
            // NotesAlt is remapped to the exact native X. Do not teleport X here.
            if (typeof object.hide === "function") object.hide(false);
            var nativeAlpha = Number(fallback.alpha);
            if (!isFinite(nativeAlpha) || nativeAlpha <= 0.001) nativeAlpha = middle && i < 4 ? (100 / 255) : 1;
            if (middle && i < 4) nativeAlpha = Math.max(nativeAlpha, 100 / 255);
            runtimeHost.writeObjectValue(scene, object, ["alpha"], nativeAlpha);
            recovered += 1;
        }
    }
    data.strumInvalidCount = invalid;
    data.strumRecoveredCount = (Number(data.strumRecoveredCount) || 0) + recovered;
    runtimeHost.writeStrumStatus(scene);
    return recovered;
};
runtimeHost.warnOnce = function(scene, key, message) {
    var data = runtimeHost.ensureCompatibilityData(scene);
    key = String(key || message || "warning");
    if (data.warnings.has(key)) return;
    data.warnings.add(key);
    console.warn("[PsychLua compatibility] " + String(message || key));
};
runtimeHost.normalizeImageKey = function(value) {
    var key = String(value == null ? "" : value).replace(/\\/g, "/").replace(/^images\//i, "").replace(/\.png$/i, "");
    return key.toLowerCase();
};
runtimeHost.imageAnimations = {
    "": "__white",
    "empty": "__white",
    "2barsthing": "2BarsThing",
    "ether/bg": "Ether/BG",
    "ether/pillars": "Ether/Pillars",
    "ether/chairs": "Ether/Chairs",
    "ether/lights": "Ether/Lights",
    "ether/oldether/benchs": "Ether/OldEther/benchs",
    "ether/oldether/churchnight": "Ether/OldEther/churchNight",
    "ether/oldether/moonlight": "Ether/OldEther/moonLight",
    "ether/oldether/stool": "Ether/OldEther/stool",
    "nikca/bg": "Nikca/BG",
    "nikca/pillars": "Nikca/Pillars",
    "nikca/chairs": "Nikca/Chairs",
    "vane/bg": "Vane/BG",
    "vane/pillars": "Vane/Pillars",
    "vane/chairs": "Vane/Chairs",
    "vane/lights": "Vane/Lights",
    "cat": "__character_cat",
    "bf-old-dead": "__character_bfdead",
    "bf": "__character_bf"
};
runtimeHost.propertyDefaults = {
    "skipCountdown": false,
    "skipArrowStartTween": false,
    "inGameOver": false,
    "isDead": false,
    "camZooming": true,
    "camZoomingMult": 1,
    "camZoomingDecay": 1,
    "cameraSpeed": 1,
    "defaultCamZoom": 1,
    "uiGroup.alpha": 1,
    "healthBar.percent": 0
};
runtimeHost.luaRecord = function(scene, tag) {
    return runtimeHost.ensureCompatibilityData(scene).luaObjects.get(String(tag || "")) || null;
};
runtimeHost.resolveLayerName = function(scene, camera) {
    var lower = String(camera || "game").toLowerCase();
    var wanted = "";
    if (lower.indexOf("hud") !== -1) wanted = "ui";
    else if (lower.indexOf("other") !== -1) wanted = scene.hasLayer("Flash") ? "Flash" : (scene.hasLayer("ui") ? "ui" : "");
    else wanted = "";
    if (wanted && !scene.hasLayer(wanted)) return "";
    return wanted;
};
runtimeHost.colorParts = function(value) {
    if (typeof value === "number" && isFinite(value)) {
        var number = Math.max(0, Math.min(0xFFFFFF, Math.floor(value)));
        return [(number >> 16) & 255, (number >> 8) & 255, number & 255];
    }
    var text = String(value == null ? "FFFFFF" : value).replace(/^#/, "").trim();
    if (text.length === 3) text = text.replace(/(.)/g, "$1$1");
    var parsed = parseInt(text, 16);
    if (!isFinite(parsed)) parsed = 0xFFFFFF;
    return [(parsed >> 16) & 255, (parsed >> 8) & 255, parsed & 255];
};
runtimeHost.setObjectColor = function(object, value) {
    if (!object) return false;
    var rgb = runtimeHost.colorParts(value);
    if (typeof object.setColor === "function") {
        try { object.setColor(rgb[0] + ";" + rgb[1] + ";" + rgb[2]); return true; } catch (error) {}
    }
    try {
        var rendererObject = object.getRendererObject && object.getRendererObject();
        if (rendererObject) { rendererObject.tint = (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]; return true; }
    } catch (error) {}
    return false;
};
runtimeHost.createLuaObject = function(scene, tag, kind, image, x, y, script) {
    var data=runtimeHost.ensureCompatibilityData(scene); tag=String(tag||'');
    if(runtimeHost.isStageScript(script)) {
        var nativeStage=runtimeHost.findNativeStageObject(scene,tag);
        if(nativeStage) {
            var alias={tag:tag,kind:'stage',object:nativeStage,image:String(image||''),added:true,camera:nativeStage._stageCamera||'game',scrollX:1,scrollY:1,
                logicalX:Number(nativeStage._stageBaseX)||0,logicalY:Number(nativeStage._stageBaseY)||0,logicalScaleX:Number(nativeStage._stageScaleX)||1,logicalScaleY:Number(nativeStage._stageScaleY)||1,
                alpha:nativeStage._stageOpacity===undefined?1:Number(nativeStage._stageOpacity),visible:nativeStage._stageVisible!==false,blendMode:nativeStage._stageBlendMode||'normal',stageAlias:true,ownerScript:script,animations:Object.create(null)};
            try { alias.scrollX=nativeStage.getVariables().get('ParallaxX').getAsNumber(); alias.scrollY=nativeStage.getVariables().get('ParallaxY').getAsNumber(); } catch(error) {}
            data.luaObjects.set(tag,alias); runtimeHost.writeStageBridgeStatus(scene); return nativeStage;
        }
    }
    var previous=data.luaObjects.get(tag); if(previous&&previous.object&&typeof previous.object.deleteFromScene==='function'&&!previous.stageAlias){try{previous.object.deleteFromScene(scene);}catch(error){}}
    var objectName=kind==='text'?'PsychLuaText':'PsychLuaSprite', object=scene.createObject(objectName);
    if(!object){runtimeHost.warnOnce(scene,'missing-'+objectName,objectName+' is not registered in this scene.');return null;}
    var record={tag:tag,kind:kind,object:object,image:String(image==null?'':image),added:false,camera:'game',scrollX:1,scrollY:1,logicalX:Number(x)||0,logicalY:Number(y)||0,
        logicalScaleX:1,logicalScaleY:1,logicalTextSize:25,logicalWrapWidth:0,alpha:1,visible:true,graphic:false,baseLogicalWidth:1,baseLogicalHeight:1,ownerScript:script,animations:Object.create(null)};
    data.luaObjects.set(tag,record);
    if(kind!=='text') { var key=runtimeHost.normalizeImageKey(image), animation=runtimeHost.imageAnimations[key]||'__white'; try{if(object.setAnimationName)object.setAnimationName(animation);}catch(error){try{object.setAnimationName('__white');}catch(ignored){}} }
    runtimeHost.applyLuaRecordTransform(scene,record); return object;
};
runtimeHost.addLuaObject = function(scene, tag, front) {
    var data=runtimeHost.ensureCompatibilityData(scene), record=data.luaObjects.get(String(tag||'')); if(!record||!record.object)return false;
    record.added=true;
    if(record.stageAlias&&runtimeHost.isStageBootstrap(record)){runtimeHost.writeStageBridgeStatus(scene);return true;}
    if(record.object.setZOrder){if(front)record.object.setZOrder(data.nextFrontZ++);else record.object.setZOrder(data.nextBackZ++);}
    runtimeHost.applyLuaRecordTransform(scene,record); return true;
};
runtimeHost.removeLuaObject = function(scene, tag, destroy) {
    var data=runtimeHost.ensureCompatibilityData(scene); tag=String(tag||''); var record=data.luaObjects.get(tag); if(!record)return false;
    if(record.pixiBacked){runtimeHost.detachPixiLuaRecord(record);runtimeHost.recyclePixiLuaSprite(scene,record.pixiSprite);data.luaObjects.delete(tag);runtimeHost.recyclePixiLuaRecord(scene,record);runtimeHost.writePixiLuaStatus(scene);return true;}
    if(record.stageAlias){record.visible=false;record.added=false;record.object._stageVisible=false;try{record.object.hide(true);}catch(error){} data.luaObjects.delete(tag);runtimeHost.writeStageBridgeStatus(scene);return true;}
    if(record.object&&typeof record.object.deleteFromScene==='function'){try{record.object.deleteFromScene(scene);}catch(error){}} data.luaObjects.delete(tag);return true;
};
runtimeHost.makeGraphic = function(scene, tag, width, height, color) {
    var record=runtimeHost.luaRecord(scene,tag); if(!record){runtimeHost.createLuaObject(scene,tag,'sprite','',0,0,null);record=runtimeHost.luaRecord(scene,tag);} if(!record||!record.object)return false;
    if(record.stageAlias&&runtimeHost.isStageBootstrap(record))return true;
    try{if(record.object.setAnimationName)record.object.setAnimationName('__white');}catch(error){}
    record.graphic=true;record.baseLogicalWidth=Math.max(1,Number(width)||1);record.baseLogicalHeight=Math.max(1,Number(height)||1);record.logicalScaleX=1;record.logicalScaleY=1;record.image='';
    runtimeHost.setObjectColor(record.object,color);runtimeHost.applyLuaRecordTransform(scene,record);return true;
};
runtimeHost.setObjectCamera = function(scene, tag, camera) {
    var record=runtimeHost.luaRecord(scene,tag), object=runtimeHost.findObject(scene,tag); if(record){if(record.stageAlias&&runtimeHost.isStageBootstrap(record))return true;record.camera=String(camera||'game');runtimeHost.applyLuaRecordTransform(scene,record);}
    else if(object&&object.setLayer){try{object.setLayer(runtimeHost.resolveLayerName(scene,camera));}catch(error){}}
    runtimeHost.ensureOverlayCamera(scene,camera);return true;
};
runtimeHost.setObjectOrder = function(scene, tag, order) { var record=runtimeHost.luaRecord(scene,tag);if(record&&record.stageAlias&&runtimeHost.isStageBootstrap(record))return Number(order)||0;if(record&&record.pixiBacked){record.order=Number(order)||0;runtimeHost.attachPixiLuaRecord(scene,record,true);runtimeHost.applyPixiLuaRecordTransform(scene,record);return record.order;}var object=runtimeHost.findObject(scene,tag);if(object&&object.setZOrder)object.setZOrder(Number(order)||0);return Number(order)||0; };
runtimeHost.getObjectOrder = function(scene, tag) {
    var object = runtimeHost.findObject(scene, tag);
    return object && typeof object.getZOrder === "function" ? object.getZOrder() : 0;
};
runtimeHost.setBlendMode = function(scene, tag, mode) {
    var directTag=String(tag || "").split(".members[")[0];
    var directRecord=runtimeHost.luaRecord(scene,directTag);
    if(directRecord&&directRecord.stageAlias&&runtimeHost.isStageBootstrap(directRecord)) return true;
    if(directRecord){directRecord.blendMode=String(mode||'normal');if(directRecord.stageAlias)directRecord.object._stageBlendMode=directRecord.blendMode;}
    var object = runtimeHost.findObject(scene, directTag);
    if (!object) {
        var parts = runtimeHost.parsePath(tag);
        if (parts.length >= 3 && String(parts[1]).toLowerCase() === "members") {
            object = runtimeHost.groupObjects(scene, parts[0])[Math.max(0, Math.floor(Number(parts[2]) || 0))] || null;
        }
    }
    if (!object) return false;
    var lower = String(mode || "normal").toLowerCase();
    try {
        var rendererObject = object.getRendererObject && object.getRendererObject();
        var PIXIRef = globalThis.PIXI;
        if (rendererObject && PIXIRef && PIXIRef.BLEND_MODES) {
            var blend = PIXIRef.BLEND_MODES.NORMAL;
            if (lower === "add") blend = PIXIRef.BLEND_MODES.ADD;
            else if (lower === "screen") blend = PIXIRef.BLEND_MODES.SCREEN;
            else if (lower === "multiply") blend = PIXIRef.BLEND_MODES.MULTIPLY;
            rendererObject.blendMode = blend;
            return true;
        }
    } catch (error) {}
    return false;
};
runtimeHost.scaleObject = function(scene, tag, x, y) {
    var record=runtimeHost.luaRecord(scene,tag), object=runtimeHost.findObject(scene,tag);if(!object)return false;var yy=typeof y==='undefined'?x:y;
    if(record){if(record.stageAlias&&runtimeHost.isStageBootstrap(record))return true;record.logicalScaleX=Number(x)||0;record.logicalScaleY=Number(yy)||0;runtimeHost.applyLuaRecordTransform(scene,record);return true;}
    if(object.setScaleX)object.setScaleX(Number(x)||0);if(object.setScaleY)object.setScaleY(Number(yy)||0);else if(object.setScale)object.setScale(Number(x)||0);return true;
};
runtimeHost.screenCenter = function(scene, tag, axis) {
    var object = runtimeHost.findObject(scene, tag);
    if (!object) return false;
    var width = typeof object.getWidth === "function" ? object.getWidth() : 0;
    var height = typeof object.getHeight === "function" ? object.getHeight() : 0;
    var centerX = (scene.getViewportWidth ? scene.getViewportWidth() : 1280) / 2 - width / 2;
    var centerY = (scene.getViewportHeight ? scene.getViewportHeight() : 720) / 2 - height / 2;
    var lower = String(axis || "xy").toLowerCase();
    if (lower !== "y" && typeof object.setX === "function") object.setX(centerX);
    if (lower !== "x" && typeof object.setY === "function") object.setY(centerY);
    return true;
};
runtimeHost.getMidpoint = function(scene, tag, axis) {
    var object = runtimeHost.findObject(scene, tag);
    if (!object) return 0;
    if (axis === "x") return runtimeHost.readObjectValue(scene, object, ["x"]) + runtimeHost.readObjectValue(scene, object, ["width"]) / 2;
    return runtimeHost.readObjectValue(scene, object, ["y"]) + runtimeHost.readObjectValue(scene, object, ["height"]) / 2;
};
runtimeHost.setText = function(scene, tag, text) {
    var object = runtimeHost.findObject(scene, tag);
    if (!object) return false;
    if (typeof object.setString === "function") object.setString(String(text == null ? "" : text));
    else if (typeof object.setText === "function") object.setText(String(text == null ? "" : text));
    return true;
};
runtimeHost.setTextSize = function(scene, tag, size) { var record=runtimeHost.luaRecord(scene,tag),object=runtimeHost.findObject(scene,tag);if(!object)return false;if(record){record.logicalTextSize=Math.max(1,Number(size)||1);runtimeHost.applyLuaRecordTransform(scene,record);}else if(object.setCharacterSize)object.setCharacterSize(Math.max(1,Number(size)||1));return true; };
runtimeHost.getTextWidth = function(scene, tag) {
    var object=runtimeHost.findObject(scene,tag),record=runtimeHost.luaRecord(scene,tag);if(!object)return 0;var scale=runtimeHost.objectCoordinateScaleX(scene,object), width=object.getWidth?object.getWidth()/scale:0;
    if(width>1)return width;var text='';try{text=object.getString?object.getString():'';}catch(error){}var size=record&&record.logicalTextSize?record.logicalTextSize:25;
    // Text metrics may still be zero during the same onCreate frame. Psych already has synchronous FlxText metrics, so use a conservative synchronous fallback.
    return Math.max(1,String(text||'').length*size*0.62);
};
runtimeHost.ease = function(name, t) {
    t = Math.max(0, Math.min(1, t));
    var lower = String(name || "linear").toLowerCase();
    if (lower.indexOf("quadout") !== -1) return 1 - (1 - t) * (1 - t);
    if (lower.indexOf("quadin") !== -1) return t * t;
    if (lower.indexOf("sineinout") !== -1) return -(Math.cos(Math.PI * t) - 1) / 2;
    if (lower.indexOf("smooth") !== -1) return t * t * (3 - 2 * t);
    if (lower.indexOf("elasticout") !== -1) { if (t === 0 || t === 1) return t; var c4 = (2 * Math.PI) / 3; return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1; }
    if (lower.indexOf("backout") !== -1) { var c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); }
    return t;
};
runtimeHost.resolveIntroTweenTarget = function(scene, script, tag, path, target) {
    var scriptPath = String(script && (script.path || script.id) || "").replace(/\\/g, "/").toLowerCase();
    if (scriptPath.indexOf("scripts/introlua") === -1 || String(tag || "").indexOf("NotesAlt") !== 0) return target;
    var parts = runtimeHost.parsePath(path);
    if (parts.length < 4 || String(parts[1]).toLowerCase() !== "members" || String(parts[3]).toLowerCase() !== "x") return target;
    var group = String(parts[0]).toLowerCase();
    var member = Math.max(0, Math.floor(Number(parts[2]) || 0));
    var globalIndex = group === "playerstrums" ? member + 4 : member;
    if (group !== "playerstrums" && group !== "strumlinenotes" && group !== "opponentstrums") return target;
    var data = runtimeHost.ensureCompatibilityData(scene);
    var fallback = data.defaultStrums && data.defaultStrums[globalIndex];
    if (!fallback || !isFinite(Number(fallback.x))) return target;
    data.introFinalTweenRemapCount = (Number(data.introFinalTweenRemapCount) || 0) + 1;
    return Number(fallback.x);
};
runtimeHost.startPropertyTween = function(scene, script, tag, path, target, duration, ease) {
    var data = runtimeHost.ensureCompatibilityData(scene);
    var key = script.id + "::" + String(tag || path);
    var smoothData = runtimeHost.ensureCompatibilityData(scene);
    if (smoothData.smoothCamAdapter && smoothData.smoothCamAdapter.active && String(path || "").toLowerCase() === "camgame.zoom") {
        smoothData.smoothCamAdapter.zoomTweenActive = true;
        smoothData.smoothCamAdapter.zoomTweenTag = String(tag || "");
        smoothData.smoothCamAdapter.zoomTweenTarget = Number(target);
        runtimeHost.writeSmoothCamStatus(scene);
    }
    var from = Number(runtimeHost.getProperty(scene, path));
    if (!isFinite(from)) from = 0;
    target = runtimeHost.resolveIntroTweenTarget(scene, script, tag, path, target);
    var to = Number(target);
    if (!isFinite(to)) to = 0;
    duration = Math.max(0, Number(duration) || 0);
    if (duration <= 0.0001) {
        runtimeHost.setProperty(scene, path, to);
        data.tweens.delete(key);
        return true;
    }
    data.tweens.set(key, { key: key, script: script, tag: String(tag || ""), path: String(path), from: from, to: to, duration: duration, elapsed: 0, ease: String(ease || "linear") });
    return true;
};
runtimeHost.callAuxCallback = function(scene, script, callback, args, snapshot) {
    if (!script || script.closed || script.disabled) return;
    try {
        var fn = script.callbackFunctions && script.callbackFunctions[callback];
        if (typeof fn !== "function") return;
        runtimeHost.syncLuaGlobals(scene, script, callback, args || [], snapshot);
        runtimeHost.ensureCompatibilityData(scene).performance.callbackDispatches += 1;
        script.activeCallback = callback;
        script.state.global.setTimeout(Date.now() + 250);
        fn.apply(null, args || []);
        script.state.global.setTimeout(undefined);
        script.activeCallback = "";
        runtimeHost.queueLuaGc(scene, script);
        runtimeHost.writeStageBridgeStatus(scene);
    } catch (error) {
        try { script.state.global.setTimeout(undefined); } catch (ignored) {}
        script.activeCallback = "";
        script.error = error && error.stack ? error.stack : String(error);
        script.disabled = true;
        runtimeHost.unindexScriptCallbacks(scene, script);
        runtimeHost.setScriptStatus(scene, script.id, script.path, true, true, false, script.error);
        runtimeHost.setLastError(scene, script.id, callback, error);
        console.error("Psych Lua callback failed", script.id, callback, error);
    }
};
runtimeHost.tickCountdown = function(scene) {
    var data = runtimeHost.ensureCompatibilityData(scene);
    if (!data.countdown) runtimeHost.resetCountdown(scene);
    if (data.countdown.completed) { runtimeHost.writeCountdownStatus(scene); return; }
    if (!data.scripts || data.scripts.size === 0) {
        data.countdown.state = "WaitingForScripts";
        runtimeHost.writeCountdownStatus(scene);
        return;
    }
    var createPostSent = false;
    var musicStarted = false;
    try { createPostSent = scene.getVariables().get("PsychLuaLifecycle").getChild("CreatePostSent").getAsBoolean(); } catch (error) {}
    try { musicStarted = scene.getVariables().get("FNFLoad").getChild("MusicStarted").getAsBoolean(); } catch (error) {}
    if (!createPostSent) {
        data.countdown.state = "WaitingForCreatePost";
        runtimeHost.writeCountdownStatus(scene);
        return;
    }
    if (!musicStarted) {
        data.countdown.state = "WaitingForMusic";
        runtimeHost.writeCountdownStatus(scene);
        return;
    }
    var timer = Number(runtimeHost.globalValue(scene, ["Timer1"], -999));
    if (!isFinite(timer)) timer = -999;
    data.countdown.timer = timer;
    // The native loader removes BlackScreen at Timer1 >= -2. Wait one frame if
    // event ordering has not removed it yet, so the arrow intro is always visible.
    if (data.countdown.nextTick === 0 && timer >= -2 && runtimeHost.blackScreenCount(scene) > 0) {
        data.countdown.state = "WaitingForBlackScreen";
        runtimeHost.writeCountdownStatus(scene);
        return;
    }
    data.countdown.state = "Running";
    var thresholds = [-2, -1.5, -1, -0.5, 0];
    while (data.countdown.nextTick < thresholds.length && timer + 0.00001 >= thresholds[data.countdown.nextTick]) {
        var counter = data.countdown.nextTick;
        data.countdown.nextTick += 1;
        data.countdown.lastCounter = counter;
        data.countdown.dispatchedCount += 1;
        runtimeHost.dispatch(scene, "", "onCountdownTick", [counter]);
        if (counter >= 3) runtimeHost.sanitizeStrums(scene, counter);
    }
    if (data.countdown.nextTick >= thresholds.length) {
        data.countdown.completed = true;
        data.countdown.state = "Complete";
    }
    runtimeHost.writeCountdownStatus(scene);
};
runtimeHost.tickCompatibility = function(scene, elapsed) {
    var data = runtimeHost.ensureCompatibilityData(scene);
    var dt = Math.max(0, Number(elapsed) || 0);
    runtimeHost.beginPerformanceFrame(scene, dt);
    runtimeHost.tickCountdown(scene);

    var completedTweens = data.completedTweens;
    var tweenCount = 0;
    data.tweens.forEach(function(tween, key) {
        if (!tween.script || tween.script.closed || tween.script.disabled) { data.tweens.delete(key); return; }
        tween.elapsed += dt;
        var ratio = tween.duration <= 0 ? 1 : Math.min(1, tween.elapsed / tween.duration);
        var eased = runtimeHost.ease(tween.ease, ratio);
        runtimeHost.setProperty(scene, tween.path, tween.from + (tween.to - tween.from) * eased);
        if (ratio >= 1) {
            data.tweens.delete(key);
            if (data.smoothCamAdapter && String(tween.path || "").toLowerCase() === "camgame.zoom") {
                data.smoothCamAdapter.zoomTweenActive = false;
                runtimeHost.writeSmoothCamStatus(scene);
            }
            completedTweens[tweenCount++] = tween;
        }
    });
    for (var i = 0; i < tweenCount; i += 1) {
        var completedTween = completedTweens[i];
        data.tweenCallbackArgs[0] = completedTween.tag;
        runtimeHost.callAuxCallback(scene, completedTween.script, "onTweenCompleted", data.tweenCallbackArgs);
        completedTweens[i] = null;
    }

    var completedTimers = data.completedTimers;
    var timerCount = 0;
    data.timers.forEach(function(timer, key) {
        if (!timer.script || timer.script.closed || timer.script.disabled) { data.timers.delete(key); return; }
        timer.elapsed += dt;
        var safety = 0;
        while (timer.elapsed >= timer.duration && safety++ < 64) {
            timer.elapsed -= timer.duration;
            timer.completed += 1;
            var slot = completedTimers[timerCount];
            if (!slot) slot = completedTimers[timerCount] = { timer: null, loopsLeft: 0 };
            slot.timer = timer;
            slot.loopsLeft = timer.loops === 0 ? 0 : Math.max(0, timer.loops - timer.completed);
            timerCount += 1;
            if (timer.loops > 0 && timer.completed >= timer.loops) { data.timers.delete(key); break; }
            if (timer.duration <= 0) { data.timers.delete(key); break; }
        }
    });
    for (var j = 0; j < timerCount; j += 1) {
        var completed = completedTimers[j];
        data.timerCallbackArgs[0] = completed.timer.tag;
        data.timerCallbackArgs[1] = completed.timer.completed;
        data.timerCallbackArgs[2] = completed.loopsLeft;
        runtimeHost.callAuxCallback(scene, completed.timer.script, "onTimerCompleted", data.timerCallbackArgs);
        completed.timer = null;
    }
    runtimeHost.applyForcedCamera(scene);
    runtimeHost.writeStageBridgeStatus(scene);
    runtimeHost.writeInputStatus(scene);
    runtimeHost.writeSmoothCamStatus(scene);
    runtimeHost.writePixiLuaStatus(scene);
};
runtimeHost.startTimer = function(scene, script, tag, duration, loops) {
    var data = runtimeHost.ensureCompatibilityData(scene);
    duration = Math.max(0.001, Number(duration) || 0.001);
    loops = Math.max(0, Math.floor(Number(loops) || 0));
    data.timers.set(script.id + "::" + String(tag), { script: script, tag: String(tag), duration: duration, loops: loops, elapsed: 0, completed: 0 });
    return true;
};
runtimeHost.readVariableValue = function(variable, fallback) {
    if (!variable) return fallback;
    try {
        var type = typeof variable.getType === "function" ? variable.getType() : "";
        if (type === "boolean") return variable.getAsBoolean();
        if (type === "number") return variable.getAsNumber();
        var text = variable.getAsString();
        if (type === "string") return text;
        if (text !== "") return text;
        var number = variable.getAsNumber();
        return isFinite(number) ? number : fallback;
    } catch (error) { return fallback; }
};
runtimeHost.sceneValue = function(scene, names, fallback) {
    names = Array.isArray(names) ? names : [names];
    var container = scene && scene.getVariables ? scene.getVariables() : null;
    for (var i = 0; container && i < names.length; i += 1) {
        try {
            // Scene-only lookup is retained for actual scene variables.
            var variable = container.get(String(names[i]));
            var type = typeof variable.getType === "function" ? variable.getType() : "";
            if (type === "boolean") return variable.getAsBoolean();
            if (type === "string") {
                var text = variable.getAsString();
                if (text !== "") return text;
                continue;
            }
            // Do not accept an implicit zero from an undeclared scene variable.
            if (type === "number") {
                var value = variable.getAsNumber();
                if (value !== 0) return value;
            }
        } catch (error) {}
    }
    return fallback;
};
runtimeHost.globalValue = function(scene, names, fallback) {
    names = Array.isArray(names) ? names : [names];
    var container = scene && scene.getGame ? scene.getGame().getVariables() : null;
    for (var i = 0; container && i < names.length; i += 1) {
        try {
            var variable = container.get(String(names[i]));
            var type = typeof variable.getType === "function" ? variable.getType() : "";
            if (type === "boolean") return variable.getAsBoolean();
            if (type === "number") return variable.getAsNumber();
            if (type === "string") return variable.getAsString();
            var text = variable.getAsString();
            if (text !== "") return text;
        } catch (error) {}
    }
    return fallback;
};
runtimeHost.booleanValue = function(value, fallback) {
    if (typeof value === "boolean") return value;
    if (typeof value === "number" && isFinite(value)) return value !== 0;
    if (typeof value === "string") {
        var text = value.trim().toLowerCase();
        if (text === "true" || text === "1" || text === "yes" || text === "on") return true;
        if (text === "false" || text === "0" || text === "no" || text === "off" || text === "") return false;
    }
    return Boolean(fallback);
};
runtimeHost.liveSetting = function(scene, name, fallback) {
    var live = globalThis.__forLiveSettings;
    if (live && Object.prototype.hasOwnProperty.call(live, String(name))) {
        return runtimeHost.booleanValue(live[String(name)], fallback);
    }
    return runtimeHost.booleanValue(runtimeHost.globalValue(scene, [name], fallback), fallback);
};
runtimeHost.applyLiveSettingsToGlobals = function(scene) {
    var live = globalThis.__forLiveSettings;
    if (!scene || !live) return false;
    var container = scene.getGame().getVariables();
    var names = ["Upscroll", "MiddleScroll"];
    var changed = false;
    for (var i = 0; i < names.length; i += 1) {
        var name = names[i];
        if (!Object.prototype.hasOwnProperty.call(live, name)) continue;
        var value = runtimeHost.booleanValue(live[name], name === "Upscroll");
        try {
            var variable = container.get(name);
            if (variable.getAsBoolean() !== value) changed = true;
            variable.setBoolean(value);
        } catch (error) {}
    }
    return changed;
};
runtimeHost.applyCanonicalUpscrollLayout = function(scene, upscroll) {
    var data = runtimeHost.ensureCompatibilityData(scene);
    if (data.preferences && data.preferences.locked) return 0;
    var objects = runtimeHost.groupObjects(scene, "strumLineNotes");
    if (objects.length !== 8) return 0;
    // These are the native 1920x1080 receptor coordinates used by GameBasicV3.
    var targetY = upscroll ? 36 : 817;
    var changed = 0;
    for (var i = 0; i < objects.length; i += 1) {
        var object = objects[i];
        if (!object || typeof object.setY !== "function") continue;
        var current = Number(object.getY ? object.getY() : NaN);
        if (!isFinite(current) || Math.abs(current - targetY) > 0.25) {
            object.setY(targetY);
            changed += 1;
        }
    }
    data.canonicalUpscroll = Boolean(upscroll);
    data.canonicalY = targetY;
    data.canonicalApplyCount = (Number(data.canonicalApplyCount) || 0) + changed;
    return changed;
};
runtimeHost.blackScreenCount = function(scene) {
    try {
        if (typeof scene.isObjectRegistered === "function" && !scene.isObjectRegistered("BlackScreen")) return 0;
        var objects = scene.getObjects("BlackScreen");
        return objects ? objects.length : 0;
    } catch (error) { return 0; }
};
runtimeHost.writeInputStatus = function(scene) {
    if (!runtimeHost.shouldWriteDiagnostic(scene, "inputs")) return;
    if (!scene) return;
    try {
        var root = scene.getGame().getVariables().get("PsychLuaRuntime").getChild("Inputs");
        if (!root) return;
        root.getChild("SongName").setString(String(runtimeHost.globalValue(scene, ["SongName"], "")));
        root.getChild("MiddleScroll").setBoolean(Boolean(runtimeHost.globalValue(scene, ["MiddleScroll"], false)));
        root.getChild("Upscroll").setBoolean(Boolean(runtimeHost.globalValue(scene, ["Upscroll"], true)));
        root.getChild("Timer1").setNumber(Number(runtimeHost.globalValue(scene, ["Timer1"], 0)) || 0);
        root.getChild("BlackScreenCount").setNumber(runtimeHost.blackScreenCount(scene));
        root.getChild("Source").setString("global variables");
    } catch (error) {}
};
runtimeHost.preferenceClock = function() {
    try { if (globalThis.performance && typeof globalThis.performance.now === "function") return globalThis.performance.now(); } catch (error) {}
    return Date.now();
};
runtimeHost.preferenceSignature = function(scene) {
    runtimeHost.applyLiveSettingsToGlobals(scene);
    var middle = runtimeHost.liveSetting(scene, "MiddleScroll", false);
    var upscroll = runtimeHost.liveSetting(scene, "Upscroll", true);
    runtimeHost.applyCanonicalUpscrollLayout(scene, upscroll);
    var objects = runtimeHost.groupObjects(scene, "strumLineNotes");
    var fields = [middle ? "M1" : "M0", upscroll ? "U1" : "U0", "N" + objects.length];
    var rounded = function(value) {
        value = Number(value);
        return isFinite(value) ? Math.round(value * 100) / 100 : "nan";
    };
    for (var i = 0; i < objects.length; i += 1) {
        var object = objects[i];
        fields.push([
            rounded(object && object.getX ? object.getX() : NaN),
            rounded(object && object.getY ? object.getY() : NaN),
            rounded(object && object.getScaleX ? object.getScaleX() : NaN),
            rounded(object && object.getScaleY ? object.getScaleY() : NaN),
            rounded(object && object.getOpacity ? object.getOpacity() : NaN)
        ].join(","));
    }
    return { signature: fields.join("|"), middle: middle, upscroll: upscroll, objectCount: objects.length };
};
runtimeHost.writePreferenceStatus = function(scene) {
    if (!scene) return;
    var data = runtimeHost.ensureCompatibilityData(scene);
    var pref = data.preferences || {};
    try {
        var root = scene.getGame().getVariables().get("PsychLuaRuntime").getChild("Preferences");
        root.getChild("State").setString(String(pref.state || "Waiting"));
        root.getChild("Ready").setBoolean(Boolean(pref.ready));
        root.getChild("Locked").setBoolean(Boolean(pref.locked));
        root.getChild("MiddleScroll").setBoolean(Boolean(pref.middle));
        root.getChild("Upscroll").setBoolean(Boolean(pref.upscroll));
        root.getChild("StableFrames").setNumber(Number(pref.stableFrames) || 0);
        root.getChild("ElapsedMs").setNumber(Number(pref.elapsedMs) || 0);
        root.getChild("ObjectCount").setNumber(Number(pref.objectCount) || 0);
        root.getChild("ChangeCount").setNumber(Number(pref.changeCount) || 0);
        root.getChild("Signature").setString(String(pref.signature || ""));
        root.getChild("SnapshotReady").setBoolean(Boolean(data.defaultStrums && data.defaultStrums.length === 8));
        root.getChild("Source").setString(String(data.songPreferences && data.songPreferences.source || (globalThis.__forLiveSettings ? "live menu setting" : "global variable/storage")));
        root.getChild("FrozenMiddleScroll").setBoolean(Boolean(data.songPreferences && data.songPreferences.middle));
        root.getChild("FrozenUpscroll").setBoolean(Boolean(data.songPreferences && data.songPreferences.upscroll));
        root.getChild("CanonicalY").setNumber(Number(data.canonicalY) || 0);
        root.getChild("CanonicalApplyCount").setNumber(Number(data.canonicalApplyCount) || 0);
        root.getChild("FinalTweenRemapCount").setNumber(Number(data.introFinalTweenRemapCount) || 0);
    } catch (error) {}
};
runtimeHost.updatePreferenceReadiness = function(scene) {
    var data = runtimeHost.ensureCompatibilityData(scene);
    var now = runtimeHost.preferenceClock();
    if (!data.preferences) {
        data.preferences = {
            state: "WaitingForStorageAndLayout", ready: false, locked: false,
            startedAt: now, elapsedMs: 0, stableFrames: 0, signature: "",
            middle: false, upscroll: true, objectCount: 0, changeCount: 0
        };
    }
    var pref = data.preferences;
    pref.elapsedMs = Math.max(0, now - pref.startedAt);
    var sample = runtimeHost.preferenceSignature(scene);
    pref.middle = sample.middle;
    pref.upscroll = sample.upscroll;
    pref.objectCount = sample.objectCount;

    // Once scripts start, their tweens intentionally change the receptor signature.
    // Lock the native snapshot so those movements are never misread as a setting change.
    if (pref.locked) {
        pref.ready = true;
        pref.state = "LockedForSong";
        runtimeHost.writePreferenceStatus(scene);
        return true;
    }

    if (sample.signature === pref.signature) {
        pref.stableFrames += 1;
    } else {
        if (pref.signature !== "") pref.changeCount += 1;
        pref.signature = sample.signature;
        pref.stableFrames = 0;
        pref.ready = false;
        pref.state = "WaitingForStableLayout";
        data.defaultStrums = null;
    }

    // 500 ms is intentionally longer than the native 0.1 s storage wait.
    // Stable frames additionally guarantee that Trigger Once X/Y/opacity actions finished.
    var settled = pref.objectCount === 8 && pref.elapsedMs >= 500 && pref.stableFrames >= 8;
    if (settled) {
        pref.ready = Boolean(runtimeHost.captureDefaultStrums(scene, true));
        pref.state = pref.ready ? "Ready" : "WaitingForValidSnapshot";
    } else if (pref.objectCount !== 8) {
        pref.state = "WaitingForEightStrums";
    } else if (pref.elapsedMs < 500) {
        pref.state = "WaitingForStorage";
    }
    runtimeHost.writePreferenceStatus(scene);
    return Boolean(pref.ready);
};
runtimeHost.preferencesAreReady = function(scene) {
    var data = runtimeHost.ensureCompatibilityData(scene);
    return Boolean(data.preferences && data.preferences.ready && data.defaultStrums && data.defaultStrums.length === 8);
};
runtimeHost.lockPreferences = function(scene) {
    var data = runtimeHost.ensureCompatibilityData(scene);
    if (!data.preferences) runtimeHost.updatePreferenceReadiness(scene);
    if (data.preferences) {
        data.preferences.locked = true;
        data.preferences.ready = true;
        data.preferences.state = "LockedForSong";
        data.songPreferences = {
            middle: Boolean(data.preferences.middle),
            upscroll: Boolean(data.preferences.upscroll),
            revision: Number(globalThis.__forLiveSettings && globalThis.__forLiveSettings.Revision) || 0,
            source: globalThis.__forLiveSettings ? "live menu setting" : "global variable/storage"
        };
    }
    runtimeHost.writePreferenceStatus(scene);
    return true;
};
runtimeHost.isSmoothCamScript = function(script) {
    var text = String(script && (script.path || script.id) || "").replace(/\\/g, "/").replace(/\.lua$/i, "").toLowerCase();
    return text === "scripts/smoothcam" || /(^|\/)scripts\/smoothcam$/.test(text);
};
runtimeHost.parseSmoothCamSettings = function(source) {
    source = String(source || "");
    var readBoolean = function(name, fallback) {
        var match = source.match(new RegExp("\\b" + name + "\\s*=\\s*(true|false)", "i"));
        return match ? String(match[1]).toLowerCase() === "true" : fallback;
    };
    var readNumber = function(name, fallback) {
        var match = source.match(new RegExp("\\b" + name + "\\s*=\\s*([+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+))", "i"));
        var value = match ? Number(match[1]) : NaN;
        return isFinite(value) ? value : fallback;
    };
    return {
        shiftCameraOnNote: readBoolean("shiftCameraOnNote", true),
        shiftCameraPixels: Math.max(0, readNumber("shiftCameraPixels", 50)),
        smoothCamera: readBoolean("smoothCamera", true),
        smoothZoom: readBoolean("smoothZoom", true),
        smoothIntensity: Math.max(0.001, readNumber("smoothIntensity", 0.45)),
        inactiveRatio: 0.45
    };
};
runtimeHost.smoothCamVariables = function(scene) {
    try { return scene.getVariables().get("PsychEvents").getChild("SmoothCamera"); }
    catch (error) { return null; }
};
runtimeHost.applySmoothCamAdapterSettings = function(scene) {
    var data = runtimeHost.ensureCompatibilityData(scene);
    var adapter = data.smoothCamAdapter;
    var root = runtimeHost.smoothCamVariables(scene);
    if (!adapter || !adapter.active || !root) return false;
    var settings = adapter.settings || {};
    try {
        root.getChild("Enabled").setBoolean(settings.smoothCamera !== false);
        root.getChild("ShiftOnNote").setBoolean(settings.shiftCameraOnNote !== false);
        root.getChild("ShiftPixels").setNumber(Math.max(0, Number(settings.shiftCameraPixels) || 0));
        root.getChild("InactiveRatio").setNumber(Math.max(0, Number(settings.inactiveRatio) || 0.45));
        root.getChild("SmoothZoom").setBoolean(settings.smoothZoom !== false);
        root.getChild("Intensity").setNumber(Math.max(0.001, Number(settings.smoothIntensity) || 0.45));
        var cameraSpeed = Number(scene.getGame().getVariables().get("Stage_CameraSpeed").getAsNumber());
        if (!isFinite(cameraSpeed) || cameraSpeed <= 0) cameraSpeed = 1;
        root.getChild("CameraSpeed").setNumber(cameraSpeed);
        adapter.cameraSpeed = cameraSpeed;
        return true;
    } catch (error) {
        adapter.error = error && error.message ? error.message : String(error);
        return false;
    }
};
runtimeHost.writeSmoothCamStatus = function(scene) {
    if (!runtimeHost.shouldWriteDiagnostic(scene, "smoothCam")) return;
    if (!scene) return;
    var data = runtimeHost.ensureCompatibilityData(scene);
    var adapter = data.smoothCamAdapter || {};
    var root = runtimeHost.smoothCamVariables(scene);
    try {
        var status = scene.getGame().getVariables().get("PsychLuaRuntime").getChild("SmoothCam");
        status.getChild("State").setString(String(adapter.state || "WaitingForScript"));
        status.getChild("Active").setBoolean(Boolean(adapter.active));
        status.getChild("Backend").setString(String(adapter.backend || ""));
        status.getChild("ScriptId").setString(String(adapter.scriptId || ""));
        status.getChild("ScriptPath").setString(String(adapter.scriptPath || ""));
        status.getChild("AdapterVersion").setString("1.6.1");
        status.getChild("SourceSettings").setBoolean(Boolean(adapter.sourceSettings));
        status.getChild("Error").setString(String(adapter.error || ""));
        var settings = adapter.settings || {};
        status.getChild("SmoothCamera").setBoolean(settings.smoothCamera !== false);
        status.getChild("ShiftOnNote").setBoolean(settings.shiftCameraOnNote !== false);
        status.getChild("ShiftPixels").setNumber(Number(settings.shiftCameraPixels) || 0);
        status.getChild("SmoothZoom").setBoolean(settings.smoothZoom !== false);
        status.getChild("Intensity").setNumber(Number(settings.smoothIntensity) || 0);
        status.getChild("CameraSpeed").setNumber(Number(adapter.cameraSpeed) || 1);
        status.getChild("ZoomTweenActive").setBoolean(Boolean(adapter.zoomTweenActive));
        status.getChild("UpdateCount").setNumber(Number(adapter.updateCount) || 0);
        status.getChild("CallbackCount").setNumber(Number(adapter.callbackCount) || 0);
        status.getChild("LastCallback").setString(String(adapter.lastCallback || ""));
        status.getChild("NativeBackendDisabled").setBoolean(true);
        status.getChild("LuaCallbacksEnabled").setBoolean(true);
        if (root) {
            status.getChild("BaseZoom").setNumber(Number(root.getChild("BaseZoom").getAsNumber()) || 0);
            status.getChild("TargetX").setNumber(Number(root.getChild("TargetX").getAsNumber()) || 0);
            status.getChild("TargetY").setNumber(Number(root.getChild("TargetY").getAsNumber()) || 0);
            status.getChild("FollowX").setNumber(Number(root.getChild("FollowX").getAsNumber()) || 0);
            status.getChild("FollowY").setNumber(Number(root.getChild("FollowY").getAsNumber()) || 0);
            status.getChild("BFShiftX").setNumber(Number(root.getChild("BF").getChild("ShiftX").getAsNumber()) || 0);
            status.getChild("BFShiftY").setNumber(Number(root.getChild("BF").getChild("ShiftY").getAsNumber()) || 0);
            status.getChild("DadShiftX").setNumber(Number(root.getChild("Dad").getChild("ShiftX").getAsNumber()) || 0);
            status.getChild("DadShiftY").setNumber(Number(root.getChild("Dad").getChild("ShiftY").getAsNumber()) || 0);
        }
    } catch (error) {}
};
runtimeHost.activateSmoothCamAdapter = function(scene, script, source) {
    var data = runtimeHost.ensureCompatibilityData(scene);
    var settings = runtimeHost.parseSmoothCamSettings(source || script && script.source || "");
    data.smoothCamAdapter = {
        active: true,
        state: "NativeBackendActive",
        backend: "Native Psych Events / Native Smooth Camera",
        scriptId: String(script && script.id || "scripts/smoothcam"),
        scriptPath: String(script && script.path || "scripts/smoothcam.lua"),
        sourceSettings: true,
        settings: settings,
        cameraSpeed: 1,
        zoomTweenActive: false,
        updateCount: 0,
        error: ""
    };
    if (script) script.smoothCamAdapter = true;
    runtimeHost.applySmoothCamAdapterSettings(scene);
    runtimeHost.writeSmoothCamStatus(scene);
    return true;
};
runtimeHost.tickSmoothCamAdapter = function(scene, script, elapsed) {
    var data = runtimeHost.ensureCompatibilityData(scene);
    var adapter = data.smoothCamAdapter;
    if (!adapter || !adapter.active) return false;
    adapter.updateCount = (Number(adapter.updateCount) || 0) + 1;
    adapter.elapsed = (Number(adapter.elapsed) || 0) + Math.max(0, Number(elapsed) || 0);
    runtimeHost.applySmoothCamAdapterSettings(scene);
    runtimeHost.writeSmoothCamStatus(scene);
    return true;
};
runtimeHost.deactivateSmoothCamAdapter = function(scene, script) {
    var data = runtimeHost.ensureCompatibilityData(scene);
    var adapter = data.smoothCamAdapter;
    if (!adapter) return;
    if (script && adapter.scriptId && String(adapter.scriptId) !== String(script.id)) return;
    adapter.active = false;
    adapter.state = "Closed";
    runtimeHost.writeSmoothCamStatus(scene);
};
runtimeHost.installSmoothCamAdapter = function(scene, script, source) {
    if (!runtimeHost.isSmoothCamScript(script)) return false;
    var data = runtimeHost.ensureCompatibilityData(scene);
    var settings = runtimeHost.parseSmoothCamSettings(source || script && script.source || "");
    data.smoothCamAdapter = {
        active: true,
        state: "LuaCallbacksActive",
        backend: "Original scripts/smoothcam.lua only",
        scriptId: String(script && script.id || "scripts/smoothcam"),
        scriptPath: String(script && script.path || "scripts/smoothcam.lua"),
        sourceSettings: true,
        settings: settings,
        cameraSpeed: Number(scene.getGame().getVariables().get("Stage_CameraSpeed").getAsNumber()) || 1,
        zoomTweenActive: false,
        updateCount: 0,
        callbackCount: 0,
        error: ""
    };
    if (script) {
        script.smoothCamAdapter = false;
        script.smoothCamLuaOnly = true;
    }
    runtimeHost.writeSmoothCamStatus(scene);
    return true;
};
runtimeHost.snapshotField = function(performanceState, name, value) {
    var values = performanceState.globalSnapshot;
    if (!Object.prototype.hasOwnProperty.call(values, name)) performanceState.globalSnapshotNames.push(name);
    values[name] = value;
};
runtimeHost.buildLuaGlobalSnapshot = function(scene, callback, args) {
    var compatibilityData = runtimeHost.ensureCompatibilityData(scene);
    var performanceState = compatibilityData.performance;
    var values = performanceState.globalSnapshot;
    var set = runtimeHost.snapshotField;
    var metrics = runtimeHost.viewportMetrics(scene);
    set(performanceState, "version", "0.7.3");
    set(performanceState, "screenWidth", runtimeHost.virtualScreenWidth);
    set(performanceState, "screenHeight", runtimeHost.virtualScreenHeight);
    set(performanceState, "gdevelopScreenWidth", metrics.width);
    set(performanceState, "gdevelopScreenHeight", metrics.height);
    set(performanceState, "gdevelopScaleX", metrics.scaleX);
    set(performanceState, "gdevelopScaleY", metrics.scaleY);
    set(performanceState, "curStage", scene.getGame().getVariables().get("CurrentLoadedStage").getAsString());
    set(performanceState, "defaultCamZoom", scene.getGame().getVariables().get("Stage_Zoom").getAsNumber() || 1);
    set(performanceState, "cameraSpeed", scene.getGame().getVariables().get("Stage_CameraSpeed").getAsNumber() || 1);

    var songPreferences = compatibilityData.songPreferences || {
        middle: runtimeHost.liveSetting(scene, "MiddleScroll", false),
        upscroll: runtimeHost.liveSetting(scene, "Upscroll", true),
        source: "unlocked fallback"
    };
    set(performanceState, "songName", String(runtimeHost.globalValue(scene, ["SongName"], "")));
    set(performanceState, "dadName", runtimeHost.sceneValue(scene, ["DadName", "OpponentName"], ""));
    set(performanceState, "boyfriendName", runtimeHost.sceneValue(scene, ["BoyfriendName", "BFName"], "BF"));
    set(performanceState, "gfName", runtimeHost.sceneValue(scene, ["GfVersion", "GFName"], "gf"));
    set(performanceState, "downscroll", !Boolean(songPreferences.upscroll));
    set(performanceState, "middlescroll", Boolean(songPreferences.middle));
    set(performanceState, "shadersEnabled", false);
    set(performanceState, "isStoryMode", Boolean(runtimeHost.sceneValue(scene, ["IsStoryMode", "isStoryMode"], false)));
    set(performanceState, "inGameOver", Boolean(runtimeHost.getProperty(scene, "inGameOver")));
    set(performanceState, "mustHitSection", (Number(runtimeHost.sceneValue(scene, ["CameraSection"], 0)) || 0) === 1);
    set(performanceState, "ratingName", runtimeHost.sceneValue(scene, ["RatingName", "ratingName"], ""));
    set(performanceState, "stepCrochet", Number(runtimeHost.sceneValue(scene, ["StepCrochet", "stepCrochet"], 125)) || 125);
    set(performanceState, "crochet", values.stepCrochet * 4);
    set(performanceState, "songPosition", Number(runtimeHost.globalValue(scene, ["Timer1"], 0)) || 0);
    if (callback === "onUpdate" || callback === "onUpdatePost") set(performanceState, "elapsed", Number(args && args[0]) || 0);
    if (callback === "onStepHit") set(performanceState, "curStep", Number(args && args[0]) || 0);
    if (callback === "onBeatHit") set(performanceState, "curBeat", Number(args && args[0]) || 0);
    if (callback === "onCountdownTick") {
        set(performanceState, "countdownCounter", Number(args && args[0]) || 0);
        set(performanceState, "swagCounter", values.countdownCounter);
    }

    if (!compatibilityData.defaultStrums || compatibilityData.defaultStrums.length !== 8) {
        runtimeHost.captureDefaultStrums(scene, false);
    }
    var defaultStrums = compatibilityData.defaultStrums || [];
    for (var i = 0; i < 4; i += 1) {
        var opponentDefault = defaultStrums[i] || { x: 80 + i * 115, y: values.downscroll ? 545 : 50 };
        var playerDefault = defaultStrums[i + 4] || { x: 732 + i * 115, y: values.downscroll ? 545 : 50 };
        set(performanceState, "defaultOpponentStrumX" + i, opponentDefault.x);
        set(performanceState, "defaultOpponentStrumY" + i, opponentDefault.y);
        set(performanceState, "defaultPlayerStrumX" + i, playerDefault.x);
        set(performanceState, "defaultPlayerStrumY" + i, playerDefault.y);
    }
    return values;
};
runtimeHost.syncLuaGlobals = function(scene, script, callback, args, snapshot) {
    if (!script || !script.state) return;
    var values = snapshot || runtimeHost.buildLuaGlobalSnapshot(scene, callback, args);
    var cache = script.globalCache || (script.globalCache = Object.create(null));
    var ctx = script.state.ctx;
    var performanceState = runtimeHost.ensureCompatibilityData(scene).performance;
    var names = performanceState.globalSnapshotNames;
    for (var i = 0; i < names.length; i += 1) {
        var name = names[i];
        var value = values[name];
        var cached = cache[name];
        var same = Object.prototype.hasOwnProperty.call(cache, name) &&
            (cached === value || (typeof cached === "number" && typeof value === "number" && isNaN(cached) && isNaN(value)));
        if (same) {
            performanceState.luaGlobalSkips += 1;
            continue;
        }
        ctx[name] = value;
        cache[name] = value;
        performanceState.luaGlobalWrites += 1;
    }
};
runtimeHost.getPropertyFromClass = function(scene, className, property) {
    var cls = String(className || "").toLowerCase();
    var prop = String(property || "");
    if (cls.indexOf("flixel.flxg") !== -1 && prop.toLowerCase().indexOf("camera.") === 0) return runtimeHost.getProperty(scene, "camGame." + prop.slice(7));
    if (cls.indexOf("clientprefs") !== -1 && prop.toLowerCase() === "camzooms") return true;
    var key = "class:" + className + "." + property;
    var data = runtimeHost.ensureCompatibilityData(scene);
    return Object.prototype.hasOwnProperty.call(data.properties, key) ? data.properties[key] : 0;
};
runtimeHost.setPropertyFromClass = function(scene, className, property, value) {
    var cls = String(className || "").toLowerCase();
    var prop = String(property || "");
    if (cls.indexOf("flixel.flxg") !== -1 && prop.toLowerCase().indexOf("camera.") === 0) return runtimeHost.setProperty(scene, "camGame." + prop.slice(7), value);
    runtimeHost.ensureCompatibilityData(scene).properties["class:" + className + "." + property] = value;
    return value;
};
// BEGIN GENERIC PSYCH ANIMATED LUA SPRITES 1.7.5
runtimeHost.pixiLua = function() {
    if (globalThis.PIXI) return globalThis.PIXI;
    try { if (typeof PIXI !== "undefined") return PIXI; } catch (error) {}
    return null;
};

runtimeHost.pixiLuaDisplay = function(rendererObject) {
    if (!rendererObject) return null;
    if (rendererObject.texture) return rendererObject;
    if (rendererObject.sprite && rendererObject.sprite.texture) return rendererObject.sprite;
    if (rendererObject._sprite && rendererObject._sprite.texture) return rendererObject._sprite;
    var children = rendererObject.children;
    if (!children || !children.length) return null;
    for (var i = 0; i < children.length; i += 1) {
        var found = runtimeHost.pixiLuaDisplay(children[i]);
        if (found) return found;
    }
    return null;
};
runtimeHost.pixiLuaSourceRoot = function(object) {
    if (!object) return null;
    try { return object.getRendererObject && object.getRendererObject(); }
    catch (error) { return null; }
};
runtimeHost.pixiLuaTextureUsable = function(texture) {
    // Keep an unresolved PIXI texture reference. Once its BaseTexture finishes
    // loading, the already attached ghost becomes renderable without rebuilding it.
    return Boolean(texture && !texture.destroyed);
};
runtimeHost.pixiLuaTextureValid = function(texture) {
    if (!runtimeHost.pixiLuaTextureUsable(texture)) return false;
    if (texture.valid === false) return false;
    if (texture.baseTexture && texture.baseTexture.valid === false) return false;
    var width = Number(texture.width || (texture.orig && texture.orig.width) || 0);
    var height = Number(texture.height || (texture.orig && texture.orig.height) || 0);
    return width > 0 && height > 0;
};
runtimeHost.pixiLuaCurrentCharacterFrame = function(object) {
    if (!object || !object.modAnimData || !object._modCurrentAnim) return null;
    var frames = object.modAnimData[object._modCurrentAnim];
    if (!frames || !frames.length) return null;
    var index = Math.max(0, Math.min(frames.length - 1, Math.floor(Number(object._modFrameIndex) || 0)));
    return frames[index] || null;
};
runtimeHost.pixiLuaCachedCharacterTexture = function(scene, object, frame) {
    if (!scene || !frame || !frame.path) return null;
    var scale = Number(object && object._charResolutionScale);
    if (!isFinite(scale) || scale <= 0) scale = 1;
    var cache = scene._fnfOptimizedTextureCache || {};
    var key = String(frame.path) + "@" + Math.round(scale * 1000);
    var entry = cache[key];
    if (entry && runtimeHost.pixiLuaTextureUsable(entry.texture)) return {texture:entry.texture, source:"optimized-cache"};
    var PIXIRef = runtimeHost.pixiLua();
    if (PIXIRef && PIXIRef.Texture && typeof PIXIRef.Texture.from === "function") {
        try {
            var fallback = PIXIRef.Texture.from(String(frame.path));
            if (runtimeHost.pixiLuaTextureUsable(fallback)) return {texture:fallback, source:"path-fallback"};
        } catch (error) {}
    }
    return null;
};
runtimeHost.pixiLuaCharacterSnapshot = function(scene, object, output) {
    var snapshot = output || {};
    var root = runtimeHost.pixiLuaSourceRoot(object);
    var display = runtimeHost.pixiLuaDisplay(root);
    var node = display || root;
    var frame = runtimeHost.pixiLuaCurrentCharacterFrame(object);
    var texture = display && runtimeHost.pixiLuaTextureUsable(display.texture)
        ? display.texture
        : null;
    var source = texture ? "renderer-display" : "";
    if (!texture) {
        var cached = runtimeHost.pixiLuaCachedCharacterTexture(scene, object, frame);
        texture = cached && cached.texture;
        source = cached && cached.source;
    }
    snapshot.root = root;
    snapshot.display = display;
    snapshot.node = node;
    snapshot.parent = node && node.parent ? node.parent : null;
    snapshot.frame = frame;
    snapshot.texture = texture;
    snapshot.path = frame && frame.path ? String(frame.path) : "";
    snapshot.source = source || "none";
    return snapshot;
};
runtimeHost.psychCharacterToken = function(object) {
    if (!object) return "";
    var side = String(object._charSide || "").toLowerCase();
    if (!side) {
        try {
            var name = String(object.getName ? object.getName() : "").toLowerCase();
            if (name.indexOf("bf") !== -1 || name.indexOf("boyfriend") !== -1) side = "bf";
            else if (name.indexOf("gf") !== -1 || name.indexOf("girlfriend") !== -1) side = "gf";
            else side = "dad";
        } catch (error) { side = "dad"; }
    }
    if (side === "opponent") side = "dad";
    return "__psych_character__:" + side;
};
runtimeHost.resolvePsychCharacterToken = function(scene, image) {
    var text = String(image || "");
    if (text.indexOf("__psych_character__:") !== 0) return null;
    var side = text.slice("__psych_character__:".length).toLowerCase();
    var name = side === "bf" ? "boyfriend" : (side === "gf" ? "gf" : "dad");
    return runtimeHost.findObject(scene, name);
};

runtimeHost.pixiLuaSourceDisplay = function(object) {
    return runtimeHost.pixiLuaDisplay(runtimeHost.pixiLuaSourceRoot(object));
};
runtimeHost.pixiLuaRecordPoolLimit = function(data) { return 32; };
runtimeHost.acquirePixiLuaRecord = function(scene) {
    var data = runtimeHost.ensureCompatibilityData(scene);
    var pool = data.pixiLuaRecordPool || (data.pixiLuaRecordPool = []);
    var record = pool.pop();
    if (record) data.pixiLuaRecordReused = (Number(data.pixiLuaRecordReused) || 0) + 1;
    else {
        record = { snapshot: {}, sourceState: {}, animations: Object.create(null), object: null };
        data.pixiLuaRecordCreated = (Number(data.pixiLuaRecordCreated) || 0) + 1;
    }
    return record;
};
runtimeHost.recyclePixiLuaRecord = function(scene, record) {
    if (!record) return;
    var data = runtimeHost.ensureCompatibilityData(scene);
    record.pixiSprite = null;
    record.scene = null;
    record.sourceObject = null;
    record.sourceNode = null;
    record.ownerScript = null;
    record.added = false;
    record.visible = false;
    record.currentAnimation = "";
    record.lastPrefix = "";
    var animations = record.animations || (record.animations = Object.create(null));
    var names = Object.keys(animations);
    for (var i = 0; i < names.length; i += 1) delete animations[names[i]];
    var pool = data.pixiLuaRecordPool || (data.pixiLuaRecordPool = []);
    if (pool.length < runtimeHost.pixiLuaRecordPoolLimit(data)) {
        pool.push(record);
        data.pixiLuaRecordRecycled = (Number(data.pixiLuaRecordRecycled) || 0) + 1;
    }
};
runtimeHost.pixiLuaPoolLimit = function(data) { return 32; };
runtimeHost.recyclePixiLuaSprite = function(scene, sprite) {
    if (!sprite || sprite.destroyed) return;
    var data = runtimeHost.ensureCompatibilityData(scene);
    try { if (sprite.parent) sprite.parent.removeChild(sprite); } catch (error) {}
    try {
        sprite.visible = false; sprite.renderable = false; sprite.alpha = 0;
        sprite.tint = 0xffffff; sprite.filters = null; sprite.mask = null;
        sprite.interactive = false; if ("eventMode" in sprite) sprite.eventMode = "none";
    } catch (error) {}
    if (data.pixiLuaSpritePool.length < runtimeHost.pixiLuaPoolLimit(data)) {
        data.pixiLuaSpritePool.push(sprite);
        data.pixiLuaSpriteRecycled = (Number(data.pixiLuaSpriteRecycled) || 0) + 1;
    } else {
        try { sprite.destroy({children:false, texture:false, baseTexture:false}); } catch (error) {}
    }
};
runtimeHost.acquirePixiLuaSprite = function(scene, texture) {
    var data = runtimeHost.ensureCompatibilityData(scene);
    var PIXIRef = runtimeHost.pixiLua();
    if (!PIXIRef || !PIXIRef.Sprite) return null;
    var sprite = data.pixiLuaSpritePool.pop();
    while (sprite && sprite.destroyed) sprite = data.pixiLuaSpritePool.pop();
    if (sprite) {
        sprite.texture = texture || PIXIRef.Texture.WHITE;
        data.pixiLuaSpriteReused = (Number(data.pixiLuaSpriteReused) || 0) + 1;
    } else {
        sprite = new PIXIRef.Sprite(texture || PIXIRef.Texture.WHITE);
        data.pixiLuaSpriteCreated = (Number(data.pixiLuaSpriteCreated) || 0) + 1;
    }
    sprite.visible = false; sprite.renderable = false; sprite.interactive = false;
    if ("eventMode" in sprite) sprite.eventMode = "none";
    return sprite;
};
runtimeHost.makePixiLuaProxy = function(record) {
    return {
        getName: function(){ return record.tag; },
        getX: function(){ return Number(record.logicalX)||0; },
        getY: function(){ return Number(record.logicalY)||0; },
        setX: function(v){ record.logicalX=Number(v)||0; runtimeHost.applyLuaRecordTransform(record.scene,record); },
        setY: function(v){ record.logicalY=Number(v)||0; runtimeHost.applyLuaRecordTransform(record.scene,record); },
        setPosition: function(x,y){ record.logicalX=Number(x)||0; record.logicalY=Number(y)||0; runtimeHost.applyLuaRecordTransform(record.scene,record); },
        getScaleX: function(){ return Number(record.logicalScaleX)||0; },
        getScaleY: function(){ return Number(record.logicalScaleY)||0; },
        setScaleX: function(v){ record.logicalScaleX=Number(v)||0; runtimeHost.applyLuaRecordTransform(record.scene,record); },
        setScaleY: function(v){ record.logicalScaleY=Number(v)||0; runtimeHost.applyLuaRecordTransform(record.scene,record); },
        flipX: function(v){ record.flipX=Boolean(v); runtimeHost.applyLuaRecordTransform(record.scene,record); },
        isFlippedX: function(){ return Boolean(record.flipX); },
        setOpacity: function(v){ record.alpha=Math.max(0,Math.min(1,(Number(v)||0)/255)); runtimeHost.applyLuaRecordTransform(record.scene,record); },
        getOpacity: function(){ return Math.round(Math.max(0,Math.min(1,Number(record.alpha)||0))*255); },
        hide: function(v){ record.visible=!Boolean(v); runtimeHost.applyLuaRecordTransform(record.scene,record); },
        isHidden: function(){ return record.visible===false; },
        isVisible: function(){ return record.visible!==false; },
        setZOrder: function(v){ record.order=Number(v)||0; runtimeHost.attachPixiLuaRecord(record.scene,record,true); },
        getZOrder: function(){ return Number(record.order)||0; },
        setAngle: function(v){ record.angle=Number(v)||0; runtimeHost.applyLuaRecordTransform(record.scene,record); },
        getAngle: function(){ return Number(record.angle)||0; },
        getWidth: function(){ var s=record.pixiSprite; return s&&s.texture?Math.abs(s.texture.width*(Number(record.logicalScaleX)||1)):0; },
        getHeight: function(){ var s=record.pixiSprite; return s&&s.texture?Math.abs(s.texture.height*(Number(record.logicalScaleY)||1)):0; },
        getRendererObject: function(){ return record.pixiSprite; },
        getLayer: function(){ return runtimeHost.resolveLayerName(record.scene,record.camera); },
        setLayer: function(){},
        getAnimationName: function(){ return String(record.currentAnimation||""); },
        setAnimationName: function(v){ record.currentAnimation=String(v||""); },
        pauseAnimation: function(){},
        deleteFromScene: function(){ runtimeHost.detachPixiLuaRecord(record); }
    };
};
runtimeHost.detachPixiLuaRecord = function(record) {
    if (!record || !record.pixiSprite) return;
    try { if (record.pixiSprite.parent) record.pixiSprite.parent.removeChild(record.pixiSprite); } catch (error) {}
};

runtimeHost.defaultPixiLuaParent = function(scene, record) {
    var names = runtimeHost.isScreenCamera(record.camera) ? ["Statistics", "LifeBar", "BF_icon"] : ["BF", "Sarvente2", "STAGE"];
    for (var n=0;n<names.length;n+=1) {
        try {
            var objects=scene.getObjects(names[n]);
            if(objects&&objects.length){
                var root=runtimeHost.pixiLuaSourceRoot(objects[0]);
                if(root&&root.parent)return root.parent;
                var display=runtimeHost.pixiLuaDisplay(root);
                if(display&&display.parent)return display.parent;
            }
        } catch(error) {}
    }
    return null;
};
runtimeHost.attachPixiLuaRecord = function(scene, record, reorder) {
    if (!record || !record.pixiSprite || !record.added) return false;
    var data=runtimeHost.ensureCompatibilityData(scene), sprite=record.pixiSprite;
    var snapshot=runtimeHost.pixiLuaCharacterSnapshot(scene,record.sourceObject,record.snapshot);
    var sourceNode=(snapshot&&snapshot.node)||record.sourceNode;
    var parent=sourceNode&&sourceNode.parent?sourceNode.parent:runtimeHost.defaultPixiLuaParent(scene,record);
    if(!parent){
        data.pixiLuaAttachFailures=(Number(data.pixiLuaAttachFailures)||0)+1;
        data.pixiLuaTextureError="No renderer parent was available for " + String(record.tag||"");
        return false;
    }
    record.sourceNode=sourceNode||record.sourceNode||null;
    if(sprite.parent!==parent || reorder){
        try { if(sprite.parent)sprite.parent.removeChild(sprite); } catch(error) {}
        try {
            if(sourceNode&&sourceNode.parent===parent&&typeof parent.getChildIndex==="function"&&typeof parent.addChildAt==="function"){
                var index=parent.getChildIndex(sourceNode);
                parent.addChildAt(sprite,Math.max(0,index));
            } else parent.addChild(sprite);
        } catch(error){
            data.pixiLuaAttachFailures=(Number(data.pixiLuaAttachFailures)||0)+1;
            data.pixiLuaTextureError=error&&error.message?error.message:String(error);
            return false;
        }
    }
    return Boolean(sprite.parent);
};
runtimeHost.applyPixiLuaRecordTransform = function(scene, record) {
    if(!record||!record.pixiSprite)return false;
    var sprite=record.pixiSprite;
    runtimeHost.attachPixiLuaRecord(scene,record,false);
    var screen=runtimeHost.isScreenCamera(record.camera), metrics=runtimeHost.viewportMetrics(scene);
    var sx=screen?metrics.scaleX:1, sy=screen?metrics.scaleY:1;
    var offsetX=Number(record.offsetX)||0, offsetY=Number(record.offsetY)||0;
    var logicalX=Number(record.logicalX)||0, logicalY=Number(record.logicalY)||0;
    var state=record.sourceState;

    // For character snapshots use the renderer's exact local position. Lua x/y
    // changes are applied as deltas, preserving GDevelop anchor/frame offsets.
    if(state&&!screen){
        sprite.x=(Number(state.x)||0)+(logicalX-(Number(state.logicalX)||0))-offsetX;
        sprite.y=(Number(state.y)||0)+(logicalY-(Number(state.logicalY)||0))-offsetY;
    } else {
        sprite.x=(logicalX-offsetX)*sx;
        sprite.y=(logicalY-offsetY)*sy;
    }

    var scaleX=(Number(record.logicalScaleX)||0)*sx;
    var scaleY=(Number(record.logicalScaleY)||0)*sy;
    if(record.flipX)scaleX=-Math.abs(scaleX); else scaleX=Math.abs(scaleX);
    if(sprite.scale)sprite.scale.set(scaleX,scaleY);
    sprite.rotation=(Number(record.angle)||0)*Math.PI/180;
    sprite.alpha=Math.max(0,Math.min(1,Number(record.alpha)||0));
    sprite.tint=Number.isFinite(Number(record.color))?Number(record.color):0xffffff;
    sprite.visible=Boolean(record.added&&record.visible!==false);
    sprite.renderable=sprite.visible;
    if("zIndex" in sprite){
        // Character-frame snapshots must stay immediately behind their source.
        // The raw PIXI container sorts by zIndex after addChildAt, so using the
        // Lua order (2) hides the trail behind converted stage sprites.
        var sourceZ=state&&Number.isFinite(Number(state.zIndex))?Number(state.zIndex):null;
        sprite.zIndex=sourceZ===null?(Number(record.order)||0):sourceZ-0.01;
    }
    return true;
};

runtimeHost.createAnimatedLuaObject = function(scene,tag,image,x,y,script,spriteType){
    var data=runtimeHost.ensureCompatibilityData(scene); tag=String(tag||"");
    var old=data.luaObjects.get(tag);
    if(old){runtimeHost.removeLuaObject(scene,tag,true);}
    var record=runtimeHost.acquirePixiLuaRecord(scene);
    var source=runtimeHost.resolvePsychCharacterToken(scene,image);
    var snapshot=source?runtimeHost.pixiLuaCharacterSnapshot(scene,source,record.snapshot):record.snapshot;
    var PIXIRef=runtimeHost.pixiLua();
    var texture=snapshot&&runtimeHost.pixiLuaTextureUsable(snapshot.texture)?snapshot.texture:(PIXIRef&&PIXIRef.Texture?PIXIRef.Texture.WHITE:null);
    var sprite=runtimeHost.acquirePixiLuaSprite(scene,texture);
    if(!sprite){runtimeHost.recyclePixiLuaRecord(scene,record);runtimeHost.warnOnce(scene,"pixi-lua-unavailable","PIXI animated Lua sprites are unavailable.");return null;}
    record.tag=tag;record.kind="sprite";record.pixiBacked=true;record.pixiSprite=sprite;record.scene=scene;record.image=String(image||"");record.spriteType=String(spriteType||"sparrow");
    record.sourceObject=source;record.sourceNode=snapshot&&snapshot.node?snapshot.node:null;record.added=false;record.camera="game";record.scrollX=1;record.scrollY=1;
    record.logicalX=Number(x)||0;record.logicalY=Number(y)||0;record.logicalScaleX=1;record.logicalScaleY=1;record.offsetX=0;record.offsetY=0;record.flipX=false;
    record.angle=0;record.angleExplicit=false;record.scaleExplicitX=false;record.scaleExplicitY=false;record.alpha=1;record.color=0xffffff;record.visible=true;record.order=0;
    record.ownerScript=script;record.currentAnimation="";record.texturePath=snapshot&&snapshot.path?String(snapshot.path):"";record.lastPrefix="";
    if(!record.object)record.object=runtimeHost.makePixiLuaProxy(record);
    data.luaObjects.set(tag,record);
    if(snapshot&&runtimeHost.pixiLuaTextureValid(snapshot.texture)){
        data.pixiLuaLastTexturePath=record.texturePath;
        data.pixiLuaTextureError="";
    }
    runtimeHost.applyPixiLuaRecordTransform(scene,record);
    runtimeHost.writePixiLuaStatus(scene);
    return record.object;
};
runtimeHost.copyPixiLuaCharacterFrame = function(scene,record,prefix){
    if(!record||!record.pixiBacked||!record.pixiSprite)return false;
    var data=runtimeHost.ensureCompatibilityData(scene);
    var snapshot=runtimeHost.pixiLuaCharacterSnapshot(scene,record.sourceObject,record.snapshot);
    if(!snapshot||!runtimeHost.pixiLuaTextureUsable(snapshot.texture)){
        data.pixiLuaTextureError="No character texture reference for " + String(record.tag||"") + " (" + String(prefix||"") + ")";
        runtimeHost.writePixiLuaStatus(scene);
        return false;
    }
    record.pixiSprite.texture=snapshot.texture;
    record.texturePath=String(snapshot.path||"");
    record.lastPrefix=String(prefix||"");
    record.sourceNode=snapshot.node||record.sourceNode||null;

    var node=snapshot.node;
    var object=record.sourceObject;
    var logicalSourceX=object&&typeof object.getX==="function"
        ? object.getX()/runtimeHost.objectCoordinateScaleX(scene,object)
        : Number(record.logicalX)||0;
    var logicalSourceY=object&&typeof object.getY==="function"
        ? object.getY()/runtimeHost.objectCoordinateScaleY(scene,object)
        : Number(record.logicalY)||0;
    var sourceState=record.sourceState||(record.sourceState={});
    sourceState.x=node&&Number.isFinite(Number(node.x))?Number(node.x):logicalSourceX;
    sourceState.y=node&&Number.isFinite(Number(node.y))?Number(node.y):logicalSourceY;
    sourceState.logicalX=logicalSourceX;
    sourceState.logicalY=logicalSourceY;
    sourceState.zIndex=node&&Number.isFinite(Number(node.zIndex))
        ? Number(node.zIndex)
        : (object&&typeof object.getZOrder==="function"?Number(object.getZOrder()):0);

    if(node){
        if(node.anchor&&record.pixiSprite.anchor)record.pixiSprite.anchor.set(Number(node.anchor.x)||0,Number(node.anchor.y)||0);
        if(node.pivot&&record.pixiSprite.pivot)record.pixiSprite.pivot.set(Number(node.pivot.x)||0,Number(node.pivot.y)||0);
        if("blendMode" in node&&"blendMode" in record.pixiSprite)record.pixiSprite.blendMode=node.blendMode;
        if(!record.scaleExplicitX&&node.scale)record.logicalScaleX=Math.abs(Number(node.scale.x)||1);
        if(!record.scaleExplicitY&&node.scale)record.logicalScaleY=Math.abs(Number(node.scale.y)||1);
        if(!record.angleExplicit)record.angle=(Number(node.rotation)||0)*180/Math.PI;
    }
    data.pixiLuaTextureCopies=(Number(data.pixiLuaTextureCopies)||0)+1;
    if(snapshot.source==="path-fallback")data.pixiLuaTextureFallbacks=(Number(data.pixiLuaTextureFallbacks)||0)+1;
    data.pixiLuaLastTexturePath=record.texturePath;
    data.pixiLuaTextureError=runtimeHost.pixiLuaTextureValid(snapshot.texture)?"":"Texture reference assigned and waiting for BaseTexture";
    runtimeHost.attachPixiLuaRecord(scene,record,true);
    runtimeHost.applyPixiLuaRecordTransform(scene,record);
    return true;
};
runtimeHost.addAnimationByPrefix = function(scene,tag,name,prefix,framerate,loop){
    var record=runtimeHost.luaRecord(scene,tag);
    if(!record)return false;
    record.animations[String(name||"")]={prefix:String(prefix||""),framerate:Number(framerate)||0,loop:Boolean(loop)};
    if(!record.currentAnimation)record.currentAnimation=String(name||"");
    if(record.pixiBacked){
        var copied=runtimeHost.copyPixiLuaCharacterFrame(scene,record,prefix);
        var data=runtimeHost.ensureCompatibilityData(scene); data.pixiLuaLastPrefix=String(prefix||"");
        runtimeHost.writePixiLuaStatus(scene);
        return copied;
    }
    if(record.object&&typeof record.object.setAnimationName==="function"){
        try{record.object.setAnimationName(String(name||""));return true;}catch(error){}
    }
    return false;
};
runtimeHost.playLuaAnimation = function(scene,tag,name,forced,reverse,startFrame){
    var record=runtimeHost.luaRecord(scene,tag);
    if(record&&record.pixiBacked){
        record.currentAnimation=String(name||"");
        var animation=record.animations[record.currentAnimation]||{};
        return runtimeHost.copyPixiLuaCharacterFrame(scene,record,animation.prefix||record.lastPrefix||record.currentAnimation);
    }
    var object=runtimeHost.findObject(scene,tag);
    if(object&&typeof object.setAnimationName==="function"){
        try{object.setAnimationName(String(name||""));return true;}catch(error){}
    }
    return false;
};
runtimeHost.cancelTimer = function(scene,script,tag){
    var data=runtimeHost.ensureCompatibilityData(scene);
    return data.timers.delete(script.id+"::"+String(tag));
};

runtimeHost.writePixiLuaStatus = function(scene){
    if (runtimeHost.shouldWriteDiagnostic && !runtimeHost.shouldWriteDiagnostic(scene, "ghostTrail")) return;
    try{
        var data=runtimeHost.ensureCompatibilityData(scene), root=scene.getGame().getVariables().get("PsychLuaRuntime").getChild("GhostTrail");
        var active=0, attached=0, textured=0, textureReferences=0;
        var PIXIRef=runtimeHost.pixiLua(), white=PIXIRef&&PIXIRef.Texture?PIXIRef.Texture.WHITE:null;
        data.luaObjects.forEach(function(r){
            if(!r||!r.pixiBacked||!r.added||r.visible===false)return;
            active+=1;
            if(r.pixiSprite&&r.pixiSprite.parent)attached+=1;
            if(r.pixiSprite&&runtimeHost.pixiLuaTextureUsable(r.pixiSprite.texture)&&r.pixiSprite.texture!==white)textureReferences+=1;
            if(r.pixiSprite&&runtimeHost.pixiLuaTextureValid(r.pixiSprite.texture)&&r.pixiSprite.texture!==white)textured+=1;
        });
        var loaded=Boolean(data.ghostTrailLuaLoaded);
        var loadError=String(data.ghostTrailLoadError||"");
        var textureError=String(data.pixiLuaTextureError||"");
        var state=loadError?"LuaScriptLoadFailed":(active>0?(attached===0?"LuaSpritesDetached":(textureReferences===0?"LuaSpritesMissingTexture":(textured===0?"LuaSpritesTexturePending":"LuaSpritesVisibleReady"))):(loaded?"LuaScriptLoadedWaitingForEvent":"WaitingForLuaScript"));
        root.getChild("State").setString(state);
        root.getChild("Backend").setString("Standard Psych Lua sprite/timer/tween API");
        root.getChild("BackendVersion").setString("1.7.5");
        root.getChild("NativeBackendDisabled").setBoolean(true);
        root.getChild("ActiveSprites").setNumber(active);
        root.getChild("AttachedSprites").setNumber(attached);
        root.getChild("TexturedSprites").setNumber(textured);
        root.getChild("TextureReferences").setNumber(textureReferences);
        var lastGhostZ=0,lastSourceZ=0;
        data.luaObjects.forEach(function(r){
            if(!r||!r.pixiBacked||!r.pixiSprite||!r.sourceState)return;
            lastGhostZ=Number(r.pixiSprite.zIndex)||0;
            lastSourceZ=Number(r.sourceState.zIndex)||0;
        });
        root.getChild("LastGhostZ").setNumber(lastGhostZ);
        root.getChild("LastSourceZ").setNumber(lastSourceZ);
        root.getChild("PoolCount").setNumber(data.pixiLuaSpritePool.length);
        root.getChild("CreatedSpriteCount").setNumber(Number(data.pixiLuaSpriteCreated)||0);
        root.getChild("ReusedSpriteCount").setNumber(Number(data.pixiLuaSpriteReused)||0);
        root.getChild("RecycledSpriteCount").setNumber(Number(data.pixiLuaSpriteRecycled)||0);
        root.getChild("RecordPoolCount").setNumber(data.pixiLuaRecordPool.length);
        root.getChild("CreatedRecordCount").setNumber(Number(data.pixiLuaRecordCreated)||0);
        root.getChild("ReusedRecordCount").setNumber(Number(data.pixiLuaRecordReused)||0);
        root.getChild("RecycledRecordCount").setNumber(Number(data.pixiLuaRecordRecycled)||0);
        root.getChild("TextureCopyCount").setNumber(Number(data.pixiLuaTextureCopies)||0);
        root.getChild("TextureFallbackCount").setNumber(Number(data.pixiLuaTextureFallbacks)||0);
        root.getChild("AttachFailureCount").setNumber(Number(data.pixiLuaAttachFailures)||0);
        root.getChild("LastTexturePath").setString(String(data.pixiLuaLastTexturePath||""));
        root.getChild("TextureError").setString(textureError);
        root.getChild("LastAnimationPrefix").setString(String(data.pixiLuaLastPrefix||""));
        root.getChild("ScriptLoaded").setBoolean(loaded);
        root.getChild("LastEvent").setString(String(data.ghostTrailLastEvent||""));
        root.getChild("EventDispatchCount").setNumber(Number(data.ghostTrailEventDispatchCount)||0);
        root.getChild("DynamicLoadCount").setNumber(Number(data.ghostTrailDynamicLoadCount)||0);
        root.getChild("LoadError").setString(loadError);
        root.getChild("LastScriptId").setString(String(data.ghostTrailLastScriptId||""));
    }catch(error){}
};
// END GENERIC PSYCH ANIMATED LUA SPRITES 1.7.5
runtimeHost.installLuaCompatibility = function(scene, script) {
    var ctx = script.state.ctx;
    ctx.getRunningScripts = function() {
        var running = [];
        runtimeHost.getSceneData(scene).scripts.forEach(function(item) { if (item && !item.closed && !item.disabled) running.push(item.path || item.id); });
        return running;
    };
    ctx.makeLuaSprite = function(tag, image, x, y) { return Boolean(runtimeHost.createLuaObject(scene, tag, "sprite", image, x, y, script)); };
    ctx.makeAnimatedLuaSprite = function(tag, image, x, y, spriteType) { return Boolean(runtimeHost.createAnimatedLuaObject(scene, tag, image, x, y, script, spriteType)); };
    ctx.makeGraphic = function(tag, width, height, color) { return runtimeHost.makeGraphic(scene, tag, width, height, color); };
    ctx.addLuaSprite = function(tag, front) { return runtimeHost.addLuaObject(scene, tag, Boolean(front)); };
    ctx.removeLuaSprite = function(tag, destroy) { return runtimeHost.removeLuaObject(scene, tag, destroy !== false); };
    ctx.makeLuaText = function(tag, text, width, x, y) {
        var object = runtimeHost.createLuaObject(scene, tag, "text", "", x, y, script);
        if (object) runtimeHost.setText(scene, tag, text);
        if (object && Number(width) > 0) { var record=runtimeHost.luaRecord(scene,tag); if(record){record.logicalWrapWidth=Number(width);runtimeHost.applyLuaRecordTransform(scene,record);} }
        return Boolean(object);
    };
    ctx.addLuaText = function(tag) { return runtimeHost.addLuaObject(scene, tag, true); };
    ctx.removeLuaText = function(tag) { return runtimeHost.removeLuaObject(scene, tag); };
    ctx.setTextSize = function(tag, size) { return runtimeHost.setTextSize(scene, tag, size); };
    ctx.getTextWidth = function(tag) { return runtimeHost.getTextWidth(scene, tag); };
    ctx.setObjectCamera = function(tag, camera) { return runtimeHost.setObjectCamera(scene, tag, camera); };
    ctx.setLuaSpriteScrollFactor = function(tag, x, y) { var record=runtimeHost.luaRecord(scene,tag);if(record){if(record.stageAlias&&runtimeHost.isStageBootstrap(record))return true;record.scrollX=Number(x)||0;record.scrollY=Number(y)||0;runtimeHost.applyLuaRecordTransform(scene,record);}return true; };
    ctx.setScrollFactor = ctx.setLuaSpriteScrollFactor;
    ctx.scaleObject = function(tag, x, y) { return runtimeHost.scaleObject(scene, tag, x, y); };
    ctx.setBlendMode = function(tag, mode) { return runtimeHost.setBlendMode(scene, tag, mode); };
    ctx.setObjectOrder = function(tag, order) { return runtimeHost.setObjectOrder(scene, tag, order); };
    ctx.getObjectOrder = function(tag) { return runtimeHost.getObjectOrder(scene, tag); };
    ctx.screenCenter = function(tag, axis) { return runtimeHost.screenCenter(scene, tag, axis); };
    ctx.getMidpointX = function(tag) { return runtimeHost.getMidpoint(scene, tag, "x"); };
    ctx.getMidpointY = function(tag) { return runtimeHost.getMidpoint(scene, tag, "y"); };
    ctx.playAnim = function(tag, animation, forced, reverse, startFrame) { return runtimeHost.playLuaAnimation(scene, tag, animation, forced, reverse, startFrame); };
    ctx.addAnimationByPrefix = function(tag, name, prefix, framerate, loop) { return runtimeHost.addAnimationByPrefix(scene, tag, name, prefix, framerate, loop); };
    ctx.doTweenX = function(tag, target, value, duration, ease) { var path = String(target || "") + (String(target || "").match(/\.scale$/) ? ".x" : ".x"); return runtimeHost.startPropertyTween(scene, script, tag, path, value, duration, ease); };
    ctx.doTweenY = function(tag, target, value, duration, ease) { var path = String(target || "") + (String(target || "").match(/\.scale$/) ? ".y" : ".y"); return runtimeHost.startPropertyTween(scene, script, tag, path, value, duration, ease); };
    ctx.doTweenAlpha = function(tag, target, value, duration, ease) { return runtimeHost.startPropertyTween(scene, script, tag, String(target || "") + ".alpha", value, duration, ease); };
    ctx.doTweenZoom = function(tag, target, value, duration, ease) { return runtimeHost.startPropertyTween(scene, script, tag, String(target || "") + ".zoom", value, duration, ease); };
    ctx.startTween = function(tag, target, values, duration, options) {
        var ease = runtimeHost.luaField(options, "ease");
        if (typeof ease === "undefined" || ease === null || ease === "") ease = "linear";
        var keys = ["x", "y", "alpha", "angle", "zoom"];
        var started = 0;
        for (var i = 0; i < keys.length; i += 1) {
            var key = keys[i];
            var value = runtimeHost.luaField(values, key);
            if (typeof value !== "undefined" && value !== null) {
                runtimeHost.startPropertyTween(scene, script, String(tag) + "_" + key, String(target) + "." + key, value, duration, ease);
                started += 1;
            }
        }
        return started > 0;
    };
    ctx.runTimer = function(tag, duration, loops) { return runtimeHost.startTimer(scene, script, tag, duration, loops); };
    ctx.cancelTimer = function(tag) { return runtimeHost.cancelTimer(scene, script, tag); };
    ctx.callMethod = function(path, args) {
        var parts = runtimeHost.parsePath(path);
        if (parts.length >= 4 && String(parts[1]).toLowerCase() === "members") {
            var group = runtimeHost.groupObjects(scene, parts[0]);
            var object = group[Math.max(0, Math.floor(Number(parts[2]) || 0))];
            if (!object) return null;
            var method = String(parts.slice(3).join(".")).toLowerCase();
            var a = runtimeHost.luaArray(args, 8);
            if (method === "setposition") {
                if (a.length < 2 || !isFinite(Number(a[0])) || !isFinite(Number(a[1]))) {
                    runtimeHost.warnOnce(scene, "callMethod-setPosition-args", "callMethod setPosition received invalid Lua table arguments.");
                    return false;
                }
                if (object.setPosition) object.setPosition(runtimeHost.toGameX(scene, a[0]), runtimeHost.toGameY(scene, a[1]));
                return true;
            }
            if (method === "scale.set") {
                if (a.length < 2 || !isFinite(Number(a[0])) || !isFinite(Number(a[1]))) {
                    runtimeHost.warnOnce(scene, "callMethod-scale-args", "callMethod scale.set received invalid Lua table arguments.");
                    return false;
                }
                if (object.setScaleX) object.setScaleX(runtimeHost.toObjectScaleX(scene, object, a[0]));
                if (object.setScaleY) object.setScaleY(runtimeHost.toObjectScaleY(scene, object, a[1]));
                return true;
            }
        }
        return null;
    };
    ctx.createInstance = function(tag, className, args) {
        var values = runtimeHost.luaArray(args, 16);
        var image = values.length > 2 ? values[2] : "";
        return Boolean(runtimeHost.createLuaObject(scene, tag, "sprite", image, values[0] || 0, values[1] || 0, script));
    };
    ctx.addInstance = function(tag, front) { return runtimeHost.addLuaObject(scene, tag, Boolean(front)); };
    ctx.addLuaScript = function(path) {
        var manifest = runtimeHost.getPsychLuaManifest(scene);
        if (!manifest) {
            runtimeHost.warnOnce(scene, "manifest-unavailable", "FORPsychLuaSources index resource is not loaded.");
            return false;
        }
        var normalized = String(path || "").replace(/\\/g, "/").replace(/\.lua$/i, "").toLowerCase();
        var scripts = Array.isArray(manifest.Scripts) ? manifest.Scripts : [];
        for (var i = 0; i < scripts.length; i += 1) {
            var candidateId = String(scripts[i].Id || "").replace(/\\/g, "/").replace(/\.lua$/i, "").toLowerCase();
            var candidatePath = String(scripts[i].Path || "").replace(/\\/g, "/").replace(/\.lua$/i, "").toLowerCase();
            if (candidateId !== normalized && candidatePath !== normalized) continue;
            var entry = scripts[i];
            var id = String(entry.Id || entry.Path || path);
            var data = runtimeHost.ensureCompatibilityData(scene);
            if (data.scripts.has(id) || runtimeHost.sourceTextRequests.has(String(entry.ResourceName || ""))) return true;
            runtimeHost.loadManifestEntry(scene, entry, id, entry.Path).then(function(loaded) {
                if (!loaded) return;
                runtimeHost.dispatch(scene, id, "onCreate", []);
                var createPostSent = false;
                try { createPostSent = scene.getVariables().get("PsychLuaLifecycle").getChild("CreatePostSent").getAsBoolean(); } catch (error) {}
                if (createPostSent) runtimeHost.dispatch(scene, id, "onCreatePost", []);
            }).catch(function(error) {
                runtimeHost.setLastError(scene, id, "addLuaScript", error);
                console.error("Psych Lua addLuaScript failed", id, error);
            });
            return true;
        }
        return false;
    };
    ctx.getPropertyFromClass = function(className, property) { return runtimeHost.getPropertyFromClass(scene, className, property); };
    ctx.setPropertyFromClass = function(className, property, value) { return runtimeHost.setPropertyFromClass(scene, className, property, value); };
    ctx.runHaxeCode = function() { runtimeHost.warnOnce(scene, "runHaxeCode", "runHaxeCode is unavailable in GDevelop/browser and was skipped safely."); return null; };
    ctx.keyJustPressed = function() { return false; };
    ctx.getRandomBool = function(chance) { return Math.random() * 100 < (Number(chance) || 50); };
    ctx.instanceArg = function(value) { return value; };
    ctx.achievementExists = function() { return false; };
    ctx.isAchievementUnlocked = function() { return false; };
    ctx.unlockAchievement = function() { return false; };
    ctx.getAchievementScore = function() { return 0; };
    ctx.setAchievementScore = function() { return false; };
    ctx.initLuaShader = function() { return false; };
    ctx.setSpriteShader = function() { return false; };
    ctx.setShaderFloat = function() { return false; };
    ctx.setShaderBool = function() { return false; };
    ctx.setShaderFloatArray = function() { return false; };
    runtimeHost.syncLuaGlobals(scene, script, "load", []);
};
// END PSYCH LUA COMPATIBILITY API 1.7.2
runtimeHost.syncEvent = function(scene) {
    var data = runtimeHost.getSceneData(scene);
    var roots = [
        runtimeHost.extensionVariables(scene).get("Event"),
        runtimeHost.globalVariables(scene).getChild("Event")
    ];
    var current = data.eventQueue.length ? data.eventQueue[0] : null;
    for (var i = 0; i < roots.length; i += 1) {
        roots[i].getChild("Pending").setBoolean(Boolean(current));
        roots[i].getChild("Name").setString(current ? current.name : "");
        roots[i].getChild("Value1").setString(current ? current.value1 : "");
        roots[i].getChild("Value2").setString(current ? current.value2 : "");
        roots[i].getChild("SourceScript").setString(current ? current.sourceScript : "");
    }
};
runtimeHost.queueEvent = function(scene, script, name, value1, value2) {
    runtimeHost.getSceneData(scene).eventQueue.push({
        name: runtimeHost.valueText(name),
        value1: runtimeHost.valueText(value1),
        value2: runtimeHost.valueText(value2),
        sourceScript: script.id
    });
    runtimeHost.syncEvent(scene);
    return true;
};
runtimeHost.callbackNames = runtimeHost.callbackNames || [
    "onCreate", "onCreatePost", "onSongStart", "onUpdate", "onUpdatePost",
    "onStepHit", "onBeatHit", "onSectionHit", "onEvent", "onDestroy",
    "onTimerCompleted", "onTweenCompleted", "onCountdownTick", "onEndSong",
    "onGameOver", "onGameOverStart", "onGameOverConfirm", "goodNoteHit",
    "opponentNoteHit", "noteMiss", "noteMissPress", "onMoveCamera",
    "onPause", "onResume", "onSpawnNote", "onKeyPress", "onKeyRelease"
];
runtimeHost.unindexScriptCallbacks = function(scene, script) {
    if (!script || !script.callbackSet) return;
    var data = runtimeHost.ensureCompatibilityData(scene);
    var changed = false;
    script.callbackSet.forEach(function(callback) {
        var scripts = data.callbackScripts.get(callback);
        if (!scripts) return;
        changed = scripts.delete(script) || changed;
        if (!scripts.size) data.callbackScripts.delete(callback);
    });
    script.callbackSet.clear();
    if (changed) data.callbackIndexVersion += 1;
};
runtimeHost.indexScriptCallbacks = function(scene, script) {
    if (!script || !script.state || script.closed || script.disabled) return;
    runtimeHost.unindexScriptCallbacks(scene, script);
    var data = runtimeHost.ensureCompatibilityData(scene);
    script.callbackSet = script.callbackSet || new Set();
    script.callbackFunctions = script.callbackFunctions || Object.create(null);
    var changed = false;
    for (var i = 0; i < runtimeHost.callbackNames.length; i += 1) {
        var callback = runtimeHost.callbackNames[i];
        var fn = script.state.ctx[callback];
        script.callbackFunctions[callback] = typeof fn === "function" ? fn : null;
        if (typeof fn !== "function") continue;
        var scripts = data.callbackScripts.get(callback);
        if (!scripts) {
            scripts = new Set();
            data.callbackScripts.set(callback, scripts);
        }
        scripts.add(script);
        script.callbackSet.add(callback);
        changed = true;
    }
    if (changed) data.callbackIndexVersion += 1;
};
runtimeHost.callbackTargets = function(scene, callback) {
    var data = runtimeHost.ensureCompatibilityData(scene);
    var key = String(callback || "");
    var cached = data.callbackTargetCache.get(key);
    if (cached && cached.version === data.callbackIndexVersion) return cached.targets;
    var scripts = data.callbackScripts.get(key);
    var targets = scripts && scripts.size ? Array.from(scripts) : data.emptyCallbackTargets;
    data.callbackTargetCache.set(key, { version: data.callbackIndexVersion, targets: targets });
    return targets;
};
runtimeHost.releaseScriptFunctions = function(script) {
    if (!script) return;
    var released = new Set();
    var release = function(fn) {
        if (typeof fn !== "function" || released.has(fn)) return;
        released.add(fn);
        try {
            if (typeof fn.$destroy === "function" &&
                (typeof fn.$isAlive !== "function" || fn.$isAlive())) fn.$destroy();
        } catch (ignored) {}
    };
    if (script.callbackFunctions) {
        for (var i = 0; i < runtimeHost.callbackNames.length; i += 1) {
            var callback = runtimeHost.callbackNames[i];
            release(script.callbackFunctions[callback]);
            script.callbackFunctions[callback] = null;
        }
    }
    release(script.gcStepFn);
    release(script.gcCollectFn);
};
runtimeHost.closeScript = function(scene, script) {
    if (!script || script.closed) return;
    if (script.smoothCamAdapter) runtimeHost.deactivateSmoothCamAdapter(scene, script);
    runtimeHost.releaseScriptFunctions(script);
    runtimeHost.unindexScriptCallbacks(scene, script);
    script.globalCache = null;
    script.callbackFunctions = null;
    script.gcStepFn = null;
    script.gcCollectFn = null;
    script.gcQueued = false;
    script.singleTarget = null;
    var closeData=runtimeHost.ensureCompatibilityData(scene);
    var gcIndex=closeData.gcScripts.indexOf(script);
    if(gcIndex>=0)closeData.gcScripts.splice(gcIndex,1);
    var owned=closeData.ownedTagsScratch; owned.length=0;
    closeData.luaObjects.forEach(function(record,tag){if(record&&record.ownerScript===script)owned.push(tag);});
    for(var ownedIndex=0;ownedIndex<owned.length;ownedIndex+=1)runtimeHost.removeLuaObject(scene,owned[ownedIndex],true);
    owned.length=0;
    script.closed = true;
    try { runtimeHost.factory.closeState(script.state); } catch (error) {}
    runtimeHost.getSceneData(scene).scripts.delete(script.id);
    runtimeHost.setScriptStatus(scene, script.id, script.path, false, script.disabled, true, script.error || "");
    runtimeHost.updateScriptCount(scene);
};
runtimeHost.loadSource = function(scene, id, path, source) {
    if (!runtimeHost.factory) throw new Error("Lua runtime is not ready");
    id = String(id || path || "script");
    path = String(path || id);
    source = String(source || "");
    var data = runtimeHost.getSceneData(scene);
    var oldScript = data.scripts.get(id);
    if (oldScript) runtimeHost.closeScript(scene, oldScript);
    var script = {
        id: id, path: path, source: source, state: null, closed: false,
        disabled: false, closeRequested: false, error: "",
        globalCache: Object.create(null), callbackSet: new Set(),
        callbackFunctions: Object.create(null), gcStepFn: null,
        gcCollectFn: null, gcQueued: false, luaMemoryKb: 0
    };
    script.singleTarget = [script];
    try {
        script.state = runtimeHost.factory.createState({ memoryLimitBytes: 8 * 1024 * 1024 });
        data.scripts.set(id, script);
        var ctx = script.state.ctx;
        ctx.Function_Stop = "##PSYCHLUA_FUNCTIONSTOP";
        ctx.Function_Continue = "##PSYCHLUA_FUNCTIONCONTINUE";
        ctx.Function_StopLua = "##PSYCHLUA_FUNCTIONSTOPLUA";
        ctx.Function_StopHScript = "##PSYCHLUA_FUNCTIONSTOPHSCRIPT";
        ctx.Function_StopAll = "##PSYCHLUA_FUNCTIONSTOPALL";
        ctx.scriptName = path;
        ctx.os = {};
        ctx.getModSetting = function(name) {
            var setting = scene.getGame().getVariables().get("PsychLuaRuntime").getChild("ModSettings").getChild(String(name));
            if (typeof setting.getType === "function") {
                var settingType = setting.getType();
                if (settingType === "boolean") return setting.getAsBoolean();
                if (settingType === "number") return setting.getAsNumber();
            }
            var settingText = setting.getAsString();
            if (settingText === "true") return true;
            if (settingText === "false") return false;
            if (settingText !== "" && isFinite(Number(settingText))) return Number(settingText);
            if (settingText === "") {
                var settingName = String(name || "").toLowerCase();
                if (runtimeHost.modSettingDefaults && Object.prototype.hasOwnProperty.call(runtimeHost.modSettingDefaults, settingName)) return runtimeHost.modSettingDefaults[settingName];
                if (settingName.indexOf("intensity") !== -1) return 1;
                return false;
            }
            return settingText;
        };
        ctx.getProperty = function(property, compatibilitySetValue) { return arguments.length > 1 ? runtimeHost.setProperty(scene, property, compatibilitySetValue) : runtimeHost.getProperty(scene, property); };
        ctx.setProperty = function(property, value) { return runtimeHost.setProperty(scene, property, value); };
        ctx.getPropertyFromGroup = function(group, index, property) {
            return runtimeHost.getPropertyFromGroup(scene, group, index, property);
        };
        ctx.setPropertyFromGroup = function(group, index, property, value) {
            return runtimeHost.setPropertyFromGroup(scene, group, index, property, value);
        };
        ctx.triggerEvent = function(name, value1, value2) {
            return runtimeHost.queueEvent(scene, script, name, value1, value2);
        };
        ctx.debugPrint = function(message) {
            var text = runtimeHost.valueText(message);
            runtimeHost.extensionVariables(scene).get("LastDebugMessage").setString(text);
            runtimeHost.globalVariables(scene).getChild("LastDebugMessage").setString(text);
            runtimeHost.setDiagnostic(scene, "DebugPrint", id, path);
            console.log("[PsychLua:" + id + "] " + text);
        };
        ctx.close = function() { script.closeRequested = true; };
        ctx.print = ctx.debugPrint;
        runtimeHost.installLuaCompatibility(scene, script);
        script.state.global.setTimeout(Date.now() + 1000);
        script.state.doStringSync(source);
        script.state.doStringSync("collectgarbage('stop'); function __psych_runtime_gc_step(kb) collectgarbage('step', tonumber(kb) or 8); return collectgarbage('count') end; function __psych_runtime_gc_collect() collectgarbage('collect'); collectgarbage('stop'); return collectgarbage('count') end");
        script.gcStepFn = script.state.ctx.__psych_runtime_gc_step;
        script.gcCollectFn = script.state.ctx.__psych_runtime_gc_collect;
        if (typeof script.gcCollectFn === "function") {
            var initialGcStarted = runtimeHost.nowMs();
            script.luaMemoryKb = Number(script.gcCollectFn()) || 0;
            data.performance.gcFullCount += 1;
            var initialGcDuration = runtimeHost.nowMs() - initialGcStarted;
            if (initialGcDuration > data.performance.gcMaxStepMs) data.performance.gcMaxStepMs = initialGcDuration;
        }
        data.gcScripts.push(script);
        runtimeHost.installSmoothCamAdapter(scene, script, source);
        runtimeHost.indexScriptCallbacks(scene, script);
        script.state.global.setTimeout(undefined);
        runtimeHost.setScriptStatus(scene, id, path, true, false, false, "");
        runtimeHost.updateScriptCount(scene);
        if (script.closeRequested) runtimeHost.closeScript(scene, script);
        return !script.closed;
    } catch (error) {
        try { if (script.state) script.state.global.setTimeout(undefined); } catch (timeoutError) {}
        script.error = error && error.stack ? error.stack : String(error);
        script.disabled = true;
        runtimeHost.setScriptStatus(scene, id, path, false, true, false, script.error);
        runtimeHost.setLastError(scene, id, "load", error);
        runtimeHost.closeScript(scene, script);
        console.error("Psych Lua script load failed", id, error);
        return false;
    }
};

// BEGIN DYNAMIC CUSTOM EVENT LUA RESOLUTION 1.7.3
runtimeHost.normalizeManifestKey = runtimeHost.normalizeManifestKey || function(value) {
    var text = String(value || "").replace(/\\/g, "/").replace(/\.lua$/i, "");
    if (text.indexOf("/") >= 0) text = text.split("/").pop();
    if (typeof text.normalize === "function") text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return text.toLowerCase().replace(/[^a-z0-9]+/g, "");
};
runtimeHost.ensureCustomEventScripts = function(scene, eventName, eventArgs) {
    var name = String(eventName || "");
    var key = runtimeHost.normalizeManifestKey(name);
    if (!key) return [];
    var data = runtimeHost.ensureCompatibilityData(scene);
    data.pendingCustomEventLoads = data.pendingCustomEventLoads || new Map();
    var manifest = runtimeHost.getPsychLuaManifest(scene);
    var customMap = manifest && manifest.Index && manifest.Index.CustomEvents;
    var ids = customMap && customMap[key];
    if (!Array.isArray(ids)) ids = ids ? [ids] : [];
    var loadedIds = [];
    for (var i = 0; i < ids.length; i += 1) {
        var id = String(ids[i] || "");
        if (!id) continue;
        var existing = data.scripts.get(id);
        if (existing && !existing.closed && !existing.disabled) {
            loadedIds.push(id);
            continue;
        }
        if (data.pendingCustomEventLoads.has(id)) continue;
        var entry = null;
        var scripts = manifest && Array.isArray(manifest.Scripts) ? manifest.Scripts : [];
        for (var j = 0; j < scripts.length; j += 1) {
            if (String(scripts[j].Id || scripts[j].Path || "") === id) { entry = scripts[j]; break; }
        }
        if (!entry) continue;
        (function(entryCopy, idCopy) {
            var pending = runtimeHost.loadManifestEntry(scene, entryCopy, idCopy, entryCopy.Path)
                .then(function(loaded) {
                    if (!loaded) return;
                    runtimeHost.dispatch(scene, idCopy, "onCreate", []);
                    var createPostSent = false;
                    try { createPostSent = scene.getVariables().get("PsychLuaLifecycle").getChild("CreatePostSent").getAsBoolean(); } catch (error) {}
                    if (createPostSent) runtimeHost.dispatch(scene, idCopy, "onCreatePost", []);
                    if (eventArgs) runtimeHost.dispatch(scene, idCopy, "onEvent", eventArgs);
                    data.customEventDynamicLoadCount = (Number(data.customEventDynamicLoadCount) || 0) + 1;
                })
                .catch(function(error) {
                    runtimeHost.setLastError(scene, idCopy, "customEventAutoLoad", error);
                    console.error("Psych Lua custom-event dynamic load failed", idCopy, name, error);
                })
                .finally(function() { data.pendingCustomEventLoads.delete(idCopy); });
            data.pendingCustomEventLoads.set(idCopy, pending);
        })(entry, id);
    }
    return loadedIds;
};
// END DYNAMIC CUSTOM EVENT LUA RESOLUTION 1.7.3

// BEGIN SEPARATE RAW LUA RESOURCE LOADER 1.9.2
runtimeHost.sourceTextCache = runtimeHost.sourceTextCache || new Map();
runtimeHost.sourceTextRequests = runtimeHost.sourceTextRequests || new Map();
runtimeHost.writeSourceFileStatus = function(scene, patch) {
    if (!scene) return;
    var root = scene.getGame().getVariables().get("PsychLuaRuntime").getChild("SourceFiles");
    var read = function(name) { try { return root.getChild(name).getAsNumber(); } catch (error) { return 0; } };
    var write = function(name, method, value) {
        try { root.getChild(name)[method](value); } catch (error) {}
    };
    if (patch.requested) write("Requested", "setNumber", read("Requested") + patch.requested);
    if (patch.loaded) write("Loaded", "setNumber", read("Loaded") + patch.loaded);
    if (patch.failed) write("Failed", "setNumber", read("Failed") + patch.failed);
    if (patch.cacheHit) write("CacheHits", "setNumber", read("CacheHits") + patch.cacheHit);
    if (patch.bytes) write("Bytes", "setNumber", read("Bytes") + patch.bytes);
    write("Pending", "setNumber", runtimeHost.sourceTextRequests.size);
    if (patch.resourceName !== undefined) write("LastResource", "setString", String(patch.resourceName || ""));
    if (patch.error !== undefined) write("LastError", "setString", String(patch.error || ""));
};
runtimeHost.readManifestEntrySource = function(scene, entry) {
    if (entry && typeof entry.Source === "string" && entry.Source.length) {
        return Promise.resolve(entry.Source);
    }
    var resourceName = String(entry && entry.ResourceName || "");
    if (!resourceName) return Promise.reject(new Error("Lua index entry has no ResourceName"));
    if (runtimeHost.sourceTextCache.has(resourceName)) {
        runtimeHost.writeSourceFileStatus(scene, { cacheHit: 1, resourceName: resourceName });
        return Promise.resolve(runtimeHost.sourceTextCache.get(resourceName));
    }
    if (runtimeHost.sourceTextRequests.has(resourceName)) {
        runtimeHost.writeSourceFileStatus(scene, { cacheHit: 1, resourceName: resourceName });
        return runtimeHost.sourceTextRequests.get(resourceName);
    }
    runtimeHost.writeSourceFileStatus(scene, { requested: 1, resourceName: resourceName, error: "" });
    var request = new Promise(function(resolve, reject) {
        try {
            var loader = scene.getGame().getResourceLoader();
            var resource = loader.getResource(resourceName);
            if (!resource || !resource.file) throw new Error("GDevelop resource not found: " + resourceName);
            var url = loader.getFullUrl(resource.file);
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.responseType = "text";
            try {
                if (typeof loader.checkIfCredentialsRequired === "function" &&
                    loader.checkIfCredentialsRequired(resource.file)) xhr.withCredentials = true;
            } catch (credentialsError) {}
            xhr.onload = function() {
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 0) {
                    var source = String(xhr.responseText || "");
                    if (!source.trim()) {
                        reject(new Error("Raw Lua resource is empty: " + resourceName));
                        return;
                    }
                    runtimeHost.sourceTextCache.set(resourceName, source);
                    runtimeHost.writeSourceFileStatus(scene, {
                        loaded: 1, bytes: source.length, resourceName: resourceName, error: ""
                    });
                    resolve(source);
                    return;
                }
                reject(new Error("Raw Lua request failed (" + xhr.status + "): " + resourceName));
            };
            xhr.onerror = function() {
                reject(new Error("Network/file error while reading raw Lua resource: " + resourceName));
            };
            xhr.send();
        } catch (error) {
            reject(error);
        }
    }).catch(function(error) {
        runtimeHost.writeSourceFileStatus(scene, {
            failed: 1,
            resourceName: resourceName,
            error: error && error.stack ? error.stack : String(error)
        });
        throw error;
    }).finally(function() {
        runtimeHost.sourceTextRequests.delete(resourceName);
        runtimeHost.writeSourceFileStatus(scene, { resourceName: resourceName });
    });
    runtimeHost.sourceTextRequests.set(resourceName, request);
    runtimeHost.writeSourceFileStatus(scene, { resourceName: resourceName });
    return request;
};
runtimeHost.findManifestEntry = function(scene, id, scriptPath) {
    var manifest = runtimeHost.getPsychLuaManifest(scene);
    if (!manifest) throw new Error("FORPsychLuaSources index resource is not loaded");
    var scripts = Array.isArray(manifest.Scripts) ? manifest.Scripts : [];
    var normalizedPath = String(scriptPath || "").replace(/\\/g, "/").toLowerCase();
    var normalizedId = String(id || "").toLowerCase();
    for (var i = 0; i < scripts.length; i += 1) {
        var candidatePath = String(scripts[i].Path || "").replace(/\\/g, "/").toLowerCase();
        var candidateId = String(scripts[i].Id || "").toLowerCase();
        if ((normalizedPath && candidatePath === normalizedPath) ||
            (normalizedId && candidateId === normalizedId)) return scripts[i];
    }
    throw new Error("Lua script not found in FORPsychLuaSources index: " + (scriptPath || id));
};
runtimeHost.loadManifestEntry = function(scene, entry, id, scriptPath) {
    var actualId = String(id || entry.Id || entry.Path || "script");
    var actualPath = String(scriptPath || entry.Path || actualId);
    return runtimeHost.readManifestEntrySource(scene, entry).then(function(source) {
        if (scene.getGame().getSceneStack().getCurrentScene() !== scene) return false;
        return runtimeHost.loadSource(scene, actualId, actualPath, source);
    });
};
runtimeHost.loadManifestScript = function(scene, id, scriptPath) {
    var entry = runtimeHost.findManifestEntry(scene, id, scriptPath);
    return runtimeHost.loadManifestEntry(scene, entry, id || entry.Id, scriptPath || entry.Path);
};
// END SEPARATE RAW LUA RESOURCE LOADER 1.9.2
runtimeHost.dispatch = function(scene, requestedId, callback, args) {
    if (callback === "onEvent") {
        args = (args || []).map(value => value == null || value === "null" ? "" : value);
        runtimeHost.ensureCustomEventScripts(scene, args[0], args);
    }
    var data = runtimeHost.getSceneData(scene);
    var elapsed = Number(args && args[0]) || 0;
    var frameStartedAt = callback === "onUpdate" ? runtimeHost.nowMs() : 0;
    if (callback === "onUpdate" && data.scripts.size === 0) {
        runtimeHost.beginPerformanceFrame(scene, elapsed);
        runtimeHost.applyPsychCameraZoomDecay(scene, elapsed);
        runtimeHost.finishPerformanceFrame(scene, frameStartedAt);
        return "##PSYCHLUA_FUNCTIONCONTINUE";
    }
    if (callback === "onUpdate") runtimeHost.tickCompatibility(scene, elapsed);
    var stopValues = runtimeHost.stopValues || (runtimeHost.stopValues = {
        "##PSYCHLUA_FUNCTIONSTOP": true,
        "##PSYCHLUA_FUNCTIONSTOPLUA": true,
        "##PSYCHLUA_FUNCTIONSTOPHSCRIPT": true,
        "##PSYCHLUA_FUNCTIONSTOPALL": true
    });
    var targets;
    if (requestedId) {
        var requested = data.scripts.get(String(requestedId));
        targets = requested ? requested.singleTarget : data.emptyCallbackTargets;
    } else {
        targets = runtimeHost.callbackTargets(scene, callback);
    }
    var snapshot = targets.length ? runtimeHost.buildLuaGlobalSnapshot(scene, callback, args) : null;
    var resultText = "##PSYCHLUA_FUNCTIONCONTINUE";
    var stopped = false;
    var failed = false;
    var lastError = "";
    for (var i = 0; i < targets.length; i += 1) {
        var script = targets[i];
        if (script.closed || script.disabled) continue;
        try {
            var fn = script.callbackFunctions && script.callbackFunctions[callback];
            if (typeof fn !== "function") continue;
            runtimeHost.syncLuaGlobals(scene, script, callback, args, snapshot);
            data.performance.callbackDispatches += 1;
            if (script.smoothCamLuaOnly) {
                var smoothStatus = runtimeHost.ensureCompatibilityData(scene).smoothCamAdapter;
                if (smoothStatus) {
                    smoothStatus.callbackCount = (Number(smoothStatus.callbackCount) || 0) + 1;
                    if (callback === "onUpdate") smoothStatus.updateCount = (Number(smoothStatus.updateCount) || 0) + 1;
                    smoothStatus.lastCallback = String(callback || "");
                    runtimeHost.writeSmoothCamStatus(scene);
                }
            }
            script.activeCallback = callback;
            script.state.global.setTimeout(Date.now() + 250);
            var result = fn.apply(null, args);
            script.state.global.setTimeout(undefined);
            script.activeCallback = "";
            runtimeHost.queueLuaGc(scene, script);
            runtimeHost.writeStageBridgeStatus(scene);
            resultText = result === null || typeof result === "undefined" ?
                "##PSYCHLUA_FUNCTIONCONTINUE" : runtimeHost.valueText(result);
            if (callback === "onCreate" || callback === "onCreatePost" || callback === "onEvent") {
                runtimeHost.indexScriptCallbacks(scene, script);
            }
            if (stopValues[resultText]) { stopped = true; break; }
            if (script.closeRequested) runtimeHost.closeScript(scene, script);
        } catch (error) {
            try { script.state.global.setTimeout(undefined); } catch (timeoutError) {}
            script.activeCallback = "";
            script.error = error && error.stack ? error.stack : String(error);
            script.disabled = true;
            runtimeHost.unindexScriptCallbacks(scene, script);
            runtimeHost.setScriptStatus(scene, script.id, script.path, true, true, false, script.error);
            runtimeHost.setLastError(scene, script.id, callback, error);
            lastError = script.error;
            console.error("Psych Lua callback failed", script.id, callback, error);
            failed = true;
        }
    }
    if (callback === "onUpdate") {
        runtimeHost.applyPsychCameraZoomDecay(scene, elapsed);
        var postTargets = runtimeHost.callbackTargets(scene, "onUpdatePost");
        var postSnapshot = postTargets.length ? (snapshot || runtimeHost.buildLuaGlobalSnapshot(scene, "onUpdatePost", args)) : null;
        for (var postIndex = 0; postIndex < postTargets.length; postIndex += 1) {
            runtimeHost.callAuxCallback(scene, postTargets[postIndex], "onUpdatePost", args, postSnapshot);
        }
        runtimeHost.applyForcedCamera(scene);
        runtimeHost.stepLuaGarbage(scene, elapsed);
        runtimeHost.finishPerformanceFrame(scene, frameStartedAt);
        runtimeHost.writePerformanceStatus(scene);
    } else if (callback === "onPause") {
        runtimeHost.collectLuaGarbage(scene, true);
    }
    var hotCallback = callback === "onUpdate" || callback === "onStepHit" || callback === "onBeatHit";
    if (!hotCallback || failed || stopped || runtimeHost.shouldWriteDiagnostic(scene, "lastCall")) {
        runtimeHost.writeLastCall(scene, requestedId, callback, resultText, stopped, !stopped, failed, lastError);
    }
    runtimeHost.incrementStat(scene, "CallCount");
    return resultText;
};
runtimeHost.destroy = function(scene, id) {
    var data = runtimeHost.getSceneData(scene);
    if (id) {
        runtimeHost.closeScript(scene, data.scripts.get(String(id)));
    } else {
        var scripts = [];
        data.scripts.forEach(function(script) { scripts.push(script); });
        for (var i = 0; i < scripts.length; i += 1) runtimeHost.closeScript(scene, scripts[i]);
        data.eventQueue.length = 0;
        runtimeHost.syncEvent(scene);
    }
};
// Explicitly request the external JSON resource. getLoadedJson only inspects the cache;
// loadJson performs the asynchronous resource request and reports success or failure.
runtimeHost.ensurePsychLuaManifest(runtimeScene);
if (runtimeHost.factory) {
    var readyVersion = globalThis.PsychLuaRuntime.runtimeVersion || "Lua 5.1";
    extensionState.get("Runtime").getChild("Version").setString(readyVersion);
    psychState.getChild("Version").setString(readyVersion);
    setPsychState("Ready", true, false, "");
} else if (!runtimeHost.initializing && !runtimeHost.failed) {
    runtimeHost.initializing = true;
    setPsychState("Initializing", false, false, "");
    try {
        if (!globalThis.PsychLuaRuntime) {
            /* PsychLuaRuntime standalone; Lua 5.1 WASM is embedded. */
            (function(root){root.__PSYCH_LUA_WASM_URI__="data:application/octet-stream;base64,AGFzbQEAAAAB6AElYAF/AX9gA39/fwF/YAR/f39/AX9gAn9/AGACf38Bf2ADf39/AGABfwBgBH9/f38AYAV/fn5+fgBgAAF/YAV/f39/fwF/YAN/fn8BfmAAAGAFf39/f38AYAF8AXxgAnx8AXxgBH9+fn8AYAJ/fwF8YAJ/fABgBn9/f39/fwF/YAN8fH8BfGACfH8BfGAGf3x/f39/AX9gAAF8YAN/f3wBfGACfH8Bf2AAAX5gA39+fwF/YAF/AX5gAX4Bf2ACf34AYAJ/fwF+YAJ+fwF/YAN/f34AYAR+fn5+AX9gA35+fgF/YAJ+fgF8ArcFGwNlbnYEZXhpdAAGA2VudgppbnZva2VfdmlpAAUDZW52CHN0cmZ0aW1lAAIDZW52FGVtc2NyaXB0ZW5fbWVtY3B5X2pzAAUDZW52E2Vtc2NyaXB0ZW5fZGF0ZV9ub3cAFwNlbnYgX2Vtc2NyaXB0ZW5fZ2V0X25vd19pc19tb25vdG9uaWMACQNlbnYQX19zeXNjYWxsX29wZW5hdAACA2VudhFfX3N5c2NhbGxfZmNudGw2NAABA2Vudg9fX3N5c2NhbGxfaW9jdGwAARZ3YXNpX3NuYXBzaG90X3ByZXZpZXcxCGZkX3dyaXRlAAIWd2FzaV9zbmFwc2hvdF9wcmV2aWV3MQdmZF9yZWFkAAIWd2FzaV9zbmFwc2hvdF9wcmV2aWV3MQhmZF9jbG9zZQAAA2Vudg5fX3N5c2NhbGxfZHVwMwABFndhc2lfc25hcHNob3RfcHJldmlldzERZW52aXJvbl9zaXplc19nZXQABBZ3YXNpX3NuYXBzaG90X3ByZXZpZXcxC2Vudmlyb25fZ2V0AAQDZW52El9fc3lzY2FsbF91bmxpbmthdAABA2Vudg9fX3N5c2NhbGxfcm1kaXIAAANlbnYSX19zeXNjYWxsX3JlbmFtZWF0AAIDZW52El9lbXNjcmlwdGVuX3N5c3RlbQAAA2VudhRfX3N5c2NhbGxfcmVhZGxpbmthdAACA2VudglfdHpzZXRfanMABQNlbnYWZW1zY3JpcHRlbl9yZXNpemVfaGVhcAAAA2VudhlfZW1zY3JpcHRlbl90aHJvd19sb25nam1wAAwWd2FzaV9zbmFwc2hvdF9wcmV2aWV3MQdmZF9zZWVrAAoDZW52Cl9ta3RpbWVfanMAAANlbnYNX2xvY2FsdGltZV9qcwAFA2VudgpfZ210aW1lX2pzAAUDnQSbBAwEBQQAAAMDAwMDBAQEBAQEAQEBEQQEAQQEBAQEBhIDBQMBAQUDAwADBQMFBQQDAwUDBQQEBQIDAQMCAQABAAQDBAUEAQEBAQEDAgIBBAEFBQMRGAQBAQEFAgIAAwUDBgYEBQQBAgEECQIAAAAAAAAAAAAAAAAAAwAAAAEAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAQoAAgUFBQMNAwQBBQMDBQUEAwQFAwEKBQcHAAAAAAMGAAAAAAAAAAAAAAACAAAAAQEBAQIBBQUGAQMBAwMFAQQFBAMECgMFAQEDAAEGBgEGAAYAAwYFBQYAAAAAAAAAAAABAAAAAQAABAAABQAAAAAAAAAABAUDAwEGBAYABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEwIAAAAAAAAAAAQAAQAAAAAEBAEBBQAAAAAAAAAAAAAAAAIGBgMBBwYFDQMDBwMFBgUHAwMDAgQDBgMDAQAAAAACAAQAAAAAAAEHAAAAAAAAAAQHBQEEAQQBAQEAAAAAAAAAAAAAAAUBAQECBAAABAQHBwECAQUKAw0AAQEODg8ZFA8BARoODgAAAAABAAsBAQAEBAADAwMBFRscAQIAAAABAQ8dFQQEBQULAwQEBAQEAAABBB4ACBAIBx8BFAYMAwITBQAFIA0WBSEBBAAAAQAGBAQIECIjCAMCAwYSAwMQCAgIJAkGAAwJCQkKBAUBcACxAQUHAQGAAoCAAgYYBH8BQcDsgQILfwFBAAt/AUEAC38BQQALB6gRigEGbWVtb3J5AgARX193YXNtX2NhbGxfY3RvcnMAGw5sdWFfY2hlY2tzdGFjawAcCWx1YV94bW92ZQAdC2x1YV9hdHBhbmljAB4NbHVhX25ld3RocmVhZAAfCmx1YV9nZXR0b3AAIApsdWFfc2V0dG9wACEKbHVhX3JlbW92ZQAiCmx1YV9pbnNlcnQAIwtsdWFfcmVwbGFjZQAkDWx1YV9wdXNodmFsdWUAJQhsdWFfdHlwZQAmDGx1YV90eXBlbmFtZQAnD2x1YV9pc2NmdW5jdGlvbgAoDGx1YV9pc251bWJlcgApDGx1YV9pc3N0cmluZwAqDmx1YV9pc3VzZXJkYXRhACsMbHVhX3Jhd2VxdWFsACwJbHVhX2VxdWFsAC0MbHVhX2xlc3N0aGFuAC4MbHVhX3RvbnVtYmVyAC8NbHVhX3RvaW50ZWdlcgAwDWx1YV90b2Jvb2xlYW4AMQ1sdWFfdG9sc3RyaW5nADIKbHVhX29iamxlbgAzD2x1YV90b2NmdW5jdGlvbgA0Dmx1YV90b3VzZXJkYXRhADUMbHVhX3RvdGhyZWFkADYNbHVhX3RvcG9pbnRlcgA3C2x1YV9wdXNobmlsADgObHVhX3B1c2hudW1iZXIAOQ9sdWFfcHVzaGludGVnZXIAOg9sdWFfcHVzaGxzdHJpbmcAOw5sdWFfcHVzaHN0cmluZwA8EGx1YV9wdXNodmZzdHJpbmcAPQ9sdWFfcHVzaGZzdHJpbmcAPhBsdWFfcHVzaGNjbG9zdXJlAD8PbHVhX3B1c2hib29sZWFuAEAVbHVhX3B1c2hsaWdodHVzZXJkYXRhAEEObHVhX3B1c2h0aHJlYWQAQgxsdWFfZ2V0dGFibGUAQwxsdWFfZ2V0ZmllbGQARApsdWFfcmF3Z2V0AEULbHVhX3Jhd2dldGkARg9sdWFfY3JlYXRldGFibGUARxBsdWFfZ2V0bWV0YXRhYmxlAEgLbHVhX2dldGZlbnYASQxsdWFfc2V0dGFibGUASgxsdWFfc2V0ZmllbGQASwpsdWFfcmF3c2V0AEwLbHVhX3Jhd3NldGkATRBsdWFfc2V0bWV0YXRhYmxlAE4LbHVhX3NldGZlbnYATwhsdWFfY2FsbABQCWx1YV9wY2FsbABRCmx1YV9jcGNhbGwAUwhsdWFfbG9hZABVCGx1YV9kdW1wAFYKbHVhX3N0YXR1cwBXBmx1YV9nYwBYCWx1YV9lcnJvcgBZCGx1YV9uZXh0AFoKbHVhX2NvbmNhdABbDWx1YV9nZXRhbGxvY2YAXA1sdWFfc2V0YWxsb2NmAF0PbHVhX25ld3VzZXJkYXRhAF4ObHVhX2dldHVwdmFsdWUAXw5sdWFfc2V0dXB2YWx1ZQBgGV9faW5kaXJlY3RfZnVuY3Rpb25fdGFibGUBAA1sdWFMX2FyZ2Vycm9yAGEMbHVhX2dldHN0YWNrAN0BCmx1YUxfZXJyb3IAYgtsdWFfZ2V0aW5mbwDgAQ1sdWFMX3R5cGVycm9yAGMKbHVhTF93aGVyZQBkEGx1YUxfY2hlY2tvcHRpb24AZQ9sdWFMX29wdGxzdHJpbmcAZhFsdWFMX2NoZWNrbHN0cmluZwBnEWx1YUxfbmV3bWV0YXRhYmxlAGgPbHVhTF9jaGVja3VkYXRhAGkPbHVhTF9jaGVja3N0YWNrAGoObHVhTF9jaGVja3R5cGUAaw1sdWFMX2NoZWNrYW55AGwQbHVhTF9jaGVja251bWJlcgBtDmx1YUxfb3B0bnVtYmVyAG4RbHVhTF9jaGVja2ludGVnZXIAbw9sdWFMX29wdGludGVnZXIAcBFsdWFMX2dldG1ldGFmaWVsZABxDWx1YUxfY2FsbG1ldGEAcg1sdWFMX3JlZ2lzdGVyAHMJbHVhTF9nc3ViAHUPbHVhTF9wcmVwYnVmZmVyAHYNbHVhTF9idWZmaW5pdAB3D2x1YUxfYWRkbHN0cmluZwB4Dmx1YUxfYWRkc3RyaW5nAHkPbHVhTF9wdXNocmVzdWx0AHoNbHVhTF9hZGR2YWx1ZQB7CGx1YUxfcmVmAHwKbHVhTF91bnJlZgB9DWx1YUxfbG9hZGZpbGUAfg9sdWFMX2xvYWRidWZmZXIAgAEPbHVhTF9sb2Fkc3RyaW5nAIIBDWx1YUxfbmV3c3RhdGUAgwEMbHVhX25ld3N0YXRlAIADBGZyZWUAmgQHcmVhbGxvYwCcBAxsdWFvcGVuX2Jhc2UAhgEJbHVhX3lpZWxkAPEBCmx1YV9yZXN1bWUA7wENbHVhb3Blbl9kZWJ1ZwDIAQ9sdWFfZ2V0aG9va21hc2sA2wELbHVhX2dldGhvb2sA2gEQbHVhX2dldGhvb2tjb3VudADcAQxsdWFfZ2V0bG9jYWwA3gELbHVhX3NldGhvb2sA2QEMbHVhX3NldGxvY2FsAN8BBm1hbGxvYwCZBAtzZXRUZW1wUmV0MAClBA1sdWFMX29wZW5saWJzAIUCD2x1YW9wZW5fcGFja2FnZQDMAg1sdWFvcGVuX3RhYmxlAKYDCmx1YW9wZW5faW8AhgIKbHVhb3Blbl9vcwDfAg5sdWFvcGVuX3N0cmluZwCGAwxsdWFvcGVuX21hdGgArAIGZmZsdXNoANIDCWx1YV9jbG9zZQCCAwhzZXRUaHJldwCiBBVlbXNjcmlwdGVuX3N0YWNrX2luaXQAsQQZZW1zY3JpcHRlbl9zdGFja19nZXRfZnJlZQCyBBllbXNjcmlwdGVuX3N0YWNrX2dldF9iYXNlALMEGGVtc2NyaXB0ZW5fc3RhY2tfZ2V0X2VuZAC0BAlzdGFja1NhdmUArgQMc3RhY2tSZXN0b3JlAK8ECnN0YWNrQWxsb2MAsAQcZW1zY3JpcHRlbl9zdGFja19nZXRfY3VycmVudACuBAxkeW5DYWxsX2ppamkAtQQJ5AIBAEEBC7ABUlR/gQGEAYUBhwGIAYkBigGLAZYBqwGlAaYBqAGpAaoBrAGMAY0BjgGPAZABkQGTAZQBlQGXAZgBmQGaAZsBnAGdAZ4BnwGgAaEBogGjAaQBzAHJAcoBywHOAc8B0AHRAdIB0wHUAdUB1gHXAdgB8AHzAbQD6wKGAcwCpgOGAt8ChgOsAsgBhwKIAokCjQKKApcCmAKaApsCnAKdAp4CnwKgAqECiwKMAo4CkAKRApIClAKVAq0CrgKvArACsQKyArMCtAK1ArYCtwK4ArkCugK7ArwCvQK+Ar8CwALBAsICwwLEAsUCxgLHAsgCzQLOAs8C0ALRAtIC1ALWAtcC4ALhAuIC4wLkAuUC5gLnAugC6QLqAoEDgwOKA5ADhwOIA4kDiwONA44DjwORA5QDlQOWA5cDmAOZA5oDpwOoA6kDqgOrA6wDrQOuA68D1wPYA9kD2gPpA/MDkQSUBAqi2QqbBNUBAQN/QcDsgQIkA0HA7AEkAgNAIABBBHQiAUGk5AFqIAFBoOQBaiICNgIAIAFBqOQBaiACNgIAIABBAWoiAEHAAEcNAAtBMBCWBBojAEEQayIAJAACQCAAQQxqIABBCGoQDQ0AQeTPASAAKAIMQQJ0QQRqEJcEIgE2AgAgAUUNACAAKAIIEJcEIgEEQEHkzwEoAgAgACgCDEECdGpBADYCAEHkzwEoAgAgARAORQ0BC0HkzwFBADYCAAsgAEEQaiQAQeDRAUG00AE2AgBBmNEBQSo2AgALcAEDfwJAIAFBwD5KDQAgACgCCCIDIAAoAgxrQQR1IAFqQcA+Sg0AQQEhAiABQQBMDQAgAUEEdCIEIAAoAhwgA2tOBH8gACABEOoBIAAoAggFIAMLIARqIgEgACgCFCIAKAIITQ0AIAAgATYCCAsgAgvrAQEGfwJAIAAgAUYNACAAIAAoAgggAkEEdGs2AgggAkEATA0AIAJBAUcEQCACQf7///8HcSEHA0AgACgCCCEDIAEgASgCCCIFQRBqNgIIIAUgAyAEQQR0IghqIgMpAwA3AwAgBSADKAIINgIIIAAoAgghAyABIAEoAggiBUEQajYCCCAFIAMgCGoiAykDEDcDACAFIAMoAhg2AgggBEECaiEEIAZBAmoiBiAHRw0ACwsgAkEBcUUNACAAKAIIIQIgASABKAIIIgBBEGo2AgggACACIARBBHRqIgEpAwA3AwAgACABKAIINgIICwsVAQF/IAAoAhAiACgCWCAAIAE2AlgL+wIBBH8gACgCECIBKAJEIAEoAkBPBEAgABD9AQsgACAAQQBBAEH4ABDKAiIBQQgQhAIgACgCECECIAFBADYCICABIAI2AhAgAUEANgJEIAFBADYCaCABQgA3AjwgAUGAAjsBOCABQgA3AyggAUEAOgAGIAFCADcDcCABQgA3AhQgAUEANgJQIAFCADcDMCAAQQBBAEHAARDKAiECIAFBCDYCMCABIAI2AhQgASACNgIoIAEgAkGoAWo2AiQgAEEAQQBB0AUQygIhAiABQS02AiwgASACNgIgIAEgAkHwBGo2AhwgASgCFCIDIAI2AgQgASACQRBqIgQ2AgggAkEANgIIIAMgBDYCACABIAQ2AgwgAyACQdACajYCCCABIAApA0g3A0ggASAAKAJQNgJQIAEgAC0AODoAOCABIAAoAjwiAjYCPCAAKAJEIQMgASACNgJAIAEgAzYCRCAAKAIIIgJBCDYCCCACIAE2AgAgACAAKAIIQRBqNgIIIAELEAAgACgCCCAAKAIMa0EEdQtVAQF/AkAgAUEATgRAIAAoAggiAiAAKAIMIAFBBHRqIgFPDQEDQCACQQA2AgggAkEQaiICIAFJDQALDAELIAAoAgggAUEEdGpBEGohAQsgACABNgIIC4gCAQJ/An8gAUEASgRAQYA/IAAoAgwgAUEEdGpBEGsiASABIAAoAghPGwwBCyABQfGxf04EQCAAKAIIIAFBBHRqDAELAkACQAJAAkAgAUGSzgBqDgMCAQADCyAAKAIQQeAAagwDCyAAKAIUKAIEKAIAKAIMIQEgAEEFNgJgIAAgATYCWCAAQdgAagwCCyAAQcgAagwBC0GAPyAAKAIUKAIEKAIAIgJBACABa0EEdGpBmOIJayACLQAHQe6xfyABa0kbCyIBQRBqIgIgACgCCCIDSQRAA0AgASABKQMQNwMAIAEgASgCGDYCCCACIgFBEGoiAiAAKAIIIgNJDQALCyAAIANBEGs2AggLkgIBAn8CfyABQQBKBEBBgD8gACgCDCABQQR0akEQayIBIAEgACgCCE8bDAELIAFB8bF/TgRAIAAoAgggAUEEdGoMAQsCQAJAAkACQCABQZLOAGoOAwIBAAMLIAAoAhBB4ABqDAMLIAAoAhQoAgQoAgAoAgwhASAAQQU2AmAgACABNgJYIABB2ABqDAILIABByABqDAELQYA/IAAoAhQoAgQoAgAiAkEAIAFrQQR0akGY4glrIAItAAdB7rF/IAFrSRsLIgMgAyAAKAIIIgFJBEADQCABIAFBEGsiAikDADcDACABIAFBCGsoAgA2AgggAiIBIANLDQALIAAoAgghAQsgASkDADcDACADIAEoAgg2AggLrgMBAn8CQAJAIAFB77F/RgRAIAAoAhQgACgCKEcNASAAQcoLQQAQ5AEMAQsCfyABQQBKBEBBgD8gACgCDCABQQR0akEQayICIAIgACgCCE8bDAELIAFB8bF/TgRAIAAoAgggAUEEdGoMAQsCQAJAAkAgAUGSzgBqDgMABAIBCyAAQcgAagwCC0GAPyAAKAIUKAIEKAIAIgJBACABa0EEdGpBmOIJayACLQAHQe6xfyABa0kbDAELIAAoAhBB4ABqCyICIAAoAggiA0EQaykDADcDACACIANBCGsoAgA2AgggAUHtsX9KDQEgACgCCCIBQQhrKAIAQQRIDQEgAUEQaygCACIBLQAFQQNxRQ0BIAAoAhQoAgQoAgAiAi0ABUEEcUUNASAAIAIgARCDAgwBCyAAKAIUIgEoAgQoAgAoAgwhAiAAQQU2AmAgACACNgJYIAEoAgQoAgAiASAAKAIIQRBrKAIANgIMIAAoAggiAkEIaygCAEEESA0AIAJBEGsoAgAiAi0ABUEDcUUNACABLQAFQQRxRQ0AIAAgASACEIMCCyAAIAAoAghBEGs2AggL6gEBAX8CfyABQQBKBEBBgD8gACgCDCABQQR0akEQayIBIAEgACgCCE8bDAELIAFB8bF/TgRAIAAoAgggAUEEdGoMAQsCQAJAAkACQCABQZLOAGoOAwIBAAMLIAAoAhBB4ABqDAMLIAAoAhQoAgQoAgAoAgwhASAAQQU2AmAgACABNgJYIABB2ABqDAILIABByABqDAELQYA/IAAoAhQoAgQoAgAiAkEAIAFrQQR0akGY4glrIAItAAdB7rF/IAFrSRsLIQEgACgCCCICIAEpAwA3AwAgAiABKAIINgIIIAAgACgCCEEQajYCCAvmAQEBfwJAAkAgAUEASgRAQX8hAiAAKAIMIAFBBHRqQRBrIgEgACgCCEkNAQwCCyABQfGxf04EQCAAKAIIIAFBBHRqIQEMAQsCQAJAAkACQCABQZLOAGoOAwIBAAMLIAAoAhBB4ABqIQEMAwsgACgCFCgCBCgCACgCDCEBIABBBTYCYCAAIAE2AlggAEHYAGohAQwCCyAAQcgAaiEBDAELQX8hAiAAKAIUKAIEKAIAIgAtAAdB7rF/IAFrSQ0BIABBACABa0EEdGpBmOIJayEBCyABQYA/RgRAQX8PCyABKAIIIQILIAILGwAgAUF/RgRAQY4eDwsgAUECdEHwxABqKAIAC98BAAJ/IAFBAEoEQEGAPyAAKAIMIAFBBHRqQRBrIgEgASAAKAIITxsMAQsgAUHxsX9OBEAgACgCCCABQQR0agwBCwJAAkACQAJAIAFBks4Aag4DAgEAAwsgACgCEEHgAGoMAwsgACgCFCgCBCgCACgCDCEBIABBBTYCYCAAIAE2AlggAEHYAGoMAgsgAEHIAGoMAQtBgD8gACgCFCgCBCgCACIAQQAgAWtBBHRqQZjiCWsgAC0AB0HusX8gAWtJGwshAUEAIQAgASgCCEEGRgR/IAEoAgAtAAZBAEcFQQALC/EBAQF/IwBBEGsiAiQAAn8gAUEASgRAQYA/IAAoAgwgAUEEdGpBEGsiASABIAAoAghPGwwBCyABQfGxf04EQCAAKAIIIAFBBHRqDAELAkACQAJAAkAgAUGSzgBqDgMCAQADCyAAKAIQQeAAagwDCyAAKAIUKAIEKAIAKAIMIQEgAEEFNgJgIAAgATYCWCAAQdgAagwCCyAAQcgAagwBC0GAPyAAKAIUKAIEKAIAIgBBACABa0EEdGpBmOIJayAALQAHQe6xfyABa0kbCyEBQQEhACABKAIIQQNHBEAgASACELgDQQBHIQALIAJBEGokACAAC+QBAQF/AkACQCABQQBKBEAgACgCDCABQQR0akEQayIBIAAoAghJDQEMAgsgAUHxsX9OBEAgACgCCCABQQR0aiEBDAELAkACQAJAAkAgAUGSzgBqDgMCAQADCyAAKAIQQeAAaiEBDAMLIAAoAhQoAgQoAgAoAgwhASAAQQU2AmAgACABNgJYIABB2ABqIQEMAgsgAEHIAGohAQwBCyAAKAIUKAIEKAIAIgAtAAdB7rF/IAFrSQ0BIABBACABa0EEdGpBmOIJayEBCyABQYA/RgRAQQAPCyABKAIIQQNrQQJJIQILIAILzgEAAn8gAUEASgRAQYA/IAAoAgwgAUEEdGpBEGsiASABIAAoAghPGwwBCyABQfGxf04EQCAAKAIIIAFBBHRqDAELAkACQAJAAkAgAUGSzgBqDgMCAQADCyAAKAIQQeAAagwDCyAAKAIUKAIEKAIAKAIMIQEgAEEFNgJgIAAgATYCWCAAQdgAagwCCyAAQcgAagwBC0GAPyAAKAIUKAIEKAIAIgBBACABa0EEdGpBmOIJayAALQAHQe6xfyABa0kbCygCCCIAQQdGIABBAkZyC6YDAQF/An8gAUEASgRAQYA/IAAoAgwgAUEEdGpBEGsiASABIAAoAghPGwwBCyABQfGxf04EQCAAKAIIIAFBBHRqDAELAkACQAJAAkAgAUGSzgBqDgMCAQADCyAAKAIQQeAAagwDCyAAKAIUKAIEKAIAKAIMIQEgAEEFNgJgIAAgATYCWCAAQdgAagwCCyAAQcgAagwBC0GAPyAAKAIUKAIEKAIAIgNBACABa0EEdGpBmOIJayADLQAHQe6xfyABa0kbCyEBAn8gAkEASgRAQYA/IAAoAgwgAkEEdGpBEGsiAiACIAAoAghPGwwBCyACQfGxf04EQCAAKAIIIAJBBHRqDAELAkACQAJAAkAgAkGSzgBqDgMCAQADCyAAKAIQQeAAagwDCyAAKAIUKAIEKAIAKAIMIQIgAEEFNgJgIAAgAjYCWCAAQdgAagwCCyAAQcgAagwBC0GAPyAAKAIUKAIEKAIAIgBBACACa0EEdGpBmOIJayAALQAHQe6xfyACa0kbCyECQQAhAAJAIAFBgD9GDQAgAkGAP0YNACABIAIQ2gIhAAsgAAu4AwEBfwJ/IAFBAEoEQEGAPyAAKAIMIAFBBHRqQRBrIgEgASAAKAIITxsMAQsgAUHxsX9OBEAgACgCCCABQQR0agwBCwJAAkACQAJAIAFBks4Aag4DAgEAAwsgACgCEEHgAGoMAwsgACgCFCgCBCgCACgCDCEBIABBBTYCYCAAIAE2AlggAEHYAGoMAgsgAEHIAGoMAQtBgD8gACgCFCgCBCgCACIDQQAgAWtBBHRqQZjiCWsgAy0AB0HusX8gAWtJGwshAQJ/IAJBAEoEQEGAPyAAKAIMIAJBBHRqQRBrIgIgAiAAKAIITxsMAQsgAkHxsX9OBEAgACgCCCACQQR0agwBCwJAAkACQAJAIAJBks4Aag4DAgEAAwsgACgCEEHgAGoMAwsgACgCFCgCBCgCACgCDCECIABBBTYCYCAAIAI2AlggAEHYAGoMAgsgAEHIAGoMAQtBgD8gACgCFCgCBCgCACIDQQAgAmtBBHRqQZjiCWsgAy0AB0HusX8gAmtJGwshAkEAIQMCQCABQYA/Rg0AIAJBgD9GDQAgASgCCCACKAIIRw0AIAAgASACEL4DQQBHIQMLIAMLqAMBAX8CfyABQQBKBEBBgD8gACgCDCABQQR0akEQayIBIAEgACgCCE8bDAELIAFB8bF/TgRAIAAoAgggAUEEdGoMAQsCQAJAAkACQCABQZLOAGoOAwIBAAMLIAAoAhBB4ABqDAMLIAAoAhQoAgQoAgAoAgwhASAAQQU2AmAgACABNgJYIABB2ABqDAILIABByABqDAELQYA/IAAoAhQoAgQoAgAiA0EAIAFrQQR0akGY4glrIAMtAAdB7rF/IAFrSRsLIQECfyACQQBKBEBBgD8gACgCDCACQQR0akEQayICIAIgACgCCE8bDAELIAJB8bF/TgRAIAAoAgggAkEEdGoMAQsCQAJAAkACQCACQZLOAGoOAwIBAAMLIAAoAhBB4ABqDAMLIAAoAhQoAgQoAgAoAgwhAiAAQQU2AmAgACACNgJYIABB2ABqDAILIABByABqDAELQYA/IAAoAhQoAgQoAgAiA0EAIAJrQQR0akGY4glrIAMtAAdB7rF/IAJrSRsLIQNBACECAkAgAUGAP0YNACADQYA/Rg0AIAAgASADELwDIQILIAIL/wECAX8BfCMAQRBrIgIkAAJ8AkACfyABQQBKBEBBgD8gACgCDCABQQR0akEQayIBIAEgACgCCE8bDAELIAFB8bF/TgRAIAAoAgggAUEEdGoMAQsCQAJAAkACQCABQZLOAGoOAwIBAAMLIAAoAhBB4ABqDAMLIAAoAhQoAgQoAgAoAgwhASAAQQU2AmAgACABNgJYIABB2ABqDAILIABByABqDAELQYA/IAAoAhQoAgQoAgAiAEEAIAFrQQR0akGY4glrIAAtAAdB7rF/IAFrSRsLIgEoAghBA0YNACABIAIQuAMiAQ0ARAAAAAAAAAAADAELIAErAwALIAJBEGokAAuTAgIBfwF8IwBBEGsiAiQAAn8CQAJ/IAFBAEoEQEGAPyAAKAIMIAFBBHRqQRBrIgEgASAAKAIITxsMAQsgAUHxsX9OBEAgACgCCCABQQR0agwBCwJAAkACQAJAIAFBks4Aag4DAgEAAwsgACgCEEHgAGoMAwsgACgCFCgCBCgCACgCDCEBIABBBTYCYCAAIAE2AlggAEHYAGoMAgsgAEHIAGoMAQtBgD8gACgCFCgCBCgCACIAQQAgAWtBBHRqQZjiCWsgAC0AB0HusX8gAWtJGwsiASgCCEEDRg0AIAEgAhC4AyIBDQBBAAwBCyABKwMAIgOZRAAAAAAAAOBBYwRAIAOqDAELQYCAgIB4CyACQRBqJAAL5AEAAkACQAJAAn8gAUEASgRAQYA/IAAoAgwgAUEEdGpBEGsiASABIAAoAghPGwwBCyABQfGxf04EQCAAKAIIIAFBBHRqDAELAkACQAJAAkAgAUGSzgBqDgMCAQADCyAAKAIQQeAAagwDCyAAKAIUKAIEKAIAKAIMIQEgAEEFNgJgIAAgATYCWCAAQdgAagwCCyAAQcgAagwBC0GAPyAAKAIUKAIEKAIAIgBBACABa0EEdGpBmOIJayAALQAHQe6xfyABa0kbCyIBKAIIIgAOAgIAAQsgASgCAEEARw8LQQEhAAsgAAvvAwEBfwJ/AkACfyABQQBKBEBBgD8gACgCDCABQQR0akEQayIDIAMgACgCCE8bDAELIAFB8bF/TgRAIAAoAgggAUEEdGoMAQsCQAJAAkACQCABQZLOAGoOAwIBAAMLIAAoAhBB4ABqDAMLIAAoAhQoAgQoAgAoAgwhAyAAQQU2AmAgACADNgJYIABB2ABqDAILIABByABqDAELQYA/IAAoAhQoAgQoAgAiA0EAIAFrQQR0akGY4glrIAMtAAdB7rF/IAFrSRsLIgMoAghBBEYNACAAIAMQuQNFBEBBACACRQ0CGiACQQA2AgBBAA8LIAAoAhAiAygCRCADKAJATwRAIAAQ/QELIAFBAEoEQEGAPyAAKAIMIAFBBHRqQRBrIgEgASAAKAIITxshAwwBCyABQfGxf04EQCAAKAIIIAFBBHRqIQMMAQsCQAJAAkACQCABQZLOAGoOAwIBAAMLIAAoAhBB4ABqIQMMAwsgACgCFCgCBCgCACgCDCEBIABBBTYCYCAAIAE2AlggAEHYAGohAwwCCyAAQcgAaiEDDAELQYA/IAAoAhQoAgQoAgAiAEEAIAFrQQR0akGY4glrIAAtAAdB7rF/IAFrSRshAwsgAygCACEAIAIEfyACIAAoAgw2AgAgAygCAAUgAAtBEGoLC5gCAQF/An8gAUEASgRAQYA/IAAoAgwgAUEEdGpBEGsiASABIAAoAghPGwwBCyABQfGxf04EQCAAKAIIIAFBBHRqDAELAkACQAJAAkAgAUGSzgBqDgMCAQADCyAAKAIQQeAAagwDCyAAKAIUKAIEKAIAKAIMIQEgAEEFNgJgIAAgATYCWCAAQdgAagwCCyAAQcgAagwBC0GAPyAAKAIUKAIEKAIAIgJBACABa0EEdGpBmOIJayACLQAHQe6xfyABa0kbCyEBQQAhAgJAAkACQAJAAkAgASgCCEEDaw4FAwACBAEECyABKAIAKAIMDwsgASgCACgCEA8LIAEoAgAQpQMPCyAAIAEQuQNFDQAgASgCACgCDCECCyACC+kBAAJ/IAFBAEoEQEGAPyAAKAIMIAFBBHRqQRBrIgEgASAAKAIITxsMAQsgAUHxsX9OBEAgACgCCCABQQR0agwBCwJAAkACQAJAIAFBks4Aag4DAgEAAwsgACgCEEHgAGoMAwsgACgCFCgCBCgCACgCDCEBIABBBTYCYCAAIAE2AlggAEHYAGoMAgsgAEHIAGoMAQtBgD8gACgCFCgCBCgCACIAQQAgAWtBBHRqQZjiCWsgAC0AB0HusX8gAWtJGwshAUEAIQACQCABKAIIQQZHDQAgASgCACIBLQAGRQ0AIAEoAhAhAAsgAAvyAQACfyABQQBKBEBBgD8gACgCDCABQQR0akEQayIBIAEgACgCCE8bDAELIAFB8bF/TgRAIAAoAgggAUEEdGoMAQsCQAJAAkACQCABQZLOAGoOAwIBAAMLIAAoAhBB4ABqDAMLIAAoAhQoAgQoAgAoAgwhASAAQQU2AmAgACABNgJYIABB2ABqDAILIABByABqDAELQYA/IAAoAhQoAgQoAgAiAEEAIAFrQQR0akGY4glrIAAtAAdB7rF/IAFrSRsLIQFBACEAAkACQAJAIAEoAghBAmsOBgECAgICAAILIAEoAgBBGGoPCyABKAIAIQALIAAL2QEAAn8gAUEASgRAQYA/IAAoAgwgAUEEdGpBEGsiASABIAAoAghPGwwBCyABQfGxf04EQCAAKAIIIAFBBHRqDAELAkACQAJAAkAgAUGSzgBqDgMCAQADCyAAKAIQQeAAagwDCyAAKAIUKAIEKAIAKAIMIQEgAEEFNgJgIAAgATYCWCAAQdgAagwCCyAAQcgAagwBC0GAPyAAKAIUKAIEKAIAIgBBACABa0EEdGpBmOIJayAALQAHQe6xfyABa0kbCyEBQQAhACABKAIIQQhGBH8gASgCAAVBAAsLygMBAn8CQAJAAkACfyABQQBKBEBBgD8gACgCDCABQQR0akEQayICIAIgACgCCE8bDAELIAFB8bF/TgRAIAAoAgggAUEEdGoMAQsCQAJAAkACQCABQZLOAGoOAwIBAAMLIAAoAhBB4ABqDAMLIAAoAhQoAgQoAgAoAgwhAiAAQQU2AmAgACACNgJYIABB2ABqDAILIABByABqDAELQYA/IAAoAhQoAgQoAgAiAkEAIAFrQQR0akGY4glrIAItAAdB7rF/IAFrSRsLIgIoAghBAmsOBwECAgAAAQACCyACKAIADwsCQAJAAn8gAUEASgRAQYA/IAAoAgwgAUEEdGpBEGsiASABIAAoAghPGwwBCyABQfGxf04EQCAAKAIIIAFBBHRqDAELAkACQAJAAkAgAUGSzgBqDgMCAQADCyAAKAIQQeAAagwDCyAAKAIUKAIEKAIAKAIMIQEgAEEFNgJgIAAgATYCWCAAQdgAagwCCyAAQcgAagwBC0GAPyAAKAIUKAIEKAIAIgBBACABa0EEdGpBmOIJayAALQAHQe6xfyABa0kbCyIBKAIIQQJrDgYBAgICAgACCyABKAIAQRhqDwsgASgCACEDCyADCxoBAX8gACgCCCIBQQA2AgggACABQRBqNgIICyQBAX8gACgCCCICQQM2AgggAiABOQMAIAAgACgCCEEQajYCCAslAQF/IAAoAggiAkEDNgIIIAIgAbc5AwAgACAAKAIIQRBqNgIIC0kBAX8gACgCECIDKAJEIAMoAkBPBEAgABD9AQsgACgCCCEDIAAgASACEIUDIQEgA0EENgIIIAMgATYCACAAIAAoAghBEGo2AggLcwECfwJ/IAFFBEAgACgCCCIBQQA2AgggAEEIagwBCyABEPsDIQMgACgCECICKAJEIAIoAkBPBEAgABD9AQsgACgCCCECIAAgASADEIUDIQEgAkEENgIIIAIgATYCACAAKAIIIQEgAEEIagsgAUEQajYCAAslAQF/IAAoAhAiAygCRCADKAJATwRAIAAQ/QELIAAgASACENwCCzwBAn8jAEEQayIDJAAgACgCECIEKAJEIAQoAkBPBEAgABD9AQsgAyACNgIMIAAgASACENwCIANBEGokAAupAgEEfyAAKAIQIgMoAkQgAygCQE8EQCAAEP0BCyAAIAIgACgCFCIDIAAoAihGBH8gAEHIAGoFIAMoAgQoAgBBDGoLKAIAEPUBIgUgATYCECAAIAAoAgggAkEEdGsiATYCCCACBEAgBUEYaiEDIAIhASACQQFxBEAgAyACQQFrIgFBBHQiBGoiBiAAKAIIIARqIgQpAwA3AwAgBiAEKAIINgIICyACQQFHBEADQCADIAFBBHRBEGsiAmoiBCAAKAIIIAJqIgIpAwA3AwAgBCACKAIINgIIIAMgAUECayIBQQR0IgJqIgQgACgCCCACaiICKQMANwMAIAQgAigCCDYCCCABDQALCyAAKAIIIQELIAFBBjYCCCABIAU2AgAgACAAKAIIQRBqNgIICycBAX8gACgCCCICQQE2AgggAiABQQBHNgIAIAAgACgCCEEQajYCCAskAQF/IAAoAggiAkECNgIIIAIgATYCACAAIAAoAghBEGo2AggLLwEBfyAAKAIIIgFBCDYCCCABIAA2AgAgACAAKAIIQRBqNgIIIAAoAhAoAnAgAEYL0wEBAX8gAAJ/IAFBAEoEQEGAPyAAKAIMIAFBBHRqQRBrIgEgASAAKAIITxsMAQsgAUHxsX9OBEAgACgCCCABQQR0agwBCwJAAkACQAJAIAFBks4Aag4DAgEAAwsgACgCEEHgAGoMAwsgACgCFCgCBCgCACgCDCEBIABBBTYCYCAAIAE2AlggAEHYAGoMAgsgAEHIAGoMAQtBgD8gACgCFCgCBCgCACICQQAgAWtBBHRqQZjiCWsgAi0AB0HusX8gAWtJGwsgACgCCEEQayIAIAAQugMLiwIBAn8jAEEQayIDJAACfyABQQBKBEBBgD8gACgCDCABQQR0akEQayIBIAEgACgCCE8bDAELIAFB8bF/TgRAIAAoAgggAUEEdGoMAQsCQAJAAkACQCABQZLOAGoOAwIBAAMLIAAoAhBB4ABqDAMLIAAoAhQoAgQoAgAoAgwhASAAQQU2AmAgACABNgJYIABB2ABqDAILIABByABqDAELQYA/IAAoAhQoAgQoAgAiBEEAIAFrQQR0akGY4glrIAQtAAdB7rF/IAFrSRsLIQEgACACIAIQ+wMQhQMhAiADQQQ2AgggAyACNgIAIAAgASADIAAoAggQugMgACAAKAIIQRBqNgIIIANBEGokAAvxAQEBfwJ/IAFBAEoEQEGAPyAAKAIMIAFBBHRqQRBrIgEgASAAKAIITxsMAQsgAUHxsX9OBEAgACgCCCABQQR0agwBCwJAAkACQAJAIAFBks4Aag4DAgEAAwsgACgCEEHgAGoMAwsgACgCFCgCBCgCACgCDCEBIABBBTYCYCAAIAE2AlggAEHYAGoMAgsgAEHIAGoMAQtBgD8gACgCFCgCBCgCACICQQAgAWtBBHRqQZjiCWsgAi0AB0HusX8gAWtJGwsoAgAgACgCCEEQaxCfAyEBIAAoAggiAEEQayABKQMANwMAIABBCGsgASgCCDYCAAv3AgMBfAJ/AX4CfyACQQFrIgQCfyABQQBKBEBBgD8gACgCDCABQQR0akEQayIBIAEgACgCCE8bDAELIAFB8bF/TgRAIAAoAgggAUEEdGoMAQsCQAJAAkACQCABQZLOAGoOAwIBAAMLIAAoAhBB4ABqDAMLIAAoAhQoAgQoAgAoAgwhASAAQQU2AmAgACABNgJYIABB2ABqDAILIABByABqDAELQYA/IAAoAhQoAgQoAgAiBUEAIAFrQQR0akGY4glrIAUtAAdB7rF/IAFrSRsLKAIAIgEoAhxJBEAgASgCDCAEQQR0agwBCyACtyEDAn8gAkUEQCABKAIQDAELIAEoAhAgA70iBkIgiCAGfKdBfyABLQAHdEF/c0EBcnBBBXRqCyEBAkADQCABKAIYQQNGBEAgASsDECADYQ0CCyABKAIcIgENAAtBgD8hAQsgAQshASAAKAIIIgIgASkDADcDACACIAEoAgg2AgggACAAKAIIQRBqNgIIC0kBAX8gACgCECIDKAJEIAMoAkBPBEAgABD9AQsgACgCCCEDIAAgASACEKADIQEgA0EFNgIIIAMgATYCACAAIAAoAghBEGo2AggLrwIBAX8CfwJAAkACQAJ/IAFBAEoEQEGAPyAAKAIMIAFBBHRqQRBrIgEgASAAKAIITxsMAQsgAUHxsX9OBEAgACgCCCABQQR0agwBCwJAAkACQAJAIAFBks4Aag4DAgEAAwsgACgCEEHgAGoMAwsgACgCFCgCBCgCACgCDCEBIABBBTYCYCAAIAE2AlggAEHYAGoMAgsgAEHIAGoMAQtBgD8gACgCFCgCBCgCACICQQAgAWtBBHRqQZjiCWsgAi0AB0HusX8gAWtJGwsiASgCCCICQQVrDgMAAgECCyABKAIAQQhqDAILIAEoAgBBCGoMAQsgACgCECACQQJ0akGYAWoLKAIAIgFFBEBBAA8LIAAoAggiAkEFNgIIIAIgATYCACAAIAAoAghBEGo2AghBAQvFAgEBfwJ/AkACQAJAAkACfyABQQBKBEBBgD8gACgCDCABQQR0akEQayIBIAEgACgCCE8bDAELIAFB8bF/TgRAIAAoAgggAUEEdGoMAQsCQAJAAkACQCABQZLOAGoOAwIBAAMLIAAoAhBB4ABqDAMLIAAoAhQoAgQoAgAoAgwhASAAQQU2AmAgACABNgJYIABB2ABqDAILIABByABqDAELQYA/IAAoAhQoAgQoAgAiAkEAIAFrQQR0akGY4glrIAItAAdB7rF/IAFrSRsLIgEoAghBBmsOAwABAgMLIAAoAggiAiABKAIAKAIMNgIAQQUMAwsgACgCCCICIAEoAgAoAgw2AgBBBQwCCyAAKAIIIgIgASgCACIBKQNINwMAIAEoAlAMAQsgACgCCCECQQALIQEgAiABNgIIIAAgACgCCEEQajYCCAvjAQEBfyAAAn8gAUEASgRAQYA/IAAoAgwgAUEEdGpBEGsiASABIAAoAghPGwwBCyABQfGxf04EQCAAKAIIIAFBBHRqDAELAkACQAJAAkAgAUGSzgBqDgMCAQADCyAAKAIQQeAAagwDCyAAKAIUKAIEKAIAKAIMIQEgAEEFNgJgIAAgATYCWCAAQdgAagwCCyAAQcgAagwBC0GAPyAAKAIUKAIEKAIAIgJBACABa0EEdGpBmOIJayACLQAHQe6xfyABa0kbCyAAKAIIIgFBIGsgAUEQaxC7AyAAIAAoAghBIGs2AggLjgIBAn8jAEEQayIDJAACfyABQQBKBEBBgD8gACgCDCABQQR0akEQayIBIAEgACgCCE8bDAELIAFB8bF/TgRAIAAoAgggAUEEdGoMAQsCQAJAAkACQCABQZLOAGoOAwIBAAMLIAAoAhBB4ABqDAMLIAAoAhQoAgQoAgAoAgwhASAAQQU2AmAgACABNgJYIABB2ABqDAILIABByABqDAELQYA/IAAoAhQoAgQoAgAiBEEAIAFrQQR0akGY4glrIAQtAAdB7rF/IAFrSRsLIQEgACACIAIQ+wMQhQMhAiADQQQ2AgggAyACNgIAIAAgASADIAAoAghBEGsQuwMgACAAKAIIQRBrNgIIIANBEGokAAvdAgECfyAAAn8gAUEASgRAQYA/IAAoAgwgAUEEdGpBEGsiASABIAAoAghPGwwBCyABQfGxf04EQCAAKAIIIAFBBHRqDAELAkACQAJAAkAgAUGSzgBqDgMCAQADCyAAKAIQQeAAagwDCyAAKAIUKAIEKAIAKAIMIQEgAEEFNgJgIAAgATYCWCAAQdgAagwCCyAAQcgAagwBC0GAPyAAKAIUKAIEKAIAIgJBACABa0EEdGpBmOIJayACLQAHQe6xfyABa0kbCyICKAIAIAAoAggiA0EgaxCiAyIBIANBEGspAwA3AwAgASADQQhrKAIANgIIAkAgACgCCCIBQQhrKAIAQQRIDQAgAUEQaygCAC0ABUEDcUUNACACKAIAIgItAAVBBHFFDQAgACgCECEBIAIgAi0ABUH7AXE6AAUgAiABKAIoNgIYIAEgAjYCKCAAKAIIIQELIAAgAUEgazYCCAveAgECfwJ/IAFBAEoEQEGAPyAAKAIMIAFBBHRqQRBrIgEgASAAKAIITxsMAQsgAUHxsX9OBEAgACgCCCABQQR0agwBCwJAAkACQAJAIAFBks4Aag4DAgEAAwsgACgCEEHgAGoMAwsgACgCFCgCBCgCACgCDCEBIABBBTYCYCAAIAE2AlggAEHYAGoMAgsgAEHIAGoMAQtBgD8gACgCFCgCBCgCACIDQQAgAWtBBHRqQZjiCWsgAy0AB0HusX8gAWtJGwshBCAAKAIIIQMgACAEKAIAIAIQowMiASADQRBrKQMANwMAIAEgA0EIaygCADYCCAJAIAAoAggiAUEIaygCAEEESA0AIAFBEGsoAgAtAAVBA3FFDQAgBCgCACICLQAFQQRxRQ0AIAAoAhAhASACIAItAAVB+wFxOgAFIAIgASgCKDYCGCABIAI2AiggACgCCCEBCyAAIAFBEGs2AggLpAMBAn8CfyABQQBKBEBBgD8gACgCDCABQQR0akEQayIBIAEgACgCCE8bDAELIAFB8bF/TgRAIAAoAgggAUEEdGoMAQsCQAJAAkACQCABQZLOAGoOAwIBAAMLIAAoAhBB4ABqDAMLIAAoAhQoAgQoAgAoAgwhASAAQQU2AmAgACABNgJYIABB2ABqDAILIABByABqDAELQYA/IAAoAhQoAgQoAgAiAkEAIAFrQQR0akGY4glrIAItAAdB7rF/IAFrSRsLIQIgACgCCCIBQQhrKAIABH8gAUEQaygCAAVBAAshAQJAAkACQAJAIAIoAggiA0EFaw4DAAIBAgsgAigCACABNgIIIAFFDQIgAS0ABUEDcUUNAiACKAIAIgEtAAVBBHFFDQIgACgCECECIAEgAS0ABUH7AXE6AAUgASACKAIoNgIYIAIgATYCKAwCCyACKAIAIAE2AgggAUUNASABLQAFQQNxRQ0BIAIoAgAiAi0ABUEEcUUNASAAIAIgARCDAgwBCyAAKAIQIANBAnRqIAE2ApgBCyAAIAAoAghBEGs2AghBAQvxAgECfwJ/IAFBAEoEQEGAPyAAKAIMIAFBBHRqQRBrIgEgASAAKAIITxsMAQsgAUHxsX9OBEAgACgCCCABQQR0agwBCwJAAkACQAJAIAFBks4Aag4DAgEAAwsgACgCEEHgAGoMAwsgACgCFCgCBCgCACgCDCEBIABBBTYCYCAAIAE2AlggAEHYAGoMAgsgAEHIAGoMAQtBgD8gACgCFCgCBCgCACICQQAgAWtBBHRqQZjiCWsgAi0AB0HusX8gAWtJGwshAUEAIQICQAJAAkACQAJAIAEoAghBBmsOAwABAgQLIAEoAgAgACgCCEEQaygCADYCDAwCCyABKAIAIAAoAghBEGsoAgA2AgwMAQsgACgCCEEQaygCACECIAEoAgAiA0EFNgJQIAMgAjYCSAtBASECIAAoAghBEGsoAgAiAy0ABUEDcUUNACABKAIAIgEtAAVBBHFFDQAgACABIAMQgwILIAAgACgCCEEQazYCCCACCzwAIAAgACgCCCABQX9zQQR0aiACEO4BAkAgAkF/Rw0AIAAoAggiASAAKAIUIgAoAghJDQAgACABNgIICwvIAgEDfyMAQRBrIgQkAAJ/IANFBEAgACgCICEDQQAMAQsCfyADQQBKBEBBgD8gACgCDCADQQR0akEQayIDIAMgACgCCE8bDAELIANB8bF/TwRAIAAoAgggA0EEdGoMAQsCQAJAAkACQCADQZLOAGoOAwIBAAMLIAAoAhBB4ABqDAMLIAAoAhQoAgQoAgAoAgwhAyAAQQU2AmAgACADNgJYIABB2ABqDAILIABByABqDAELQYA/IAAoAhQoAgQoAgAiBUEAIANrQQR0akGY4glrIAUtAAdB7rF/IANrSRsLIAAoAiAiA2sLIQUgACgCCCEGIAQgAjYCDCAEIAYgAUF/c0EEdGoiATYCCCAAQQEgBEEIaiABIANrIAUQ8gECQCACQX9HDQAgACgCCCICIAAoAhQiACgCCEkNACAAIAI2AggLIARBEGokAAsRACAAIAEoAgAgASgCBBDuAQs7AQF/IwBBEGsiAyQAIAMgAjYCDCADIAE2AgggAEECIANBCGogACgCCCAAKAIga0EAEPIBIANBEGokAAuMAQECfyAAQQAgACgCFCICIAAoAihGBH8gAEHIAGoFIAIoAgQoAgBBDGoLKAIAEPUBIgIgASgCADYCECAAKAIIIgNBBjYCCCADIAI2AgAgACAAKAIIIgJBEGo2AgggASgCBCEBIAJBAjYCGCACIAE2AhAgACAAKAIIIgFBEGo2AgggACABQRBrQQAQ7gELlQEBAn8jAEEgayIFJAAgBUEMaiIEIAI2AgwgBCABNgIIIAQgADYCECAEQgA3AgAjAEEgayIBJAAgASADQd0rIAMbNgIcIAEgBDYCDCABQQA2AhggAUEANgIQIABBOyABQQxqIAAoAgggACgCIGsgACgCdBDyASAAIAEoAhAgASgCGEEAEMoCGiABQSBqJAAgBUEgaiQAC50BAQN/QQEhBAJAIAAoAggiA0EIaygCAEEGRw0AIANBEGsoAgAiAy0ABg0AIAMoAhAjAEEgayIDJAAgA0EANgIMIAMgAjYCCCADIAE2AgQgAyAANgIAIANBFGoiBULRgISgwICBBDcABCAFQZuY1YsGNgAAIAMgACAFQQwgAiABEQIANgIQQQAgAxD0ASADKAIQIQQgA0EgaiQACyAECwcAIAAtAAYLywIBAn8gACgCECEDQX8hBAJAAkACQAJAAkACQAJAAkACQCABDggAAQIDBAUGBwgLIANBfTYCQEEADwsgAyADKAJENgJAQQAPCwJAAkAgACgCECIBLQAVIgJBAU0EQCABQQA2AiwgAUIANwIkIAFBADYCGCABQQI6ABUgASABQRxqNgIgDAELIAJBBEYNAQsDQCAAEP4BGiABLQAVQQRHDQALCyAAEP8BIAEtABUEQANAIAAQ/gEaIAEtABUNAAsLIAEgASgCUCABKAJIQeQAbmw2AkBBAA8LIAMoAkRBCnYPCyADKAJEQf8HcQ8LQQAhBCADIAMoAkQiASACQQp0ayICQQAgASACTxs2AkADQCADKAJAIAMoAkRLDQMgABD9ASADLQAVDQALQQEPCyADKAJQIAMgAjYCUA8LIAMoAlQhBCADIAI2AlQLIAQLCQAgABDlAUEAC8oGAwZ/AXwBfgJ/IAAhBAJ/IAFBAEoEQEGAPyAAKAIMIAFBBHRqQRBrIgAgACAEKAIITxsMAQsgAUHxsX9OBEAgBCgCCCABQQR0agwBCwJAAkACQAJAIAFBks4Aag4DAgEAAwsgBCgCEEHgAGoMAwsgBCgCFCgCBCgCACgCDCEAIARBBTYCYCAEIAA2AlggBEHYAGoMAgsgBEHIAGoMAQtBgD8gBCgCFCgCBCgCACIAQQAgAWtBBHRqQZjiCWsgAC0AB0HusX8gAWtJGwsoAgAhAkF/IQACQAJ/AkACQAJAAkACQCAEKAIIQRBrIgMoAggOBQYCAwABBAsCQAJ/IAMrAwAiCJlEAAAAAAAA4EFjBEAgCKoMAQtBgICAgHgLIgBBAEwNACAIIAC3Yg0AIAIoAhwgAEgNACAAQQFrIQAMBgsgCEQAAAAAAAAAAGEEQCACKAIQDAULIAIoAhAgCL0iCUIgiCAJfKdBfyACLQAHdEF/c0EBcnBBBXRqDAQLIAIoAhAgAygCACgCCEF/IAItAAd0QX9zcUEFdGoMAwsgAigCECADKAIAQX8gAi0AB3RBf3NxQQV0agwCCyACKAIQIAMoAgBBfyACLQAHdEF/c0EBcnBBBXRqDAELIAIoAhAgAygCAEF/IAItAAd0QX9zQQFycEEFdGoLIQADQAJAIABBEGogAxDaAkUEQCAAKAIYQQtHDQEgAygCCEEESA0BIAAoAhAgAygCAEcNAQsgAigCHCAAIAIoAhBrQQV1aiEADAILIAAoAhwiAA0AC0EAIQAgBEHCMUEAEOQBCyACKAIcIgUgAEEBaiIBIAEgBUgbIQYCQAJAA0AgACIBQQFqIgAgBU4NASACKAIMIABBBHRqKAIIRQ0ACyADQQM2AgggAyABQQJqtzkDACACKAIMIABBBHRqIQAMAQsgBiAFayIAQQEgAi0AB3QiBUgEQCACKAIQIQYDQCAGIABBBXQiB2oiASgCCARAIAMgASkDEDcDACADIAEoAhg2AgggByACKAIQaiEADAMLIABBAWoiACAFRw0ACwtBAAwBCyADIAApAwA3AxAgAyAAKAIINgIYQQELIQAgBCAEKAIIQRBBcCAAG2o2AgggAAuEAQEBfyABQQJOBEAgACgCECICKAJEIAIoAkBPBEAgABD9AQsgACABIAAoAgggACgCDGtBBHVBAWsQvwMgACAAKAIIQQEgAWtBBHRqNgIIDwsgAUUEQCAAKAIIIQEgAEHSNUEAEIUDIQIgAUEENgIIIAEgAjYCACAAIAAoAghBEGo2AggLCxwAIAEEQCABIAAoAhAoAhA2AgALIAAoAhAoAgwLFQAgACgCECIAIAE2AgwgACACNgIQC9MBAQN/IAAoAhAiAigCRCACKAJATwRAIAAQ/QELIAAoAhQiAiAAKAIoRgR/IABByABqBSACKAIEKAIAQQxqCygCACEDIAFBZk8EQCAAEMsCGgsgAEEAQQAgAUEYahDKAiECIAAoAhAtABQhBCACIAE2AhAgAkEHOgAEIAIgAzYCDCACQQA2AgggAiAEQQNxOgAFIAIgACgCECgCcCgCADYCACAAKAIQKAJwIAI2AgAgACgCCCIBQQc2AgggASACNgIAIAAgACgCCEEQajYCCCACQRhqC+sCAQJ/An8gAUEASgRAQYA/IAAoAgwgAUEEdGpBEGsiASABIAAoAghPGwwBCyABQfGxf04EQCAAKAIIIAFBBHRqDAELAkACQAJAAkAgAUGSzgBqDgMCAQADCyAAKAIQQeAAagwDCyAAKAIUKAIEKAIAKAIMIQEgAEEFNgJgIAAgATYCWCAAQdgAagwCCyAAQcgAagwBC0GAPyAAKAIUKAIEKAIAIgNBACABa0EEdGpBmOIJayADLQAHQe6xfyABa0kbCyEBQQAhAwJAIAEoAghBBkcNAAJ/IAEoAgAiAS0ABgRAIAJBAEwNAiABLQAHIAJJDQJB0jUhAyACQQR0IAFqQQhqDAELIAJBAEwNASABKAIQIgQoAiQgAkgNASACQQJ0QQRrIgIgBCgCHGooAgBBEGohAyABIAJqKAIUKAIICyEBIAAoAggiAiABKQMANwMAIAIgASgCCDYCCCAAIAAoAghBEGo2AggLIAMLnwMBA38CQAJ/IAFBAEoEQEGAPyAAKAIMIAFBBHRqQRBrIgEgASAAKAIITxsMAQsgAUHxsX9OBEAgACgCCCABQQR0agwBCwJAAkACQAJAIAFBks4Aag4DAgEAAwsgACgCEEHgAGoMAwsgACgCFCgCBCgCACgCDCEBIABBBTYCYCAAIAE2AlggAEHYAGoMAgsgAEHIAGoMAQtBgD8gACgCFCgCBCgCACIDQQAgAWtBBHRqQZjiCWsgAy0AB0HusX8gAWtJGwsiASgCCEEGRw0AAn8gASgCACIDLQAGBEAgAkEATA0CIAMtAAcgAkkNAkHSNSEEIAJBBHQgA2pBCGoMAQsgAkEATA0BIAMoAhAiBSgCJCACSA0BIAJBAnRBBGsiAiAFKAIcaigCAEEQaiEEIAIgA2ooAhQoAggLIQIgACAAKAIIIgNBEGsiBTYCCCACIAUpAwA3AwAgAiADQQhrKAIANgIIIAAoAggiAigCCEEESA0AIAIoAgAiAi0ABUEDcUUNACABKAIAIgEtAAVBBHFFDQAgACABIAIQgwILIAQLwQEBAn8jAEGQAWsiAyQAAn8gAEEAIANBLGoQ3QFFBEAgAyACNgIEIAMgATYCACAAQa4uIAMQYgwBCyAAQagXIANBLGoQ4AEaAkAgAygCNEHaJBD3Aw0AIAFBAWsiAQ0AIAMgAygCMDYCECADIAI2AhQgAEGQLiADQRBqEGIMAQsgAygCMCIERQRAIANB3Ss2AjBB3SshBAsgAyACNgIoIAMgBDYCJCADIAE2AiAgAEHELiADQSBqEGILIANBkAFqJAALhwEBAX8jAEHwAGsiAyQAIAMgAjYCCAJAAkAgAEEBIANBDGoiAhDdAUUNACAAQdgYIAIQ4AEaIAMoAiAiAkEATA0AIAMgAjYCBCADIANBMGo2AgAgAEGBNSADED4aDAELIABB0jVBABA7CyAAIAEgAygCCBA9GiAAQQIQWyAAEFkgA0HwAGokAAtOAQJ/IwBBEGsiAyQAIAMgACABECYiBEF/RgR/QY4eBSAEQQJ0QfDEAGooAgALNgIEIAMgAjYCACAAIAEgAEHgDyADED4QYSADQRBqJAALagEBfyMAQfAAayICJAACQAJAIAAgASACQQxqIgEQ3QFFDQAgAEHYGCABEOABGiACKAIgIgFBAEwNACACIAE2AgQgAiACQTBqNgIAIABBgTUgAhA+GgwBCyAAQdI1QQAQOwsgAkHwAGokAAvNAQEDfyMAQSBrIgQkAAJAIAIEQCAAIAEgAkEAEGYhBQwBCyAAIAFBABAyIgUNAEGAxQAoAgAhAiAEIAAgARAmIgVBf0YEf0GOHgUgBUECdEHwxABqKAIACzYCFCAEIAI2AhAgACABIABB4A8gBEEQahA+EGEaQQAhBQsCQCADKAIAIgYEQEEAIQIDQCAGIAUQ9wNFDQIgAyACQQFqIgJBAnRqKAIAIgYNAAsLIAQgBTYCACAAIAEgAEGNMyAEED4QYSECCyAEQSBqJAAgAguZAQEBfyMAQRBrIgQkAAJAIAAgARAmQQBMBEAgA0UNASACRQRAIANBADYCAAwCCyADIAIQ+wM2AgAMAQsgACABIAMQMiICDQBBgMUAKAIAIQIgBCAAIAEQJiIDQX9GBH9Bjh4FIANBAnRB8MQAaigCAAs2AgQgBCACNgIAIAAgASAAQeAPIAQQPhBhGkEAIQILIARBEGokACACC2gBA38jAEEQayIDJAAgACABIAIQMiICRQRAQYDFACgCACEEIAMgACABECYiBUF/RgR/QY4eBSAFQQJ0QfDEAGooAgALNgIEIAMgBDYCACAAIAEgAEHgDyADED4QYRoLIANBEGokACACCzoBAX8gAEHwsX8gARBEIABBfxAmBH9BAAUgAEF+ECEgAEEAQQAQRyAAQX8QJSAAQfCxfyABEEtBAQsLjAEBAn8jAEEQayIDJAACQAJAIAAgARA1IgRFDQAgACABEEhFDQAgAEHwsX8gAhBEIABBf0F+ECxFDQAgAEF9ECEMAQsgAyAAIAEQJiIEQX9GBH9Bjh4FIARBAnRB8MQAaigCAAs2AgQgAyACNgIAIAAgASAAQeAPIAMQPhBhGkEAIQQLIANBEGokACAECy8BAX8jAEEQayIDJAAgACABEBxFBEAgAyACNgIAIABB/C0gAxBiGgsgA0EQaiQAC3YBAn8jAEEQayIDJAAgACABECYgAkcEQCACQX9GBH9Bjh4FIAJBAnRB8MQAaigCAAshAiADIAAgARAmIgRBf0YEf0GOHgUgBEECdEHwxABqKAIACzYCBCADIAI2AgAgACABIABB4A8gAxA+EGEaCyADQRBqJAALGAAgACABECZBf0YEQCAAIAFBgyYQYRoLC3sCA38BfCMAQRBrIgIkAAJAIAAgARAvIgVEAAAAAAAAAABiDQAgACABECkNAEH8xAAoAgAhAyACIAAgARAmIgRBf0YEf0GOHgUgBEECdEHwxABqKAIACzYCBCACIAM2AgAgACABIABB4A8gAhA+EGEaCyACQRBqJAAgBQsXACAAIAEQJkEASgR8IAAgARBtBSACCwtvAQR/IwBBEGsiAiQAAkAgACABEDAiAw0AIAAgARApDQBB/MQAKAIAIQQgAiAAIAEQJiIFQX9GBH9Bjh4FIAVBAnRB8MQAaigCAAs2AgQgAiAENgIAIAAgASAAQeAPIAIQPhBhGgsgAkEQaiQAIAMLFwAgACABECZBAEoEfyAAIAEQbwUgAgsLNwEBfyAAIAEQSAR/IAAgAhA8IABBfhBFIABBfxAmRQRAIABBfRAhQQAPCyAAQX4QIkEBBUEACwtmACABQQFrQfCxf08EQCABIAAoAgggACgCDGtBBHVqQQFqIQELIAAgARBIBH8gACACEDwgAEF+EEUgAEF/ECZFBEAgAEF9ECFBAA8LIABBfhAiIAAgARAlIABBAUEBEFBBAQVBAAsL1AEBBH8jAEEQayIEJAAgAQRAIAIoAgAEQCACIQUDQCADQQFqIQMgBSgCCCAFQQhqIQUNAAsLIABB8LF/QcYrQQEQdBogAEF/IAEQRCAAQX8QJkEFRwRAIABBfhAhIABB7rF/IAEgAxB0BEAgBCABNgIAIABBszMgBBBiGgsgAEF/ECUgAEF9IAEQSwsgAEF+ECIgAEF/ECMLIAIoAgAEQANAIAAgAigCBEEAED8gAEF+IAIoAgAQSyACKAIIIAJBCGohAg0ACwsgAEF/ECEgBEEQaiQAC6ABAQF/IAAgARAlA0AgAkEuEPUDIgFFBEAgAhD7AyACaiEBCyAAIAIgASACayIEEDsgAEF+EEUCQCAAQX8QJkUEQCAAQX4QISAAQQBBASADIAEtAABBLkYbEEcgACACIAQQOyAAQX4QJSAAQXwQSgwBCyAAQX8QJkEFRg0AIABBfRAhIAIPCyAAQX4QIiABQQFqIQIgAS0AAEEuRg0AC0EAC94FAQ1/IwBBkAhrIgQkACACEPsDIRAgBEEANgIIIAQgBEEQaiIHNgIEIAQgADYCDCABIAIQ/QMiDARAIARBkAhqIQ8DQCAMIAFrIgkEQANAAkAgBCgCBCIFIA9JDQAgBCgCDCAHIAUgB2sQOyAEIAc2AgQgBCAEKAIIIgZBAWo2AgggByEFIAZBAEwNAEEBIQUgBCgCDCIKQX8QMyEIA0ACQCAKIAUiBkF/cxAzIQsgBUEBaiEFIAQoAggiDSAGa0EISiAIIAtLciIORQ0AIAggC2ohCCAFIA1IDQELCyAKIAUgBiAOGyIFEFsgBCAEKAIIIAVrQQFqNgIIIAQoAgQhBQsgAS0AACEGIAQgBUEBajYCBCAFIAY6AAAgAUEBaiEBIAlBAWsiCQ0ACwsgAyIBEPsDIgkEQANAAkAgBCgCBCIFIA9JDQAgBCgCDCAHIAUgB2sQOyAEIAc2AgQgBCAEKAIIIgZBAWo2AgggByEFIAZBAEwNAEEBIQUgBCgCDCIKQX8QMyEIA0ACQCAKIAUiBkF/cxAzIQsgBUEBaiEFIAQoAggiDSAGa0EISiAIIAtLciIORQ0AIAggC2ohCCAFIA1IDQELCyAKIAUgBiAOGyIFEFsgBCAEKAIIIAVrQQFqNgIIIAQoAgQhBQsgAS0AACEGIAQgBUEBajYCBCAFIAY6AAAgAUEBaiEBIAlBAWsiCQ0ACwsgDCAQaiIBIAIQ/QMiDA0ACwsgARD7AyICBEAgBEGQCGohAwNAIAMgBCgCBCIFTQRAIARBBGoQdhogBCgCBCEFCyABLQAAIQYgBCAFQQFqNgIEIAUgBjoAACABQQFqIQEgAkEBayICDQALCwJAIAcgBCgCBCIBRgRAIAQoAgghBQwBCyAEKAIMIAcgASAHaxA7IAQgBzYCBCAEIAQoAghBAWoiBTYCCAsgBCgCDCAFEFsgBEEBNgIIIABBf0EAEDIgBEGQCGokAAuzAQEIfwJAIAAoAgAiASAAQQxqIgJGDQAgACgCCCACIAEgAmsQOyAAIAI2AgAgACAAKAIEIgFBAWo2AgQgAUEATA0AIAAoAggiBUF/EDMhBEEBIQMDQAJAIAUgAyIBQX9zEDMhBiABQQFqIQMgACgCBCIHIAFrQQhKIAQgBktyIghFDQAgBCAGaiEEIAMgB0gNAQsLIAUgAyABIAgbIgEQWyAAIAAoAgQgAWtBAWo2AgQLIAILGgAgAUEANgIEIAEgADYCCCABIAFBDGo2AgALVQEDfyACBEAgAEGMCGohBANAIAQgACgCACIDTQRAIAAQdhogACgCACEDCyABLQAAIQUgACADQQFqNgIAIAMgBToAACABQQFqIQEgAkEBayICDQALCwtaAQR/IAEQ+wMiAwRAIABBjAhqIQQDQCAEIAAoAgAiAk0EQCAAEHYaIAAoAgAhAgsgAS0AACEFIAAgAkEBajYCACACIAU6AAAgAUEBaiEBIANBAWsiAw0ACwsLVgECfwJAIAAoAgAiAiAAQQxqIgFGBEAgACgCBCEBDAELIAAoAgggASACIAFrEDsgACABNgIAIAAgACgCBEEBaiIBNgIECyAAKAIIIAEQWyAAQQE2AgQLnQIBCH8jAEEQayIFJAAgACgCCCIGQX8gBUEMahAyIQMCQCAFKAIMIgEgAEEMaiICIAAoAgAiBGtBgAhqTQRAIAQgAyABEMwDGiAAIAAoAgAgBSgCDGo2AgAgBkF+ECEMAQsgAiAERwRAIAAoAgggAiAEIAJrEDsgACACNgIAIAAgACgCBEEBajYCBCAGQX4QIwsgACAAKAIEIgFBAWo2AgQgAUEATA0AIAAoAggiCEF/EDMhB0EBIQMDQAJAIAggAyIBQX9zEDMhAiABQQFqIQMgAiAHSSAAKAIEIgQgAWtBCEpyIgZFDQAgAiAHaiEHIAMgBEgNAQsLIAggAyABIAYbIgEQWyAAIAAoAgQgAWtBAWo2AgQLIAVBEGokAAuDAQEBfyABQQFrQfCxf08EQCABIAAoAgggACgCDGtBBHVqQQFqIQELIABBfxAmRQRAIABBfhAhQX8PCyAAIAFBABBGIABBfxAwIQIgAEF+ECEgAgRAIAAgASACEEYgACABQQAQTSAAIAEgAhBNIAIPCyAAIAEgACABEDNBAWoiABBNIAALaAEBfyACQQBOBEAgAUEBa0HwsX9PBEAgASAAKAIIIAAoAgxrQQR1akEBaiEBCyAAIAFBABBGIAAgASACEE0gACgCCCIDQQM2AgggAyACtzkDACAAIAAoAghBEGo2AgggACABQQAQTQsL5wYBCH8jAEHACGsiAyQAIAAoAgggACgCDGtBBHUgA0EANgI4QQFqIQYCQAJAAkACQCABRQRAIABB9RZBBhA7IANBnLEBKAIAIgQ2AjwMAQsgAyABNgIwIABBvw8gA0EwahA+GiADIAFBpxMQ3AMiBDYCPCAEDQBBwM8BKAIAEPoDIQEgACAGQQAQMiECIAMgATYCKCADQYkXNgIgIAMgAkEBajYCJCAAQdwQIANBIGoQPhoMAQsCQCAEEOcDIgJBI0YEQCADQQE2AjgCQANAAkAgBBDnA0EBag4MAAEBAQEBAQEBAQECAQsLIAFBAEchBUF/IQIMAgsgBBDnAyECCyABQQBHIQUgAUUiCA0AIAJBG0cNACMAQRBrIgUkAEGTKRDWAyEHIAQiAigCTBogAhDSAxoCQAJAAkACQCAIBEAgAigCPCAFIAdBv/5fcaw3AwBBBCAFEAciAUGBYE8Ef0HAzwFBACABazYCAEF/BSABC0EATg0BDAMLIAFBkykQ3AMiBEUNAgJAIAQoAjwiCCACKAI8IglGBEAgBEF/NgI8DAELIAdBgIAgcSEHA0AgCCAJIAcQDCIBQXZGDQALIAFBgWBPBH9BwM8BQQAgAWs2AgBBfwUgAQtBAEgNAgsgAiAEKAIAIAIoAgBBAXFyNgIAIAIgBCgCIDYCICACIAQoAiQ2AiQgAiAEKAIoNgIoIAIgBCgCDDYCDCAEENEDGgsgAkEANgKIASACQQA2AkgMAgsgBBDRAxoLIAIQ0QMaQQAhAgsgBUEQaiQAIAMgAiIENgI8IAIEQANAIAQQ5wMiAkEbRyACQX9HcQ0ACyADQQA2AjhBASEFDAELQcDPASgCABD6AyEBIAAgBkEAEDIhAiADIAE2AgggA0GHFzYCACADIAJBAWo2AgQgAEHcECADED4aDAELIAIgBBCJBCAAQQMgA0E4aiAAQX9BABAyEFUhBAJ/IAMoAjwiASgCTEEASARAIAEoAgAMAQsgASgCAAtBBXZBAXEgBQRAIAEQ0QMaC0UNASAAIAYQIUHAzwEoAgAQ+gMhASAAIAZBABAyIQIgAyABNgIYIANBqSg2AhAgAyACQQFqNgIUIABB3BAgA0EQahA+GgsgACAGECJBBiEEDAELIAAgBhAiCyADQcAIaiQAIAQLZwAgASgCAARAIAFBADYCACACQQE2AgBBzDUPCwJ/IAEoAgQiACgCTEEASARAIAAoAgAMAQsgACgCAAtBBHZBAXEEf0EABSACIAFBCGoiAEGACCABKAIEEOEDIgE2AgAgAEEAIAEbCwsvAQF/IwBBEGsiBCQAIAQgAjYCDCAEIAE2AgggAEEEIARBCGogAxBVIARBEGokAAsjACABKAIEIgBFBEBBAA8LIAIgADYCACABQQA2AgQgASgCAAsyAQF/IwBBEGsiAiQAIAIgARD7AzYCDCACIAE2AgggAEEEIAJBCGogARBVIAJBEGokAAskAQJ/QQVBABCAAyIABEAgACgCECIBKAJYGiABQQY2AlgLIAALFwAgA0UEQCABEJoEQQAPCyABIAMQmwQLSQECfyMAQRBrIgEkACABIABBf0EAEDI2AgBBmLEBKAIAIwBBEGsiACQAIAAgATYCDEGcNSABEJIEIABBEGokACABQRBqJABBAAurAQAgAEHusX8QJSAAQe6xf0GrKxBLIABBqytBoDYQcyAAQc0sQQcQOyAAQe6xf0GBKxBLIABBB0EAED8gAEEIQQEQPyAAQX5B3Q0QSyAAQQlBABA/IABBCkEBED8gAEF+Qd4NEEsgAEEAQQEQRyAAQX8QJSAAQX4QThogAEHlCkECEDsgAEF+QbUkEEsgAEELQQEQPyAAQe6xf0GACBBLIABB/x9B4DUQc0ECC04BAn8gAEECEG8hASAAQQFBBRBrIAAoAggiAkEDNgIIIAIgAUEBaiIBtzkDACAAIAAoAghBEGo2AgggAEEBIAEQRiAAQX8QJkEAR0EBdAtDAQF/IABBAUEFEGsgAEHtsX8QJSAAQQEQJSAAKAIIIgFBAzYCCCABRAAAAAAAAAAAOQMAIAAgACgCCEEQajYCCEEDCzYBAX8gAEEBQQUQayAAQQIQISAAQQEQWgR/QQIFIAAoAggiAUEANgIIIAAgAUEQajYCCEEBCwsyAQF/IABBAUEFEGsgAEHtsX8QJSAAQQEQJSAAKAIIIgFBADYCCCAAIAFBEGo2AghBAwudAQEBfyAAQQEQISAAQQAQXhogAEEBEDEEQAJAIABBARAmQQFGBEAgAEEAQQAQRyAAQX8QJSAAKAIIIgFBATYCCCABQQE2AgAgACAAKAIIQRBqNgIIIABB7bF/EEwMAQsCQCAAQQEQSARAIABB7bF/EEUgAEF/EDEgAEF+ECENAQsgAEEBQZwlEGEaCyAAQQEQSBoLIABBAhBOGgtBAQtQAQF/IwBBEGsiASQAIABBARBsAn8gAEEBEDFFBEAgASAAQQJB4zRBABBmNgIAIABBohEgARBiDAELIAAoAgggACgCDGtBBHULIAFBEGokAAvFAQICfwF8IAAgAEEBQbsMQfA3EGVBAnRBkDhqKAIAIgEgAEECQQAQcBBYIQICQAJAAkAgAUEDaw4DAAIBAgsgAEEEQQAQWLdEAAAAAAAAUD+iIAK3oCEDIAAoAggiAkEDNgIIIAIgAzkDACAAIAAoAghBEGo2AghBAQ8LIAAoAggiAUEBNgIIIAEgAkEARzYCACAAIAAoAghBEGo2AghBAQ8LIAAoAggiAUEDNgIIIAEgArc5AwAgACAAKAIIQRBqNgIIQQELRwECfyAAQQFBAEEAEGYhASAAKAIIIAAoAgxrQQR1IQIgACABEH4EQCAAEFkaCyAAQQBBfxBQIAAoAgggACgCDGtBBHUgAmsLPQEBfyAAQQJBARBwIQEgAEEBECECQCAAQQEQKkUNACABQQBMDQAgACABEGQgAEEBECUgAEECEFsLIAAQWQsxAQJ/IABBA0EAEFghASAAKAIIIgJBAzYCCCACIAG3OQMAIAAgACgCCEEQajYCCEEBCyUAIABBARCSASAAQX8QKARAIABB7rF/ECVBAQ8LIABBfxBJQQELmAEBAX8jAEHwAGsiAiQAAkAgAEEBECZBBkYEQCAAQQEQJQwBCwJ/IAEEQCAAQQFBARBwDAELIABBARBvCyIBQQBIBEAgAEEBQb8dEGEaCyAAIAEgAkEMahDdAUUEQCAAQQFBmxgQYRoLIABBth0gAkEMahDgARogAEF/ECYNACACIAE2AgAgAEGzKCACEGIaCyACQfAAaiQACzkBAX8gAEEBEGwgAEEBEEhFBEAgACgCCCIBQQA2AgggACABQRBqNgIIQQEPCyAAQQFBoyIQcRpBAQs2AQF/IAAgAEEBQQBBABBmEH4EfyAAKAIIIgFBADYCCCAAIAFBEGo2AgggAEF+ECNBAgVBAQsLTQEBfyAAQQJBxTBBABBmIQEgAEEBQQYQayAAQQMQISAAQQxBACABEFUEfyAAKAIIIgFBADYCCCAAIAFBEGo2AgggAEF+ECNBAgVBAQsLUQAgAEECQfYNEGogAEEBECUgAEEAQQEQUCAAQX8QJkUEQCACQQA2AgBBAA8LIABBfxAqBEAgAEEDECQgAEEDIAIQMg8LIABB7htBABBiGkEAC2IBBH8jAEEQayICJABBASEBIABBAiAAQQEgAkEMahBnIgNBABBmIQQgACADIAIoAgwgBBCAAQRAIAAoAggiAUEANgIIIAAgAUEQajYCCCAAQX4QI0ECIQELIAJBEGokACABC1oBAn8gAEEBEGwgACAAKAIIIAAoAgxrQQR1QQFrQX9BABBRRSEBIAAoAggiAkEBNgIIIAIgATYCACAAIAAoAghBEGo2AgggAEEBECMgACgCCCAAKAIMa0EEdQvHAQEEfyAAKAIIIAAoAgxrQQR1IQMgAEHusX9BoxsQREGgsQEoAgAhAgJAAkAgA0EATA0AIABBfxAlIABBARAlIABBAUEBEFAgAEF/QQAQMiIBRQ0BIAEgAhDgAyAAQX4QISADQQFGDQBBAiEBA0AgAEF/ECUgACABECUgAEEBQQEQUCAAQX9BABAyIgRFDQJBCSACEN8DIAQgAhDgAyAAQX4QISABIANHIAFBAWohAQ0ACwtBCiACEN8DQQAPCyAAQf4xQQAQYgs/AQJ/IABBARBsIABBAhBsIABBAUECECwhASAAKAIIIgJBATYCCCACIAFBAEc2AgAgACAAKAIIQRBqNgIIQQELHgAgAEEBQQUQayAAQQIQbCAAQQIQISAAQQEQRUEBCyQAIABBAUEFEGsgAEECEGwgAEEDEGwgAEEDECEgAEEBEExBAQuLAQECfyAAKAIIIAAoAgxrQQR1IQICQCAAQQEQJkEERw0AIABBAUEAEDItAABBI0cNACAAKAIIIgFBAzYCCCABIAJBAWu3OQMAIAAgACgCCEEQajYCCEEBDwsgAEEBEG8iASACaiABIAIgASACSBsgAUEASBsiAUEATARAIABBAUHmIxBhGgsgAiABawuRAQEBfyAAQQJBBRBrIABBABCSASAAQQIQJQJAIABBARApRQ0AIABBARAvRAAAAAAAAAAAYg0AIAAoAggiAUEINgIIIAEgADYCACAAIAAoAghBEGo2AgggACgCECgCcBogAEF+ECMgAEF+EE8aQQAPCwJAIABBfhAoRQRAIABBfhBPDQELIABBygxBABBiGgtBAQtUAQF/IABBAhAmIQEgAEEBQQUQawJAAkAgAQ4GAQAAAAABAAsgAEECQcQmEGEaCyAAQQFBoyIQcQRAIABBryJBABBiGgsgAEECECEgAEEBEE4aQQEL/QECBX8BfCMAQRBrIgMkAAJAAkAgAEECQQoQcCIBQQpGBEAgAEEBEGwgAEEBEClFDQEgAEEBEC8hBiAAKAIIIgFBAzYCCCABIAY5AwAgACAAKAIIQRBqNgIIDAILIABBAUEAEGchAiABQQJrQSNPBEAgAEECQYwkEGEaCyACIANBDGogARCFBCEEIAIgAygCDCIBRg0AA0AgAS0AACICQQ5rIAFBAWohASACQSBGDQBBeksNAAsgAg0AIAAoAggiAUEDNgIIIAEgBLg5AwAgACAAKAIIQRBqNgIIDAELIAAoAggiAUEANgIIIAAgAUEQajYCCAsgA0EQaiQAQQELuAEBAn8jAEEQayIBJAAgAEEBEGwCQCAAQQFBoRsQcg0AAkACQAJAAkACQCAAQQEQJg4FAwIEAAEECyAAIABBAUEAEDIQPAwECyAAQQEQJQwDCyAAQdodQYkfIABBARAxGxA8DAILIABBjRhBAxA7DAELIABBARAmIgJBf0YEf0GOHgUgAkECdEHwxABqKAIACyECIAEgAEEBEDc2AgQgASACNgIAIABB4BMgARA+GgsgAUEQaiQAQQELLQAgAEEBEGwgACAAQQEQJiIAQX9GBH9Bjh4FIABBAnRB8MQAaigCAAsQPEEBC4oBAQN/IABBAUEFEGsCQCAAQQJBARBwIgECfyAAQQMQJkEATARAIABBARAzDAELIABBAxBvCyIDSg0AAkAgAyABayICQQBOBEAgACACQQFqIgIQHA0BCyAAQa8ZQQAQYg8LIABBASABEEYgASADTg0AA0AgAEEBIAFBAWoiARBGIAEgA0cNAAsLIAILVwECfyAAQQIQbCAAQQIQISAAQQEQIyAAQQBBf0EBEFFFIQEgACgCCCICQQE2AgggAiABNgIAIAAgACgCCEEQajYCCCAAQQEQJCAAKAIIIAAoAgxrQQR1CzwBAX8gABAfIQECQCAAQQEQJkEGRgRAIABBARAoRQ0BCyAAQQFB0iUQYRoLIABBARAlIAAgAUEBEB1BAQutAQECfwJ/IABBARA2IgEEQCAAIAEgACgCCCAAKAIMa0EEdUEBaxCnAQwBCyAAQQFBkiYQYRogAEEAIAAoAgggACgCDGtBBHVBAWsQpwELIgFBAEgEQCAAKAIIIgFBATYCCCABQQA2AgAgACAAKAIIQRBqNgIIIABBfhAjQQIPCyAAKAIIIgJBATYCCCACQQE2AgAgACAAKAIIQRBqNgIIIAAgAUF/cxAjIAFBAWoL/QEBAn8jAEHwAGsiBCQAAkAgACABRg0AAkACQCABLQAGIgMOAgACAQtBAiEDIAFBACAEQQxqEN0BQQBKDQFBAUEDIAEoAgggASgCDGtBBHUbIQMMAQtBAyEDCyABIAIQHEUEQCAAQZUgQQAQYhoLAkACQCADQQFHBEAgBCADQQJ0QbA4aigCADYCACAAQcgfIAQQPhoMAQsgACABIAIQHSABIAAvATQ7ATQgASACEO8BQQFNBEAgACABKAIIIAEoAgxrQQR1IgJBAWoQHEUEQCAAQbIgQQAQYhoLIAEgACACEB0MAgsgASAAQQEQHQtBfyECCyAEQfAAaiQAIAILSgEBfyAAKAIIIgFBCDYCCCABIAA2AgAgACAAKAIIQRBqNgIIIAAoAhAoAnAgAEYEQCAAKAIIIgFBADYCCCAAIAFBEGo2AggLQQELyQEBA38jAEHwAGsiAyQAAkACQCAAQQEQNiICBEAgACACRg0CAkAgAi0ABiIBDgIAAwILQQIhASACQQAgA0EMahDdAUEASg0CQQFBAyACKAIIIAIoAgxrQQR1GyEBDAILIABBAUGSJhBhGiAARQ0BAkBBBi0AACIBDgIAAgELQQIhAUEAQQAgA0EMahDdAUEASg0BQQFBA0EIKAIAQQwoAgBrQQR1GyEBDAELQQMhAQsgACABQQJ0QbA4aigCABA8IANB8ABqJABBAQtEAQF/IAAQHyEBAkAgAEEBECZBBkYEQCAAQQEQKEUNAQsgAEEBQdIlEGEaCyAAQQEQJSAAIAFBARAdIABBDUEBED9BAQtJAQF/IAAgAEHtsX8QNiAAKAIIIAAoAgxrQQR1EKcBIgFBAEgEQCAAQX8QKgRAIABBARBkIABBfhAjIABBAhBbCyAAEFkaCyABCxUAIAAgACgCCCAAKAIMa0EEdRDxAQvaAwEIfyAAKAIYIQYgACgCACEEIAAoAiAiA0F/RwRAA0AgACgCACgCDCADQQJ0aiIIKAIAIgdBDnYCQCADQQBKBEAgCEEEayIKKAIAIgVBP3FBkMEAaiwAAEEASA0BCyAHIQUgCCEKC0H//wdrIQkCQAJAAkAgBUE/cUEbRgRAIAogBUERdkHA/wFxIAVBmoD/A3FyNgIAIAYgA0F/c2oiBSAFQR91IgdzIAdrQf//B0sNAQwCCyAGIANBf3NqIgUgBUEfdSIKcyAKa0GAgAhJDQILIAAoAgxBzRoQpQILIAgoAgAhBwsgCCAHQf//AHEgBUEOdHJBgID//wdqNgIAIAlBf0cEQCADIAlqQQFqIgNBf0cNAQsLIAAoAhghBgsgAEF/NgIgAkAgBCgCLCAGSgRAIAQoAgwhAwwBCyAEIAAoAhAgBCgCDCAEQSxqQQRB/f///wdBowoQyQIiAzYCDCAAKAIYIQYLIAMgBkECdGogATYCAAJAIAAoAhgiAyAEKAIwSARAIAQoAhQhAQwBCyAEIAAoAhAgBCgCFCAEQTBqQQRB/f///wdBowoQyQIiATYCFCAAKAIYIQMLIAEgA0ECdGogAjYCACAAIAAoAhgiAEEBajYCGCAACyMAIAAgAkEGdCABciADQRd0ciAEQQ50ciAAKAIMKAIIEK0BC8QBAQd/IAAoAiAhAyAAQX82AiAgAEGWgP7/ByAAKAIMKAIIEK0BIQQgA0F/RwRAIARBf0YEQCADDwsgACgCACgCDCEGIAQhAQNAIAYgASICQQJ0aiIFKAIAIgdBDnZB//8HayIBQX9HBEAgASACakEBaiIBQX9HDQELCyAFIAMgAkF/c2oiASABQR91IgJzIAJrQYCACE8EfyAAKAIMQc0aEKUCIAUoAgAFIAcLQf//AHEgAUEOdHJBgID//wdqNgIACyAECx0AIAAgAkEGdCABciADQQ50ciAAKAIMKAIIEK0BC6cBAQR/AkAgAkF/RwRAIAEoAgAiA0F/Rg0BIAAoAgAoAgwhBQNAIAUgAyIBQQJ0aiIEKAIAIgZBDnZB//8HayIDQX9HBEAgASADakEBaiIDQX9HDQELCyAEIAFBf3MgAmoiASABQR91IgJzIAJrQYCACE8EfyAAKAIMQc0aEKUCIAQoAgAFIAYLQf//AHEgAUEOdHJBgID//wdqNgIACw8LIAEgAjYCAAskACAAIAJBF3RBgICABGogAUEGdHJBHnIgACgCDCgCCBCtARoLuwMBBX8CQAJAIAIgACgCGEYEQCAAIAI2AhwgAUF/Rg0BIAAoAiAiAkF/Rg0CIAAoAgAoAgwhBgNAIAYgAiIDQQJ0aiIEKAIAIgVBDnZB//8HayICQX9HBEAgAiADakEBaiICQX9HDQELCyAEIANBf3MgAWoiASABQR91IgJzIAJrQYCACE8EfyAAKAIMQc0aEKUCIAQoAgAFIAULQf//AHEgAUEOdHJBgID//wdqNgIADwsgAUF/Rg0AA0AgACgCACgCDCABQQJ0aiIEKAIAIgVBDnYCQCABQQBKBEAgBEEEayIGKAIAIgNBP3FBkMEAaiwAAEEASA0BCyAFIQMgBCEGC0H//wdrIQcCQAJAAkAgA0E/cUEbRgRAIAYgA0ERdkHA/wFxIANBmoD/A3FyNgIAIAFBf3MgAmoiAyADQR91IgVzIAVrQf//B0sNAQwCCyABQX9zIAJqIgMgA0EfdSIGcyAGa0GAgAhJDQILIAAoAgxBzRoQpQILIAQoAgAhBQsgBCAFQf//AHEgA0EOdHJBgID//wdqNgIAIAdBf0YNASABIAdqQQFqIgFBf0cNAAsLDwsgACABNgIgC7EBAQV/IAAgACgCGDYCHAJAIAFBf0cEQCAAKAIgIgNBf0YNASAAKAIAKAIMIQUDQCAFIAMiAkECdGoiBCgCACIGQQ52Qf//B2siA0F/RwRAIAIgA2pBAWoiA0F/Rw0BCwsgBCACQX9zIAFqIgIgAkEfdSIBcyABa0GAgAhPBH8gACgCDEHNGhClAiAEKAIABSAGC0H//wBxIAJBDnRyQYCA//8HajYCAAsPCyAAIAE2AiALtAIBB38CQCABQX9GDQAgA0EGdEHA/wBxIQogA0H/AUYhCwNAIAAoAgAoAgwgAUECdGoiBygCACIGQQ52AkAgAUEASgRAIAdBBGsiCSgCACIFQT9xQZDBAGosAABBAEgNAQsgBiEFIAchCQtB//8HayEIAkACQAJAIAVBP3FBG0YEQCAJIAVBEXZBwP8BcSAFQZqA/wNxciIGIAYgBUGbgH9xIApyIAVBF3YgA0YbIAsbNgIAIAFBf3MgAmoiBSAFQR91IgZzIAZrQf//B0sNAQwCCyABQX9zIARqIgUgBUEfdSIJcyAJa0GAgAhJDQILIAAoAgxBzRoQpQILIAcoAgAhBgsgByAGQf//AHEgBUEOdHJBgID//wdqNgIAIAhBf0YNASABIAhqQQFqIgFBf0cNAAsLC1sBA38gACgCJCABaiICIAAoAgAiBC0AS0wEQCAAIAI2AiQPCyACIQMgAkH6AU8EQCAAKAIMQYgJEKUCIAAoAgAhBCAAKAIkIAFqIQMLIAQgAjoASyAAIAM2AiQLKwEBfyMAQRBrIgIkACACQQQ2AgggAiABNgIAIAAgAiACELgBIAJBEGokAAuaAwIHfwF8IAAoAhAiCCAAKAIEIAEQogMiASgCCEEDRgRAIAErAwAiCplEAAAAAAAA4EFjBEAgCqoPC0GAgICAeA8LIAAoAgAiBCgCKCEGIAAoAighAyABQQM2AgggASADtzkDACAEQShqIgEoAgAiBSAAKAIoTARAIAQgCCAEKAIIIAFBEEH//w9BtgoQyQI2AgggBCgCKCEFCyAEKAIIIQcCQCAFIAZMDQAgBSAGIgNrQQdxIgkEQEEAIQEDQCAHIANBBHRqQQA2AgggA0EBaiEDIAFBAWoiASAJRw0ACwsgBiAFa0F4Sw0AA0AgByADQQR0aiIBQQA2AgggAUEANgIYIAFBADYCKCABQQA2AjggAUEANgJIIAFBADYCWCABQQA2AmggAUEANgJ4IANBCGoiAyAFRw0ACwsgByAAKAIoQQR0aiIBIAIpAwA3AwAgASACKAIIIgE2AggCQCABQQRIDQAgAigCACIBLQAFQQNxRQ0AIAQtAAVBBHFFDQAgCCAEIAEQgwILIAAgACgCKCIAQQFqNgIoIAAL/QEBA38CQAJAAkAgASgCAEENaw4CAAECCyAAKAIAKAIMIAEoAghBAnRqIgAgACgCAEH//4B8cSACQQ50QYCAAWpBgID/A3FyNgIADwsgACgCACIDKAIMIgQgASgCCEECdGoiBSAFKAIAQf///wNxIAJBF3RyQYCAgARqNgIAIAQgASgCCEECdGoiASAAKAIkQQZ0QcD/AHEgASgCAEG/gH9xcjYCACAAKAIkIgJBAWohAQJAIAMtAEsgAkoEQCABIQIMAQsgASECIAFB+gFPBEAgACgCDEGICRClAiAAKAIAIQMgACgCJEEBaiECCyADIAE6AEsLIAAgAjYCJAsLzAIBAX8CQAJAAkACQAJAAkACQAJAIAEoAgBBBmsOCQABAgMGBgYEBQYLIAFBDDYCAA8LIAAgASgCCEEXdEEEciAAKAIMKAIIEK0BIQAMBQsgACABKAIIQQ50QQVyIAAoAgwoAggQrQEhAAwECwJAIAEoAgwiAkGAAnENACACIAAtADJIDQAgACAAKAIkQQFrNgIkCwJAIAEoAggiAkGAAnENACACIAAtADJIDQAgACAAKAIkQQFrNgIkIAEoAgghAgsgACACQRd0IAEoAgxBDnRyQQZyIAAoAgwoAggQrQEhAAwDCyABQQw2AgAgASAAKAIAKAIMIAEoAghBAnRqKAIAQQZ2Qf8BcTYCCA8LIAAoAgAoAgwgASgCCEECdGoiACAAKAIAQf///wNxQYCAgAhyNgIAIAFBCzYCAAsPCyABQQs2AgAgASAANgIIC6IBAQN/IAAgARC6AQJAIAEoAgBBDEcNACABKAIIIgJBgAJxDQAgAiAALQAySA0AIAAgACgCJEEBazYCJAsgACgCJCICQQFqIQMCQCAAKAIAIgQtAEsgAkoEQCADIQIMAQsgAyICQfoBTwRAIAAoAgxBiAkQpQIgACgCACEEIAAoAiRBAWohAgsgBCADOgBLCyAAIAI2AiQgACABIAJBAWsQvAEL2QcBCH8gACABIAIQvQECQCABKAIAQQpHDQAgASgCCCIEQX9GDQAgASgCECIDQX9HBEAgACgCACgCDCEGA0AgBiADIgVBAnRqIggoAgAiB0EOdkH//wdrIgNBf0cEQCADIAVqQQFqIgNBf0cNAQsLIAggBCAFQX9zaiIDIANBH3UiBXMgBWtBgIAITwR/IAAoAgxBzRoQpQIgCCgCAAUgBwtB//8AcSADQQ50ckGAgP//B2o2AgAMAQsgASAENgIQCyABKAIQIgMgASgCFCIFRwRAQX8hCAJAAkACQCADQX9GDQAgACgCACgCDCEGA0AgBiADQQJ0aiEEAkAgA0EASgRAIARBBGsoAgAiB0E/cUGQwQBqLAAAQQBIDQELIAQoAgAhBwsgB0E/cUEbRw0CIAQoAgBBDnZB//8HayIEQX9GDQEgAyAEakEBaiIDQX9HDQALC0F/IQcgBUF/Rg0BIAAoAgAoAgwhBgNAIAYgBUECdGohBAJAIAVBAEoEQCAEQQRrKAIAIgNBP3FBkMEAaiwAAEEASA0BCyAEKAIAIQMLIANBP3FBG0cNASAEKAIAQQ52Qf//B2siA0F/RgRADAMLIAMgBWpBAWoiBUF/Rw0ACwwBC0F/IQUCQCABKAIAQQpGDQAgACgCICEEIABBfzYCICAAQZaA/v8HIAAoAgwoAggQrQEhBSAEQX9GDQAgBUF/RgRAIAQhBQwBCyAAKAIAKAIMIQkgBSEDA0AgCSADIghBAnRqIgYoAgAiB0EOdkH//wdrIgNBf0cEQCADIAhqQQFqIgNBf0cNAQsLIAYgBCAIQX9zaiIDIANBH3UiBHMgBGtBgIAITwR/IAAoAgxBzRoQpQIgBigCAAUgBwtB//8AcSADQQ50ckGAgP//B2o2AgALIAAgACgCGDYCHCAAIAJBBnQiA0GCgAFyIAAoAgwoAggQrQEhByAAIAAoAhg2AhwgACADQYKAgARyIAAoAgwoAggQrQEhCCAAIAAoAhg2AhwgBUF/Rg0AIAAoAiAiA0F/RwRAIAAoAgAoAgwhCgNAIAogAyIEQQJ0aiIGKAIAIglBDnZB//8HayIDQX9HBEAgAyAEakEBaiIDQX9HDQELCyAGIAUgBEF/c2oiAyADQR91IgVzIAVrQYCACE8EfyAAKAIMQc0aEKUCIAYoAgAFIAkLQf//AHEgA0EOdHJBgID//wdqNgIADAELIAAgBTYCIAsgACAAKAIYIgM2AhwgACABKAIUIAMgAiAHELUBIAAgASgCECADIAIgCBC1AQsgASACNgIIIAFCfzcDECABQQw2AgALygMCBH8BfCMAQRBrIgQkACAAIAEQugECQAJAAkACQAJAAkACQAJAAkAgASgCACIDQQFrDgwAAQECAwgICAgIBAUICyAAKAIYIgMgACgCHEwNBSADRQRAIAAtADIgAkwNBwwGCyAAKAIAKAIMIANBAnRqQQRrIgUoAgAiA0E/cUEDRw0FIANBBnZB/wFxIAJKDQUgA0EXdiIGQQFqIAJIDQUgAiAGTQ0GIAUgA0HD//8DcSACQRd0cjYCAAwGCyAAIAJBBnRBgICABEECIANBAkYbckECciAAKAIMKAIIEK0BGgwFCyAAIAJBBnQgASgCCEEOdHJBAXIgACgCDCgCCBCtARoMBAsgASsDCCEHIARBAzYCCCAEIAc5AwAgACACQQZ0IAAgBCAEELgBQQ50ckEBciAAKAIMKAIIEK0BGgwDCyAAKAIAKAIMIAEoAghBAnRqIgAgACgCAEG/gH9xIAJBBnRBwP8AcXI2AgAMAgsgASgCCCIDIAJGDQEgACADQRd0IAJBBnRyIAAoAgwoAggQrQEaDAELIAAgAkEXdCACQQZ0ckEDciAAKAIMKAIIEK0BGgsgAUEMNgIAIAEgAjYCCAsgBEEQaiQAC/QBAQN/IAAgARC6AQJ/AkAgASgCAEEMRw0AIAFBCGogASgCECABKAIURg0BGiABKAIIIgIgAC0AMkgNACAAIAEgAhC8ASABKAIIDwsgACABELoBAkAgASgCAEEMRw0AIAEoAggiAkGAAnENACACIAAtADJIDQAgACAAKAIkQQFrNgIkCyAAKAIkIgNBAWohAgJAIAAoAgAiBC0ASyADSgRAIAIhAwwBCyACIQMgAkH6AU8EQCAAKAIMQYgJEKUCIAAoAgAhBCAAKAIkQQFqIQMLIAQgAjoASwsgACADNgIkIAAgASADQQFrELwBIAFBCGoLKAIACyAAIAEoAhAgASgCFEcEQCAAIAEQvgEaDwsgACABELoBC5wCAgJ/AXwjAEEgayICJAACQCABKAIQIAEoAhRHBEAgACABEL4BGgwBCyAAIAEQugELAn8CQAJAAkAgASgCACIDQQFrDgUAAAABAAILIAAoAihB/wFKDQECfwJAAkACQCADQQFrDgUAAgICAQILIAJBADYCCCAAKAIEIQMgAkEFNgIYIAIgAzYCECAAIAJBEGogAhC4AQwCCyABKwMIIQQgAkEDNgIYIAIgBDkDECAAIAJBEGoiACAAELgBDAELIAJBATYCGCACIANBAkY2AhAgACACQRBqIgAgABC4AQshACABQQQ2AgAgASAANgIIIABBgAJyDAILIAEoAggiA0H/AUoNACADQYACcgwBCyAAIAEQvgELIAJBIGokAAvxAQEBfwJAIAACfwJAAkACQAJAIAEoAgBBBmsOBAABAgMFCwJAIAIoAgBBDEcNACACKAIIIgNBgAJxDQAgAyAALQAySA0AIAAgACgCJEEBazYCJAsgACACIAEoAggQvAEPCyAAIAIQvgFBBnQgASgCCEEXdHJBCHIMAgsgACACEL4BQQZ0IAEoAghBDnRyQQdyDAELIAAgAhDAAUEOdCABKAIIQQZ0ciABKAIMQRd0ckEJcgsgACgCDCgCCBCtARoLAkAgAigCAEEMRw0AIAIoAggiAUGAAnENACABIAAtADJIDQAgACAAKAIkQQFrNgIkCwv9AwEGfyAAIAEQugECQAJ/AkACQCABKAIAQQJrDgkDAQMDAQEBAQABCyAAKAIAKAIMIAEoAggiAkECdGohAwJAIAJBAEoEQCADQQRrIgQoAgAiAkE/cUGQwQBqLAAAQQBIDQELIAMoAgAhAiADIQQLIAQgAkG/gH9xIAJBwP8AcUVBBnRyNgIAIAEoAggMAQsgACABQQAQwwELIgVBf0YNACABKAIUIgJBf0cEQCAAKAIAKAIMIQcDQCAHIAIiA0ECdGoiBigCACIEQQ52Qf//B2siAkF/RwRAIAIgA2pBAWoiAkF/Rw0BCwsgBiAFIANBf3NqIgIgAkEfdSIDcyADa0GAgAhPBH8gACgCDEHNGhClAiAGKAIABSAEC0H//wBxIAJBDnRyQYCA//8HajYCAAwBCyABIAU2AhQLIAEoAhAhBSAAIAAoAhg2AhwCQCAFQX9HBEAgACgCICICQX9GDQEgACgCACgCDCEHA0AgByACIgNBAnRqIgYoAgAiBEEOdkH//wdrIgJBf0cEQCACIANqQQFqIgJBf0cNAQsLIAYgBSADQX9zaiICIAJBH3UiA3MgA2tBgIAITwR/IAAoAgxBzRoQpQIgBigCAAUgBAtB//8AcSACQQ50ckGAgP//B2o2AgALIAFBfzYCEA8LIAAgBTYCICABQX82AhAL/wEBA38CQAJAAkACQCABKAIAQQtrDgIAAgELIAAoAgAoAgwgASgCCEECdGooAgAiA0E/cUETRw0AIAAgACgCGEEBazYCGCAAQRogA0EXdkEAIAJFEMQBDwsgACgCJCIDQQFqIQQCQCAAKAIAIgUtAEsgA0oEQCAEIQMMAQsgBCIDQfoBTwRAIAAoAgxBiAkQpQIgACgCACEFIAAoAiRBAWohAwsgBSAEOgBLCyAAIAM2AiQgACABIANBAWsQvQEgASgCAEEMRw0BCyABKAIIIgNBgAJxDQAgAyAALQAySA0AIAAgACgCJEEBazYCJAsgAEEbQf8BIAEoAgggAhDEAQvmAQEDfyAAIAJBBnQgAXIgA0EXdHIgBEEOdHIgACgCDCgCCBCtARogACgCICEFIABBfzYCICAAQZaA/v8HIAAoAgwoAggQrQEhASAFQX9HBEAgAUF/RgRAIAUPCyAAKAIAKAIMIQcgASEDA0AgByADIgJBAnRqIgYoAgAiBEEOdkH//wdrIgNBf0cEQCACIANqQQFqIgNBf0cNAQsLIAYgBSACQX9zaiICIAJBH3UiA3MgA2tBgIAITwR/IAAoAgxBzRoQpQIgBigCAAUgBAtB//8AcSACQQ50ckGAgP//B2o2AgALIAELGQAgACACEMABIQAgAUEJNgIAIAEgADYCDAvtAwIDfAN/AkACQAJAIAIoAgBBBUcNACACKAIQQX9HDQAgAigCFEF/Rw0AIAMoAgBBBUcNACADKAIQQX9HDQAgAygCFEF/Rw0AIAMrAwghBCACKwMIIQUCQAJ8AkACQAJAAkACQAJAAkAgAUEMaw4JAAECAwQFBggLCAsgBSAEoAwGCyAFIAShDAULIAUgBKIMBAsgBEQAAAAAAAAAAGENBiAFIASjDAMLIAREAAAAAAAAAABhDQUgBSAFIASjnCAEoqEMAgsgBSAEEOwDDAELIAWaCyIGIAZiDQELIAIgBjkDCA8LIAFBEmsOAwEAAQALIAAgAxDAASEHCwJAAkAgByAAIAIQwAEiCEgEQAJAIAIoAgBBDEcNACACKAIIIglBgAJxDQAgCSAALQAySA0AIAAgACgCJEEBazYCJAsgAygCAEEMRw0CIAMoAggiA0GAAnENAiADIAAtADJODQEMAgsCQCADKAIAQQxHDQAgAygCCCIDQYACcQ0AIAMgAC0AMkgNACAAIAAoAiRBAWs2AiQLIAIoAgBBDEcNASACKAIIIgNBgAJxDQEgAyAALQAySA0BCyAAIAAoAiRBAWs2AiQLIAAgB0EOdCAIQRd0ciABciAAKAIMKAIIEK0BIQAgAkELNgIAIAIgADYCCAt2AQJ/IANBF3RBACADQX9HGyEEIAFBBnQhBSACQQFrQTJtQQFqIQMCQCACQc7HAUwEQCAEIANBDnRyIAVyQSJyIQMMAQsgACAEIAVyQSJyIAAoAgwoAggQrQEaCyAAIAMgACgCDCgCCBCtARogACABQQFqNgIkCw4AIABBphpBwDgQc0EBC6kBAQN/IwBBgAJrIgEkAEH1NEELQQFBmLEBKAIAIgIQ5gMaAkAgAUH6AUGcsQEoAgAiAxDVA0UNAANAIAFBljVBBhDrA0UNAQJAIAAgASABEPsDQaYwEIABRQRAIABBAEEAQQAQUUUNAQsgAEF/QQAQMiACEOADQQogAhDfAwsgAEEAECFB9TRBC0EBIAIQ5gMaIAFB+gEgAxDVAw0ACwsgAUGAAmokAEEACxAAIABBARBsIABBARBJQQELlgIBBH8jAEEQayIDJAAgACECIABBARAmQQhGBEAgAEEBEDYhAgsgAi0AOCEEAkACQCACKAJEIgFFDQAgAUErRg0AIABB6xhBDRA7DAELIAAQzQEgACgCCCIBQQI2AgggASACNgIAIAAgACgCCEEQajYCCCAAQX4QRSAAQX4QIgtBACEBIARBAXEEQCADQeMAOgALQQEhAQsgBEECcQRAIANBC2ogAWpB8gA6AAAgAUEBaiEBCyAEQQRxBH8gA0ELaiABakHsADoAACABQQFqBSABCyADQQtqIgFqQQA6AAAgACABEDwgAigCPCECIAAoAggiAUEDNgIIIAEgArc5AwAgACAAKAIIQRBqNgIIIANBEGokAEEDC8MBAQF/IAAoAggiAkECNgIIIAJB1Dk2AgAgACAAKAIIQRBqNgIIIABB8LF/EEUgACgCCCICQQI2AgggAiAANgIAIAAgACgCCEEQajYCCCAAQX4QRSAAQX8QJkEGRgRAIAAgASgCAEECdEHAOWooAgAQPAJAIAEoAhQiAUEATgRAIAAoAggiAkEDNgIIIAIgAbc5AwAgACAAKAIIQRBqNgIIDAELIAAoAggiAUEANgIIIAAgAUEQajYCCAsgAEECQQAQUAsLdgEBfyAAKAIIIgFBAjYCCCABQdQ5NgIAIAAgACgCCEEQajYCCCAAQfCxfxBFIABBfxAmQQVHBEAgAEF+ECEgAEEAQQEQRyAAKAIIIgFBAjYCCCABQdQ5NgIAIAAgACgCCEEQajYCCCAAQX4QJSAAQfCxfxBMCwupBQEFfyMAQfAAayICJAAgACEDIABBARAmQQhGBEBBASEBIABBARA2IQMLIAAgAUECciIEQe4KQQAQZiEFAkACQAJAIAAgAUEBaiIBECkEQCADIAAgARAwIAJBDGoQ3QENASAAKAIIIgNBADYCCCAAIANBEGo2AghBASEBDAMLIAAgARAmQQZHDQEgAiAFNgIAIABBww8gAhA+GiAAQX9BABAyIQUgACABECUgACADQQEQHQsgAyAFIAJBDGoQ4AFFBEAgACAEQZsVEGEhAQwCCyAAQQBBAhBHIAVB0wAQ9QMEQCAAIAIoAhwQPCAAQX5BxSQQSyAAIAJBMGoQPCAAQX5B5SgQSyACKAIoIQEgACgCCCIEQQM2AgggBCABtzkDACAAIAAoAghBEGo2AgggAEF+Qe0nEEsgAigCLCEBIAAoAggiBEEDNgIIIAQgAbc5AwAgACAAKAIIQRBqNgIIIABBfkHpJxBLIAAgAigCGBA8IABBfkGRDRBLCyAFQewAEPUDBEAgAigCICEBIAAoAggiBEEDNgIIIAQgAbc5AwAgACAAKAIIQRBqNgIIIABBfkGJIBBLCyAFQfUAEPUDBEAgAigCJCEBIAAoAggiBEEDNgIIIAQgAbc5AwAgACAAKAIIQRBqNgIIIABBfkHsDRBLCyAFQe4AEPUDBEAgACACKAIQEDwgAEF+QYUhEEsgACACKAIUEDwgAEF+QY0NEEsLIAVBzAAQ9QMEQAJAIAAgA0YEQCAAQX4QJSAAQX0QIgwBCyADIABBARAdCyAAQX5B7Q4QSwtBASEBIAVB5gAQ9QNFDQECQCAAIANGBEAgAEF+ECUgAEF9ECIMAQsgAyAAQQEQHQsgAEF+Qe8oEEsMAQsgACABQeglEGEhAQsgAkHwAGokACABC6kBAQR/IwBB8ABrIgQkACAAIQEgAEEBECZBCEYEQEEBIQMgAEEBEDYhAQsCQCABIAAgA0EBaiICEG8gBEEMahDdAUUEQCAAIAJB+SMQYSECDAELQQIhAiABIARBDGogACADQQJyEG8Q3gEiAwRAIAEgAEEBEB0gACADEDwgAEF+ECUMAQsgACgCCCIBQQA2AgggACABQRBqNgIIQQEhAgsgBEHwAGokACACCwwAIABB8LF/ECVBAQssAQF/IABBARBsIABBARBIRQRAIAAoAggiAUEANgIIIAAgAUEQajYCCAtBAQs+AQJ/IABBAhBvIQEgAEEBQQYQawJAIABBARAoDQAgAEEBIAEQXyIBRQ0AIAAgARA8IABBfhAjQQIhAgsgAgsmACAAQQJBBRBrIABBAhAhIABBARBPRQRAIABBygxBABBiGgtBAQuBAgEGfyAAIQMgAEEBECZBCEYEQEEBIQEgAEEBEDYhAwsCfyAAIAFBAWoiBRAmQQBMBEAgACAFECFBACEBQQAMAQsgACABQQJyQQAQZyECIAAgBUEGEGsgACABQQNqQQAQcCEBIAJB4wAQ9QNBAEciBEECciAEIAJB8gAQ9QMbIgRBBHIgBCACQewAEPUDGyICQQhyIAIgAUEAShshAkErCyEEIAAQzQEgACgCCCIGQQI2AgggBiADNgIAIAAgACgCCEEQajYCCCAAIAUQJSAAQX0QTCAAQX4QISADIAE2AkAgAyABNgI8IAMgBEEAIAIbNgJEIAMgAkEAIAQbOgA4QQALiwEBBH8jAEHwAGsiBCQAIAAhAwJ/IABBARAmQQhGBEBBASECIABBARA2IQMLIAMgACACQQFqIgEQbyAEQQxqEN0BRQRAIAAgAUH5IxBhDAELIAAgAkEDaiIBEGwgACABECEgACADQQEQHSAAIAMgBEEMaiAAIAJBAnIQbxDfARA8QQELIARB8ABqJAALVgECfwJAAkAgAEECECYOBgEAAAAAAQALIABBAkHEJhBhGgsgAEECECEgAEEBEE4hASAAKAIIIgJBATYCCCACIAFBAEc2AgAgACAAKAIIQRBqNgIIQQELRAECfyAAQQMQbCAAQQIQbyEBIABBAUEGEGsCQCAAQQEQKA0AIABBASABEGAiAUUNACAAIAEQPCAAQX8QI0EBIQILIAILvAQBB38jAEGgAWsiASQAIAAhAyAAQQEQJkEIRgRAQQEhBSAAQQEQNiEDCwJAIAAgBUECciICECkEQCAAIAIQMCECIABBfhAhDAELIAAgA0YhAgsCQAJAIAUgACgCCCAAKAIMa0EEdUYEQCAAQdI1QQAQOwwBCyAAIAVBAWoQKkUNASAAQcw1QQEQOwsgAEGqLEEQEDsCQCADIAIgAUE8ahDdAUUNACABQeAAaiEGQQEhBANAIARBf3MhByACIQQDQCAEIgJBAWohBCACQQxIIAdyQQFxRQRAIAMgAkELaiABQTxqEN0BBEAgAEHiLEEFEDsDQCAEIgJBAWohBCADIAJBCmogAUE8ahDdAQ0ACwtBACEEIAMgAiABQTxqEN0BDQIMAwsgAEHONUECEDsgA0HaFyABQTxqEOABGiABIAY2AjAgAEGmLCABQTBqED4aIAEoAlAiAkEASgRAIAEgAjYCICAAQbssIAFBIGoQPhoLAkAgASgCRC0AAARAIAEgASgCQDYCECAAQaEzIAFBEGoQPhoMAQsCQAJAAkACQCABKAJILQAAIgJB7QBrDggAAgICAgICAwELIABB+RhBABA+GgwDCyACQcMARg0BCyABIAY2AgAgASABKAJYNgIEIABB/isgARA+GgwBCyAAQdwrQQIQOwsgACAAKAIIIAAoAgxrQQR1IAVrEFsgAyAEIAFBPGoQ3QENAAsLCyAAIAAoAgggACgCDGtBBHUgBWsQWwsgAUGgAWokAEEBCyoAIAAgAzYCQCAAIAM2AjwgACABQQAgAhs2AkQgACACQQAgARs6ADhBAQsHACAAKAJECwcAIAAtADgLBwAgACgCPAt8AQN/IAAoAhQhAwJAIAFBAEoEQCAAKAIoIQUDQCADIAVNDQIgAUEBayEBIAMoAgQoAgAtAAZFBEAgASADKAIUayEBCyADQRhrIQMgAUEASg0ACwsgAiABBH9BAAUgAyAAKAIoIgBNDQEgAyAAa0EYbQs2AmBBASEECyAEC/8BAQN/AkACQAJAIAAoAiggASgCYEEYbGoiASgCBCIDKAIIQQZHDQAgAygCACIELQAGDQAgBCgCECIFRQ0AAn8gASAAKAIURwRAIAEoAgwhBCAFDAELIAEgACgCGCIENgIMIAMoAgAoAhALIQMgBSACIAQgAygCDGtBAnVBAWsQ+QEiBEUNACABKAIAIQEMAQtBACEDIAJBAEwNAUGGLSEEIABBCGogAUEcaiAAKAIUIAFGGygCACABKAIAIgFrQQR1IAJIDQELIAAoAggiAyABIAJBBHRqQRBrIgEpAwA3AwAgAyABKAIINgIIIAAgACgCCEEQajYCCCAEIQMLIAMLiAIBA38CQAJAAkAgACgCKCABKAJgQRhsaiIDKAIEIgQoAghBBkcNACAEKAIAIgEtAAYNACABKAIQIgFFDQACfyADIAAoAhRHBEAgAygCDCEFIAEMAQsgAyAAKAIYIgU2AgwgBCgCACgCEAshBCABIAIgBSAEKAIMa0ECdUEBaxD5ASIFRQ0AIAMoAgAhAQwBC0EAIQQgAkEATA0BQYYtIQUgAEEIaiADQRxqIAAoAhQgA0YbKAIAIAMoAgAiAWtBBHUgAkgNAQsgASACQQR0aiIBQRBrIAAoAggiAkEQaykDADcDACABQQhrIAJBCGsoAgA2AgAgBSEECyAAIAAoAghBEGs2AgggBAuaCQENfwJAAkACQAJAAkACQAJAAn8CQAJAAkAgAS0AAEE+RgRAIAAoAghBEGsiAygCACEGIAAgAzYCCCABQQFqIQEMAQsgAigCYCIDRQ0BIAAoAiggA0EYbGoiBygCBCgCACEGCyAGRQ0AIAJBJGohDSAHQQxrIQogB0EUayEOIAdBGGshCyACQQRqIQ8gASEDQQEhCQNAAkACQAJAAkACQAJAAkAgAy0AACIEQcwAaw4qBgUFBQUFBQAFBQUFBQUFBQUFBQUFBQUFBQUGBQUFBQUBBQMFBQUFBQUCBAsCfyAGLQAGBEAgAkF/NgIcQbsqIQUgAkG7KjYCEEHOKyEIQX8MAQsgAiAGKAIQKAIgQRBqIgU2AhAgAiAGKAIQKAI8IgQ2AhxBrCpB/BYgBBshCCAGKAIQKAJACyEEIAIgCDYCDCACIAQ2AiAgDSAFQTwQ3gIgA0EBaiEDDAYLQX8hBAJAIAdFDQAgBygCBCIFKAIIQQZHDQAgBSgCACIILQAGDQACQCAHIAAoAhRHBEAgBygCDCEMDAELIAcgACgCGCIMNgIMIAUoAgAhCAsgDCAIKAIQIgUoAgxrIghBBEgNACAFKAIUIgRFBEAgAkEANgIUIANBAWohAwwHCyAEIAhqQQRrKAIAIQQLIAIgBDYCFCADQQFqIQMMBQsgAiAGLQAHNgIYIANBAWohAwwECwJAIAdFDQACQCAHKAIEIgQoAghBBkcNACAEKAIALQAGDQAgBygCFEEASg0BCyAOKAIAIgQoAghBBkcNACAEKAIAIgUtAAYNACAFKAIQKAIMIQUCfyALIAAoAhRHBEAgCigCACEIIAUMAQsgCiAAKAIYIgg2AgAgBCgCACgCECgCDAshBCAFIAggBGtqQQRrKAIAIgRBP3FBHGsiBUEFSw0AQQEgBXRBI3FFDQAgAiAAIAsgBEEGdkH/AXEgDxDhASIENgIIIAQNAwsgAkEANgIEIAJB0jU2AgggA0EBaiEDDAMLIARFDQQLQQAhCQsgA0EBaiEDDAALAAsgAkJ/NwIcIAJBfzYCFCACQZYYNgIMIAJB0jU2AgQgAkHSNTYCCCACQb0vNgIQIAJBJGpBvS9BPBDeAkEAIQYgAkEANgIYIAFB5gAQ9QNFBEBBASEJQQEhAwwDCyAAKAIIIgJBADYCCEEBIQlBAQwBCyABQeYAEPUDRQ0CIAAoAggiAkEGNgIIIAIgBjYCACAAKAIIIQJBAAshAyAAKAIcIAJrQRBMBEAgAEEBEOoBCyAAIAAoAghBEGo2AggLIAFBzAAQ9QNFDQUgAw0CDAELIAFBzAAQ9QNFDQQLIAYtAAZFDQELIAAoAggiA0EANgIIDAELQQAhAyAAQQBBABCgAyEBIAYoAhAiAigCMEEASgRAIAIoAhQhAgNAIAAgASACIANBAnRqKAIAEKMDIgRBATYCCCAEQQE2AgAgA0EBaiIDIAYoAhAoAjBIDQALCyAAKAIIIgJBBTYCCCACIAE2AgAgACgCCCEDCyAAIAAoAhwgA2tBEEwEfyAAQQEQ6gEgACgCCAUgAwtBEGo2AggLIAkLlAMBBH8CQAJAAkACQANAIAEoAgQiBCgCCEEGRw0EIAQoAgAiBS0ABg0EIAUoAhAhBQJ/IAEgACgCFEcEQCABKAIMIQcgBQwBCyABIAAoAhgiBzYCDCAEKAIAKAIQCyEEIAMgBSACQQFqIAcgBCgCDGtBAnVBAWsiBBD5ASIHNgIAIAcEQEHLGA8LAkAgBSAEIAIQ4gEiBEE/cSICBEACQCACQQRrDggEAAIHBwcHBQcLIAUoAgggBEEKdkHw//8BcWooAgBBEGohAUHRGCEGDAULIARBF3YiAiAEQQZ2Qf8BcUkNAQwFCwtBgCUhBkHdKyEBIARBgICAAnFFDQIgBSgCCCAEQQp2QfAfcWoiACgCCEEERw0CIAAoAgBBEGohAQwCC0HtHSEGIAUoAhwiAEUEQEHdKyEBDAILIAAgBEEVdkH8D3FqKAIAQRBqIQEMAQtB2iQhBkHdKyEBIARBgICAAnFFDQAgBSgCCCAEQQp2QfAfcWoiACgCCEEERw0AIAAoAgBBEGohAQsgAyABNgIACyAGC7oKARF/AkACQCAALQBLIghB+gFLDQAgAC0ASiIDQQVxQQRGDQAgAC0ASSADQQFxaiAISw0AIAAtAEgiEiAAKAIkSA0AIAAoAiwiC0EATA0AIAAoAjAiBEUgBCALRnJFDQAgACgCDCINIAtBAnRqQQRrKAIAQT9xQR5HDQAgC0EBayEOAkAgAUEATARAIA4hCQwBCyADQQZxQQJHIRMgDiEJA0AgDSAHQQJ0aiIMKAIAIgZBP3EiEUElSw0DIAggBkEGdkH/AXEiCk0NAyARQZDBAGotAAAiBMAhD0EAIQNBACEFAkACQAJAAkAgBEEDcQ4DAAECAwsgBkEXdiEFAkACQAJAAkAgBEEEdkEDcQ4EAAMBAgMLIAZBgICABEkNAgwJCyAFIAhJDQEMCAsgBkEASARAIAAoAiggBUH/AXFKDQEMCAsgBSAISQ0ADAcLIAZBDnYiEEH/A3EiBCEDAkACQAJAIA9BAnZBA3EOBAAFAQIFC0EAIQNBACEGIARFDQQMBwsgBCAISQ0DDAcLIAZBgICAAnEEQCAAKAIoIBBB/wFxSg0DDAcLIAQgCEkNAgwGCyAGQQ52IQUgBEEwcUEwRw0BQQAhBiAFIAAoAihIDQEMBAsgBkEOdkH//wdrIQUgBEEwcUEgRw0AQQAhBiAFIAdqIhBBAWoiA0EASA0DIAMgC04NAyADRQRAQQAhAwwBC0EAIQQCQANAIA0gECAEa0ECdGooAgBBv4D/A3FBIkcNASAEQQFqIgQgA0cNAAsgAyEEC0EAIQMgBEEBcQ0DCyAPQQBIBEBBACEGIAdBAmogC04NAyAMKAIEQT9xQRZHDQMLIAcgCSAPQcAAcUEGdhsgCSACIApGGyEJAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgEUECaw4kAAECAw8DAg8PBA8PDw8PDw8PDwUIDw8PDw8JCQoHBwYLDwwNDwsgA0EBRw0OQQAhBiAHQQJqIAtODREgDCgCBEG/gP8DcUEiRw0ODBELIAkgCSAHIAIgBUobIAIgCkgbIQkMDQsgBSASSA0MDBALIAAoAgggBUEEdGooAghBBEYNCwwPCyAIIApBAWoiA00NDiAHIAkgAiADRhshCQwKCyADIAVKDQkMDQtBACEGIANFDQsgAyAKQQJqIgRqIAhPDQsgCSAHIAIgBEgbIQkMCAsgCkEDaiAISQ0ADAsLIAVBACAFIAdqQQFqIgMgAUwbQQAgAyAHShtBACACQf8BRxsgB2ohBwwGC0EAIQYgBUEAIAUgCmogCEobDQgCQCADRQRAIAwoAgQiA0E/cSIEQRxrQQNPIARBIkdxDQogA0H///8DTQ0BDAoLIANBAWsiA0UNACADIApqIAhKDQkLIAkgByACIApIGyEJDAULIAVBAkgNBCAFIApqQQFrIAhMDQQMCAtBACEGIAVBAEogBSAKaiAITnENBiADDQMgB0EBaiIHIA5IDQMMBgtBACEGIAUgACgCNE4NBSAHIAAoAhAgBUECdGooAgAtAEgiA2oiBSALTg0FQQEhBCADRQ0BA0AgDCAEQQJ0ai0AAEE7cQ0GIAMgBEYgBEEBaiEERQ0ACwwBC0EAIQYgEw0EIAVBAWshAyAFRQRAIAwoAgQiBEE/cSIFQRxrQQNPIAVBIkdxDQUgBEH///8DSw0FIAMgCmogCEwNAgwFCyADIApqIAhKDQQMAQsgByAFIAJB/wFGGyEHCyAHQQFqIgcgAUgNAAsLIA0gCUECdGooAgAhBgsgBg8LQQALxAEBBX8jAEEwayIDJAAgA0EANgIsIAEoAghBAnRB8MQAaigCACEFAkACQCAAKAIUIgYoAgAiBCAGKAIIIgdPDQADQCABIARHBEAgByAEQRBqIgRLDQEMAgsLIAAgBiABIAAoAgxrQQR1IANBLGoQ4QEiAUUNACADIAI2AhAgAyABNgIUIAMgAygCLDYCGCADIAU2AhwgAEH3LyADQRBqEOQBDAELIAMgBTYCBCADIAI2AgAgAEH1HSADEOQBCyADQTBqJAALxQEBA38jAEHQAGsiAyQAIAMgAjYCDCAAIAEgAhDcAiEFAkAgACgCFCIBKAIEIgIoAghBBkcNACACKAIALQAGDQAgASAAKAIYIgQ2AgwCf0F/IAQgAigCACgCECICKAIMayIEQQRIDQAaQQAgAigCFCIBRQ0AGiABIARqQQRrKAIACyEBIANBEGoiBCACKAIgQRBqQTwQ3gIgAyAFNgIIIAMgATYCBCADIAQ2AgAgAEHtECADEN0CGgsgABDlASADQdAAaiQAC6QBAQJ/IAAoAnQiAQRAIAAoAiAgAWoiAigCCEEGRwRAIABBBRDnAQsgACgCCCIBIAFBEGspAwA3AwAgASABQQhrKAIANgIIIAAoAggiAUEQayACKQMANwMAIAFBCGsgAigCCDYCACAAKAIcIAAoAggiAWtBEEwEQCAAQQEQ6gEgACgCCCEBCyAAIAFBEGo2AgggACABQRBrQQEQ7gELIABBAhDnAQt1AQF/IwBBIGsiAyQAAkAgASgCCEECdEHwxABqKAIAIgEtAAIgAigCCEECdEHwxABqKAIAIgItAAJGBEAgAyABNgIAIABBug4gAxDkAQwBCyADIAI2AhQgAyABNgIQIABB9A8gA0EQahDkAQsgA0EgaiQAQQAL0AIBAX8gACgCcCICRQRAIAAgAToABiAAKAIQKAJYBEAgACAAKAIoIgI2AhQgACACKAIAIgI2AgwgACACEPcBAkAgACgCDCICAn8CQAJAAkAgAUECaw4EAgIAAQQLIAIgAEGwCEEREIUDNgIAQQQMAgsgAiAAQbkcQRcQhQM2AgBBBAwBCyACIAAoAggiAUEQaykDADcDACABQQhrKAIACzYCCAsgAEEBOgA5IAAgAkEQajYCCCAAIAAvATY7ATQCQCAAKAIwIgFBoZwBSA0AIAAoAhQgACgCKCICa0HnpR1KDQAgACACIAFBGGxBgKYdEMoCIQEgAEGgnAE2AjAgACABNgIoIAAgAUHopR1qNgIkIAAgASAAKAIUIAJrajYCFAsgAEIANwNwIAAgACgCECgCWBEAABoLQQEQAAALIAIgATYCoAEgAkEEakEBEKQEAAubAgEKfyMAQbABayIDJABBKBCXBCIFQQA2AgAgA0EANgKsASADIAAoAnA2AgwgACADQQxqNgJwIANBEGpBASAFQQQQowQhBSMBIQcCQANAIAZFBEBBsOwBQQA2AgAgASAAIAIQAUGw7AEoAgAhBkGw7AFBADYCAEF/IQQCQCAGRQ0AQbTsASgCACIIRQ0AIAYoAgAhCkEAIQRBACEJAkAgB0UNAANAIAUgBEEDdGoiCygCACIMRQ0BIAogDEcEQCAEQQFqIgQgB0YNAgwBCwsgCygCBCEJCyAJIgRFDQMgCCQBCyMBIQYgBEEBRg0BCwsgACADKAIMNgJwIAMoAqwBIAUQmgQgA0GwAWokAA8LIAUQmgQgBiAIEKQEAAv9AQEDfyABQQZqIQQgACgCICEDAn8gAUEHakH/////AE0EQCAAIAMgACgCLEEEdCAEQQR0EMoCDAELIAAQywILIQIgACAENgIsIAAgAjYCICAAIAIgAUEEdGo2AhwgACACIAAoAgggA2tqNgIIIAAoAmgiAQRAA0AgASAAKAIgIAEoAgggA2tqNgIIIAEoAgAiAQ0ACyAAKAIgIQILIAAoAigiASAAKAIUIgRNBEADQCABIAIgASgCCCADa2o2AgggASACIAEoAgAgA2tqNgIAIAEgAiABKAIEIANrajYCBCABQRhqIgEgBE0NAAsLIAAgAiAAKAIMIANrajYCDAscACAAIAAoAiwiACABaiAAQQF0IAAgAUgbEOkBC/QBAQd/IwBB8ABrIgMkAAJAIAAoAkQiB0UNACAALQA5RQ0AIAAoAhQiBSgCCCEIIAAoAiAhBiAAKAIIIQQgAyACNgIgIAMgATYCDEEAIQIgBCAGayEJIAMgAUEERwR/IAUgACgCKGtBGG0FQQALNgJsIAAoAhwgBGtBwAJMBEAgACAAKAIsIgFBFGogAUEBdCABQRRIGxDpASAAKAIUIQUgACgCCCEECyAFIARBwAJqNgIIIABBADoAOSAAIANBDGogBxEDACAAQQE6ADkgACgCFCAAKAIgIgEgCCAGa2o2AgggACABIAlqNgIICyADQfAAaiQAC9gQAgt/AX4jAEHwAGsiCCQAAn8gASgCCEEGRgRAIAEoAgAMAQsgACABQRAQswMhBSAAKAIgIQQgBSgCCEEGRwRAIAAgAUHzFxDjAQsgASAAKAIIIgNJBEADQCADIANBEGsiBikDADcDACADIANBCGsoAgA2AgggBiIDIAFLDQALIAAoAgghAwsgACAAKAIcIANrQRBMBH8gACAAKAIsIgZBAWogBkEBdCAGQQBMGxDpASAAKAIIBSADC0EQajYCCCAAKAIgIAEgBGtqIgEgBSkDACIONwMAIAEgBSgCCDYCCCAOpwshBSAAKAIgIQQgACgCFCIDIAAoAhg2AgwgASAEayENAkACQAJAIAUtAAZFBEAgACgCHCAAKAIIayAFKAIQIgstAEsiBkEEdEwEfyAAIAAoAiwiASAGaiABQQF0IAEgBkgbEOkBIAAoAiAFIAQLIA1qIQQCQCALLQBKIglFBEAgBEEQaiIDIAstAElBBHRqIgEgACgCCE8NASAAIAE2AggMAQsgACgCCCIDIARrQQR1IgFBAWshBCABIAstAEkiBkwEQCAGIAFrIgxBAWpBB3EiBQRAQQAhAQNAIANBADYCCCAEQQFqIQQgA0EQaiEDIAFBAWoiASAFRw0ACwsgDEEHTwRAA0AgA0EANgJ4IANBADYCaCADQQA2AlggA0EANgJIIANBADYCOCADQQA2AiggA0EANgIYIANBADYCCCADQYABaiEDIARBCGoiBCAGRw0ACwsgACADNgIIIAYhBAsgCUEEcQRAIAAoAhAiASgCRCABKAJATwRAIAAQ/QEgACgCCCEDCyAAKAIcIANrIAstAEsiA0EEdEwEQCAAIAAoAiwiASADaiABQQF0IAEgA0gbEOkBCyAAIAQgBmsiB0EBEKADIQogB0EASgRAQQAhA0EAIAdrQQR0IQkDQCADQQR0IQwgACgCCCEBIAAgCiADQQFqIgMQowMiBSAMIAEgCWpqIgEpAwA3AwAgBSABKAIINgIIIAMgB0cNAAsLIAAgCiAAQagXQQEQhQMQpAMiAUEDNgIIIAEgB7c5AwAgACgCCCEDCwJAIAZFDQAgAyAEQQR0ayEMQQAhASAGQQFHBEAgBkH+AXEhBEEAIQcDQCAAIAAoAggiBUEQajYCCCAFIAwgAUEEdGoiCSkDADcDACAFIAkoAgg2AgggCUEANgIIIAAgACgCCCIFQRBqNgIIIAUgCSkDEDcDACAFIAkoAhg2AgggCUEANgIYIAFBAmohASAHQQJqIgcgBEcNAAsLIAZBAXFFDQAgACAAKAIIIgZBEGo2AgggBiAMIAFBBHRqIgEpAwA3AwAgBiABKAIINgIIIAFBADYCCAsgCgRAIAAgACgCCCIBQRBqNgIIIAFBBTYCCCABIAo2AgALIAAoAiAgDWohBAsCQCAAKAIUIgEgACgCJEcNACAAKAIwIgVBoZwBTg0DIAAoAighAQJ/IAVBAXQiBkEBckGq1arVAE0EQCAAIAEgBUEYbCAFQTBsEMoCDAELIAAQywILIQcgACAGNgIwIAAgBzYCKCAAIAcgACgCFCABa2oiATYCFCAAIAcgBkEYbGpBGGs2AiQgBUGRzgBIDQAgAEH9CUEAEOQBIAAoAhQhAQsgACABQRhqIgo2AhQgASADNgIYIAEgBDYCHCAAIAM2AgwgASADIAstAEtBBHRqIgQ2AiAgACALKAIMIgY2AhggASACNgIoQQAhBSABQQA2AiwgBCAAKAIIIgNLBEADQCADQQA2AgggA0EQaiIDIARJDQALCyAAIAQ2AgggAC0AOEEBcUUNASAAIAZBBGoiAzYCGAJAIAAoAkQiAkUNACAALQA5RQ0AIAAoAiAhASAIQX82AiAgCEEANgIMIAggCiAAKAIoa0EYbTYCbCAEIAFrIQEgACgCHCAEa0HAAkwEQCAAIAAoAiwiBkEUaiAGQQF0IAZBFEgbEOkBIAAoAhQhCiAAKAIIIQQLIAogBEHAAmo2AgggAEEAOgA5IAAgCEEMaiACEQMAIABBAToAOSAAKAIUIAAoAiAgAWoiATYCCCAAIAE2AgggACgCGCEDCyAAIANBBGs2AhgMAQsgACgCHCAAKAIIa0HAAkwEQCAAIAAoAiwiAUEUaiABQQF0IAFBFEgbEOkBIAAoAhQhAwsCQCADIAAoAiRHDQAgACgCMCIFQaGcAU4NAyAAKAIoIQQCfyAFQQF0IgZBAXJBqtWq1QBNBEAgACAEIAVBGGwgBUEwbBDKAgwBCyAAEMsCCyEBIAAgBjYCMCAAIAE2AiggACABIAAoAhQgBGtqIgM2AhQgACABIAZBGGxqQRhrNgIkIAVBkc4ASA0AIABB/QlBABDkASAAKAIUIQMLIAAgA0EYaiIENgIUIAMgACgCICIFIA1qIgE2AhwgAyABQRBqIgE2AhggACABNgIMIAAoAgghASADIAI2AiggAyABQcACaiIDNgIgAkAgAC0AOEEBcUUNACAAKAJEIgZFDQAgAC0AOUUNACAIQX82AiAgCEEANgIMIAggBCAAKAIoa0EYbTYCbCABIAVrIQIgACgCHCABa0HAAkwEQCAAIAAoAiwiAUEUaiABQQF0IAFBFEgbEOkBIAAoAhQhBCAAKAIIIQELIAQgAUHAAmo2AgggAEEAOgA5IAAgCEEMaiAGEQMAIABBAToAOSAAKAIUIgQgACgCICIBIAMgBWtqNgIIIAAgASACajYCCAsgACAEKAIEKAIAKAIQEQAAIgFBAEgEQEECIQUMAQsgACAAKAIIIAFBBHRrEO0BGkEBIQULIAhB8ABqJAAgBQ8LIABBBRDnAQALIABBBRDnAQALsQYBCH8jAEHwAGsiBSQAAkAgAC0AOEECcUUEQCAAKAIUIQMMAQsgACgCICIGIQICQCAAKAJEIgNFDQAgAC0AOUUNACAAKAIUIgQoAgghByAAKAIIIQIgBUF/NgIgIAVBATYCDCAFIAQgACgCKGtBGG02AmwgAiAGayEIIAAoAhwgAmtBwAJMBEAgACAAKAIsIgJBFGogAkEBdCACQRRIGxDpASAAKAIUIQQgACgCCCECCyAEIAJBwAJqNgIIIABBADoAOSAAIAVBDGogAxEDACAAQQE6ADkgACgCFCAAKAIgIgIgByAGa2o2AgggACACIAhqNgIICwJAIAAoAhQiAygCBCgCAC0ABg0AIAAtADgiBEECcUUNAANAIAMgAygCFCIHQQFrNgIUIAdFDQECQCAAKAJEIgdFDQAgAC0AOUUNACAAKAIIIQQgAygCCCEIIAVBADYCbCAFQX82AiAgBUEENgIMIAQgAmshCSAAKAIcIARrQcACTAR/IAAgACgCLCIDQRRqIANBAXQgA0EUSBsQ6QEgACgCCCEEIAAoAhQFIAMLIARBwAJqNgIIIABBADoAOSAAIAVBDGogBxEDACAAQQE6ADkgACgCFCIDIAggAmsgACgCICICajYCCCAAIAIgCWo2AgggAC0AOCEECyAEQQJxDQALCyACIAEgBmtqIQELIAAgA0EYayIENgIUIAMoAhAhBiADKAIEIQIgACAEKAIANgIMIAAgA0EMaygCADYCGAJAIAZFDQBBACEEIAYhAwNAIAAoAgggAUsEQCACIAEpAwA3AwAgAiABKAIINgIIIARBAWohBCACQRBqIQIgAUEQaiEBIANBAWsiAw0BDAILCyADQQBMDQAgA0EHcSIHBEBBACEBA0AgAkEANgIIIAJBEGohAiADQQFrIQMgAUEBaiIBIAdHDQALCyAEIAZrQXhLDQADQCACQQA2AnggAkEANgJoIAJBADYCWCACQQA2AkggAkEANgI4IAJBADYCKCACQQA2AhggAkEANgIIIAJBgAFqIQIgA0EJayADQQhrIQNBfkkNAAsLIAAgAjYCCCAFQfAAaiQAIAZBAWoLjAEBAn8gACAALwE0QQFqIgM7ATQCQAJAIANB//8DcSIEQcgBSQ0AIARByAFGBEAgAEH7CUEAEOQBDAELIANB//8DcUHhAU8NAQsgACABIAIQ7AFFBEAgAEEBEMEDCyAAIAAvATRBAWs7ATQgACgCECIBKAJEIAEoAkBPBEAgABD9AQsPCyAAQQUQ5wEAC4oDAQF/AkACQAJAAkACQCAALQAGDgIBAwALIAAoAhQhAgwBCyAAKAIUIgIgACgCKEYNAQsgACACKAIAIgE2AgggAEHjH0ElEIUDIQIMAQsgAC8BNCICQcgBTwRAIAAgACgCFCgCACIBNgIIIABB+wlBEBCFAyECDAELIAAgAkEBaiICOwE2IAAgAjsBNAJAIABBOiAAKAIIIAFBBHRrEOgBIgEEQCAAIAE6AAYCQCAAKAIIIgICfwJAAkACQCABQQJrDgQCAgABBAsgAiAAQbAIQREQhQM2AgBBBAwCCyACIABBuRxBFxCFAzYCAEEEDAELIAIgAkEQaykDADcDACACQQhrKAIACzYCCAsgACACQRBqIgI2AgggACgCFCACNgIIDAELIAAtAAYhAQsgACAALwE0QQFrOwE0IAEPCyABQQQ2AgggASACNgIAIAAgACgCHCAAKAIIIgFrQRBMBH8gACAAKAIsIgFBAWogAUEBdCABQQBMGxDpASAAKAIIBSABC0EQajYCCEECC3sBAX8CQAJAIAAtAAZFBEAgACABQRBrQX8Q7AENAiAAKAIUIQIMAQsgAEEAOgAGIAAoAhQiAigCBCgCAC0ABgRAIAAgARDtASAAKAIUIQJFDQEgACACKAIINgIIDAELIAAgAigCADYCDAsgACACIAAoAihrQRhtEMEDCwszACAALwE0IAAvATZLBEAgAEHLCEEAEOQBCyAAQQE6AAYgACAAKAIIIAFBBHRrNgIMQX8L0AIBBH8gACgCdCEFIAAgBDYCdCAALQA5IQYgACgCKCEEIAAoAhQhByAALwE0IQgCQCAAIAEgAhDoASICRQ0AIAAgACgCICADaiIBEPcBIAcgBGshBAJAIAECfwJAAkACQCACQQJrDgQCAgABBAsgASAAQbAIQREQhQM2AgBBBAwCCyABIABBuRxBFxCFAzYCAEEEDAELIAEgACgCCCIDQRBrKQMANwMAIANBCGsoAgALNgIICyAAIAg7ATQgACABQRBqNgIIIAAgACgCKCIDIARqIgE2AhQgACABKAIANgIMIAAgASgCDDYCGCAAIAY6ADkgACgCMCIBQaGcAUgNACAEQeelHUoNACAAIAMgAUEYbEGAph0QygIhASAAQaCcATYCMCAAIAE2AiggACABQeilHWo2AiQgACABIAAoAhQgA2tqNgIUCyAAIAU2AnQgAguAAwEIfyABKAIAIQIjAEEQayIDJAACfwJAIAIoAgAEQCACKAIEIQQMAQsCQCACKAIQIAIoAgwgA0EMaiACKAIIEQEAIgQEQCADKAIMIgUNAQtBfwwCCyACIAQ2AgQgAiAFNgIACyAELQAACyECIANBEGokACAAKAIQIgMoAkQgAygCQE8EQCAAEP0BCyAAIAAhBiABKAIAIQcgAUEEaiEIIAEoAhAhCSACQRtGBH8gBiAHIAggCRC0AwUgBiAHIAggCRDrAgsiAy0ASCAAKAJIEPYBIgQgAzYCECADLQBIBEAgBEEUaiEFQQAhAQNAIAAgAEEAQQBBIBDKAiICQQoQhAIgAkEANgIYIAIgAkEQajYCCCAFIAFBAnRqIAI2AgAgAUEBaiIBIAMtAEhJDQALCyAAKAIIIgFBBjYCCCABIAQ2AgAgACAAKAIcIAAoAggiAWtBEEwEfyAAIAAoAiwiAUEBaiABQQF0IAFBAEwbEOkBIAAoAggFIAELQRBqNgIIC+8NAQV/IwBBEGsiAyQAAkAgAgJ/AkACQCAAKAIgIgQgAUYNACAERQ0AIAIoAgxFDQELIANBADYCCCACKAIQIgENAiACKAIAIANBCGpBBCACKAIIIAIoAgQRAgAMAQsgAyAEKAIMQQFqNgIIIAIoAhAiAQ0BIAIgAigCACADQQhqQQQgAigCCCACKAIEEQIAIgE2AhAgAQ0BIAIoAgAgBEEQaiADKAIIIAIoAgggAigCBBECAAsiATYCEAsgAyAAKAI8NgIIAkACQAJAIAENACACIAIoAgAgA0EIaiIFQQQgAigCCCACKAIEEQIAIgE2AhAgAyAAKAJANgIIIAENACACIAIoAgAgA0EIakEEIAIoAgggAigCBBECACIBNgIQIAMgAC0ASDoACCABDQAgAiACKAIAIAVBASACKAIIIAIoAgQRAgAiATYCECADIAAtAEk6AAggAQ0AIAIgAigCACADQQhqQQEgAigCCCACKAIEEQIAIgE2AhAgAyAALQBKOgAIIAENACACIAIoAgAgA0EIakEBIAIoAgggAigCBBECACIBNgIQIAMgAC0ASzoACCABDQAgAiACKAIAIANBCGpBASACKAIIIAIoAgQRAgAiATYCECAAKAIMIQQgAyAAKAIsIgU2AgggAQ0AIAIgAigCACADQQhqQQQgAigCCCACKAIEEQIAIgE2AhAgAUUNAQsgACgCKCEFDAELIAIgAigCACAEIAVBAnQgAigCCCACKAIEEQIAIgE2AhAgAyAAKAIoIgU2AgggAQ0AIAIgAigCACADQQhqQQQgAigCCCACKAIEEQIAIgE2AhALIAVBAEoEQEEAIQQDQCADIAAoAgggBEEEdGoiBigCCCIHOgAIAkAgAgJ/AkACQAJAIAEEfyAHBSACIAIoAgAgA0EIakEBIAIoAgggAigCBBECACIBNgIQIAYoAggLQQFrDgQABAECBAsgAyAGKAIAOgAIIAENAyACKAIAIANBCGpBASACKAIIIAIoAgQRAgAMAgsgAyAGKwMAOQMIIAENAiACKAIAIANBCGpBCCACKAIIIAIoAgQRAgAMAQsgBigCACIGRQRAIANBADYCCCABDQIgAigCACADQQhqQQQgAigCCCACKAIEEQIADAELIAMgBigCDEEBajYCCCABDQEgAiACKAIAIANBCGpBBCACKAIIIAIoAgQRAgAiATYCECABDQEgAigCACAGQRBqIAMoAgggAigCCCACKAIEEQIACyIBNgIQCyAEQQFqIgQgBUcNAAsLIAMgACgCNCIENgIIIAFFBEAgAiACKAIAIANBCGpBBCACKAIIIAIoAgQRAgA2AhALIARBAEoEQEEAIQEDQCAAKAIQIAFBAnRqKAIAIAAoAiAgAhD0ASABQQFqIgEgBEcNAAsLQQAhBCAAKAIUIQUgAigCDEUEQCAAKAIwIQQLIAMgBDYCCAJAIAIoAhAiAQ0AIAIgAigCACADQQhqQQQgAigCCCACKAIEEQIAIgE2AhAgAQ0AIAIgAigCACAFIARBAnQgAigCCCACKAIEEQIAIgE2AhALQQAhBSACKAIMRQRAIAAoAjghBQsgAyAFNgIIIAFFBEAgAiACKAIAIANBCGpBBCACKAIIIAIoAgQRAgAiATYCEAsgBUEASgRAQQAhBANAAkAgAgJ/IARBDGwiBiAAKAIYaigCACIHRQRAIANBADYCCCABDQIgAigCACADQQhqQQQgAigCCCACKAIEEQIADAELIAMgBygCDEEBajYCCCABDQEgAiACKAIAIANBCGpBBCACKAIIIAIoAgQRAgAiATYCECABDQEgAigCACAHQRBqIAMoAgggAigCCCACKAIEEQIACyIBNgIQCyADIAAoAhggBmooAgQ2AggCQCABDQAgAiACKAIAIANBCGpBBCACKAIIIAIoAgQRAgAiATYCECADIAAoAhggBmooAgg2AgggAQ0AIAIgAigCACADQQhqQQQgAigCCCACKAIEEQIAIgE2AhALIARBAWoiBCAFRw0ACwtBACEFIAIoAgxFBEAgACgCJCEFCyADIAU2AgggAUUEQCACIAIoAgAgA0EIakEEIAIoAgggAigCBBECACIBNgIQCyAFQQBKBEBBACEEA0ACQCACAn8gACgCHCAEQQJ0aigCACIGRQRAIANBADYCCCABDQIgAigCACADQQhqQQQgAigCCCACKAIEEQIADAELIAMgBigCDEEBajYCCCABDQEgAiACKAIAIANBCGpBBCACKAIIIAIoAgQRAgAiATYCECABDQEgAigCACAGQRBqIAMoAgggAigCCCACKAIEEQIACyIBNgIQCyAEQQFqIgQgBUcNAAsLIANBEGokAAszACAAIABBAEEAIAFBBHRBGGoQygIiAEEGEIQCIAAgAjYCDCAAQQE6AAYgACABOgAHIAALSQEBfyAAIABBAEEAIAFBAnQiA0EUahDKAiIAQQYQhAIgACACNgIMIABBADoABiAAIAE6AAcgAQRAIABBFGpBACADEM0DGgsgAAvUAgEFfwJAIAAoAmgiAkUNACAAKAIQIQYDQCACKAIIIgMgAUkNASAAIAIoAgA2AmggAkEQaiEEAkAgAi0ABSAGLQAUQX9zcUEDcQRAIAMgBEcEQCACKAIUIAIoAhAiAzYCECADIAIoAhQ2AhQLIAAgAkEgQQAQygIaDAELIAIoAhQgAigCECIDNgIQIAMgAigCFDYCFCACIAIoAggiAykDADcDECACIAMoAgg2AhggAiAENgIIIAIgACgCECIDKAIcNgIAIAMgAjYCHAJAIAItAAUiBUEHcQ0AIAMtABVBAUYEQCACIAVBBHI6AAUgAigCCCIDKAIIQQRIDQEgAygCACIDLQAFQQNxRQ0BIAAoAhAiBC0AFUEBRgRAIAQgAxCBAgwCCyACIAQtABRBA3EgBXI6AAUMAQsgAiADLQAUQQNxIAVyOgAFCwsgACgCaCICDQALCwtbACAAIABBAEEAQcwAEMoCIgBBCRCEAiAAQUBrQQA2AgAgAEIANwI4IABCADcCMCAAQgA3AiggAEIANwIgIABCADcCGCAAQgA3AhAgAEIANwIIIABBADYCSCAAC2IBA38gACgCOCIEQQBMBEBBAA8LIAAoAhghBUEAIQADQCACIAUgAEEMbGoiAygCBE4EQAJAIAMoAgggAkwNACABQQFrIgENACADKAIAQRBqDwsgAEEBaiIAIARHDQELC0EAC/8BAQZ/AkAgACgCECIDKAIwIgEoAgAiAiABRgRAIANBADYCMAwBCyABIAIoAgA2AgALIAIgAygCcCgCADYCACADKAJwIAI2AgAgAiADLQAUQQNxIAItAAVB+AFxcjoABQJAIAIoAggiAUUNACABLQAGQQRxDQAgAUECIAAoAhAoAsQBELIDIgFFDQAgAygCQCEEIAAtADkhBSAAQQA6ADkgAyADKAJEQQF0NgJAIAAoAggiBiABKQMANwMAIAYgASgCCDYCCCAAKAIIIgFBBzYCGCABIAI2AhAgACAAKAIIIgJBIGo2AgggACACQQAQ7gEgACAFOgA5IAMgBDYCQAsLTgECfyAAKAIQIgFBwwA6ABQgACABQRxqQX0Q/AEaIAEoAghBAEoEQANAIAAgASgCACACQQJ0akF9EPwBGiACQQFqIgIgASgCCEgNAAsLC+wEAQR/AkAgASgCACIDRQ0AIAAoAhAiBS0AFEEDcyEGA0AgAkUNASADLQAEQQhGBEAgACADQegAakF9EPwBGgsCQCAGIAMtAAUiBEEDc3EEQCADIAUtABRBA3EgBEH4AXFyOgAFIAMhAQwBCyABIAMoAgAiBDYCACAFKAIcIANGBEAgBSAENgIcCwJAAkACQAJAAkACQAJAIAMtAARBBGsOBwUDAQYEAAIHCyAAIAMoAgwgAygCLEECdEEAEMoCGiAAIAMoAhAgAygCNEECdEEAEMoCGiAAIAMoAgggAygCKEEEdEEAEMoCGiAAIAMoAhQgAygCMEECdEEAEMoCGiAAIAMoAhggAygCOEEMbEEAEMoCGiAAIAMoAhwgAygCJEECdEEAEMoCGiAAIANBzABBABDKAhoMBgsgACADIAMtAAdBBEECIAMtAAYiAxt0QRhBFCADG2pBABDKAhoMBQsgAygCCCADQRBqRwRAIAMoAhQgAygCECIENgIQIAQgAygCFDYCFAsgACADQSBBABDKAhoMBAsgAygCECIEQYDEAEcEQCAAIARBICADLQAHdEEAEMoCGgsgACADKAIMIAMoAhxBBHRBABDKAhogACADQSBBABDKAhoMAwsgAyADKAIgEPcBIAAgAygCKCADKAIwQRhsQQAQygIaIAAgAygCICADKAIsQQR0QQAQygIaIAAgA0H4AEEAEMoCGgwCCyAAKAIQIgQgBCgCBEEBazYCBCAAIAMgAygCDEERakEAEMoCGgwBCyAAIAMgAygCEEEYakEAEMoCGgsgAkEBayECIAEoAgAiAw0ACwsgAQujAQEEfyAAKAIQIgEgASgCTCABKAJEIAEoAkBrajYCTCABKAJUQQpsIgJB/v///wcgAhshAgNAAkAgABD+ASEDIAEtABUiBEUNACACIANrIgJBAEoNAQsLIAQEQCABKAJMIgBB/wdNBEAgASABKAJEQYAIajYCQA8LIAEgAEGACGs2AkwgASABKAJENgJADwsgASABKAJQIAEoAkhB5ABubDYCQAudCgEJfwJAAkACQAJAAkACQCAAKAIQIgEtABUOBQABAgMEBQsgABD/AUEADwsgASgC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AUEAQQBB+AIgABECACICBEAgAkEhOgCMASACQQg6AAQgAkEANgIAIAJBADYCICACQQA2AkQgAkEANgJoIAJCADcCPCACQYACOwE4IAJCADcDKCACQeEAOwAFIAJCADcDcCACQgA3AhQgAkEANgJQIAIgATYCiAEgAiAANgKEASACQgA3AzAgAiACQfgAajYCECACIAJB8AFqIgA2AoQCIAIgADYCgAIgAiACNgLoASACQQA2AoABIAJCgICAgIAvNwO4ASACQgA3A3ggAkEANgLgASACQQA2AqwBIAJBADYCtAEgAkEANgLQASACQQA6AI0BIAJBADYCkAEgAiACQZQBajYCmAEgAkIANwKcASACQgA3AqQBIAJCyIGAgIAZNwPIASACQQA2AsQBIAJBADYCsAIgAkIANwKoAiACQgA3AqACIAJCADcCmAIgAkIANwKQAiACIAI2ApQBIAJBjQFBABDoAUUEQCACDwsgAigCECEAIAIgAigCIBD3ASACEPsBIAIgAigCECIBKAIAIAEoAghBAnRBABDKAhogAiAAKAI0IAAoAjxBABDKAiEBIABBADYCPCAAIAE2AjQgAiACKAIoIAIoAjBBGGxBABDKAhogAiACKAIgIAIoAixBBHRBABDKAhogACgCECACQfgCQQAgACgCDBECABoLQQALyQcBA38gACgCECEEIABBAEEAQcABEMoCIQEgAEEINgIwIAAgATYCFCAAIAE2AiggACABQagBajYCJCAAQQBBAEHQBRDKAiEBIABBLTYCLCAAIAE2AiAgACABQfAEajYCHCAAKAIUIgIgATYCBCAAIAFBEGoiAzYCCCABQQA2AgggAiADNgIAIAAgAzYCDCACIAFB0AJqNgIIIABBAEECEKADIQEgAEEFNgJQIAAgATYCSCAAKAIQIQEgAEEAQQIQoAMhAiABQQU2AmggASACNgJgIABBIBCEA0EAIQEDQCAAIAFBAnQiAkGgxQBqKAIAIgMgAxD7AxCFAyEDIAAoAhAgAmogAzYCvAEgACgCECACaigCvAEiAiACLQAFQSByOgAFIAFBAWoiAUERRw0ACyAAQfYkQQMQhQMiAUEBOgAGIAEgAS0ABUEgcjoABSAAQd8ZQQUQhQMiAUECOgAGIAEgAS0ABUEgcjoABSAAQccUQQIQhQMiAUEDOgAGIAEgAS0A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ACgCCEEQajYCCCABQRBqJABBAQulAQEFfyMAQZAIayIBJAAgAEEBIAFBjAhqIgQQZyEFIAFBADYCBCABIAA2AgggASABQQxqNgIAIAEoAowIBEADQCAEIAEoAgAiAE0EQCABEHYaIAEoAgAhAAsgAyAFai0AACICQSByIAIgAkHBAGtBGkkbIQIgASAAQQFqNgIAIAAgAjoAACADQQFqIgMgASgCjAhJDQALCyABEHogAUGQCGokAEEBCwkAIABBABCMAwtvAQN/IwBBkAhrIgEkACAAQQEgAUGMCGoQZyEDIABBAhBvIQIgAUEANgIEIAEgADYCCCABIAFBDGo2AgAgAkEASgRAA0AgASADIAEoAowIEHggAkEBSyACQQFrIQINAAsLIAEQeiABQZAIaiQAQQELsgEBBH8jAEGQCGsiASQAIABBASABQYwIaiIDEGchBCABQQA2AgQgASAANgIIIAEgAUEMajYCACABIAEoAowIIgBBAWsiAjYCjAggAARAA0AgAyABKAIAIgBNBEAgARB2GiABKAKMCCECIAEoAgAhAAsgAiAEai0AACECIAEgAEEBajYCACAAIAI6AAAgASABKAKMCCIAQQFrIgI2AowIIAANAAsLIAEQeiABQZAIaiQAQQELowEBBn8jAEEQayIDJAAgAEEBIANBDGoQZyEFIABBAhBvIQEgAygCDCEGAkAgAEEDQX8QcCICIAMoAgwiBEEBaiACQR91cWoiAkEAIAJBAEobIgIgBCACIARIGyIEQQEgASAGQQFqIAFBH3VxaiIBIAFBAUwbIgFOBEAgACABIAVqQQFrIAQgAWtBAWoQOwwBCyAAQdI1QQAQOwsgA0EQaiQAQQELpgEBBX8jAEGQCGsiASQAIABBASABQYwIaiIEEGchBSABQQA2AgQgASAANgIIIAEgAUEMajYCACABKAKMCARAA0AgBCABKAIAIgBNBEAgARB2GiABKAIAIQALIAMgBWotAAAiAkHfAHEgAiACQeEAa0EaSRshAiABIABBAWo2AgAgACACOgAAIANBAWoiAyABKAKMCEkNAAsLIAEQeiABQZAIaiQAQQELkQIAAn8CQAJAAkACQAJAAkACQAJAAkACQAJAIAFBIHIgASABQcEAa0EaSRtB4QBrDhoKCQABCQkJCQkJCQIJCQkDCQkECQUJBgcJCAkL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QCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAkEDcUUNASACIANJDQALCwJAIANBfHEiBEHAAEkNACACIARBQGoiBUsNAANAIAIgASgCADYCACACIAEoAgQ2AgQgAiABKAIINgIIIAIgASgCDDYCDCACIAEoAhA2AhAgAiABKAIUNgIUIAIgASgCGDYCGCACIAEoAhw2AhwgAiABKAIgNgIgIAIgASgCJDYCJCACIAEoAig2AiggAiABKAIsNgIsIAIgASgCMDYCMCACIAEoAjQ2AjQgAiABKAI4NgI4IAIgASgCPDYCPCABQUBrIQEgAkFAayICIAVNDQALCyACIARPDQEDQCACIAEoAgA2AgAgAUEEaiEBIAJBBGoiAiAESQ0ACwwBCyADQQRJBEAgACECDAELIAAgA0EEayIESwRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAiABLQABOgABIAIgAS0AAjoAAiACIAEtAAM6AAMgAUEEaiEBIAJBBGoiAiAETQ0ACwsgAiADSQRAA0AgAiABLQAAOgAAIAFBAWohASACQQFqIgIgA0cNAAsLIAAL8gICAn8BfgJAIAJFDQAgACABOgAAIAAgAmoiA0EBayABOgAAIAJBA0kNACAAIAE6AAIgACABOgABIANBA2sgAToAACADQQJrIAE6AAAgAkEHSQ0AIAAgAToAAyADQQRrIAE6AAAgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBBGsgATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQQhrIAE2AgAgAkEMayABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkEQayABNgIAIAJBFGsgATYCACACQRhrIAE2AgAgAkEcayABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa1CgYCAgBB+IQUgAyAEaiEBA0AgASAFNwMYIAEgBTcDECABIAU3AwggASAFNwMAIAFBIGohASACQSBrIgJBH0sNAAsLIAALMwEBfAJ+EAREAAAAAABAj0CjIgCZRAAAAAAAAOBDYwRAIACwDAELQoCAgICAgICAgH8LC8MEAwN8An8CfgJ8AkAgAL1CNIinQf8PcSIFQckHa0E/SQRAIAUhBAwB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Qf0XIAEgAUH9F04bQf4PayEBDAELIAFBgXhKDQAgAEQAAAAAAABgA6IhACABQbhwSwRAIAFByQdqIQEMAQsgAEQAAAAAAABgA6IhAEHwaCABIAFB8GhMG0GSD2ohAQsgACABQf8Haq1CNIa/ogsoACAAQRh0IABBgP4DcUEIdHIgAEEIdkGA/gNxIABBGHZyciAAIAEbC+gCAQN/AkAgAS0AAA0AQZErEOgDIgEEQCABLQAADQELIABBDGxB0LABahDoAyIBBEAgAS0AAA0BC0GuKxDoAyIBBEAgAS0AAA0BC0G/LCEBCwJAA0ACQCABIAJqLQAAIgRFDQAgBEEvRg0AQRchBCACQQFqIgJBF0cNAQwCCwsgAiEEC0G/LCEDAkACQAJAAkACQCABLQAAIgJBLkYNACABIARqLQAADQAgASEDIAJBwwBHDQELIAMtAAFFDQELIANBvywQ9wNFDQAgA0HkKhD3Aw0BCyAARQRAQaSwASECIAMtAAFBLkYNAgtBAA8LQZTSASgCACICBEADQCADIAJBCGoQ9wNFDQIgAigCICICDQALC0EkEJcEIgIEQCACQaSwASkCADcCACACQQhqIgEgAyAEEMwDGiABIARqQQA6AAAgAkGU0gEoAgA2AiBBlNIBIAI2AgALIAJBpLABIAAgAnIbIQILIAILpAEBBH8jAEEQayIFJAAgBSACNgIMIwBBoAFrIgMkACADQQhqIgZB8MoBQZABEMwDGiADIAA2AjQgAyAANgIcIANB/////wdBfiAAayIEIARB/////wdLGyIENgI4IAMgACAEaiIENgIkIAMgBDYCGCAGIAEgAhCSBCAAQX5HBEAgAygCHCIAIAAgAygCGEZrQQA6AAALIANBoAFqJAAgBUEQaiQAC6gBAQR/IwBBEGsiBSQAIAUgAjYCDCMAQaABayIDJAAgA0EIaiIGQfDKAUGQARDMAxogAyAANgI0IAMgADYCHCADQf////8HQX4gAGsiBCAEQf////8HSxsiBDYCOCADIAAgBGoiBDYCJCADIAQ2AhggBiABIAJBrwEQigQaIABBfkcEQCADKAIcIgAgACADKAIYRmtBADoAAAsgA0GgAWokACAFQRBqJAALBABCAAsQACAAEPsDIABqIAEQ+AMaCxoAIAAgARD2AyIAQQAgAC0AACABQf8BcUYbC90B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IAMgCoRQGwwCCyADIAqEUAsLIAJCMIinIghB//8BcSIHQf//AUYNAA0BCyAFQRBqIAEgAiADIAQQqgQgBSAFKQMQIgIgBSkDGCIBIAIgARChBCAFKQMIIQIgBSkDACEEDAELIAEgAkL///////////8AgyIKIAMgBEL///////////8AgyIJEJ8EQQBMBEAgASAKIAMgCRCfBARAIAEhBAwCCyAFQfAAaiABIAJCAEIAEKoEIAUpA3ghAiAFKQNwIQQMAQsgBEIwiKdB//8BcSEGIAcEfiABBSAFQeAAaiABIApCAEKAgICAgIDAu8AAEKoEIAUpA2giCkIwiKdB+ABrIQcgBSkDYAshBCAGRQRAIAVB0ABqIAMgCUIAQoCAgICAgMC7wAAQqgQgBSkDWCIJQjCIp0H4AGshBiAFKQNQIQMLIAlC////////P4NCgICAgICAwACEIQsgCkL///////8/g0KAgICAgIDAAIQhCiAGIAdIBEADQAJ+IAogC30gAyAEVq19IglCAFkEQCAJIAQgA30iBIRQBEAgBUEgaiABIAJCAEIAEKoEIAUpAyghAiAFKQMgIQQMBQsgCUIBhiAEQj+IhAwBCyAKQgGGIARCP4iECyEKIARCAYYhBCAHQQFrIgcgBkoNAAsgBiEHCwJAIAogC30gAyAEVq19IglCAFMEQCAKIQkMAQsgCSAEIAN9IgSEQgBSDQAgBUEwaiABIAJCAEIAEKoEIAUpAzghAiAFKQMwIQQMAQsgCUL///////8/WARAA0AgBEI/iCAHQQFrIQcgBEIBhiEEIAlCAYaEIglCgICAgICAwABUDQALCyAIQYCAAnEhBiAHQQBMBEAgBUFAayAEIAlC////////P4MgB0H4AGogBnKtQjCGhEIAQoCAgICAgMDDPxCqBCAFKQNIIQIgBSkDQCEEDAELIAlC////////P4MgBiAHcq1CMIaEIQILIAAgBDcDACAAIAI3AwggBUGAAWokAAunMwMRfwd+AXwjAEEwayIMJAACQAJAIAJBAksNACACQQJ0IgJBnMMBaigCACERIAJBkMMBaigCACEQA0ACfyABKAIEIgIgASgCaEcEQCABIAJBAWo2AgQgAi0AAAwBCyABEP8DCyICQSBGIAJBCWtBBUlyDQALQQEhCAJAAkAgAkEraw4DAAEAAQtBf0EB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AgAiAARAIAMgBkEDdGogACACEI4EQQEhDSAGQQFqIgZBCkcNAQwKCwtBASENIAZBCk8NCANAIAQgBkECdGooAgANASAGQQFqIgZBCkcNAAsMCAtBHCEJDAULIAggCSAMayIKIAggCkobIgEgD0H/////B3NKDQNBPSEJIA4gASAPaiIIIAggDkgbIgYgFkoNBCAAQSAgBiAIIAsQkAQgACAUIA8QjAQgAEEwIAYgCCALQYCABHMQkAQgAEEwIAEgCkEAEJAEIAAgDCAKEIwEIABBICAGIAggC0GAwABzEJAEIAcoAkwhAQwBCwsLQQAhDQwDC0E9IQkLQcDPASAJNgIAC0F/IQ0LIAdB0ABqJAAgDQsYACAALQAAQSBxRQRAIAEgAiAAEOUDGgsLbwEFfyAAKAIAIgMsAABBMGsiAUEJSwRAQQAPCwNAQX8hBCACQcyZs+YATQRAQX8gASACQQpsIgVqIAEgBUH/////B3NLGyEECyAAIANBAWoiBTYCACADLAABIAQhAiAFIQNBMGsiAUEKSQ0ACyACC7QCAAJAAkACQAJAAkACQAJAAkACQAJAAkAgAUEJaw4SAAgJCggJAQIDBAoJCgoICQUGBwsgAiACKAIAIgFBBGo2AgAgACABKAIANgIADwsgAiACKAIAIgFBBGo2AgAgACABMgEANwMADwsgAiACKAIAIgFBBGo2AgAgACABMwEANwMADwsgAiACKAIAIgFBBGo2AgAgACABMAAANwMADwsgAiACKAIAIgFBBGo2AgAgACABMQAANwMADwsgAiACKAIAQQdqQXhxIgFBCGo2AgAgACABKwMAOQMADwsACw8LIAIgAigCACIBQQRqNgIAIAAgATQCADcDAA8LIAIgAigCACIBQQRqNgIAIAAgATUCADcDAA8LIAIgAigCAEEHakF4cSIBQQhqNgIAIAAgASkDADcDAAt7AgN/AX4CQCAAQoCAgIAQVARAIAAhBQwBCwNAIAFBAWsiASAAIABCCoAiBUIKfn2nQTByOgAAIABC/////58BViAFIQANAAsLIAWnIgIEQANAIAFBAWsiASACIAJBCm4iA0EKbGtBMHI6AAAgAkEJSyADIQINAAsLIAELcgEBfyMAQYACayIFJAACQCACIANMDQAgBEGAwARxDQAgBSABQf8BcSACIANrIgNBgAIgA0GA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8ABrIgYkACAEQv///////////wCDIQkCQAJAIAFQIgUgAkL///////////8AgyIKQoCAgICAgMD//wB9QoCAgICAgMCAgH9UIApQG0UEQCADQgBSIAlCgICAgICAwP//AH0iC0KAgICAgIDAgIB/ViALQoCAgICAgMCAgH9RGw0BCyAFIApCgICAgICAwP//AFQgCkKAgICAgIDA//8AURtFBEAgAkKAgICAgIAghCEEIAEhAwwCCyADUCAJQoCAgICAgMD//wBUIAlCgICAgICAwP//AFEbRQRAIARCgICAgICAIIQhBAwCCyABIApCgICAgICAwP//AIWEUARAQoCAgICAgOD//wAgAiABIAOFIAIgBIVCgICAgICAgICAf4WEUCIFGyEEQgAgASAFGyEDDAILIAMgCUKAgICAgIDA//8AhYRQDQEgASAKhFAEQCADIAmEQgBSDQIgASADgyEDIAIgBIMhBAwCCyADIAmEQgBSDQAgASEDIAIhBAwBCyADIAEgASADVCAJIApWIAkgClEbIggbIQogBCACIAgbIgxC////////P4MhCSACIAQgCBsiC0IwiKdB//8BcSEHIAxCMIinQf//AXEiBUUEQCAGQeAAaiAKIAkgCiAJIAlQIgUbeSAFQQZ0rXynIgVBD2sQngQgBikDaCEJIAYpA2AhCkEQIAVrIQULIAEgAyAIGyEDIAtC////////P4MhASAHBH4gAQUgBkHQAGogAyABIAMgASABUCIHG3kgB0EGdK18pyIHQQ9rEJ4EQRAgB2shByAGKQNQIQMgBikDWAtCA4YgA0I9iIRCgICAgICAgASEIQEgCUIDhiAKQj2IhCACIASFIQQCfiADQgOGIgIgBSAHRg0AGiAFIAdrIgdB/wBLBEBCACEBQgEMAQsgBkFAayACIAFBgAEgB2sQngQgBkEwaiACIAEgBxCpBCAGKQM4IQEgBikDMCAGKQNAIAYpA0iEQgBSrYQLIQlCgICAgICAgASEIQsgCkIDhiEKAkAgBEIAUwRAQgAhA0IAIQQgCSAKhSABIAuFhFANAiAKIAl9IQIgCyABfSAJIApWrX0iBEL/////////A1YNASAGQSBqIAIgBCACIAQgBFAiBxt5IAdBBnStfKdBDGsiBxCeBCAFIAdrIQUgBikDKCEEIAYpAyAhAgwBCyAJIAp8IgIgCVStIAEgC3x8IgRCgICAgICAgAiDUA0AIAlCAYMgBEI/hiACQgGIhIQhAiAFQQFqIQUgBEIBiCEECyAMQoCAgICAgICAgH+DIQMgBUH//wFOBEAgA0KAgICAgIDA//8AhCEEQgAhAwwBC0EAIQcCQCAFQQBKBEAgBSEHDAELIAZBEGogAiAEIAVB/wBqEJ4EIAYgAiAEQQEgBWsQqQQgBikDACAGKQMQIAYpAxiEQgBSrYQhAiAGKQMIIQQLIARCPYYgAkIDiIQhASAEQgOIQv///////z+DIAetQjCGhCADhCEEAkACQCACp0EHcSIFQQRHBEAgBCABIAEgBUEES618IgNWrXwhBAwBCyAEIAEgASABQgGDfCIDVq18IQQMAQsgBUUNAQsLIAAgAzcDACAAIAQ3AwggBkHwAGokAAtQAQF+AkAgA0HAAHEEQCABIANBQGqthiECQgAhAQwBCyADRQ0AIAIgA60iBIYgAUHAACADa62IhCECIAEgBIYhAQsgACABNwMAIAAgAjcDCAvbAQIBfwJ+QQEhBAJAIABCAFIgAUL///////////8AgyIFQoCAgICAgMD//wBWIAVCgICAgICAwP//AFEbDQAgAkIAUiADQv///////////wCDIgZCgICAgICAwP//AFYgBkKAgICAgIDA//8AURsNACAAIAKEIAUgBoSEUARAQQAPCyABIAODQgBZBEBBfyEEIAAgAlQgASADUyABIANRGw0BIAAgAoUgASADhYRCAFIPC0F/IQQgACACViABIANVIAEgA1EbDQAgACAChSABIAOFhEIAUiEECyAEC8ABAgF/An5BfyEDAkAgAEIAUiABQv///////////wCDIgRCgICAgICAwP//AFYgBEKAgICAgIDA//8AURsNACACQv///////////wCDIgVCgICAgICAwP//AFYgBUKAgICAgIDA//8AUnENACAAIAQgBYSEUARAQQAPCyABIAKDQgBZBEAgASACUiABIAJTcQ0BIAAgASAChYRCAFIPCyAAQgBSIAEgAlUgASACURsNACAAIAEgAoWEQgBSIQMLIAMLvg8CBX8PfiMAQdACayIFJAAgBEL///////8/gyEKIAJC////////P4MhCyACIASFQoCAgICAgICAgH+DIQwgBEIwiKdB//8BcSEIAkACQCAC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IAUpAxgiBFYgASAEURtxrXwiAlatfCIEIAIgBEKAgICAgIDA//8AVCADIAUpAwBWIAEgBSkDCCIDViABIANRG3GtfCIBIAJUrXwgDIQhDAsgACABNwMAIAAgDDcDCCAFQdACaiQACx8AQbDsASgCAEUEQEGw7AEgADYCAEG07AEgATYCAAsLggEBA39BuOwBQbjsASgCAEEBaiIFNgIAIAAgBTYCAAJAIANFDQADQCACIAZBA3RqIgQoAgAEQCADIAZBAWoiBkcNAQwCCwsgBCABNgIEIAQgBTYCACAEQQA2AgggAyQBIAIPCyAAIAEgAiADQQR0QQhyEJsEIANBAXQiABCjBCAAJAELIQBBsOwBKAIARQRAQbDsASAANgIAQbTsASABNgIACxAWCwYAIAAkAQv6AQIDfgJ/IwBBEGsiBSQAAn4gAb0iBEL///////////8AgyICQoCAgICAgIAIfUL/////////7/8AWARAIAJCPIYhAyACQgSIQoCAgICAgICAPHwMAQsgAkKAgICAgICA+P8AWgRAIARCPIYhAyAEQgSIQoCAgICAgMD//wCEDAELIAJQBEBCAAwBCyAFIAJCACACp2dBIGogAkIgiKdnIAJCgICAgBBUGyIGQTFqEJ4EIAUpAwAhAyAFKQMIQoCAgICAgMAAhUGM+AAgBmutQjCGhAshAiAAIAM3AwAgACACIARCgICAgICAgICAf4OENwMIIAVBEGokAAt/AgJ/AX4jAEEQayIDJAAgAAJ+IAFFBEBCAAwBCyADIAEgAUEfdSICcyACayICrUIAIAJnIgJB0QBqEJ4EIAMpAwhCgICAgICAwACFQZ6AASACa61CMIZ8IAFBgICAgHhxrUIghoQhBCADKQMACzcDACAAIAQ3AwggA0EQaiQAC2cCAX8BfiMAQRBrIgIkACAAAn4gAUUEQEIADAELIAIgAa1CAEHwACABZyIBQR9zaxCeBCACKQMIQoCAgICAgMAAhUGegAEgAWutQjCGfCEDIAIpAwALNwMAIAAgAzcDCCACQRBqJAALUAEBfgJAIANBwABxBEAgAiADQUBqrYghAUIAIQIMAQsgA0UNACACQcAAIANrrYYgASADrSIEiIQhASACIASIIQILIAAgATcDACAAIAI3AwgLwQoCBX8PfiMAQeAAayIFJAAgBEL///////8/gyEMIAIgBIVCgICAgICAgICAf4MhCiACQv///////z+DIg1CIIghDiAEQjCIp0H//wFxIQcCQAJAIAJCMIinQf//AXEiCUH//wFrQYKAfk8EQCAHQf//AWtBgYB+Sw0BCyABUCACQv///////////wCDIgtCgICAgICAwP//AFQgC0KAgICAgIDA//8AURtFBEAgAkKAgICAgIAghCEKDAILIANQIARC////////////AIMiAkKAgICAgIDA//8AVCACQoCAgICAgMD//wBRG0UEQCAEQoCAgICAgCCEIQogAyEBDAILIAEgC0KAgICAgIDA//8AhYRQBEAgAiADhFAEQEKAgICAgIDg//8AIQpCACEBDAMLIApCgICAgICAwP//AIQhCkIAIQEMAgsgAyACQoCAgICAgMD//wCFhFAEQCABIAuEQgAhAVAEQEKAgICAgIDg//8AIQoMAwsgCkKAgICAgIDA//8AhCEKDAILIAEgC4RQBEBCACEBDAILIAIgA4RQBEBCACEBDAILIAtC////////P1gEQCAFQdAAaiABIA0gASANIA1QIgYbeSAGQQZ0rXynIgZBD2sQngRBECAGayEGIAUpA1giDUIgiCEOIAUpA1AhAQsgAkL///////8/Vg0AIAVBQGsgAyAMIAMgDCAMUCIIG3kgCEEGdK18pyIIQQ9rEJ4EIAYgCGtBEGohBiAFKQNIIQwgBSkDQCEDCyADQg+GIgtCgID+/w+DIgIgAUIgiCIEfiIQIAtCIIgiEyABQv////8PgyIBfnwiD0IghiIRIAEgAn58IgsgEVStIAIgDUL/////D4MiDX4iFSAEIBN+fCIRIAxCD4YiEiADQjGIhEL/////D4MiAyABfnwiFCAPIBBUrUIghiAPQiCIhHwiDyACIA5CgIAEhCIMfiIWIA0gE358Ig4gEkIgiEKAgICACIQiAiABfnwiECADIAR+fCISQiCGfCIXfCEBIAcgCWogBmpB//8AayEGAkAgAiAEfiIYIAwgE358IgQgGFStIAQgBCADIA1+fCIEVq18IAIgDH58IAQgBCARIBVUrSARIBRWrXx8IgRWrXwgAyAMfiIDIAIgDX58IgIgA1StQiCGIAJCIIiEfCAEIAJCIIZ8IgIgBFStfCACIAIgECASVq0gDiAWVK0gDiAQVq18fEIghiASQiCIhHwiAlatfCACIAIgDyAUVK0gDyAXVq18fCICVq18IgRCgICAgICAwACDQgBSBEAgBkEBaiEGDAELIAtCP4ggBEIBhiACQj+IhCEEIAJCAYYgAUI/iIQhAiALQgGGIQsgAUIBhoQhAQsgBkH//wFOBEAgCkKAgICAgIDA//8AhCEKQgAhAQwBCwJ+IAZBAEwEQEEBIAZrIgdB/wBNBEAgBUEwaiALIAEgBkH/AGoiBhCeBCAFQSBqIAIgBCAGEJ4EIAVBEGogCyABIAcQqQQgBSACIAQgBxCpBCAFKQMwIAUpAziEQgBSrSAFKQMgIAUpAxCEhCELIAUpAyggBSkDGIQhASAFKQMAIQIgBSkDCAwCC0IAIQEMAgsgBEL///////8/gyAGrUIwhoQLIAqEIQogC1AgAUIAWSABQoCAgICAgICAgH9RG0UEQCAKIAJCAXwiAVCtfCEKDAELIAsgAUKAgICAgICAgIB/hYRCAFIEQCACIQEMAQsgCiACIAJCAYN8IgEgAlStfCEKCyAAIAE3AwAgACAKNwMIIAVB4ABqJAALdQEBfiAAIAEgBH4gAiADfnwgA0IgiCICIAFCIIgiBH58IANC/////w+DIgMgAUL/////D4MiAX4iBUIgiCADIAR+fCIDQiCIfCABIAJ+IANC/////w+DfCIBQiCIfDcDCCAAIAVC/////w+DIAFCIIaENwMAC0UBAX8jAEEQayIFJAAgBSABIAIgAyAEQoCAgICAgICAgH+FEJ0EIAUpAwAhASAAIAUpAwg3AwggACABNwMAIAVBEGokAAvTAwICfgJ/IwBBIGsiBCQAAkAgAUL///////////8AgyIDQoCAgICAgMCAPH0gA0KAgICAgIDA/8MAfVQEQCABQgSGIABCPIiEIQMgAEL//////////w+DIgBCgYCAgICAgIAIWgRAIANCgYCAgICAgIDAAHwhAgwCCyADQoCAgICAgICAQH0hAiAAQoCAgICAgICACFINASACIANCAYN8IQIMAQsgAFAgA0KAgICAgIDA//8AVCADQoCAgICAgMD//wBRG0UEQCABQgSGIABCPIiEQv////////8Dg0KAgICAgICA/P8AhCECDAELQoCAgICAgID4/wAhAiADQv///////7//wwBWDQBCACECIANCMIinIgVBkfcASQ0AIARBEGogACABQv///////z+DQoCAgICAgMAAhCICIAVBgfcAaxCeBCAEIAAgAkGB+AAgBWsQqQQgBCkDCEIEhiAEKQMAIgBCPIiEIQIgBCkDECAEKQMYhEIAUq0gAEL//////////w+DhCIAQoGAgICAgICACFoEQCACQgF8IQIMAQsgAEKAgICAgICAgAhSDQAgAkIBgyACfCECCyAEQSBqJAAgAiABQoCAgICAgICAgH+DhL8LBAAjAAsGACAAJAALEAAjACAAa0FwcSIAJAAgAAsPAEHA7IECJANBwOwBJAILBwAjACMCawsEACMDCwQAIwILIgEBfiABIAKtIAOtQiCGhCAEIAARCwAiBUIgiKckASAFpwsL074BuQEAQYAIC9ItbmV3cHJveHkAaW50ZXJ2YWwgaXMgZW1wdHkAaW5maW5pdHkAZ2V0cmVnaXN0cnkAbm90IGVub3VnaCBtZW1vcnkAbW9uZXRhcnkAYXR0ZW1wdCB0byB5aWVsZCBhY3Jvc3MgbWV0YW1ldGhvZC9DLWNhbGwgYm91bmRhcnkAeWRheQB3ZGF5AGZ1bmN0aW9uIG9yIGV4cHJlc3Npb24gdG9vIGNvbXBsZXgAX19uZXdpbmRleABfX2luZGV4AGludmFsaWQgY2FwdHVyZSBpbmRleABtYXgALSsgICAwWDB4AC0wWCswWCAwWC0weCsweCAweABfX3BvdwBDIHN0YWNrIG92ZXJmbG93AHN0cmluZyBsZW5ndGggb3ZlcmZsb3cAY29kZSBzaXplIG92ZXJmbG93AGNvbnN0YW50IHRhYmxlIG92ZXJmbG93AGdldGVudgBzZXRmZW52AGdldGZlbnYAa3YAX19kaXYAZmxuU3UAbmV4dABvdXRwdXQAaW5wdXQAc3Rkb3V0AGlzZHN0AHNxcnQAc29ydABhc3NlcnQAaW5zZXJ0AHJlc3RhcnQAbm90AGNvdW50AHByaW50AGFic2VudABubyBjYWxsaW5nIGVudmlyb25tZW50AHZhcmlhYmxlcyBpbiBhc3NpZ25tZW50AHVuZmluaXNoZWQgbG9uZyBjb21tZW50AGJhZCBjb25zdGFudABfX2x0AGV4aXQAaW5pdAByYXdzZXQAcmF3Z2V0AGNvbGxlY3QAc2VsZWN0ACdzZXRmZW52JyBjYW5ub3QgY2hhbmdlIGVudmlyb25tZW50IG9mIGdpdmVuIG9iamVjdABpbnZhbGlkIGZvcm1hdABuYW1ld2hhdAByZXBlYXQAX19jb25jYXQAKnQAc3RhdHVzAHRvbyBtYW55IGFyZ3VtZW50cwB3cm9uZyBudW1iZXIgb2YgYXJndW1lbnRzAGlwYWlycwBsb2FkZXJzAG51cHMAYWNvcwB0b28gbWFueSBuZXN0ZWQgZnVuY3Rpb25zAGNodW5rIGhhcyB0b28gbWFueSBzeW50YXggbGV2ZWxzAHVwdmFsdWVzAGF0dGVtcHQgdG8gY29tcGFyZSB0d28gJXMgdmFsdWVzAHRvbyBtYW55IGNhcHR1cmVzAGFjdGl2ZWxpbmVzAGNodW5rIGhhcyB0b28gbWFueSBsaW5lcwB0b28gbWFueSBsb2NhbCB2YXJpYWJsZXMAYWJzACVzJXMAbHVhb3Blbl8lcwBAJXMAPiVzAG1vZHVsZSAnJXMnIG5vdCBmb3VuZDolcwAlcyBleHBlY3RlZCwgZ290ICVzAGF0dGVtcHQgdG8gY29tcGFyZSAlcyB3aXRoICVzAG1haW4gZnVuY3Rpb24gaGFzIG1vcmUgdGhhbiAlZCAlcwBmdW5jdGlvbiBhdCBsaW5lICVkIGhhcyBtb3JlIHRoYW4gJWQgJXMAY2Fubm90ICVzICVzOiAlcwAlczolZDogJXMAZXJyb3IgbG9hZGluZyBtb2R1bGUgJyVzJyBmcm9tIGZpbGUgJyVzJzoKCSVzAGhvdXIAY3VyAHN0ZGVycgBpdGVtcyBpbiBhIGNvbnN0cnVjdG9yAHN5bnRheCBlcnJvcgBmbG9vcgBmb3IAbG93ZXIAaW52YWxpZCBsb25nIHN0cmluZyBkZWxpbWl0ZXIAdXBwZXIAYmFkIGludGVnZXIAYmFkIGhlYWRlcgB0b251bWJlcgBtYWxmb3JtZWQgbnVtYmVyACdmb3InIGxpbWl0IG11c3QgYmUgYSBudW1iZXIAJ2Zvcicgc3RlcCBtdXN0IGJlIGEgbnVtYmVyACdmb3InIGluaXRpYWwgdmFsdWUgbXVzdCBiZSBhIG51bWJlcgBjaGFyAHllYXIAXHIAX19lcQBmcmV4cABsZGV4cABzdG9wAGR1bXAAc3RlcAByZXAAY29kZSB0b28gZGVlcAB3cmFwACVzOiAlcABwcm90bwAuLz8uc287L3Vzci9sb2NhbC9saWIvbHVhLzUuMS8/LnNvOy91c3IvbG9jYWwvbGliL2x1YS81LjEvbG9hZGFsbC5zbwBubwBpbwBnZXRpbmZvAGdjaW5mbwBkbwBtYXhuAHNldG4AZ2V0bgB0YWlsIHJldHVybgBtaXNzaW5nICdbJyBhZnRlciAnJSVmJyBpbiBwYXR0ZXJuAHVuYmFsYW5jZWQgcGF0dGVybgBpbnZhbGlkIG9wdGlvbgB1bmFibGUgdG8gZHVtcCBnaXZlbiBmdW5jdGlvbgBjYW5ub3QgdXNlICcuLi4nIG91dHNpZGUgYSB2YXJhcmcgZnVuY3Rpb24AJ21vZHVsZScgbm90IGNhbGxlZCBmcm9tIGEgTHVhIGZ1bmN0aW9uAGR5bmFtaWMgbGlicmFyaWVzIG5vdCBlbmFibGVkOyBjaGVjayB5b3VyIEx1YSBpbnN0YWxsYXRpb24AcGVyZm9ybSBhcml0aG1ldGljIG9uAGFzaW4AbWluAD1zdGRpbgBtYWluAHBvcGVuAHJlb3BlbgBfX2xlbgB0aGVuAGF0YW4AbmFuAGJvb2xlYW4AcmFuZG9tAF9fdW5tAHNldHN0ZXBtdWwAX19tdWwAdW5leHBlY3RlZCBzeW1ib2wAU25sAGZ1bGwAc2VlYWxsAHhwY2FsbABfX2NhbGwAdW50aWwAdGFibGUgaW5kZXggaXMgbmlsAGNlaWwAdGFpbABpbnZhbGlkIGxldmVsAHVwdmFsAHJhd2VxdWFsAG5vcm1hbABzZXRsb2NhbABnZXRsb2NhbABnbG9iYWwAU2wAc2V0aG9vawBnZXRob29rAGV4dGVybmFsIGhvb2sAIGluIG1haW4gY2h1bmsAJXM6ICVzIGluIHByZWNvbXBpbGVkIGNodW5rAHNlZWsAY2xvY2sAdG9vIG1hbnkgcmVzdWx0cyB0byB1bnBhY2sAdHJhY2ViYWNrAG5vIGxvb3AgdG8gYnJlYWsAcGkAZm9yZWFjaGkAbW9udGgAY3BhdGgAbWF0aABmbHVzaABjb3NoAHNpbmgAdGFuaABnbWF0Y2gAZm9yZWFjaABkZWJ1ZwBhcmcAbG9nAGxleGljYWwgZWxlbWVudCB0b28gbG9uZwBjb250cm9sIHN0cnVjdHVyZSB0b28gbG9uZwBzdHJpbmcgc2xpY2UgdG9vIGxvbmcAaW52YWxpZCBvcmRlciBmdW5jdGlvbiBmb3Igc29ydGluZwBfX3Rvc3RyaW5nAGxvYWRzdHJpbmcAYmluYXJ5IHN0cmluZwB1bmZpbmlzaGVkIGxvbmcgc3RyaW5nAHVuZmluaXNoZWQgc3RyaW5nAHJlYWRlciBmdW5jdGlvbiBtdXN0IHJldHVybiBhIHN0cmluZwAncGFja2FnZS4lcycgbXVzdCBiZSBhIHN0cmluZwBydW5uaW5nAGVycm9yIGluIGVycm9yIGhhbmRsaW5nAGNvbmZpZwBtZW1vcnkgYWxsb2NhdGlvbiBlcnJvcjogYmxvY2sgdG9vIGJpZwBkZWcAJS4xNGcAc2V0dmJ1ZgBnZXQgbGVuZ3RoIG9mAGluZgBzZWxmACVsZgBlbHNlaWYAbW9kZgByZW1vdmUAbGV2ZWwgbXVzdCBiZSBub24tbmVnYXRpdmUAdHJ1ZQBzZXR1cHZhbHVlAGdldHVwdmFsdWUAYXR0ZW1wdCB0byAlcyBhICVzIHZhbHVlAG5vIHZhbHVlAGludmFsaWQgdmFsdWUAYnl0ZQBleGVjdXRlAHdyaXRlACdzZXRuJyBpcyBvYnNvbGV0ZQBjb25jYXRlbmF0ZQBjb2xsYXRlAGNyZWF0ZQBkYXRlAHNldHBhdXNlAHJldmVyc2UAX19jbG9zZQBlbHNlAGZhbHNlAGludmFsaWQgcGF0dGVybiBjYXB0dXJlAHVuZmluaXNoZWQgY2FwdHVyZQByZXF1aXJlAGN0eXBlAGNhbm5vdCByZXN1bWUgJXMgY29yb3V0aW5lAGNhbm5vdCByZXN1bWUgbm9uLXN1c3BlbmRlZCBjb3JvdXRpbmUAY3VycmVudGxpbmUAdG9vIG1hbnkgYXJndW1lbnRzIHRvIHJlc3VtZQB0b28gbWFueSByZXN1bHRzIHRvIHJlc3VtZQBkaWZmdGltZQB0bXBuYW1lAHJlbmFtZQB1bmFibGUgdG8gZ2VuZXJhdGUgYSB1bmlxdWUgZmlsZW5hbWUAbW9kdWxlAHdoaWxlAHRtcGZpbGUAZG9maWxlAGxvYWRmaWxlAGNhbm5vdCBjbG9zZSBzdGFuZGFyZCBmaWxlAGF0dGVtcHQgdG8gdXNlIGEgY2xvc2VkIGZpbGUAbG9vcCBpbiBzZXR0YWJsZQBsb29wIGluIGdldHRhYmxlAHNldG1ldGF0YWJsZQBnZXRtZXRhdGFibGUAX19tZXRhdGFibGUAY2Fubm90IGNoYW5nZSBhIHByb3RlY3RlZCBtZXRhdGFibGUAZmllbGQgJyVzJyBtaXNzaW5nIGluIGRhdGUgdGFibGUAJ3BhY2thZ2UubG9hZGVycycgbXVzdCBiZSBhIHRhYmxlACdwYWNrYWdlLnByZWxvYWQnIG11c3QgYmUgYSB0YWJsZQBzZXRsb2NhbGUAX19sZQBodWdlAGVzY2FwZSBzZXF1ZW5jZSB0b28gbGFyZ2UAaW5kZXggb3V0IG9mIHJhbmdlAGxldmVsIG91dCBvZiByYW5nZQBiYXNlIG91dCBvZiByYW5nZQBwYWNrYWdlAGNvbGxlY3RnYXJiYWdlAF9fbW9kZQBiYWQgY29kZQBzb3VyY2UARWUAZm1vZABfX21vZABtZXRob2QAZ2ZpbmQAdW5leHBlY3RlZCBlbmQAYW5kAHlpZWxkAGZpZWxkACdwb3Blbicgbm90IHN1cHBvcnRlZABib29sZWFuIG9yIHByb3h5IGV4cGVjdGVkAGZ1bmN0aW9uIGFyZ3VtZW50cyBleHBlY3RlZABMdWEgZnVuY3Rpb24gZXhwZWN0ZWQAZnVuY3Rpb24gb3IgbGV2ZWwgZXhwZWN0ZWQAdmFsdWUgZXhwZWN0ZWQAY29yb3V0aW5lIGV4cGVjdGVkAHN0cmluZy9mdW5jdGlvbi90YWJsZSBleHBlY3RlZABuaWwgb3IgdGFibGUgZXhwZWN0ZWQAJyVzJyBleHBlY3RlZAAnPScgb3IgJ2luJyBleHBlY3RlZAA8bmFtZT4gb3IgJy4uLicgZXhwZWN0ZWQAbmVzdGluZyBvZiBbWy4uLl1dIGlzIGRlcHJlY2F0ZWQAZmlsZSBpcyBhbHJlYWR5IGNsb3NlZABzdGFuZGFyZCAlcyBmaWxlIGlzIGNsb3NlZABsYXN0bGluZWRlZmluZWQAcmFuZG9tc2VlZABzdXNwZW5kZWQAbG9hZGVkAF9fYWRkAHJhZABwcmVsb2FkAHRocmVhZABkZWFkAG5vIGZ1bmN0aW9uIGVudmlyb25tZW50IGZvciB0YWlsIGNhbGwgYXQgbGV2ZWwgJWQAc2hvcnRfc3JjAGZ1bmMAbnVtZXJpYwBfX2djAHNlYwAlYwBnc3ViAF9fc3ViAHJiAGxvYWRsaWIAcndhAC4vPy5sdWE7L3Vzci9sb2NhbC9zaGFyZS9sdWEvNS4xLz8ubHVhOy91c3IvbG9jYWwvc2hhcmUvbHVhLzUuMS8/L2luaXQubHVhOy91c3IvbG9jYWwvbGliL2x1YS81LjEvPy5sdWE7L3Vzci9sb2NhbC9saWIvbHVhLzUuMS8/L2luaXQubHVhAEx1YQB1c2VyZGF0YQBfAD1bQ10ACglubyBmaWVsZCBwYWNrYWdlLnByZWxvYWRbJyVzJ10AIl0AUE9TSVgAR01UAHRhYmxlIGluZGV4IGlzIE5hTgBfVkVSU0lPTgBOQU4AX00ATENfQUxMAExVQV9QQVRIAExVQV9DUEFUSABfRwBMQU5HAElORgBfTkFNRQBfUEFDS0FHRQBfTE9BREVEAEMAX0xPQURMSUIAPT8AID8APG51bWJlcj4APHN0cmluZz4APGVvZj4APG5hbWU+ACBpbiBmdW5jdGlvbiA8JXM6JWQ+AH49AD49AD09ADw9ADs7ADsBOwAlczoAc3RhY2sgdHJhY2ViYWNrOgAlZDoAQy5VVEYtOABhdGFuMgBMdWEgNS4xAGxvZzEwAFwwMDAALwAKCS4uLgBeJCorPy4oWyUtAC8KOwo/CiEKLQB3KwBGSUxFKgAoKnRlbXBvcmFyeSkAKGZvciBpbmRleCkAYW1iaWd1b3VzIHN5bnRheCAoZnVuY3Rpb24gY2FsbCB4IG5ldyBzdGF0ZW1lbnQpAChmb3IgbGltaXQpAGludmFsaWQgZm9ybWF0IChyZXBlYXRlZCBmbGFncykAc3RhY2sgb3ZlcmZsb3cgKCVzKQBjYWxsaW5nICclcycgb24gYmFkIHNlbGYgKCVzKQBiYWQgYXJndW1lbnQgIyVkICglcykAYmFkIGFyZ3VtZW50ICMlZCB0byAnJXMnICglcykAaW52YWxpZCByZXBsYWNlbWVudCB2YWx1ZSAoYSAlcykAKGZvciBnZW5lcmF0b3IpAChmb3Igc3RlcCkAZmlsZSAoJXApAChmb3IgY29udHJvbCkAKG51bGwpAD0odGFpbCBjYWxsKQBpbnZhbGlkIGZvcm1hdCAod2lkdGggb3IgcHJlY2lzaW9uIHRvbyBsb25nKQBh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RmlsZSBleGlzdHMAVmFsdWUgdG9vIGxhcmdlIGZvciBkYXRhIHR5cGUATm8gc3BhY2UgbGVmdCBvbiBkZXZpY2UAT3V0IG9mIG1lbW9yeQBSZXNvdXJjZSBidXN5AEludGVycnVwdGVkIHN5c3RlbSBjYWxsAFJlc291cmNlIHRlbXBvcmFyaWx5IHVuYXZhaWxhYmxlAEludmFsaWQgc2VlawBDcm9zcy1kZXZpY2UgbGluawBSZWFkLW9ubHkgZmlsZSBzeXN0ZW0ARGlyZWN0b3J5IG5vdCBlbXB0eQBDb25uZWN0aW9uIHJlc2V0IGJ5IHBlZXIAT3BlcmF0aW9uIHRpbWVkIG91dABDb25uZWN0aW9uIHJlZnVzZWQASG9zdCBpcyBkb3duAEhvc3QgaXMgdW5yZWFjaGFibGUAQWRkcmVzcyBpbiB1c2UAQnJva2VuIHBpcGUASS9PIGVycm9yAE5vIHN1Y2ggZGV2aWNlIG9yIGFkZHJlc3MAQmxvY2sgZGV2aWNlIHJlcXVpcmVkAE5vIHN1Y2ggZGV2aWNlAE5vdCBhIGRpcmVjdG9yeQBJcyBhIGRpcmVjdG9yeQBUZXh0IGZpbGUgYnVzeQBFeGVjIGZvcm1hdCBlcnJvcgBJbnZhbGlkIGFyZ3VtZW50AEFyZ3VtZW50IGxpc3QgdG9vIGxvbmcAU3ltYm9saWMgbGluayBsb29wAEZpbGVuYW1lIHRvbyBsb25nAFRvbyBtYW55IG9wZW4gZmlsZXMgaW4gc3lzdGVtAE5vIGZpbGUgZGVzY3JpcHRvcnMgYXZhaWxhYmxlAEJhZCBmaWxlIGRlc2NyaXB0b3IATm8gY2hpbGQgcHJvY2VzcwBCYWQgYWRkcmVzcwBGaWxlIHRvbyBsYXJnZQBUb28gbWFueSBsaW5rcwBObyBsb2NrcyBhdmFpbGFibGUAUmVzb3VyY2UgZGVhZGxvY2sgd291bGQgb2NjdXIAU3RhdGUgbm90IHJlY292ZXJhYmxlAFByZXZpb3VzIG93bmVyIGRpZWQAT3BlcmF0aW9uIGNhbmNlbGVkAEZ1bmN0aW9uIG5vdCBpbXBsZW1lbnRlZABObyBtZXNzYWdlIG9mIGRlc2lyZWQgdHlwZQBJZGVudGlmaWVyIHJlbW92ZWQARGV2aWNlIG5vdCBhIHN0cmVhbQBObyBkYXRhIGF2YWlsYWJsZQBEZXZpY2UgdGltZW91dABPdXQgb2Ygc3RyZWFtcyByZXNvdXJjZXMATGluayBoYXMgYmVlbiBzZXZlcmVkAFByb3RvY29sIGVycm9yAEJhZCBtZXNzYWdlAEZpbGUgZGVzY3JpcHRvciBpbiBiYWQgc3RhdGUATm90IGEgc29ja2V0AERlc3RpbmF0aW9uIGFkZHJlc3MgcmVxdWlyZWQATWVzc2FnZSB0b28gbGFyZ2UAUHJvdG9jb2wgd3JvbmcgdHlwZSBmb3Igc29ja2V0AFByb3RvY29sIG5vdCBhdmFpbGFibGUAUHJvdG9jb2wgbm90IHN1cHBvcnRlZABTb2NrZXQgdHlwZSBub3Qgc3VwcG9ydGVkAE5vdCBzdXBwb3J0ZWQAUHJvdG9jb2wgZmFtaWx5IG5vdCBzdXBwb3J0ZWQAQWRkcmVzcyBmYW1pbHkgbm90IHN1cHBvcnRlZCBieSBwcm90b2NvbABBZGRyZXNzIG5vdCBhdmFpbGFibGUATmV0d29yayBpcyBkb3duAE5ldHdvcmsgdW5yZWFjaGFibGUAQ29ubmVjdGlvbiByZXNldCBieSBuZXR3b3JrAENvbm5lY3Rpb24gYWJvcnRlZABObyBidWZmZXIgc3BhY2UgYXZhaWxhYmxlAFNvY2tldCBpcyBjb25uZWN0ZWQAU29ja2V0IG5vdCBjb25uZWN0ZWQAQ2Fubm90IHNlbmQgYWZ0ZXIgc29ja2V0IHNodXRkb3duAE9wZXJhdGlvbiBhbHJlYWR5IGluIHByb2dyZXNzAE9wZXJhdGlvbiBpbiBwcm9ncmVzcwBTdGFsZSBmaWxlIGhhbmRsZQBSZW1vdGUgSS9PIGVycm9yAFF1b3RhIGV4Y2VlZGVkAE5vIG1lZGl1bSBmb3VuZABXcm9uZyBtZWRpdW0gdHlwZQBNdWx0aWhvcCBhdHRlbXB0ZWQAUmVxdWlyZWQga2V5IG5vdCBhdmFpbGFibGUAS2V5IGhhcyBleHBpcmVkAEtleSBoYXMgYmVlbiByZXZva2VkAEtleSB3YXMgcmVqZWN0ZWQgYnkgc2VydmljZQAAAAAApQJbAPABtQWMBSUBgwYdA5QE/wDHAzEDCwa8AY8BfwPKBCsA2gavAEIDTgPcAQ4EFQChBg0BlAILAjgGZAK8Av8CXQPnBAsHzwLLBe8F2wXhAh4GRQKFAIICbANvBPEA8wMYBdkA2gNMBlQCewGdA70EAABRABUCuwCzA20A/wGFBC8F+QQ4AGUBRgGfALcGqAFzAlMBAEHowQELDCEEAAAAAAAAAAAvAgBBiMIBCwY1BEcEVgQAQZ7CAQsCoAQAQbLCAQsiRgVgBW4FYQYAAM8BAAAAAAAAAADJBukG+QYeBzkHSQdeBwBB4MIBC5EB0XSeAFedvSqAcFIP//8+JwoAAABkAAAA6AMAABAnAACghgEAQEIPAICWmAAA4fUFGAAAADUAAABxAAAAa////877//+Sv///AAAAAAAAAAAZAAoAGRkZAAAAAAUAAAAAAAAJAAAAAAsAAAAAAAAAABkAEQoZGRkDCgcAAQAJCxgAAAkGCwAACwAGGQAAABkZGQBBgcQBCyEOAAAAAAAAAAAZAAoNGRkZAA0AAAIACQ4AAAAJAA4AAA4AQbvEAQsBDABBx8QBCxUTAAAAABMAAAAACQwAAAAAAAwAAAwAQfXEAQsBEABBgcUBCxUPAAAABA8AAAAACRAAAAAAABAAABAAQa/FAQsBEgBBu8UBCx4RAAAAABEAAAAACRIAAAAAABIAABIAABoAAAAaGhoAQfLFAQsOGgAAABoaGgAAAAAAAAkAQaPGAQsBFABBr8YBCxUXAAAAABcAAAAACRQAAAAAABQAABQAQd3GAQsBFgBB6cYBC4MEFQAAAAAVAAAAAAkWAAAAAAAWAAAWAAAwMTIzNDU2Nzg5QUJDREVG/////////////////////////////////////////////////////////////////wABAgMEBQYHCAn/////////CgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiP///////8KCwwNDg8QERITFBUWFxgZGhscHR4fICEiI/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAQIEBwMGBQAAAAAAAAACAADAAwAAwAQAAMAFAADABgAAwAcAAMAIAADACQAAwAoAAMALAADADAAAwA0AAMAOAADADwAAwBAAAMARAADAEgAAwBMAAMAUAADAFQAAwBYAAMAXAADAGAAAwBkAAMAaAADAGwAAwBwAAMAdAADAHgAAwB8AAMAAAACzAQAAwwIAAMMDAADDBAAAwwUAAMMGAADDBwAAwwgAAMMJAADDCgAAwwsAAMMMAADDDQAA0w4AAMMPAADDAAAMuwEADMMCAAzDAwAMwwQADNsAQZTLAQsBsABBvMsBCwj//////////wBBgMwBCwEFAEGMzAELAawAQaTMAQsKqgAAAKkAAAC4aQBBvMwBCwECAEHMzAELCP//////////AEGRzQELCGYAAAAAAAAJAEGkzQELAawAQbjNAQsSqwAAAAAAAACpAAAAyGkAAAAEAEHkzQELBP////8AQajOAQsBBQBBtM4BCwGtAEHMzgELDqoAAACuAAAA2G0AAAAEAEHkzgELAQEAQfTOAQsF/////woAQbjPAQsHKGcAAEB2QA==";})(typeof globalThis!=="undefined"?globalThis:this);
            (function (global, factory) {
                global = typeof globalThis !== 'undefined' ? globalThis : global || self;
                var lodashLite = {
                    isArray: Array.isArray,
                    isPlainObject: function (value) {
                        if (value === null || typeof value !== 'object') return false;
                        var prototype = Object.getPrototypeOf(value);
                        return prototype === Object.prototype || prototype === null;
                    }
                };
                var target = typeof exports === 'object' && typeof module !== 'undefined'
                    ? module.exports
                    : (global["wasmoon-lua5"] = global["wasmoon-lua5"] || {}, global["wasmoon-lua5"]["1"] = {});
                global.__PSYCH_LUA_CORE__ = target;
                factory(target, lodashLite);
            })(this, (function (exports, lodash) { 'use strict';
            
                var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
                function _interopNamespaceDefault(e) {
                    var n = Object.create(null);
                    if (e) {
                        Object.keys(e).forEach(function (k) {
                            if (k !== 'default') {
                                var d = Object.getOwnPropertyDescriptor(e, k);
                                Object.defineProperty(n, k, d.get ? d : {
                                    enumerable: true,
                                    get: function () { return e[k]; }
                                });
                            }
                        });
                    }
                    n.default = e;
                    return Object.freeze(n);
                }
            
                var lodash__namespace = /*#__PURE__*/_interopNamespaceDefault(lodash);
            
                class JsType {
                    static create(name, is) {
                        return new JsType(name, is);
                    }
                    static decorate(target) {
                        const jsType = new JsType();
                        jsType.value = target;
                        return jsType;
                    }
                    constructor(name, is) {
                        this._priority = 0;
                        this._name = null;
                        this._name = name !== null && name !== void 0 ? name : null;
                        this.match = is;
                    }
                    _pushMetaTable(thread) {
                        if (this._gc) {
                            thread.luaApi.lua_pushcfunction(thread.address, this._gc);
                            thread.luaApi.lua_setfield(thread.address, -2, '__gc');
                        }
                        if (this._call) {
                            thread.luaApi.lua_pushcfunction(thread.address, this._call);
                            thread.luaApi.lua_setfield(thread.address, -2, '__call');
                        }
                        const ops = [
                            'add',
                            'sub',
                            'mul',
                            'div',
                            'mod',
                            'pow',
                            'unm',
                            'concat',
                            'len',
                            'eq',
                            'lt',
                            'le',
                            'index',
                            'newindex',
                            'metatable',
                            'tostring',
                        ];
                        for (const op of ops) {
                            if (this[`_${op}`]) {
                                const target = this[`_${op}`];
                                if (typeof target === 'number') {
                                    thread.luaApi.lua_pushcfunction(thread.address, target);
                                }
                                else {
                                    thread.pushValue(this[`_${op}`]);
                                }
                                thread.luaApi.lua_setfield(thread.address, -2, `__${op}`);
                            }
                        }
                    }
                    bind(thread) {
                        thread.luaApi.luaL_newmetatable(thread.address, this._name);
                        thread.luaApi.lua_pushstring(thread.address, this._name);
                        thread.luaApi.lua_setfield(thread.address, -2, '__name');
                        this._pushMetaTable(thread);
                        thread.luaApi.lua_pop(thread.address, 1);
                        thread.bindType(this);
                    }
                    push(pushMethod) {
                        this._push = pushMethod;
                        return this;
                    }
                    priority(priority) {
                        this._priority = priority;
                        return this;
                    }
                    name(name) {
                        this._name = name;
                        return this;
                    }
                    gc(funcPointer) {
                        this._gc = funcPointer;
                        return this;
                    }
                    call(funcPointer) {
                        this._call = funcPointer;
                        return this;
                    }
                    metatable(value) {
                        this._metatable = value;
                        return this;
                    }
                    tostring(value) {
                        this._tostring = value;
                        return this;
                    }
                    index(funcPointer) {
                        this._index = funcPointer;
                        return this;
                    }
                    newindex(funcPointer) {
                        this._newindex = funcPointer;
                        return this;
                    }
                    operation(op, func) {
                        const ops = {
                            '+': '_add',
                            'add': '_add',
                            '-': '_sub',
                            'sub': '_sub',
                            '*': '_mul',
                            'mul': '_mul',
                            '/': '_div',
                            'div': '_div',
                            '%': '_mod',
                            'mod': '_mod',
                            '^': '_pow',
                            'pow': '_pow',
                            'unm': '_unm',
                            '..': '_concat',
                            'contact': '_concat',
                            '#': '_len',
                            'len': '_len',
                            '==': '_eq',
                            'eq': '_eq',
                            '<': '_lt',
                            'lt': '_lt',
                            '<=': '_le',
                            'le': '_le',
                        };
                        const metakey = ops[op];
                        if (!metakey) {
                            throw new Error(`Invalid operation: ${op}`);
                        }
                        this[metakey] = func;
                        return this;
                    }
                }
            
                const PointerSize = 4;
                const LUA_MULTRET = -1;
                const LUA_REGISTRYINDEX = -10000;
                const LUA_ENVIRONINDEX = -10001;
                const LUA_GLOBALSINDEX = -10002;
                const LUA_IDSIZE = 60;
                exports.LuaReturn = void 0;
                (function (LuaReturn) {
                    LuaReturn[LuaReturn["Ok"] = 0] = "Ok";
                    LuaReturn[LuaReturn["Yield"] = 1] = "Yield";
                    LuaReturn[LuaReturn["ErrorRun"] = 2] = "ErrorRun";
                    LuaReturn[LuaReturn["ErrorSyntax"] = 3] = "ErrorSyntax";
                    LuaReturn[LuaReturn["ErrorMem"] = 4] = "ErrorMem";
                    LuaReturn[LuaReturn["ErrorErr"] = 5] = "ErrorErr";
                    LuaReturn[LuaReturn["ErrorFile"] = 6] = "ErrorFile";
                })(exports.LuaReturn || (exports.LuaReturn = {}));
                exports.LuaType = void 0;
                (function (LuaType) {
                    LuaType[LuaType["None"] = -1] = "None";
                    LuaType[LuaType["Nil"] = 0] = "Nil";
                    LuaType[LuaType["Boolean"] = 1] = "Boolean";
                    LuaType[LuaType["LightUserdata"] = 2] = "LightUserdata";
                    LuaType[LuaType["Number"] = 3] = "Number";
                    LuaType[LuaType["String"] = 4] = "String";
                    LuaType[LuaType["Table"] = 5] = "Table";
                    LuaType[LuaType["Function"] = 6] = "Function";
                    LuaType[LuaType["Userdata"] = 7] = "Userdata";
                    LuaType[LuaType["Thread"] = 8] = "Thread";
                })(exports.LuaType || (exports.LuaType = {}));
                exports.LuaEventCodes = void 0;
                (function (LuaEventCodes) {
                    LuaEventCodes[LuaEventCodes["Call"] = 0] = "Call";
                    LuaEventCodes[LuaEventCodes["Ret"] = 1] = "Ret";
                    LuaEventCodes[LuaEventCodes["Line"] = 2] = "Line";
                    LuaEventCodes[LuaEventCodes["Count"] = 3] = "Count";
                    LuaEventCodes[LuaEventCodes["TailCall"] = 4] = "TailCall";
                })(exports.LuaEventCodes || (exports.LuaEventCodes = {}));
                exports.LuaEventMasks = void 0;
                (function (LuaEventMasks) {
                    LuaEventMasks[LuaEventMasks["Call"] = 1] = "Call";
                    LuaEventMasks[LuaEventMasks["Ret"] = 2] = "Ret";
                    LuaEventMasks[LuaEventMasks["Line"] = 4] = "Line";
                    LuaEventMasks[LuaEventMasks["Count"] = 8] = "Count";
                })(exports.LuaEventMasks || (exports.LuaEventMasks = {}));
                exports.LuaLibraries = void 0;
                (function (LuaLibraries) {
                    LuaLibraries["Base"] = "_G";
                    LuaLibraries["Coroutine"] = "coroutine";
                    LuaLibraries["Table"] = "table";
                    LuaLibraries["IO"] = "io";
                    LuaLibraries["OS"] = "os";
                    LuaLibraries["String"] = "string";
                    LuaLibraries["UTF8"] = "utf8";
                    LuaLibraries["Math"] = "math";
                    LuaLibraries["Debug"] = "debug";
                    LuaLibraries["Package"] = "package";
                })(exports.LuaLibraries || (exports.LuaLibraries = {}));
                class LuaTimeoutError extends Error {
                }
            
                class LuaDebug {
                    constructor(pointer, module, message) {
                        this.tracebacks = [];
                        this.pointer = pointer;
                        this.module = module;
                        this.message = message;
                    }
                    read() {
                        let baseIndex = this.pointer >> 2;
                        const event = this.module.HEAPU32.at(baseIndex++);
                        const name = this.readStructString(baseIndex++);
                        const namewhat = this.readStructString(baseIndex++);
                        const what = this.readStructString(baseIndex++);
                        const source = this.readStructString(baseIndex++);
                        const currentline = this.module.HEAPU32.at(baseIndex++);
                        const nups = this.module.HEAPU32.at(baseIndex++);
                        const linedefined = this.module.HEAPU32.at(baseIndex++);
                        const lastlinedefined = this.module.HEAPU32.at(baseIndex++);
                        const short_src = this.module.UTF8ToString(baseIndex << 2, 60);
                        const i_ci = this.module.HEAPU32.at(baseIndex + LUA_IDSIZE / 4);
                        const traceback = {
                            event,
                            name: name || '?',
                            namewhat,
                            what,
                            source,
                            currentline: currentline === 0xffffffff ? '?' : currentline,
                            nups,
                            linedefined: linedefined === 0xffffffff ? '?' : linedefined,
                            lastlinedefined: lastlinedefined === 0xffffffff ? '?' : lastlinedefined,
                            short_src,
                            i_ci,
                        };
                        this.tracebacks.push(traceback);
                    }
                    getMessage() {
                        var _a, _b;
                        const result = [];
                        result.push(`${((_a = this.tracebacks[0]) === null || _a === void 0 ? void 0 : _a.short_src) || '?'}:${((_b = this.tracebacks[0]) === null || _b === void 0 ? void 0 : _b.currentline) || '?'}: ${this.message}`);
                        if (this.tracebacks.length) {
                            result.push('stack traceback:');
                        }
                        for (const traceback of this.tracebacks) {
                            result.push(`    at ${traceback.name} (${traceback.short_src}:${traceback.currentline}) (${traceback.what}:${traceback.namewhat})`);
                        }
                        return result.join('\n');
                    }
                    getTracebacks() {
                        return this.tracebacks;
                    }
                    readStructString(structPointer) {
                        return this.module.UTF8ToString(this.module.HEAPU32.at(structPointer));
                    }
                }
                LuaDebug.structSize = 100;
            
                exports.DictType = void 0;
                (function (DictType) {
                    DictType[DictType["Array"] = 0] = "Array";
                    DictType[DictType["Object"] = 1] = "Object";
                    DictType[DictType["Map"] = 2] = "Map";
                })(exports.DictType || (exports.DictType = {}));
                const detectDuplicateKeys = (keys) => {
                    const set = new Set();
                    for (const _key of keys) {
                        const key = String(_key);
                        if (set.has(key)) {
                            return true;
                        }
                        set.add(key);
                    }
                    return false;
                };
                const detectDictType = (keys) => {
                    if (keys.some((key) => !['number', 'string'].includes(typeof key)) || detectDuplicateKeys(keys)) {
                        return exports.DictType.Map;
                    }
                    else if (keys.some((key) => typeof key === 'number')) {
                        return exports.DictType.Array;
                    }
                    else {
                        return exports.DictType.Object;
                    }
                };
                const mapTransform = (map, options = {}) => {
                    if (!options.refs) {
                        options.refs = new Map();
                    }
                    if (options.refs.has(map)) {
                        return options.refs.get(map);
                    }
                    const keys = [...map.keys()];
                    const dictType = options.dictType === undefined ? detectDictType(keys) : options.dictType;
                    if (dictType === exports.DictType.Map) {
                        return map;
                    }
                    const result = dictType === exports.DictType.Array ? [] : {};
                    options.refs.set(map, result);
                    for (const key of keys) {
                        const value = map.get(key);
                        if (value instanceof Map) {
                            result[key] = mapTransform(value, options);
                            continue;
                        }
                        result[key] = value;
                    }
                    return result;
                };
            
                /**
                 * Echos the value of a value. Trys to print the value out
                 * in the best way possible given the different types.
                 *
                 * @param {Object} obj The object to print out.
                 * @param {Object} opts Optional options object that alters the output.
                 */
                /* legacy: obj, showHidden, depth, colors*/
                function inspect(obj, opts) {
                  // default options
                  var ctx = {
                    seen: [],
                    stylize: stylizeNoColor
                  };
                  // legacy...
                  if (arguments.length >= 3) ctx.depth = arguments[2];
                  if (arguments.length >= 4) ctx.colors = arguments[3];
                  if (isBoolean(opts)) {
                    // legacy...
                    ctx.showHidden = opts;
                  } else if (opts) {
                    // got an "options" object
                    _extend(ctx, opts);
                  }
                  // set default options
                  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
                  if (isUndefined(ctx.depth)) ctx.depth = 2;
                  if (isUndefined(ctx.colors)) ctx.colors = false;
                  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
                  if (ctx.colors) ctx.stylize = stylizeWithColor;
                  return formatValue(ctx, obj, ctx.depth);
                }
            
                // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
                inspect.colors = {
                  'bold' : [1, 22],
                  'italic' : [3, 23],
                  'underline' : [4, 24],
                  'inverse' : [7, 27],
                  'white' : [37, 39],
                  'grey' : [90, 39],
                  'black' : [30, 39],
                  'blue' : [34, 39],
                  'cyan' : [36, 39],
                  'green' : [32, 39],
                  'magenta' : [35, 39],
                  'red' : [31, 39],
                  'yellow' : [33, 39]
                };
            
                // Don't use 'blue' not visible on cmd.exe
                inspect.styles = {
                  'special': 'cyan',
                  'number': 'yellow',
                  'boolean': 'yellow',
                  'undefined': 'grey',
                  'null': 'bold',
                  'string': 'green',
                  'date': 'magenta',
                  // "name": intentionally not styling
                  'regexp': 'red'
                };
            
            
                function stylizeWithColor(str, styleType) {
                  var style = inspect.styles[styleType];
            
                  if (style) {
                    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
                           '\u001b[' + inspect.colors[style][1] + 'm';
                  } else {
                    return str;
                  }
                }
            
            
                function stylizeNoColor(str, styleType) {
                  return str;
                }
            
            
                function arrayToHash(array) {
                  var hash = {};
            
                  array.forEach(function(val, idx) {
                    hash[val] = true;
                  });
            
                  return hash;
                }
            
            
                function formatValue(ctx, value, recurseTimes) {
                  // Provide a hook for user-specified inspect functions.
                  // Check that value is an object with an inspect function on it
                  if (ctx.customInspect &&
                      value &&
                      isFunction(value.inspect) &&
                      // Filter out the util module, it's inspect function is special
                      value.inspect !== inspect &&
                      // Also filter out any prototype objects using the circular check.
                      !(value.constructor && value.constructor.prototype === value)) {
                    var ret = value.inspect(recurseTimes, ctx);
                    if (!isString(ret)) {
                      ret = formatValue(ctx, ret, recurseTimes);
                    }
                    return ret;
                  }
            
                  // Primitive types cannot have properties
                  var primitive = formatPrimitive(ctx, value);
                  if (primitive) {
                    return primitive;
                  }
            
                  // Look up the keys of the object.
                  var keys = Object.keys(value);
                  var visibleKeys = arrayToHash(keys);
            
                  if (ctx.showHidden) {
                    keys = Object.getOwnPropertyNames(value);
                  }
            
                  // IE doesn't make error fields non-enumerable
                  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
                  if (isError(value)
                      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
                    return formatError(value);
                  }
            
                  // Some type of object without properties can be shortcutted.
                  if (keys.length === 0) {
                    if (isFunction(value)) {
                      var name = value.name ? ': ' + value.name : '';
                      return ctx.stylize('[Function' + name + ']', 'special');
                    }
                    if (isRegExp(value)) {
                      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
                    }
                    if (isDate(value)) {
                      return ctx.stylize(Date.prototype.toString.call(value), 'date');
                    }
                    if (isError(value)) {
                      return formatError(value);
                    }
                  }
            
                  var base = '', array = false, braces = ['{', '}'];
            
                  // Make Array say that they are Array
                  if (isArray(value)) {
                    array = true;
                    braces = ['[', ']'];
                  }
            
                  // Make functions say that they are functions
                  if (isFunction(value)) {
                    var n = value.name ? ': ' + value.name : '';
                    base = ' [Function' + n + ']';
                  }
            
                  // Make RegExps say that they are RegExps
                  if (isRegExp(value)) {
                    base = ' ' + RegExp.prototype.toString.call(value);
                  }
            
                  // Make dates with properties first say the date
                  if (isDate(value)) {
                    base = ' ' + Date.prototype.toUTCString.call(value);
                  }
            
                  // Make error with message first say the error
                  if (isError(value)) {
                    base = ' ' + formatError(value);
                  }
            
                  if (keys.length === 0 && (!array || value.length == 0)) {
                    return braces[0] + base + braces[1];
                  }
            
                  if (recurseTimes < 0) {
                    if (isRegExp(value)) {
                      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
                    } else {
                      return ctx.stylize('[Object]', 'special');
                    }
                  }
            
                  ctx.seen.push(value);
            
                  var output;
                  if (array) {
                    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
                  } else {
                    output = keys.map(function(key) {
                      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
                    });
                  }
            
                  ctx.seen.pop();
            
                  return reduceToSingleString(output, base, braces);
                }
            
            
                function formatPrimitive(ctx, value) {
                  if (isUndefined(value))
                    return ctx.stylize('undefined', 'undefined');
                  if (isString(value)) {
                    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                                             .replace(/'/g, "\\'")
                                                             .replace(/\\"/g, '"') + '\'';
                    return ctx.stylize(simple, 'string');
                  }
                  if (isNumber(value))
                    return ctx.stylize('' + value, 'number');
                  if (isBoolean(value))
                    return ctx.stylize('' + value, 'boolean');
                  // For some reason typeof null is "object", so special case here.
                  if (isNull(value))
                    return ctx.stylize('null', 'null');
                }
            
            
                function formatError(value) {
                  return '[' + Error.prototype.toString.call(value) + ']';
                }
            
            
                function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
                  var output = [];
                  for (var i = 0, l = value.length; i < l; ++i) {
                    if (hasOwnProperty(value, String(i))) {
                      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
                          String(i), true));
                    } else {
                      output.push('');
                    }
                  }
                  keys.forEach(function(key) {
                    if (!key.match(/^\d+$/)) {
                      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
                          key, true));
                    }
                  });
                  return output;
                }
            
            
                function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
                  var name, str, desc;
                  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
                  if (desc.get) {
                    if (desc.set) {
                      str = ctx.stylize('[Getter/Setter]', 'special');
                    } else {
                      str = ctx.stylize('[Getter]', 'special');
                    }
                  } else {
                    if (desc.set) {
                      str = ctx.stylize('[Setter]', 'special');
                    }
                  }
                  if (!hasOwnProperty(visibleKeys, key)) {
                    name = '[' + key + ']';
                  }
                  if (!str) {
                    if (ctx.seen.indexOf(desc.value) < 0) {
                      if (isNull(recurseTimes)) {
                        str = formatValue(ctx, desc.value, null);
                      } else {
                        str = formatValue(ctx, desc.value, recurseTimes - 1);
                      }
                      if (str.indexOf('\n') > -1) {
                        if (array) {
                          str = str.split('\n').map(function(line) {
                            return '  ' + line;
                          }).join('\n').substr(2);
                        } else {
                          str = '\n' + str.split('\n').map(function(line) {
                            return '   ' + line;
                          }).join('\n');
                        }
                      }
                    } else {
                      str = ctx.stylize('[Circular]', 'special');
                    }
                  }
                  if (isUndefined(name)) {
                    if (array && key.match(/^\d+$/)) {
                      return str;
                    }
                    name = JSON.stringify('' + key);
                    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                      name = name.substr(1, name.length - 2);
                      name = ctx.stylize(name, 'name');
                    } else {
                      name = name.replace(/'/g, "\\'")
                                 .replace(/\\"/g, '"')
                                 .replace(/(^"|"$)/g, "'");
                      name = ctx.stylize(name, 'string');
                    }
                  }
            
                  return name + ': ' + str;
                }
            
            
                function reduceToSingleString(output, base, braces) {
                  var length = output.reduce(function(prev, cur) {
                    if (cur.indexOf('\n') >= 0) ;
                    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
                  }, 0);
            
                  if (length > 60) {
                    return braces[0] +
                           (base === '' ? '' : base + '\n ') +
                           ' ' +
                           output.join(',\n  ') +
                           ' ' +
                           braces[1];
                  }
            
                  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
                }
            
            
                // NOTE: These type checking functions intentionally don't use `instanceof`
                // because it is fragile and can be easily faked with `Object.create()`.
                function isArray(ar) {
                  return Array.isArray(ar);
                }
            
                function isBoolean(arg) {
                  return typeof arg === 'boolean';
                }
            
                function isNull(arg) {
                  return arg === null;
                }
            
                function isNumber(arg) {
                  return typeof arg === 'number';
                }
            
                function isString(arg) {
                  return typeof arg === 'string';
                }
            
                function isUndefined(arg) {
                  return arg === void 0;
                }
            
                function isRegExp(re) {
                  return isObject(re) && objectToString(re) === '[object RegExp]';
                }
            
                function isObject(arg) {
                  return typeof arg === 'object' && arg !== null;
                }
            
                function isDate(d) {
                  return isObject(d) && objectToString(d) === '[object Date]';
                }
            
                function isError(e) {
                  return isObject(e) &&
                      (objectToString(e) === '[object Error]' || e instanceof Error);
                }
            
                function isFunction(arg) {
                  return typeof arg === 'function';
                }
            
                function objectToString(o) {
                  return Object.prototype.toString.call(o);
                }
            
                function _extend(origin, add) {
                  // Don't do anything if add isn't an object
                  if (!add || !isObject(add)) return origin;
            
                  var keys = Object.keys(add);
                  var i = keys.length;
                  while (i--) {
                    origin[keys[i]] = add[keys[i]];
                  }
                  return origin;
                }
                function hasOwnProperty(obj, prop) {
                  return Object.prototype.hasOwnProperty.call(obj, prop);
                }
            
                class LuaTable {
                    constructor(thread, ref, pointer) {
                        this.alive = true;
                        this.thread = thread;
                        this.ref = ref;
                        this.pointer = pointer;
                    }
                    [inspect.custom]() {
                        return this.toString();
                    }
                    $get(key) {
                        if (!this.alive) {
                            throw new Error('table is destroyed');
                        }
                        return this.getTableValue(key);
                    }
                    $set(key, value) {
                        return this.setTableValue(key, value);
                    }
                    $istable() {
                        return true;
                    }
                    $getRef() {
                        return this.ref;
                    }
                    $detach(dictType) {
                        this.thread.luaApi.lua_rawgeti(this.thread.address, LUA_REGISTRYINDEX, this.ref);
                        let map = this.detachTable(-1);
                        this.thread.pop();
                        map = mapTransform(map, { dictType: dictType !== null && dictType !== void 0 ? dictType : exports.DictType.Map });
                        return map;
                    }
                    $isAlive() {
                        return this.alive;
                    }
                    $destroy() {
                        this.thread.luaApi.luaL_unref(this.thread.address, LUA_REGISTRYINDEX, this.ref);
                        this.thread.luaApi.pointerRefs.delete(this.pointer);
                        this.alive = false;
                    }
                    toString() {
                        return `[LuaTable 0x${this.pointer.toString(16)} *${this.ref} ${this.alive ? 'Alive' : 'Destroyed'}]`;
                    }
                    getTableValue(key) {
                        this.thread.luaApi.lua_rawgeti(this.thread.address, LUA_REGISTRYINDEX, this.ref);
                        this.thread.pushValue(key);
                        this.thread.luaApi.lua_gettable(this.thread.address, -2);
                        const result = this.thread.getValue(-1);
                        this.thread.pop(2);
                        return result;
                    }
                    setTableValue(key, value) {
                        this.thread.luaApi.lua_rawgeti(this.thread.address, LUA_REGISTRYINDEX, this.ref);
                        this.thread.pushValue(key);
                        key = this.thread.getValue(-1);
                        this.thread.pushValue(value);
                        value = this.thread.getValue(-1);
                        this.thread.luaApi.lua_settable(this.thread.address, -3);
                        this.thread.pop(1);
                        return true;
                    }
                    detachTable(index, refs) {
                        index = this.thread.luaApi.lua_absindex(this.thread.address, index);
                        if (!refs) {
                            refs = new Map();
                        }
                        const pointer = this.thread.luaApi.lua_topointer(this.thread.address, index);
                        if (refs.has(pointer)) {
                            return refs.get(pointer);
                        }
                        const result = new Map();
                        refs.set(pointer, result);
                        this.thread.luaApi.lua_pushnil(this.thread.address);
                        while (this.thread.luaApi.lua_next(this.thread.address, index) !== 0) {
                            const key = this.thread.getType(-2) === exports.LuaType.Table ? this.detachTable(-2, refs) : this.thread.getValue(-2);
                            const value = this.thread.getType(-1) === exports.LuaType.Table ? this.detachTable(-1, refs) : this.thread.getValue(-1);
                            result.set(key, value);
                            this.thread.pop();
                        }
                        return result;
                    }
                }
                const getTable = (thread, index) => {
                    const pointer = thread.luaApi.lua_topointer(thread.address, index);
                    if (thread.luaApi.pointerRefs.has(pointer)) {
                        return thread.luaApi.pointerRefs.get(pointer).proxy;
                    }
                    const ref = thread.luaApi.luaL_ref(thread.address, LUA_REGISTRYINDEX);
                    thread.luaApi.lua_rawgeti(thread.address, LUA_REGISTRYINDEX, ref);
                    const table = new LuaTable(thread, ref, pointer);
                    const { proxy, revoke } = Proxy.revocable(table, {
                        get: (target, key) => {
                            if (!target.$isAlive() && key !== 'toString') {
                                throw new Error(`${target.toString()} is destroyed`);
                            }
                            if (target[key]) {
                                return target[key].bind(target);
                            }
                            if (key === Symbol.toStringTag) {
                                return () => 'LuaTable';
                            }
                            if (typeof key === 'symbol') {
                                return undefined;
                            }
                            return target.$get(key);
                        },
                        set: (target, key, value) => {
                            if (!target.$isAlive()) {
                                throw new Error(`${target.toString()} is destroyed`);
                            }
                            return target.$set(key, value);
                        },
                    });
                    thread.luaApi.pointerRefs.set(pointer, { proxy, revoke });
                    return proxy;
                };
            
                class MultiReturn extends Array {
                }
            
                const INSTRUCTION_HOOK_COUNT = 1000;
                class LuaThread {
                    constructor(luaApi, address, parent) {
                        this.closed = false;
                        this.types = [];
                        this.luaApi = luaApi;
                        this.address = address;
                        this.parent = parent;
                        this.types = (parent === null || parent === void 0 ? void 0 : parent.types) || [];
                    }
                    newThread() {
                        const address = this.luaApi.lua_newthread(this.address);
                        if (!address) {
                            throw new Error('lua_newthread returned a null pointer');
                        }
                        return new LuaThread(this.luaApi, address, this.parent || this);
                    }
                    bindType(type) {
                        this.types.unshift(type);
                        this.types.sort((a, b) => b._priority - a._priority);
                    }
                    getTop() {
                        return this.luaApi.lua_gettop(this.address);
                    }
                    setTop(index) {
                        this.luaApi.lua_settop(this.address, index);
                    }
                    remove(index) {
                        return this.luaApi.lua_remove(this.address, index);
                    }
                    getType(index) {
                        return this.luaApi.lua_type(this.address, index);
                    }
                    isBasicValue(index) {
                        const type = this.luaApi.lua_type(this.address, index);
                        return [exports.LuaType.Nil, exports.LuaType.Boolean, exports.LuaType.Number, exports.LuaType.String].includes(type);
                    }
                    pushBasicValue(target, options) {
                        if (target === undefined || target === null) {
                            this.luaApi.lua_pushnil(this.address);
                        }
                        else if (typeof target === 'number') {
                            if (Number.isInteger(target)) {
                                this.luaApi.lua_pushinteger(this.address, target);
                            }
                            else {
                                this.luaApi.lua_pushnumber(this.address, target);
                            }
                        }
                        else if (typeof target === 'string') {
                            this.luaApi.lua_pushstring(this.address, target);
                        }
                        else if (typeof target === 'boolean') {
                            this.luaApi.lua_pushboolean(this.address, target ? 1 : 0);
                        }
                        else if (lodash__namespace.isPlainObject(target) || lodash__namespace.isArray(target)) {
                            this.pushTable(target, options);
                        }
                        else {
                            return false;
                        }
                        return true;
                    }
                    pushValue(target, options = {}) {
                        const startTop = this.getTop();
                        if (target instanceof JsType) {
                            if (target._push) {
                                target._push({ thread: this, target: target.value, options });
                            }
                            else {
                                if (!this.pushBasicValue(target.value, options)) {
                                    const ref = this.luaApi.ref(target.value);
                                    const luaPointer = this.luaApi.lua_newuserdata(this.address, PointerSize);
                                    this.luaApi.module.setValue(luaPointer, ref, '*');
                                }
                                this.luaApi.lua_createtable(this.address, 0, 0);
                                target._pushMetaTable(this);
                                this.luaApi.lua_setmetatable(this.address, -2);
                            }
                        }
                        else if (target instanceof LuaThread) {
                            const isMain = this.luaApi.lua_pushthread(target.address) === 1;
                            if (!isMain) {
                                this.luaApi.lua_xmove(target.address, this.address, 1);
                            }
                            return;
                        }
                        else if (target && target.$istable) {
                            const ref = target.$getRef();
                            this.luaApi.lua_rawgeti(this.address, LUA_REGISTRYINDEX, ref);
                            return;
                        }
                        else {
                            if (!this.pushBasicValue(target, options)) {
                                const type = this.types.find((t) => t.match(target));
                                if (type._push) {
                                    type._push({ thread: this, target, options, type });
                                }
                                else {
                                    const ref = this.luaApi.ref(target);
                                    const luaPointer = this.luaApi.lua_newuserdata(this.address, PointerSize);
                                    this.luaApi.module.setValue(luaPointer, ref, '*');
                                    this.luaApi.luaL_getmetatable(this.address, type === null || type === void 0 ? void 0 : type._name);
                                    this.luaApi.lua_setmetatable(this.address, -2);
                                }
                            }
                        }
                        if (this.getTop() !== startTop + 1) {
                            throw new Error(`pushValue expected stack size ${startTop + 1}, got ${this.getTop()}`);
                        }
                    }
                    pushTable(object, options = {}) {
                        if (!options.refs) {
                            options.refs = new Map();
                        }
                        else {
                            const ref = options.refs.get(object);
                            if (ref) {
                                this.luaApi.lua_rawgeti(this.address, LUA_REGISTRYINDEX, ref);
                                return;
                            }
                        }
                        const arrIndexs = [];
                        const recIndexs = [];
                        if (lodash__namespace.isArray(object)) {
                            const keys = Object.keys(object);
                            keys.forEach((key) => {
                                if (!isNaN(Number(key))) {
                                    arrIndexs.push(Number(key));
                                }
                                else {
                                    recIndexs.push(key);
                                }
                            });
                        }
                        else if (lodash__namespace.isPlainObject(object)) {
                            recIndexs.push(...Object.keys(object));
                        }
                        this.luaApi.lua_createtable(this.address, arrIndexs.length, recIndexs.length);
                        const ref = this.luaApi.luaL_ref(this.address, LUA_REGISTRYINDEX);
                        this.luaApi.lua_rawgeti(this.address, LUA_REGISTRYINDEX, ref);
                        options.refs.set(object, ref);
                        try {
                            for (const key of arrIndexs) {
                                this.pushValue(key, options);
                                this.pushValue(object[key], options);
                                this.luaApi.lua_settable(this.address, -3);
                            }
                            for (const key of recIndexs) {
                                this.pushValue(key, options);
                                this.pushValue(object[key], options);
                                this.luaApi.lua_settable(this.address, -3);
                            }
                        }
                        finally {
                            const registerRefs = options.refs.values();
                            for (const ref of registerRefs) {
                                this.luaApi.luaL_unref(this.address, LUA_REGISTRYINDEX, ref);
                            }
                        }
                    }
                    getValue(index, options = {}) {
                        var _a;
                        index = this.luaApi.lua_absindex(this.address, index);
                        const type = (_a = options.type) !== null && _a !== void 0 ? _a : this.luaApi.lua_type(this.address, index);
                        if (type === exports.LuaType.None) {
                            return undefined;
                        }
                        else if (type === exports.LuaType.Nil) {
                            return null;
                        }
                        else if (type === exports.LuaType.Number) {
                            return this.luaApi.lua_tonumber(this.address, index);
                        }
                        else if (type === exports.LuaType.String) {
                            return this.luaApi.lua_tolstring(this.address, index, null);
                        }
                        else if (type === exports.LuaType.Boolean) {
                            return Boolean(this.luaApi.lua_toboolean(this.address, index));
                        }
                        else if (type === exports.LuaType.Thread) {
                            return this.stateToThread(this.luaApi.lua_tothread(this.address, index));
                        }
                        else if (type === exports.LuaType.Table) {
                            return this.getTable(index);
                        }
                        else if (type === exports.LuaType.Function) {
                            return this.getFunction(index);
                        }
                        else if (type === exports.LuaType.Userdata) {
                            const userdata = this.luaApi.lua_touserdata(this.address, index);
                            const ref = this.luaApi.module.getValue(userdata, '*');
                            return this.luaApi.getRef(ref);
                        }
                    }
                    getFunction(index) {
                        this.luaApi.lua_pushvalue(this.address, index);
                        const funcRef = this.luaApi.luaL_ref(this.address, LUA_REGISTRYINDEX);
                        const pointer = this.luaApi.lua_topointer(this.address, index);
                        if (this.luaApi.pointerRefs.has(pointer)) {
                            return this.luaApi.pointerRefs.get(pointer);
                        }
                        const func = (...args) => {
                            if (!func.$isAlive()) {
                                throw new Error('Tried to call a function that has been destroyed');
                            }
                            if (this.isClosed()) {
                                console.warn('Tried to call a function after closing lua state');
                                return;
                            }
                            const thread = this.newThread();
                            thread.luaApi.lua_rawgeti(thread.address, LUA_REGISTRYINDEX, funcRef);
                            try {
                                for (const arg of args) {
                                    thread.pushValue(arg);
                                }
                                const status = thread.luaApi.lua_pcall(thread.address, args.length, 1, 0);
                                if (status === exports.LuaReturn.Yield) {
                                    throw new Error('cannot yield in callbacks from javascript');
                                }
                                thread.assertOk(status);
                                if (thread.getTop() > 0) {
                                    return thread.getValue(-1);
                                }
                                return undefined;
                            }
                            finally {
                                thread.close();
                                this.pop();
                            }
                        };
                        func.$isAlive = () => true;
                        func.$destroy = () => {
                            this.luaApi.luaL_unref(this.address, LUA_REGISTRYINDEX, funcRef);
                            this.luaApi.pointerRefs.delete(pointer);
                            func.$isAlive = () => false;
                        };
                        this.luaApi.pointerRefs.set(pointer, func);
                        return func;
                    }
                    getTable(index) {
                        return getTable(this, index);
                    }
                    stateToThread(L) {
                        var _a;
                        return L === ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.address) ? this.parent : new LuaThread(this.luaApi, L, this.parent || this);
                    }
                    pop(count = 1) {
                        this.luaApi.lua_pop(this.address, count);
                    }
                    loadString(luaCode, name) {
                        const size = this.luaApi.module.lengthBytesUTF8(luaCode);
                        const pointerSize = size + 1;
                        const bufferPointer = this.luaApi.module._malloc(pointerSize);
                        try {
                            this.luaApi.module.stringToUTF8(luaCode, bufferPointer, pointerSize);
                            this.assertOk(this.luaApi.luaL_loadbuffer(this.address, bufferPointer, size, name !== null && name !== void 0 ? name : bufferPointer));
                        }
                        finally {
                            this.luaApi.module._free(bufferPointer);
                        }
                    }
                    loadFile(filename) {
                        this.assertOk(this.luaApi.luaL_loadfilex(this.address, filename, null));
                    }
                    call(name, ...args) {
                        const type = this.luaApi.lua_getglobal(this.address, name);
                        if (type !== exports.LuaType.Function) {
                            throw new Error(`A function of type '${type}' was pushed, expected is ${exports.LuaType.Function}`);
                        }
                        for (const arg of args) {
                            this.pushValue(arg);
                        }
                        const base = this.getTop() - args.length - 1;
                        this.luaApi.lua_call(this.address, args.length, LUA_MULTRET);
                        return this.getStackValues(base);
                    }
                    getStackValues(start = 0) {
                        const returns = this.getTop() - start;
                        const returnValues = new MultiReturn(returns);
                        for (let i = 0; i < returns; i++) {
                            returnValues[i] = this.getValue(start + i + 1);
                        }
                        return returnValues;
                    }
                    async run(argCount = 0, options) {
                        const originalTimeout = this.timeout;
                        try {
                            if ((options === null || options === void 0 ? void 0 : options.timeout) !== undefined) {
                                this.setTimeout(Date.now() + options.timeout);
                            }
                            let resumeResult = this.resume(argCount);
                            while (resumeResult.result === exports.LuaReturn.Yield) {
                                if (this.timeout && Date.now() > this.timeout) {
                                    if (resumeResult.resultCount > 0) {
                                        this.pop(resumeResult.resultCount);
                                    }
                                    throw new Error(`thread timeout exceeded`);
                                }
                                if (resumeResult.resultCount > 0) {
                                    const lastValue = this.getValue(-1);
                                    this.pop(resumeResult.resultCount);
                                    if (lastValue === Promise.resolve(lastValue)) {
                                        await lastValue;
                                    }
                                    else {
                                        await new Promise((resolve) => setImmediate(resolve));
                                    }
                                }
                                else {
                                    await new Promise((resolve) => setImmediate(resolve));
                                }
                                resumeResult = this.resume(0);
                            }
                            this.assertOk(resumeResult.result);
                            return this.getStackValues();
                        }
                        finally {
                            if ((options === null || options === void 0 ? void 0 : options.timeout) !== undefined) {
                                this.setTimeout(originalTimeout);
                            }
                        }
                    }
                    runSync(argCount = 0) {
                        const base = this.getTop() - argCount - 1;
                        this.assertOk(this.luaApi.lua_pcall(this.address, argCount, LUA_MULTRET, 0));
                        return this.getStackValues(base);
                    }
                    isClosed() {
                        var _a;
                        return !this.address || this.closed || Boolean((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isClosed());
                    }
                    close() {
                        if (this.isClosed()) {
                            return;
                        }
                        if (this.hookFunctionPointer) {
                            this.luaApi.module.removeFunction(this.hookFunctionPointer);
                        }
                        this.closed = true;
                    }
                    resetThread() {
                        this.luaApi.lua_close(this.address);
                    }
                    resume(argCount = 0) {
                        const luaResult = this.luaApi.lua_resume(this.address, argCount);
                        return {
                            result: luaResult,
                            resultCount: this.getTop(),
                        };
                    }
                    setTimeout(timeout) {
                        if (timeout && timeout > 0) {
                            if (!this.hookFunctionPointer) {
                                this.hookFunctionPointer = this.luaApi.module.addFunction(() => {
                                    if (Date.now() > timeout) {
                                        this.pushValue(new Error(`thread timeout exceeded`));
                                        this.luaApi.lua_error(this.address);
                                    }
                                }, 'vii');
                            }
                            this.luaApi.lua_sethook(this.address, this.hookFunctionPointer, exports.LuaEventMasks.Count, INSTRUCTION_HOOK_COUNT);
                            this.timeout = timeout;
                        }
                        else if (this.hookFunctionPointer) {
                            this.hookFunctionPointer = undefined;
                            this.timeout = undefined;
                            this.luaApi.lua_sethook(this.address, null, 0, 0);
                        }
                    }
                    getTimeout() {
                        return this.timeout;
                    }
                    assertOk(result) {
                        if (result !== exports.LuaReturn.Ok && result !== exports.LuaReturn.Yield) {
                            const resultString = exports.LuaReturn[result];
                            let error = new Error(`Lua Error(${resultString}/${result})`);
                            if (this.getTop() > 0) {
                                if (result === exports.LuaReturn.ErrorMem) {
                                    error.message = this.luaApi.lua_tolstring(this.address, -1, null);
                                }
                                else {
                                    const luaError = this.getValue(-1);
                                    if (luaError instanceof Error) {
                                        error = luaError;
                                    }
                                    else {
                                        error.message = this.indexToString(-1);
                                    }
                                }
                            }
                            if (result !== exports.LuaReturn.ErrorMem) {
                                const pointer = this.luaApi.module._malloc(LuaDebug.structSize);
                                try {
                                    let level = 0;
                                    const luaDebug = new LuaDebug(pointer, this.luaApi.module, error.message);
                                    while (this.luaApi.lua_getstack(this.address, level, pointer)) {
                                        this.luaApi.lua_getinfo(this.address, 'nSlu', pointer);
                                        luaDebug.read();
                                        level++;
                                    }
                                    error.message = luaDebug.getMessage();
                                }
                                catch (err) {
                                    console.warn('Error in generate stack trace', err);
                                }
                                finally {
                                    this.luaApi.module._free(pointer);
                                }
                            }
                            throw error;
                        }
                    }
                    getGlobalPointer(name) {
                        this.luaApi.lua_getglobal(this.address, name);
                        const pointer = this.getPointer(-1);
                        this.pop();
                        return pointer;
                    }
                    getPointer(index) {
                        return this.luaApi.lua_topointer(this.address, index);
                    }
                    indexToString(index) {
                        const str = this.luaApi.luaL_tolstring(this.address, index);
                        this.pop();
                        return str;
                    }
                    dumpStack(log = console.log) {
                        const top = this.getTop();
                        for (let i = 1; i <= top; i++) {
                            const typename = this.luaApi.luaL_typename(this.address, i);
                            const pointer = this.getPointer(i).toString();
                            const name = this.indexToString(i);
                            log(i, typename, pointer, name);
                        }
                    }
                    dumpTypes(log = console.log) {
                        for (const type of this.types) {
                            log(type._name, type._priority);
                        }
                    }
                }
            
                class LuaGlobal extends LuaThread {
                    constructor(cmodule, shouldTraceAllocations) {
                        if (shouldTraceAllocations) {
                            const memoryStats = { memoryUsed: 0 };
                            const allocatorFunctionPointer = cmodule.module.addFunction((_userData, pointer, oldSize, newSize) => {
                                if (newSize === 0) {
                                    if (pointer) {
                                        memoryStats.memoryUsed -= oldSize;
                                        cmodule.module._free(pointer);
                                    }
                                    return 0;
                                }
                                const endMemoryDelta = pointer ? newSize - oldSize : newSize;
                                const endMemory = memoryStats.memoryUsed + endMemoryDelta;
                                if (newSize > oldSize && memoryStats.memoryMax && endMemory > memoryStats.memoryMax) {
                                    return 0;
                                }
                                const reallocated = cmodule.module._realloc(pointer, newSize);
                                if (reallocated) {
                                    memoryStats.memoryUsed = endMemory;
                                }
                                return reallocated;
                            }, 'iiiii');
                            const address = cmodule.lua_newstate(allocatorFunctionPointer, null);
                            if (!address) {
                                cmodule.module.removeFunction(allocatorFunctionPointer);
                                throw new Error('lua_newstate returned a null pointer');
                            }
                            super(cmodule, address);
                            this.memoryStats = memoryStats;
                            this.allocatorFunctionPointer = allocatorFunctionPointer;
                        }
                        else {
                            const address = cmodule.luaL_newstate();
                            super(cmodule, address);
                        }
                        if (this.isClosed()) {
                            throw new Error('Global state could not be created (probably due to lack of memory)');
                        }
                    }
                    close() {
                        if (this.isClosed()) {
                            return;
                        }
                        super.close();
                        this.luaApi.lua_close(this.address);
                        if (this.allocatorFunctionPointer) {
                            this.luaApi.module.removeFunction(this.allocatorFunctionPointer);
                        }
                    }
                    loadLibrary(library) {
                        switch (library) {
                            case exports.LuaLibraries.Base:
                                this.luaApi.luaopen_base(this.address);
                                break;
                            case exports.LuaLibraries.Table:
                                this.luaApi.luaopen_table(this.address);
                                break;
                            case exports.LuaLibraries.IO:
                                this.luaApi.luaopen_io(this.address);
                                break;
                            case exports.LuaLibraries.OS:
                                this.luaApi.luaopen_os(this.address);
                                break;
                            case exports.LuaLibraries.String:
                                this.luaApi.luaopen_string(this.address);
                                break;
                            case exports.LuaLibraries.Math:
                                this.luaApi.luaopen_math(this.address);
                                break;
                            case exports.LuaLibraries.Debug:
                                this.luaApi.luaopen_debug(this.address);
                                break;
                            case exports.LuaLibraries.Package:
                                this.luaApi.luaopen_package(this.address);
                                break;
                        }
                        this.luaApi.lua_setglobal(this.address, library);
                    }
                    get(name) {
                        const type = this.luaApi.lua_getglobal(this.address, name);
                        const value = this.getValue(-1, { type });
                        this.pop();
                        return value;
                    }
                    set(name, value, options) {
                        this.pushValue(value, options);
                        this.luaApi.lua_setglobal(this.address, name);
                    }
                    getMemoryUsed() {
                        return this.getMemoryStatsRef().memoryUsed;
                    }
                    getMemoryMax() {
                        return this.getMemoryStatsRef().memoryMax;
                    }
                    setMemoryMax(max) {
                        this.getMemoryStatsRef().memoryMax = max;
                    }
                    getMemoryStatsRef() {
                        if (!this.memoryStats) {
                            throw new Error('Memory allocations is not being traced, please build engine with { traceAllocations: true }');
                        }
                        return this.memoryStats;
                    }
                }
            
                var initWasmModule = (() => {
                  var _scriptDir = (typeof document === 'undefined' && typeof location === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : typeof document === 'undefined' ? location.href : (_documentCurrentScript && _documentCurrentScript.src || new URL('index.js', document.baseURI).href));
                  
                  return (
                async function(moduleArg = {}) {
            
                var e=moduleArg,aa,ba;e.ready=new Promise((a,b)=>{aa=a;ba=b;});
                "_malloc _free _realloc _luaL_error _luaL_typerror _luaL_argerror _luaL_addlstring _luaL_addstring _luaL_addvalue _luaL_checkany _luaL_checkinteger _luaL_checklstring _luaL_checknumber _luaL_checkoption _luaL_checkstack _luaL_checktype _luaL_checkudata _luaL_loadbuffer _luaL_loadfile _luaL_loadstring _luaL_buffinit _luaL_callmeta _luaL_getmetafield _luaL_gsub _luaL_newmetatable _luaL_newstate _luaL_openlibs _luaL_optinteger _luaL_optlstring _luaL_optnumber _luaL_prepbuffer _luaL_pushresult _luaL_register _luaL_ref _luaL_unref _luaL_where _lua_atpanic _lua_call _lua_checkstack _lua_close _lua_concat _lua_cpcall _lua_createtable _lua_dump _lua_equal _lua_error _lua_gc _lua_getallocf _lua_getfenv _lua_getfield _lua_gethook _lua_gethookcount _lua_gethookmask _lua_getinfo _lua_getlocal _lua_getmetatable _lua_getstack _lua_gettable _lua_gettop _lua_getupvalue _lua_insert _lua_iscfunction _lua_isnumber _lua_isstring _lua_isuserdata _lua_lessthan _lua_load _lua_newstate _lua_newthread _lua_newuserdata _lua_next _lua_objlen _lua_pcall _lua_pushboolean _lua_pushcclosure _lua_pushfstring _lua_pushinteger _lua_pushlightuserdata _lua_pushlstring _lua_pushnil _lua_pushnumber _lua_pushstring _lua_pushthread _lua_pushvalue _lua_pushvfstring _lua_rawequal _lua_rawget _lua_rawgeti _lua_rawset _lua_rawseti _lua_remove _lua_replace _lua_resume _lua_setallocf _lua_setfenv _lua_setfield _lua_sethook _lua_setlocal _lua_setmetatable _lua_settable _lua_settop _lua_setupvalue _lua_status _lua_toboolean _lua_tocfunction _lua_tointeger _lua_tolstring _lua_tonumber _lua_topointer _lua_tothread _lua_touserdata _lua_type _lua_typename _lua_xmove _lua_yield _luaopen_base _luaopen_table _luaopen_io _luaopen_os _luaopen_string _luaopen_math _luaopen_debug _luaopen_package _memory ___indirect_function_table onRuntimeInitialized".split(" ").forEach(a=>{Object.getOwnPropertyDescriptor(e.ready,
                a)||Object.defineProperty(e.ready,a,{get:()=>g("You are getting "+a+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"),set:()=>g("You are setting "+a+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")});});
                var ca=Object.assign({},e),da="./this.program",ea=(a,b)=>{throw b;},fa="object"==typeof window,l="function"==typeof importScripts,n=!fa&&"object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,ha=!fa&&!n&&!l;if(e.ENVIRONMENT)throw Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");var r="",ia,ja,ka;
                if(n){if("undefined"==typeof process||!process.release||"node"!==process.release.name)throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var la=process.versions.node,ma=la.split(".").slice(0,3);ma=1E4*ma[0]+100*ma[1]+1*ma[2].split("-")[0];if(16E4>ma)throw Error("This emscripten-generated code requires node v16.0.0 (detected v"+la+")");const {createRequire:a}=
                await import('module');var require$1=a((typeof document === 'undefined' && typeof location === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : typeof document === 'undefined' ? location.href : (_documentCurrentScript && _documentCurrentScript.src || new URL('index.js', document.baseURI).href))),fs=require$1("fs"),na=require$1("path");l?r=na.dirname(r)+"/":r=require$1("url").fileURLToPath(new URL("./",(typeof document === 'undefined' && typeof location === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : typeof document === 'undefined' ? location.href : (_documentCurrentScript && _documentCurrentScript.src || new URL('index.js', document.baseURI).href))));ia=(b,c)=>{b=oa(b)?new URL(b):na.normalize(b);return fs.readFileSync(b,c?void 0:"utf8")};ka=b=>{if(Na(b)){var c=b.indexOf(",")+1;return new Uint8Array(Buffer.from(b.slice(c),"base64"));}b=ia(b,!0);b.buffer||(b=new Uint8Array(b));u(b.buffer);return b};ja=(b,c,d,f=!0)=>{b=oa(b)?new URL(b):na.normalize(b);fs.readFile(b,f?void 0:"utf8",(h,m)=>{h?d(h):c(f?m.buffer:m);});};!e.thisProgram&&
                1<process.argv.length&&(da=process.argv[1].replace(/\\/g,"/"));process.argv.slice(2);ea=(b,c)=>{process.exitCode=b;throw c;};}else if(ha){if("object"==typeof process&&"function"===typeof require$1||"object"==typeof window||"function"==typeof importScripts)throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");"undefined"!=typeof read&&(ia=read);ka=a=>{if("function"==
                typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");u("object"==typeof a);return a};ja=(a,b)=>{setTimeout(()=>b(ka(a)));};"undefined"==typeof clearTimeout&&(globalThis.clearTimeout=()=>{});"undefined"==typeof setTimeout&&(globalThis.setTimeout=a=>"function"==typeof a?a():g());"function"==typeof quit&&(ea=(a,b)=>{setTimeout(()=>{if(!(b instanceof pa)){let c=b;b&&"object"==typeof b&&b.stack&&(c=[b,b.stack]);z(`exiting due to exception: ${c}`);}quit(a);});throw b;});"undefined"!=typeof print&&
                ("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print);}else if(fa||l){l?r=self.location.href:"undefined"!=typeof document&&document.currentScript&&(r=document.currentScript.src);_scriptDir&&(r=_scriptDir);r.startsWith("blob:")?r="":r=r.substr(0,r.replace(/[?#].*/,"").lastIndexOf("/")+1);if("object"!=typeof window&&"function"!=typeof importScripts)throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
                ia=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText};l&&(ka=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});ja=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c();};d.onerror=c;d.send(null);};}else throw Error("environment detection error");var qa=console.log.bind(console),z=console.error.bind(console);
                Object.assign(e,ca);ca=null;C("ENVIRONMENT");C("GL_MAX_TEXTURE_IMAGE_UNITS");C("SDL_canPlayWithWebAudio");C("SDL_numSimultaneouslyQueuedBuffers");C("INITIAL_MEMORY");C("wasmMemory");C("arguments");C("buffer");C("canvas");C("doNotCaptureKeyboard");C("dynamicLibraries");C("elementPointerLock");C("extraStackTrace");C("forcedAspectRatio");C("instantiateWasm");C("keyboardListeningElement");C("freePreloadedMediaOnUse");C("loadSplitModule");C("logReadFiles");C("mainScriptUrlOrBlob");C("mem");C("monitorRunDependencies");
                C("noExitRuntime");C("noInitialRun");C("onAbort");C("onCustomMessage");C("onExit");C("onFree");C("onFullScreen");C("onMalloc");C("onRealloc");C("onRuntimeInitialized");C("postMainLoop");C("postRun");C("preInit");C("preMainLoop");C("preinitializedWebGLContext");C("memoryInitializerRequest");C("preloadPlugins");C("print");C("printErr");C("quit");C("setStatus");C("statusMessage");C("stderr");C("stdin");C("stdout");C("thisProgram");C("wasm");C("wasmBinary");C("websocket");C("fetchSettings");
                D("arguments","arguments_");D("thisProgram","thisProgram");D("quit","quit_");u("undefined"==typeof e.memoryInitializerPrefixURL,"Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");u("undefined"==typeof e.pthreadMainPrefixURL,"Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");u("undefined"==typeof e.cdInitializerPrefixURL,"Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
                u("undefined"==typeof e.filePackagePrefixURL,"Module.filePackagePrefixURL option was removed, use Module.locateFile instead");u("undefined"==typeof e.read,"Module.read option was removed (modify read_ in JS)");u("undefined"==typeof e.readAsync,"Module.readAsync option was removed (modify readAsync in JS)");u("undefined"==typeof e.readBinary,"Module.readBinary option was removed (modify readBinary in JS)");u("undefined"==typeof e.setWindowTitle,"Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)");
                u("undefined"==typeof e.TOTAL_MEMORY,"Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");D("asm","wasmExports");D("read","read_");D("readAsync","readAsync");D("readBinary","readBinary");D("setWindowTitle","setWindowTitle");u(!ha,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");D("wasmBinary","wasmBinary");"object"!=typeof WebAssembly&&g("no native wasm support detected");var ra,sa=!1;
                function u(a,b){a||g("Assertion failed"+(b?": "+b:""));}var E,ta,ua,F,G,va,wa;function xa(){var a=ra.buffer;e.HEAP8=E=new Int8Array(a);e.HEAP16=ua=new Int16Array(a);e.HEAPU8=ta=new Uint8Array(a);e.HEAPU16=new Uint16Array(a);e.HEAP32=F=new Int32Array(a);e.HEAPU32=G=new Uint32Array(a);e.HEAPF32=va=new Float32Array(a);e.HEAPF64=wa=new Float64Array(a);}u(!e.STACK_SIZE,"STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time");
                u("undefined"!=typeof Int32Array&&"undefined"!==typeof Float64Array&&void 0!=Int32Array.prototype.subarray&&void 0!=Int32Array.prototype.set,"JS engine does not provide full typed array support");u(!e.wasmMemory,"Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally");u(!e.INITIAL_MEMORY,"Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");
                function ya(){if(!sa){var a=za();0==a&&(a+=4);var b=G[a>>2],c=G[a+4>>2];34821223==b&&2310721022==c||g(`Stack overflow! Stack cookie has been overwritten at ${Aa(a)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Aa(c)} ${Aa(b)}`);1668509029!=G[0]&&g("Runtime error: The application has corrupted its heap memory area (address zero)!");}}var Ba=new Int16Array(1),Ca=new Int8Array(Ba.buffer);Ba[0]=25459;
                if(115!==Ca[0]||99!==Ca[1])throw "Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";var Da=[],Ea=[],Fa=[],Ga=!1;u(Math.imul,"This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");u(Math.fround,"This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");u(Math.clz32,"This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
                u(Math.trunc,"This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");var Ha=0,H=null,Ia=null,Ja={};function Ka(a){for(var b=a;;){if(!Ja[a])return a;a=b+Math.random();}}
                function La(a){Ha++;a?(u(!Ja[a]),Ja[a]=1,null===H&&"undefined"!=typeof setInterval&&(H=setInterval(()=>{if(sa)clearInterval(H),H=null;else {var b=!1,c;for(c in Ja)b||(b=!0,z("still waiting on run dependencies:")),z(`dependency: ${c}`);b&&z("(end of list)");}},1E4))):z("warning: run dependency added without ID");}function Ma(a){Ha--;a?(u(Ja[a]),delete Ja[a]):z("warning: run dependency removed without ID");0==Ha&&(null!==H&&(clearInterval(H),H=null),Ia&&(a=Ia,Ia=null,a()));}
                function g(a){a="Aborted("+a+")";z(a);sa=!0;a=new WebAssembly.RuntimeError(a);ba(a);throw a;}var Na=a=>a.startsWith("data:application/octet-stream;base64,"),oa=a=>a.startsWith("file://");function J(a){return (...b)=>{u(Ga,`native function \`${a}\` called before runtime initialization`);var c=Oa[a];u(c,`exported native function \`${a}\` not found`);return c(...b)}}var L;if(e.locateFile){if(L="liblua5.1.wasm",!Na(L)){var Pa=L;L=e.locateFile?e.locateFile(Pa,r):r+Pa;}}else L=(new URL("liblua5.1.wasm",(typeof document === 'undefined' && typeof location === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : typeof document === 'undefined' ? location.href : (_documentCurrentScript && _documentCurrentScript.src || new URL('index.js', document.baseURI).href)))).href;
                function Qa(a){if(ka)return ka(a);throw "both async and sync fetching of the wasm failed";}function Ra(a){if(fa||l){if("function"==typeof fetch&&!oa(a))return fetch(a,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw `failed to load wasm binary file at '${a}'`;return b.arrayBuffer()}).catch(()=>Qa(a));if(ja)return new Promise((b,c)=>{ja(a,d=>b(new Uint8Array(d)),c);})}return Promise.resolve().then(()=>Qa(a))}
                function Sa(a,b,c){return Ra(a).then(d=>WebAssembly.instantiate(d,b)).then(c,d=>{z(`failed to asynchronously prepare wasm: ${d}`);oa(L)&&z(`warning: Loading from a file URI (${L}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`);g(d);})}
                function Ta(a,b){var c=L;return "function"!=typeof WebAssembly.instantiateStreaming||Na(c)||oa(c)||n||"function"!=typeof fetch?Sa(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(f){z(`wasm streaming compile failed: ${f}`);z("falling back to ArrayBuffer instantiation");return Sa(c,a,b)}))}var M,Ua;
                function D(a,b){Object.getOwnPropertyDescriptor(e,a)||Object.defineProperty(e,a,{configurable:!0,get(){g(`\`Module.${a}\` has been replaced by \`${b}\``+" (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");}});}function C(a){Object.getOwnPropertyDescriptor(e,a)&&g(`\`Module.${a}\` was supplied but \`${a}\` not included in INCOMING_MODULE_JS_API`);}
                function Va(a){return "FS_createPath"===a||"FS_createDataFile"===a||"FS_createPreloadedFile"===a||"FS_unlink"===a||"addRunDependency"===a||"FS_createLazyFile"===a||"FS_createDevice"===a||"removeRunDependency"===a}function Wa(a,b){"undefined"!==typeof globalThis&&Object.defineProperty(globalThis,a,{configurable:!0,get(){N(`\`${a}\` is not longer defined by emscripten. ${b}`);}});}Wa("buffer","Please use HEAP8.buffer or wasmMemory.buffer");Wa("asm","Please use wasmExports instead");
                function Xa(a){Object.getOwnPropertyDescriptor(e,a)||Object.defineProperty(e,a,{configurable:!0,get(){var b=`'${a}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;Va(a)&&(b+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you");g(b);}});}function pa(a){this.name="ExitStatus";this.message=`Program terminated with exit(${a})`;this.status=a;}
                var Aa=a=>{u("number"===typeof a);return "0x"+(a>>>0).toString(16).padStart(8,"0")},N=a=>{N.la||(N.la={});N.la[a]||(N.la[a]=1,n&&(a="warning: "+a),z(a));},Ya=(a,b)=>{for(var c=0,d=a.length-1;0<=d;d--){var f=a[d];"."===f?a.splice(d,1):".."===f?(a.splice(d,1),c++):c&&(a.splice(d,1),c--);}if(b)for(;c;c--)a.unshift("..");return a},Q=a=>{var b="/"===a.charAt(0),c="/"===a.substr(-1);(a=Ya(a.split("/").filter(d=>!!d),!b).join("/"))||b||(a=".");a&&c&&(a+="/");return (b?"/":"")+a},Za=a=>{var b=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
                a=b[0];b=b[1];if(!a&&!b)return ".";b&&(b=b.substr(0,b.length-1));return a+b},$a=a=>{if("/"===a)return "/";a=Q(a);a=a.replace(/\/$/,"");var b=a.lastIndexOf("/");return -1===b?a:a.substr(b+1)},ab=(a,b)=>Q(a+"/"+b),bb=()=>{if("object"==typeof crypto&&"function"==typeof crypto.getRandomValues)return c=>crypto.getRandomValues(c);if(n)try{var a=require$1("crypto");if(a.randomFillSync)return c=>a.randomFillSync(c);var b=a.randomBytes;return c=>(c.set(b(c.byteLength)),c)}catch(c){}g("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");},
                cb=a=>(cb=bb())(a),db=(...a)=>{for(var b="",c=!1,d=a.length-1;-1<=d&&!c;d--){c=0<=d?a[d]:R.cwd();if("string"!=typeof c)throw new TypeError("Arguments to path.resolve must be strings");if(!c)return "";b=c+"/"+b;c="/"===c.charAt(0);}b=Ya(b.split("/").filter(f=>!!f),!c).join("/");return (c?"/":"")+b||"."},eb=(a,b)=>{function c(m){for(var p=0;p<m.length&&""===m[p];p++);for(var y=m.length-1;0<=y&&""===m[y];y--);return p>y?[]:m.slice(p,y-p+1)}a=db(a).substr(1);b=db(b).substr(1);a=c(a.split("/"));b=c(b.split("/"));
                for(var d=Math.min(a.length,b.length),f=d,h=0;h<d;h++)if(a[h]!==b[h]){f=h;break}d=[];for(h=f;h<a.length;h++)d.push("..");d=d.concat(b.slice(f));return d.join("/")},gb="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,hb=(a,b,c)=>{var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&gb)return gb.decode(a.subarray(b,c));for(d="";b<c;){var f=a[b++];if(f&128){var h=a[b++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else {var m=a[b++]&63;224==(f&240)?f=(f&15)<<12|h<<6|m:(240!=
                (f&248)&&N("Invalid UTF-8 leading byte "+Aa(f)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),f=(f&7)<<18|h<<12|m<<6|a[b++]&63);65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023));}}else d+=String.fromCharCode(f);}return d},ib=[],jb=a=>{for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3;}return b},kb=(a,b,c,d)=>{u("string"===typeof a,`stringToUTF8Array expects a string (got ${typeof a})`);
                if(!(0<d))return 0;var f=c;d=c+d-1;for(var h=0;h<a.length;++h){var m=a.charCodeAt(h);if(55296<=m&&57343>=m){var p=a.charCodeAt(++h);m=65536+((m&1023)<<10)|p&1023;}if(127>=m){if(c>=d)break;b[c++]=m;}else {if(2047>=m){if(c+1>=d)break;b[c++]=192|m>>6;}else {if(65535>=m){if(c+2>=d)break;b[c++]=224|m>>12;}else {if(c+3>=d)break;1114111<m&&N("Invalid Unicode code point "+Aa(m)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).");
                b[c++]=240|m>>18;b[c++]=128|m>>12&63;}b[c++]=128|m>>6&63;}b[c++]=128|m&63;}}b[c]=0;return c-f};function lb(a,b){var c=Array(jb(a)+1);a=kb(a,c,0,c.length);b&&(c.length=a);return c}var mb=[];function nb(a,b){mb[a]={input:[],output:[],K:b};ob(a,pb);}
                var pb={open(a){var b=mb[a.node.rdev];if(!b)throw new R.g(43);a.tty=b;a.seekable=!1;},close(a){a.tty.K.fsync(a.tty);},fsync(a){a.tty.K.fsync(a.tty);},read(a,b,c,d){if(!a.tty||!a.tty.K.sa)throw new R.g(60);for(var f=0,h=0;h<d;h++){try{var m=a.tty.K.sa(a.tty);}catch(p){throw new R.g(29);}if(void 0===m&&0===f)throw new R.g(6);if(null===m||void 0===m)break;f++;b[c+h]=m;}f&&(a.node.timestamp=Date.now());return f},write(a,b,c,d){if(!a.tty||!a.tty.K.ia)throw new R.g(60);try{for(var f=0;f<d;f++)a.tty.K.ia(a.tty,
                b[c+f]);}catch(h){throw new R.g(29);}d&&(a.node.timestamp=Date.now());return f}},qb={sa(){a:{if(!ib.length){var a=null;if(n){var b=Buffer.alloc(256),c=0,d=process.stdin.fd;try{c=fs.readSync(d,b);}catch(f){if(f.toString().includes("EOF"))c=0;else throw f;}0<c?a=b.slice(0,c).toString("utf-8"):a=null;}else "undefined"!=typeof window&&"function"==typeof window.prompt?(a=window.prompt("Input: "),null!==a&&(a+="\n")):"function"==typeof readline&&(a=readline(),null!==a&&(a+="\n"));if(!a){a=null;break a}ib=lb(a,
                !0);}a=ib.shift();}return a},ia(a,b){null===b||10===b?(qa(hb(a.output,0)),a.output=[]):0!=b&&a.output.push(b);},fsync(a){a.output&&0<a.output.length&&(qa(hb(a.output,0)),a.output=[]);},Ja(){return {ab:25856,cb:5,$a:191,bb:35387,Za:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},Ka(){return 0},La(){return [24,80]}},rb={ia(a,b){null===b||10===b?(z(hb(a.output,0)),a.output=[]):0!=b&&a.output.push(b);},fsync(a){a.output&&0<a.output.length&&(z(hb(a.output,0)),a.output=[]);}},sb=
                ()=>{g("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported");};function tb(a,b){var c=a.m?a.m.length:0;c>=b||(b=Math.max(b,c*(1048576>c?2:1.125)>>>0),0!=c&&(b=Math.max(b,256)),c=a.m,a.m=new Uint8Array(b),0<a.o&&a.m.set(c.subarray(0,a.o),0));}
                var S={G:null,s(){return S.createNode(null,"/",16895,0)},createNode(a,b,c,d){if(24576===(c&61440)||R.isFIFO(c))throw new R.g(63);S.G||(S.G={dir:{node:{C:S.h.C,v:S.h.v,lookup:S.h.lookup,J:S.h.J,rename:S.h.rename,unlink:S.h.unlink,rmdir:S.h.rmdir,readdir:S.h.readdir,symlink:S.h.symlink},stream:{D:S.l.D}},file:{node:{C:S.h.C,v:S.h.v},stream:{D:S.l.D,read:S.l.read,write:S.l.write,T:S.l.T,S:S.l.S,V:S.l.V}},link:{node:{C:S.h.C,v:S.h.v,readlink:S.h.readlink},stream:{}},oa:{node:{C:S.h.C,v:S.h.v},stream:R.Ea}});
                c=R.createNode(a,b,c,d);T(c.mode)?(c.h=S.G.dir.node,c.l=S.G.dir.stream,c.m={}):R.isFile(c.mode)?(c.h=S.G.file.node,c.l=S.G.file.stream,c.o=0,c.m=null):40960===(c.mode&61440)?(c.h=S.G.link.node,c.l=S.G.link.stream):8192===(c.mode&61440)&&(c.h=S.G.oa.node,c.l=S.G.oa.stream);c.timestamp=Date.now();a&&(a.m[b]=c,a.timestamp=c.timestamp);return c},lb(a){return a.m?a.m.subarray?a.m.subarray(0,a.o):new Uint8Array(a.m):new Uint8Array(0)},h:{C(a){var b={};b.dev=8192===(a.mode&61440)?a.id:1;b.ino=a.id;b.mode=
                a.mode;b.nlink=1;b.uid=0;b.gid=0;b.rdev=a.rdev;T(a.mode)?b.size=4096:R.isFile(a.mode)?b.size=a.o:40960===(a.mode&61440)?b.size=a.link.length:b.size=0;b.atime=new Date(a.timestamp);b.mtime=new Date(a.timestamp);b.ctime=new Date(a.timestamp);b.Ca=4096;b.blocks=Math.ceil(b.size/b.Ca);return b},v(a,b){void 0!==b.mode&&(a.mode=b.mode);void 0!==b.timestamp&&(a.timestamp=b.timestamp);if(void 0!==b.size&&(b=b.size,a.o!=b))if(0==b)a.m=null,a.o=0;else {var c=a.m;a.m=new Uint8Array(b);c&&a.m.set(c.subarray(0,
                Math.min(b,a.o)));a.o=b;}},lookup(){throw R.da[44];},J(a,b,c,d){return S.createNode(a,b,c,d)},rename(a,b,c){if(T(a.mode)){try{var d=U(b,c);}catch(h){}if(d)for(var f in d.m)throw new R.g(55);}delete a.parent.m[a.name];a.parent.timestamp=Date.now();a.name=c;b.m[c]=a;b.timestamp=a.parent.timestamp;a.parent=b;},unlink(a,b){delete a.m[b];a.timestamp=Date.now();},rmdir(a,b){var c=U(a,b),d;for(d in c.m)throw new R.g(55);delete a.m[b];a.timestamp=Date.now();},readdir(a){var b=[".",".."],c;for(c of Object.keys(a.m))b.push(c);
                return b},symlink(a,b,c){a=S.createNode(a,b,41471,0);a.link=c;return a},readlink(a){if(40960!==(a.mode&61440))throw new R.g(28);return a.link}},l:{read(a,b,c,d,f){var h=a.node.m;if(f>=a.node.o)return 0;a=Math.min(a.node.o-f,d);u(0<=a);if(8<a&&h.subarray)b.set(h.subarray(f,f+a),c);else for(d=0;d<a;d++)b[c+d]=h[f+d];return a},write(a,b,c,d,f,h){u(!(b instanceof ArrayBuffer));b.buffer===E.buffer&&(h=!1);if(!d)return 0;a=a.node;a.timestamp=Date.now();if(b.subarray&&(!a.m||a.m.subarray)){if(h)return u(0===
                f,"canOwn must imply no weird position inside the file"),a.m=b.subarray(c,c+d),a.o=d;if(0===a.o&&0===f)return a.m=b.slice(c,c+d),a.o=d;if(f+d<=a.o)return a.m.set(b.subarray(c,c+d),f),d}tb(a,f+d);if(a.m.subarray&&b.subarray)a.m.set(b.subarray(c,c+d),f);else for(h=0;h<d;h++)a.m[f+h]=b[c+h];a.o=Math.max(a.o,f+d);return d},D(a,b,c){1===c?b+=a.position:2===c&&R.isFile(a.node.mode)&&(b+=a.node.o);if(0>b)throw new R.g(28);return b},T(a,b,c){tb(a.node,b+c);a.node.o=Math.max(a.node.o,b+c);},S(a,b,c,d,f){if(!R.isFile(a.node.mode))throw new R.g(43);
                a=a.node.m;if(f&2||a.buffer!==E.buffer){if(0<c||c+b<a.length)a.subarray?a=a.subarray(c,c+b):a=Array.prototype.slice.call(a,c,c+b);c=!0;b=sb();if(!b)throw new R.g(48);E.set(a,b);}else c=!1,b=a.byteOffset;return {Sa:b,Ba:c}},V(a,b,c,d){S.l.write(a,b,0,d,c,!1);return 0}}},ub=(a,b,c)=>{var d=Ka(`al ${a}`);ja(a,f=>{u(f,`Loading data file "${a}" failed (no arrayBuffer).`);b(new Uint8Array(f));d&&Ma(d);},()=>{if(c)c();else throw `Loading data file "${a}" failed.`;});d&&La(d);},vb=[],wb=(a,b,c,d)=>{"undefined"!=
                typeof Browser&&Browser.R();var f=!1;vb.forEach(h=>{!f&&h.canHandle(b)&&(h.handle(a,b,c,d),f=!0);});return f},xb=(a,b)=>{var c=0;a&&(c|=365);b&&(c|=146);return c},yb={0:"Success",1:"Arg list too long",2:"Permission denied",3:"Address already in use",4:"Address not available",5:"Address family not supported by protocol family",6:"No more processes",7:"Socket already connected",8:"Bad file number",9:"Trying to read unreadable message",10:"Mount device busy",11:"Operation canceled",12:"No children",13:"Connection aborted",
                14:"Connection refused",15:"Connection reset by peer",16:"File locking deadlock error",17:"Destination address required",18:"Math arg out of domain of func",19:"Quota exceeded",20:"File exists",21:"Bad address",22:"File too large",23:"Host is unreachable",24:"Identifier removed",25:"Illegal byte sequence",26:"Connection already in progress",27:"Interrupted system call",28:"Invalid argument",29:"I/O error",30:"Socket is already connected",31:"Is a directory",32:"Too many symbolic links",33:"Too many open files",
                34:"Too many links",35:"Message too long",36:"Multihop attempted",37:"File or path name too long",38:"Network interface is not configured",39:"Connection reset by network",40:"Network is unreachable",41:"Too many open files in system",42:"No buffer space available",43:"No such device",44:"No such file or directory",45:"Exec format error",46:"No record locks available",47:"The link has been severed",48:"Not enough core",49:"No message of desired type",50:"Protocol not available",51:"No space left on device",
                52:"Function not implemented",53:"Socket is not connected",54:"Not a directory",55:"Directory not empty",56:"State not recoverable",57:"Socket operation on non-socket",59:"Not a typewriter",60:"No such device or address",61:"Value too large for defined data type",62:"Previous owner died",63:"Not super-user",64:"Broken pipe",65:"Protocol error",66:"Unknown protocol",67:"Protocol wrong type for socket",68:"Math result not representable",69:"Read only file system",70:"Illegal seek",71:"No such process",
                72:"Stale file handle",73:"Connection timed out",74:"Text file busy",75:"Cross-device link",100:"Device not a stream",101:"Bad font file fmt",102:"Invalid slot",103:"Invalid request code",104:"No anode",105:"Block device required",106:"Channel number out of range",107:"Level 3 halted",108:"Level 3 reset",109:"Link number out of range",110:"Protocol driver not attached",111:"No CSI structure available",112:"Level 2 halted",113:"Invalid exchange",114:"Invalid request descriptor",115:"Exchange full",
                116:"No data (for no delay io)",117:"Timer expired",118:"Out of streams resources",119:"Machine is not on the network",120:"Package not installed",121:"The object is remote",122:"Advertise error",123:"Srmount error",124:"Communication error on send",125:"Cross mount point (not really error)",126:"Given log. name not unique",127:"f.d. invalid for this operation",128:"Remote address changed",129:"Can   access a needed shared lib",130:"Accessing a corrupted shared lib",131:".lib section in a.out corrupted",
                132:"Attempting to link in too many libs",133:"Attempting to exec a shared library",135:"Streams pipe error",136:"Too many users",137:"Socket type not supported",138:"Not supported",139:"Protocol family not supported",140:"Can't send after socket shutdown",141:"Too many references",142:"Host is down",148:"No medium (in tape drive)",156:"Level 2 not synchronized"},zb={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,
                EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,
                ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,
                EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135};function ob(a,b){R.qa[a]={l:b};}function T(a){return 16384===(a&61440)}
                function U(a,b){var c=T(a.mode)?(c=Ab(a,"x"))?c:a.h.lookup?0:2:54;if(c)throw new R.g(c);for(c=R.F[Bb(a.id,b)];c;c=c.N){var d=c.name;if(c.parent.id===a.id&&d===b)return c}return R.lookup(a,b)}
                function V(a,b={}){a=db(a);if(!a)return {path:"",node:null};b=Object.assign({ba:!0,ka:0},b);if(8<b.ka)throw new R.g(32);a=a.split("/").filter(m=>!!m);for(var c=R.root,d="/",f=0;f<a.length;f++){var h=f===a.length-1;if(h&&b.parent)break;c=U(c,a[f]);d=Q(d+"/"+a[f]);c.A&&(!h||h&&b.ba)&&(c=c.A.root);if(!h||b.B)for(h=0;40960===(c.mode&61440);)if(c=R.readlink(d),d=db(Za(d),c),c=V(d,{ka:b.ka+1}).node,40<h++)throw new R.g(32);}return {path:d,node:c}}
                function Cb(a){for(var b;;){if(R.Z(a))return a=a.s.va,b?"/"!==a[a.length-1]?`${a}/${b}`:a+b:a;b=b?`${a.name}/${b}`:a.name;a=a.parent;}}function Bb(a,b){for(var c=0,d=0;d<b.length;d++)c=(c<<5)-c+b.charCodeAt(d)|0;return (a+c>>>0)%R.F.length}function Db(a){var b=Bb(a.parent.id,a.name);a.N=R.F[b];R.F[b]=a;}function Eb(a){var b=Bb(a.parent.id,a.name);if(R.F[b]===a)R.F[b]=a.N;else for(b=R.F[b];b;){if(b.N===a){b.N=a.N;break}b=b.N;}}function Fb(a){var b=["r","w","rw"][a&3];a&512&&(b+="w");return b}
                function Ab(a,b){if(R.ua)return 0;if(!b.includes("r")||a.mode&292){if(b.includes("w")&&!(a.mode&146)||b.includes("x")&&!(a.mode&73))return 2}else return 2;return 0}function Gb(a,b){try{return U(a,b),20}catch(c){}return Ab(a,"wx")}function Hb(a,b,c){try{var d=U(a,b);}catch(f){return f.u}if(a=Ab(a,"wx"))return a;if(c){if(!T(d.mode))return 54;if(R.Z(d)||Cb(d)===R.cwd())return 10}else if(T(d.mode))return 31;return 0}function Ib(){for(var a=0;a<=R.ya;a++)if(!R.streams[a])return a;throw new R.g(33);}
                function W(a){a=R.ra(a);if(!a)throw new R.g(8);return a}function Jb(a,b=-1){R.X||(R.X=function(){this.I={};},R.X.prototype={},Object.defineProperties(R.X.prototype,{object:{get(){return this.node},set(c){this.node=c;}},flags:{get(){return this.I.flags},set(c){this.I.flags=c;}},position:{get(){return this.I.position},set(c){this.I.position=c;}}}));a=Object.assign(new R.X,a);-1==b&&(b=Ib());a.fd=b;return R.streams[b]=a}
                function Kb(a){var b=[];for(a=[a];a.length;){var c=a.pop();b.push(c);a.push(...c.U);}return b}function Lb(a,b,c){"undefined"==typeof c&&(c=b,b=438);return R.J(a,b|8192,c)}
                function Mb(a,b){try{var c=V(a,{B:!b});a=c.path;}catch(f){}var d={Z:!1,exists:!1,error:0,name:null,path:null,object:null,Pa:!1,Ra:null,Qa:null};try{c=V(a,{parent:!0}),d.Pa=!0,d.Ra=c.path,d.Qa=c.node,d.name=$a(a),c=V(a,{B:!b}),d.exists=!0,d.path=c.path,d.object=c.node,d.name=c.node.name,d.Z="/"===c.path;}catch(f){d.error=f.u;}return d}function Nb(a,b,c,d){a="string"==typeof a?a:Cb(a);b=Q(a+"/"+b);return R.create(b,xb(c,d))}
                function Ob(a){if(!(a.Ma||a.Na||a.link||a.m)){if("undefined"!=typeof XMLHttpRequest)throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(ia)try{a.m=lb(ia(a.url),!0),a.o=a.m.length;}catch(b){throw new R.g(29);}else throw Error("Cannot load without read() or XMLHttpRequest.");}}
                var R={root:null,U:[],qa:{},streams:[],Oa:1,F:null,pa:"/",Y:!1,ua:!0,g:class extends Error{constructor(a){super(yb[a]);this.name="ErrnoError";this.u=a;for(var b in zb)if(zb[b]===a){this.code=b;break}}},da:{},Ga:null,W:0,createNode(a,b,c,d){u("object"==typeof a);a=new R.xa(a,b,c,d);Db(a);return a},Z(a){return a===a.parent},isFile(a){return 32768===(a&61440)},isFIFO(a){return 4096===(a&61440)},isSocket(a){return 49152===(a&49152)},ya:4096,ra:a=>R.streams[a],Ea:{open(a){a.l=R.Ha(a.node.rdev).l;a.l.open&&a.l.open(a);},
                D(){throw new R.g(70);}},ha:a=>a>>8,nb:a=>a&255,M:(a,b)=>a<<8|b,Ha:a=>R.qa[a],wa(a,b){function c(m){u(0<R.W);R.W--;return b(m)}function d(m){if(m){if(!d.Fa)return d.Fa=!0,c(m)}else ++h>=f.length&&c(null);}"function"==typeof a&&(b=a,a=!1);R.W++;1<R.W&&z(`warning: ${R.W} FS.syncfs operations in flight at once, probably just doing extra work`);var f=Kb(R.root.s),h=0;f.forEach(m=>{if(!m.type.wa)return d(null);m.type.wa(m,a,d);});},s(a,b,c){if("string"==typeof a)throw a;var d="/"===c;if(d&&R.root)throw new R.g(10);
                if(!d&&c){var f=V(c,{ba:!1});c=f.path;f=f.node;if(f.A)throw new R.g(10);if(!T(f.mode))throw new R.g(54);}b={type:a,rb:b,va:c,U:[]};a=a.s(b);a.s=b;b.root=a;d?R.root=a:f&&(f.A=b,f.s&&f.s.U.push(b));return a},xb(a){a=V(a,{ba:!1});if(!a.node.A)throw new R.g(28);a=a.node;var b=a.A,c=Kb(b);Object.keys(R.F).forEach(d=>{for(d=R.F[d];d;){var f=d.N;c.includes(d.s)&&Eb(d);d=f;}});a.A=null;b=a.s.U.indexOf(b);u(-1!==b);a.s.U.splice(b,1);},lookup(a,b){return a.h.lookup(a,b)},J(a,b,c){var d=V(a,{parent:!0}).node;
                a=$a(a);if(!a||"."===a||".."===a)throw new R.g(28);var f=Gb(d,a);if(f)throw new R.g(f);if(!d.h.J)throw new R.g(63);return d.h.J(d,a,b,c)},create(a,b){return R.J(a,(void 0!==b?b:438)&4095|32768,0)},mkdir(a,b){return R.J(a,(void 0!==b?b:511)&1023|16384,0)},ob(a,b){a=a.split("/");for(var c="",d=0;d<a.length;++d)if(a[d]){c+="/"+a[d];try{R.mkdir(c,b);}catch(f){if(20!=f.u)throw f;}}},symlink(a,b){if(!db(a))throw new R.g(44);var c=V(b,{parent:!0}).node;if(!c)throw new R.g(44);b=$a(b);var d=Gb(c,b);if(d)throw new R.g(d);
                if(!c.h.symlink)throw new R.g(63);return c.h.symlink(c,b,a)},rename(a,b){var c=Za(a),d=Za(b),f=$a(a),h=$a(b);var m=V(a,{parent:!0});var p=m.node;m=V(b,{parent:!0});m=m.node;if(!p||!m)throw new R.g(44);if(p.s!==m.s)throw new R.g(75);var y=U(p,f);a=eb(a,d);if("."!==a.charAt(0))throw new R.g(28);a=eb(b,c);if("."!==a.charAt(0))throw new R.g(55);try{var q=U(m,h);}catch(x){}if(y!==q){b=T(y.mode);if(f=Hb(p,f,b))throw new R.g(f);if(f=q?Hb(m,h,b):Gb(m,h))throw new R.g(f);if(!p.h.rename)throw new R.g(63);if(y.A||
                q&&q.A)throw new R.g(10);if(m!==p&&(f=Ab(p,"w")))throw new R.g(f);Eb(y);try{p.h.rename(y,m,h);}catch(x){throw x;}finally{Db(y);}}},rmdir(a){var b=V(a,{parent:!0}).node;a=$a(a);var c=U(b,a),d=Hb(b,a,!0);if(d)throw new R.g(d);if(!b.h.rmdir)throw new R.g(63);if(c.A)throw new R.g(10);b.h.rmdir(b,a);Eb(c);},readdir(a){a=V(a,{B:!0}).node;if(!a.h.readdir)throw new R.g(54);return a.h.readdir(a)},unlink(a){var b=V(a,{parent:!0}).node;if(!b)throw new R.g(44);a=$a(a);var c=U(b,a),d=Hb(b,a,!1);if(d)throw new R.g(d);
                if(!b.h.unlink)throw new R.g(63);if(c.A)throw new R.g(10);b.h.unlink(b,a);Eb(c);},readlink(a){a=V(a).node;if(!a)throw new R.g(44);if(!a.h.readlink)throw new R.g(28);return db(Cb(a.parent),a.h.readlink(a))},stat(a,b){a=V(a,{B:!b}).node;if(!a)throw new R.g(44);if(!a.h.C)throw new R.g(63);return a.h.C(a)},lstat(a){return R.stat(a,!0)},chmod(a,b,c){a="string"==typeof a?V(a,{B:!c}).node:a;if(!a.h.v)throw new R.g(63);a.h.v(a,{mode:b&4095|a.mode&-4096,timestamp:Date.now()});},lchmod(a,b){R.chmod(a,b,!0);},
                fchmod(a,b){a=W(a);R.chmod(a.node,b);},chown(a,b,c,d){a="string"==typeof a?V(a,{B:!d}).node:a;if(!a.h.v)throw new R.g(63);a.h.v(a,{timestamp:Date.now()});},lchown(a,b,c){R.chown(a,b,c,!0);},fchown(a,b,c){a=W(a);R.chown(a.node,b,c);},truncate(a,b){if(0>b)throw new R.g(28);a="string"==typeof a?V(a,{B:!0}).node:a;if(!a.h.v)throw new R.g(63);if(T(a.mode))throw new R.g(31);if(!R.isFile(a.mode))throw new R.g(28);var c=Ab(a,"w");if(c)throw new R.g(c);a.h.v(a,{size:b,timestamp:Date.now()});},kb(a,b){a=W(a);if(0===
                (a.flags&2097155))throw new R.g(28);R.truncate(a.node,b);},yb(a,b,c){a=V(a,{B:!0}).node;a.h.v(a,{timestamp:Math.max(b,c)});},open(a,b,c){if(""===a)throw new R.g(44);if("string"==typeof b){var d={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090}[b];if("undefined"==typeof d)throw Error(`Unknown file open mode: ${b}`);b=d;}c=b&64?("undefined"==typeof c?438:c)&4095|32768:0;if("object"==typeof a)var f=a;else {a=Q(a);try{f=V(a,{B:!(b&131072)}).node;}catch(h){}}d=!1;if(b&64)if(f){if(b&128)throw new R.g(20);}else f=
                R.J(a,c,0),d=!0;if(!f)throw new R.g(44);8192===(f.mode&61440)&&(b&=-513);if(b&65536&&!T(f.mode))throw new R.g(54);if(!d&&(c=f?40960===(f.mode&61440)?32:T(f.mode)&&("r"!==Fb(b)||b&512)?31:Ab(f,Fb(b)):44))throw new R.g(c);b&512&&!d&&R.truncate(f,0);b&=-131713;f=Jb({node:f,path:Cb(f),flags:b,seekable:!0,position:0,l:f.l,Xa:[],error:!1});f.l.open&&f.l.open(f);!e.logReadFiles||b&1||(R.ja||(R.ja={}),a in R.ja||(R.ja[a]=1));return f},close(a){if(null===a.fd)throw new R.g(8);a.ea&&(a.ea=null);try{a.l.close&&
                a.l.close(a);}catch(b){throw b;}finally{R.streams[a.fd]=null;}a.fd=null;},D(a,b,c){if(null===a.fd)throw new R.g(8);if(!a.seekable||!a.l.D)throw new R.g(70);if(0!=c&&1!=c&&2!=c)throw new R.g(28);a.position=a.l.D(a,b,c);a.Xa=[];return a.position},read(a,b,c,d,f){u(0<=c);if(0>d||0>f)throw new R.g(28);if(null===a.fd)throw new R.g(8);if(1===(a.flags&2097155))throw new R.g(8);if(T(a.node.mode))throw new R.g(31);if(!a.l.read)throw new R.g(28);var h="undefined"!=typeof f;if(!h)f=a.position;else if(!a.seekable)throw new R.g(70);
                b=a.l.read(a,b,c,d,f);h||(a.position+=b);return b},write(a,b,c,d,f,h){u(0<=c);if(0>d||0>f)throw new R.g(28);if(null===a.fd)throw new R.g(8);if(0===(a.flags&2097155))throw new R.g(8);if(T(a.node.mode))throw new R.g(31);if(!a.l.write)throw new R.g(28);a.seekable&&a.flags&1024&&R.D(a,0,2);var m="undefined"!=typeof f;if(!m)f=a.position;else if(!a.seekable)throw new R.g(70);b=a.l.write(a,b,c,d,f,h);m||(a.position+=b);return b},T(a,b,c){if(null===a.fd)throw new R.g(8);if(0>b||0>=c)throw new R.g(28);if(0===
                (a.flags&2097155))throw new R.g(8);if(!R.isFile(a.node.mode)&&!T(a.node.mode))throw new R.g(43);if(!a.l.T)throw new R.g(138);a.l.T(a,b,c);},S(a,b,c,d,f){if(0!==(d&2)&&0===(f&2)&&2!==(a.flags&2097155))throw new R.g(2);if(1===(a.flags&2097155))throw new R.g(2);if(!a.l.S)throw new R.g(43);return a.l.S(a,b,c,d,f)},V(a,b,c,d,f){u(0<=c);return a.l.V?a.l.V(a,b,c,d,f):0},qb:()=>0,fa(a,b,c){if(!a.l.fa)throw new R.g(59);return a.l.fa(a,b,c)},readFile(a,b={}){b.flags=b.flags||0;b.encoding=b.encoding||"binary";
                if("utf8"!==b.encoding&&"binary"!==b.encoding)throw Error(`Invalid encoding type "${b.encoding}"`);var c,d=R.open(a,b.flags);a=R.stat(a).size;var f=new Uint8Array(a);R.read(d,f,0,a,0);"utf8"===b.encoding?c=hb(f,0):"binary"===b.encoding&&(c=f);R.close(d);return c},writeFile(a,b,c={}){c.flags=c.flags||577;a=R.open(a,c.flags,c.mode);if("string"==typeof b){var d=new Uint8Array(jb(b)+1);b=kb(b,d,0,d.length);R.write(a,d,0,b,void 0,c.Da);}else if(ArrayBuffer.isView(b))R.write(a,b,0,b.byteLength,void 0,c.Da);
                else throw Error("Unsupported data type");R.close(a);},cwd:()=>R.pa,chdir(a){a=V(a,{B:!0});if(null===a.node)throw new R.g(44);if(!T(a.node.mode))throw new R.g(54);var b=Ab(a.node,"x");if(b)throw new R.g(b);R.pa=a.path;},R(a,b,c){u(!R.R.Y,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");R.R.Y=!0;e.stdin=a||e.stdin;e.stdout=b||e.stdout;e.stderr=c||e.stderr;e.stdin?R.L("/dev",
                "stdin",e.stdin):R.symlink("/dev/tty","/dev/stdin");e.stdout?R.L("/dev","stdout",null,e.stdout):R.symlink("/dev/tty","/dev/stdout");e.stderr?R.L("/dev","stderr",null,e.stderr):R.symlink("/dev/tty1","/dev/stderr");a=R.open("/dev/stdin",0);b=R.open("/dev/stdout",1);c=R.open("/dev/stderr",1);u(0===a.fd,`invalid handle for stdin (${a.fd})`);u(1===b.fd,`invalid handle for stdout (${b.fd})`);u(2===c.fd,`invalid handle for stderr (${c.fd})`);},sb(){R.R.Y=!1;Pb(0);for(var a=0;a<R.streams.length;a++){var b=
                R.streams[a];b&&R.close(b);}},jb(a,b){a=Mb(a,b);return a.exists?a.object:null},hb(a,b){a="string"==typeof a?a:Cb(a);for(b=b.split("/").reverse();b.length;){var c=b.pop();if(c){var d=Q(a+"/"+c);try{R.mkdir(d);}catch(f){}a=d;}}return d},L(a,b,c,d){a=ab("string"==typeof a?a:Cb(a),b);b=xb(!!c,!!d);R.L.ha||(R.L.ha=64);var f=R.M(R.L.ha++,0);ob(f,{open(h){h.seekable=!1;},close(){d&&d.buffer&&d.buffer.length&&d(10);},read(h,m,p,y){for(var q=0,x=0;x<y;x++){try{var t=c();}catch(B){throw new R.g(29);}if(void 0===t&&0===q)throw new R.g(6);
                if(null===t||void 0===t)break;q++;m[p+x]=t;}q&&(h.node.timestamp=Date.now());return q},write(h,m,p,y){for(var q=0;q<y;q++)try{d(m[p+q]);}catch(x){throw new R.g(29);}y&&(h.node.timestamp=Date.now());return q}});return Lb(a,b,f)},fb(a,b,c,d,f){function h(){this.ga=!1;this.I=[];}function m(t,B,k,w,v){t=t.node.m;if(v>=t.length)return 0;w=Math.min(t.length-v,w);u(0<=w);if(t.slice)for(var A=0;A<w;A++)B[k+A]=t[v+A];else for(A=0;A<w;A++)B[k+A]=t.get(v+A);return w}h.prototype.get=function(t){if(!(t>this.length-
                1||0>t)){var B=t%this.chunkSize;return this.ta(t/this.chunkSize|0)[B]}};h.prototype.Ia=function(t){this.ta=t;};h.prototype.na=function(){var t=new XMLHttpRequest;t.open("HEAD",c,!1);t.send(null);if(!(200<=t.status&&300>t.status||304===t.status))throw Error("Couldn't load "+c+". Status: "+t.status);var B=Number(t.getResponseHeader("Content-length")),k,w=(k=t.getResponseHeader("Accept-Ranges"))&&"bytes"===k;t=(k=t.getResponseHeader("Content-Encoding"))&&"gzip"===k;var v=1048576;w||(v=B);var A=this;A.Ia(I=>
                {var O=I*v,P=(I+1)*v-1;P=Math.min(P,B-1);if("undefined"==typeof A.I[I]){var fb=A.I;if(O>P)throw Error("invalid range ("+O+", "+P+") or no bytes requested!");if(P>B-1)throw Error("only "+B+" bytes available! programmer error!");var K=new XMLHttpRequest;K.open("GET",c,!1);B!==v&&K.setRequestHeader("Range","bytes="+O+"-"+P);K.responseType="arraybuffer";K.overrideMimeType&&K.overrideMimeType("text/plain; charset=x-user-defined");K.send(null);if(!(200<=K.status&&300>K.status||304===K.status))throw Error("Couldn't load "+
                c+". Status: "+K.status);O=void 0!==K.response?new Uint8Array(K.response||[]):lb(K.responseText||"",!0);fb[I]=O;}if("undefined"==typeof A.I[I])throw Error("doXHR failed!");return A.I[I]});if(t||!B)v=B=1,v=B=this.ta(0).length,qa("LazyFiles on gzip forces download of the whole file when length is accessed");this.Aa=B;this.za=v;this.ga=!0;};if("undefined"!=typeof XMLHttpRequest){if(!l)throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                var p=new h;Object.defineProperties(p,{length:{get:function(){this.ga||this.na();return this.Aa}},chunkSize:{get:function(){this.ga||this.na();return this.za}}});var y=void 0;}else y=c,p=void 0;var q=Nb(a,b,d,f);p?q.m=p:y&&(q.m=null,q.url=y);Object.defineProperties(q,{o:{get:function(){return this.m.length}}});var x={};Object.keys(q.l).forEach(t=>{var B=q.l[t];x[t]=(...k)=>{Ob(q);return B(...k)};});x.read=(t,B,k,w,v)=>{Ob(q);return m(t,B,k,w,v)};x.S=(t,B,k)=>{Ob(q);var w=sb();if(!w)throw new R.g(48);
                m(t,E,w,B,k);return {Sa:w,Ba:!0}};q.l=x;return q},Ya(){g("FS.absolutePath has been removed; use PATH_FS.resolve instead");},eb(){g("FS.createFolder has been removed; use FS.mkdir instead");},gb(){g("FS.createLink has been removed; use FS.symlink instead");},mb(){g("FS.joinPath has been removed; use PATH.join instead");},pb(){g("FS.mmapAlloc has been replaced by the top level function mmapAlloc");},vb(){g("FS.standardizePath has been removed; use PATH.normalize instead");}},X=(a,b)=>{u("number"==typeof a,
            `UTF8ToString expects a number (got ${typeof a})`    );return a?hb(ta,a,b):""};function Qb(a,b){if("/"===b.charAt(0))return b;a=-100===a?R.cwd():W(a).path;if(0==b.length)throw new R.g(44);return Q(a+"/"+b)}var Rb=void 0;function Y(){u(void 0!=Rb);var a=F[+Rb>>2];Rb+=4;return a}
                var Sb=(a,b,c)=>{u("number"==typeof c,"stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");return kb(a,ta,b,c)},Tb=(a,b)=>{u(a==a>>>0||a==(a|0));u(b===(b|0));return b+2097152>>>0<4194305-!!a?(a>>>0)+4294967296*b:NaN},Ub=a=>0===a%4&&(0!==a%100||0===a%400),Vb=[0,31,60,91,121,152,182,213,244,274,305,335],Wb=[0,31,59,90,120,151,181,212,243,273,304,334],Yb=a=>{var b=jb(a)+1,c=Xb(b);c&&Sb(a,c,b);return c},Zb={},ac=()=>{if(!$b){var a=
                {USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:da||"./this.program"},b;for(b in Zb)void 0===Zb[b]?delete a[b]:a[b]=Zb[b];var c=[];for(b in a)c.push(`${b}=${a[b]}`);$b=c;}return $b},$b,bc=[31,29,31,30,31,30,31,31,30,31,30,31],cc=[31,28,31,30,31,30,31,31,30,31,30,31],dc=(a,b)=>{u(0<=a.length,"writeArrayToMemory array must have a length (should be an array or typed array)");
                E.set(a,b);},ec=[],Z,fc=a=>{var b=ec[a];b||(a>=ec.length&&(ec.length=a+1),ec[a]=b=Z.get(a));u(Z.get(a)==b,"JavaScript-side Wasm function table mirror is out of date!");return b},gc=a=>{var b=e["_"+a];u(b,"Cannot call unknown function "+a+", make sure it is exported");return b},hc,ic=[];function jc(a,b,c,d){a||(a=this);this.parent=a;this.s=a.s;this.A=null;this.id=R.Oa++;this.name=b;this.mode=c;this.h={};this.l={};this.rdev=d;}
                Object.defineProperties(jc.prototype,{read:{get:function(){return 365===(this.mode&365)},set:function(a){a?this.mode|=365:this.mode&=-366;}},write:{get:function(){return 146===(this.mode&146)},set:function(a){a?this.mode|=146:this.mode&=-147;}},Na:{get:function(){return T(this.mode)}},Ma:{get:function(){return 8192===(this.mode&61440)}}});R.xa=jc;
                R.ib=(a,b,c,d,f,h,m,p,y,q)=>{function x(k){function w(v){q&&q();if(!p){var A=a,I=b;A&&(A="string"==typeof A?A:Cb(A),I=b?Q(A+"/"+b):A);A=xb(d,f);I=R.create(I,A);if(v){if("string"==typeof v){for(var O=Array(v.length),P=0,fb=v.length;P<fb;++P)O[P]=v.charCodeAt(P);v=O;}R.chmod(I,A|146);O=R.open(I,577);R.write(O,v,0,v.length,0,y);R.close(O);R.chmod(I,A);}}h&&h();Ma(B);}wb(k,t,w,()=>{m&&m();Ma(B);})||w(k);}var t=b?db(Q(a+"/"+b)):a,B=Ka(`cp ${t}`);La(B);"string"==typeof c?ub(c,x,m):x(c);};
                [44].forEach(a=>{R.da[a]=new R.g(a);R.da[a].stack="<generic error, no stack>";});R.F=Array(4096);R.s(S,{},"/");R.mkdir("/tmp");R.mkdir("/home");R.mkdir("/home/web_user");(function(){R.mkdir("/dev");ob(R.M(1,3),{read:()=>0,write:(d,f,h,m)=>m});Lb("/dev/null",R.M(1,3));nb(R.M(5,0),qb);nb(R.M(6,0),rb);Lb("/dev/tty",R.M(5,0));Lb("/dev/tty1",R.M(6,0));var a=new Uint8Array(1024),b=0,c=()=>{0===b&&(b=cb(a).byteLength);return a[--b]};R.L("/dev","random",c);R.L("/dev","urandom",c);R.mkdir("/dev/shm");R.mkdir("/dev/shm/tmp");})();
                (function(){R.mkdir("/proc");var a=R.mkdir("/proc/self");R.mkdir("/proc/self/fd");R.s({s(){var b=R.createNode(a,"fd",16895,73);b.h={lookup(c,d){var f=W(+d);c={parent:null,s:{va:"fake"},h:{readlink:()=>f.path}};return c.parent=c}};return b}},{},"/proc/self/fd");})();R.Ga={MEMFS:S};
                var nc={__syscall_dup3:function(a,b,c){try{var d=W(a);u(!c);if(d.fd===b)return -28;var f=R.ra(b);f&&R.close(f);return Jb(d,b).fd}catch(h){if("undefined"==typeof R||"ErrnoError"!==h.name)throw h;return -h.u}},__syscall_fcntl64:function(a,b,c){Rb=c;try{var d=W(a);switch(b){case 0:var f=Y();if(0>f)break;for(;R.streams[f];)f++;return Jb(d,f).fd;case 1:case 2:return 0;case 3:return d.flags;case 4:return f=Y(),d.flags|=f,0;case 12:return f=Y(),ua[f+0>>1]=2,0;case 13:case 14:return 0}return -28}catch(h){if("undefined"==
                typeof R||"ErrnoError"!==h.name)throw h;return -h.u}},__syscall_ioctl:function(a,b,c){Rb=c;try{var d=W(a);switch(b){case 21509:return d.tty?0:-59;case 21505:if(!d.tty)return -59;if(d.tty.K.Ja){a=[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];var f=Y();F[f>>2]=25856;F[f+4>>2]=5;F[f+8>>2]=191;F[f+12>>2]=35387;for(var h=0;32>h;h++)E[f+h+17]=a[h]||0;}return 0;case 21510:case 21511:case 21512:return d.tty?0:-59;case 21506:case 21507:case 21508:if(!d.tty)return -59;if(d.tty.K.Ka)for(f=
                Y(),a=[],h=0;32>h;h++)a.push(E[f+h+17]);return 0;case 21519:if(!d.tty)return -59;f=Y();return F[f>>2]=0;case 21520:return d.tty?-28:-59;case 21531:return f=Y(),R.fa(d,b,f);case 21523:if(!d.tty)return -59;d.tty.K.La&&(h=[24,80],f=Y(),ua[f>>1]=h[0],ua[f+2>>1]=h[1]);return 0;case 21524:return d.tty?0:-59;case 21515:return d.tty?0:-59;default:return -28}}catch(m){if("undefined"==typeof R||"ErrnoError"!==m.name)throw m;return -m.u}},__syscall_openat:function(a,b,c,d){Rb=d;try{b=X(b);b=Qb(a,b);var f=d?Y():
                0;return R.open(b,c,f).fd}catch(h){if("undefined"==typeof R||"ErrnoError"!==h.name)throw h;return -h.u}},__syscall_readlinkat:function(a,b,c,d){try{b=X(b);b=Qb(a,b);if(0>=d)return -28;var f=R.readlink(b),h=Math.min(d,jb(f)),m=E[c+h];Sb(f,c,d+1);E[c+h]=m;return h}catch(p){if("undefined"==typeof R||"ErrnoError"!==p.name)throw p;return -p.u}},__syscall_renameat:function(a,b,c,d){try{return b=X(b),d=X(d),b=Qb(a,b),d=Qb(c,d),R.rename(b,d),0}catch(f){if("undefined"==typeof R||"ErrnoError"!==f.name)throw f;
                return -f.u}},__syscall_rmdir:function(a){try{return a=X(a),R.rmdir(a),0}catch(b){if("undefined"==typeof R||"ErrnoError"!==b.name)throw b;return -b.u}},__syscall_unlinkat:function(a,b,c){try{return b=X(b),b=Qb(a,b),0===c?R.unlink(b):512===c?R.rmdir(b):g("Invalid flags passed to unlinkat"),0}catch(d){if("undefined"==typeof R||"ErrnoError"!==d.name)throw d;return -d.u}},_emscripten_get_now_is_monotonic:()=>1,_emscripten_system:a=>{if(n){if(!a)return 1;a=X(a);if(!a.length)return 0;a=require$1("child_process").ub(a,
                [],{tb:!0,stdio:"inherit"});var b=(c,d)=>c<<8|d;return null===a.status?b(0,(c=>{switch(c){case "SIGHUP":return 1;case "SIGQUIT":return 3;case "SIGFPE":return 8;case "SIGKILL":return 9;case "SIGALRM":return 14;case "SIGTERM":return 15}return 2})(a.signal)):a.status<<8|0}return a?-52:0},_emscripten_throw_longjmp:()=>{throw Infinity;},_gmtime_js:function(a,b,c){a=Tb(a,b);a=new Date(1E3*a);F[c>>2]=a.getUTCSeconds();F[c+4>>2]=a.getUTCMinutes();F[c+8>>2]=a.getUTCHours();F[c+12>>2]=a.getUTCDate();F[c+16>>
                2]=a.getUTCMonth();F[c+20>>2]=a.getUTCFullYear()-1900;F[c+24>>2]=a.getUTCDay();F[c+28>>2]=(a.getTime()-Date.UTC(a.getUTCFullYear(),0,1,0,0,0,0))/864E5|0;},_localtime_js:function(a,b,c){a=Tb(a,b);a=new Date(1E3*a);F[c>>2]=a.getSeconds();F[c+4>>2]=a.getMinutes();F[c+8>>2]=a.getHours();F[c+12>>2]=a.getDate();F[c+16>>2]=a.getMonth();F[c+20>>2]=a.getFullYear()-1900;F[c+24>>2]=a.getDay();F[c+28>>2]=(Ub(a.getFullYear())?Vb:Wb)[a.getMonth()]+a.getDate()-1|0;F[c+36>>2]=-(60*a.getTimezoneOffset());b=(new Date(a.getFullYear(),
                6,1)).getTimezoneOffset();var d=(new Date(a.getFullYear(),0,1)).getTimezoneOffset();F[c+32>>2]=(b!=d&&a.getTimezoneOffset()==Math.min(d,b))|0;},_mktime_js:function(a){var b=new Date(F[a+20>>2]+1900,F[a+16>>2],F[a+12>>2],F[a+8>>2],F[a+4>>2],F[a>>2],0),c=F[a+32>>2],d=b.getTimezoneOffset(),f=(new Date(b.getFullYear(),6,1)).getTimezoneOffset(),h=(new Date(b.getFullYear(),0,1)).getTimezoneOffset(),m=Math.min(h,f);0>c?F[a+32>>2]=Number(f!=h&&m==d):0<c!=(m==d)&&(f=Math.max(h,f),b.setTime(b.getTime()+6E4*
                ((0<c?m:f)-d)));F[a+24>>2]=b.getDay();F[a+28>>2]=(Ub(b.getFullYear())?Vb:Wb)[b.getMonth()]+b.getDate()-1|0;F[a>>2]=b.getSeconds();F[a+4>>2]=b.getMinutes();F[a+8>>2]=b.getHours();F[a+12>>2]=b.getDate();F[a+16>>2]=b.getMonth();F[a+20>>2]=b.getYear();a=b.getTime();a=isNaN(a)?-1:a/1E3;return kc((M=a,1<=+Math.abs(M)?0<M?+Math.floor(M/4294967296)>>>0:~~+Math.ceil((M-+(~~M>>>0))/4294967296)>>>0:0)),a>>>0},_tzset_js:(a,b,c)=>{function d(y){return (y=y.toTimeString().match(/\(([A-Za-z ]+)\)$/))?y[1]:"GMT"}
                var f=(new Date).getFullYear(),h=new Date(f,0,1),m=new Date(f,6,1);f=h.getTimezoneOffset();var p=m.getTimezoneOffset();G[a>>2]=60*Math.max(f,p);F[b>>2]=Number(f!=p);a=d(h);b=d(m);a=Yb(a);b=Yb(b);p<f?(G[c>>2]=a,G[c+4>>2]=b):(G[c>>2]=b,G[c+4>>2]=a);},emscripten_date_now:()=>Date.now(),emscripten_get_now:()=>performance.now(),emscripten_memcpy_js:(a,b,c)=>ta.copyWithin(a,b,b+c),emscripten_resize_heap:a=>{var b=ta.length;a>>>=0;u(a>b);if(2147483648<a)return z(`Cannot enlarge memory, requested ${a} bytes, but the limit is ${2147483648} bytes!`),
                !1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var f=Math;d=Math.max(a,d);f=f.min.call(f,2147483648,d+(65536-d%65536)%65536);a:{d=f;var h=ra.buffer,m=(d-h.byteLength+65535)/65536;try{ra.grow(m);xa();var p=1;break a}catch(y){z(`growMemory: Attempted to grow heap from ${h.byteLength} bytes to ${d} bytes, but got error: ${y}`);}p=void 0;}if(p)return !0}z(`Failed to grow the heap from ${b} bytes to ${f} bytes, not enough memory!`);return !1},environ_get:(a,b)=>{var c=0;ac().forEach((d,
                f)=>{var h=b+c;f=G[a+4*f>>2]=h;for(h=0;h<d.length;++h)u(d.charCodeAt(h)===(d.charCodeAt(h)&255)),E[f++]=d.charCodeAt(h);E[f]=0;c+=d.length+1;});return 0},environ_sizes_get:(a,b)=>{var c=ac();G[a>>2]=c.length;var d=0;c.forEach(f=>d+=f.length+1);G[b>>2]=d;return 0},exit:a=>{lc();sa=!0;ea(a,new pa(a));},fd_close:function(a){try{var b=W(a);R.close(b);return 0}catch(c){if("undefined"==typeof R||"ErrnoError"!==c.name)throw c;return c.u}},fd_read:function(a,b,c,d){try{a:{var f=W(a);a=b;for(var h,m=b=0;m<c;m++){var p=
                G[a>>2],y=G[a+4>>2];a+=8;var q=R.read(f,E,p,y,h);if(0>q){var x=-1;break a}b+=q;if(q<y)break;"undefined"!==typeof h&&(h+=q);}x=b;}G[d>>2]=x;return 0}catch(t){if("undefined"==typeof R||"ErrnoError"!==t.name)throw t;return t.u}},fd_seek:function(a,b,c,d,f){b=Tb(b,c);try{if(isNaN(b))return 61;var h=W(a);R.D(h,b,d);Ua=[h.position>>>0,(M=h.position,1<=+Math.abs(M)?0<M?+Math.floor(M/4294967296)>>>0:~~+Math.ceil((M-+(~~M>>>0))/4294967296)>>>0:0)];F[f>>2]=Ua[0];F[f+4>>2]=Ua[1];h.ea&&0===b&&0===d&&(h.ea=null);
                return 0}catch(m){if("undefined"==typeof R||"ErrnoError"!==m.name)throw m;return m.u}},fd_write:function(a,b,c,d){try{a:{var f=W(a);a=b;for(var h,m=b=0;m<c;m++){var p=G[a>>2],y=G[a+4>>2];a+=8;var q=R.write(f,E,p,y,h);if(0>q){var x=-1;break a}b+=q;"undefined"!==typeof h&&(h+=q);}x=b;}G[d>>2]=x;return 0}catch(t){if("undefined"==typeof R||"ErrnoError"!==t.name)throw t;return t.u}},invoke_vii:mc,strftime:(a,b,c,d)=>{function f(k,w,v){for(k="number"==typeof k?k.toString():k||"";k.length<w;)k=v[0]+k;return k}
                function h(k,w){return f(k,w,"0")}function m(k,w){function v(I){return 0>I?-1:0<I?1:0}var A;0===(A=v(k.getFullYear()-w.getFullYear()))&&0===(A=v(k.getMonth()-w.getMonth()))&&(A=v(k.getDate()-w.getDate()));return A}function p(k){switch(k.getDay()){case 0:return new Date(k.getFullYear()-1,11,29);case 1:return k;case 2:return new Date(k.getFullYear(),0,3);case 3:return new Date(k.getFullYear(),0,2);case 4:return new Date(k.getFullYear(),0,1);case 5:return new Date(k.getFullYear()-1,11,31);case 6:return new Date(k.getFullYear()-
                1,11,30)}}function y(k){var w=k.O;for(k=new Date((new Date(k.P+1900,0,1)).getTime());0<w;){var v=k.getMonth(),A=(Ub(k.getFullYear())?bc:cc)[v];if(w>A-k.getDate())w-=A-k.getDate()+1,k.setDate(1),11>v?k.setMonth(v+1):(k.setMonth(0),k.setFullYear(k.getFullYear()+1));else {k.setDate(k.getDate()+w);break}}v=new Date(k.getFullYear()+1,0,4);w=p(new Date(k.getFullYear(),0,4));v=p(v);return 0>=m(w,k)?0>=m(v,k)?k.getFullYear()+1:k.getFullYear():k.getFullYear()-1}var q=G[d+40>>2];d={Va:F[d>>2],Ua:F[d+4>>2],$:F[d+
                8>>2],ma:F[d+12>>2],aa:F[d+16>>2],P:F[d+20>>2],H:F[d+24>>2],O:F[d+28>>2],wb:F[d+32>>2],Ta:F[d+36>>2],Wa:q?X(q):""};c=X(c);q={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var x in q)c=
                c.replace(new RegExp(x,"g"),q[x]);var t="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),B="January February March April May June July August September October November December".split(" ");q={"%a":k=>t[k.H].substring(0,3),"%A":k=>t[k.H],"%b":k=>B[k.aa].substring(0,3),"%B":k=>B[k.aa],"%C":k=>h((k.P+1900)/100|0,2),"%d":k=>h(k.ma,2),"%e":k=>f(k.ma,2," "),"%g":k=>y(k).toString().substring(2),"%G":y,"%H":k=>h(k.$,2),"%I":k=>{k=k.$;0==k?k=12:12<k&&(k-=12);return h(k,2)},"%j":k=>{for(var w=
                0,v=0;v<=k.aa-1;w+=(Ub(k.P+1900)?bc:cc)[v++]);return h(k.ma+w,3)},"%m":k=>h(k.aa+1,2),"%M":k=>h(k.Ua,2),"%n":()=>"\n","%p":k=>0<=k.$&&12>k.$?"AM":"PM","%S":k=>h(k.Va,2),"%t":()=>"\t","%u":k=>k.H||7,"%U":k=>h(Math.floor((k.O+7-k.H)/7),2),"%V":k=>{var w=Math.floor((k.O+7-(k.H+6)%7)/7);2>=(k.H+371-k.O-2)%7&&w++;if(w)53==w&&(v=(k.H+371-k.O)%7,4==v||3==v&&Ub(k.P)||(w=1));else {w=52;var v=(k.H+7-k.O-1)%7;(4==v||5==v&&Ub(k.P%400-1))&&w++;}return h(w,2)},"%w":k=>k.H,"%W":k=>h(Math.floor((k.O+7-(k.H+6)%7)/7),
                2),"%y":k=>(k.P+1900).toString().substring(2),"%Y":k=>k.P+1900,"%z":k=>{k=k.Ta;var w=0<=k;k=Math.abs(k)/60;return (w?"+":"-")+String("0000"+(k/60*100+k%60)).slice(-4)},"%Z":k=>k.Wa,"%%":()=>"%"};c=c.replace(/%%/g,"\x00\x00");for(x in q)c.includes(x)&&(c=c.replace(new RegExp(x,"g"),q[x](d)));c=c.replace(/\0\0/g,"%");x=lb(c,!1);if(x.length>b)return 0;dc(x,a);return x.length-1}},Oa=function(){var a={env:nc,wasi_snapshot_preview1:nc};La("wasm-instantiate");var b=e;Ta(a,function(c){u(e===b,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
                b=null;Oa=c.instance.exports;ra=Oa.memory;u(ra,"memory not found in wasm exports");xa();Z=Oa.__indirect_function_table;u(Z,"table not found in wasm exports");Ea.unshift(Oa.__wasm_call_ctors);Ma("wasm-instantiate");}).catch(ba);return {}}();e._lua_checkstack=J("lua_checkstack");e._lua_xmove=J("lua_xmove");e._lua_atpanic=J("lua_atpanic");e._lua_newthread=J("lua_newthread");e._lua_gettop=J("lua_gettop");e._lua_settop=J("lua_settop");e._lua_remove=J("lua_remove");e._lua_insert=J("lua_insert");
                e._lua_replace=J("lua_replace");e._lua_pushvalue=J("lua_pushvalue");e._lua_type=J("lua_type");e._lua_typename=J("lua_typename");e._lua_iscfunction=J("lua_iscfunction");e._lua_isnumber=J("lua_isnumber");e._lua_isstring=J("lua_isstring");e._lua_isuserdata=J("lua_isuserdata");e._lua_rawequal=J("lua_rawequal");e._lua_equal=J("lua_equal");e._lua_lessthan=J("lua_lessthan");e._lua_tonumber=J("lua_tonumber");e._lua_tointeger=J("lua_tointeger");e._lua_toboolean=J("lua_toboolean");e._lua_tolstring=J("lua_tolstring");
                e._lua_objlen=J("lua_objlen");e._lua_tocfunction=J("lua_tocfunction");e._lua_touserdata=J("lua_touserdata");e._lua_tothread=J("lua_tothread");e._lua_topointer=J("lua_topointer");e._lua_pushnil=J("lua_pushnil");e._lua_pushnumber=J("lua_pushnumber");e._lua_pushinteger=J("lua_pushinteger");e._lua_pushlstring=J("lua_pushlstring");e._lua_pushstring=J("lua_pushstring");e._lua_pushvfstring=J("lua_pushvfstring");e._lua_pushfstring=J("lua_pushfstring");e._lua_pushcclosure=J("lua_pushcclosure");
                e._lua_pushboolean=J("lua_pushboolean");e._lua_pushlightuserdata=J("lua_pushlightuserdata");e._lua_pushthread=J("lua_pushthread");e._lua_gettable=J("lua_gettable");e._lua_getfield=J("lua_getfield");e._lua_rawget=J("lua_rawget");e._lua_rawgeti=J("lua_rawgeti");e._lua_createtable=J("lua_createtable");e._lua_getmetatable=J("lua_getmetatable");e._lua_getfenv=J("lua_getfenv");e._lua_settable=J("lua_settable");e._lua_setfield=J("lua_setfield");e._lua_rawset=J("lua_rawset");e._lua_rawseti=J("lua_rawseti");
                e._lua_setmetatable=J("lua_setmetatable");e._lua_setfenv=J("lua_setfenv");e._lua_call=J("lua_call");e._lua_pcall=J("lua_pcall");e._lua_cpcall=J("lua_cpcall");e._lua_load=J("lua_load");e._lua_dump=J("lua_dump");e._lua_status=J("lua_status");e._lua_gc=J("lua_gc");e._lua_error=J("lua_error");e._lua_next=J("lua_next");e._lua_concat=J("lua_concat");e._lua_getallocf=J("lua_getallocf");e._lua_setallocf=J("lua_setallocf");e._lua_newuserdata=J("lua_newuserdata");e._lua_getupvalue=J("lua_getupvalue");
                e._lua_setupvalue=J("lua_setupvalue");e._luaL_argerror=J("luaL_argerror");e._lua_getstack=J("lua_getstack");e._luaL_error=J("luaL_error");e._lua_getinfo=J("lua_getinfo");e._luaL_typerror=J("luaL_typerror");e._luaL_where=J("luaL_where");e._luaL_checkoption=J("luaL_checkoption");e._luaL_optlstring=J("luaL_optlstring");e._luaL_checklstring=J("luaL_checklstring");e._luaL_newmetatable=J("luaL_newmetatable");e._luaL_checkudata=J("luaL_checkudata");e._luaL_checkstack=J("luaL_checkstack");
                e._luaL_checktype=J("luaL_checktype");e._luaL_checkany=J("luaL_checkany");e._luaL_checknumber=J("luaL_checknumber");e._luaL_optnumber=J("luaL_optnumber");e._luaL_checkinteger=J("luaL_checkinteger");e._luaL_optinteger=J("luaL_optinteger");e._luaL_getmetafield=J("luaL_getmetafield");e._luaL_callmeta=J("luaL_callmeta");e._luaL_register=J("luaL_register");e._luaL_gsub=J("luaL_gsub");e._luaL_prepbuffer=J("luaL_prepbuffer");e._luaL_buffinit=J("luaL_buffinit");e._luaL_addlstring=J("luaL_addlstring");
                e._luaL_addstring=J("luaL_addstring");e._luaL_pushresult=J("luaL_pushresult");e._luaL_addvalue=J("luaL_addvalue");e._luaL_ref=J("luaL_ref");e._luaL_unref=J("luaL_unref");e._luaL_loadfile=J("luaL_loadfile");e._luaL_loadbuffer=J("luaL_loadbuffer");e._luaL_loadstring=J("luaL_loadstring");e._luaL_newstate=J("luaL_newstate");e._lua_newstate=J("lua_newstate");e._free=J("free");e._realloc=J("realloc");e._luaopen_base=J("luaopen_base");e._lua_yield=J("lua_yield");e._lua_resume=J("lua_resume");
                e._luaopen_debug=J("luaopen_debug");e._lua_gethookmask=J("lua_gethookmask");e._lua_gethook=J("lua_gethook");e._lua_gethookcount=J("lua_gethookcount");e._lua_getlocal=J("lua_getlocal");e._lua_sethook=J("lua_sethook");e._lua_setlocal=J("lua_setlocal");var Xb=e._malloc=J("malloc"),kc=J("setTempRet0");e._luaL_openlibs=J("luaL_openlibs");e._luaopen_package=J("luaopen_package");e._luaopen_table=J("luaopen_table");e._luaopen_io=J("luaopen_io");e._luaopen_os=J("luaopen_os");e._luaopen_string=J("luaopen_string");
                e._luaopen_math=J("luaopen_math");var Pb=J("fflush");e._lua_close=J("lua_close");var oc=J("setThrew"),pc=()=>(pc=Oa.emscripten_stack_init)(),za=()=>(za=Oa.emscripten_stack_get_end)(),qc=J("stackSave"),rc=J("stackRestore"),sc=J("stackAlloc");e.dynCall_jiji=J("dynCall_jiji");function mc(a,b,c){var d=qc();try{fc(a)(b,c);}catch(f){rc(d);if(f!==f+0)throw f;oc(1,0);}}e.ENV=Zb;
                e.ccall=(a,b,c,d)=>{var f={string:q=>{var x=0;if(null!==q&&void 0!==q&&0!==q){x=jb(q)+1;var t=sc(x);Sb(q,t,x);x=t;}return x},array:q=>{var x=sc(q.length);dc(q,x);return x}};a=gc(a);var h=[],m=0;u("array"!==b,'Return type should not be "array".');if(d)for(var p=0;p<d.length;p++){var y=f[c[p]];y?(0===m&&(m=qc()),h[p]=y(d[p])):h[p]=d[p];}c=a(...h);return c=function(q){0!==m&&rc(m);return "string"===b?X(q):"boolean"===b?!!q:q}(c)};
                e.addFunction=(a,b)=>{u("undefined"!=typeof a);if(!hc){hc=new WeakMap;var c=Z.length;if(hc)for(var d=0;d<0+c;d++){var f=fc(d);f&&hc.set(f,d);}}if(c=hc.get(a)||0)return c;if(ic.length)c=ic.pop();else {try{Z.grow(1);}catch(p){if(!(p instanceof RangeError))throw p;throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";}c=Z.length-1;}try{d=c,Z.set(d,a),ec[d]=Z.get(d);}catch(p){if(!(p instanceof TypeError))throw p;u("undefined"!=typeof b,"Missing signature argument to addFunction: "+a);u(!b.includes("j"),
                "i64 not permitted in function signatures when WASM_BIGINT is disabled");if("function"==typeof WebAssembly.Function){d=WebAssembly.Function;u(!b.includes("j"),"i64 not permitted in function signatures when WASM_BIGINT is disabled");f={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"};for(var h={parameters:[],results:"v"==b[0]?[]:[f[b[0]]]},m=1;m<b.length;++m)u(b[m]in f,"invalid signature char: "+b[m]),h.parameters.push(f[b[m]]);b=new d(h,a);}else {d=[1];f=b.slice(0,1);b=b.slice(1);h={i:127,p:127,
                j:126,f:125,d:124,e:111};d.push(96);m=b.length;u(16384>m);128>m?d.push(m):d.push(m%128|128,m>>7);for(m=0;m<b.length;++m)u(b[m]in h,"invalid signature char: "+b[m]),d.push(h[b[m]]);"v"==f?d.push(0):d.push(1,h[f]);b=[0,97,115,109,1,0,0,0,1];f=d.length;u(16384>f);128>f?b.push(f):b.push(f%128|128,f>>7);b.push(...d);b.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);b=new WebAssembly.Module(new Uint8Array(b));b=(new WebAssembly.Instance(b,{e:{f:a}})).exports.f;}d=c;Z.set(d,b);ec[d]=Z.get(d);}hc.set(a,c);return c};
                e.removeFunction=a=>{hc.delete(fc(a));Z.set(a,null);ec[a]=Z.get(a);ic.push(a);};e.setValue=function(a,b,c="i8"){c.endsWith("*")&&(c="*");switch(c){case "i1":E[a]=b;break;case "i8":E[a]=b;break;case "i16":ua[a>>1]=b;break;case "i32":F[a>>2]=b;break;case "i64":g("to do setValue(i64) use WASM_BIGINT");case "float":va[a>>2]=b;break;case "double":wa[a>>3]=b;break;case "*":G[a>>2]=b;break;default:g(`invalid type for setValue: ${c}`);}};
                e.getValue=function(a,b="i8"){b.endsWith("*")&&(b="*");switch(b){case "i1":return E[a];case "i8":return E[a];case "i16":return ua[a>>1];case "i32":return F[a>>2];case "i64":g("to do getValue(i64) use WASM_BIGINT");case "float":return va[a>>2];case "double":return wa[a>>3];case "*":return G[a>>2];default:g(`invalid type for getValue: ${b}`);}};e.UTF8ToString=X;e.stringToUTF8=Sb;e.lengthBytesUTF8=jb;e.stringToNewUTF8=Yb;e.FS=R;
                "writeI53ToI64 writeI53ToI64Clamped writeI53ToI64Signaling writeI53ToU64Clamped writeI53ToU64Signaling readI53FromI64 readI53FromU64 convertI32PairToI53 convertU32PairToI53 inetPton4 inetNtop4 inetPton6 inetNtop6 readSockaddr writeSockaddr getCallstack emscriptenLog convertPCtoSourceLocation readEmAsmArgs jstoi_q listenOnce autoResumeAudioContext dynCallLegacy getDynCaller dynCall handleException runtimeKeepalivePush runtimeKeepalivePop callUserCallback maybeExit asmjsMangle HandleAllocator getNativeTypeSize STACK_SIZE STACK_ALIGN POINTER_SIZE ASSERTIONS cwrap reallyNegative unSign strLen reSign formatString intArrayToString AsciiToString UTF16ToString stringToUTF16 lengthBytesUTF16 UTF32ToString stringToUTF32 lengthBytesUTF32 registerKeyEventCallback maybeCStringToJsString findEventTarget getBoundingClientRect fillMouseEventData registerMouseEventCallback registerWheelEventCallback registerUiEventCallback registerFocusEventCallback fillDeviceOrientationEventData registerDeviceOrientationEventCallback fillDeviceMotionEventData registerDeviceMotionEventCallback screenOrientation fillOrientationChangeEventData registerOrientationChangeEventCallback fillFullscreenChangeEventData registerFullscreenChangeEventCallback JSEvents_requestFullscreen JSEvents_resizeCanvasForFullscreen registerRestoreOldStyle hideEverythingExceptGivenElement restoreHiddenElements setLetterbox softFullscreenResizeWebGLRenderTarget doRequestFullscreen fillPointerlockChangeEventData registerPointerlockChangeEventCallback registerPointerlockErrorEventCallback requestPointerLock fillVisibilityChangeEventData registerVisibilityChangeEventCallback registerTouchEventCallback fillGamepadEventData registerGamepadEventCallback registerBeforeUnloadEventCallback fillBatteryEventData battery registerBatteryEventCallback setCanvasElementSize getCanvasElementSize jsStackTrace stackTrace checkWasiClock wasiRightsToMuslOFlags wasiOFlagsToMuslOFlags createDyncallWrapper safeSetTimeout setImmediateWrapped clearImmediateWrapped polyfillSetImmediate getPromise makePromise idsToPromises makePromiseCallback Browser_asyncPrepareDataCounter setMainLoop getSocketFromFD getSocketAddress FS_unlink FS_mkdirTree _setNetworkCallback".split(" ").forEach(function(a){"undefined"===typeof globalThis||
                Object.getOwnPropertyDescriptor(globalThis,a)||Object.defineProperty(globalThis,a,{configurable:!0,get(){var b=`\`${a}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,c=a;c.startsWith("_")||(c="$"+a);b+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${c}')`;Va(a)&&(b+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you");N(b);}});Xa(a);});"run addOnPreRun addOnInit addOnPreMain addOnExit addOnPostRun addRunDependency removeRunDependency FS_createFolder FS_createPath FS_createLazyFile FS_createLink FS_createDevice FS_readFile out err callMain abort wasmMemory wasmExports stackAlloc stackSave stackRestore getTempRet0 setTempRet0 writeStackCookie checkStackCookie convertI32PairToI53Checked ptrToString zeroMemory exitJS getHeapMax growMemory MONTH_DAYS_REGULAR MONTH_DAYS_LEAP MONTH_DAYS_REGULAR_CUMULATIVE MONTH_DAYS_LEAP_CUMULATIVE isLeapYear ydayFromDate arraySum addDays ERRNO_CODES ERRNO_MESSAGES DNS Protocols Sockets initRandomFill randomFill timers warnOnce UNWIND_CACHE readEmAsmArgsArray jstoi_s getExecutableName keepRuntimeAlive asyncLoad alignMemory mmapAlloc wasmTable noExitRuntime getCFunc uleb128Encode sigToWasmTypes generateFuncType convertJsFunctionToWasm freeTableIndexes functionsInTableMap getEmptyTableSlot updateTableMap getFunctionAddress PATH PATH_FS UTF8Decoder UTF8ArrayToString stringToUTF8Array intArrayFromString stringToAscii UTF16Decoder stringToUTF8OnStack writeArrayToMemory JSEvents specialHTMLTargets findCanvasEventTarget currentFullscreenStrategy restoreOldWindowedStyle ExitStatus getEnvStrings doReadv doWritev promiseMap Browser getPreloadedImageData__data wget SYSCALLS preloadPlugins FS_createPreloadedFile FS_modeStringToFlags FS_getMode FS_stdin_getChar_buffer FS_stdin_getChar FS_createDataFile MEMFS TTY PIPEFS SOCKFS".split(" ").forEach(Xa);
                var tc;Ia=function uc(){tc||vc();tc||(Ia=uc);};
                function vc(){if(!(0<Ha)){pc();var a=za();u(0==(a&3));0==a&&(a+=4);G[a>>2]=34821223;G[a+4>>2]=2310721022;G[0]=1668509029;if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)a=e.preRun.shift(),Da.unshift(a);for(;0<Da.length;)Da.shift()(e);if(!(0<Ha)){if(!tc&&(tc=!0,e.calledRun=!0,!sa)){u(!Ga);Ga=!0;ya();e.noFSInit||R.R.Y||R.R();for(R.ua=!1;0<Ea.length;)Ea.shift()(e);aa(e);u(!e._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');for(ya();0<
                Fa.length;)Fa.shift()(e);}ya();}}}function lc(){var a=qa,b=z,c=!1;qa=z=()=>{c=!0;};try{Pb(0),["stdout","stderr"].forEach(function(d){(d=Mb("/dev/"+d))&&mb[d.object.rdev]&&mb[d.object.rdev].output&&mb[d.object.rdev].output.length&&(c=!0);});}catch(d){}qa=a;z=b;c&&N("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.");}vc();
            
            
                  return moduleArg.ready
                }
                );
                })();
            
                class LuaApi {
                    static async initialize(customWasmFileLocation, environmentVariables) {
                        const module = await initWasmModule({
                            locateFile: (path, scriptDirectory) => {
                                return customWasmFileLocation || scriptDirectory + path;
                            },
                            preRun: (initializedModule) => {
                                if (typeof environmentVariables === 'object') {
                                    Object.entries(environmentVariables).forEach(([k, v]) => (initializedModule.ENV[k] = v));
                                }
                            },
                        });
                        return new LuaApi(module);
                    }
                    constructor(module) {
                        this.pointerRefs = new Map();
                        this.referenceTracker = new WeakMap();
                        this.referenceMap = new Map();
                        this.availableReferences = [];
                        this.module = module;
                        this.luaL_error = this.cwrap('luaL_error', null, ['number', 'string']);
                        this.luaL_argerror = this.cwrap('luaL_argerror', 'number', ['number', 'number', 'string']);
                        this.luaL_typerror = this.cwrap('luaL_typerror', 'number', ['number', 'number', 'string']);
                        this.luaL_addlstring = this.cwrap('luaL_addlstring', null, ['number', 'string', 'number']);
                        this.luaL_addstring = this.cwrap('luaL_addstring', null, ['number', 'string']);
                        this.luaL_addvalue = this.cwrap('luaL_addvalue', null, ['number']);
                        this.luaL_checkany = this.cwrap('luaL_checkany', null, ['number', 'number']);
                        this.luaL_checkinteger = this.cwrap('luaL_checkinteger', 'number', ['number', 'number']);
                        this.luaL_checklstring = this.cwrap('luaL_checklstring', 'string', ['number', 'number', 'number']);
                        this.luaL_checknumber = this.cwrap('luaL_checknumber', 'number', ['number', 'number']);
                        this.luaL_checkstack = this.cwrap('luaL_checkstack', null, ['number', 'number', 'string']);
                        this.luaL_checktype = this.cwrap('luaL_checktype', null, ['number', 'number', 'number']);
                        this.luaL_checkudata = this.cwrap('luaL_checkudata', 'number', ['number', 'number', 'string']);
                        this.luaL_loadbuffer = this.cwrap('luaL_loadbuffer', 'number', ['number', 'string|number', 'number', 'string|number']);
                        this.luaL_loadfile = this.cwrap('luaL_loadfile', 'number', ['number', 'string']);
                        this.luaL_loadfilex = this.luaL_loadfile;
                        this.luaL_loadstring = this.cwrap('luaL_loadstring', 'number', ['number', 'string']);
                        this.luaL_buffinit = this.cwrap('luaL_buffinit', null, ['number', 'number']);
                        this.luaL_callmeta = this.cwrap('luaL_callmeta', 'number', ['number', 'number', 'string']);
                        this.luaL_getmetafield = this.cwrap('luaL_getmetafield', 'number', ['number', 'number', 'string']);
                        this.luaL_gsub = this.cwrap('luaL_gsub', 'string', ['number', 'string', 'string', 'string']);
                        this.luaL_newmetatable = this.cwrap('luaL_newmetatable', 'number', ['number', 'string']);
                        this.luaL_newstate = this.cwrap('luaL_newstate', 'number', []);
                        this.luaL_openlibs = this.cwrap('luaL_openlibs', null, ['number']);
                        this.luaL_optinteger = this.cwrap('luaL_optinteger', 'number', ['number', 'number', 'number']);
                        this.luaL_optlstring = this.cwrap('luaL_optlstring', 'string', ['number', 'number', 'string', 'number']);
                        this.luaL_optnumber = this.cwrap('luaL_optnumber', 'number', ['number', 'number', 'number']);
                        this.luaL_prepbuffer = this.cwrap('luaL_prepbuffer', 'string', ['number', 'number']);
                        this.luaL_pushresult = this.cwrap('luaL_pushresult', null, ['number']);
                        this.luaL_pushresultsize = this.cwrap('luaL_pushresultsize', null, ['number', 'number']);
                        this.luaL_register = this.cwrap('luaL_register', null, ['number', 'string', 'array']);
                        this.luaL_ref = this.cwrap('luaL_ref', 'number', ['number', 'number']);
                        this.luaL_unref = this.cwrap('luaL_unref', null, ['number', 'number', 'number']);
                        this.luaL_where = this.cwrap('luaL_where', null, ['number', 'number']);
                        this.lua_atpanic = this.cwrap('lua_atpanic', 'number', ['number', 'number']);
                        this.lua_call = this.cwrap('lua_call', null, ['number', 'number', 'number']);
                        this.lua_checkstack = this.cwrap('lua_checkstack', 'number', ['number', 'number']);
                        this.lua_close = this.cwrap('lua_close', null, ['number']);
                        this.lua_concat = this.cwrap('lua_concat', null, ['number', 'number']);
                        this.lua_createtable = this.cwrap('lua_createtable', null, ['number', 'number', 'number']);
                        this.lua_dump = this.cwrap('lua_dump', 'number', ['number', 'number', 'number', 'number']);
                        this.lua_equal = this.cwrap('lua_equal', 'number', ['number', 'number', 'number']);
                        this.lua_error = this.cwrap('lua_error', 'number', ['number']);
                        this.lua_gc = this.cwrap('lua_gc', 'number', ['number', 'number', 'number']);
                        this.lua_getallocf = this.cwrap('lua_getallocf', 'number', ['number', 'number']);
                        this.lua_getfenv = this.cwrap('lua_getfenv', null, ['number', 'number']);
                        this.lua_getfield = this.cwrap('lua_getfield', null, ['number', 'number', 'string']);
                        this.lua_gethook = this.cwrap('lua_gethook', 'number', ['number']);
                        this.lua_gethookcount = this.cwrap('lua_gethookcount', 'number', ['number']);
                        this.lua_gethookmask = this.cwrap('lua_gethookmask', 'number', ['number']);
                        this.lua_getinfo = this.cwrap('lua_getinfo', 'number', ['number', 'string', 'number']);
                        this.lua_getlocal = this.cwrap('lua_getlocal', 'string', ['number', 'number', 'number']);
                        this.lua_getmetatable = this.cwrap('lua_getmetatable', 'number', ['number', 'number']);
                        this.lua_getstack = this.cwrap('lua_getstack', 'number', ['number', 'number', 'number']);
                        this.lua_gettable = this.cwrap('lua_gettable', 'number', ['number', 'number']);
                        this.lua_gettop = this.cwrap('lua_gettop', 'number', ['number']);
                        this.lua_getupvalue = this.cwrap('lua_getupvalue', 'string', ['number', 'number', 'number']);
                        this.lua_insert = this.cwrap('lua_insert', null, ['number', 'number']);
                        this.lua_lessthan = this.cwrap('lua_lessthan', 'number', ['number', 'number', 'number']);
                        this.lua_load = this.cwrap('lua_load', 'number', ['number', 'number', 'number', 'string', 'string']);
                        this.lua_newstate = this.cwrap('lua_newstate', 'number', ['number', 'number']);
                        this.lua_newthread = this.cwrap('lua_newthread', 'number', ['number']);
                        this.lua_newuserdata = this.cwrap('lua_newuserdata', 'number', ['number', 'number']);
                        this.lua_next = this.cwrap('lua_next', 'number', ['number', 'number']);
                        this.lua_objlen = this.cwrap('lua_objlen', 'number', ['number', 'number']);
                        this.lua_pcall = this.cwrap('lua_pcall', 'number', ['number', 'number', 'number', 'number']);
                        this.lua_iscfunction = this.cwrap('lua_iscfunction', 'number', ['number', 'number']);
                        this.lua_isnumber = this.cwrap('lua_isnumber', 'number', ['number', 'number']);
                        this.lua_isstring = this.cwrap('lua_isstring', 'number', ['number', 'number']);
                        this.lua_isuserdata = this.cwrap('lua_isuserdata', 'number', ['number', 'number']);
                        this.lua_pushboolean = this.cwrap('lua_pushboolean', null, ['number', 'number']);
                        this.lua_pushcclosure = this.cwrap('lua_pushcclosure', null, ['number', 'number', 'number']);
                        this.lua_pushcfunction = (...args) => this.lua_pushcclosure(...args, 0);
                        this.lua_pushfstring = this.cwrap('lua_pushfstring', 'string', ['number', 'string', 'array']);
                        this.lua_pushinteger = this.cwrap('lua_pushinteger', null, ['number', 'number']);
                        this.lua_pushlightuserdata = this.cwrap('lua_pushlightuserdata', null, ['number', 'number']);
                        this.lua_pushnil = this.cwrap('lua_pushnil', null, ['number']);
                        this.lua_pushnumber = this.cwrap('lua_pushnumber', null, ['number', 'number']);
                        this.lua_pushlstring = this.cwrap('lua_pushlstring', null, ['number', 'string|number', 'number']);
                        this.lua_pushstring = this.cwrap('lua_pushstring', null, ['number', 'string|number']);
                        this.lua_pushthread = this.cwrap('lua_pushthread', 'number', ['number']);
                        this.lua_pushvalue = this.cwrap('lua_pushvalue', null, ['number', 'number']);
                        this.lua_pushvfstring = this.cwrap('lua_pushvfstring', 'string', ['number', 'string', 'number']);
                        this.lua_toboolean = this.cwrap('lua_toboolean', 'number', ['number', 'number']);
                        this.lua_tocfunction = this.cwrap('lua_tocfunction', 'number', ['number', 'number']);
                        this.lua_tointeger = this.cwrap('lua_tointeger', 'number', ['number', 'number']);
                        this.lua_tolstring = this.cwrap('lua_tolstring', 'string', ['number', 'number', 'number']);
                        this.lua_tostring = (...args) => this.lua_tolstring(...args, null);
                        this.lua_tonumber = this.cwrap('lua_tonumber', 'number', ['number', 'number']);
                        this.lua_topointer = this.cwrap('lua_topointer', 'number', ['number', 'number']);
                        this.lua_tothread = this.cwrap('lua_tothread', 'number', ['number', 'number']);
                        this.lua_touserdata = this.cwrap('lua_touserdata', 'number', ['number', 'number']);
                        this.lua_rawequal = this.cwrap('lua_rawequal', 'number', ['number', 'number', 'number']);
                        this.lua_rawget = this.cwrap('lua_rawget', 'number', ['number', 'number']);
                        this.lua_rawgeti = this.cwrap('lua_rawgeti', 'number', ['number', 'number', 'number']);
                        this.lua_rawset = this.cwrap('lua_rawset', null, ['number', 'number']);
                        this.lua_rawseti = this.cwrap('lua_rawseti', null, ['number', 'number', 'number']);
                        this.lua_remove = this.cwrap('lua_remove', null, ['number', 'number']);
                        this.lua_replace = this.cwrap('lua_replace', null, ['number', 'number']);
                        this.lua_resume = this.cwrap('lua_resume', 'number', ['number', 'number']);
                        this.lua_setallocf = this.cwrap('lua_setallocf', null, ['number', 'number', 'number']);
                        this.lua_setfenv = this.cwrap('lua_setfenv', 'number', ['number', 'number']);
                        this.lua_setfield = this.cwrap('lua_setfield', null, ['number', 'number', 'string']);
                        this.lua_sethook = this.cwrap('lua_sethook', null, ['number', 'number', 'number', 'number']);
                        this.lua_setlocal = this.cwrap('lua_setlocal', 'string', ['number', 'number', 'number']);
                        this.lua_setmetatable = this.cwrap('lua_setmetatable', 'number', ['number', 'number']);
                        this.lua_settable = this.cwrap('lua_settable', null, ['number', 'number']);
                        this.lua_settop = this.cwrap('lua_settop', null, ['number', 'number']);
                        this.lua_setupvalue = this.cwrap('lua_setupvalue', 'string', ['number', 'number', 'number']);
                        this.lua_status = this.cwrap('lua_status', 'number', ['number']);
                        this.lua_type = this.cwrap('lua_type', 'number', ['number', 'number']);
                        this.lua_typename = this.cwrap('lua_typename', 'string', ['number', 'number']);
                        this.lua_xmove = this.cwrap('lua_xmove', null, ['number', 'number', 'number']);
                        this.lua_yield = this.cwrap('lua_yield', 'number', ['number', 'number']);
                        this.luaopen_base = this.cwrap('luaopen_base', 'number', ['number']);
                        this.luaopen_table = this.cwrap('luaopen_table', 'number', ['number']);
                        this.luaopen_io = this.cwrap('luaopen_io', 'number', ['number']);
                        this.luaopen_os = this.cwrap('luaopen_os', 'number', ['number']);
                        this.luaopen_string = this.cwrap('luaopen_string', 'number', ['number']);
                        this.luaopen_math = this.cwrap('luaopen_math', 'number', ['number']);
                        this.luaopen_debug = this.cwrap('luaopen_debug', 'number', ['number']);
                        this.luaopen_package = this.cwrap('luaopen_package', 'number', ['number']);
                    }
                    lua_absindex(L, idx) {
                        return idx > 0 || idx <= LUA_REGISTRYINDEX ? idx : this.lua_gettop(L) + idx + 1;
                    }
                    lua_setglobal(L, name) {
                        this.lua_setfield(L, LUA_GLOBALSINDEX, name);
                    }
                    lua_getglobal(L, name) {
                        this.lua_getfield(L, LUA_GLOBALSINDEX, name);
                        return this.lua_type(L, -1);
                    }
                    lua_pop(L, n) {
                        this.lua_settop(L, -n - 1);
                    }
                    luaL_getmetatable(L, tname) {
                        this.lua_getfield(L, LUA_REGISTRYINDEX, tname);
                        return this.lua_type(L, -1);
                    }
                    luaL_typename(L, idx) {
                        return this.lua_typename(L, this.lua_type(L, idx));
                    }
                    luaL_tolstring(L, idx) {
                        idx = this.lua_absindex(L, idx);
                        let result;
                        if (this.luaL_callmeta(L, idx, '__tostring')) {
                            if (!this.lua_isstring(L, -1)) {
                                this.luaL_error(L, "'__tostring' must return a string");
                            }
                            result = this.luaL_tolstring(L, -1);
                        }
                        else {
                            const type = this.lua_type(L, idx);
                            if (type === exports.LuaType.Number) {
                                result = `${this.lua_tonumber(L, idx)}`;
                            }
                            else if (type === exports.LuaType.String) {
                                result = this.lua_tostring(L, idx);
                            }
                            else if (type === exports.LuaType.Boolean) {
                                result = this.lua_toboolean(L, idx) ? 'true' : 'false';
                            }
                            else if (type === exports.LuaType.Nil) {
                                result = 'nil';
                            }
                            else {
                                const tt = this.luaL_getmetafield(L, idx, '__name');
                                const kind = tt === exports.LuaType.String ? this.lua_tostring(L, -1) : this.luaL_typename(L, idx);
                                if (tt !== exports.LuaType.Nil) {
                                    this.lua_remove(L, -2);
                                }
                                result = `${kind}: 0x${this.lua_topointer(L, idx).toString(16)}`;
                            }
                        }
                        this.lua_pushstring(L, result);
                        return result;
                    }
                    lua_upvalueindex(index) {
                        return LUA_GLOBALSINDEX - index;
                    }
                    ref(data) {
                        const existing = this.referenceTracker.get(data);
                        if (existing) {
                            existing.refCount++;
                            return existing.index;
                        }
                        const availableIndex = this.availableReferences.pop();
                        const index = availableIndex === undefined ? this.referenceMap.size + 1 : availableIndex;
                        this.referenceMap.set(index, data);
                        this.referenceTracker.set(data, {
                            refCount: 1,
                            index,
                        });
                        this.lastRefIndex = index;
                        return index;
                    }
                    unref(index) {
                        const ref = this.referenceMap.get(index);
                        if (ref === undefined) {
                            return;
                        }
                        const metadata = this.referenceTracker.get(ref);
                        if (metadata === undefined) {
                            this.referenceTracker.delete(ref);
                            this.availableReferences.push(index);
                            return;
                        }
                        metadata.refCount--;
                        if (metadata.refCount <= 0) {
                            this.referenceTracker.delete(ref);
                            this.referenceMap.delete(index);
                            this.availableReferences.push(index);
                        }
                    }
                    getRef(index) {
                        return this.referenceMap.get(index);
                    }
                    getLastRefIndex() {
                        return this.lastRefIndex;
                    }
                    printRefs() {
                        for (const [key, value] of this.referenceMap.entries()) {
                            console.log(key, value);
                        }
                    }
                    cwrap(name, returnType, argTypes) {
                        const commonType = ['number', 'string', 'array', 'boolean'];
                        const isCommonCase = argTypes.every((argType) => commonType.includes(argType));
                        if (isCommonCase) {
                            return (...args) => {
                                return this.module.ccall(name, returnType, argTypes, args);
                            };
                        }
                        return (...args) => {
                            const pointersToBeFreed = [];
                            const resolvedArgTypes = [];
                            const resolvedArgs = [];
                            argTypes.forEach((argType, i) => {
                                var _a;
                                if (commonType.includes(argType)) {
                                    resolvedArgTypes.push(argType);
                                    resolvedArgs.push(args[i]);
                                }
                                else if (argType === 'string|number') {
                                    if (typeof args[i] === 'number') {
                                        resolvedArgTypes.push('number');
                                        resolvedArgs.push(args[i]);
                                    }
                                    else {
                                        if (((_a = args[i]) === null || _a === void 0 ? void 0 : _a.length) > 1024) {
                                            const bufferPointer = this.module.stringToNewUTF8(args[i]);
                                            resolvedArgTypes.push('number');
                                            resolvedArgs.push(bufferPointer);
                                            pointersToBeFreed.push(bufferPointer);
                                        }
                                        else {
                                            resolvedArgTypes.push('string');
                                            resolvedArgs.push(args[i]);
                                        }
                                    }
                                }
                            });
                            try {
                                return this.module.ccall(name, returnType, resolvedArgTypes, resolvedArgs);
                            }
                            finally {
                                for (const pointer of pointersToBeFreed) {
                                    this.module._free(pointer);
                                }
                            }
                        };
                    }
                }
            
                class FuncManager {
                    constructor(luaApi) {
                        this.pointerRedirect = new Map();
                        this.indexMap = new Map();
                        this.gc = 0;
                        this.call = 0;
                        this.func_call = 0;
                        this.index = 0;
                        this.new_index = 0;
                        this.to_string = 0;
                        this.luaApi = luaApi;
                    }
                    registerGcFunction(thread) {
                        if (this.gc) {
                            return this.gc;
                        }
                        const pointer = thread.luaApi.module.addFunction((L) => {
                            const callThread = thread.stateToThread(L);
                            const userdata = callThread.luaApi.lua_touserdata(L, 1);
                            const pointer = callThread.luaApi.lua_topointer(L, 1);
                            const functionPointer = this.pointerRedirect.get(pointer);
                            this.removeIndexRedirect(functionPointer);
                            const ref = callThread.luaApi.module.getValue(userdata, '*');
                            thread.luaApi.unref(ref);
                            callThread.luaApi.lua_getmetatable(L, 1);
                            if (callThread.luaApi.lua_type(L, -1) === exports.LuaType.Nil) {
                                callThread.luaApi.lua_pop(L, 1);
                                return exports.LuaReturn.Ok;
                            }
                            callThread.luaApi.lua_getfield(L, -1, '__func_pointers');
                            if (callThread.luaApi.lua_type(L, -1) !== exports.LuaType.Table) {
                                callThread.luaApi.lua_pop(L, 2);
                                return exports.LuaReturn.Ok;
                            }
                            callThread.luaApi.lua_pushnil(L);
                            while (callThread.luaApi.lua_next(L, -2) !== 0) {
                                const funcPointer = callThread.luaApi.lua_tonumber(L, -1);
                                callThread.luaApi.module.removeFunction(funcPointer);
                                callThread.luaApi.lua_pop(L, 1);
                            }
                            return exports.LuaReturn.Ok;
                        }, 'ii');
                        this.gc = pointer;
                        return pointer;
                    }
                    registerCallFunction(thread) {
                        if (this.call) {
                            return this.call;
                        }
                        const pointer = thread.luaApi.module.addFunction((L) => {
                            const callThread = thread.stateToThread(L);
                            const top = callThread.getTop();
                            const target = callThread.getValue(1);
                            const args = [];
                            for (let i = 2; i <= top; i++) {
                                args.push(callThread.getValue(i));
                            }
                            try {
                                const result = target(...args);
                                callThread.pushValue(result);
                                return 1;
                            }
                            catch (e) {
                                if (typeof (e === null || e === void 0 ? void 0 : e.message) === 'string') {
                                    callThread.pushValue(e === null || e === void 0 ? void 0 : e.message);
                                }
                                else {
                                    callThread.pushValue('Error: An exception occurred during the process of calling a JavaScript function.');
                                }
                                callThread.luaApi.lua_error(L);
                            }
                            return 0;
                        }, 'ii');
                        this.call = pointer;
                        return pointer;
                    }
                    registerFuncCallFunction(thread) {
                        if (this.func_call) {
                            return this.func_call;
                        }
                        const pointer = thread.luaApi.module.addFunction((L) => {
                            const callThread = thread.stateToThread(L);
                            const top = callThread.getTop();
                            const args = [];
                            for (let i = 1; i <= top; i++) {
                                args.push(callThread.getValue(i));
                            }
                            const userdata = callThread.luaApi.lua_touserdata(L, callThread.luaApi.lua_upvalueindex(1));
                            const ref = callThread.luaApi.module.getValue(userdata, '*');
                            const func = thread.luaApi.getRef(ref);
                            try {
                                const result = func.apply(thread, args);
                                callThread.pushValue(result);
                                return 1;
                            }
                            catch (e) {
                                if (typeof (e === null || e === void 0 ? void 0 : e.message) === 'string') {
                                    callThread.pushValue(e === null || e === void 0 ? void 0 : e.message);
                                }
                                else {
                                    callThread.pushValue('Error: An exception occurred during the process of calling a JavaScript function.');
                                }
                                callThread.luaApi.lua_error(L);
                            }
                            return 0;
                        }, 'ii');
                        this.func_call = pointer;
                        return pointer;
                    }
                    registerIndexFunction(thread) {
                        if (this.index) {
                            return this.index;
                        }
                        const pointer = thread.luaApi.module.addFunction((L) => {
                            const callThread = thread.stateToThread(L);
                            const key = callThread.getValue(2);
                            const pointer = callThread.luaApi.lua_topointer(L, 1);
                            const target = this.indexMap.get(pointer);
                            if (target) {
                                const value = target[key];
                                callThread.pushValue(typeof value === 'function' ? value.bind(target) : value);
                                return 1;
                            }
                            const userdata = callThread.luaApi.lua_touserdata(L, 1);
                            const ref = callThread.luaApi.module.getValue(userdata, '*');
                            const tar = thread.luaApi.getRef(ref);
                            const value = tar === null || tar === void 0 ? void 0 : tar[key];
                            callThread.pushValue(typeof value === 'function' ? value.bind(tar) : value);
                            return 1;
                        }, 'ii');
                        this.index = pointer;
                        return pointer;
                    }
                    registerNewIndexFunction(thread) {
                        if (this.new_index) {
                            return this.new_index;
                        }
                        const pointer = thread.luaApi.module.addFunction((L) => {
                            const callThread = thread.stateToThread(L);
                            const key = callThread.getValue(2);
                            const value = callThread.getValue(3);
                            const pointer = callThread.luaApi.lua_topointer(L, 1);
                            const target = this.indexMap.get(pointer);
                            if (target) {
                                target[key] = value;
                                return exports.LuaReturn.Ok;
                            }
                            const userdata = callThread.luaApi.lua_touserdata(L, 1);
                            const ref = callThread.luaApi.module.getValue(userdata, '*');
                            thread.luaApi.getRef(ref)[key] = value;
                            return exports.LuaReturn.Ok;
                        }, 'ii');
                        this.new_index = pointer;
                        return pointer;
                    }
                    registerToStringFunction(thread) {
                        if (this.to_string) {
                            return this.to_string;
                        }
                        const pointer = thread.luaApi.module.addFunction((L) => {
                            const callThread = thread.stateToThread(L);
                            const pointer = callThread.luaApi.lua_topointer(L, 1);
                            const typename = callThread.luaApi.luaL_typename(L, 1);
                            const target = this.indexMap.get(pointer);
                            if (target) {
                                callThread.pushValue(`${typename}: 0x${pointer.toString(16)} -> ${target.toString()}`);
                                return 1;
                            }
                            const userdata = callThread.luaApi.lua_touserdata(L, 1);
                            const ref = callThread.luaApi.module.getValue(userdata, '*');
                            const value = thread.luaApi.getRef(ref).toString();
                            callThread.pushValue(`${typename}: 0x${pointer.toString(16)} -> ${value}`);
                            return 1;
                        }, 'ii');
                        this.to_string = pointer;
                        return pointer;
                    }
                    addIndexRedirect(pointer, target) {
                        if (!pointer) {
                            return;
                        }
                        this.indexMap.set(pointer, target);
                    }
                    removeIndexRedirect(pointer) {
                        if (!pointer) {
                            return;
                        }
                        this.indexMap.delete(pointer);
                    }
                }
            
                var version = "1.18.10";
            
                const getContextProxy = (global) => {
                    return new Proxy(global, {
                        get: (target, key) => {
                            if (key === Symbol.iterator) {
                                return {
                                    next: () => {
                                        return 1;
                                    },
                                };
                            }
                            if (typeof key === 'symbol') {
                                return undefined;
                            }
                            return target.get(key);
                        },
                        set: (target, key, value) => {
                            target.set(key, value);
                            return true;
                        },
                        has: (target, key) => {
                            return target.get(key) !== undefined;
                        },
                    });
                };
            
                class Lua {
                    static async create(options = {}) {
                        var _a;
                        options = {
                            openStandardLibs: true,
                            traceAllocations: false,
                            ...options,
                        };
                        if (!options.customWasmUri) {
                            const isBrowser = (typeof window === 'object' && typeof window.document !== 'undefined') ||
                                (typeof self === 'object' && ((_a = self === null || self === void 0 ? void 0 : self.constructor) === null || _a === void 0 ? void 0 : _a.name) === 'DedicatedWorkerGlobalScope');
                            if (isBrowser) {
                                options.customWasmUri = globalThis.__PSYCH_LUA_WASM_URI__;
                            }
                        }
                        const luaApi = await LuaApi.initialize(options.customWasmUri, options.environmentVariables);
                        return new Lua(luaApi, options);
                    }
                    constructor(luaApi, options) {
                        if (!options) {
                            throw new Error('Lua.create(options) must be used to create a Lua instance');
                        }
                        this.luaApi = luaApi;
                        this.global = new LuaGlobal(this.luaApi, options.traceAllocations);
                        this.funcManager = new FuncManager(this.luaApi);
                        this.initTypeBindings();
                        this.ctx = getContextProxy(this.global);
                        if (options.openStandardLibs) {
                            this.luaApi.luaL_openlibs(this.global.address);
                        }
                    }
                    mountFile(path, content) {
                        const fileSep = path.lastIndexOf('/');
                        const file = path.substring(fileSep + 1);
                        const body = path.substring(0, path.length - file.length - 1);
                        if (body.length > 0) {
                            const parts = body.split('/').reverse();
                            let parent = '';
                            while (parts.length) {
                                const part = parts.pop();
                                if (!part) {
                                    continue;
                                }
                                const current = `${parent}/${part}`;
                                try {
                                    this.luaApi.module.FS.mkdir(current);
                                }
                                catch (err) {
                                }
                                parent = current;
                            }
                        }
                        this.luaApi.module.FS.writeFile(path, content);
                    }
                    unmountFile(path) {
                        this.luaApi.module.FS.unlink(path);
                    }
                    doString(script) {
                        const result = this.callByteCode((thread) => thread.loadString(script));
                        return result;
                    }
                    doFile(filename) {
                        return this.callByteCode((thread) => thread.loadFile(filename));
                    }
                    doStringSync(script) {
                        this.global.loadString(script);
                        const result = this.global.runSync();
                        return result[0];
                    }
                    doFileSync(filename) {
                        this.global.loadFile(filename);
                        const result = this.global.runSync();
                        return result[0];
                    }
                    initTypeBindings() {
                        JsType.create('js-function', (value) => typeof value === 'function' && !value.toString().startsWith('class'))
                            .gc(this.funcManager.registerGcFunction(this.global))
                            .push(({ thread, target }) => {
                            const ref = thread.luaApi.ref(target);
                            const luaPointer = thread.luaApi.lua_newuserdata(thread.address, PointerSize);
                            thread.luaApi.module.setValue(luaPointer, ref, '*');
                            thread.luaApi.luaL_getmetatable(thread.address, 'js-function');
                            thread.luaApi.lua_setmetatable(thread.address, -2);
                            thread.luaApi.lua_pushcclosure(thread.address, this.funcManager.registerFuncCallFunction(this.global), 1);
                            const pointer = thread.luaApi.lua_topointer(thread.address, -1);
                            this.funcManager.pointerRedirect.set(luaPointer, pointer);
                            this.funcManager.addIndexRedirect(pointer, target);
                            thread.luaApi.lua_createtable(thread.address, 0, 0);
                            thread.luaApi.lua_pushcfunction(thread.address, this.funcManager.registerToStringFunction(this.global));
                            thread.luaApi.lua_setfield(thread.address, -2, '__tostring');
                            thread.luaApi.lua_pushcfunction(thread.address, this.funcManager.registerIndexFunction(this.global));
                            thread.luaApi.lua_setfield(thread.address, -2, '__index');
                            thread.luaApi.lua_pushcfunction(thread.address, this.funcManager.registerNewIndexFunction(this.global));
                            thread.luaApi.lua_setfield(thread.address, -2, '__newindex');
                            thread.luaApi.lua_setmetatable(thread.address, -2);
                        })
                            .bind(this.global);
                        JsType.create('js-userdata', () => true)
                            .gc(this.funcManager.registerGcFunction(this.global))
                            .call(this.funcManager.registerCallFunction(this.global))
                            .index(this.funcManager.registerIndexFunction(this.global))
                            .newindex(this.funcManager.registerNewIndexFunction(this.global))
                            .tostring(this.funcManager.registerToStringFunction(this.global))
                            .priority(-1)
                            .bind(this.global);
                    }
                    async callByteCode(loader) {
                        const thread = this.global.newThread();
                        const threadIndex = this.global.getTop();
                        try {
                            loader(thread);
                            const result = await thread.run(0);
                            if (result.length > 0) {
                                this.luaApi.lua_xmove(thread.address, this.global.address, result.length);
                                const ret = this.global.getValue(this.global.getTop() - result.length + 1);
                                return ret;
                            }
                            return undefined;
                        }
                        finally {
                            this.global.remove(threadIndex);
                        }
                    }
                }
            
                exports.JsType = JsType;
                exports.LUA_ENVIRONINDEX = LUA_ENVIRONINDEX;
                exports.LUA_GLOBALSINDEX = LUA_GLOBALSINDEX;
                exports.LUA_IDSIZE = LUA_IDSIZE;
                exports.LUA_MULTRET = LUA_MULTRET;
                exports.LUA_REGISTRYINDEX = LUA_REGISTRYINDEX;
                exports.Lua = Lua;
                exports.LuaApi = LuaApi;
                exports.LuaGlobal = LuaGlobal;
                exports.LuaMultiReturn = MultiReturn;
                exports.LuaThread = LuaThread;
                exports.LuaTimeoutError = LuaTimeoutError;
                exports.PointerSize = PointerSize;
                exports.mapTransform = mapTransform;
            
            }));
            
            ;(function(root){
                "use strict";
                var api = root.__PSYCH_LUA_CORE__;
                if (!api || !api.LuaApi) throw new Error("Psych Lua core API was not initialized");
                var wasmUri = root.__PSYCH_LUA_WASM_URI__;
            
                function PsychLuaFactory(luaApi) {
                    this.luaApi = luaApi;
                    this.states = new Set();
                }
            
                PsychLuaFactory.create = async function(options) {
                    options = options || {};
                    var luaApi = await api.LuaApi.initialize(options.wasmUri || wasmUri, options.environmentVariables);
                    return new PsychLuaFactory(luaApi);
                };
            
                PsychLuaFactory.prototype.createState = function(options) {
                    options = options || {};
                    var traceAllocations = options.traceAllocations === true || options.memoryLimitBytes !== undefined;
                    var state = new api.Lua(this.luaApi, {
                        openStandardLibs: options.openStandardLibs === true,
                        traceAllocations: traceAllocations
                    });
                    if (options.openStandardLibs !== true) {
                        state.global.loadLibrary(api.LuaLibraries.Base);
                        state.global.loadLibrary(api.LuaLibraries.Table);
                        state.global.loadLibrary(api.LuaLibraries.String);
                        state.global.loadLibrary(api.LuaLibraries.Math);
                    }
                    if (options.memoryLimitBytes !== undefined) state.global.setMemoryMax(options.memoryLimitBytes);
                    this.states.add(state);
                    return state;
                };
            
                PsychLuaFactory.prototype.closeState = function(state) {
                    if (!this.states.delete(state)) return;
                    state.global.close();
                };
            
                PsychLuaFactory.prototype.close = function() {
                    this.states.forEach(function(state){ state.global.close(); });
                    this.states.clear();
                };
            
                api.PsychLuaFactory = PsychLuaFactory;
                api.createFactory = function(options) { return PsychLuaFactory.create(options); };
                api.createLua = function(options) {
                    options = Object.assign({}, options || {});
                    if (!options.customWasmUri) options.customWasmUri = wasmUri;
                    return api.Lua.create(options);
                };
                api.runtimeVersion = "1.18.10-gdevelop.3";
                root.PsychLuaRuntime = api;
            })(typeof globalThis !== "undefined" ? globalThis : this);
            
}
        runtimeHost.promise = globalThis.PsychLuaRuntime.createFactory();
        runtimeHost.promise.then(function(factory) {
            runtimeHost.factory = factory;
            runtimeHost.initializing = false;
            runtimeHost.failed = false;
            runtimeHost.error = "";
            var version = globalThis.PsychLuaRuntime.runtimeVersion || "Lua 5.1";
            extensionState.get("Runtime").getChild("Version").setString(version);
            psychState.getChild("Version").setString(version);
            setPsychState("Ready", true, false, "");
        }).catch(function(error) {
            runtimeHost.initializing = false;
            runtimeHost.failed = true;
            runtimeHost.error = error && error.stack ? error.stack : String(error);
            setPsychState("Failed", false, true, runtimeHost.error);
            console.error("Psych Lua runtime initialization failed", error);
        });
    } catch (error) {
        runtimeHost.initializing = false;
        runtimeHost.failed = true;
        runtimeHost.error = error && error.stack ? error.stack : String(error);
        setPsychState("Failed", false, true, runtimeHost.error);
        console.error("Psych Lua runtime setup failed", error);
    }
}
};
gdjs.evtsExt__PsychLuaRuntime__Initialize.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PsychLuaRuntime__Initialize.userFunc0x2199608(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__PsychLuaRuntime__Initialize.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PsychLuaRuntime"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PsychLuaRuntime"),
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


gdjs.evtsExt__PsychLuaRuntime__Initialize.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__PsychLuaRuntime__Initialize.registeredGdjsCallbacks = [];