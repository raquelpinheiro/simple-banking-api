const AccountViewModel = require('../viewModels/accountViewModel');

class WithdrawViewModel {
  constructor(account) {
    this.origin = new AccountViewModel(
      account.id.toString(),
      account.getBalance(),
    );
  }
}
module.exports = WithdrawViewModel;
