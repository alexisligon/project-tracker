//for welcome message and timer
var timer = setInterval(myTimer)

function myTimer() {
    var date = moment().format("[Today:] MMM Do, YYYY  h:mm:ss a");
    $(".date").text(date);
  }

// var projectButton = $("#project-button")
// projectButton.on("click", function () {
// })
$('#myModal').on('shown.bs.modal', function () {
    $('#exampleModal').trigger('focus')
  })
