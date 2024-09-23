class BankAccount {  
    constructor() {  
        this.balance = 0; 
    }  

    deposit(amount) {  
        this.balance += amount;
    }  

    withdraw(amount) {  
        if (amount <= this.balance) {  
            this.balance -= amount; 
        } else {  
            console.log("Insufficient funds"); 
        }  
    }  

    checkBalance() {  
        return this.balance;
    }  
}  

const account = new BankAccount();  
account.deposit(100);  
console.log(`Balance after deposit: ${account.checkBalance()}`); 
account.withdraw(50);  
console.log(`Balance after withdrawal: ${account.checkBalance()}`); 
account.withdraw(100); 