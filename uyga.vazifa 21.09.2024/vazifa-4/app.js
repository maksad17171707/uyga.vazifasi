class car {  
    constructor(model, brand) {  
        this.model = model;  
        this.brand = brand;  
    }  

    drive() {  
        return `avtomobil ${this.model}  ${this.brand} haydashka tayor`;  
    }  
}  

const cas = new car("BMW", "m5 f90");  
console.log(cas.drive());