$(document).ready(function () {

    //$('.parallax').parallax();

    $('.sidenav').sidenav();


    $(window).scroll(function(){
        var positionTop;
        positionTop = $(document).scrollTop();
        console.log(positionTop)

        /*switch(positionTop){
            case (positionTop > 155):
            //alert('hit')
                $('#profilePic').addClass('fadeIn')
                break;
            case(positionTop > 570):
                $('.firstTwo').addClass('animated rollIn')
                break;
            case(positionTop > 800):
                $('.secondTwo').addClass('animated rollIn')
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
            $('.portfolioImg', this).toggleClass('displayNone', 1000)
            $('.projectTitle', this).toggleClass('displayNone') 
            $('.portfolioProjectDescription', this).toggleClass('displayNone')    
        }
    )

    new TypeIt('#catchPhrase', {
        //strings: ["Design...", "Create...", "Inspire"],
        speed:150,
        waitUntilVisible: true
      }).go();

});