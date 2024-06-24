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
  static resetInstance() {
    this.instance = undefined;
  }
}
module.exports = AccountsSingleton;
