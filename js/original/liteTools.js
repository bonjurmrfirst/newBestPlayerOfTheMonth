'use strict';

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    let allImagesAndLinksElements = document.querySelectorAll('img, a');
    for (let i = 0; i < allImagesAndLinksElements.length; i++) {
      allImagesAndLinksElements[i].addEventListener('dragstart', function (event) {
        event.preventDefault();
      });
    }
  });
})();