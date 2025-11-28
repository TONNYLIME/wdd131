function getYear(dateString) {
    const yy = parseInt(dateString.split('-')[0]);
    return yy < 30 ? 2000 + yy : 1900 + yy;
}

const container = document.getElementById("temple-cards");

function displayTemples(filteredTemples) {
    container.innerHTML = "";

    filteredTemples.forEach(temple => {

        const card = document.createElement("section");
        card.classList.add("temple-card");

        const name = document.createElement("h2");
        name.textContent = temple.templeName;

        const location = document.createElement('p');
        location.textContent = `Location: ${temple.location}`;

        const dedication = document.createElement("p");
        dedication.textContent = `Dedication: ${temple.dedicated}`;

        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area} sq ft`;

        const img = document.createElement("img");

        console.log("Image:", temple.imageUrl); // DEBUG

        img.src = temple.imageUrl; 
        img.alt = temple.name;
        img.loading = "lazy";

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        container.appendChild(card);
    });
}

document.getElementById('home').addEventListener("click", () => {
    displayTemples(temples);
});

document.getElementById('old').addEventListener('click', () => {
    const oldTemples = temples.filter(t => getYear(t.dedicated) < 1900);
    displayTemples(oldTemples);
});

document.getElementById('new').addEventListener('click', () => {
    const newTemples = temples.filter(t => getYear(t.dedicated) > 2000);
    displayTemples(newTemples);
});

document.getElementById('large').addEventListener('click', () => {
    displayTemples(temples.filter(t => t.area > 90000));
});

document.getElementById('small').addEventListener('click', () => {
    displayTemples(temples.filter(t => t.area < 10000));
});

displayTemples(temples);
