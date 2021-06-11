//Display today's date
var todayDate = moment().format("dddd, MMM Do YYYY");
$("#currentDate").html(todayDate);

var timeBlock = parseInt($(".time-block").attr("id"));
function hourExpires() {
  // create element past, future,
  var currentHour = moment().hour(); //number

  if (currentHour === timeBlock) {
    $(this).addClass("present");
    //   $(this).removeClass("past");
    //   $(this).removeClass("future");
  }
}
//Adding saveBtn click listener

// $(function () {
//   $(".saveBtn").on("click", function () {
//     var input = document.getElementById("textarea" + number).value;
//     var time = $(this).parent().attr("id");

//     //save task to local storage
//     localStorage.setItem(time, input);
//   });
// });
