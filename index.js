let student1 = {
    name: "Faraz",
    age: 20
};

let student2 = student1;

student2.age = 25;

console.log(student1.age);
console.log(student2.age);