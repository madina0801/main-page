"use strict";

const time = document.querySelector("#time");
const greeting = document.querySelector("#greeting");
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
function setBgAndGreet() {
  let currentHour = new Date().getHours();
  if(currentHour < 12) {
    document.body.style.backgroundImage = "url('imgs/morning.jpg')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    greeting.textContent = 'Good morning,'
  } else if(currentHour < 18) {
    document.body.style.backgroundImage = "url('imgs/afternoon.jpg')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundCover = 'cover';
    greeting.textContent = 'Good afternoon,'
  } else {
    document.body.style.backgroundImage = "url('imgs/night.jpg')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    greeting.textContent = 'Good evening,'
    document.body.style.color = 'white';
  }
}

// Get Name
function getName() {
  if(localStorage.getItem('name') === null) {
    name.textContent = '[Enter Your Name]';
  } else {
    localStorage.getItem('name');
  }
}

// Get Focus
function getFocus() {
  if(localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Your Focus]';
  } else {
    localStorage.getItem('focus');
  }
}

// Run
showTime();
setBgAndGreet();
getName();
getFocus();