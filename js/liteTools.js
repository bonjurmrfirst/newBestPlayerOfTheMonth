'use strict';

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var allImagesAndLinksElements = document.querySelectorAll('img, a');
    for (var i = 0; i < allImagesAndLinksElements.length; i++) {
      allImagesAndLinksElements[i].addEventListener('dragstart', function (event) {
        event.preventDefault();
      });
    }
  });
})();