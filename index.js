
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var aboutSection = document.getElementById('about');
    var scrollTop = window.scrollY;

    if (aboutSection.offsetTop <= scrollTop) {
        // document.getElementById('navbar-brand').classList.add('text-dark');
        document.getElementById('h').classList.remove('text-white');
        document.getElementById('navbar').classList.remove('navbar-dark');
        document.getElementById('navbar').classList.add('nav-scroll');
        document.getElementById('h').classList.add('text-black');

    } else {
        document.getElementById('h').classList.add('text-white');
        document.getElementById('navbar').classList.add('navbar-dark');

        document.getElementById('navbar').classList.remove('nav-scroll');
    }

});


function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

function isInViewport(element) {
    var bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function handleScroll() {
    var clientsSection = document.getElementById('clients');
    if (isInViewport(clientsSection)) {
        animateValue("happyCustomers", 0, 850, 1000); 
        animateValue("complete", 0, 230, 1000); 
        animateValue("lines", 8500, 9450, 1000); 
        animateValue("files", 0, 780, 1000); 
        window.removeEventListener('scroll', handleScroll);
    }
}

window.addEventListener('scroll', handleScroll);

