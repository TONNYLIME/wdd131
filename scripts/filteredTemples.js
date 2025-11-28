function getYear(dateString) {
    const yy = parseInt(dateString.split('')[0]);

    if (yy < 30) {
        return 2000 + yy;
    } else {
        return 1900 + yy
    }
}
const container = document.getElementById("temple-cards");
// function  creating temple cards
function displayTemples(filteredTemples) {
    container.innerHTML = "";

// looping thru each temple
filteredTemples.forEach(
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
    console.log("Image:", temple.imageUrl);

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
}
// filter functions

// home show all temples
document.getElementById('home').addEventListener ("click", () =>{
    displayTemples(temples);
});

//old built b4 1900
document.getElementById('old').addEventListener('click', () => {
    const oldTemples = temples.filter(t => getYear(t.dedicated) < 1900);
    
    displayTemples(oldTemples);
}
);

document.getElementById('new').addEventListener('click', () => {
    const newTemples = temples.filter(t => getYear(t.dedicated) > 2000);
    displayTemples(newTemples);
}
);

document.getElementById('large').addEventListener('click', () => {
    const largeTemples = temples.filter(t => t.area > 90000);
        displayTemples(largeTemples);
    });


document.getElementById('small').addEventListener('click', () => {
    const smallTemples =  temples.filter(t => t.area < 10000);
        displayTemples(smallTemples);
    });


displayTemples(temples);