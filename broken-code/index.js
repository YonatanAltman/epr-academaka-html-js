// Calc the price of product with discount. Add days for the Discount
// Print the result to the result span
// DO NOT TOUCH THE HTML!!!!!!



document.getElementsByTagName('button')[0]
    .addEventListener("click", calc);


function calc() {
    let product = getProductPriceDiscount();
    const {price,discount} = product;
    let finalPrice =
        price - (price / 100 * discount);

    document.getElementById('result').innerText = finalPrice;

}

function getProductPriceDiscount() {
    var price = document.getElementById('price').value;
    var discount = document.getElementById('discount').value;
    var days = document.getElementById('days').value;


    return { price, discount, days };
}