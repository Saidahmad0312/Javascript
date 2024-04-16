class BankAccount {
    constructor(ownerName, accountNumber) {
      this.ownerName = ownerName;
      this.accountNumber = accountNumber;
      this.balance = 0;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`${amount} sum pul hisobingizga qo'shildi.`);
      this.showBalance();
    }
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log("Yetarli mablag' mavjud emas.");
      } else {
        this.balance -= amount;
        console.log(`${amount} sum pul hisobingizdan yechib olindi.`);
        this.showBalance();
      }
    }
  
    showBalance() {
      console.log(`Hisob raqami: ${this.accountNumber}`);
      console.log(`Foydalanuvchi: ${this.ownerName}`);
      console.log(`Joriy balans: ${this.balance} sum`);
    }
  }
  
  const account1 = new BankAccount("Asilbek Raximov", "123456789");
  const account2 = new BankAccount("Saidahmad Abdullayev", "987654321");
  
  account1.deposit(1000);
  account1.withdraw(200);
  account1.deposit(500);
  
  account2.deposit(2000);
  account2.withdraw(1500);
  account2.withdraw(500);
  
  account1.showBalance();
  account2.showBalance();
  