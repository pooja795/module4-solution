(function (window) {
    var helloSpeaker = {};
 
     var speakWord = "Hello";
       helloSpeaker.speak = function (name) {
       console.log(speakWord + " " + name);
     }
     
     window.helloSpeaker = helloSpeaker;
     
     })(window);
 © 2020 GitHub, Inc.