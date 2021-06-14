//Display today's date
var todayDate = moment().format("dddd, MMM Do YYYY");
$("#currentDate").html(todayDate);

//define DOM elements
var currentHour = moment().hour(); //number
console.log(currentHour);

var element = document.getElementById("time-block");
var number = parseInt(element.getAttribute("data-index"));
console.log(number);

// for each function to loop / add css class
function hourExpires() {
  $("#time-block").each(function () {
    if (currentHour === number) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    } else if (currentHour > number) {
      $(this).removeClass("present");
      $(this).addClass("past");
      $(this).removeClass("future");
    } else $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
  });
}

//Adding saveBtn click listener
$(function () {
  $(".saveBtn").click(function () {
    var text = $(this).val();
    console.log(text);
  });
});


hourExpires();
