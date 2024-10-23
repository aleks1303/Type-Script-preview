// Типізація
// передає тільки те, що зазночено в типі(number, string...)
// ? - означає що цей тип не обов'язково передавати, може бути, може ні
function foo(o, x) {
    return o + '';
}
foo(1233322, 'ddd');
console.log(foo);
// foo('dddddd') - це помилка, стрінгу не передає
// функція передає об'єкт і в ній необхідно описати як вона буде виглядати
function bar(obj) {
}
bar({ id: 12, name: 'bar', firstname: 'djdjdjj' });
// перемінні приймають тільки те, що вказується в значенні
var num = 123;
var str = 'string';
var bool = true;
var obj = { id: 123, status: true };
var arrStr = ['Alex', 'Mila', 'Nina', 'Max'];
var arrNum = [12, 23, 34, 45, 13, 23];
var arrNum2 = [23, 33, 34, 1234, 34, 43];
var arrObj = [
    { id: 2, name: 'mila' },
    { id: 23, name: 'alex' },
    { id: 21, name: 'Sony' }
];
function asd() {
    return { name: 'Vladislav' };
}
//  створення DOM
function divCreator(content, domElementWheretoAdd) {
    var div = document.createElement('div');
}
divCreator('Alex', document.body);
function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (value) { return value.json(); })
        .then(function (value) {
        return value;
    });
}
