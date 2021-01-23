// Use moment.js to determine the current time of day.  This will be our currentTime variable.
let currentTime = moment().hour("hh").format("hh");
let taskTime = $("#task-time").text();
// let taskDataNum = $('.time-block').children('.hour').children('.task-time').text().split(' ')[0];

$( document ).ready(function() {
// loadTasks(); this function will get the task data from localStorage and then load it into the textarea.  
// let loadTasks = function() {
// //    iterate over each time-block
//     $('.time-block').each(function(){
// //      set taskContent variable as storage item's value
//         let taskContent = localStorage.getItem('task' + i);
// //      add the value of the storage item into the text for the current time-block
//         $(this).children('.form-group').children('.form-control').val(taskContent); 
//         console.log($(this));
//     });
    
// }

// loadTasks();


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



// a click handler for the save button will fire the saveTasks(); function

$('#9am-saveBtn').on('click', function(){
    localStorage.setItem("task-description-9am", $('#9am-task').val());
    console.log(this);
});

$('#10am-saveBtn').on('click', function(){
    localStorage.setItem("task-description-10am", $('#10am-task').val());
    console.log(this);
});

$('#11am-saveBtn').on('click', function(){
    localStorage.setItem("task-description-11am", $('#11am-task').val());
    console.log(this);
});

$('#12pm-saveBtn').on('click', function(){
    localStorage.setItem("task-description-12pm", $('#12pm-task').val());
    console.log(this);
});

$('#1pm-saveBtn').on('click', function(){
    localStorage.setItem("task-description-1pm", $('#1pm-task').val());
    console.log(this);
});

$('#2pm-saveBtn').on('click', function(){
    localStorage.setItem("task-description-2pm", $('#2pm-task').val());
    console.log(this);
});

$('#3pm-saveBtn').on('click', function(){
    localStorage.setItem("task-description-3pm", $('#3pm-task').val());
    console.log(this);
});

$('#4pm-saveBtn').on('click', function(){
    localStorage.setItem("task-description-4pm", $('#4pm-task').val());
    console.log(this);
});

$('#5pm-saveBtn').on('click', function(){
    localStorage.setItem("task-description-5pm", $('#5pm-task').val());
    console.log(this);
});

// end save click handlers

console.log('the page has loaded')
// end on load function
});






