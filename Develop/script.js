// Use moment.js to determine the current time of day.  This will be our currentTime variable.
let currentTime = moment().hour("hh").format("hh");
let taskTime = $("#task-time").text();

$( document ).ready(function() {
// loadTasks(); this function will get the task data from localStorage and then load it into the textarea.  
let loadTasks = function() {
//      set taskContent variable as storage item's value
    let taskContent9am = localStorage.getItem("task-description-9am");
//      add the value of the storage item into the text for the current time-block
    $("#9am-task").val(taskContent9am); 
    
    let taskContent10am = localStorage.getItem("task-description-10am");
    $("#10am-task").val(taskContent10am); 

    let taskContent11am = localStorage.getItem("task-description-11am");
    $("#11am-task").val(taskContent11am); 

    let taskContent12am = localStorage.getItem("task-description-12am");
    $("#12am-task").val(taskContent12am); 

    let taskContent1pm = localStorage.getItem("task-description-1pm");
    $("#1pm-task").val(taskContent1pm); 

    let taskContent2pm = localStorage.getItem("task-description-2pm");
    $("#2pm-task").val(taskContent2pm); 

    let taskContent3pm = localStorage.getItem("task-description-3pm");
    $("#3pm-task").val(taskContent3pm); 

    let taskContent4pm = localStorage.getItem("task-description-4pm");
    $("#4pm-task").val(taskContent4pm); 

    let taskContent5pm = localStorage.getItem("task-description-5pm");
    $("#5pm-task").val(taskContent5pm); 
}

loadTasks();


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

// Display current date in header
let displayDate = function(){
    $('#current-day').text(moment().format("LLLL"));
};

let dateUpdate = function(){
    setInterval(function(){displayDate();}, 500);
};

displayDate();
dateUpdate();

// a click handler for the save button will fire the saveTasks(); function

$('#9am-saveBtn').on('click', function(){
    localStorage.setItem("task-description-9am", $('#9am-task').val());
});

$('#10am-saveBtn').on('click', function(){
    localStorage.setItem("task-description-10am", $('#10am-task').val());
});

$('#11am-saveBtn').on('click', function(){
    localStorage.setItem("task-description-11am", $('#11am-task').val());
});

$('#12pm-saveBtn').on('click', function(){
    localStorage.setItem("task-description-12pm", $('#12pm-task').val());

});

$('#1pm-saveBtn').on('click', function(){
    localStorage.setItem("task-description-1pm", $('#1pm-task').val());
});

$('#2pm-saveBtn').on('click', function(){
    localStorage.setItem("task-description-2pm", $('#2pm-task').val());
});

$('#3pm-saveBtn').on('click', function(){
    localStorage.setItem("task-description-3pm", $('#3pm-task').val());
});

$('#4pm-saveBtn').on('click', function(){
    localStorage.setItem("task-description-4pm", $('#4pm-task').val());
});

$('#5pm-saveBtn').on('click', function(){
    localStorage.setItem("task-description-5pm", $('#5pm-task').val());
});

// end save click handlers


// end on load function
});






