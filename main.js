let products = { 
  jeans: {
    name: 'jeans',
    id: 1234,
    size: 10, 
    price: 150, 
    amount: 100,
    color: 'red',
    getPrice: function (discount){
      return this.price * (1 - (discount || 0));
    }  
  }, 
  boots: {
    name: 'boots',
    id: 5678,
    size: 16, 
    price: 170, 
    amount: 100,
    color: 'black',
    getPrice: function (discount){
      return this.price * (1 - (discount || 0));
    }  
  }
}
let basket = {
  items: [],
  addItem: function (productId, quantity){
    for (let i = 0; i < this.items.length; i++){
      if (this.items[i].productId == productId){
        this.items[i].quantity += quantity;
        return;
      }
      this.items.push({productId, quantity});
    }
  }
}
  
function outputCatalog(products,basket){
  let element = document.getElementById('catalog');
  for (items in products){
    let table = document.createElement('div');
    table.className = 'item__catalog';
    table.innerHTML = '<span>Товар: </span>' + products[items].name + '<span> Размер: </span>' + products[items].size + '<span> Цена: </span>' + products[items].price + '<span> Количество: </span>' + products[items].amount;
    table.innerHTML += '<button onclick=\'addToCard(' + products[items].id +')\'>Купить</button>' 
    element.appendChild(table);
  }
  
}
  
function countBasketPrice (basket){
  let price = 0;
  let basketItems= basket.items;
  for(let i = 0; i < basketItems.length; i++){
    let productId = basketItems[i].productId;
    price += products[productId].getPrice(0.1) * basketItems[i].quantity;
  }
  return price;
}
function countBasket (basket){
  let count = 0;
  let basketItems = basket.items;
  for (let i = 0; i < basketItems.length; i++){
    count += basketItems[i].quantity;
  }
  return count;
}

basket.init = function(){
  let element = document.getElementById('basket');
  if (basket[this.items].length === 0){
    element.textContent = 'Корзина пуста';
  }else {
    element.textContent = 'В корзине ' + countBasket(basket) + ' товаров на сумму ' +countBasketPrice(basket);
  }
}
function addToCard(id){
  basket.addItem(id, 1),
  basket.init();
}
outputCatalog(products);
