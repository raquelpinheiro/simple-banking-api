const AccountsSingleton = require('../accountsSingleton');
const AccountModel = require('../models/accountModel');

class AccountService {
  constructor() {
    this._accountsIntance = AccountsSingleton.getInstance;
  }
  createAccount(id) {
    let account = this._accountsIntance.accounts.find((c) => c.id === id);
    if (!account) {
      account = new AccountModel(id);
      this._accountsIntance.accounts.push(account);
    }
    return account;
  }
  depositAccount(account, amount) {
    if (isNaN(amount) || typeof amount !== 'number') {
      return;
    }
    if (account) account.deposit(amount);
  }
  getAccountById(id) {
    if (isNaN(id) || typeof id !== 'number') {
      return null;
    }
    return this._accountsIntance.accounts.find((c) => c.id == id);
  }
  withdraw(account, amount) {
    if (isNaN(amount) || typeof amount !== 'number') {
      return;
    }
    if (account) account.withdraw(amount);
  }
  transfer(originAccount, amount, destinationAccount) {
    if (!originAccount || !destinationAccount) return;
    originAccount.withdraw(amount);
    destinationAccount.deposit(amount);
  }
}
module.exports = AccountService;
