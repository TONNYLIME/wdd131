const mainnav = document.querySelector('.navigation');
const hambbutton = document.querySelector('#menu');

    //toggle betwee hamburger ≡ and close x
    hambbutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');

        hambbutton.classList.toggle('show');
    });
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Durban South Africa",
    location: "Durban, South Africa",
    dedicated: "2020 February 16",
    area: 19860,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-7923-thumb.jpg"
  },
  {
    templeName: "Nairobi Kenya",
    location: "Nairobi city, Kenya",
    dedicated: "2025 May 18",
    area: 19870,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-56575-thumb.jpg"
    },

  { 
    templeName: "Manilla Philippines",
    location: "Manilla, Philippines",
    dedicated: "1984 September 25-27",
    area: 22683,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/manila-philippines-temple/manila-philippines-temple-48890-thumb.jpg"
    }
];
const container = document.querySelector("#temple-cards");

function displayTemples(filteredList) {
    container.innerHTML = ""; // Clear previous content

    filteredList.forEach(t => {
        container.innerHTML += `
            <div class="temple-card">
                <img src="${t.imageUrl}" alt="${t.templeName}">
                <div class="info">
                    <h3>${t.templeName}</h3>
                    <p><strong>Location:</strong> ${t.location}</p>
                    <p><strong>Dedicated:</strong> ${t.dedicated}</p>
                    <p><strong>Area:</strong> ${t.area} sq ft</p>
                </div>
            </div>
        `;
    });
}

// Display all by default
displayTemples(temples);


document.getElementById("home").addEventListener("click", () => {
    displayTemples(temples);
});

document.getElementById("old").addEventListener("click", () => {
    displayTemples(
        temples.filter(t => parseInt(t.dedicated.substring(0, 4)) < 1900)
    );
});

document.getElementById("new").addEventListener("click", () => {
    displayTemples(
        temples.filter(t => parseInt(t.dedicated.substring(0, 4)) > 2000)
    );
});

document.getElementById("large").addEventListener("click", () => {
    displayTemples(temples.filter(t => t.area > 90000));
});

document.getElementById("small").addEventListener("click", () => {
    displayTemples(temples.filter(t => t.area <= 10000));
});

