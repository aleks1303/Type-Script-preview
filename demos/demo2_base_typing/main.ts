// Типізація
// передає тільки те, що зазночено в типі(number, string...)
// ? - означає що цей тип не обов'язково передавати, може бути, може ні
function foo (o: number, x?: string): string /*вказується що функція має повертати*/{
return o + ''
}
foo(1233322, 'ddd')
console.log(foo)

// foo('dddddd') - це помилка, стрінгу не передає

// функція передає об'єкт і в ній необхідно описати як вона буде виглядати
function bar(obj:{id:number, name: string, firstname: string}){

}
bar({id: 12, name: 'bar', firstname: 'djdjdjj'})


// перемінні приймають тільки те, що вказується в значенні
let num:number = 123
let str:string = 'string'
let bool: boolean = true
let obj:{id: number, status:boolean, asd?: string} = {id:123, status:true} /*asd не обов'язкове, тому можна не передавати*/
let arrStr:string[] = ['Alex', 'Mila', 'Nina', 'Max']
let arrNum:number[] = [12, 23, 34, 45, 13, 23]
let arrNum2:Array<number> = [23, 33, 34, 1234, 34, 43]
let arrObj:{id:number, name:string}[] = [
    {id:2, name:'mila'},
    {id:23, name:'alex'},
    {id:21, name:'Sony'}]


function asd(): {name:string}{
    return {name:'Vladislav'}
}


//  створення DOM
function divCreator (content:string, domElementWheretoAdd:HTMLElement){
let div:HTMLDivElement = document.createElement('div')

}
divCreator('Alex', document.body)



function fetchData():Promise<{id:number, userId:number, title: string, body: string}[]>{
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then((value:{id:number, userId:number, title: string, body: string}[]) => {
            return value
        });
}





