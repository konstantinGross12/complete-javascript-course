'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const request = new XMLHttpRequest();
request.open('GET', `https://api.first.org/data/v1/countries`);
request.send();

request.addEventListener('load', function () {
  console.log(this.responseText);
});
