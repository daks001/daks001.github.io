document.body.style.backgroundColor = "white"

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


/*
function getData() {
    let xhttp = XMLHttpRequest();

    xhttp.onreadystatechange = () => {
        if(xhttp.readyState === 4 && xhttp.status === 200) {
            let json = JSON.parse(xhttp.response);
            document.getElementById("skill").innerHTML = `
            <div class="icon-container"><i class=${json["java"].icon}></i></div>
            `
        }
    }
}
*/


// // this one is jut to wait for the page to load
// document.addEventListener('DOMContentLoaded', () => {

//     const themeStylesheet = document.getElementById('theme');
//     const themeToggle = document.getElementById('theme-toggle');
//     themeToggle.addEventListener('click', () => {
//         // if it's light -> go dark
//         if(themeStylesheet.href.includes('style')){
//             // themeStylesheet.href = 'dark-theme.css';
//             document.body.style.background = "black";
//             themeToggle.innerText = 'Switch to light mode';
//         } else {
//             // if it's dark -> go light
//             themeStylesheet.href = 'style.css';
//             themeToggle.innerText = 'Switch to dark mode';

//         }
//     })
// })

//dark mode
var theme = document.getElementById('theme-toggle');

theme.addEventListener("click", () => {
    if (document.body.style.backgroundColor == "white")
    {
        document.body.style.backgroundColor = "black";
    }
    else 
    {
        document.body.style.backgroundColor = "white";
    }
});

//carousel
var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".btn");
let curr_slide = 1;

let manual_navigation = (manual) => {
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        manual_navigation(i);
        curr_slide = i;
    });
});

let repeat = (active_class) => {
    let active = document.getElementsByClassName('active');
    let i = 1;

    let repeater = () => {
        setTimeout(() => {
            [...active].forEach((active_slide) => {
                active_slide.classList.remove('active');
            });
            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if(slides.length == 1) {
                i = 0;
            }
            if(i >= slides.length) {
                return;
            }
            repeater();
        }, 10000);       
    }
    repeater();
}
repeat();