let now = new Date().getDay();
console.log(now);
const weekdays = ['Sunday', 'Monday', 'Tuesay', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
document.getElementById('day').innerHTML = weekdays[now];
var message;

if(now == 0 || now == 6){
    message = 'Weekend is here';
}else{
    message = 'Today is a weekday, hope you are grinding';
}
document.getElementById('messages').innerHTML = message;