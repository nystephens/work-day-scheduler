// Define variables up here 
// Use moment.js to determine the current time of day.  This will be our currentTime variable.
let currentTime = moment().format("X");
console.log(currentTime);

// loadTasks(); this function will get the task data from localStorage and then load it into the textarea.  (This function will fire upon loading the page so it will towards the top.)


// colorChange() function will be a for loop that iterates over the textarea elements and applies an if statement that adds the resective color coding class based on a comparison between the current time and the latest time in the hour designated for the row.

let colorChange = function() {

// for loop starts here 

// If currentTime > the time in the row, then addClass .past  

// if currentTime = the time in the row then addClass .present

//  if current time < the time in the rown then addClass .future

};


// saveTasks() function will set the text value of the text area as a data point in localStorage.
// a click handler for the save button will fire the saveTasks(); function







