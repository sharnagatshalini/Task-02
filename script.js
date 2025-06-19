window.onload = function(){
  var seconds = "00",
  tens = "00",
  viewTens = document.getElementById('tens'),
  viewSecond = document.getElementById('sec'),
  startBtn = document.getElementById('startBtn'),
  stopBtn = document.getElementById('stopBtn'),
  resetBtn = document.getElementById('resetBtn'),
  
  interval;

  startBtn.onclick = function(){
   // alert()
   clearInterval(interval);
      interval = setInterval(stopWatchTimer,10)
  };
  stopBtn.onclick = function(){
    clearInterval(interval)
  }
  resetBtn.onclick = function(){
    clearInterval(interval)
    seconds = "00";
    tens = "00";
    viewTens.innerHTML = tens;
    viewSecond.innerHTML= seconds;
  };
  function stopWatchTimer(){
    tens++;

    if(tens <= 9){
      viewTens.innerHTML = "0"+tens;
    }
    if(tens >9){
      viewTens.innerHTML = tens;
    }
    if(tens > 99){
      seconds++;
      viewSecond.innerHTML = "0"+seconds;
      tens = 0;
      viewTens.innerHTML = "00";
    }

    if(seconds >9){
      viewSecond.innerHTML = seconds;
    }
  }
};