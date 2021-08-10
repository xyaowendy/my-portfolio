$(document).ready(function() {
    $('#fullpage').fullpage({
        //navigation
        navigation: true,

        // scrolling
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,
        showActiveTooltip: true,

        // loopBottom:true,
        // loopTop:true,
    });

    // methods   
    $.fn.fullpage.setAllowScrolling(true);

    // loading
    setTimeout(function() {
        $("body").addClass("loaded");
    }, 2000); // 1 second delay


    var typed = new Typed('#greeting', {
        strings: ["Hi", "你好","Hoi","G'day","こんにちは"],
        showCursor:true,
        autoInsertCss:true,
        typeSpeed: 100,
        backspeed:50,
        loop: true,
        // cursorChar: "_"
      });

});

   