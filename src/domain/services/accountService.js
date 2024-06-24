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
  depositAccount(id, amount) {
    let accountUpdated;
    let index = this._accountsIntance.accounts.findIndex((c) => c.id == id);
    if (index >= 0) {
      accountUpdated = this._accountsIntance.accounts[index];
      accountUpdated.deposit(amount);
    }
    return accountUpdated;
  }
  getAccountById(id) {
    if (isNaN(id) || typeof id !== 'number') {
      return null;
    }
    return this._accountsIntance.accounts.find((c) => c.id == id);
  }
}
module.exports = AccountService;
