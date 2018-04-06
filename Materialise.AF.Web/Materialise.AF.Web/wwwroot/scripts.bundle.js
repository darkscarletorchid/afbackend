
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

;