"use strict";
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const timeWrap = document.querySelectorAll('.time-wrap');
  const timeWrapItem = document.querySelectorAll('.time-wrap .time');
  const btnMore = document.querySelectorAll('button.time');

  timeWrap.forEach((item, i) => {
    item.dataset.indexCardTimeBlock = i;
    document.querySelectorAll(`[data-index-card-time-block="${i}"] > .time`).forEach((item, i) => {

      item.dataset.indexTime = i + 1;
      if (item.dataset.indexTime > 4 && item.dataset.indexTime < timeWrapItem.length / timeWrap.length) {
        item.previousElementSibling.previousElementSibling.classList.add('d-none');
        item.classList.add('d-none');
      }
    });
  });
  
  btnMore.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const index = e.target.parentElement.getAttribute('data-index-card-time-block');
      const timeBlocks = document.querySelectorAll(`[data-index-card-time-block="${index}"] > .time.d-none`);

      timeBlocks.forEach(time => time.classList.remove('d-none'));
      e.target.remove();
    });
  });
});