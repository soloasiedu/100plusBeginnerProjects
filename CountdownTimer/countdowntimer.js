let countDownFromDate = new Date('July 10, 2020 12:00:00').toDateString();
console.log(countDownFromDate);
let countDownDate = new Date('July 10, 2020 12:00:00').getTime();
console.log(countDownDate);
let x = setInterval(function(){
    let now = new Date().getTime();
    console.log(now);
    let distance = countDownDate - now;
    console.log(distance);


    let days = Math.floor((distance / (1000 * 86400)));
    console.log(days);
    let hours = Math.floor((distance % (1000 * 86400)) / (1000 * 3600));
    console.log(hours);
    let mins = Math.floor((distance % (1000 * 3600)) / (1000 * 60));
    console.log(mins);
    let secs = Math.floor((distance % (1000 * 60)) / (1000));
    console.log(secs);

    document.getElementById('countdown-from').innerHTML = countDownFromDate;
    var fullDate = days+'d '+hours+'h '+mins+'s '+secs+'s';

    document.getElementById('root').innerHTML = fullDate;

    if(distance < 0){
        clearInterval(x);
        document.getElementById('root').innerHTML = 'Time Expired';
    }
},1000);



