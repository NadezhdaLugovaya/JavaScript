// №1

// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 увеличивает число и возвращает увеличенное значение
// d = b++; alert(d);           // 1 увеличивает число, но возвращает изначальное значение
// c = (2+ ++a); alert(c);      // 5 ++а увеличивает число и возвращает увеличенное значение, потом складывает
// d = (2+ b++); alert(d);      // 4 b++ увеличивает число, но возвращает изначальное значение
// alert(a);                    // 3 а увеличилось на единицу 2 раза
// alert(b);                    // 3 b увеличилось на единицу 2 раза

// №2

// var a = 2;
// var x = 1 + (a *= 2);        // Ответ: 5

// №3 

// let a = prompt('Введите первое целочисленное число:');
// let b = prompt('Введите второе целочисленное число:');
// if(isNaN(a) || isNaN(b)) {
//   alert('Вы ввели не число!');
// } else{
//   a = parseInt(a);
//   b = parseInt(b);
//   if (a >= 0 && b >= 0){
//     alert('Разность ' + (a - b));
//   } else if (a < 0 && b < 0){
//     alert('Произведение ' + (a * b));
//   } else {
//     alert('Сумма ' + (a + b));
//   }
// }


// № 4

// let a = prompt('Введите целочисленное число в промежутке [0..15]:');
// if(isNaN(a)){
//   alert('Вы ввели не число!');
// } else{
//   a = parseInt(a);
//   switch(a){
//     case 0:{
//         console.log(a++);
//     }case 1:{
//         console.log(a++);
//     }case 2:{
//         console.log(a++);
//     }case 3:{
//         console.log(a++);
//     }case 4:{
//         console.log(a++);
//     }case 5:{
//         console.log(a++);
//     }case 6:{
//         console.log(a++);
//     }case 7:{
//         console.log(a++);
//     }case 8:{
//         console.log(a++);
//     }case 9:{
//         console.log(a++);
//     }case 10:{
//         console.log(a++);
//     }case 11:{
//         console.log(a++);
//     }case 12:{
//         console.log(a++);
//     }case 13:{
//         console.log(a++);
//     }case 14:{
//         console.log(a++);
//     }case 15:{
//         console.log(a++);
//         break;
//     }default:{
//         console.log('значение не входит в диапозон')
//     }
//   }
// }

// № 5

// let a = prompt('Введите первое целочисленное число:');
// let b = prompt('Введите второе целочисленное число:');
// let res;

// a = parseInt(a);
// b = parseInt(b);

// if(isNaN(a) || isNaN(b)) {
//     alert('Вы ввели не число!');
// } else{
//   function sum(c, d){
//     return c + d;
//   }
//   res = sum(a, b);
//   console.log('Сумма: ' + res);

//   function sub(c, d){
//     return c - d;
//   }
//   res = sub(a, b);
//   console.log('Разница: ' + res);

//   function mult(c, d){
//     return c * d;
//   }
//   res = mult(a, b);
//   console.log('Произведение: ' + res);

//   function div(c, d){
//     return c / d;
//   }
//   res = div(a, b);
//   console.log('Частное: ' + res.toFixed(2));
// }

// № 6

// let a = prompt('Введите первое целочисленное число:');
// let b = prompt('Введите второе целочисленное число:');
// let result;

// a = parseInt(a);
// b = parseInt(b);

// function sum(c, d){
//     return c + d;
// }
// function sub(c, d){
//     return c - d;
// }
// function mult(c, d){
//     return c * d;
// }
// function div(c, d){
//     return (c / d).toFixed(2);
// }

// function mathOperation(arg1, arg2, operation){
//     switch (operation){
//         case sum: return sum(arg1, arg2);
//         case sub: return sub(arg1, arg2);
//         case mult: return mult(arg1, arg2);
//         case div: return div(arg1, arg2);
//     }
// }
// if(isNaN(a) || isNaN(b)) {
//     alert('Вы ввели не число!');
// } else{
//   result = mathOperation(a, b, div);
//   console.log(result); 
// }

// №8

// function power (val, pow){
//     if (pow === 1) return val;
//     return val * power (val, pow - 1);
// }
// let a = prompt('Введите целочисленное число:');
// let b = prompt('Введите степень числа:');
// let result;

// a = parseInt(a);
// b = parseInt(b);

// if(isNaN(a) || isNaN(b)) {
//     alert('Вы ввели не число!');
// } else{
//   let result = power(a, b);
//   alert(result);
// }