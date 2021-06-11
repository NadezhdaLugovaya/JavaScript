// № 1

// let n = prompt('Ведите число от 0 до 999:');
// let obj = {};

// function NumToObj(n, obj){
//   if (!isNaN(n) && n > 0 && n < 999){
//     obj.единицы = n % 10;
//     obj.десятки = Math.trunc(n / 10) % 10;
//     obj.сотни = Math.trunc(n / 100) % 10;
//     return obj;
//   } else {
//     console.log('Вы ввели не корректное число!');
//     return obj = 0;
//   }
// }
// NumToObj(n, obj);
// console.log(obj);


// № 2

// let besket = [ 
//   {name: 'Яблоки', count: 1, price: 35}, 
//   {name: 'Груши', count: 5, price: 45}, 
//   {name: 'Банан', count: 1, price: 50}
// ];

// function countBasketPrice (arr){
//   let price = 0;
//   for(let i = 0; i < arr.length; i++){
//     price += arr[i].count * arr[i].price;
//   }
//   return price;
// }
// console.log(countBasketPrice(besket));
