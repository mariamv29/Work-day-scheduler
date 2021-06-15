//Display today's date
var todayDate = moment().format("dddd, MMM Do YYYY");
$("#currentDate").html(todayDate);

// define local storage variables
var strachpad = document.querySelector("#strachpad");

//get item- when refreshing page
strachpad.value = localStorage.getItem("notes");

//adding event listener
strachpad.addEventListener("keyup", (event) => {
  localStorage.setItem("notes", strachpad.value);
});

//define DOM elements
var currentHour = moment().hour(); //number

var timeBlock = [
  "time-block-9",
  "time-block-10",
  "time-block-11",
  "time-block-12",
  "time-block-13",
  "time-block-14",
  "time-block-15",
  "time-block-16",
  "time-block-17",
];

$.each(timeBlock, function (key, value) {

  var element = document.getElementById(value);
  console.log(element);
  var number = parseInt(element.getAttribute("data-index"));

  console.log(number, "number");
  console.log(currentHour, "currentHour");
  if (currentHour === number) {
    $(element).addClass("present");
    $(element).removeClass("past");
    $(element).removeClass("future");
  } else if 
  (currentHour > number) {
    $(element).removeClass("present");
    $(element).addClass("past");
    $(element).removeClass("future");
  } else {
    $(element).removeClass("present");
    $(element).removeClass("past");
    $(element).addClass("future");
  }
});
