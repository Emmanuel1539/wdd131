 // Define static values for temperature and wind speed
 const temperature = 34; // in Celsius
 const windSpeed = 12; // in Km/h

 // Function to calculate wind chill factor
 function calculateWindChill(temperature, windSpeed) {
     // Formula for calculating wind chill factor in Celsius
     return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
 }

 // Calculate wind chill factor
 const windChill = calculateWindChill(temperature, windSpeed);

 // Display wind chill factor in the weather section
 document.querySelector('.windchill').textContent = `${windChill.toFixed(1)}°C`;


 
document.addEventListener("DOMContentLoaded", function() {
    const fullYear = document.querySelector("#currentyear");
    const lastModified = document.querySelector("#lastmodified");

    // use date object 
    const today = new Date();

    fullYear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

    lastModified.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat(
        "en-US",
        {
            dateStyle: "full"
        }
    ).format(today)}</span>`;
});