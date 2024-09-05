let myVar = 45;

console.log(myVar);

let counter = 0;

$(document).ready(function() {

  $('#mySpan').on('click', function() {
      console.log("Hello, World!");
  });

  $('#mySecondSpan').on('click', function() {
    $.ajax({
      type: 'GET',
      url: 'https://jsonplaceholder.org/posts',
      success: function(res) {
        console.log("Success");
        console.log(res);
      },
      error: function() {
        console.log("Error");
      }
    });
  });

  $.getJSON("./index.json", function(data) {
    console.log(data);
  });

  const btnAdd = $('#setToStorage');
  const btnPrint = $('#printFromStorage');

  btnAdd.on('click', () => {
    sessionStorage.setItem("storage" + counter, counter);
    counter++;
  });

  btnPrint.on('click', () => {
    console.log(Object.keys(sessionStorage));
  });

});