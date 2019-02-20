var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function (el) {
      if (el.offsetWidth > docWidth) {
          console.log(el);
      }
  }
);



$(document).ready(function () {
    new WOW().init();
        //$("#iphone-screen").animate({ top: "+=700" }, 3);  //This way will create animation which is not needed
        $(".imgs").delay(2000).css("top", "1px");   
        $("#iphone-button").delay(1000).animate({ top: "+=5" }, 200);
        $("#iphone-button").delay(200).animate({ top: "-=4" }, 200);
        //$("#iphone-button").delay(2600).css("top", "-84px");
        $("#iphone-screen").delay(1900).show(0);
       // $("#iphone-screen").delay(1300).animate({ top: "-=700" }, 300);
       // $("#iphone-off").slideUp("slow");
        
});

// This works perfect

//function imgSlideUp() {
//    document.getElementById("imgs").style.top="1px";
//}
//function buttonDown() {
//    document.getElementById("iphone-button").style.top = "-74px";
//}
//function buttonUp() {
//    document.getElementById("iphone-button").style.top = "-84px";
//}

//function screenPop() {
//    document.getElementById("iphone-screen").style.display = "block";
//}



//setTimeout(imgSlideUp, 500);

//setTimeout(buttonDown, 1500);

//setTimeout(buttonUp, 1800);

//setTimeout(screenPop, 2100);

