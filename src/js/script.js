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
                    //console.log('window ' + $(window).width())
                    if($(window).width() < 900){
                        //console.log('hit')
                        $('#profilePic').addClass('fadeIn')
                    }
                    
                }
                if(positionTop > 200){
                    if($(window).width() > 900){
                        $('#profilePic').addClass('fadeIn')

                    }
                }

                if(positionTop > 525){
                    if($(window).width() > 900){
                        $('.firstTwo').addClass('animated rollIn')
                        $('.secondTwo').addClass('animated rollIn')
                    }
                }
    
                if(positionTop > 570){
                    if($(window).width() > 900){

                    }else{
                        $('.firstTwo').addClass('animated rollIn')
                    }
                    
                }
                if(positionTop > 800){
                    if($(window).width() > 900){
                        
                    }else{
                        $('.secondTwo').addClass('animated rollIn') 
                    }
                    
                }

                if(positionTop > 1000){
                    if($(window).width() > 900){
                        $('.portfolioProjectFirst2').addClass('animated fadeIn')
                    }
                }

                if(positionTop > 1320){
                    if($(window).width() > 900){
                        $('.portfolioProjectSecond2').addClass('animated fadeIn')
                    }
                }

                if(positionTop > 1230){
                    if($(window).width() > 900){
                        
                    }else{
                        $('#portfolioProject1').addClass('animated fadeIn')
                    }
                    
                }
                if(positionTop > 1530){
                    if($(window).width() > 900){
                        
                    }else{
                        $('#portfolioProject2').addClass('animated fadeIn')
                    }
                    
                }
                if(positionTop > 1830){
                    if($(window).width() > 900){
                        
                    }else{
                        $('#portfolioProject3').addClass('animated fadeIn')
                    }
                    
                }
                if(positionTop > 2130){
                    if($(window).width() > 900){
                        
                    }else{
                        $('#portfolioProject4').addClass('animated fadeIn')
                    }

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