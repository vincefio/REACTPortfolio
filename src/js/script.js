$(document).ready(function () {

    //$('.parallax').parallax();

    $('.sidenav').sidenav();


    $(window).scroll(function(){
        var positionTop;
        positionTop = $(document).scrollTop();
        console.log(positionTop)

        /*switch(positionTop){
            case 175:
            //alert('hit')
            $('#profilePic').addClass('fadeIn')
                break;
              
            default:
                console.log(positionTop)

        }*/

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

    })

    /*HOVER EVENTS FOR PORTFOLIO*/
    $('.portfolioSingleProjectWrap').hover(
        function(){ 
            //alert('working')
            $('.projectTitle').toggleClass('displayNone') 
            $('.portfolioProjectDescription').toggleClass('displayNone')
        }
    )

    new TypeIt('#catchPhrase', {
        //strings: ["Design...", "Create...", "Inspire"],
        speed:150,
        waitUntilVisible: true
      }).go();

});