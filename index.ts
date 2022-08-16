let firstName: string = 'cass';
let age: number = 30;
let active: boolean = true

// will be array of strings
let names: string[] = ["1","2","3","4"]
// let names: string[] = [1,2,3,4] Gives an error 

enum studentTypes {
    pending, //0
    active, //1
    graduated, //2
    teacherAssistants, //3
    teachers //4
}

let myStatus = studentTypes.graduated

// console.log("myStatus is", myStatus) //Results in number 2
// if (myStatus == studentTypes.graduated) {
// console.log(`The student is graduated`)
// }
// switch (myStatus) {
// case Number(studentTypes.active):
//     console.log("Student is active") 
// break;
// case Number(studentTypes.graduated):
//     console.log("Student is graduated")
//     break;
//     default:
//     console.log("🫤")
// }


// console.log(`My first name is ${firstName}`)
// console.log(names)

// let code: string | number = "aa11"

// console.log(`My code is ${code}`)

// function sum (arr: number[]): number { // :number is implicit
//     return arr.reduce((total: number, num: number) => total + num)
// }
let numbers: number[] = [1,2,3,4,5,6]
// console.log(numbers)

// console.log(sum(numbers))

//Can reassign value of complexItem
// let complexItem: any = { name: "damian"}
// complexItem= {title: "professor"}
// complexItem = "string"

// console.log("complexItem", complexItem)

enum bloodType {
    aPositive,
    bPositive,
    oNegative,
    oPositive,
}
interface human {
    name: string,
    age: number,
    height: number,
    isCool: boolean,
    bloodType?: bloodType
}



const me: human = {
    name: "Cass",
    age: 30,
    height: 177,
    isCool: true,
    bloodType: bloodType.aPositive
}

console.log(me)