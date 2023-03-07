var audio = new Audio('./sound.mp3');


var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;
//when the start function is called timer will be made true and stopwatch function will be called
function start(){
 timer=true;
 stopWatch();
 audio.play();
}
function stop(){
    timer = false;
    audio.pause();
}
function reset(){
    timer = false;
     hr = 0;
     min = 0;
     sec = 0;
     count = 0;  

     document.getElementById("hr").innerHTML = "00"
     document.getElementById("min").innerHTML = "00"
     document.getElementById("sec").innerHTML = "00"
     document.getElementById("count").innerHTML = "00"
     audio.pause();
}

//this is a main function which controls the clock when it is called it will check wheteher timer is true or not if true
//then the work will start
//count is one hundreth of a second so when it becomes 100 we increase second. Simillarly we will do for hr, min.
function stopWatch(){
   if(timer == true){
     count=count+1;
     if(count == 100){
        sec=sec+1;
        count=0;
     }
     if(sec == 60){
        min=min+1;
        sec=0;
     }
     if(min == 60){
        hr=hr+1;
        min=0;
     }
       var hrstr = hr;
       var minstr = min;
       var secstr = sec;
       var countstr = count;
    
        if(hr<10){
            hrstr = "0"+ hrstr
        }
        if(min<10){
            minstr = "0"+ minstr
        }
        if(sec<10){
            secstr = "0"+ secstr
        }
        if(count<10){
            countstr = "0"+ countstr
        }
        

     document.getElementById("hr").innerHTML = hrstr;
     document.getElementById("min").innerHTML = minstr;
     document.getElementById("sec").innerHTML = secstr;
     document.getElementById("count").innerHTML = countstr;
    setTimeout("stopWatch()",10);
   }
}
