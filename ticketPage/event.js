function hamburgerToggle() {
    document.getElementById('hamburgerContent').classList.toggle('active');
    document.getElementById('hamburgerLine1').classList.toggle('active');
    document.getElementById('hamburgerLine2').classList.toggle('active');
    document.getElementById('hamburgerLine3').classList.toggle('active');
    document.getElementById('body').classList.toggle('active');
}

addEventListener('resize', function () {
    if (window.innerWidth > 1370) {
        document.getElementById('hamburgerContent').classList.remove('active');
        document.getElementById('hamburgerLine1').classList.remove('active');
        document.getElementById('hamburgerLine2').classList.remove('active');
        document.getElementById('hamburgerLine3').classList.remove('active');
        document.getElementById('body').classList.remove('active');
    }
});

// Get the div element and fixed-box element
const divElement = document.querySelector('.fixedDiv');
const fixedBox = document.querySelector('.fixed-box');
const mobileBox = document.querySelector('.fixedTicket');
const rightDiv = document.querySelector('#end-div');
const eventDetails = document.querySelector('#event-description');
const ticketmenu = document.querySelector('.ticketmenu');
const hiddenClck = document.querySelector('.hiddenClck');
const blurToggle = document.querySelector('.blurToggle');
const closeDiv = document.querySelector('.closeDiv');
const hiddenClckSm = document.querySelector('.hiddenClckSm');
const body = document.querySelector('body');
const closeDiv2 = document.querySelector('.closeDiv2');

// Get the top position of the div element
const divTop = divElement.getBoundingClientRect().top + window.scrollY;


// resize when 1265 px w
if (window.innerWidth <= 1265) {
    rightDiv.classList.remove('flex');
    rightDiv.classList.add('hidden');
};

addEventListener('resize', function () {
    if (window.innerWidth <= 1265) {
        rightDiv.classList.remove('flex');
        rightDiv.classList.add('hidden');
    }
});

addEventListener('resize', function () {
    if (window.innerWidth >= 1265) {
        rightDiv.classList.add('flex');
        rightDiv.classList.remove('hidden');
    }
});

// ticketbox
addEventListener('resize', function () {
    if (window.innerWidth <= 1265) {
        function positionFixedBox() {
            if (window.scrollY >= 515) {
                fixedBox.classList.remove('fixed');
                fixedBox.classList.remove('mt-[-514px]');
            } else {
                fixedBox.classList.remove('fixed');
                fixedBox.classList.remove('mt-[-514px]');
            }
        }

        // Call positionFixedBox() on load, scroll, and resize
        window.addEventListener('load', positionFixedBox);
        window.addEventListener('scroll', positionFixedBox);
        window.addEventListener('resize', positionFixedBox);

        divElement.classList.add('hidden');
        divElement.classList.remove('flex');
        mobileBox.classList.remove('hidden');
        eventDetails.classList.add('p-10 text-center');
        eventDetails.classList.add('text-center');
    }
});

// ticketbox
addEventListener('resize', function () {
    if (window.innerWidth >= 1265) {
        function positionFixedBox() {
            if (window.scrollY >= 515) {
                fixedBox.classList.add('fixed');
                fixedBox.classList.add('mt-[-514px]');
            } else {
                fixedBox.classList.remove('fixed');
                fixedBox.classList.remove('mt-[-514px]');
            }
        }

        function positionUnFixedBox() {
            if (window.scrollY >= 515) {
                fixedBox.classList.remove('fixed');
                fixedBox.classList.remove('mt-[-514px]');
            } else {
                fixedBox.classList.add('fixed');
                fixedBox.classList.add('mt-[-514px]');
            }
        }

        // Call positionFixedBox() on load, scroll, and resize
        window.addEventListener('load', positionFixedBox);
        window.addEventListener('scroll', positionFixedBox);
        window.addEventListener('resize', positionUnFixedBox);
        window.addEventListener('resize', positionFixedBox);

        divElement.classList.remove('hidden');
        divElement.classList.add('flex');
        mobileBox.classList.add('hidden');
        eventDetails.classList.remove('p-10 text-center');
    }
});

if (window.innerWidth >= 1265) {
    function positionFixedBox() {
        if (window.scrollY >= 515) {
            fixedBox.classList.add('fixed');
            fixedBox.classList.add('mt-[-514px]');
        } else {
            fixedBox.classList.remove('fixed');
            fixedBox.classList.remove('mt-[-514px]');
        }
    }

    function positionUnFixedBox() {
        if (window.scrollY >= 515) {
            fixedBox.classList.remove('fixed');
            fixedBox.classList.remove('mt-[-514px]');
        } else {
            fixedBox.classList.add('fixed');
            fixedBox.classList.add('mt-[-514px]');
        }
    }

    // Call positionFixedBox() on load, scroll, and resize
    window.addEventListener('load', positionFixedBox);
    window.addEventListener('scroll', positionFixedBox);
    window.addEventListener('resize', positionUnFixedBox);
    window.addEventListener('resize', positionFixedBox);
}

addEventListener('resize', function () {
    if (window.innerWidth >= 1265) {
        rightDiv.classList.add('flex');
        rightDiv.classList.remove('hidden');
    }
});

hiddenClck.addEventListener('click', () => {
    blurToggle.classList.add('blur');
    ticketmenu.style.display = 'block';
    ticketmenu.classList.remove('hidden');
    ticketmenu.style.justifyContent = 'center';
    ticketmenu.style.display = 'flex';
    ticketmenu.style.alignItems = 'center';
    ticketmenu.style.transform = 'translate(0%, 0%)';
    body.style.overflow = "hidden";
    body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
});

if (window.innerWidth <= 1265) {
    mobileBox.classList.remove('hidden');
} else if (window.innerWidth >= 1265) {
    mobileBox.classList.add('hidden');
}

hiddenClckSm.addEventListener('click', () => {
    blurToggle.classList.add('blur');
    ticketmenu.style.display = 'block';
    ticketmenu.classList.remove('hidden');
    ticketmenu.style.justifyContent = 'center';
    ticketmenu.style.display = 'flex';
    ticketmenu.style.alignItems = 'center';
    ticketmenu.style.transform = 'translate(0%, 0%)';
    body.style.overflow = "hidden";
    body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";

});

closeDiv.addEventListener('click', () => {
    blurToggle.classList.remove('blur');
    ticketmenu.style.display = 'none';
    ticketmenu.classList.add('hidden');
    body.style.overflow = "visible";
    body.style.backgroundColor = "";
});

closeDiv2.addEventListener('click', () => {
    blurToggle.classList.remove('blur');
    ticketmenu.style.display = 'none';
    ticketmenu.classList.add('hidden');
    body.style.overflow = "visible";
    body.style.backgroundColor = "";
});

let currPrice = 0;
const price = document.querySelector('.ticketPrice');
const prices = document.querySelector('.ticketPrices');

Ticket.addEventListener('change', () => {
    if (Ticket.value === 'limitedVision') {
        currPrice = 100;
        price.innerHTML = "Ticket price: " + currPrice + "€";
    } else if (Ticket.value === 'frontRow') {
        currPrice = 150;
        price.innerHTML = "Ticket price: " + currPrice + "€";
    } else if (Ticket.value === 'premiumSeats') {
        currPrice = 200;
        price.innerHTML = "Ticket price: " + currPrice + "€";
    }
});

Tickets.addEventListener('change', () => {
    if (Tickets.value === 'limitedVision') {
        currPrice = 100;
        prices.innerHTML = "Ticket price: " + currPrice + "€";
    } else if (Tickets.value === 'frontRow') {
        currPrice = 150;
        prices.innerHTML = "Ticket price: " + currPrice + "€";
    } else if (Tickets.value === 'premiumSeats') {
        currPrice = 200;
        prices.innerHTML = "Ticket price: " + currPrice + "€";
    }
});