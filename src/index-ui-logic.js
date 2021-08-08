import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Nasa from './business-logic.js';

function clearField(){
  $('#userDate').val("");
  $('.showPic').text("");
}

$(document).ready(function() {
  $('#nasaDate').click(function() {
    const date = $('#userDate').val();
    $('#userDate').val('');
    let promise = Nasa.getImages(date);

    promise.then(function(response) {
      const body = JSON.parse(response);
      clearField();
      $('.showPic').append(`<img src = ${body.hdurl} width="500" height="500">`);
      $('.showPic').val('');
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});
