function solve() {
  let store = {};
  let profit = 0;
  
  let loadBtn = document.getElementsByTagName('button')[0];
  let buyBtn = document.getElementsByTagName('button')[1];
  let endBtn = document.getElementsByTagName('button')[2];

  loadBtn.addEventListener('click', loadProducts);
  buyBtn.addEventListener('click', buyProducts);
  endBtn.addEventListener('click', endDay);


  function loadProducts() {
    let input = JSON.parse(document.getElementsByTagName('textarea')[0].value);
    console.log(input);
    let output = document.getElementsByTagName('textarea')[2];
    for (let product of input) {
      if (!store.hasOwnProperty(product.name)) {
        store[product.name] = {
          price: product.price,
          quantity: product.quantity
        };
        output.value += `Successfully added ${product.quantity} ${product.name}. Price: ${product.price}\n`;
      } else {
        store[product.name].price = product.price;
        store[product.name].quantity += product.quantity;
        output.value += `Successfully added ${product.quantity} ${product.name}. Price: ${product.price}\n`;
      }
    }
    console.log(store);
  }

  function buyProducts() {
    let product = JSON.parse(document.getElementsByTagName('textarea')[1].value);
    if (store.hasOwnProperty(product.name) && store[product.name].quantity >= product.quantity) {
      store[product.name].quantity -= product.quantity;
      document.getElementsByTagName('textarea')[2].value += `${product.quantity} ${product.name} sold for ${product.quantity * store[product.name].price}.\n`;
      profit += product.quantity * store[product.name].price;
    } else {
      document.getElementsByTagName('textarea')[2].value += "Cannot complete order.\n";
    }
  }

  function endDay(){
    let output = document.getElementsByTagName('textarea')[2];
    output.value += `Profit: ${profit.toFixed(2)}.\n`;
    document.getElementsByTagName('button')[0].removeEventListener('click', loadProducts);
    document.getElementsByTagName('button')[1].removeEventListener('click', buyProducts);
    document.getElementsByTagName('button')[2].removeEventListener('click', endDay);
  }
}