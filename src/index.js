import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import data from "./assets/jokes.json";
import getRandomInt from "./getRandomInt.js";




$(document).ready(function() {
  let test = getRandomInt();
  console.log(data.results[test].Joke);
});


