
gdjs.evtsExt__PBRPrimitives3D__Primitive3D = gdjs.evtsExt__PBRPrimitives3D__Primitive3D || {};

/**
 * Object generated from Primitiva PBR 3D
 */
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D = class Primitive3D extends gdjs.CustomRuntimeObject3D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._objectData = {};
    
    this._objectData.Shape = objectData.content.Shape !== undefined ? objectData.content.Shape : "Cube";
    this._objectData.Segments = objectData.content.Segments !== undefined ? objectData.content.Segments : Number("32") || 0;
    this._objectData.HeightSegments = objectData.content.HeightSegments !== undefined ? objectData.content.HeightSegments : Number("16") || 0;
    this._objectData.TorusTube = objectData.content.TorusTube !== undefined ? objectData.content.TorusTube : Number("0.3") || 0;
    this._objectData.Material = objectData.content.Material !== undefined ? objectData.content.Material : "Standard";
    this._objectData.Color = objectData.content.Color !== undefined ? objectData.content.Color : "255;255;255";
    this._objectData.Metalness = objectData.content.Metalness !== undefined ? objectData.content.Metalness : Number("0") || 0;
    this._objectData.Roughness = objectData.content.Roughness !== undefined ? objectData.content.Roughness : Number("0.65") || 0;
    this._objectData.EnvironmentIntensity = objectData.content.EnvironmentIntensity !== undefined ? objectData.content.EnvironmentIntensity : Number("1") || 0;
    this._objectData.BaseColorMap = objectData.content.BaseColorMap !== undefined ? objectData.content.BaseColorMap : "";
    this._objectData.NormalMap = objectData.content.NormalMap !== undefined ? objectData.content.NormalMap : "";
    this._objectData.ORMMap = objectData.content.ORMMap !== undefined ? objectData.content.ORMMap : "";
    this._objectData.RoughnessMap = objectData.content.RoughnessMap !== undefined ? objectData.content.RoughnessMap : "";
    this._objectData.MetalnessMap = objectData.content.MetalnessMap !== undefined ? objectData.content.MetalnessMap : "";
    this._objectData.AOMap = objectData.content.AOMap !== undefined ? objectData.content.AOMap : "";
    this._objectData.EmissiveMap = objectData.content.EmissiveMap !== undefined ? objectData.content.EmissiveMap : "";
    this._objectData.AlphaMap = objectData.content.AlphaMap !== undefined ? objectData.content.AlphaMap : "";
    this._objectData.DisplacementMap = objectData.content.DisplacementMap !== undefined ? objectData.content.DisplacementMap : "";
    this._objectData.NormalStrength = objectData.content.NormalStrength !== undefined ? objectData.content.NormalStrength : Number("1") || 0;
    this._objectData.FlipNormalY = objectData.content.FlipNormalY !== undefined ? objectData.content.FlipNormalY : false;
    this._objectData.AOIntensity = objectData.content.AOIntensity !== undefined ? objectData.content.AOIntensity : Number("1") || 0;
    this._objectData.EmissiveColor = objectData.content.EmissiveColor !== undefined ? objectData.content.EmissiveColor : "255;255;255";
    this._objectData.EmissiveIntensity = objectData.content.EmissiveIntensity !== undefined ? objectData.content.EmissiveIntensity : Number("0") || 0;
    this._objectData.RepeatU = objectData.content.RepeatU !== undefined ? objectData.content.RepeatU : Number("1") || 0;
    this._objectData.RepeatV = objectData.content.RepeatV !== undefined ? objectData.content.RepeatV : Number("1") || 0;
    this._objectData.OffsetU = objectData.content.OffsetU !== undefined ? objectData.content.OffsetU : Number("0") || 0;
    this._objectData.OffsetV = objectData.content.OffsetV !== undefined ? objectData.content.OffsetV : Number("0") || 0;
    this._objectData.UVRotation = objectData.content.UVRotation !== undefined ? objectData.content.UVRotation : Number("0") || 0;
    this._objectData.Anisotropy = objectData.content.Anisotropy !== undefined ? objectData.content.Anisotropy : Number("4") || 0;
    this._objectData.Blend = objectData.content.Blend !== undefined ? objectData.content.Blend : "Opaque";
    this._objectData.Opacity = objectData.content.Opacity !== undefined ? objectData.content.Opacity : Number("1") || 0;
    this._objectData.AlphaTest = objectData.content.AlphaTest !== undefined ? objectData.content.AlphaTest : Number("0.5") || 0;
    this._objectData.Side = objectData.content.Side !== undefined ? objectData.content.Side : "Front";
    this._objectData.CastShadow = objectData.content.CastShadow !== undefined ? objectData.content.CastShadow : true;
    this._objectData.ReceiveShadow = objectData.content.ReceiveShadow !== undefined ? objectData.content.ReceiveShadow : true;
    this._objectData.FlatShading = objectData.content.FlatShading !== undefined ? objectData.content.FlatShading : false;
    this._objectData.Wireframe = objectData.content.Wireframe !== undefined ? objectData.content.Wireframe : false;
    this._objectData.DepthWrite = objectData.content.DepthWrite !== undefined ? objectData.content.DepthWrite : true;
    this._objectData.Clearcoat = objectData.content.Clearcoat !== undefined ? objectData.content.Clearcoat : Number("0") || 0;
    this._objectData.ClearcoatRoughness = objectData.content.ClearcoatRoughness !== undefined ? objectData.content.ClearcoatRoughness : Number("0") || 0;
    this._objectData.Transmission = objectData.content.Transmission !== undefined ? objectData.content.Transmission : Number("0") || 0;
    this._objectData.IOR = objectData.content.IOR !== undefined ? objectData.content.IOR : Number("1.5") || 0;
    this._objectData.Thickness = objectData.content.Thickness !== undefined ? objectData.content.Thickness : Number("0") || 0;
    this._objectData.DisplacementScale = objectData.content.DisplacementScale !== undefined ? objectData.content.DisplacementScale : Number("0") || 0;
    this._objectData.DisplacementBias = objectData.content.DisplacementBias !== undefined ? objectData.content.DisplacementBias : Number("0") || 0;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.Shape !== newObjectData.content.Shape)
      this._objectData.Shape = newObjectData.content.Shape;
    if (oldObjectData.content.Segments !== newObjectData.content.Segments)
      this._objectData.Segments = newObjectData.content.Segments;
    if (oldObjectData.content.HeightSegments !== newObjectData.content.HeightSegments)
      this._objectData.HeightSegments = newObjectData.content.HeightSegments;
    if (oldObjectData.content.TorusTube !== newObjectData.content.TorusTube)
      this._objectData.TorusTube = newObjectData.content.TorusTube;
    if (oldObjectData.content.Material !== newObjectData.content.Material)
      this._objectData.Material = newObjectData.content.Material;
    if (oldObjectData.content.Color !== newObjectData.content.Color)
      this._objectData.Color = newObjectData.content.Color;
    if (oldObjectData.content.Metalness !== newObjectData.content.Metalness)
      this._objectData.Metalness = newObjectData.content.Metalness;
    if (oldObjectData.content.Roughness !== newObjectData.content.Roughness)
      this._objectData.Roughness = newObjectData.content.Roughness;
    if (oldObjectData.content.EnvironmentIntensity !== newObjectData.content.EnvironmentIntensity)
      this._objectData.EnvironmentIntensity = newObjectData.content.EnvironmentIntensity;
    if (oldObjectData.content.BaseColorMap !== newObjectData.content.BaseColorMap)
      this._objectData.BaseColorMap = newObjectData.content.BaseColorMap;
    if (oldObjectData.content.NormalMap !== newObjectData.content.NormalMap)
      this._objectData.NormalMap = newObjectData.content.NormalMap;
    if (oldObjectData.content.ORMMap !== newObjectData.content.ORMMap)
      this._objectData.ORMMap = newObjectData.content.ORMMap;
    if (oldObjectData.content.RoughnessMap !== newObjectData.content.RoughnessMap)
      this._objectData.RoughnessMap = newObjectData.content.RoughnessMap;
    if (oldObjectData.content.MetalnessMap !== newObjectData.content.MetalnessMap)
      this._objectData.MetalnessMap = newObjectData.content.MetalnessMap;
    if (oldObjectData.content.AOMap !== newObjectData.content.AOMap)
      this._objectData.AOMap = newObjectData.content.AOMap;
    if (oldObjectData.content.EmissiveMap !== newObjectData.content.EmissiveMap)
      this._objectData.EmissiveMap = newObjectData.content.EmissiveMap;
    if (oldObjectData.content.AlphaMap !== newObjectData.content.AlphaMap)
      this._objectData.AlphaMap = newObjectData.content.AlphaMap;
    if (oldObjectData.content.DisplacementMap !== newObjectData.content.DisplacementMap)
      this._objectData.DisplacementMap = newObjectData.content.DisplacementMap;
    if (oldObjectData.content.NormalStrength !== newObjectData.content.NormalStrength)
      this._objectData.NormalStrength = newObjectData.content.NormalStrength;
    if (oldObjectData.content.FlipNormalY !== newObjectData.content.FlipNormalY)
      this._objectData.FlipNormalY = newObjectData.content.FlipNormalY;
    if (oldObjectData.content.AOIntensity !== newObjectData.content.AOIntensity)
      this._objectData.AOIntensity = newObjectData.content.AOIntensity;
    if (oldObjectData.content.EmissiveColor !== newObjectData.content.EmissiveColor)
      this._objectData.EmissiveColor = newObjectData.content.EmissiveColor;
    if (oldObjectData.content.EmissiveIntensity !== newObjectData.content.EmissiveIntensity)
      this._objectData.EmissiveIntensity = newObjectData.content.EmissiveIntensity;
    if (oldObjectData.content.RepeatU !== newObjectData.content.RepeatU)
      this._objectData.RepeatU = newObjectData.content.RepeatU;
    if (oldObjectData.content.RepeatV !== newObjectData.content.RepeatV)
      this._objectData.RepeatV = newObjectData.content.RepeatV;
    if (oldObjectData.content.OffsetU !== newObjectData.content.OffsetU)
      this._objectData.OffsetU = newObjectData.content.OffsetU;
    if (oldObjectData.content.OffsetV !== newObjectData.content.OffsetV)
      this._objectData.OffsetV = newObjectData.content.OffsetV;
    if (oldObjectData.content.UVRotation !== newObjectData.content.UVRotation)
      this._objectData.UVRotation = newObjectData.content.UVRotation;
    if (oldObjectData.content.Anisotropy !== newObjectData.content.Anisotropy)
      this._objectData.Anisotropy = newObjectData.content.Anisotropy;
    if (oldObjectData.content.Blend !== newObjectData.content.Blend)
      this._objectData.Blend = newObjectData.content.Blend;
    if (oldObjectData.content.Opacity !== newObjectData.content.Opacity)
      this._objectData.Opacity = newObjectData.content.Opacity;
    if (oldObjectData.content.AlphaTest !== newObjectData.content.AlphaTest)
      this._objectData.AlphaTest = newObjectData.content.AlphaTest;
    if (oldObjectData.content.Side !== newObjectData.content.Side)
      this._objectData.Side = newObjectData.content.Side;
    if (oldObjectData.content.CastShadow !== newObjectData.content.CastShadow)
      this._objectData.CastShadow = newObjectData.content.CastShadow;
    if (oldObjectData.content.ReceiveShadow !== newObjectData.content.ReceiveShadow)
      this._objectData.ReceiveShadow = newObjectData.content.ReceiveShadow;
    if (oldObjectData.content.FlatShading !== newObjectData.content.FlatShading)
      this._objectData.FlatShading = newObjectData.content.FlatShading;
    if (oldObjectData.content.Wireframe !== newObjectData.content.Wireframe)
      this._objectData.Wireframe = newObjectData.content.Wireframe;
    if (oldObjectData.content.DepthWrite !== newObjectData.content.DepthWrite)
      this._objectData.DepthWrite = newObjectData.content.DepthWrite;
    if (oldObjectData.content.Clearcoat !== newObjectData.content.Clearcoat)
      this._objectData.Clearcoat = newObjectData.content.Clearcoat;
    if (oldObjectData.content.ClearcoatRoughness !== newObjectData.content.ClearcoatRoughness)
      this._objectData.ClearcoatRoughness = newObjectData.content.ClearcoatRoughness;
    if (oldObjectData.content.Transmission !== newObjectData.content.Transmission)
      this._objectData.Transmission = newObjectData.content.Transmission;
    if (oldObjectData.content.IOR !== newObjectData.content.IOR)
      this._objectData.IOR = newObjectData.content.IOR;
    if (oldObjectData.content.Thickness !== newObjectData.content.Thickness)
      this._objectData.Thickness = newObjectData.content.Thickness;
    if (oldObjectData.content.DisplacementScale !== newObjectData.content.DisplacementScale)
      this._objectData.DisplacementScale = newObjectData.content.DisplacementScale;
    if (oldObjectData.content.DisplacementBias !== newObjectData.content.DisplacementBias)
      this._objectData.DisplacementBias = newObjectData.content.DisplacementBias;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getShape() {
    return this._objectData.Shape !== undefined ? this._objectData.Shape : "Cube";
  }
  _setShape(newValue) {
    this._objectData.Shape = newValue;
  }
  _getSegments() {
    return this._objectData.Segments !== undefined ? this._objectData.Segments : Number("32") || 0;
  }
  _setSegments(newValue) {
    this._objectData.Segments = newValue;
  }
  _getHeightSegments() {
    return this._objectData.HeightSegments !== undefined ? this._objectData.HeightSegments : Number("16") || 0;
  }
  _setHeightSegments(newValue) {
    this._objectData.HeightSegments = newValue;
  }
  _getTorusTube() {
    return this._objectData.TorusTube !== undefined ? this._objectData.TorusTube : Number("0.3") || 0;
  }
  _setTorusTube(newValue) {
    this._objectData.TorusTube = newValue;
  }
  _getMaterial() {
    return this._objectData.Material !== undefined ? this._objectData.Material : "Standard";
  }
  _setMaterial(newValue) {
    this._objectData.Material = newValue;
  }
  _getColor() {
    return this._objectData.Color !== undefined ? this._objectData.Color : "255;255;255";
  }
  _setColor(newValue) {
    this._objectData.Color = newValue;
  }
  _getMetalness() {
    return this._objectData.Metalness !== undefined ? this._objectData.Metalness : Number("0") || 0;
  }
  _setMetalness(newValue) {
    this._objectData.Metalness = newValue;
  }
  _getRoughness() {
    return this._objectData.Roughness !== undefined ? this._objectData.Roughness : Number("0.65") || 0;
  }
  _setRoughness(newValue) {
    this._objectData.Roughness = newValue;
  }
  _getEnvironmentIntensity() {
    return this._objectData.EnvironmentIntensity !== undefined ? this._objectData.EnvironmentIntensity : Number("1") || 0;
  }
  _setEnvironmentIntensity(newValue) {
    this._objectData.EnvironmentIntensity = newValue;
  }
  _getBaseColorMap() {
    return this._objectData.BaseColorMap !== undefined ? this._objectData.BaseColorMap : "";
  }
  _setBaseColorMap(newValue) {
    this._objectData.BaseColorMap = newValue;
  }
  _getNormalMap() {
    return this._objectData.NormalMap !== undefined ? this._objectData.NormalMap : "";
  }
  _setNormalMap(newValue) {
    this._objectData.NormalMap = newValue;
  }
  _getORMMap() {
    return this._objectData.ORMMap !== undefined ? this._objectData.ORMMap : "";
  }
  _setORMMap(newValue) {
    this._objectData.ORMMap = newValue;
  }
  _getRoughnessMap() {
    return this._objectData.RoughnessMap !== undefined ? this._objectData.RoughnessMap : "";
  }
  _setRoughnessMap(newValue) {
    this._objectData.RoughnessMap = newValue;
  }
  _getMetalnessMap() {
    return this._objectData.MetalnessMap !== undefined ? this._objectData.MetalnessMap : "";
  }
  _setMetalnessMap(newValue) {
    this._objectData.MetalnessMap = newValue;
  }
  _getAOMap() {
    return this._objectData.AOMap !== undefined ? this._objectData.AOMap : "";
  }
  _setAOMap(newValue) {
    this._objectData.AOMap = newValue;
  }
  _getEmissiveMap() {
    return this._objectData.EmissiveMap !== undefined ? this._objectData.EmissiveMap : "";
  }
  _setEmissiveMap(newValue) {
    this._objectData.EmissiveMap = newValue;
  }
  _getAlphaMap() {
    return this._objectData.AlphaMap !== undefined ? this._objectData.AlphaMap : "";
  }
  _setAlphaMap(newValue) {
    this._objectData.AlphaMap = newValue;
  }
  _getDisplacementMap() {
    return this._objectData.DisplacementMap !== undefined ? this._objectData.DisplacementMap : "";
  }
  _setDisplacementMap(newValue) {
    this._objectData.DisplacementMap = newValue;
  }
  _getNormalStrength() {
    return this._objectData.NormalStrength !== undefined ? this._objectData.NormalStrength : Number("1") || 0;
  }
  _setNormalStrength(newValue) {
    this._objectData.NormalStrength = newValue;
  }
  _getFlipNormalY() {
    return this._objectData.FlipNormalY !== undefined ? this._objectData.FlipNormalY : false;
  }
  _setFlipNormalY(newValue) {
    this._objectData.FlipNormalY = newValue;
  }
  _toggleFlipNormalY() {
    this._setFlipNormalY(!this._getFlipNormalY());
  }
  _getAOIntensity() {
    return this._objectData.AOIntensity !== undefined ? this._objectData.AOIntensity : Number("1") || 0;
  }
  _setAOIntensity(newValue) {
    this._objectData.AOIntensity = newValue;
  }
  _getEmissiveColor() {
    return this._objectData.EmissiveColor !== undefined ? this._objectData.EmissiveColor : "255;255;255";
  }
  _setEmissiveColor(newValue) {
    this._objectData.EmissiveColor = newValue;
  }
  _getEmissiveIntensity() {
    return this._objectData.EmissiveIntensity !== undefined ? this._objectData.EmissiveIntensity : Number("0") || 0;
  }
  _setEmissiveIntensity(newValue) {
    this._objectData.EmissiveIntensity = newValue;
  }
  _getRepeatU() {
    return this._objectData.RepeatU !== undefined ? this._objectData.RepeatU : Number("1") || 0;
  }
  _setRepeatU(newValue) {
    this._objectData.RepeatU = newValue;
  }
  _getRepeatV() {
    return this._objectData.RepeatV !== undefined ? this._objectData.RepeatV : Number("1") || 0;
  }
  _setRepeatV(newValue) {
    this._objectData.RepeatV = newValue;
  }
  _getOffsetU() {
    return this._objectData.OffsetU !== undefined ? this._objectData.OffsetU : Number("0") || 0;
  }
  _setOffsetU(newValue) {
    this._objectData.OffsetU = newValue;
  }
  _getOffsetV() {
    return this._objectData.OffsetV !== undefined ? this._objectData.OffsetV : Number("0") || 0;
  }
  _setOffsetV(newValue) {
    this._objectData.OffsetV = newValue;
  }
  _getUVRotation() {
    return this._objectData.UVRotation !== undefined ? this._objectData.UVRotation : Number("0") || 0;
  }
  _setUVRotation(newValue) {
    this._objectData.UVRotation = newValue;
  }
  _getAnisotropy() {
    return this._objectData.Anisotropy !== undefined ? this._objectData.Anisotropy : Number("4") || 0;
  }
  _setAnisotropy(newValue) {
    this._objectData.Anisotropy = newValue;
  }
  _getBlend() {
    return this._objectData.Blend !== undefined ? this._objectData.Blend : "Opaque";
  }
  _setBlend(newValue) {
    this._objectData.Blend = newValue;
  }
  _getOpacity() {
    return this._objectData.Opacity !== undefined ? this._objectData.Opacity : Number("1") || 0;
  }
  _setOpacity(newValue) {
    this._objectData.Opacity = newValue;
  }
  _getAlphaTest() {
    return this._objectData.AlphaTest !== undefined ? this._objectData.AlphaTest : Number("0.5") || 0;
  }
  _setAlphaTest(newValue) {
    this._objectData.AlphaTest = newValue;
  }
  _getSide() {
    return this._objectData.Side !== undefined ? this._objectData.Side : "Front";
  }
  _setSide(newValue) {
    this._objectData.Side = newValue;
  }
  _getCastShadow() {
    return this._objectData.CastShadow !== undefined ? this._objectData.CastShadow : true;
  }
  _setCastShadow(newValue) {
    this._objectData.CastShadow = newValue;
  }
  _toggleCastShadow() {
    this._setCastShadow(!this._getCastShadow());
  }
  _getReceiveShadow() {
    return this._objectData.ReceiveShadow !== undefined ? this._objectData.ReceiveShadow : true;
  }
  _setReceiveShadow(newValue) {
    this._objectData.ReceiveShadow = newValue;
  }
  _toggleReceiveShadow() {
    this._setReceiveShadow(!this._getReceiveShadow());
  }
  _getFlatShading() {
    return this._objectData.FlatShading !== undefined ? this._objectData.FlatShading : false;
  }
  _setFlatShading(newValue) {
    this._objectData.FlatShading = newValue;
  }
  _toggleFlatShading() {
    this._setFlatShading(!this._getFlatShading());
  }
  _getWireframe() {
    return this._objectData.Wireframe !== undefined ? this._objectData.Wireframe : false;
  }
  _setWireframe(newValue) {
    this._objectData.Wireframe = newValue;
  }
  _toggleWireframe() {
    this._setWireframe(!this._getWireframe());
  }
  _getDepthWrite() {
    return this._objectData.DepthWrite !== undefined ? this._objectData.DepthWrite : true;
  }
  _setDepthWrite(newValue) {
    this._objectData.DepthWrite = newValue;
  }
  _toggleDepthWrite() {
    this._setDepthWrite(!this._getDepthWrite());
  }
  _getClearcoat() {
    return this._objectData.Clearcoat !== undefined ? this._objectData.Clearcoat : Number("0") || 0;
  }
  _setClearcoat(newValue) {
    this._objectData.Clearcoat = newValue;
  }
  _getClearcoatRoughness() {
    return this._objectData.ClearcoatRoughness !== undefined ? this._objectData.ClearcoatRoughness : Number("0") || 0;
  }
  _setClearcoatRoughness(newValue) {
    this._objectData.ClearcoatRoughness = newValue;
  }
  _getTransmission() {
    return this._objectData.Transmission !== undefined ? this._objectData.Transmission : Number("0") || 0;
  }
  _setTransmission(newValue) {
    this._objectData.Transmission = newValue;
  }
  _getIOR() {
    return this._objectData.IOR !== undefined ? this._objectData.IOR : Number("1.5") || 0;
  }
  _setIOR(newValue) {
    this._objectData.IOR = newValue;
  }
  _getThickness() {
    return this._objectData.Thickness !== undefined ? this._objectData.Thickness : Number("0") || 0;
  }
  _setThickness(newValue) {
    this._objectData.Thickness = newValue;
  }
  _getDisplacementScale() {
    return this._objectData.DisplacementScale !== undefined ? this._objectData.DisplacementScale : Number("0") || 0;
  }
  _setDisplacementScale(newValue) {
    this._objectData.DisplacementScale = newValue;
  }
  _getDisplacementBias() {
    return this._objectData.DisplacementBias !== undefined ? this._objectData.DisplacementBias : Number("0") || 0;
  }
  _setDisplacementBias(newValue) {
    this._objectData.DisplacementBias = newValue;
  }

  

  
}

// Methods:
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ShapeContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ShapeContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ShapeContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ShapeContext.userFunc0x7edb000 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getShape() : "";
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ShapeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ShapeContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ShapeContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ShapeContext.userFunc0x7edb000(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.Shape = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ShapeContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ShapeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ShapeContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onCreatedContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onCreatedContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onCreatedContext.userFunc0x23d4328 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// PBR Primitives 3D. MIT. Runs inside extension lifecycle functions only.
if (!gdjs.__pbrPrimitives3D) {
  gdjs.__pbrPrimitives3D = (() => {
    const VERSION = '1.0.0';
    const games = new WeakMap();
    const states = new WeakMap();
    const numeric = (x, fallback, min, max) => Number.isFinite(+x) ? Math.min(max, Math.max(min, +x)) : fallback;
    const color = x => {
      const c = String(x || '255;255;255').split(';').map(v => numeric(v, 255, 0, 255) / 255);
      return new THREE.Color().setRGB(c[0], c[1], c[2], THREE.SRGBColorSpace);
    };
    function cache(game) {
      let c = games.get(game);
      if (!c) { c = { geometry: new Map(), material: new Map(), texture: new Map(), objects: 0, builds: 0 }; games.set(game, c); }
      return c;
    }
    function acquire(map, key, make) {
      let e = map.get(key);
      if (!e) { e = { value: make(), refs: 0 }; map.set(key, e); }
      e.refs++;
      return e.value;
    }
    function release(map, key) {
      const e = map.get(key);
      if (!e || --e.refs > 0) return;
      map.delete(key);
      e.value.dispose();
    }
    function config(o) {
      const get = n => o['_get' + n]();
      const c = {};
      for (const n of gdjs.__pbrPrimitives3D.propertyNames) c[n] = get(n);
      c.Segments = Math.round(numeric(c.Segments, 32, 3, 128));
      c.HeightSegments = Math.round(numeric(c.HeightSegments, 16, 1, 128));
      for (const n of ['Metalness', 'Roughness', 'Opacity', 'AlphaTest', 'Clearcoat', 'ClearcoatRoughness', 'Transmission']) c[n] = numeric(c[n], n === 'Roughness' ? .65 : n === 'Opacity' ? 1 : 0, 0, 1);
      c.IOR = numeric(c.IOR, 1.5, 1, 2.333);
      c.Thickness = numeric(c.Thickness, 0, 0, 10000);
      c.TorusTube = numeric(c.TorusTube, .3, .01, .95);
      c.NormalStrength = numeric(c.NormalStrength, 1, 0, 10);
      c.AOIntensity = numeric(c.AOIntensity, 1, 0, 10);
      c.EmissiveIntensity = numeric(c.EmissiveIntensity, 0, 0, 1000);
      c.EnvironmentIntensity = numeric(c.EnvironmentIntensity, 1, 0, 1000);
      c.DisplacementScale = numeric(c.DisplacementScale, 0, -10000, 10000);
      c.DisplacementBias = numeric(c.DisplacementBias, 0, -10000, 10000);
      c.RepeatU = numeric(c.RepeatU, 1, -10000, 10000);
      c.RepeatV = numeric(c.RepeatV, 1, -10000, 10000);
      c.OffsetU = numeric(c.OffsetU, 0, -10000, 10000);
      c.OffsetV = numeric(c.OffsetV, 0, -10000, 10000);
      c.UVRotation = numeric(c.UVRotation, 0, -360000, 360000);
      c.Anisotropy = Math.round(numeric(c.Anisotropy, 4, 1, 16));
      return c;
    }
    function geometry(c) {
      let g;
      const n = c.Segments, h = c.HeightSegments;
      const displaced = !!c.DisplacementMap && c.DisplacementScale !== 0;
      const flatHeight = displaced ? h : 1;
      switch (c.Shape) {
        case 'Sphere': g = new THREE.SphereGeometry(50, n, Math.max(2, h)); break;
        case 'Cylinder': g = new THREE.CylinderGeometry(50, 50, 100, n, flatHeight); g.rotateX(Math.PI / 2); break;
        case 'Cone': g = new THREE.ConeGeometry(50, 100, n, flatHeight); g.rotateX(Math.PI / 2); break;
        case 'Pyramid': g = new THREE.ConeGeometry(50, 100, 4, flatHeight); g.rotateY(Math.PI / 4); g.rotateX(Math.PI / 2); break;
        case 'TriangularPrism': g = new THREE.CylinderGeometry(50, 50, 100, 3, 1); g.rotateX(Math.PI / 2); break;
        case 'Plane': g = new THREE.PlaneGeometry(100, 100, displaced ? Math.min(n, 64) : 1, displaced ? Math.min(h, 64) : 1); break;
        case 'Triangle': {
          g = new THREE.BufferGeometry();
          g.setAttribute('position', new THREE.Float32BufferAttribute([-50, -50, 0, 50, -50, 0, 0, 50, 0], 3));
          g.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 1, 0, .5, 1], 2));
          g.computeVertexNormals(); break;
        }
        case 'Torus': g = new THREE.TorusGeometry(50 / (1 + c.TorusTube), 50 * c.TorusTube / (1 + c.TorusTube), Math.max(3, h), n); break;
        case 'Capsule': g = new THREE.CapsuleGeometry(25, 50, Math.min(h, 32), n); g.rotateX(Math.PI / 2); break;
        case 'Icosahedron': g = new THREE.IcosahedronGeometry(50, 0); break;
        case 'Octahedron': g = new THREE.OctahedronGeometry(50, 0); break;
        default: g = new THREE.BoxGeometry(100, 100, 100, displaced ? Math.min(n, 64) : 1, displaced ? Math.min(h, 64) : 1, displaced ? Math.min(n, 64) : 1);
      }
      if (c.Shape === 'Pyramid' || c.Shape === 'TriangularPrism') {
        const indexed = g; g = g.toNonIndexed(); indexed.dispose(); g.computeVertexNormals();
      }
      // Normalize bounds once: GDevelop Width/Height/Depth are the true dimensions.
      g.computeBoundingBox();
      const b = g.boundingBox, size = b.getSize(new THREE.Vector3()), center = b.getCenter(new THREE.Vector3());
      g.translate(-center.x, -center.y, -center.z);
      g.scale(size.x ? 100 / size.x : 1, size.y ? 100 / size.y : 1, size.z ? 100 / size.z : 1);
      g.computeBoundingBox(); g.computeBoundingSphere();
      return g;
    }
    function texture(ca, game, name, srgb, c, leases) {
      if (!name) return null;
      const k = JSON.stringify([name, srgb, c.RepeatU, c.RepeatV, c.OffsetU, c.OffsetV, c.UVRotation, c.Anisotropy]);
      const t = acquire(ca.texture, k, () => {
        // Never mutate engine-owned image textures. Source pixels remain shared.
        const t = game.getImageManager().getThreeTexture(name).clone();
        t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
        t.wrapS = t.wrapT = THREE.RepeatWrapping;
        t.repeat.set(c.RepeatU, c.RepeatV); t.offset.set(c.OffsetU, c.OffsetV);
        t.center.set(.5, .5); t.rotation = c.UVRotation * Math.PI / 180;
        t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter; t.magFilter = THREE.LinearFilter;
        const renderer = game.getRenderer().getThreeRenderer();
        const max = renderer ? renderer.capabilities.getMaxAnisotropy() : 1;
        t.anisotropy = Math.min(c.Anisotropy, max);
        t.needsUpdate = true;
        return t;
      });
      leases.push(k); return t;
    }
    function material(ca, game, c) {
      const leases = [];
      let m;
      try {
        const physical = c.Material === 'Physical' || c.Clearcoat > 0 || c.Transmission > 0;
        m = physical ? new THREE.MeshPhysicalMaterial() : new THREE.MeshStandardMaterial();
        m.color.copy(color(c.Color)); m.roughness = c.Roughness; m.metalness = c.Metalness;
        m.emissive.copy(color(c.EmissiveColor)); m.emissiveIntensity = c.EmissiveIntensity;
        m.envMapIntensity = c.EnvironmentIntensity;
        m.opacity = c.Opacity; m.transparent = c.Blend === 'Blend' || c.Opacity < 1 || c.Transmission > 0;
        m.alphaTest = c.Blend === 'Mask' ? c.AlphaTest : 0;
        m.depthWrite = c.DepthWrite && (!m.transparent || c.Transmission > 0);
        m.side = c.Side === 'Double' ? THREE.DoubleSide : c.Side === 'Back' ? THREE.BackSide : THREE.FrontSide;
        m.flatShading = c.FlatShading; m.wireframe = c.Wireframe;
        const map = (n, srgb = false) => texture(ca, game, c[n], srgb, c, leases);
        m.map = map('BaseColorMap', true); m.normalMap = map('NormalMap');
        m.normalScale.set(c.NormalStrength, c.FlipNormalY ? -c.NormalStrength : c.NormalStrength);
        m.roughnessMap = c.RoughnessMap ? map('RoughnessMap') : map('ORMMap');
        m.metalnessMap = c.MetalnessMap ? map('MetalnessMap') : map('ORMMap');
        m.aoMap = c.AOMap ? map('AOMap') : map('ORMMap'); m.aoMapIntensity = c.AOIntensity;
        m.emissiveMap = map('EmissiveMap', true); m.alphaMap = map('AlphaMap');
        m.displacementMap = map('DisplacementMap'); m.displacementScale = c.DisplacementScale; m.displacementBias = c.DisplacementBias;
        if (physical) {
          m.clearcoat = c.Clearcoat; m.clearcoatRoughness = c.ClearcoatRoughness;
          m.transmission = c.Transmission; m.ior = c.IOR; m.thickness = c.Thickness;
        }
        const dispose = m.dispose.bind(m);
        m.dispose = () => { dispose(); for (const k of leases) release(ca.texture, k); };
        return m;
      } catch (e) {
        if (m) m.dispose();
        for (const k of leases) release(ca.texture, k);
        throw e;
      }
    }
    function keys(c) {
      const shape = c.Shape;
      const faceted = ['Cube', 'Triangle', 'Icosahedron', 'Octahedron'].includes(shape);
      const displaced = !!c.DisplacementMap && c.DisplacementScale !== 0;
      const g = JSON.stringify([shape, faceted && !displaced ? 0 : c.Segments, faceted && !displaced ? 0 : c.HeightSegments, shape === 'Torus' ? c.TorusTube : 0, displaced]);
      const mc = { ...c };
      for (const k of ['Shape', 'Segments', 'HeightSegments', 'TorusTube', 'CastShadow', 'ReceiveShadow']) delete mc[k];
      return [g, JSON.stringify(mc)];
    }
    function apply(o) {
      // Childless custom renderers must declare their local bounds themselves.
      // GDevelop only initializes _innerArea automatically for objects with children.
      if (!o._innerArea) {
        o._innerArea = { min: [-50, -50, -50], max: [50, 50, 50] };
        o.invalidateTransformation();
      }
      const game = o.getRuntimeScene().getGame(), ca = cache(game), c = config(o), [gk, mk] = keys(c);
      const previous = states.get(o);
      const group = o.get3DRendererObject();
      if (previous && previous.gk === gk && previous.mk === mk) {
        previous.mesh.castShadow = c.CastShadow; previous.mesh.receiveShadow = c.ReceiveShadow;
        if (previous.mesh.parent !== group) group.add(previous.mesh);
        return;
      }
      let geo, mat;
      try {
        geo = acquire(ca.geometry, gk, () => geometry(c));
        mat = acquire(ca.material, mk, () => material(ca, game, c));
      } catch (e) {
        if (geo) release(ca.geometry, gk);
        throw e;
      }
      const mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = c.CastShadow; mesh.receiveShadow = c.ReceiveShadow;
      mesh.name = 'PBR Primitive'; mesh.userData.pbrPrimitive = true;
      group.add(mesh);
      if (previous) { previous.mesh.removeFromParent(); release(ca.geometry, previous.gk); release(ca.material, previous.mk); }
      else ca.objects++;
      states.set(o, { mesh, ca, gk, mk }); ca.builds++;
    }
    function destroy(o) {
      const s = states.get(o);
      if (!s) return;
      states.delete(o); s.mesh.removeFromParent();
      release(s.ca.geometry, s.gk); release(s.ca.material, s.mk); s.ca.objects--;
    }
    function stats(game) {
      const c = cache(game);
      return { version: VERSION, objects: c.objects, geometries: c.geometry.size, materials: c.material.size, textures: c.texture.size, builds: c.builds };
    }
    return { version: VERSION, propertyNames: ["Shape", "Segments", "HeightSegments", "TorusTube", "Material", "Color", "Metalness", "Roughness", "EnvironmentIntensity", "BaseColorMap", "NormalMap", "ORMMap", "RoughnessMap", "MetalnessMap", "AOMap", "EmissiveMap", "AlphaMap", "DisplacementMap", "NormalStrength", "FlipNormalY", "AOIntensity", "EmissiveColor", "EmissiveIntensity", "RepeatU", "RepeatV", "OffsetU", "OffsetV", "UVRotation", "Anisotropy", "Blend", "Opacity", "AlphaTest", "Side", "CastShadow", "ReceiveShadow", "FlatShading", "Wireframe", "DepthWrite", "Clearcoat", "ClearcoatRoughness", "Transmission", "IOR", "Thickness", "DisplacementScale", "DisplacementBias"], apply, destroy, stats, state: o => states.get(o) };
  })();
}

for (const o of objects) gdjs.__pbrPrimitives3D.apply(o);
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onCreatedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onCreatedContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onCreatedContext.userFunc0x23d4328(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onHotReloadingContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onHotReloadingContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onHotReloadingContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onHotReloadingContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// PBR Primitives 3D. MIT. Runs inside extension lifecycle functions only.
if (!gdjs.__pbrPrimitives3D) {
  gdjs.__pbrPrimitives3D = (() => {
    const VERSION = '1.0.0';
    const games = new WeakMap();
    const states = new WeakMap();
    const numeric = (x, fallback, min, max) => Number.isFinite(+x) ? Math.min(max, Math.max(min, +x)) : fallback;
    const color = x => {
      const c = String(x || '255;255;255').split(';').map(v => numeric(v, 255, 0, 255) / 255);
      return new THREE.Color().setRGB(c[0], c[1], c[2], THREE.SRGBColorSpace);
    };
    function cache(game) {
      let c = games.get(game);
      if (!c) { c = { geometry: new Map(), material: new Map(), texture: new Map(), objects: 0, builds: 0 }; games.set(game, c); }
      return c;
    }
    function acquire(map, key, make) {
      let e = map.get(key);
      if (!e) { e = { value: make(), refs: 0 }; map.set(key, e); }
      e.refs++;
      return e.value;
    }
    function release(map, key) {
      const e = map.get(key);
      if (!e || --e.refs > 0) return;
      map.delete(key);
      e.value.dispose();
    }
    function config(o) {
      const get = n => o['_get' + n]();
      const c = {};
      for (const n of gdjs.__pbrPrimitives3D.propertyNames) c[n] = get(n);
      c.Segments = Math.round(numeric(c.Segments, 32, 3, 128));
      c.HeightSegments = Math.round(numeric(c.HeightSegments, 16, 1, 128));
      for (const n of ['Metalness', 'Roughness', 'Opacity', 'AlphaTest', 'Clearcoat', 'ClearcoatRoughness', 'Transmission']) c[n] = numeric(c[n], n === 'Roughness' ? .65 : n === 'Opacity' ? 1 : 0, 0, 1);
      c.IOR = numeric(c.IOR, 1.5, 1, 2.333);
      c.Thickness = numeric(c.Thickness, 0, 0, 10000);
      c.TorusTube = numeric(c.TorusTube, .3, .01, .95);
      c.NormalStrength = numeric(c.NormalStrength, 1, 0, 10);
      c.AOIntensity = numeric(c.AOIntensity, 1, 0, 10);
      c.EmissiveIntensity = numeric(c.EmissiveIntensity, 0, 0, 1000);
      c.EnvironmentIntensity = numeric(c.EnvironmentIntensity, 1, 0, 1000);
      c.DisplacementScale = numeric(c.DisplacementScale, 0, -10000, 10000);
      c.DisplacementBias = numeric(c.DisplacementBias, 0, -10000, 10000);
      c.RepeatU = numeric(c.RepeatU, 1, -10000, 10000);
      c.RepeatV = numeric(c.RepeatV, 1, -10000, 10000);
      c.OffsetU = numeric(c.OffsetU, 0, -10000, 10000);
      c.OffsetV = numeric(c.OffsetV, 0, -10000, 10000);
      c.UVRotation = numeric(c.UVRotation, 0, -360000, 360000);
      c.Anisotropy = Math.round(numeric(c.Anisotropy, 4, 1, 16));
      return c;
    }
    function geometry(c) {
      let g;
      const n = c.Segments, h = c.HeightSegments;
      const displaced = !!c.DisplacementMap && c.DisplacementScale !== 0;
      const flatHeight = displaced ? h : 1;
      switch (c.Shape) {
        case 'Sphere': g = new THREE.SphereGeometry(50, n, Math.max(2, h)); break;
        case 'Cylinder': g = new THREE.CylinderGeometry(50, 50, 100, n, flatHeight); g.rotateX(Math.PI / 2); break;
        case 'Cone': g = new THREE.ConeGeometry(50, 100, n, flatHeight); g.rotateX(Math.PI / 2); break;
        case 'Pyramid': g = new THREE.ConeGeometry(50, 100, 4, flatHeight); g.rotateY(Math.PI / 4); g.rotateX(Math.PI / 2); break;
        case 'TriangularPrism': g = new THREE.CylinderGeometry(50, 50, 100, 3, 1); g.rotateX(Math.PI / 2); break;
        case 'Plane': g = new THREE.PlaneGeometry(100, 100, displaced ? Math.min(n, 64) : 1, displaced ? Math.min(h, 64) : 1); break;
        case 'Triangle': {
          g = new THREE.BufferGeometry();
          g.setAttribute('position', new THREE.Float32BufferAttribute([-50, -50, 0, 50, -50, 0, 0, 50, 0], 3));
          g.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 1, 0, .5, 1], 2));
          g.computeVertexNormals(); break;
        }
        case 'Torus': g = new THREE.TorusGeometry(50 / (1 + c.TorusTube), 50 * c.TorusTube / (1 + c.TorusTube), Math.max(3, h), n); break;
        case 'Capsule': g = new THREE.CapsuleGeometry(25, 50, Math.min(h, 32), n); g.rotateX(Math.PI / 2); break;
        case 'Icosahedron': g = new THREE.IcosahedronGeometry(50, 0); break;
        case 'Octahedron': g = new THREE.OctahedronGeometry(50, 0); break;
        default: g = new THREE.BoxGeometry(100, 100, 100, displaced ? Math.min(n, 64) : 1, displaced ? Math.min(h, 64) : 1, displaced ? Math.min(n, 64) : 1);
      }
      if (c.Shape === 'Pyramid' || c.Shape === 'TriangularPrism') {
        const indexed = g; g = g.toNonIndexed(); indexed.dispose(); g.computeVertexNormals();
      }
      // Normalize bounds once: GDevelop Width/Height/Depth are the true dimensions.
      g.computeBoundingBox();
      const b = g.boundingBox, size = b.getSize(new THREE.Vector3()), center = b.getCenter(new THREE.Vector3());
      g.translate(-center.x, -center.y, -center.z);
      g.scale(size.x ? 100 / size.x : 1, size.y ? 100 / size.y : 1, size.z ? 100 / size.z : 1);
      g.computeBoundingBox(); g.computeBoundingSphere();
      return g;
    }
    function texture(ca, game, name, srgb, c, leases) {
      if (!name) return null;
      const k = JSON.stringify([name, srgb, c.RepeatU, c.RepeatV, c.OffsetU, c.OffsetV, c.UVRotation, c.Anisotropy]);
      const t = acquire(ca.texture, k, () => {
        // Never mutate engine-owned image textures. Source pixels remain shared.
        const t = game.getImageManager().getThreeTexture(name).clone();
        t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
        t.wrapS = t.wrapT = THREE.RepeatWrapping;
        t.repeat.set(c.RepeatU, c.RepeatV); t.offset.set(c.OffsetU, c.OffsetV);
        t.center.set(.5, .5); t.rotation = c.UVRotation * Math.PI / 180;
        t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter; t.magFilter = THREE.LinearFilter;
        const renderer = game.getRenderer().getThreeRenderer();
        const max = renderer ? renderer.capabilities.getMaxAnisotropy() : 1;
        t.anisotropy = Math.min(c.Anisotropy, max);
        t.needsUpdate = true;
        return t;
      });
      leases.push(k); return t;
    }
    function material(ca, game, c) {
      const leases = [];
      let m;
      try {
        const physical = c.Material === 'Physical' || c.Clearcoat > 0 || c.Transmission > 0;
        m = physical ? new THREE.MeshPhysicalMaterial() : new THREE.MeshStandardMaterial();
        m.color.copy(color(c.Color)); m.roughness = c.Roughness; m.metalness = c.Metalness;
        m.emissive.copy(color(c.EmissiveColor)); m.emissiveIntensity = c.EmissiveIntensity;
        m.envMapIntensity = c.EnvironmentIntensity;
        m.opacity = c.Opacity; m.transparent = c.Blend === 'Blend' || c.Opacity < 1 || c.Transmission > 0;
        m.alphaTest = c.Blend === 'Mask' ? c.AlphaTest : 0;
        m.depthWrite = c.DepthWrite && (!m.transparent || c.Transmission > 0);
        m.side = c.Side === 'Double' ? THREE.DoubleSide : c.Side === 'Back' ? THREE.BackSide : THREE.FrontSide;
        m.flatShading = c.FlatShading; m.wireframe = c.Wireframe;
        const map = (n, srgb = false) => texture(ca, game, c[n], srgb, c, leases);
        m.map = map('BaseColorMap', true); m.normalMap = map('NormalMap');
        m.normalScale.set(c.NormalStrength, c.FlipNormalY ? -c.NormalStrength : c.NormalStrength);
        m.roughnessMap = c.RoughnessMap ? map('RoughnessMap') : map('ORMMap');
        m.metalnessMap = c.MetalnessMap ? map('MetalnessMap') : map('ORMMap');
        m.aoMap = c.AOMap ? map('AOMap') : map('ORMMap'); m.aoMapIntensity = c.AOIntensity;
        m.emissiveMap = map('EmissiveMap', true); m.alphaMap = map('AlphaMap');
        m.displacementMap = map('DisplacementMap'); m.displacementScale = c.DisplacementScale; m.displacementBias = c.DisplacementBias;
        if (physical) {
          m.clearcoat = c.Clearcoat; m.clearcoatRoughness = c.ClearcoatRoughness;
          m.transmission = c.Transmission; m.ior = c.IOR; m.thickness = c.Thickness;
        }
        const dispose = m.dispose.bind(m);
        m.dispose = () => { dispose(); for (const k of leases) release(ca.texture, k); };
        return m;
      } catch (e) {
        if (m) m.dispose();
        for (const k of leases) release(ca.texture, k);
        throw e;
      }
    }
    function keys(c) {
      const shape = c.Shape;
      const faceted = ['Cube', 'Triangle', 'Icosahedron', 'Octahedron'].includes(shape);
      const displaced = !!c.DisplacementMap && c.DisplacementScale !== 0;
      const g = JSON.stringify([shape, faceted && !displaced ? 0 : c.Segments, faceted && !displaced ? 0 : c.HeightSegments, shape === 'Torus' ? c.TorusTube : 0, displaced]);
      const mc = { ...c };
      for (const k of ['Shape', 'Segments', 'HeightSegments', 'TorusTube', 'CastShadow', 'ReceiveShadow']) delete mc[k];
      return [g, JSON.stringify(mc)];
    }
    function apply(o) {
      // Childless custom renderers must declare their local bounds themselves.
      // GDevelop only initializes _innerArea automatically for objects with children.
      if (!o._innerArea) {
        o._innerArea = { min: [-50, -50, -50], max: [50, 50, 50] };
        o.invalidateTransformation();
      }
      const game = o.getRuntimeScene().getGame(), ca = cache(game), c = config(o), [gk, mk] = keys(c);
      const previous = states.get(o);
      const group = o.get3DRendererObject();
      if (previous && previous.gk === gk && previous.mk === mk) {
        previous.mesh.castShadow = c.CastShadow; previous.mesh.receiveShadow = c.ReceiveShadow;
        if (previous.mesh.parent !== group) group.add(previous.mesh);
        return;
      }
      let geo, mat;
      try {
        geo = acquire(ca.geometry, gk, () => geometry(c));
        mat = acquire(ca.material, mk, () => material(ca, game, c));
      } catch (e) {
        if (geo) release(ca.geometry, gk);
        throw e;
      }
      const mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = c.CastShadow; mesh.receiveShadow = c.ReceiveShadow;
      mesh.name = 'PBR Primitive'; mesh.userData.pbrPrimitive = true;
      group.add(mesh);
      if (previous) { previous.mesh.removeFromParent(); release(ca.geometry, previous.gk); release(ca.material, previous.mk); }
      else ca.objects++;
      states.set(o, { mesh, ca, gk, mk }); ca.builds++;
    }
    function destroy(o) {
      const s = states.get(o);
      if (!s) return;
      states.delete(o); s.mesh.removeFromParent();
      release(s.ca.geometry, s.gk); release(s.ca.material, s.mk); s.ca.objects--;
    }
    function stats(game) {
      const c = cache(game);
      return { version: VERSION, objects: c.objects, geometries: c.geometry.size, materials: c.material.size, textures: c.texture.size, builds: c.builds };
    }
    return { version: VERSION, propertyNames: ["Shape", "Segments", "HeightSegments", "TorusTube", "Material", "Color", "Metalness", "Roughness", "EnvironmentIntensity", "BaseColorMap", "NormalMap", "ORMMap", "RoughnessMap", "MetalnessMap", "AOMap", "EmissiveMap", "AlphaMap", "DisplacementMap", "NormalStrength", "FlipNormalY", "AOIntensity", "EmissiveColor", "EmissiveIntensity", "RepeatU", "RepeatV", "OffsetU", "OffsetV", "UVRotation", "Anisotropy", "Blend", "Opacity", "AlphaTest", "Side", "CastShadow", "ReceiveShadow", "FlatShading", "Wireframe", "DepthWrite", "Clearcoat", "ClearcoatRoughness", "Transmission", "IOR", "Thickness", "DisplacementScale", "DisplacementBias"], apply, destroy, stats, state: o => states.get(o) };
  })();
}

for (const o of objects) gdjs.__pbrPrimitives3D.apply(o);
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onHotReloadingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onHotReloadingContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onHotReloadingContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onHotReloadingContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onHotReloading = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onHotReloadingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onHotReloadingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onHotReloadingContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onDestroyContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onDestroyContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onDestroyContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (gdjs.__pbrPrimitives3D) for (const o of objects) gdjs.__pbrPrimitives3D.destroy(o);
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onDestroyContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onDestroyContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onDestroyContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.onDestroyContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ApplyPropertiesContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ApplyPropertiesContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ApplyPropertiesContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ApplyPropertiesContext.userFunc0x2cca7e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) gdjs.__pbrPrimitives3D.apply(o);
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ApplyPropertiesContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ApplyPropertiesContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ApplyPropertiesContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ApplyPropertiesContext.userFunc0x2cca7e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ApplyProperties = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ApplyPropertiesContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ApplyPropertiesContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ApplyPropertiesContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetShapeContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetShapeContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetShapeContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetShapeContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getShape() === v) continue; o._setShape(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetShapeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetShapeContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetShapeContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetShapeContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetShape = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetShapeContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetShapeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetShapeContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SegmentsContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SegmentsContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SegmentsContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SegmentsContext.userFunc0x2cca7e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getSegments() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SegmentsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SegmentsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SegmentsContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SegmentsContext.userFunc0x2cca7e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.Segments = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SegmentsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SegmentsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SegmentsContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetSegmentsContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetSegmentsContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetSegmentsContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetSegmentsContext.userFunc0x2cca7e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getSegments() === v) continue; o._setSegments(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetSegmentsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetSegmentsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetSegmentsContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetSegmentsContext.userFunc0x2cca7e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetSegments = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetSegmentsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetSegmentsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetSegmentsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.HeightSegmentsContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.HeightSegmentsContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.HeightSegmentsContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.HeightSegmentsContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getHeightSegments() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.HeightSegmentsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.HeightSegmentsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.HeightSegmentsContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.HeightSegmentsContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.HeightSegments = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.HeightSegmentsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.HeightSegmentsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.HeightSegmentsContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetHeightSegmentsContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetHeightSegmentsContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetHeightSegmentsContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetHeightSegmentsContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getHeightSegments() === v) continue; o._setHeightSegments(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetHeightSegmentsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetHeightSegmentsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetHeightSegmentsContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetHeightSegmentsContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetHeightSegments = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetHeightSegmentsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetHeightSegmentsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetHeightSegmentsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.TorusTubeContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.TorusTubeContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.TorusTubeContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.TorusTubeContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getTorusTube() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.TorusTubeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.TorusTubeContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.TorusTubeContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.TorusTubeContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.TorusTube = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.TorusTubeContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.TorusTubeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.TorusTubeContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetTorusTubeContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetTorusTubeContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetTorusTubeContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetTorusTubeContext.userFunc0x2cca7e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getTorusTube() === v) continue; o._setTorusTube(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetTorusTubeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetTorusTubeContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetTorusTubeContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetTorusTubeContext.userFunc0x2cca7e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetTorusTube = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetTorusTubeContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetTorusTubeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetTorusTubeContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MaterialContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MaterialContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MaterialContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MaterialContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getMaterial() : "";
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MaterialContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MaterialContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MaterialContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MaterialContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.Material = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MaterialContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MaterialContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MaterialContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMaterialContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMaterialContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMaterialContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMaterialContext.userFunc0x2cca7e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getMaterial() === v) continue; o._setMaterial(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMaterialContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMaterialContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMaterialContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMaterialContext.userFunc0x2cca7e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMaterial = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMaterialContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMaterialContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMaterialContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ColorContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ColorContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ColorContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ColorContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getColor() : "";
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ColorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ColorContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ColorContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.Color = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ColorContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetColorContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetColorContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetColorContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetColorContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getColor() === v) continue; o._setColor(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetColorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetColorContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetColorContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetColor = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetColorContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MetalnessContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MetalnessContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MetalnessContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MetalnessContext.userFunc0x2cca7e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getMetalness() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MetalnessContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MetalnessContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MetalnessContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MetalnessContext.userFunc0x2cca7e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.Metalness = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MetalnessContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MetalnessContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MetalnessContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMetalnessContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMetalnessContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMetalnessContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMetalnessContext.userFunc0x2cca7e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getMetalness() === v) continue; o._setMetalness(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMetalnessContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMetalnessContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMetalnessContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMetalnessContext.userFunc0x2cca7e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMetalness = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMetalnessContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMetalnessContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMetalnessContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RoughnessContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RoughnessContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RoughnessContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RoughnessContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getRoughness() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RoughnessContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RoughnessContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RoughnessContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RoughnessContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.Roughness = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RoughnessContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RoughnessContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RoughnessContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRoughnessContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRoughnessContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRoughnessContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRoughnessContext.userFunc0x2cca7e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getRoughness() === v) continue; o._setRoughness(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRoughnessContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRoughnessContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRoughnessContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRoughnessContext.userFunc0x2cca7e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRoughness = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRoughnessContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRoughnessContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRoughnessContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EnvironmentIntensityContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EnvironmentIntensityContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EnvironmentIntensityContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EnvironmentIntensityContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getEnvironmentIntensity() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EnvironmentIntensityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EnvironmentIntensityContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EnvironmentIntensityContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EnvironmentIntensityContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EnvironmentIntensity = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EnvironmentIntensityContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EnvironmentIntensityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EnvironmentIntensityContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEnvironmentIntensityContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEnvironmentIntensityContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEnvironmentIntensityContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEnvironmentIntensityContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getEnvironmentIntensity() === v) continue; o._setEnvironmentIntensity(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEnvironmentIntensityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEnvironmentIntensityContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEnvironmentIntensityContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEnvironmentIntensityContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEnvironmentIntensity = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEnvironmentIntensityContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEnvironmentIntensityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEnvironmentIntensityContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.BaseColorMapContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.BaseColorMapContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.BaseColorMapContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.BaseColorMapContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getBaseColorMap() : "";
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.BaseColorMapContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.BaseColorMapContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.BaseColorMapContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.BaseColorMapContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.BaseColorMap = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.BaseColorMapContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.BaseColorMapContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.BaseColorMapContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetBaseColorMapContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetBaseColorMapContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetBaseColorMapContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetBaseColorMapContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getBaseColorMap() === v) continue; o._setBaseColorMap(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetBaseColorMapContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetBaseColorMapContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetBaseColorMapContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetBaseColorMapContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetBaseColorMap = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetBaseColorMapContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetBaseColorMapContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetBaseColorMapContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.NormalMapContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.NormalMapContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.NormalMapContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.NormalMapContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getNormalMap() : "";
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.NormalMapContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.NormalMapContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.NormalMapContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.NormalMapContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.NormalMap = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.NormalMapContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.NormalMapContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.NormalMapContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetNormalMapContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetNormalMapContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetNormalMapContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetNormalMapContext.userFunc0x2cca7e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getNormalMap() === v) continue; o._setNormalMap(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetNormalMapContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetNormalMapContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetNormalMapContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetNormalMapContext.userFunc0x2cca7e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetNormalMap = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetNormalMapContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetNormalMapContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetNormalMapContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ORMMapContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ORMMapContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ORMMapContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ORMMapContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getORMMap() : "";
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ORMMapContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ORMMapContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ORMMapContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ORMMapContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ORMMap = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ORMMapContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ORMMapContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ORMMapContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetORMMapContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetORMMapContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetORMMapContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetORMMapContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getORMMap() === v) continue; o._setORMMap(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetORMMapContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetORMMapContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetORMMapContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetORMMapContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetORMMap = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetORMMapContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetORMMapContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetORMMapContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RoughnessMapContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RoughnessMapContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RoughnessMapContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RoughnessMapContext.userFunc0x2cca7e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getRoughnessMap() : "";
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RoughnessMapContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RoughnessMapContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RoughnessMapContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RoughnessMapContext.userFunc0x2cca7e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RoughnessMap = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RoughnessMapContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RoughnessMapContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RoughnessMapContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRoughnessMapContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRoughnessMapContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRoughnessMapContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRoughnessMapContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getRoughnessMap() === v) continue; o._setRoughnessMap(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRoughnessMapContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRoughnessMapContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRoughnessMapContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRoughnessMapContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRoughnessMap = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRoughnessMapContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRoughnessMapContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRoughnessMapContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MetalnessMapContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MetalnessMapContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MetalnessMapContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MetalnessMapContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getMetalnessMap() : "";
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MetalnessMapContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MetalnessMapContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MetalnessMapContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MetalnessMapContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MetalnessMap = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MetalnessMapContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MetalnessMapContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.MetalnessMapContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMetalnessMapContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMetalnessMapContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMetalnessMapContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMetalnessMapContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getMetalnessMap() === v) continue; o._setMetalnessMap(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMetalnessMapContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMetalnessMapContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMetalnessMapContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMetalnessMapContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMetalnessMap = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMetalnessMapContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMetalnessMapContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetMetalnessMapContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AOMapContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AOMapContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AOMapContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AOMapContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getAOMap() : "";
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AOMapContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AOMapContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AOMapContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AOMapContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AOMap = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AOMapContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AOMapContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AOMapContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAOMapContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAOMapContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAOMapContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAOMapContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getAOMap() === v) continue; o._setAOMap(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAOMapContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAOMapContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAOMapContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAOMapContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAOMap = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAOMapContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAOMapContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAOMapContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveMapContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveMapContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveMapContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveMapContext.userFunc0x2cca7e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getEmissiveMap() : "";
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveMapContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveMapContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveMapContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveMapContext.userFunc0x2cca7e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveMap = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveMapContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveMapContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveMapContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveMapContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveMapContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveMapContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveMapContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getEmissiveMap() === v) continue; o._setEmissiveMap(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveMapContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveMapContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveMapContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveMapContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveMap = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveMapContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveMapContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveMapContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AlphaMapContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AlphaMapContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AlphaMapContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AlphaMapContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getAlphaMap() : "";
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AlphaMapContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AlphaMapContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AlphaMapContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AlphaMapContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AlphaMap = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AlphaMapContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AlphaMapContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AlphaMapContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAlphaMapContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAlphaMapContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAlphaMapContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAlphaMapContext.userFunc0x2cca7e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getAlphaMap() === v) continue; o._setAlphaMap(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAlphaMapContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAlphaMapContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAlphaMapContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAlphaMapContext.userFunc0x2cca7e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAlphaMap = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAlphaMapContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAlphaMapContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAlphaMapContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementMapContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementMapContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementMapContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementMapContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getDisplacementMap() : "";
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementMapContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementMapContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementMapContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementMapContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementMap = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementMapContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementMapContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementMapContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementMapContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementMapContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementMapContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementMapContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getDisplacementMap() === v) continue; o._setDisplacementMap(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementMapContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementMapContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementMapContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementMapContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementMap = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementMapContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementMapContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementMapContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.NormalStrengthContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.NormalStrengthContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.NormalStrengthContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.NormalStrengthContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getNormalStrength() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.NormalStrengthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.NormalStrengthContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.NormalStrengthContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.NormalStrengthContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.NormalStrength = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.NormalStrengthContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.NormalStrengthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.NormalStrengthContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetNormalStrengthContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetNormalStrengthContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetNormalStrengthContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetNormalStrengthContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getNormalStrength() === v) continue; o._setNormalStrength(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetNormalStrengthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetNormalStrengthContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetNormalStrengthContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetNormalStrengthContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetNormalStrength = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetNormalStrengthContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetNormalStrengthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetNormalStrengthContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.FlipNormalYContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.FlipNormalYContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.FlipNormalYContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.FlipNormalYContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getFlipNormalY() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.FlipNormalYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.FlipNormalYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.FlipNormalYContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.FlipNormalYContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.FlipNormalY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.FlipNormalYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.FlipNormalYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.FlipNormalYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetFlipNormalYContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetFlipNormalYContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetFlipNormalYContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetFlipNormalYContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getFlipNormalY() === v) continue; o._setFlipNormalY(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetFlipNormalYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetFlipNormalYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetFlipNormalYContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetFlipNormalYContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetFlipNormalY = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetFlipNormalYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetFlipNormalYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetFlipNormalYContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AOIntensityContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AOIntensityContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AOIntensityContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AOIntensityContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getAOIntensity() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AOIntensityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AOIntensityContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AOIntensityContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AOIntensityContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AOIntensity = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AOIntensityContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AOIntensityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AOIntensityContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAOIntensityContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAOIntensityContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAOIntensityContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAOIntensityContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getAOIntensity() === v) continue; o._setAOIntensity(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAOIntensityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAOIntensityContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAOIntensityContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAOIntensityContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAOIntensity = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAOIntensityContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAOIntensityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAOIntensityContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveColorContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveColorContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveColorContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveColorContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getEmissiveColor() : "";
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveColorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveColorContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveColorContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveColor = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveColorContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveColorContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveColorContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveColorContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveColorContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getEmissiveColor() === v) continue; o._setEmissiveColor(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveColorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveColorContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveColorContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveColor = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveColorContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveIntensityContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveIntensityContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveIntensityContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveIntensityContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getEmissiveIntensity() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveIntensityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveIntensityContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveIntensityContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveIntensityContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveIntensity = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveIntensityContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveIntensityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.EmissiveIntensityContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveIntensityContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveIntensityContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveIntensityContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveIntensityContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getEmissiveIntensity() === v) continue; o._setEmissiveIntensity(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveIntensityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveIntensityContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveIntensityContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveIntensityContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveIntensity = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveIntensityContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveIntensityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetEmissiveIntensityContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RepeatUContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RepeatUContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RepeatUContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RepeatUContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getRepeatU() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RepeatUContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RepeatUContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RepeatUContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RepeatUContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RepeatU = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RepeatUContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RepeatUContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RepeatUContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRepeatUContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRepeatUContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRepeatUContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRepeatUContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getRepeatU() === v) continue; o._setRepeatU(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRepeatUContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRepeatUContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRepeatUContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRepeatUContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRepeatU = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRepeatUContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRepeatUContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRepeatUContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RepeatVContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RepeatVContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RepeatVContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RepeatVContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getRepeatV() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RepeatVContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RepeatVContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RepeatVContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RepeatVContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RepeatV = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RepeatVContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RepeatVContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.RepeatVContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRepeatVContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRepeatVContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRepeatVContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRepeatVContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getRepeatV() === v) continue; o._setRepeatV(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRepeatVContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRepeatVContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRepeatVContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRepeatVContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRepeatV = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRepeatVContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRepeatVContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetRepeatVContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OffsetUContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OffsetUContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OffsetUContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OffsetUContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getOffsetU() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OffsetUContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OffsetUContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OffsetUContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OffsetUContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OffsetU = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OffsetUContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OffsetUContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OffsetUContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOffsetUContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOffsetUContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOffsetUContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOffsetUContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getOffsetU() === v) continue; o._setOffsetU(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOffsetUContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOffsetUContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOffsetUContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOffsetUContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOffsetU = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOffsetUContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOffsetUContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOffsetUContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OffsetVContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OffsetVContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OffsetVContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OffsetVContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getOffsetV() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OffsetVContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OffsetVContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OffsetVContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OffsetVContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OffsetV = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OffsetVContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OffsetVContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OffsetVContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOffsetVContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOffsetVContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOffsetVContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOffsetVContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getOffsetV() === v) continue; o._setOffsetV(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOffsetVContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOffsetVContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOffsetVContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOffsetVContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOffsetV = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOffsetVContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOffsetVContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOffsetVContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.UVRotationContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.UVRotationContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.UVRotationContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.UVRotationContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getUVRotation() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.UVRotationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.UVRotationContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.UVRotationContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.UVRotationContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.UVRotation = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.UVRotationContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.UVRotationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.UVRotationContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetUVRotationContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetUVRotationContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetUVRotationContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetUVRotationContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getUVRotation() === v) continue; o._setUVRotation(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetUVRotationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetUVRotationContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetUVRotationContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetUVRotationContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetUVRotation = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetUVRotationContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetUVRotationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetUVRotationContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AnisotropyContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AnisotropyContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AnisotropyContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AnisotropyContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getAnisotropy() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AnisotropyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AnisotropyContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AnisotropyContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AnisotropyContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.Anisotropy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AnisotropyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AnisotropyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AnisotropyContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAnisotropyContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAnisotropyContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAnisotropyContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAnisotropyContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getAnisotropy() === v) continue; o._setAnisotropy(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAnisotropyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAnisotropyContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAnisotropyContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAnisotropyContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAnisotropy = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAnisotropyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAnisotropyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAnisotropyContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.BlendContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.BlendContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.BlendContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.BlendContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getBlend() : "";
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.BlendContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.BlendContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.BlendContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.BlendContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.Blend = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.BlendContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.BlendContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.BlendContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetBlendContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetBlendContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetBlendContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetBlendContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getBlend() === v) continue; o._setBlend(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetBlendContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetBlendContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetBlendContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetBlendContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetBlend = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetBlendContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetBlendContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetBlendContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OpacityContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OpacityContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OpacityContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OpacityContext.userFunc0x2cca7e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getOpacity() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OpacityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OpacityContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OpacityContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OpacityContext.userFunc0x2cca7e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.Opacity = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OpacityContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OpacityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.OpacityContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOpacityContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOpacityContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOpacityContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOpacityContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getOpacity() === v) continue; o._setOpacity(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOpacityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOpacityContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOpacityContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOpacityContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOpacity = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOpacityContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOpacityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetOpacityContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AlphaTestContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AlphaTestContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AlphaTestContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AlphaTestContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getAlphaTest() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AlphaTestContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AlphaTestContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AlphaTestContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AlphaTestContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AlphaTest = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AlphaTestContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AlphaTestContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.AlphaTestContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAlphaTestContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAlphaTestContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAlphaTestContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAlphaTestContext.userFunc0x2cca7e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getAlphaTest() === v) continue; o._setAlphaTest(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAlphaTestContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAlphaTestContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAlphaTestContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAlphaTestContext.userFunc0x2cca7e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAlphaTest = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAlphaTestContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAlphaTestContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetAlphaTestContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SideContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SideContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SideContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SideContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getSide() : "";
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SideContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SideContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SideContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SideContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.Side = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SideContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SideContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SideContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetSideContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetSideContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetSideContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetSideContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getSide() === v) continue; o._setSide(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetSideContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetSideContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetSideContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetSideContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetSide = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetSideContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetSideContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetSideContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.CastShadowContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.CastShadowContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.CastShadowContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.CastShadowContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getCastShadow() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.CastShadowContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.CastShadowContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.CastShadowContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.CastShadowContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.CastShadow = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.CastShadowContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.CastShadowContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.CastShadowContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetCastShadowContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetCastShadowContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetCastShadowContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetCastShadowContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getCastShadow() === v) continue; o._setCastShadow(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetCastShadowContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetCastShadowContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetCastShadowContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetCastShadowContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetCastShadow = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetCastShadowContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetCastShadowContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetCastShadowContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ReceiveShadowContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ReceiveShadowContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ReceiveShadowContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ReceiveShadowContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getReceiveShadow() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ReceiveShadowContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ReceiveShadowContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ReceiveShadowContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ReceiveShadowContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ReceiveShadow = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ReceiveShadowContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ReceiveShadowContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ReceiveShadowContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetReceiveShadowContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetReceiveShadowContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetReceiveShadowContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetReceiveShadowContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getReceiveShadow() === v) continue; o._setReceiveShadow(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetReceiveShadowContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetReceiveShadowContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetReceiveShadowContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetReceiveShadowContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetReceiveShadow = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetReceiveShadowContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetReceiveShadowContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetReceiveShadowContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.FlatShadingContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.FlatShadingContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.FlatShadingContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.FlatShadingContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getFlatShading() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.FlatShadingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.FlatShadingContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.FlatShadingContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.FlatShadingContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.FlatShading = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.FlatShadingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.FlatShadingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.FlatShadingContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetFlatShadingContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetFlatShadingContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetFlatShadingContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetFlatShadingContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getFlatShading() === v) continue; o._setFlatShading(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetFlatShadingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetFlatShadingContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetFlatShadingContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetFlatShadingContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetFlatShading = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetFlatShadingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetFlatShadingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetFlatShadingContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.WireframeContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.WireframeContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.WireframeContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.WireframeContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getWireframe() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.WireframeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.WireframeContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.WireframeContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.WireframeContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.Wireframe = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.WireframeContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.WireframeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.WireframeContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetWireframeContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetWireframeContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetWireframeContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetWireframeContext.userFunc0x2cca7e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getWireframe() === v) continue; o._setWireframe(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetWireframeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetWireframeContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetWireframeContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetWireframeContext.userFunc0x2cca7e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetWireframe = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetWireframeContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetWireframeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetWireframeContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DepthWriteContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DepthWriteContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DepthWriteContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DepthWriteContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getDepthWrite() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DepthWriteContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DepthWriteContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DepthWriteContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DepthWriteContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DepthWrite = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DepthWriteContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DepthWriteContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DepthWriteContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDepthWriteContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDepthWriteContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDepthWriteContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDepthWriteContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getDepthWrite() === v) continue; o._setDepthWrite(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDepthWriteContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDepthWriteContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDepthWriteContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDepthWriteContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDepthWrite = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDepthWriteContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDepthWriteContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDepthWriteContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ClearcoatContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ClearcoatContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ClearcoatContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ClearcoatContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getClearcoat() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ClearcoatContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ClearcoatContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ClearcoatContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ClearcoatContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.Clearcoat = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ClearcoatContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ClearcoatContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ClearcoatContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetClearcoatContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetClearcoatContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetClearcoatContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetClearcoatContext.userFunc0x2cca7e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getClearcoat() === v) continue; o._setClearcoat(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetClearcoatContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetClearcoatContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetClearcoatContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetClearcoatContext.userFunc0x2cca7e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetClearcoat = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetClearcoatContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetClearcoatContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetClearcoatContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ClearcoatRoughnessContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ClearcoatRoughnessContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ClearcoatRoughnessContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ClearcoatRoughnessContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getClearcoatRoughness() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ClearcoatRoughnessContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ClearcoatRoughnessContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ClearcoatRoughnessContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ClearcoatRoughnessContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ClearcoatRoughness = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ClearcoatRoughnessContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ClearcoatRoughnessContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ClearcoatRoughnessContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetClearcoatRoughnessContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetClearcoatRoughnessContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetClearcoatRoughnessContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetClearcoatRoughnessContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getClearcoatRoughness() === v) continue; o._setClearcoatRoughness(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetClearcoatRoughnessContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetClearcoatRoughnessContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetClearcoatRoughnessContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetClearcoatRoughnessContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetClearcoatRoughness = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetClearcoatRoughnessContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetClearcoatRoughnessContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetClearcoatRoughnessContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.TransmissionContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.TransmissionContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.TransmissionContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.TransmissionContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getTransmission() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.TransmissionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.TransmissionContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.TransmissionContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.TransmissionContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.Transmission = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.TransmissionContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.TransmissionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.TransmissionContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetTransmissionContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetTransmissionContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetTransmissionContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetTransmissionContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getTransmission() === v) continue; o._setTransmission(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetTransmissionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetTransmissionContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetTransmissionContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetTransmissionContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetTransmission = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetTransmissionContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetTransmissionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetTransmissionContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.IORContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.IORContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.IORContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.IORContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getIOR() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.IORContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.IORContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.IORContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.IORContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.IOR = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.IORContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.IORContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.IORContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetIORContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetIORContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetIORContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetIORContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getIOR() === v) continue; o._setIOR(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetIORContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetIORContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetIORContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetIORContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetIOR = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetIORContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetIORContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetIORContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ThicknessContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ThicknessContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ThicknessContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ThicknessContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getThickness() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ThicknessContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ThicknessContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ThicknessContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ThicknessContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.Thickness = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ThicknessContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ThicknessContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.ThicknessContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetThicknessContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetThicknessContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetThicknessContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetThicknessContext.userFunc0x2cca7e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getThickness() === v) continue; o._setThickness(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetThicknessContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetThicknessContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetThicknessContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetThicknessContext.userFunc0x2cca7e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetThickness = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetThicknessContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetThicknessContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetThicknessContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementScaleContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementScaleContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementScaleContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementScaleContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getDisplacementScale() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementScaleContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementScaleContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementScaleContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementScale = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementScaleContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementScaleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementScaleContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementScaleContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementScaleContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementScaleContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementScaleContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getDisplacementScale() === v) continue; o._setDisplacementScale(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementScaleContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementScaleContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementScaleContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementScale = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementScaleContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementScaleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementScaleContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementBiasContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementBiasContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementBiasContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementBiasContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects.length ? objects[0]._getDisplacementBias() : 0;
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementBiasContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementBiasContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementBiasContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementBiasContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementBias = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementBiasContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementBiasContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.DisplacementBiasContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementBiasContext = {};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementBiasContext.idToCallbackMap = new Map();
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementBiasContext.GDObjectObjects1= [];


gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementBiasContext.userFunc0xa53e350 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
for (const o of objects) { const v = eventsFunctionContext.getArgument("Value"); if (o._getDisplacementBias() === v) continue; o._setDisplacementBias(v); gdjs.__pbrPrimitives3D.apply(o); }
};
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementBiasContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementBiasContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementBiasContext.GDObjectObjects1;
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementBiasContext.userFunc0xa53e350(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementBias = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PBRPrimitives3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PBRPrimitives3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementBiasContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementBiasContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.SetDisplacementBiasContext.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("PBRPrimitives3D::Primitive3D", gdjs.evtsExt__PBRPrimitives3D__Primitive3D.Primitive3D);
