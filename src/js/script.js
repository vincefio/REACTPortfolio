$(document).ready(function () {

    //$('.parallax').parallax();

    $('.sidenav').sidenav();


    $(window).scroll(function(){
        var positiontop = $(document).scrollTop();
        console.log(positiontop)
    })

    new TypeIt('#catchPhrase', {
        //strings: ["Design...", "Create...", "Inspire"],
        speed: 40,
        waitUntilVisible: true
      }).go();


});