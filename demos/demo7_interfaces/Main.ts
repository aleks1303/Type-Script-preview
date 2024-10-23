
// імплементація
//інтерфейс можна extends з іншими extends
//інтерфейс можна вважати контрактом з якимсь іншим об'єктом
//інтерфейс визначає як об'єкт повинен виглядати
// що він повинен робити
// але не ЯК повинен робити

//інтерфейс зазвичай починаються з літери I
// це для того, щоб розуміти що це саме інтерфейс


interface IUser {
    name: string;
    age: number;
    // всі методи в інтерфейсі є абстрактними
    // для того, щоб використовувати в майбутньому
    greeting ():void
}

function foobar (user:IUser){
    user.greeting()
}

foobar({name: 'John', age: 12, greeting():void{
        console.log(`hello my name is ${this.name}`)
    }});
foobar({name: 'Norman', age: 22, greeting():void{
        console.log('hello my name is Norman')
    }})

//інтерфейси є заміною абстрактного класу

//якщо в class implements IUser це вимагає дотримуватись порядку
// який зазначений в інтерфейсі

interface IStudent {
    group: string
}

// якщо приєднати ще інтерфейс, це означає ще підписання контракту
// тоді необхідно внести в клас поле: group
class User implements IUser, IStudent {
    age: number;
    name: string;
    group: string;


    greeting(): void {
    }
}

let iUserArray:IUser[] = [];
iUserArray.push(new User());

console.log(iUserArray)
// так можна створити об'єкт
let user : IUser = {name:'alex', age: 33, greeting() {
    }}
console.log(user)



let iStudentArray:IStudent[] = []
iStudentArray.push(new User())
console.log(iStudentArray)



// Інтерфейси з невизначеним набором полів

// наприклад описувати характеристикам якісь стилі
// як зробити інтерфейс з динамічною характеристикою стилів
// з динамічною варіацією цих характеристик
interface IStyle{
[key:string] : string | {value:number, currency: string}

}


// це для того, якщо невідомо що в об'єкті знаходиться, але необхідний який певний тип
let style1:IStyle = {
    bg:'color',
    color:'red',
    display: 'flex',
    margin: {value:15, currency:'px'}
}
