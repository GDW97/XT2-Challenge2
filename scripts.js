 setInterval(()=>{
        const time = document.querySelector(".display #time");
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let day_night = "AM";
        if(hours > 12){
          day_night = "PM";
          hours = hours - 12;
        }
        if(seconds < 10){
          seconds = "0" + seconds;
        }
        if(minutes < 10){
          minutes = "0" + minutes;
        }
        if(hours < 10){
          hours = "0" + hours;
        }
        time.textContent = hours + ":" + minutes + ":" + seconds + " "+ day_night;
      });


function updateBackground() {
  var hr = (new Date()).getHours();   
  if (hr < 9) {
    document.getElementsByTagName("body")[0].style.backgroundImage = "url('images/morning.jpg')";
  

  } else if (hr <20) {
  	document.getElementsByTagName("body")[0].style.backgroundImage = "url('images/day.jpg')";

}
 else {
    document.getElementsByTagName("body")[0].style.backgroundImage = "url('images/night.jpg')";
  } 
}

setInterval(updateBackground, 1000 * 60);
updateBackground();