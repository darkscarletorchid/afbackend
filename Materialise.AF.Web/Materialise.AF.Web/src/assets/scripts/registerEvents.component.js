
AFRAME.registerComponent('registerevents', {
  init: function () {
    var marker = this.el;

    marker.addEventListener('markerFound', function(e) {
      var markerId = marker.id;
      window.dispatchEvent(new CustomEvent("markerFound"));
    });

    marker.addEventListener('markerLost', function() {
    });
  }
});

AFRAME.registerComponent('loader', {
  init: function () {
    var scene = this.el;
    scene.addEventListener('loaded', function () {
      document.querySelector(".spinner").style.display = "none";
      console.log("loaded");
    });
  }
});

AFRAME.registerComponent('renderer-custom',
    {
        init: function() {
            var renderer = this.el.renderer;
            renderer.alpha = true;
            renderer.antialias = true;
            renderer.logarithmicDepthBuffer = true;
            this.el.renderer = renderer;
        }
    });
