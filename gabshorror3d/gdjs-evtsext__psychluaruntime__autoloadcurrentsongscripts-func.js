
if (typeof gdjs.evtsExt__PsychLuaRuntime__AutoLoadCurrentSongScripts !== "undefined") {
  gdjs.evtsExt__PsychLuaRuntime__AutoLoadCurrentSongScripts.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PsychLuaRuntime__AutoLoadCurrentSongScripts = {};
gdjs.evtsExt__PsychLuaRuntime__AutoLoadCurrentSongScripts.idToCallbackMap = new Map();


gdjs.evtsExt__PsychLuaRuntime__AutoLoadCurrentSongScripts.userFunc0x923b868 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var host = globalThis.__psychLuaRuntimeHost;
var manifest = host && host.getPsychLuaManifest ? host.getPsychLuaManifest(runtimeScene) : null;
var manifestSource = manifest && Array.isArray(manifest.Scripts) ? "FORPsychLuaSources loaded by GDevelop JsonManager" : "Unavailable";
var extensionRoot = runtimeScene.getVariablesForExtension("PsychLuaRuntime");
var globalRoot = runtimeScene.getGame().getVariables().get("PsychLuaRuntime");
var statusRoots = [extensionRoot.get("AutoLoader"), globalRoot.getChild("AutoLoader")];

var writeString = function(name, value) {
    for (var i = 0; i < statusRoots.length; i += 1) statusRoots[i].getChild(name).setString(String(value || ""));
};
var writeNumber = function(name, value) {
    for (var i = 0; i < statusRoots.length; i += 1) statusRoots[i].getChild(name).setNumber(Number(value) || 0);
};
var writeBoolean = function(name, value) {
    for (var i = 0; i < statusRoots.length; i += 1) statusRoots[i].getChild(name).setBoolean(Boolean(value));
};
var normalize = function(value) {
    var text = String(value || "").replace(/\\/g, "/");
    text = text.replace(/\.lua$/i, "");
    if (text.indexOf("/") >= 0) text = text.split("/").pop();
    if (typeof text.normalize === "function") text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return text.toLowerCase().replace(/[^a-z0-9]+/g, "");
};
var argument = function(name) {
    return String(eventsFunctionContext.getArgument(name) || "");
};
var songName = argument("SongName");
var stageName = argument("StageName");
var girlfriendName = argument("GirlfriendName");
var opponentName = argument("OpponentName");
var boyfriendName = argument("BoyfriendName");

writeString("State", "Selecting");
writeBoolean("Completed", false);
writeBoolean("Failed", false);
writeString("Error", "");
writeString("ManifestSource", manifestSource);
writeNumber("RequestedCount", 0);
writeNumber("LoadedCount", 0);
writeNumber("SkippedCount", 0);
writeNumber("FailedCount", 0);
writeString("Song", songName);
writeString("Stage", stageName);
writeString("Girlfriend", girlfriendName);
writeString("Opponent", opponentName);
writeString("Boyfriend", boyfriendName);
writeString("Order", "");

try {
    if (!host || !host.factory) throw new Error("Psych Lua runtime is not ready");
    if (!manifest || !Array.isArray(manifest.Scripts)) throw new Error("FORPsychLuaSources JSON resource is not loaded");
    if (!host.preferencesAreReady(runtimeScene)) throw new Error("MiddleScroll/Upscroll and the native receptor layout are not stable yet");
    if (!host.captureDefaultStrums(runtimeScene, true)) throw new Error("The eight native strum receptors were not ready for the Psych Lua default snapshot");
    host.lockPreferences(runtimeScene);
    host.resetCountdown(runtimeScene);

    var scriptsById = new Map();
    var scripts = manifest.Scripts.slice().sort(function(a, b) {
        return (Number(a.Order) || 0) - (Number(b.Order) || 0);
    });
    for (var scriptIndex = 0; scriptIndex < scripts.length; scriptIndex += 1) {
        scriptsById.set(String(scripts[scriptIndex].Id || scripts[scriptIndex].Path || ""), scripts[scriptIndex]);
    }

    var selected = [];
    var selectedIds = new Set();
    var addEntry = function(entry) {
        if (!entry) return;
        var id = String(entry.Id || entry.Path || "");
        if (!id || selectedIds.has(id)) return;
        selectedIds.add(id);
        selected.push(entry);
    };
    var addId = function(id) {
        addEntry(scriptsById.get(String(id || "")));
    };
    var addIds = function(ids) {
        if (!Array.isArray(ids)) ids = ids ? [ids] : [];
        for (var i = 0; i < ids.length; i += 1) addId(ids[i]);
    };
    var addMapped = function(map, value) {
        if (!map) return;
        var key = normalize(value);
        if (!key) return;
        if (Object.prototype.hasOwnProperty.call(map, key)) addIds(map[key]);
    };

    var index = manifest.Index || {};
    if (Array.isArray(index.Global)) {
        addIds(index.Global);
    } else {
        for (var globalIndex = 0; globalIndex < scripts.length; globalIndex += 1) {
            if (scripts[globalIndex].Category === "global") addEntry(scripts[globalIndex]);
        }
    }

    addMapped(index.Stages, stageName);
    addMapped(index.Characters, girlfriendName);
    addMapped(index.Characters, opponentName);
    addMapped(index.Characters, boyfriendName);

    var sceneVariables = runtimeScene.getVariables();
    var childrenArray = function(variable) {
        try {
            if (variable && typeof variable.getAllChildrenArray === "function") return variable.getAllChildrenArray() || [];
        } catch (error) {}
        return [];
    };
    var variableText = function(variable) {
        try { return variable.getAsString(); } catch (error) { return ""; }
    };
    var collectTexts = function(variable, output, depth) {
        if (!variable || depth > 3 || output.length > 4096) return;
        var children = childrenArray(variable);
        if (!children.length) {
            var text = variableText(variable);
            if (text !== "") output.push(text);
            return;
        }
        for (var i = 0; i < children.length; i += 1) collectTexts(children[i], output, depth + 1);
    };

    var noteTypeNames = [];
    collectTexts(sceneVariables.get("NoteType"), noteTypeNames, 0);
    collectTexts(sceneVariables.get("SpecialNotesBfArray"), noteTypeNames, 0);
    collectTexts(sceneVariables.get("SpecialNotesDadArray"), noteTypeNames, 0);
    var seenNoteTypes = new Set();
    for (var noteIndex = 0; noteIndex < noteTypeNames.length; noteIndex += 1) {
        var noteKey = normalize(noteTypeNames[noteIndex]);
        if (!noteKey || seenNoteTypes.has(noteKey)) continue;
        seenNoteTypes.add(noteKey);
        addMapped(index.CustomNoteTypes, noteTypeNames[noteIndex]);
    }

    var eventVariable = sceneVariables.get("EventsArray");
    var eventChildren = childrenArray(eventVariable);
    var eventNames = [];
    if (eventChildren.length >= 4) {
        for (var eventIndex = 1; eventIndex < eventChildren.length; eventIndex += 4) eventNames.push(variableText(eventChildren[eventIndex]));
    } else {
        collectTexts(eventVariable, eventNames, 0);
    }
    var seenEvents = new Set();
    for (var nameIndex = 0; nameIndex < eventNames.length; nameIndex += 1) {
        var eventKey = normalize(eventNames[nameIndex]);
        if (!eventKey || seenEvents.has(eventKey)) continue;
        seenEvents.add(eventKey);
        addMapped(index.CustomEvents, eventNames[nameIndex]);
    }

    addMapped(index.Songs, songName);

    // Fallback for manifests generated before Version 2.
    if (!manifest.Index) {
        var requested = {
            stage: normalize(stageName),
            girlfriend: normalize(girlfriendName),
            opponent: normalize(opponentName),
            boyfriend: normalize(boyfriendName),
            song: normalize(songName)
        };
        for (var fallbackIndex = 0; fallbackIndex < scripts.length; fallbackIndex += 1) {
            var fallback = scripts[fallbackIndex];
            var category = String(fallback.Category || "");
            var key = normalize(fallback.Key || fallback.Path || fallback.Id);
            if (category === "stage" && key === requested.stage) addEntry(fallback);
            if (category === "character" && (key === requested.girlfriend || key === requested.opponent || key === requested.boyfriend)) addEntry(fallback);
            if (category === "song" && key === requested.song) addEntry(fallback);
        }
    }

    writeNumber("RequestedCount", selected.length);
    writeString("Order", selected.map(function(entry) { return String(entry.Path || entry.Id || ""); }).join(" > "));
    writeString("State", "Loading");
    host.setDiagnostic(runtimeScene, "AutoLoadSelecting", "", songName);

    var data = host.getSceneData(runtimeScene);
    var generation = (Number(data.sourceLoadGeneration) || 0) + 1;
    data.sourceLoadGeneration = generation;
    (async function() {
        var loadedCount = 0;
        var skippedCount = 0;
        var failedCount = 0;
        var errors = [];
        for (var selectedIndex = 0; selectedIndex < selected.length; selectedIndex += 1) {
            if (data.sourceLoadGeneration !== generation) return;
            var entry = selected[selectedIndex];
            var id = String(entry.Id || entry.Path || "script");
            var path = String(entry.Path || id);
            var existing = data.scripts.get(id);
            if (existing && !existing.closed) {
                skippedCount += 1;
                continue;
            }
            try {
                host.incrementDiagnostic(runtimeScene, "LoadCalls");
                host.setDiagnostic(runtimeScene, "AutoLoadSource", id, path);
                var loaded = await host.loadManifestEntry(runtimeScene, entry, id, path);
                if (!loaded) {
                    failedCount += 1;
                    errors.push(id + ": load failed");
                    continue;
                }
                host.incrementDiagnostic(runtimeScene, "OnCreateCalls");
                host.setDiagnostic(runtimeScene, "AutoLoadOnCreate", id, path);
                host.dispatch(runtimeScene, id, "onCreate", []);
                var active = data.scripts.get(id);
                if (active && !active.closed && !active.disabled) {
                    loadedCount += 1;
                } else if (active && active.disabled) {
                    failedCount += 1;
                    errors.push(id + ": onCreate failed");
                } else {
                    skippedCount += 1;
                }
            } catch (scriptError) {
                failedCount += 1;
                var message = scriptError && scriptError.stack ? scriptError.stack : String(scriptError);
                errors.push(id + ": " + message);
                host.setLastError(runtimeScene, id, "autoLoad", scriptError);
                host.setScriptStatus(runtimeScene, id, path, false, true, false, message);
                console.error("Psych Lua automatic script load failed", id, path, scriptError);
            }
        }
        if (data.sourceLoadGeneration !== generation) return;
        writeNumber("LoadedCount", loadedCount);
        writeNumber("SkippedCount", skippedCount);
        writeNumber("FailedCount", failedCount);
        writeBoolean("Failed", failedCount > 0);
        writeString("Error", errors.join("\n"));
        writeString("State", "Complete");
        writeBoolean("Completed", true);
        host.setDiagnostic(runtimeScene, "AutoLoadComplete", "", songName);
        host.updateScriptCount(runtimeScene);
    })().catch(function(error) {
        var errorText = error && error.stack ? error.stack : String(error);
        writeBoolean("Failed", true);
        writeBoolean("Completed", true);
        writeString("State", "Failed");
        writeString("Error", errorText);
        host.setDiagnostic(runtimeScene, "AutoLoadAsyncException", "", songName);
        host.setLastError(runtimeScene, "", "autoLoadAsync", error);
        console.error("Psych Lua asynchronous automatic loader failed", error);
    });
} catch (error) {
    var errorText = error && error.stack ? error.stack : String(error);
    writeBoolean("Failed", true);
    writeBoolean("Completed", true);
    writeString("State", "Failed");
    writeString("Error", errorText);
    if (host) {
        host.setDiagnostic(runtimeScene, "AutoLoadException", "", songName);
        host.setLastError(runtimeScene, "", "autoLoad", error);
    }
    console.error("Psych Lua automatic loader failed", error);
}
};
gdjs.evtsExt__PsychLuaRuntime__AutoLoadCurrentSongScripts.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PsychLuaRuntime__AutoLoadCurrentSongScripts.userFunc0x923b868(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__PsychLuaRuntime__AutoLoadCurrentSongScripts.func = function(runtimeScene, SongName, StageName, GirlfriendName, OpponentName, BoyfriendName, parentEventsFunctionContext) {
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
if (argName === "SongName") return SongName;
if (argName === "StageName") return StageName;
if (argName === "GirlfriendName") return GirlfriendName;
if (argName === "OpponentName") return OpponentName;
if (argName === "BoyfriendName") return BoyfriendName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PsychLuaRuntime__AutoLoadCurrentSongScripts.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__PsychLuaRuntime__AutoLoadCurrentSongScripts.registeredGdjsCallbacks = [];