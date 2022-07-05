import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import getKanye from './js/kanye.js';
import getChuck from './js/chuck.js';
import data from "./assets/jokes.json"
//import ClassName from './Blank.js';
import getKanye from './kanye.js';


function clearFields() {
  $('#output').text("");
}

function getElements(response) {
  if (response.quote) {
    console.log(response.quote)
    $('#output').text(`${response.quote} `);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall() {
    const response = await getKanye.kanyeQuote();
    getElements(response);
  }

$(document).ready(function() {
  $('#1stbtn').click(function() {
    clearFields();
    makeApiCall();
  });
});

  function clearChucksFields() {
    $('#chucksOutput').text("");
}

function getChucksElements(response) {
  if (response.value) {
    console.log(response.value)
    $('#chucksoutput').text(`${response.value} `);
  } else {
    $('#chucksshowErrors').text(`There was an error: ${response}`);
  }
}

async function makeChucksApiCall() {
  const response = await getChuck.chuckJoke();
  getChucksElements(response);
}

$(document).ready(function() {
  $('#2ndbtn').click(function() {
    clearChucksFields();
    makeChucksApiCall();
  });
});

  


