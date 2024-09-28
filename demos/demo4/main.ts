


// class User{
//     name: string;
//     private _gender:string
//
//
//     constructor(name:string, gender: string) {
//         this.name = name
//         this._gender = gender;
//     }
//
//     set gender(value: string) {
//         if(value === 'male' || value === 'female')
//         this._gender = value;
//     }
// }
//
// let user = new User('Bob', 'dog')




//Альтернатива всього вищого, яка обмежує від здійснення помилок (на прикладі вибору gender)


enum Gender{
    Male,
    Female
}

class User{
    name:string;
    gender: Gender


    constructor(name: string, gender: Gender) {
        this.name = name;
        this.gender = gender;
    }
}
let user = new User('Bob', Gender.Male);
// далі можна робити первірку чи що завгодно
if(user.gender === Gender.Female){
//     ......
}