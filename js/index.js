'use strict';

var writeUsBtn = document.querySelector('.write-us.button-decoration');
var writeUsPopup = document.querySelector('.modal.modal-write-us');
var closeWriteUs = document.querySelector('.close-write-us');
var closeMap = document.querySelector('.close-map');
var mapPopup = document.querySelector('.modal.modal-map');
var map = document.querySelector('.map');

map.onclick = function(event) {
  mapPopup.classList.toggle('hide');
};

writeUsBtn.onclick = function (event) {
  event.preventDefault();
  writeUsPopup.classList.toggle('hide');
};

closeWriteUs.onclick = function (event) {
  writeUsPopup.classList.toggle('hide');
};

closeMap.onclick = function (event) {
  mapPopup.classList.toggle('hide');
};
