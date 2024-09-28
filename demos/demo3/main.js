// Вирішення проблеми з великими об'єктами
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
// створення шаблону через class
// class User{
//     private _id: number;
//     protected name :string;
//     public status:boolean;
//
//     constructor(id: number, name: string, status:boolean) {
//         this._id = id;
//         this.name = name;
//         this.status = status
//     }
//     greeting():void{ console.log('hello')}
//
//
//     get id(): number {
//         return this._id;
//     }
//
//     set id(value: number) {
//         if (value > 0)
//         this._id = value;
//     }
// }
//
//
// // let obj : User = {
// //     id: 123,
// //     name: 'Maria',
// //     status: true,
// //     greeting() {
// //         console.log('good')
// //     }
// // }
//
//
// // Другий варіант створення шаблону через 'new конструкцію' та контруктор
//
// let user = new User (124, 'sad', true)
//
// // змінюємо id
// user.id = 123
// Альтернатива всього, що є вище
var User = /** @class */ (function () {
    function User(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
    return User;
}());
var user = new User(1, 'Maria', true);
console.log(user);
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(id, name, status, login, password) {
        var _this = _super.call(this, id, name, status) || this;
        _this.login = login;
        _this.password = password;
        return _this;
    }
    return Customer;
}(User));
var customer = new Customer(1, 'Maria', true, 'Login', 'pass');
console.log(customer);
