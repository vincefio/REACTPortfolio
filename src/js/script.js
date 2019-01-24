$(document).ready(function () {

    //$('.parallax').parallax();

    $('.sidenav').sidenav();


    $(window).scroll(function(){
        var positionTop;
        positionTop = $(document).scrollTop();
        console.log(positionTop)
        //console.log($(window).width())


       if(positionTop > 155){
            //$('#aboutMeHeader').addClass('animated rollIn')
            $('#profilePic').addClass('fadeIn')
        }
        if(positionTop > 570){
            $('.firstTwo').addClass('animated rollIn')
        }
        if(positionTop > 800){
            $('.secondTwo').addClass('animated rollIn')
        }
        if(positionTop > 1230){
            $('#portfolioProject1').addClass('animated fadeIn')
        }
        if(positionTop > 1530){
            $('#portfolioProject2').addClass('animated fadeIn')
        }
        if(positionTop > 1830){
            $('#portfolioProject3').addClass('animated fadeIn')
        }
        if(positionTop > 2130){
            $('#portfolioProject4').addClass('animated fadeIn')
        }

    })

    /*HOVER EVENTS FOR PORTFOLIO*/
    $('.portfolioSingleProjectWrap').hover(
        function(){ 
            //alert('working')
            $('.portfolioImg', this).toggleClass('displayNone')
            $('.projectTitle', this).toggleClass('displayNone') 
            $('.portfolioProjectDescription', this).toggleClass('displayNone')    
        }
    )

      new TypeIt('#catchPhrase', {
        strings: ["Design...<br>", "Create...<br>", "Inspire"],
        speed: 50,
        waitUntilVisible: true
      }).go();

});