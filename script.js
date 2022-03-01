// import Swal from 'sweetalert2'

// CommonJS
//const Swal = require('sweetalert2')
//select music

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");


selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");

    var valueSelect = o.querySelector("label").htmlFor;
    var musicSelected = document.getElementById(valueSelect);
    console.log(musicSelected.value);
    var audio = document.getElementById("myAudio");
    audio.src= musicSelected.value;
    audio.load();

  });
});




// count down timer and action

    var totalTime = 1800;
    var secondsRemaining = totalTime;
    var locatX = -1;
    var locatY = -1;
    var hasFocus = true;
    var abc = setInterval(function() {timerFunc(hasFocus)}, 100);
    function timerFunc(bool) {

      var timer = document.getElementById("timer");
      var minutes = Math.floor(secondsRemaining / 60);
      var seconds = secondsRemaining - (minutes * 60);
      var fixedNum = seconds.toFixed();
      if(fixedNum == 60) {
        fixedNum = "0";
        minutes = minutes + 1;
      }
      if(fixedNum < 10 && fixedNum >= 0) fixedNum = "0" + fixedNum;

      var time = minutes + ":" + fixedNum;
      timer.innerHTML = time;
      if (bool) {secondsRemaining -= 0.1;} else {secondsRemaining = totalTime; }
      if (secondsRemaining == 0) {secondsRemaining = totalTime;}
      console.log("bool-timer:" + bool);

        //thoi gian con lai cho nay (Y)
      if (Math.round(secondsRemaining) == 1795) {
        var gift = document.getElementById("gift-content1").innerHTML = '<a href="https://www.google.com">Bộ sưu tập ảnh gái xinh</a>';
       
      }

      if (Math.round(secondsRemaining) == 1790) {
        var gift = document.getElementById("gift-content2").innerHTML ='<a href="https://stackoverflow.com/questions/4935101/audio-src-change-with-javascript">Bộ sưu tập ảnh gái xinh part 2</a>';
        
      }

      if (Math.round(secondsRemaining) == 1788) {
        var gift = document.getElementById("gift-content3").innerHTML ='<a href="https://www.youtube.com/watch?v=PagxnFSkfCs">Bộ sưu tập ảnh gái không xinh nhưng nude =]]</a>';
     
        //Swal.fire('Địt mẹ giỏi lắm') 
      }

      
    }
 

      

//ss
    function addEvent(obj, evt, fn) {
      if (obj.addEventListener) {
          obj.addEventListener(evt, fn, false);
      }
      else if (obj.attachEvent) {
          obj.attachEvent("on" + evt, fn);
      }
    }


    addEvent(window,"load",function(e) {
        addEvent(document, "mouseout", function(e) {
            e = e ? e : window.event;
            var from = e.relatedTarget || e.toElement;
            if (!from || from.nodeName == "HTML") {
                if (hasFocus == true) {
                  //clearInterval(abc);
                  hasFocus = false;
                  locatX = -1;
                  locatY = -1;
                  runtime(hasFocus);

                  var gift = document.getElementById("gift-content1").innerHTML = '';
                  var gift = document.getElementById("gift-content2").innerHTML = '';
                  var gift = document.getElementById("gift-content3").innerHTML = '';
      
                  alert("con chó này, kiên trì lên");
                }
            } 
            $(document).ready(function(){
            $(document).mousemove(function(event){
                if (event.pageX != -1 || event.pageY != -1) {
                  if (hasFocus == false) {
                    //clearInterval(abc);
                    hasFocus = true;
                    locatX = event.pageX;
                    locatY = event.pageY;
                    console.log("hasFocus " + hasFocus + locatX + ", " + locatY);
                    //alert("con chó này, kiên trì lên");
                    runtime(hasFocus);
                  }
                }
              });
            });
    
            
        }); 
    });

    function runtime(hasFocus) {
      //timer.innerHTML = "30:00";
      clearInterval(abc); 
      abc = setInterval(function() {timerFunc(hasFocus)}, 100);
      
    }



