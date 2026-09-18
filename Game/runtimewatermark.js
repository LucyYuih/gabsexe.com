var gdjs;
(function(gdjs) {
  // Branding-neutral compatibility shim.
  // Keeps the exported runtime API expected by runtimegame.js without rendering
  // the optional GDevelop watermark, links, logo or attribution UI.
  var watermark;
  (function(watermark) {
    class RuntimeWatermark {
      constructor() {}
      displayAtStartup() {}
      display() {}
    }
    watermark.RuntimeWatermark = RuntimeWatermark;
  })(watermark = gdjs.watermark || (gdjs.watermark = {}));
})(gdjs || (gdjs = {}));
