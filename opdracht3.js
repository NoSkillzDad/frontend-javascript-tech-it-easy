/* ===== OPDRACHT 3a ===== */
const tvBrands = inventory.map((tvBrand) => {
    return tvBrand.brand;
});
console.log(tvBrands);


/* ===== OPDRACHT 3b ===== */

const findTVBrands = (allTVs) => {
    return allTVs.map((tvBrand) => {
        return tvBrand.brand;
    });
};

// const tvBrandsArray = findTVBrands(inventory);
// console.log(tvBrandsArray);
console.log(findTVBrands(inventory))