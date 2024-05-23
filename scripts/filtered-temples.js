const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "San Diego California",
      location: "San Diego, California, United States",
      dedicated: "1993, April, 30",
      area: 72124,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Salt Lake",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 253015,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"},
    {
      templeName: "Paris France",
      location: "Le Chesnay, France",
      dedicated: "2017, May, 21",
      area: 44050,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" }
  ];
  
  const container = document.querySelector(".container");
  
  function displayTemples(filteredTemples) {
    container.innerHTML = "";
    filteredTemples.forEach(temple => {
      const card = document.createElement("div");
      card.className = "temple-card";
  
      card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sq ft</p>
        `;
      container.appendChild(card);
    });
  }
  
  document.querySelectorAll("#menuList li a").forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const filter = event.target.textContent.toLowerCase();
      let filteredTemples;
      if (filter === "home") {
        filteredTemples = temples;
      } else if (filter === "old") {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated.split(",")[0]).getFullYear() < 1900);
      } else if (filter === "new") {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated.split(",")[0]).getFullYear() > 2000);
      } else if (filter === "large") {
        filteredTemples = temples.filter(temple => temple.area > 90000);
      } else if (filter === "small") {
        filteredTemples = temples.filter(temple => temple.area < 10000);
      }
      displayTemples(filteredTemples);
    });
  });
  
  // Initial display of all temples
  displayTemples(temples);
 
  // Select the hamburger icon and the menu
const icon = document.querySelector('.hamburger');
const menu = document.getElementById('menuList');

// Function to toggle menu visibility
function toggleMenu() {
    // Check the computed style to determine visibility
    const computedStyle = window.getComputedStyle(menu);

    // Toggle the display property based on current visibility
    if (computedStyle.display === "none" || computedStyle.display === "") {
        menu.style.display = "flex"; // Show the menu
    } else {
        menu.style.display = "none"; // Hide the menu
    }
}

// Add event listener to the hamburger icon to toggle the menu
icon.addEventListener("click", toggleMenu);

document.addEventListener("DOMContentLoaded", function() {
    const fullYear = document.querySelector("#currentyear");
    const lastModified = document.querySelector("#lastmodified");

    // Use date object
    const today = new Date();

    fullYear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

    lastModified.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat(
        "en-US", {
            dateStyle: "full"
        }
    ).format(today)}</span>`;
});