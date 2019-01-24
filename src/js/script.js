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
        /*if(positionTop > 685){
            $('.firstTwoWrap').addClass('animated fadeInRightBig')
        }*/
        if(positionTop > 800){
            $('.secondTwo').addClass('animated rollIn')
        }
        /*if(positionTop > 917){
            $('.secondßTwoWrap').addClass('animated fadeInRightBig')
        }*/ 
    })

    new TypeIt('#catchPhrase', {
        //strings: ["Design...", "Create...", "Inspire"],
        speed:150,
        waitUntilVisible: true
      }).go();

});