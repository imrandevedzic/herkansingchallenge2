
function digitalClock(){
  var today = new Date();
  var seconds = today.getSeconds();
  var minutes = today.getMinutes();
  var hours = today.getHours();

  if(seconds < 10) {
    seconds = '0' + seconds;
  }

  if(minutes < 10) {
    minutes = '0' + minutes;
  }

  if(hours < 10) {
    hours = '0' + hours;
  }

  document.getElementById('digitalclock').innerHTML = hours + ':' + minutes + ':' + seconds;
}

var today = new Date();

var maanden = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
document.getElementById('date').innerHTML = maanden[today.getMonth()];

var jaar = 2031;

var dagenWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
document.getElementById('date').innerHTML = dagenWeek[today.getDay()] + ' ' + today.getDate() + ' ' + maanden[today.getMonth()] + ' ' + jaar;

digitalClock();
setInterval(digitalClock, 1000);



function blockColorChange(){
  var hours = today.getHours();

  if (hours >= 12 && hours < 18){
    document.getElementById('colorblock').classList.add('middag');
} else if (hours >= 18 && hours <=23){
    document.getElementById('colorblock').classList.remove('middag');
    document.getElementById('colorplanet').classList.add('avond');
} else if (hours >=0 && hours < 6){
    document.getElementById('colorblock').classList.remove('avond');
    document.getElementById('colorblock').classList.add('nacht');
} else{
    document.getElementById('colorblock').classList.remove('nacht');
    document.getElementById('colorblock').classList.add('ochtend');
}

}

blockColorChange();

