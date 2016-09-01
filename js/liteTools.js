'use strict';

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('dragstart', function(event) {
      if (event.target.tagName === 'A') event.preventDefault();
    });
  });
})();

