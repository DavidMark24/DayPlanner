// Creating the local storeage for the save feature

function getLocalStorage(key) {
    var value = localStorage.getItem(key);
    if (value) {
        $("#text${key}").text(value);
    }
}

// Creating the function for current day and using moment.js to format the date.

$( document ).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
   
// Using for loop to cycle through the times on the planner

    for (var i = 9; i < 18; i++) {
    
        // create a row
        var row = $(`<div data-time=${i} id='${i}' class="row">`);

        // create a column
        var col1 = $('<div class="col-sm-2"> <p class="hour">' + formatAMPM(i) + '</p>');

        //create column 2
        var col2 = $(`<div class="col-sm-8 past"><textarea id=text${i} class="description" placeholder="What is the plan today?"></textarea>`);        
       
        //create column 3
        var col3 = $(`<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`)
        
       
         // append col to row
         row.append(col1);
         row.append(col2);
         row.append(col3);
 
         // last step add rows to container
         $(".container").append(row);
 
// Using local storage to hold the information gathered from the loop

         getLocalStorage(i);
     }
 
    