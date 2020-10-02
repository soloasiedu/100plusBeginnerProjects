function getDate(){
    var todaysDate = new Date();
    // var currentHour = todaysDate.getHours();
    // var currentMins = todaysDate.getMinutes();
    // var currentSecs = todaysDate.getSeconds();
    
    
    // if(currentHour < 10){
    //     currentHour = '0'+currentHour;
    // }
    // if(currentMins < 10){
    //     currentMins = '0'+currentMins;
    // }
    // if(currentSecs < 10){
    //     currentSecs = '0'+currentSecs;
    // }
    
    var fullDate = todaysDate.toLocaleTimeString();
    console.log(fullDate);
    document.getElementById('time').innerHTML = fullDate;
}

setInterval(getDate, 1000);

