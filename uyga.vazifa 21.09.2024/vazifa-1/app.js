class shaxs {  
    constructor(name, age) {  
        this.name = name;  
        this.age = age;  
    }  

    introduce() {  
        return `Hello, my name is ${this.name}, I am ${this.age} years old.`;  
    }  
}  

const human = new shaxs("maksad", 17);  
console.log(human.introduce());