import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {Nasa , Mars} from './business-logic.js';

function clearField(){
  $('#userDate').val("");
  $('.showPic').text("");
  $('.showSecPic').text('');
}

$(document).ready(function() {
  $('#nasaDate').click(function() {
    const date = $('#userDate').val();
    clearField();
    $('#userDate').val('');
    let promise = Nasa.getImages(date);
    let promise1 = Mars.getImages(date);

    promise.then(function(response) {
      const body = JSON.parse(response);
      // clearField();
      $('.showPic').append(`<img src = ${body.hdurl} width="500" height="500">`);
      // $('.showPic').append(`<img src = ${body.photos[0].img_src} width="500" height="500">`);
      $('.showPic').val('');
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });

    promise1.then(function(response){
      const body = JSON.parse(response);
      // clearField();
      $('.showSecPic').append(`<img src = ${body.photos[0].img_src} width="500" height="500">`);
      $('.showSecPic').val('');
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});
