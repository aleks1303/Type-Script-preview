
// об'єкти які собою представляють type можуть виступати в якості
// обгорток для певних типів даних

//Тип  string
type WrapString = string;
let a1:WrapString = 'Hello World'

// Tип enum
// type виступає в якості enum

type LikeEnum = 'one' | 'two' | {name:'kokos'};
// в змінну a2 можна запровадити тільки 'one or two'
// в іншому випадку помилка
let a2:LikeEnum = 'two'
let b1:LikeEnum = {name:'kokos'}

//Тип об'єкт або число
// можна передати як об'єкт з string, так і число
type ObjOrNum = {a: string} | number
let a3: ObjOrNum = {a:'this is ...'}
let a4:ObjOrNum = 234

// або передати саме слово яке повинно бути в об'єкті
// це можна передавати і як в enum, це зручніше
type ObjSting = {a:'string word'}
let a5:ObjSting = {a:'string word'}


// тип як наслідування від interface
// & це додаток, що повинно містити в собі змінна а6
// можна і без &
interface ISomeInterface {
    name:string
}
type ISomeInterfaceType = ISomeInterface & {age:number} & {status:boolean};
let a6:ISomeInterfaceType = {name:'Alex', age:34, status:true}

// це зручна річ для якихось типів даних не розписуючи довгу синтаксичну конструкцію


