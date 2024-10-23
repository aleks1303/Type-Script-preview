
// Вирішення проблеми з великими об'єктами



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


class User {
    constructor(private id: number, public name: string, public status:boolean) {

    }
}

let user = new User(1, 'Maria', true)
console.log(user);




class Customer extends User{

    constructor(id: number, name: string, status: boolean, public login: string, public password: string) {
        super(id, name, status);
    }
}

let customer = new Customer(1, 'Maria', true, 'Login', 'pass')

console.log(customer);


// наслідування type script
function foobar (user: User) {

    // let customer = user as Customer  /*user сприймається як customer*/
    // console.log(customer.login); /*в user немає логін*/

//аналогічно з перевіркою
    if(user instanceof User) {
        console.log(user.name, user.status)
    }
    if (user instanceof Customer){
        let customer = user as Customer
        console.log(customer.name, customer.status, customer.login, customer.password)
    }
}
foobar(user)
foobar(customer)
































