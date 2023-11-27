const date = document.querySelector(".date");

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const currentDate = new Date();
const getMonth = months[currentDate.getMonth()];
const getDate = currentDate.getDate();
date.innerHTML = `${getDate} ${getMonth}`;


function timer(){
    let currentDate = new Date();
    // Get hours, minutes, and seconds
    let getHour = currentDate.getHours();
    let getMins = currentDate.getMinutes();
    let getSecs = currentDate.getSeconds();
    console.log(getHour)

    // Add Zero When time less than 10
    getHour = (getHour < 10) ? "0"+ getHour : getHour
    getMins = (getMins < 10) ? "0"+ getMins : getMins
    getSecs = (getSecs < 10) ? "0"+ getSecs : getSecs

    getHour = (getHour > 12) ? "0" + (getHour - 12) : getHour
    
    // Format the time as HH:mm:ss
    let formattedTime = `${getHour}:${getMins}:${getSecs}`;
    console.log(formattedTime)
    // Display the time
    document.querySelector(".currentTime").innerHTML = `current time: ${formattedTime}`
}

setInterval(timer, 1000);



const getPrayer = async() => {
    const url = "https://api.aladhan.com/v1/calendarByCity/2017/4?city=London&country=United%20Kingdom&method=2";
    // const url = "https://dailyprayer.abdulrcs.repl.co/api/"
    const response = await fetch(url);
    const data = await response.json()
    
    document.querySelector(".fajr").innerHTML = data.data[0].timings.Fajr
    document.querySelector(".sunrise").innerHTML = data.data[0].timings.Sunrise
    document.querySelector(".dhuhr").innerHTML = data.data[0].timings.Dhuhr
    document.querySelector(".asr").innerHTML = data.data[0].timings.Asr
    document.querySelector(".magrib").innerHTML = data.data[0].timings.Maghrib
    document.querySelector(".isha").innerHTML = data.data[0].timings.Isha
}

getPrayer();
