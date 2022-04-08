


 //load nhac 
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");

    var valueSelect = o.querySelector("label").htmlFor;
    var musicSelected = document.getElementById(valueSelect);
    console.log(musicSelected.value);
    var audio = document.getElementById("myAudio");
    audio.src = musicSelected.value;
    audio.load();
  });
});

// count down timer and action

var totalTime = 10;
var secondsRemaining = totalTime;
var locatX = -1;
var locatY = -1;
var hasFocus = true;


//tao moi 1 tien trinh
var abc = setInterval(function () {
  timerFunc(hasFocus);
}, 100);

//hien thi thoi gian con lai
function timerFunc(bool) {
  var timer = document.getElementById("timer");
  var hours = Math.floor(secondsRemaining/60/60);
  var minutes = Math.floor((secondsRemaining - hours**60) / 60);
  var seconds = minutes - minutes * 60;
  var fixedMin = minutes.toFixed();
  if (fixedMin == 60) {
    fixedMin = "0";
    hours = hours + 1;
  }
  if (fixedMin < 10 && fixedMin >= 0) fixedMin = "0" + fixedMin;
  
  var fixedSec = seconds.toFixed();
  if (fixedSec == 60) {
    fixedSec = "0";
    minutes = minutes + 1;
  }
  if (fixedMin < 10 && fixedSec >= 0) fixedSec = "0" + fixedSec;

  var time = hours + ":" + fixedMin + ":" + fixedSec;
  timer.innerHTML = time;
  if (bool) {
    secondsRemaining -= 0.1;
  } else {
    secondsRemaining = totalTime;
  }
  if (secondsRemaining <= 0) {
    secondsRemaining = totalTime;
       showDialog();
   
  }
  console.log("bool-timer:" + bool);

//   if (Math.round(secondsRemaining) == (totalTime/2)) {
//     var gift = (document.getElementById("gift-content1").innerHTML =
//       '<a href="https://www.google.com/search?q=g%C3%A1i+xinh&rlz=1C1KNTJ_enVN979VN979&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi3xfn78aT2AhU2QfUHHTCmCacQ_AUoAXoECAEQAw&biw=1745&bih=890&dpr=1.1">Bộ sưu tập ảnh gái xinh</a>');
//   }

//   if (Math.round(secondsRemaining) == (totalTime/4)) {
//     var gift = (document.getElementById("gift-content2").innerHTML =
//       '<a href="https://www.google.com/search?q=g%C3%A1i+xinh+ph%E1%BA%A7n+2&tbm=isch&ved=2ahUKEwjM3Nz88aT2AhUITfUHHTqEA40Q2-cCegQIABAA&oq=g%C3%A1i+xinh+ph%E1%BA%A7n+2&gs_lcp=CgNpbWcQAzoICAAQgAQQsQM6BAgAEAM6CwgAEIAEELEDEIMBOgUIABCABDoECAAQQzoKCAAQsQMQgwEQQzoHCAAQsQMQQzoGCAAQBRAeOgYIABAIEB5Q8AhYshFg0xJoA3AAeACAAXiIAcIIkgEDOC4zmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=bA4eYsz2Hoia1e8PuoiO6Ag&bih=890&biw=1745&rlz=1C1KNTJ_enVN979VN979">Bộ sưu tập ảnh gái xinh part 2</a>');
//   }

//   if (Math.round(secondsRemaining) == 0) {
//     var gift = (document.getElementById("gift-content3").innerHTML =
//       '<a href="https://www.google.com/search?q=tr%E1%BA%A7n+%C4%91%E1%BB%A9c+bo+kh%E1%BB%8Fa+th%C3%A2n&tbm=isch&ved=2ahUKEwi8tLuS8qT2AhVSEXAKHeMsBK4Q2-cCegQIABAA&oq=tr%E1%BA%A7n+%C4%91%E1%BB%A9c+bo+kh%E1%BB%8Fa+th%C3%A2n&gs_lcp=CgNpbWcQAzoECAAQAzoFCAAQgAQ6CAgAELEDEIMBOggIABCABBCxAzoECAAQEzoICAAQBRAeEBM6BAgAEEM6CggAELEDEIMBEEM6BwgAELEDEEM6CwgAEIAEELEDEIMBOgQIABAeOgYIABAFEB46BggAEAgQHjoECAAQGFCqFFjOMWDkMmgPcAB4BIAB6wGIAa8dkgEHMTkuMTYuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=mg4eYrz_BdKiwAPj2ZDwCg&bih=890&biw=1745&rlz=1C1KNTJ_enVN979VN979">Bộ sưu tập ảnh gái không xinh nhưng nude =]]</a>');
//   }
}

//check out khoi man hinh
function addEvent(obj, evt, fn) {
  if (obj.addEventListener) {
    obj.addEventListener(evt, fn, false);
  } else if (obj.attachEvent) {
    obj.attachEvent("on" + evt, fn);
  }
}

addEvent(window, "load", function (e) {
  addEvent(document, "mouseout", function (e) {
    e = e ? e : window.event;
    var from = e.relatedTarget || e.toElement;
    if (!from || from.nodeName == "HTML") {
      if (hasFocus == true) {
        hasFocus = false;
        locatX = -1;
        locatY = -1;
        runtime(hasFocus);

        var gift = (document.getElementById("gift-content1").innerHTML = "");
        var gift = (document.getElementById("gift-content2").innerHTML = "");
        var gift = (document.getElementById("gift-content3").innerHTML = "");
     
        //alert("Đồ ngốc này, kiên trì lên"); do thang nay :()
      }
    }
    $(document).ready(function () {
      $(document).mousemove(function (event) {
        if (event.pageX != -1 || event.pageY != -1) {
          if (hasFocus == false) {
            hasFocus = true;
            locatX = event.pageX;
            locatY = event.pageY;
            console.log("hasFocus " + hasFocus + locatX + ", " + locatY);
            runtime(hasFocus);
          }
        }
      });
    });
  });
});

//ham chay tien trinh
function runtime(hasFocus) {
  clearInterval(abc);
  abc = setInterval(function () {
    timerFunc(hasFocus);
  }, 100);
  var gift = (document.getElementById("gift-content1").innerHTML = "");
  var gift = (document.getElementById("gift-content2").innerHTML = "");
  var gift = (document.getElementById("gift-content3").innerHTML = "");
}

// thong bao chuc mung
function showDialog() {
  Swal.fire({
  icon: 'success',
  title: 'Chúc mừng bạn đã hoàn thành thử thách'
});
}

// timepicker
$(function () {
  $('#datetimepicker3').datetimepicker({
  format: 'HH:mm:ss',                 
  defaultDate: moment('2015-01-01'),
  useCurrent:'day',
  }).on('dp.change', function (event) {
    var timepicker = $("#datetimepicker").val();
    var secondConvert = timepicker.split(':'); 
    var seconds = ((secondConvert[0]) * 60 * 60 + (secondConvert[1]) * 60 + (+secondConvert[2]));
    if(seconds == 0) {
      totalTime = 15;
      secondsRemaining = 15;
    } else {
      totalTime = seconds;
      secondsRemaining = seconds;
    }
   
 
    runtime(hasFocus);
  });;
  
});
