var today = moment();
console.log("today", today);

$("#currentDay").text(today.format('MMMM Do YYYY, h:mm a'));
//date and time on the header.
function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));
        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }

    })
};
//Function that corresponds with the rows. Showing past present and future.

timeBlockColor();
//This makes sure the colors are returned.