"use strict";
//use javascript to request data from the website API
fetch("https://www.reddit.com/r/aww/.json")
.then(response => response.json())
.then(data => {
    //create variable to hold the parent info we don't need
    let something = data.data.children; //now this is an array
    for (let i=0; i<something.length; i++) {
        console.log(something[i].data.title)
    }
 
 })