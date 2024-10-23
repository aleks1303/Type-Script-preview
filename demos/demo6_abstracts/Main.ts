

// такий клас потрібний тільки для того, щоб зробити extends в інший клас

//
abstract class Animal{


    constructor( private legs:number, brain: boolean) {
    }
//     створимо функцію як повинна кричати тварина
//     вона повинна бути абстрактна
//     - в цьому методі не буде логіки
//     - не можна створити новий class Animal, тому що там повинна бути присутня логіка
//     - при виклику цього методи зобов'язує давати логіку, якщо class Animal extends
   public abstract scream ():void
}
// якщо ми на horse викликаємо метод scream він буде передавати те, що робить пташка
// для того, щоб уникнути цього треба зробити class Animal абстрактним

class Horse extends Animal{
scream() {
    console.log('igo-go igo-go')
}
}
let horse = new Horse( 4, true)
horse.scream();

class Bird extends Animal{
    scream() {
        console.log('chirik-chirik')
    }
}
let bird = new Bird( 2, true)
bird.scream();

// для чого використовувати
// бенефіти
// якщо створити функцію, до якої приходи об'єкти типу Animal
// туди можна передати як horse, так i bird
function foobar(animal:Animal){
    animal.scream();
}
foobar(horse)
foobar(bird)













