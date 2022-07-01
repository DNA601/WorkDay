var today = moment();
console.log("today", today);

$("#currentDay").text(today.format('MMMM Do YYYY, h:mm a'));
//date and time on the header.