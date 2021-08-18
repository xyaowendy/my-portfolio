$(document).ready(function() {
    $('#fullpage').fullpage({
        //navigation
        navigation: true,

        // scrolling
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,
        showActiveTooltip: true,

        loopBottom:true,
        // loopTop:true,
    });

    // methods   
    $.fn.fullpage.setAllowScrolling(true);

    // loading
    // setTimeout(function() {
    //     $("body").addClass("loaded");
    // }, 2000); // 1 second delay


    var typed = new Typed('#greeting', {
        strings: ["Hi", "你好","Hoi","G'day","こんにちは"],
        showCursor:true,
        autoInsertCss:true,
        typeSpeed: 100,
        backSpeed:30,
        loop: true,
      });

      var typed1 = new Typed('#skill', {
        strings: ["I have experience in CSS","I have experience in JavaScript","I have experience in PHP",
    "I have experience in WordPress","I have experience in Python","I have experience in Java"],
        showCursor:true,
        autoInsertCss:true,
        typeSpeed: 100,
        backSpeed:30,
        loop: true,
      });
});

   