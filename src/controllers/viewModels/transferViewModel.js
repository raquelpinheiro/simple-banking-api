const AccountViewModel = require('../viewModels/accountViewModel');

class TransferViewModel {
  constructor(accountOrigin, accountDestination) {
    this.origin = new AccountViewModel(
      accountOrigin.id.toString(),
      accountOrigin.getBalance(),
    );
    this.destination = new AccountViewModel(
      accountDestination.id.toString(),
      accountDestination.getBalance(),
    );
  }
}
module.exports = TransferViewModel;
