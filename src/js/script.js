$(document).ready(function () {

    //$('.parallax').parallax();

    $('.sidenav').sidenav();

    /*$('#workLink').on('click', (e) => {
        e.preventDefault()
    })*/
    console.log('type it ' + TypeIt)
    new TypeIt('#catchPhrase', {
strings: ["This is a great string.", "But here is a better one."],
speed: 50,
breakLines: false,
waitUntilVisible: true
}).go();

    $('.content').each(function (i) {

        setTimeout(function () {
            // console.log(i)
            $('.content').eq(i).addClass('is-visible')
        }, 300 * i)

    })


});