class talaba {  
    constructor(name, age, talabaID, profession) {  
        this.name = name;  
        this.age = age;  
        this.talabaID = talabaID;  
        this.profession = profession;  
        
        
    }  

    introduce() {  
        return `Hello, my name is ${this.name}, I am ${this.age} years old, student Id ${this.talabaID} my profession is an ${this.profession}`;  
    }  
}  

const human = new talaba("maksad", 17, 2177707, 
 "ITSHNIK");  
console.log(human.introduce());