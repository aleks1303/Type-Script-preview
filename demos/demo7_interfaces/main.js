// імплементація
//інтерфейс можна extends з іншими extends
//інтерфейс можна вважати контрактом з якимсь іншим об'єктом
//інтерфейс визначає як об'єкт повинен виглядати
// що він повинен робити
// але не ЯК повинен робити
function foobar(user) {
    user.greeting();
}
foobar({ name: 'John', age: 12, greeting: function () {
        console.log("hello my name is ".concat(this.name));
    } });
foobar({ name: 'Norman', age: 22, greeting: function () {
        console.log('hello my name is Norman');
    } });
// якщо приєднати ще інтерфейс, це означає ще підписання контракту
// тоді необхідно внести в клас поле: group
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.greeting = function () {
    };
    return User;
}());
var iUserArray = [];
iUserArray.push(new User());
console.log(iUserArray);
// так можна створити об'єкт
var user = { name: 'alex', age: 33, greeting: function () {
    } };
console.log(user);
var iStudentArray = [];
iStudentArray.push(new User());
console.log(iStudentArray);
// це для того, якщо невідомо що в об'єкті знаходиться, але необхідний який певний тип
var style1 = {
    bg: 'color',
    color: 'red',
    display: 'flex',
    margin: { value: 15, currency: 'px' }
};
