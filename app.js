const navButton = document.querySelector('.nav-button')
const navOpen = document.querySelector('.nav-open')

// animation reset

// timeline for animations.
const tl = new TimelineLite({ paused: true, reversed: true })

tl.to('.cover', 1, {
    width: '60%',
    ease: Power2.easeOut
})
.to('nav', 1, {
    height: '100%',
    ease: Power2.easeOut
}, '-= 0.5')
.fromTo('.nav-open', 0.5, {
    opacity: 0,
    x: 50,
    ease: Power2.easeOut
},{
    opacity: 1,
    x: 0,
    onComplete: function() {
        navOpen.getElementsByClassName.pointerEvents = 'auto';
    }
})
.to('.rollerbladers', .5, {
    height: 0,
    ease: Power2.easeOut
})
.to('.screen img', .5, {
    height: 0,
    ease: Power2.easeOut
})

navButton.addEventListener('click', () => {
    if (!tl.reversed()) {
        toggleTween(tl)
    }
    if (!tlWork.reversed()) {
        toggleTween(tlWork)
    }
    if (!tlContact.reversed()) {
        toggleTween(tlContact)
    }
    if (!tlAbout.reversed()) {
        toggleTween(tlAbout)
    }
    toggleTween(tl)
})

function toggleTween(tween) {
    tween.reversed() ? tween.play() : tween.reverse()
}

function activateMushroom(mushroom) {
    $('.mushroom').addClass('active-mushroom')
}

function addClassByClick(button){   
    $(button).addClass("active")
}

const workButton = document.querySelector('#work-button')



const tlWork = new TimelineLite({ paused: true, reversed: true })

tlWork.to('#nav-open-work', 1, {
    opacity: '1',
    ease: Power2.easeOut
})
.to('.work-greeting', 1.1, {
    opacity: 0,
    ease: Power2.easeOut
})
.to('.work-greeting', .8, {
    'padding-top': '20px',
    ease: Power2.easeOut
})
.to('.projects', 1.1, {
    opacity: 1,
    ease: Power2.easeOut
})

workButton.addEventListener('click', () => {
    if (!tl.reversed()) {
        toggleTween(tl)
    }
    if (!tlWork.reversed()) {
        toggleTween(tlWork)
    }
    if (!tlContact.reversed()) {
        toggleTween(tlContact)
    }
    if (!tlAbout.reversed()) {
        toggleTween(tlAbout)
    }
    toggleTween(tlWork)
})


const aboutButton = document.querySelector('#about-button')

const tlAbout = new TimelineLite({ paused: true, reversed: true })

tlAbout.to('#nav-open-about', 1, {
    top: '10vh',
    ease: Power2.easeOut
})
.to('.card', 1, {
    left: '-370px',
    ease: Power2.easeOut
})

aboutButton.addEventListener('click', () => {
    if (!tl.reversed()) {
        toggleTween(tl)
    }
    if (!tlWork.reversed()) {
        toggleTween(tlWork)
    }
    if (!tlContact.reversed()) {
        toggleTween(tlContact)
    }
    if (!tlAbout.reversed()) {
        toggleTween(tlAbout)
    }
    toggleTween(tlAbout)
})



const contactButton = document.querySelector('#contact-button')

const tlContact = new TimelineLite({ paused: true, reversed: true })

tlContact.to('#nav-open-contact', 1, {
    right: '50vw',
    ease: Power2.easeOut
})

contactButton.addEventListener('click', () => {
    if (!tl.reversed()) {
        toggleTween(tl)
    }
    if (!tlWork.reversed()) {
        toggleTween(tlWork)
    }
    if (!tlAbout.reversed()) {
        toggleTween(tlAbout)
    }
    toggleTween(tlContact)
})

var myVar = setInterval(myTimer, Math.random() * (12000 - 7000) + 7000);

function myTimer() {
    if (tl.reversed() && tlWork.reversed() && tlAbout.reversed() && tlContact.reversed()) {
        $('.rollerbladers').toggleClass('rollerbladers-active')
    }
}


const skillButtonFrontend = document.querySelector('.card-front-end')

const tlSkillsFrontend = new TimelineLite({ paused: true, reversed: true })

tlSkillsFrontend.to('.list-active', .2, {
    opacity: 0,
    ease: Power2.easeOut
}).to('.frontend-skills', .2, {
    opacity: 1,
    ease: Power2.easeOut
}).to('.backend-skills', .2, {
    opacity: 0,
    ease: Power2.easeOut
})
// .to('.services', .2, {
//     opacity: 0,
//     ease: Power2.easeOut
// })

skillButtonFrontend.addEventListener('click', () => {
    toggleTween(tlSkillsFrontend)
})


const skillButtonBackend = document.querySelector('.card-back-end')

const tlSkillsBackend = new TimelineLite({ paused: true, reversed: true })

tlSkillsBackend.to('.frontend-skills', .2, {
    opacity: 0,
    ease: Power2.easeOut
}).to('.backend-skills', 1, {
    opacity: 1,
    ease: Power2.easeOut
})
// .to('.services', .2 {
//     opacity: 0,
//     ease: Power2.easeOut
// })

skillButtonBackend.addEventListener('click', () => {
    toggleTween(tlSkillsBackend)
})

const skillButtonServices = document.querySelector('.card-services')

const tlSkillsServices = new TimelineLite({ paused: true, reversed: true })

tlSkillsServices.to('.frontend-skills', .2, {
    opacity: 0,
    ease: Power2.easeOut
}).to('.services', 1, {
    opacity: 1,
    ease: Power2.easeOut
})
// .to('.backend-skills', .2, {
//     opacity: 0,
//     ease: Power2.easeOut
// })

skillButtonServices.addEventListener('click', () => {
    toggleTween(tlSkillsServices)
})


const heading = document.querySelector('.nav-closed h1')

const tlHeading = new TimelineLite({ paused: true, reversed: true })

heading.addEventListener('click', () => {
    if (!tl.reversed()) {
        toggleTween(tl)
    }
    if (!tlWork.reversed()) {
        toggleTween(tlWork)
    }
    if (!tlContact.reversed()) {
        toggleTween(tlContact)
    }
    if (!tlAbout.reversed()) {
        toggleTween(tlAbout)
    }
})

var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-prev',
      prevEl: '.swiper-button-next',
    },

    cubeEffect: {
        slideShadows: false,
    },
})

$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      direction: 'horizontal',
      loop: true,
    })
});