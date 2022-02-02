/* ===== OPDRACHT 2a ===== */

const tvsSold = (fullInventory) => {
    let sold = 0;
    for (let i = 0; i < fullInventory.length; i++) {
        sold += fullInventory[i].sold;
    }
    return sold;
};

console.log(tvsSold(inventory));

/* ===== OPDRACHT 2b ===== */
const tvSoldElement = document.getElementById("tvSold");
tvSoldElement.textContent = tvsSold(inventory);
tvSoldElement.style.color = "darkgreen";

/* ===== OPDRACHT 2c ===== */

const tvsBought = (fullInventory) => {
    let bought = 0;
    for (let i = 0; i < fullInventory.length; i++) {
        bought += fullInventory[i].originalStock;
    }
    return bought;
};

console.log(tvsBought(inventory));

/* ===== OPDRACHT 2d ===== */
const tvBoughtElement = document.getElementById("tvBought");
tvBoughtElement.textContent = tvsBought(inventory);
tvBoughtElement.style.color = "blue";

/* ===== OPDRACHT 2e ===== */
const tvInStock = document.getElementById("tvInStock");
tvInStock.textContent = tvsBought(inventory) - tvsSold(inventory);
tvInStock.style.color = "red";
