// Define variables up here 
// Use moment.js to determine the current time of day.  This will be our currentTime variable.
let currentTime = moment().format("X");
console.log(currentTime);
let taskTime = $("#task-time").text();
console.log(taskTime);

let taskTimeLimit = moment(taskTime, "h a").add(59, "m").add(59, "s").format("X");
console.log(taskTimeLimit);
console.log(moment(taskTimeLimit, "X").format("LTS"));

// loadTasks(); this function will get the task data from localStorage and then load it into the textarea.  
let loadTasks = function() {
    let taskContent = localStorage.getItem('data-9am-task');
    $('9am-task').val() = taskContent; 
}


// colorChange() function will be a for loop that iterates over the textarea elements and applies an if statement that adds the resective color coding class based on a comparison between the current time and the latest time in the hour designated for the row.

// let colorChange = function() {
// // for loop starts here 
// for (i = 0; i < 9; i++) {
// // // If currentTime > the time in the row, then addClass .past  
// // if (currentTime > )
// // // if currentTime = the time in the row then addClass .present

// // //  if current time < the time in the rown then addClass .future
// // }
// };


// saveTasks() function will set the text value of the text area as a data point in localStorage.
let saveBtnTest = function() {
console.log("This is a test");
}

let saveTasks = function() {
    localStorage.setItem("data-9-am-task", $('#9am-task').val());
};

// a click handler for the save button will fire the saveTasks(); function


$('#9am-saveBtn').on("click", saveBtnTest());






