"use strict";

const time = document.querySelector("#time");
const greeting = document.querySelector("#greeting");
const username = document.querySelector("#name");
const focus = document.querySelector("#focus");
const quoteContent = document.querySelector("#quote__content");
const quoteAuthor = document.querySelector("#quote__author")


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
  time.innerHTML = `${hour}<span>:</span>${String(min).padStart(2, 0)}<span>:</span>${String(sec).padStart(2, 0)} ${amOrPm}`;
		setTimeout(showTime, 1000)
}

// Add 0 to sec and min

// function addZero(n) {
// 	return (parseInt(n, 10) < 10 ? '0' : '') + n;
// }

// Set background and greeting style
function setStyles(daytime) {
  document.body.style.backgroundImage = `url('imgs/${daytime}.jpg')`;
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';
  greeting.textContent = `Good ${daytime},`
}

function setBgAndGreet() {
  let currentHour = new Date().getHours();
  if(currentHour < 12) {
    setStyles('morning');
  } else if(currentHour < 18) {
    setStyles('afternoon');
  } else {
    setStyles('evening');
    document.body.style.color = 'white';
  }
}

// Set interface
// function setInterface(e) {
//   if(e.type === 'keypress') {
//     if(e.keyCode == 13) {
//       localStorage.setItem(element, e.target.innerText);
//       username.blur();
//     }
//   } else {
//     localStorage.setItem(element, e.target.innerText);
//   }
// }

// Set Name
function setName(e) {
  if(e.type === 'keypress') {
    if(e.keyCode == 13) {
      localStorage.setItem('username', e.target.innerText);
      username.blur();
    }
  } else {
    localStorage.setItem('username', e.target.innerText);
  }
}

// Set Focus
function setFocus(e) {
  if(e.type === 'keypress') {
    if(e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

// Get Name
function getName() {
  if(localStorage.getItem('username') === null) {
    username.textContent = '[Enter Your Name]';
  } else {
    username.textContent = localStorage.getItem('username');
  }
}

// Get Focus
function getFocus() {
  if(localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Your Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Event listeners setting name and focus
['keypress', 'blur'].forEach(ev => {
  username.addEventListener(ev, setName);
  focus.addEventListener(ev, setFocus);
})

// Get Quotes
// API https://api.quotable.io/random/?tags=inspirational
async function getQuote() {
  const quoteApi = 'https://api.quotable.io/random/?tags=inspirational&maxLength=90';
  const response = await fetch(quoteApi);
  const data = await response.json();
  quoteContent.textContent = data.content;
  quoteAuthor.textContent = `— ${data.author}`;
}


// export const getJSON = async function (url) {
//   try {
//     const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
//     const data = await res.json();
//     if (!res.ok) throw new Error(`${data.message} (${res.status})`);

//     return data;
//   } catch (err) {
//     throw err;
//   }
// };


// Run
getQuote();
showTime();
setBgAndGreet();
getName();
getFocus();