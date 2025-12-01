const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];
// Populate product dropdown
document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("product");

    products.forEach(prod => {
        const option = document.createElement("option");
        option.value = prod.id;        // ID used as value
        option.textContent = prod.name; // Display name
        select.appendChild(option);
    });
});
// Read URL params
const params = new URLSearchParams(window.location.search);

let summaryHTML = "<ul>";
params.forEach((value, key) => {
    summaryHTML += `<li><strong>${key}:</strong> ${value}</li>`;
});
summaryHTML += "</ul>";
document.getElementById("summary").innerHTML = summaryHTML;

// localStorage review counter
let count = localStorage.getItem("reviewCount");
count = count ? Number(count) + 1 : 1;
localStorage.setItem("reviewCount", count);
document.getElementById("count").textContent = count;