interface Human {
    name: string; 
    age: number;
    gender: string;
}

const person = {
    name: "eric",
    age: 25,
    gender: "male"
}

const name = 'eric',
    age = 24,
    gender = "male";

// 인자를 파싱해서 전달해주는 방법 
// const sayHi = (name: string, age: number , gender?: string): string => {    
//     return `Hello ${name}, you are ${age}, you are a ${gender}`;
// };

// console.log(sayHi(name, age, gender));

// 인터페이스로 전달하는 방법
const sayHi = (Person: Human): string => {
    return `Hello ${Person.name}, you are ${Person.age}, you are a ${Person.gender}`;   // interface의 속성을 파싱해서 전달해준다
}

console.log(sayHi(person));
// sayHi(name, "444", age);

export {};