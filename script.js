'use strict'
// Variables 
const days = document.querySelector(".number-days");
const hours = document.querySelector(".number-hours");
const minutes = document.querySelector(".number-minutes");
const seconds = document.querySelector(".number-seconds");
const lowerSectionCard = document.querySelector(".countdown-bottom");

let timeToLaunch = (8*24*60*60*1000) + (23*60*60*1000) + (55*60*1000) + (41*1000) ;

//Functions
const countdown = function () {

  const countdownInterval = setInterval(() => {

    let daysValue = Math.trunc(timeToLaunch/(1000*60*60*24));
    let hoursValue = Math.trunc((timeToLaunch % (1000*60*60*24))/(1000*60*60));
    let minutesValue = Math.trunc((timeToLaunch% (1000*60*60))/(1000*60));
    let secondsValue = Math.trunc((timeToLaunch% (1000*60))/1000);

    seconds.textContent = `${String(secondsValue).padStart(2, 0)}`;
    minutes.textContent = `${String(minutesValue).padStart(2, 0)}`;
    hours.textContent = `${String(hoursValue).padStart(2, 0)}`;
    days.textContent = `${String(daysValue).padStart(2, 0)}`;

    if (timeToLaunch === 0) clearInterval(countdownInterval);

    timeToLaunch = timeToLaunch - 1000;

  }, 1000);
};

// Function Call

countdown();


