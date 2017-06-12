// Take your music and split it into two JSON files instead of them all living on one file.
// Add a button at the bottom of your music list and label it More >.
// Load the songs from the first list, and inject the DOM into the document as you've already done.
// When the user clicks that button, load the songs from the second JSON file and append them to the bottom of the existing music, but before the More button.

console.log("First line in JS file", Date.now());

// Create a new request object
let myRequest = new XMLHttpRequest();

function executeThisIfXHRFails() {
	console.log("An error occured while transferring the data");
}

function executeThisAfterFileIsLoaded() {
	console.log("myRequest", myRequest);
	console.log("event.target", event.target);
	var data = JSON.parse(event.target.responseText);
	console.log("data", data);
	outputSongs(data.songs);
}

// Set up event listeners for completed request and aborted request
myRequest.addEventListener("load", executeThisAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisIfXHRFails);

// Tell it which HTTP verb to use: GET, POST, PUT, DELETE, PATCH
myRequest.open("GET", "main.json");
// Go get it, boy!
myRequest.send();

// DOM manipulation stuff
function outputSongs(songsArr) {
	let songList = document.getElementById("song-list");
	songs.Arr.forEach( function(song) {
		console.log("song title", song.title);
		songList.innerHTML += `<h2>${song.title}</h2>`
	});
}

console.log("Last line in JS file", Date.now());
