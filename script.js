"use strict";
//use javascript to request data from the website API
fetch("https://www.reddit.com/r/aww/.json")
.then(response => response.json())
.then(data => {
    //create variable to hold the parent info we don't need
    let something = data.data.children; //now this is an array
    for (let i=0; i<10; i++) {
        const newDiv = document.createElement("div");
        document.querySelector(".posts").appendChild(newDiv);
        const title = document.createElement("p");
        title.innerText = something[i].data.title;
        newDiv.appendChild(title);
        const image = document.createElement("img");
        image.src = something[i].data.thumbnail;
        newDiv.appendChild(image);
        const link = document.createElement("a");
        link.href = something[i].data.url;
        link.innerText = "Click HERE for the orignal post";
        newDiv.appendChild(link);

    }
 
 })

 