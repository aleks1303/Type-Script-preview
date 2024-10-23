

// ID - є довільногою назвою
// дозволяє уникнути типізації параметрів (any , none)
// Кожному окремому user задаєм тип (13, 14 )

class User <ID>{
    constructor(private id: ID, private name: string) {
        this.id = id;
        this.name = name
    }
}
let user1  = new User <number>( 123, 'Olga');
let user2 = new User <string>('123User', 'Oleg')