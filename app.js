const navButton = document.querySelector('.nav-button')
const navOpen = document.querySelector('.nav-open')

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
.to('.rollerbladers', 1, {
    height: 0,
    ease: Power2.easeOUt
})

navButton.addEventListener('click', () => {
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
// failed flight


// keyboard controls

function keyLeftHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        $('.rollerbladers').animate({
            left: "-=50"
        })
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        $('.rollerbladers').animate({
            left: "+=50"
        })
    }
}

function keyRightHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        $('.rollerbladers').animate({
            left: "-=50"
        })
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        $('.rollerbladers').animate({
            left: "+=50"
        })
    }
}

document.addEventListener("keyleft", keyLeftHandler, false);
document.addEventListener("keyright", keyRightHandler, false);