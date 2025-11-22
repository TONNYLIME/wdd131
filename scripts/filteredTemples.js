const container = document.getElementById("temple-cards");
// looping thru each temple
temples.forEach(
    temple => {
    //card container
     const card = document.createElement ("section");
     card.classList.add("temple-card");

     // temple name
     const name = document.createElement("h2");
     name.textContent = temple.templeName;

     // location
     const location = document.createElement('p');
     location.textContent =`Location: ${temple.location}`;

     // dedication
     const dedication = document.createElement("p");
     dedication.textContent = `Dedication: ${temple.dedicated}`

     // area
     const area = document.createElement("p");
     area.textContent = `Area: ${temple.area} sq ft`;
    

    // image with lazing loading
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.name;
    img.loading = "lazy";

    // append everything to the card
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);
    

    // append card to page
    container.appendChild(card);
    }
);