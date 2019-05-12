function solve() {
    let products = {};

    let buttons = Array.from(document.querySelectorAll('button'));
    let buyButton = buttons.pop();

    buttons.forEach((btn) => btn.addEventListener('click', addProduct));
    buyButton.addEventListener('click',buyProducts);

    let textArea = document.getElementsByTagName('textarea')[0];

    function addProduct(event) {
        let div = event.target.parentNode;
        let productName = div.children[1].textContent;
        let price = +div.children[2].textContent.split(' ')[1];
        
        if (!products.hasOwnProperty(productName)) {
            products[productName] = price;
        } else {
            products[productName] += price;
        }
        textArea.value += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`;
    }


    function buyProducts() {
        let listOfProducts = [];
        for (let key of Object.keys(products)) {
            listOfProducts.push(key);
        }

        let total = Object.values(products).reduce((acc,el) => {
            return acc + el;
        },0);
        console.log(total);
        textArea.value += `You bought ${listOfProducts.join(', ')} for ${total.toFixed(2)}.\n`;
    }
}
