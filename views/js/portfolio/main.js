$(document).ready(function()
{
    $('.menu-toggler').on('click', function()
    {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function()
    {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function()
    {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000)
    });

    $('#up').on('click', function()
    {
        $('html, body').animate({
            scrollTop: 0
        }, 2000)
    });

    $('.submit').click(function(event) {
        
        var name = $('.name').val()
        var email = $('.email').val()
        var service = $('.service').val()
        var subject = $('.subject').val()
        var statusElm = $('.status')
        statusElm.emplty()

        if(email.length > 5 && email.includes('@') && email.includes('.'))
        {
            statusElm.append('<div>Email is valid</div>')
        }
        else
        {
            event.preventDefault()
            statusElm.append('<div> Email is not valid</div>')
        }

        if(subject.length > 10)
        {
            statusElm.append('<div>Subject is valid</div>')
        }
        else
        {
            event.preventDefault()
            statusElm.append('<div> Subject is not valid</div>')
        }

        if(name.length > 2)
        {
            statusElm.append('<div>Name is valid</div>')
        }
        else
        {
            event.preventDefault()
            statusElm.append('<div> Name is not valid</div>')
        }
    })

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});