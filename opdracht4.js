
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
    // return `\r\n${tvName(aTV)}
    //         \r\n${formatPrice(aTV.price)}
    //         \r\n${formatScreenSizes(aTV.availableSizes)}\r\n
    //         `;
    return `${tvName(aTV)}\r\n${formatPrice(aTV.price)}\r\n${formatScreenSizes(aTV.availableSizes)}\r\n\n`;

}

console.log(tvDescription(inventory[6]));

/* ===== OPDRACHT 4e ===== */

const tvGenerator = (allTVs) => {
    const allTVsDescription = document.getElementById("inventory");
    allTVsDescription.style.whiteSpace = "pre";
    allTVsDescription.textContent = "";
    for (let i = 0; i < allTVs.length; i++) {
        allTVsDescription.textContent += tvDescription(allTVs[i]);
    } return
};
tvGenerator(inventory);

/*
When using innerText, all it is needed is to split the lines with a return in the template literals. Like this for ex:
    return `${tvName(aTV)}
            ${formatPrice(aTV.price)}
            ${formatScreenSizes(aTV.availableSizes)}

            `;

 When using textContent, it is necessary it is better to use your text like shown below otherwise it might break the style:

return `${tvName(aTV)}\r\n${formatPrice(aTV.price)}\r\n${formatScreenSizes(aTV.availableSizes)}\r\n\n`;

(the line above also works with innerText)

and also include

<object>.style.whiteSpace = "pre"; //makes sure text wraps around, without this, the \r\n wont work

where <object> is the same one in
const <object> = document.getElementById("id");

<object>.style.lineHeight = "70%"; // ---> space between lines  //not needed

info from here: https://stackoverflow.com/questions/9980416/how-can-i-insert-new-line-carriage-returns-into-an-element-textcontent/33052216 (had to scroll)

*/

