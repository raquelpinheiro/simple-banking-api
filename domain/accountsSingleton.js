'use strict';
class AccountsSingleton {
  constructor() {
    this.accounts = [];
  }
  static get getInstance() {
    if (!this.instance) {
      this.instance = new AccountsSingleton();
    }
    return this.instance;
  }
}
module.exports = AccountsSingleton;
