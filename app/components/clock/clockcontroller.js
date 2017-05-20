function ClockController(){

    function drawTime() {

    var time = new Date();
    var hours = time.getHours()
    var minutes = time.getMinutes()
    var ampm = "";
    var clock = document.getElementById('clock');
    
        if(hours == 0) {
            ampm = " am";
            hours = 12;
        } else if(hours < 12) {
            ampm = " am";
        } else if(hours == 12) {
            ampm = " pm";
        } else if(hours > 12) {
            ampm = " pm";
            hours -= 12;
        }

        if(minutes <= 9) { 
            minutes = "0" + minutes;
        }
    clock.innerHTML = hours + ":" + minutes + ampm;
    }

    setInterval(drawTime, 1000);

}