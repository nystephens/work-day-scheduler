// Define variables up here 
// Use moment.js to determine the current time of day.  This will be our currentTime variable.
let currentTime = moment().hour("hh").format("hh");
let taskTime = $("#task-time").text();
let taskTimeLimit = moment(taskTime, "h a").add(59, "m").add(59, "s").format("X");

// loadTasks(); this function will get the task data from localStorage and then load it into the textarea.  
let loadTasks = function() {
    let taskContent = localStorage.getItem('data-9am-task');
    $('9am-task').val() = taskContent; 
}


// colorChange() function will be a for loop that iterates over the textarea elements and applies an if statement that adds and deletes the resective color coding classes based on a comparison between the current time and the hour designated for the row.

let colorChange = function() {
// for loop starts here 
$('.time-block').each(function(){
    let current = parseInt(currentTime);
    let hour = parseInt($(this).children('.hour').children('.task-time').text().split(' ')[0]);
    
    if (current > hour) {
        $(this).children('.form-group').children("textarea").addClass('past');
        $(this).children('.form-group').children("textarea").removeClass('future');
        $(this).children('.form-group').children("textarea").removeClass('present');
    } else if (current === hour) {
        $(this).children('.form-group').children("textarea").addClass('present');
        $(this).children('.form-group').children("textarea").removeClass('future');
        $(this).children('.form-group').children("textarea").removeClass('past');
    } else {
        $(this).children('.form-group').children("textarea").addClass('future');
        $(this).children('.form-group').children("textarea").removeClass('present');
        $(this).children('.form-group').children("textarea").removeClass('past');
    }
});
};

// run color change using an interval to check the color regularly and update it as needed.
let colorUpdate = function(){
    setInterval(function(){colorChange();}, 1000);
};

colorChange();
colorUpdate();


// saveTasks() function will set the text value of the text area as a data point in localStorage.
let saveBtnTest = function() {
console.log("This is a test");
}

let saveTasks = function() {
    localStorage.setItem("data-9-am-task", $('#9am-task').val());
};

// a click handler for the save button will fire the saveTasks(); function


$('#9am-saveBtn').on("click", saveBtnTest());






