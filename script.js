
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

//time picker

/*! version : 1.0.2
 =========================================================
 tpicker.js
 https://github.com/sonukedia55
 Created by Sonu Kedia - 2019
 =========================================================
 */

var fhr = 12;
var fmi = 0;
var ampm = 0;
var showpicker = 0;
var elid = 'none';
var picker_type=0;

function showpickers(a,b){
	if(showpicker){
		$('.tpicker').hide();
		showpicker=0;
	}else{
		elid = a;
		picker_type = b;
		var x = $("#"+elid).offset();
		$('.tpicker').show();
		var kk = $("#"+elid).outerHeight();
		$('.tpicker').offset({ top: x.top+kk, left: x.left});
		showpicker=1;
	}
}

function showdate(){
	$('.pk1').show();
	$('.pk2').hide();
}
function showtime(){
	$('.pk1').hide();
	$('.pk2').show();
}
function updatetime(){
	var gg="AM";
	if(ampm)gg = "PM";
	if(picker_type==24){
		var thr = fhr;var tmin = fmi;
		if(ampm){
			if(fhr<12)thr = fhr+12;
		}else{
			if(fhr==12)thr = 0;
		}
		$('#'+elid).val(("0" + thr).slice(-2)+":"+("0" + tmin).slice(-2));
	}else{
		$('#'+elid).val(("0" + fhr).slice(-2)+":"+("0" + fmi).slice(-2)+" "+gg);
	}
	$('.hrhere').html(("0" + fhr).slice(-2));
	$('.minhere').html(("0" + fmi).slice(-2));
	//$('.medchange').html(gg);
}

$(function(){

	var pickerhtml = '<div class="tpicker"><div class="pk1"><div class="row"><div class="hr"><i class="fa fa-angle-up hrup"></i><a class="hrhere">12</a><i class="fa fa-angle-down hrdown"></i></div><div class="dot2">:</div><div class="hr">	<i class="fa fa-angle-up minup"></i><a class="minhere">00</a><i class="fa fa-angle-down mindown"></i></div></div></div><div class="pk2 mintt"><table class="table table-bordered mintable"><tr><td>00</td><td>05</td><td>10</td><td>15</td></tr><tr><td>20</td><td>25</td><td>30</td><td>35</td></tr><tr><td>40</td><td>45</td><td>50</td><td>55</td></tr></table></div><div class="pk2 hrtt"><table class="table table-bordered hrtable"><tr><td>01</td><td>02</td><td>03</td><td>04</td></tr><tr><td>05</td><td>06</td><td>07</td><td>08</td></tr><tr><td>09</td><td>10</td><td>11</td><td>12</td></tr></table></div></div>';

	$('.timepicker').html(pickerhtml);

	$('.hrup').click(function(){
		if(fhr<12){fhr++;updatetime();}else{fhr=1;updatetime();}
	});
	$('.hrdown').click(function(){
		if(fhr>1){fhr--;updatetime();}else{fhr=12;updatetime();}
	});
	$('.minup').click(function(){
		if(fmi<59){fmi++;updatetime();}else{fmi=0;updatetime();}
	});
	$('.mindown').click(function(){
		if(fmi>0){fmi--;updatetime();}else{fmi=59;updatetime();}
	});
	$('.medchange').click(function(){
		if(ampm){ampm=0;updatetime();}else{ampm=1;updatetime();}
	});
	$('.hrhere').click(function(){
		$('.hrtt').show();
		$('.pk1').hide();
		$('.mintt').hide();
	});
	$('.minhere').click(function(){
		$('.hrtt').hide();
		$('.pk1').hide();
		$('.mintt').show();
	});
	$('.hrtable td').click(function(){
		var vaa = $(this).html();
		$('.hrtt').hide();
		$('.pk1').show();
		$('.mintt').hide();
		fhr = parseInt(vaa);updatetime();
	});
	$('.mintable td').click(function(){
		var vaa = $(this).html();
		$('.hrtt').hide();
		$('.pk1').show();
		$('.mintt').hide();
		fmi = parseInt(vaa);updatetime();
	});
});