const hamburger = document.querySelector('.hamburger');
const hamburgerClose = document.querySelector('.hamburger-close');
const mobileMenu = document.getElementById('mobileMenu');
const navMenu = document.querySelector('#g-navigation nav ul');
const body = document.body;



// Funkce pro přepnutí menu
function toggleMenu() {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle('open');
}


hamburgerClose.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

// Otevření menu
hamburger.addEventListener('click', (e) => {
    toggleMenu();
    e.stopPropagation();
});


// Kliknutí uvnitř menu neuzavře menu
mobileMenu.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Zavření menu při kliknutí mimo něj
document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('open')) {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
    }
});

// Zavření menu při scrollování
window.addEventListener('scroll', () => {
    if (mobileMenu.classList.contains('open')) {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
    }
});



// Zavření menu klikem na odkaz
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open'); // plynulé zavření
    });
});



const btn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btn.classList.add("show");
    } else {
        btn.classList.remove("show");
    }
});

btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});






if (window.matchMedia("(max-width: 768px)").matches) {
    // // Hamburger
    let lastScroll = 0; // poslední známá pozice scrollu
    let scrollDistance = 0; // vzdálenost, o kterou se scrolovalo od zobrazení hamburgeru
    const hamburg = document.querySelector('.hamburger');
    const threshold = 200; // minimální vzdálenost pro schování hamburgeru

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScroll) {
            // Scroll dolů
            scrollDistance += currentScroll - lastScroll; // přičti rozdíl k aktuální vzdálenosti scrollu

            // Pokud vzdálenost přesáhne threshold (200px), schovej hamburger
            if (scrollDistance > threshold) {
                hamburg.classList.add('hide');
            }
        } else {
            // Scroll nahoru
            scrollDistance = 0; // resetuj vzdálenost při scrollování nahoru
            hamburg.classList.remove('hide');
        }

        lastScroll = currentScroll; // aktualizuj poslední scroll pozici
    });





    // Skrývání navigační lišty - jen pro mobily, aby měl prostor vedle notch barvu
    window.addEventListener('scroll', function () {
        var navBar = document.querySelector('.nav-bar');

        // Pokud je pozice scrollu větší než polovina stránky (50%)
        if (window.innerHeight / 2.5 < window.scrollY) {
            navBar.style.display = 'none';
        }

        else {
            navBar.style.display = 'flex';
            navBar.style.backgroundColor = '#e4cea1';
        }

        const bottomBar = document.querySelector('.bottom-bar');
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;

        const isAtBottom = window.scrollY + window.innerHeight >= docHeight - 300;

        if (scrollTop > 0 && window.scrollY + window.innerHeight >= docHeight - 300 && window.scrollY > 50) {

            bottomBar.style.display = 'flex';
        } else {
            bottomBar.style.display = 'none';
        }

    });
}

