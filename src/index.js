import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import data from "./assets/jokes.json";
import getRandomInt from "./js/getRandomInt.js";
import getKanye from './js/kanye.js';
import getChuck from './js/chuck.js';
import CopyToClipboard from './js/copyboard.js'

$(document).ready(function() {
  $('#jokebtn').click(function() {
    let test = getRandomInt();
    $('#output').html(data.results[test].Joke);
  });
  $('#1stbtn').click(function() {
    clearFields();
    makeApiCall();
  });
  $('#2ndbtn').click(function() {
    clearChucksFields();
    makeChucksApiCall();
  });
});

$('.outputbox').click(function() {
  CopyToClipboard('output');
  console.log('click');
});

function clearFields() {
  $('#output').text("");
}

function getElements(response) {
  if (response.quote) {
    console.log(response.quote)
    $('#output').text(`"${response.quote}"`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall() {
  const response = await getKanye.kanyeQuote();
  getElements(response);
}

function clearChucksFields() {
  $('#output').text("");
}

function getChucksElements(response) {
  if (response.value) {
    console.log(response.value)
    $('#output').text(`${response.value}`);
  } else {
    $('#showErrors').text(`There was an error: ${response}`);
  }
}

async function makeChucksApiCall() {
  const response = await getChuck.chuckJoke();
  getChucksElements(response);
}