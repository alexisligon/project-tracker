//for welcome message and timer
var timer = setInterval(myTimer)

function myTimer() {
    var date = moment().format("[Today:] MMM Do, YYYY  h:mm:ss a");
    $(".date").text(date);
  }

  $( function() {
    $( "#datepicker" ).datepicker();
  } );