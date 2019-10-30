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
    if (!tlWork.reversed()) {
        toggleTween(tlWork)
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

workButton.addEventListener('click', () => {
    if (!tl.reversed()) {
        toggleTween(tl)
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
    toggleTween(tlAbout)
})



const contactButton = document.querySelector('#contact-button')

const tlContact = new TimelineLite({ paused: true, reversed: true })

tlContact.to('#nav-open-contact', 1, {
    top: '50%',
    ease: Power2.easeOut
})

contactButton.addEventListener('click', () => {
    if (!tl.reversed()) {
        toggleTween(tl)
    }
    if (!tlWork.reversed()) {
        toggleTween(tlWork)
    }
    toggleTween(tlContact)
})

var myVar = setInterval(myTimer, Math.random() * (12000 - 7000) + 7000);

function myTimer() {
    if (tl.reversed() && tlWork.reversed() && tlAbout.reversed() && tlContact.reversed()) {
        $('.rollerbladers').toggleClass('rollerbladers-active')
    }
}