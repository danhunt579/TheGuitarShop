"use strict";

//Execute the function to display countdown clock
setInterval("runClock()", 1000);


function runClock() {	
	// Store the current date & time
	var today = new Date();
	var date = today.toLocaleDateString();
	var time = today.toLocaleTimeString();

		//Calculate the days until playathon
	var playathon = new Date ("January 20, 2019");
	var daysLeft = (playathon - today) / (1000*60*60*24);
	
	//Calculate the hours left in the current day
	var hrsLeft = (daysLeft - Math.floor(daysLeft))* 24;
	var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
	var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;
	

	//Display time left until New Year's Eve
	document.getElementById("today").innerHTML = date;
	document.getElementById("days").textContent = Math.floor(daysLeft);
	document.getElementById("hours").textContent = Math.floor(hrsLeft);
	document.getElementById("minutes").textContent = Math.floor(minsLeft);
	document.getElementById("seconds").textContent = Math.floor(secsLeft);
}