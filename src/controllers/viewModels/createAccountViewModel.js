const AccountViewModel = require('../viewModels/accountViewModel');

class CreateViewModel {
  constructor(account) {
    this.destination = new AccountViewModel(
      account.id.toString(),
      account.getBalance(),
    );
  }
}
module.exports = CreateViewModel;
