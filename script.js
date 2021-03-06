// Creating the local storeage for the save feature

function getLocalStorage(key) {
    var value = localStorage.getItem(key);
    if (value) {
        $(`#text${key}`).text(value);
    }
}

// Creating the function for current day and using moment.js to format the date.

$( document ).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    // Using for loop to cycle through the times on the planner

    for (var i = 9; i < 18; i++) {
    
        // Create a row
        var row = $(`<div data-time=${i} id='${i}' class="row">`);

        // Create a column
        var col1 = $('<div class="col-sm-2"> <p class="hour">' + formatAMPM(i) + '</p>');

        // Create column 2
        var col2 = $(`<div class="col-sm-8 past"><textarea id=text${i} class="description" placeholder="What is the plan today?"></textarea>`);        
       
        // Create column 3
        var col3 = $(`<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`)
        
        // Append col to row
        row.append(col1);
        row.append(col2);
        row.append(col3);

        // Last step add rows to container
        $(".container").append(row);

        getLocalStorage(i);
    }


    // Creating function to update colors for the time

    function formatAMPM(hours) {
        var amPm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours + amPm;
    }
formatAMPM();

// Creating function to update colors for the time

function updateColors(){
        var currentTime = new Date().getHours();
        for (var i = 9; i < 18; i++) { 
        console.log(currentTime, $(`#${i}`).data("time"));
         if ($(`#${i}`).data("time") == currentTime){
            $(`#text${i}`).addClass( "present");
        } else if (currentTime < $(`#${i}`).data("time")) {
            $(`#text${i}`).addClass( "future");
        }
    }
}

setInterval(function() {
    updateColors();
}, 1000);

// Creating event listner for save button to hold the information with local storage

var saveBtn = $('.saveBtn');
saveBtn.on('click', function(){
    var eventId = $(this).attr('id');
    var eventText = $(this).parent().siblings().children('.description').val();
    localStorage.setItem(eventId, eventText);
});});
