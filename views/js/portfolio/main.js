// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';

// const json = require('../../../data/portfolio/skills.json');
// import {default as skills} from "../../../data/portfolio/skills.json";

fetch('../../../data/portfolio/skills.json')
    .then(response => response.json())
        .then(obj =>  display_data(obj));

function display_data(skills) {
    // console.log(skills.skills);
    
    document.getElementById("my-skills").innerHTML = 
    `
    ${skills.skills.map(skill => {
        return `
            <div class="skill" data-aos="fade-in" data-aos-delay="${skill.delay}"></div>
            <div class="icon-container"> <i class=${skill.icon}></i> </div>
            <h1>${skill.name}</h1>
            <p>${skill.description}</p>
        `
    })}
    `;
    
}

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
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = () => {
        if(xhttp.readyState == 4 && xhttp.status == 200) {
            let json = JSON.parse(xhttp.responseText);
            document.getElementById("my-skills").innerHTML = `<p style="color:white">hello</p>`;
            console.log("here");
            /*
            `
            <div class="icon-container">
            <i class=${json.map((skill) => {
                return skill.icon;
            }).join('')}></i>
            </div>
            `
            
        }
    };
    xhttp.open('GET', '../../../data/portfolio/skills.json');
    xhttp.send();
}
*/
