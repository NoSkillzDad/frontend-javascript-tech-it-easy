
/* ===== OPDRACHT 4a ===== */
const tvName = (tvObject) => {
    return `${tvObject.brand} ${tvObject.type} - ${tvObject.name}`;
};
console.log(tvName(inventory[6]));

/* ===== OPDRACHT 4b ===== */
const formatPrice = (tvPrice) => {
    let rest = (Math.floor(tvPrice) === tvPrice) ? '-' : (tvPrice % 1).toFixed(2).substring(2);
    const thisString = "€" + Math.floor(tvPrice) + "," + rest;
    return thisString;
};
console.log(formatPrice(359.99));

/* ===== OPDRACHT 4c ===== */
const formatScreenSizes = (screenSizes)  => {
    let formattedScreenSize = '';
    for (let i = 0; i < screenSizes.length; i++) {
        formattedScreenSize += (i < screenSizes.length - 1) ? `${screenSizes[i]} inch (${Math.floor(screenSizes[i] * 2.54)} cm) | ` :`${screenSizes[i]} inch (${Math.floor(screenSizes[i] * 2.54)} cm)`;
    }
    return formattedScreenSize;
};

console.log(formatScreenSizes(inventory[3].availableSizes));

/* ===== OPDRACHT 4d ===== */

const tvDescription = (aTV) => {
    return `${tvName(aTV)}
            ${formatPrice(aTV.price)}
            ${formatScreenSizes(aTV.availableSizes)}
            
            `;
}

console.log(tvDescription(inventory[6]));

/* ===== OPDRACHT 4e ===== */

const tvGenerator = (allTVs) => {
    for (let i = 0; i < allTVs.length; i++) {
         document.getElementById("inventory").innerText += tvDescription(allTVs[i]);
    } return
};

tvGenerator(inventory);
