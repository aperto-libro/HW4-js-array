console.log('------------------------------------------------- # 5');

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   'Вы согласны?',
//   () => {
//     console.log('Вы согласились.');
//   }, // нужно обновить данное место
//   () => {
//     console.log('Вы отменили выполнение.');
//   } // нужно обновить данное место
// );

console.log('------------------------------------------------- # 6');

let str = 'my-short-string';
console.log(str.split('-'));

console.log('------------------------------------------------- # 7');

let arr = ['JavaScript', 2015];
console.log(arr.join(' '));

console.log('------------------------------------------------- # 8');

let users = [
  { id: 1, name: 'Vic', age: 21 },
  { id: 2, name: 'Petya', age: 30 },
  { id: 3, name: 'Jon', age: 5 },
];

let result = users.filter((item) => item.age < 20);

console.log(result);

console.log('------------------------------------------------- # 9');

let users1 = [
  { id: 1, name: 'Vic', age: 21 },
  { id: 2, name: 'Petya', age: 30 },
  { id: 3, name: 'Jon', age: 5 },
];

let names = users1.map((item) => item.name);

console.log(names); // [Vic, Petya, Jon]

console.log('------------------------------------------------- # 10');

let arr1 = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
    }
  }
}

filterRangeInPlace(arr1, 1, 4);

console.log(arr1);

console.log('------------------------------------------------- # 11');

function fromStrToArr(string, separator) {
  return string.split(separator);
}

let str1 = 'Lorem--ipsum--dolor--sit--amet';
let str2 = 'Ударим крепким сном по мукам совести!';

console.log(fromStrToArr(str1, '--'));
console.log(fromStrToArr(str2, ' '));

console.log('------------------------------------------------- # 12');

console.log('------------------------------------------------- # 13');
