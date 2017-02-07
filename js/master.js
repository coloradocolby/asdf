$(document).ready(function() {
  
  var hasBegun = 0;

  function isScrolledIntoView(elem)
  {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
      return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  $(window).scroll(function() {

      if(isScrolledIntoView($('.typedout')) && hasBegun == 0)
      {
        hasBegun = 1;
          $(".typedout").typed({
            strings: ["First sentence.", "Second sentence."],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 0,
            // time before typing starts
            startDelay: 0,
            // backspacing speed
            backSpeed: 0,
            // shuffle the strings
            shuffle: false,
            // time before backspacing
            backDelay: 500,
            // loop
            loop: false,
            // false = infinite
            loopCount: false,
            // show cursor
            showCursor: true,
            // character for cursor
            cursorChar: "",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function() {},
            // starting callback function before each string
            preStringTyped: function() {},
            //callback for every typed string
            onStringTyped: function() {},
            // callback for reset
            resetCallback: function() {},

            backspace: function(curString, curStrPos) {
              setTimeout(function() {

                // check string array position
                // on the first string, only delete one word
                // the stopNum actually represents the amount of chars to
                // keep in the current string. In my case it's 3.
                if (self.arrayPos == 3) {
                  self.stopNum = 5;
                }
                //every other time, delete the whole typed string
                else {
                  self.stopNum = 0;
                }



              })
            }


          });
      }
  });

  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 800,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});





// $(function() {
//   $(".typedout").typed({
//     strings: ["First sentence.", "Second sentence."],
//     // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
//     stringsElement: null,
//     // typing speed
//     typeSpeed: 0,
//     // time before typing starts
//     startDelay: 0,
//     // backspacing speed
//     backSpeed: 0,
//     // shuffle the strings
//     shuffle: false,
//     // time before backspacing
//     backDelay: 500,
//     // loop
//     loop: false,
//     // false = infinite
//     loopCount: false,
//     // show cursor
//     showCursor: true,
//     // character for cursor
//     cursorChar: "",
//     // attribute to type (null == text)
//     attr: null,
//     // either html or text
//     contentType: 'html',
//     // call when done callback function
//     callback: function() {},
//     // starting callback function before each string
//     preStringTyped: function() {},
//     //callback for every typed string
//     onStringTyped: function() {},
//     // callback for reset
//     resetCallback: function() {},
//
//     backspace: function(curString, curStrPos) {
//       setTimeout(function() {
//
//         // check string array position
//         // on the first string, only delete one word
//         // the stopNum actually represents the amount of chars to
//         // keep in the current string. In my case it's 3.
//         if (self.arrayPos == 3) {
//           self.stopNum = 5;
//         }
//         //every other time, delete the whole typed string
//         else {
//           self.stopNum = 0;
//         }
//
//
//
//       })
//     }
//
//
//   });
// });
