var tasks = {};

//Display today's date
var todayDate = moment().format("dddd, MMM Do YYYY");
$("#currentDate").html(todayDate);

//Adding saveBtn click listener
$("#time-block .saveBtn").click(function () {
  //get form values
  var input = $(".text").val();
  var time = $("this").closest("div").attr("id");
  //store
  localStorage.setItem("input", input);
});

var loadTasks = function () {
  tasks = JSON.parse(localStorage.getItem("input", input));
};

//define DOM elements
var currentHour = moment().hour(); //number
console.log(currentHour);

var element = document.getElementById("time-block");
var number = parseInt(element.getAttribute("data-index"));

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
      console.log(currentHour);
      console.log(number);
    } else $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
  });
}

hourExpires();
