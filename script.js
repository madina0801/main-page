"use strict";

const time = document.querySelector("#time");
const greeting = document.querySelector("#time");
const name = document.querySelector("#name");
const focus = document.querySelector("#focus");

// Show Time

function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  const amOrPm = hour >= 12 ? "PM" : "AM";

  // 12H format
  hour = hour % 12 || 12;

  // Display time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amOrPm}`;
		setTimeout(showTime, 1000)
}

// Add 0 to sec and min

function addZero(n) {
	return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set background and greeting
function set() {

}

// Run
showTime();