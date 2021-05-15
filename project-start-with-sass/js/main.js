"use strict";

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var timeWrap = document.querySelectorAll('.time-wrap');
  var timeWrapItem = document.querySelectorAll('.time-wrap .time');
  var btnMore = document.querySelectorAll('button.time');
  timeWrap.forEach(function (item, i) {
    item.dataset.indexCardTimeBlock = i;
    var dataIndexCardTimeBlock = document.querySelectorAll("[data-index-card-time-block=\"".concat(i, "\"] > .time"));
    dataIndexCardTimeBlock.forEach(function (item, i) {
      item.dataset.indexTime = i + 1;

      if (item.dataset.indexTime > 4 && item.dataset.indexTime < dataIndexCardTimeBlock.length) {
        item.previousElementSibling.previousElementSibling.classList.add('d-none');
        item.classList.add('d-none');
      }
    });
  });
  btnMore.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var index = e.target.parentElement.getAttribute('data-index-card-time-block');
      var timeBlocks = document.querySelectorAll("[data-index-card-time-block=\"".concat(index, "\"] > .time.d-none"));
      timeBlocks.forEach(function (time) {
        return time.classList.remove('d-none');
      });
      e.target.remove();
    });
  });
});