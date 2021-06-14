
//Display today's date
var todayDate = moment().format("dddd, MMM Do YYYY");
$("#currentDate").html(todayDate);

//Adding saveBtn{
 $(".saveBtn").click(function () {

});

// define local storage variables 
var strachpad = document.querySelector("#strachpad")

//get item- when refreshing page 
strachpad.value = localStorage.getItem("notes");

//adding event listener 
strachpad.addEventListener("keyup", event => {
 localStorage.setItem("notes", strachpad.value)
})


//define DOM elements
var currentHour = moment().hour(); //number

var element = document.getElementById("time-block");
var number = parseInt(element.getAttribute("data-index"));



// for each function to loop / add css class
$(function () {
$("#time-block").each(function () {
  if (currentHour === number) {
    $(this).addClass("present");
    $(this).removeClass("past");
    $(this).removeClass("future");
  } else if (currentHour < number) {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
  } else $(this).removeClass("present");
  $(this).addClass("past");
  $(this).removeClass("future");
})
});
