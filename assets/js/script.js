//Display today's date
var todayDate = moment().format("dddd, MMM Do YYYY");
$("#currentDate").html(todayDate);

var currentHour = moment().hour(); //number
console.log(currentHour);

var element = document.getElementById("time-block");
var number = parseInt(element.getAttribute("data-index"));
console.log(number);

function hourExpires() {
  // for each function to loop through number array
  $("time-block").each(function () {
    if (currentHour === number) {
      number.classList.add("present");
      number.classList.remove("past");
      number.classList.remove("future");
    }
  });
}



//Adding saveBtn click listener

// $(function () {
//   $(".saveBtn").on("click", function () {
//     var textarea = document.getElementById("textarea" + number).value;
//     var time = $(this).parent().attr("id");

//     //save task to local storage
//     localStorage.setItem(time, input);
//   });
// });
hourExpires();
