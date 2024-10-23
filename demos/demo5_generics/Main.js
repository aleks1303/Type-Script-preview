// ID - є довільногою назвою
// дозволяє уникнути типізації параметрів (any , none)
// Кожному окремому user задаєм тип (13, 14 )
var User = /** @class */ (function () {
    function User(id, name) {
        this.id = id;
        this.name = name;
        this.id = id;
        this.name = name;
    }
    return User;
}());
var user1 = new User(123, 'Olga');
var user2 = new User('123User', 'Oleg');
