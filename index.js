var firstName = 'cass';
var age = 30;
var active = true;
// will be array of strings
var names = ["1", "2", "3", "4"];
// let names: string[] = [1,2,3,4] Gives an error 
var studentTypes;
(function (studentTypes) {
    studentTypes[studentTypes["pending"] = 0] = "pending";
    studentTypes[studentTypes["active"] = 1] = "active";
    studentTypes[studentTypes["graduated"] = 2] = "graduated";
    studentTypes[studentTypes["teacherAssistants"] = 3] = "teacherAssistants";
    studentTypes[studentTypes["teachers"] = 4] = "teachers"; //4
})(studentTypes || (studentTypes = {}));
var myStatus = studentTypes.graduated;
console.log("myStatus is", myStatus); //Results in number 2
if (myStatus == studentTypes.graduated) {
    console.log("The student is graduated");
}
switch (myStatus) {
    case Number(studentTypes.active):
        console.log("Student is active");
        break;
    case Number(studentTypes.graduated):
        console.log("Student is graduated");
        break;
    default:
        console.log("🫤");
}
console.log("My first name is ".concat(firstName));
console.log(names);
var code = "aa11";
console.log("My code is ".concat(code));
function sum(arr) {
    return arr.reduce(function (total, num) { return total + num; });
}
var numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);
console.log(sum(numbers));
Can;
reassign;
value;
of;
complexItem;
var complexItem = { name: "damian" };
complexItem = { title: "professor" };
complexItem = "string";
console.log("complexItem", complexItem);
var bloodType;
(function (bloodType) {
    bloodType[bloodType["aPositive"] = 0] = "aPositive";
    bloodType[bloodType["bPositive"] = 1] = "bPositive";
    bloodType[bloodType["oNegative"] = 2] = "oNegative";
    bloodType[bloodType["oPositive"] = 3] = "oPositive";
})(bloodType || (bloodType = {}));
var me = {
    name: "Cass",
    age: 30,
    height: 177,
    isCool: true,
    bloodType: bloodType.aPositive
};
console.log({me});
