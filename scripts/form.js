

// const products = [
//     {
//         id: "",
//         name: "Please select a product",
        
//     },
//     {
//         id: "fc-1888",
//         name: "Flux capacitor",
//         avgRating: 4.5
//     },
//     {
//         id: "fc-2050",
//         name: "Power laces",
//         avgRating: 4.7
//     },
//     {
//         id: "fs-1987",
//         name: "Time circuits",
//         avgRating: 3.5
//     },
//     {
//         id: "ac-2000",
//         name: "Low voltage reactor",
//         avgRating: 3.9
//     },
//     {
//         id: "jj-1969",
//         name: "Warp equalizer",
//         avgRating: 5.0
//     }
// ];

// function displayProducts(products, container) {
//     container.innerHTML = "";
//     products.forEach(product => {
//         const opt = document.createElement("option");
//         opt.textContent = product.name;
//         opt.value = product.id;
//         container.appendChild(opt);
//     });
// }

// document.addEventListener("DOMContentLoaded", function() {
//     const container = document.querySelector(".products_container");
//     displayProducts(products, container);

//     const fullYear = document.querySelector("#currentyear");
//     const lastModified = document.querySelector("#lastmodified");

//     // Use date object
//     const today = new Date();

//     fullYear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
//     lastModified.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat(
//         "en-US", {
//             dateStyle: "full"
//         }
//     ).format(today)}</span>`;
// });

// const ratingRadios = document.querySelectorAll("input[name='rating']");
// ratingRadios.forEach((radio) => {
//     radio.addEventListener("click", function() {
//         // Clear all filled classes
//         document.querySelectorAll(".star").forEach(star => {
//             star.classList.remove("filled");
//         });
//         ratingRadios.forEach(radio => {
//             radio.classList.remove("filled");
//         });

//         // Add filled class to the clicked radio button and its stars
//         const value = this.value;
//         this.classList.add("filled");
//         document.querySelectorAll(`label[for='star${value}'] .star`).forEach(star => {
//             star.classList.add("filled");
//         });
//     });
// });


const products = [
    {
        id: "",
        name: "Please select a product",
    },
    {
        id: "fc-1888",
        name: "Flux capacitor",
        avgRating: 4.5
    },
    {
        id: "fc-2050",
        name: "Power laces",
        avgRating: 4.7
    },
    {
        id: "fs-1987",
        name: "Time circuits",
        avgRating: 3.5
    },
    {
        id: "ac-2000",
        name: "Low voltage reactor",
        avgRating: 3.9
    },
    {
        id: "jj-1969",
        name: "Warp equalizer",
        avgRating: 5.0
    }
];

function displayProducts(products, container) {
    if (!container) return;
    container.innerHTML = "";
    products.forEach(product => {
        const opt = document.createElement("option");
        opt.textContent = product.name;
        opt.value = product.id;
        container.appendChild(opt);
    });
}

function setupRatingSystem() {
    const ratingRadios = document.querySelectorAll("input[name='rating']");
    ratingRadios.forEach((radio) => {
        radio.addEventListener("click", function() {
            // Clear all filled classes
            document.querySelectorAll(".star").forEach(star => {
                star.classList.remove("filled");
            });
            ratingRadios.forEach(radio => {
                radio.classList.remove("filled");
            });

            // Add filled class to the clicked radio button and its stars
            const value = this.value;
            this.classList.add("filled");
            for (let i = 1; i <= value; i++) {
                document.querySelector(`label[for='star${i}'] .star`).classList.add("filled");
            }
        });
    });
}

function initializeIndexPage() {
    const container = document.querySelector(".products_container");
    displayProducts(products, container);

    const fullYear = document.querySelector("#currentyear");
    const lastModified = document.querySelector("#lastmodified");

    if (fullYear && lastModified) {
        const today = new Date();
        fullYear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
        lastModified.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat("en-US", {
            dateStyle: "full"
        }).format(today)}</span>`;
    }

    setupRatingSystem();
}

function initializeReviewPage() {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount = parseInt(reviewCount, 10) + 1;
    localStorage.setItem('reviewCount', reviewCount);

    const reviewCountElement = document.getElementById('review-count');
    if (reviewCountElement) {
        reviewCountElement.textContent = reviewCount;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const isReviewPage = document.body.classList.contains('review-page');
    if (isReviewPage) {
        initializeReviewPage();
    } else {
        initializeIndexPage();
    }
});
