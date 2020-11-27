//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {

  constructor(balance) {
    this.openAccount = false
    this._balance = balance
  }

  open() {
    if (this.openAccount) {
      throw new ValueError()
    }
   this._balance = 0
   this.openAccount = true
  }

  close() {
    if (!this.openAccount) {
      throw new ValueError()
    }
    return this.openAccount = false
  }

  deposit(money) {
   if (!this.openAccount || money < 0) {
     throw new ValueError()
   }
   this._balance += money
  }

  withdraw(money) {
    if (!this.openAccount || this._balance < money || money < 0) {
      throw new ValueError()
   }
    this._balance -= money
  }

  get balance() {
    if (!this.openAccount) {
      throw new ValueError()
    }
    return this._balance
  }
}

export class ValueError extends Error {

  constructor() {
    super('Bank account error');
  }

}
