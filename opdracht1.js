/* ===== OPDRACHT 1a ===== */

const tvTypes = inventory.map((tvType) => {
    return tvType.type;
});

console.log(tvTypes);

/* ===== OPDRACHT 1b ===== */

const soldout = inventory.filter((so) => {
    return so.originalStock === so.sold;
});

console.log(soldout);

/* ===== OPDRACHT 1c ===== */

const ambilight = inventory.filter((al) => {
    return al.options.ambiLight;
});

console.log(ambilight);

/* ===== OPDRACHT 1d ===== */
inventory.sort((a, b) => {
    return a.price - b.price;
});

console.log(inventory);