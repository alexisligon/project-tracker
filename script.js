//for welcome message and timer
var timer = setInterval(myTimer)

function myTimer() {
    var date = moment().format("[Today:] MMM Do, YYYY  h:mm:ss a");
    $(".date").text(date);
  }

<<<<<<< HEAD
// var projectButton = $("#project-button")
// projectButton.on("click", function () {
// })
$('#myModal').on('shown.bs.modal', function () {
    $('#exampleModal').trigger('focus')
  })
=======
<<<<<<< HEAD
  $( function() {
    $( "#datepicker" ).datepicker();
  } );
=======
//displaying results to table
>>>>>>> f67066a52ee710ad2706da474f95db15d233d705
>>>>>>> 58b0a9ac42777fbe0717d88d0090c08c93c34495
