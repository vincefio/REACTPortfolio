$(document).ready(function () {

    //$('.parallax').parallax();

    $('.sidenav').sidenav();

    /*$('#workLink').on('click', (e) => {
        e.preventDefault()
    })*/
    console.log('type it ' + TypeIt)
    /*new TypeIt('#catchPhrase', {
        strings: ["Design...", "Create..."],
        speed: 50,
        breakLines: false,
        waitUntilVisible: true
    }).go();*/

    new TypeIt('#catchPhrase', {
        //strings: ["Design...", "Create...", "Inspire"],
        speed: 40,
        waitUntilVisible: true
      }).go();

   /* $('.content').each(function (i) {

        setTimeout(function () {
            // console.log(i)
            $('.content').eq(i).addClass('is-visible')
        }, 300 * i)

    })*/


});