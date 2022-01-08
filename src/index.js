import SpaceAge from './spaceage.js';
import LifeExp from './lifeexpect.js'; 
import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function(){
  $('#galacticAge').submit(function(event){
    event.preventDefault();
    $('#spaceLife').click(function(){
      const age = $('#age').val();
      const spaceAge = new SpaceAge(age);
      const spaceLife = new LifeExp(age);
      const mercury = spaceAge.mercuryAge(age);
      const mercuryLife = spaceLife.mercuryLife(age);
      $('#responseMercury').append("<p>You are " + mercury + " years old in Mercury years and have approximately " + mercuryLife + " Mercury years left to live!</p>");
      const venus = spaceAge.venusAge(age);
      const venusLife = spaceLife.venusLife(age);
      $('#responseVenus').append("<p>You are " + venus + " years old in Venus years and have approximately " + venusLife + " Venus years left to live!</p>");
      const mars = spaceAge.marsAge(age);
      const marsLife = spaceLife.marsLife(age);
      $('#responseMars').append("<p>You are " + mars + " years old in Mars years and have approximately " + marsLife + " Mars years left to live!</p>");
      const jupiter = spaceAge.jupiterAge(age);
      const jupiterLife = spaceLife.jupiterLife(age);
      $('#responseJupiter').append("<p>You are " + jupiter + " years old in Jupiter years and have approximately " + jupiterLife + " Jupiter years left to live!</p>");
    });
  });
});

