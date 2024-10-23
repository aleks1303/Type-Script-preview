// такий клас потрібний тільки для того, щоб зробити extends в інший клас
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//
var Animal = /** @class */ (function () {
    function Animal(legs, brain) {
        this.legs = legs;
    }
    return Animal;
}());
// якщо ми на horse викликаємо метод scream він буде передавати те, що робить пташка
// для того, щоб уникнути цього треба зробити class Animal абстрактним
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Horse.prototype.scream = function () {
        console.log('igo-go igo-go');
    };
    return Horse;
}(Animal));
var horse = new Horse(4, true);
horse.scream();
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bird.prototype.scream = function () {
        console.log('chirik-chirik');
    };
    return Bird;
}(Animal));
var bird = new Bird(2, true);
bird.scream();
// для чого використовувати
// бенефіти
// якщо створити функцію, до якої приходи об'єкти типу Animal
// туди можна передати як horse, так i bird
function foobar(animal) {
    animal.scream();
}
foobar(horse);
foobar(bird);
