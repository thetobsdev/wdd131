// Footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Product array
const products = [
    { id: "p1", name: "Smart Thermostat" },
    { id: "p2", name: "Wireless Headphones" },
    { id: "p3", name: "Electric Scooter" },
    { id: "p4", name: "Security Camera" }
];

// Populate product select
const productSelect = document.getElementById("product");
if (productSelect) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// Review counter
if (document.getElementById("reviewCount")) {
    let count = Number(localStorage.getItem("reviewCount")) || 0;
    count++;
    localStorage.setItem("reviewCount", count);
    document.getElementById("reviewCount").textContent = count;
}
