
// CommonJS

 var filerefjs = document.createElement('script');
 filerefjs.setAttribute("type", "text/javascript");
 filerefjs.setAttribute("src", "sweetalert.all.min.js");

 
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

var abc = setInterval(function () {
  timerFunc(hasFocus);
}, 100);
function timerFunc(bool) {
  var timer = document.getElementById("timer");
  var minutes = Math.floor(secondsRemaining / 60);
  var seconds = secondsRemaining - minutes * 60;
  var fixedNum = seconds.toFixed();
  if (fixedNum == 60) {
    fixedNum = "0";
    minutes = minutes + 1;
  }
  if (fixedNum < 10 && fixedNum >= 0) fixedNum = "0" + fixedNum;

  var time = minutes + ":" + fixedNum;
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

  //thoi gian con lai cho nay (Y)
  if (Math.round(secondsRemaining) == 40) {
    var gift = (document.getElementById("gift-content1").innerHTML =
      '<a href="https://www.google.com/search?q=g%C3%A1i+xinh&rlz=1C1KNTJ_enVN979VN979&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi3xfn78aT2AhU2QfUHHTCmCacQ_AUoAXoECAEQAw&biw=1745&bih=890&dpr=1.1">Bộ sưu tập ảnh gái xinh</a>');
  }

  if (Math.round(secondsRemaining) == 20) {
    var gift = (document.getElementById("gift-content2").innerHTML =
      '<a href="https://www.google.com/search?q=g%C3%A1i+xinh+ph%E1%BA%A7n+2&tbm=isch&ved=2ahUKEwjM3Nz88aT2AhUITfUHHTqEA40Q2-cCegQIABAA&oq=g%C3%A1i+xinh+ph%E1%BA%A7n+2&gs_lcp=CgNpbWcQAzoICAAQgAQQsQM6BAgAEAM6CwgAEIAEELEDEIMBOgUIABCABDoECAAQQzoKCAAQsQMQgwEQQzoHCAAQsQMQQzoGCAAQBRAeOgYIABAIEB5Q8AhYshFg0xJoA3AAeACAAXiIAcIIkgEDOC4zmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=bA4eYsz2Hoia1e8PuoiO6Ag&bih=890&biw=1745&rlz=1C1KNTJ_enVN979VN979">Bộ sưu tập ảnh gái xinh part 2</a>');
  }

  if (Math.round(secondsRemaining) == 1) {
    var gift = (document.getElementById("gift-content3").innerHTML =
      '<a href="https://www.google.com/search?q=tr%E1%BA%A7n+%C4%91%E1%BB%A9c+bo+kh%E1%BB%8Fa+th%C3%A2n&tbm=isch&ved=2ahUKEwi8tLuS8qT2AhVSEXAKHeMsBK4Q2-cCegQIABAA&oq=tr%E1%BA%A7n+%C4%91%E1%BB%A9c+bo+kh%E1%BB%8Fa+th%C3%A2n&gs_lcp=CgNpbWcQAzoECAAQAzoFCAAQgAQ6CAgAELEDEIMBOggIABCABBCxAzoECAAQEzoICAAQBRAeEBM6BAgAEEM6CggAELEDEIMBEEM6BwgAELEDEEM6CwgAEIAEELEDEIMBOgQIABAeOgYIABAFEB46BggAEAgQHjoECAAQGFCqFFjOMWDkMmgPcAB4BIAB6wGIAa8dkgEHMTkuMTYuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=mg4eYrz_BdKiwAPj2ZDwCg&bih=890&biw=1745&rlz=1C1KNTJ_enVN979VN979">Bộ sưu tập ảnh gái không xinh nhưng nude =]]</a>');

    //Swal.fire('Địt mẹ giỏi lắm')
  }
}

//ss
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
        //clearInterval(abc);
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
  abc = setInterval(function () {
    timerFunc(hasFocus);
  }, 100);
}

function showDialog() {
  Swal.fire({
  icon: 'success',
  title: 'Chuc mung'
});
}

$('.timepicker').timepicker({
    timeFormat: 'm:ss',
    interval: 5,
    minTime: '0:01',
    maxTime: '0:20',
    dynamic: false,
    dropdown: true,
    scrollbar: true
});