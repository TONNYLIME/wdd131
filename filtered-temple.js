document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.querySelector('lastModified').textContent = `last Modification:${document.lastModified}`;

const hamButton = document.querySelector('#hamButton');
hamButton.addEventListener('click', () => {
});
function toggleActive(element) {

}
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
    {
      templeName: "Johannesburg South Africa",
      location: "Johannesburg",
      dedicated: "",
      area: 450,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg"
    },
      {
        templeName: "Durban south africa",
        location : "Durban",
        dedicated: "",
        area: "",
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/durban-south-africa/400x250/6-426fa670f89e6779345a29d01be2f28bc985132c.jpg"

      },
      {
        templeName: "Kinshasa congo",
        location : "Congo",
        dedicated: "",
        area: "",
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kinshasa-democratic-republic-of-congo/400x250/01-Kinshasa-DRCongo-Temple-2208932.jpg"

      }


    // Add more temple objects here...
  ];
createTempleCard(temples);

const nonutahLink = document.querySelector("#nonutah");

nonutahLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temples => temples.location.includes("Utah")));
  
});

function createTempleCard(filteredTemples) {
  document.querySelector(".res-grid").innerHTML - "";
  filteredTemples.forEach(temple => {
  let card = document.createElement("section");
  let name = document.createElement("h3");
  let location = document.createElement("p");
  let dedication = document.createElement("p");
  let area = document.createElement("p");
  let img = document.createElement("img");

  name.textContent = temples.templeName;
  location.innerHTML =`<span class="label">Location:</span> ${temple.location}`;
  dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedication}`;
  area.innerHTML = `<span class="label">Size:</span>${temple.area} sq ft`;
  img.setAttribute("src", temple.imageUrl);
  img.setAttribute("src",`${temple.templeName} Temple`);
  img.setAttribute("loading", 'lazy');

  card.appendChild(name);
  card.appendChild(location);
  card.appendChild(dedication);
  card.appendChild(area);
  card.appendChild(img);

  document.querySelector(".main").appendChild(card);

});
}