

// function toggleMenu() {
//     // Use style property to access CSS properties
//     if (menu.style.display === "none" || menu.style.display === "") {
//         menu.style.display = "flex";
//     } else {
//         menu.style.display = "none";
//     }
// }

const icon = document.querySelector('.hamburger');
const menu = document.getElementById('menuList');
function toggleMenu() {
    // Check the computed style to determine visibility
    const computedStyle = window.getComputedStyle(menu);

    if (computedStyle.display === "none" || computedStyle.display === "") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
}

// Add event listener to the hamburger icon
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








