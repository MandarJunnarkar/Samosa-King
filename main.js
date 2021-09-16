// Force scroll position to top on page load 
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// for splash intro
const splash = document.querySelector('.splash')

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        splash.classList.add('display-none')
    }, 3000);
})

// Auto slide 1
var img = document.getElementById('home-img');
var images = ['home-img2.png', 'home-img3.png', 'home-img1.png'];
var x = 0;
function slide() {
    if (x < images.length) {
        x = x + 1;
    } else {
        x = 1;
    }

    img.innerHTML = `<img src="${images[x - 1]}">`;
}

setInterval(slide, 5000);

//Auto slide 2
var img2 = document.getElementById('sliding-image');
var dish = ['samosa2.png', 'samosa3.png', 'samosa1.png'];
var y = 0;
function slideDish() {
    if (x < dish.length) {
        y = y + 1;
    } else {
        y = 1;
    }

    img2.innerHTML = `<img src="${dish[y - 1]}">`;
}

setInterval(slideDish, 5000);

// appear on scrolling after certian scrollY 
window.onscroll = function () {
    scrollAppear();
    scrollRotate();
};

function scrollAppear() {
    myID = document.getElementById("home2");
    myID2 = document.getElementById("home3a")
    myID3 = document.getElementById("carousel")
    myID4 = document.getElementById("footerwa")

    
    var myScrollFunc = function () {
        // for home2 div
        var z = window.scrollY;
        if (z >= 300) {
            myID.className = "home2 show"
        } else {
            myID.className = "home2 hide"
        }

        // for home2 div
        var a = window.scrollY;
        if (a >= 950) {
            myID2.className = "home3 show"
        } else {
            myID2.className = "home3 hide"
        }

        // for carousel 
        var c = window.scrollY;
        if (c >= 1300) {
            myID3.className = "slider show"
        } else {
            myID3.className = "slider hide"
        }

        // for home2 div
        var b = window.scrollY;
        if (b >= 2100) {
            myID4.className = "footerwa show"
        } else {
            myID4.className = "footerwa hide"
        }
    }

    window.addEventListener("scroll", myScrollFunc);
};


// rotate element on scroll 
function scrollRotate() {
    let image = document.getElementById("reload");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}