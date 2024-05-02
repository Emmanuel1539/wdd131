
document.addEventListener("DOMContentLoaded", function() {
    const fullYear = document.querySelector("#currentyear");
    const lastModified = document.querySelector("#lastmodified");
    const icon = document.querySelector('.hamburger')

    // use date object 
    const today = new Date();

    fullYear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

    lastModified.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat(
        "en-US",
        {
            dateStyle: "full"
        }
    ).format(today)}</span>`;


}


);
