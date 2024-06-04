


const services = [
    { 
        id: "", 
        name: "Please select service"
 },
    { 
        id: "m-c", 
        name: "Farm Management & consultancy"
 },
    { 
        id: "e-l", 
        name: "Equipment leasing" 
    },
    { 
        id: "m-f", 
        name: "Maize farming investment" 
    },
    { 
        id: "v-f", 
        name: "Vegetable farming investment"
     },
    { 
        id: "c-f", 
        name: "Cassava farming investment" 
    }
];

function populateService(services, container) {
    container.innerHTML = "";
    services.forEach(service => {
        const option = document.createElement("option");
        option.textContent = service.name;
        option.value = service.id;
        container.appendChild(option);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".service-type-container");
    if (container) {
        populateService(services, container);
    }

    const submitBtn = document.querySelector(".submitBtn");
    if (submitBtn) {
        submitBtn.addEventListener("click", function (event) {
            // Prevent the default form submission
            event.preventDefault();

            // Update review count in localStorage
            let reviewCount = localStorage.getItem('messageCount') || 0;
            reviewCount = parseInt(reviewCount) + 1;
            localStorage.setItem('messageCount', reviewCount);

            // Proceed with the form submission
            const form = submitBtn.closest('form');
            if (form) {
                form.submit();
            }
        });
    }

    const hamburger = document.querySelector(".hamburger");
    const menuLinks = document.querySelector(".menuLinks");

    hamburger.addEventListener("click", function() {
        menuLinks.classList.toggle("open");
        hamburger.classList.toggle("open");
    });

   

    // thank.html to display the review count
    if (window.location.pathname.includes('thank.html')) {
        const reviewCount = localStorage.getItem('messageCount') || 0;
        const messageCountSpan = document.getElementById('messageCount');
        if (messageCountSpan) {
            messageCountSpan.textContent = reviewCount;
        }
    }
});
