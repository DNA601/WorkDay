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


var saveBtn = $(".saveBtn");
saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text();
    //siblings element search through dom tree.
    var n = $(this).siblings(".n").val();
    localStorage.setItem(time, n);
    // n is from the class button in the html doc
});

function Bomb() {
    $(".hour").each(function() {
        var currentHour = $(this).text();
        var dna = localStorage.getItem(currentHour);
        if (dna !== null)
        //evaluation null to not true or true
        {
            $(this).siblings(".n").val(dna);
        }
    });
}
Bomb(); //calling bomb to store data