'use strict';
class AccountModel {
  constructor(id) {
    this.id = id;
    this.balance = 0;
  }
  deposit(amount) {
    this.balance += amount;
  }
  getBalance() {
    return this.balance;
  }
  withdraw(amount) {
    this.balance -= amount;
  }
}
module.exports = AccountModel;
