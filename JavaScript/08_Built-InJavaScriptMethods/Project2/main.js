let endDate = new Date("06/19/2022 18:00:00");

function countdown(date) {
    let currentDate = Date.now();
    let dateFromParam = Date.parse(date);

    let timeRemaining = dateFromParam - currentDate;
    let daysRemaining = timeRemaining / (1000*60*60*24);
    console.log
    (daysRemaining);
    let hoursRemaining = (daysRemaining - Math.floor(daysRemaining)) * 24;
    let minutesRemaining = (hoursRemaining - Math.floor(hoursRemaining)) * 60;
    let secondsRemainig = (minutesRemaining - Math.floor(minutesRemaining)) * 60;
    let milliSecondsRemaining = (secondsRemainig - Math.floor(secondsRemainig)) * 1000;

    console.log(`${Math.floor(daysRemaining)} Day 
    ${Math.floor(hoursRemaining)}h
    ${Math.floor(minutesRemaining)}m
    ${Math.floor(secondsRemainig)}s -
    mil: ${milliSecondsRemaining}`);
}

countdown(endDate);
console.log(Date.now() / 1000);
console.log(Date.now() / 1000 / 60);
console.log(Date.now() / 1000 / 60 / 60);
console.log(Date.now() / 1000 / 60 / 60 / 24);
console.log(Date.now() / 1000 / 60 / 60 / 24 / 365);

