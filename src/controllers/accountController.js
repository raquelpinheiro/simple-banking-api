const accountService = require('../domain/services/accountService');
const AccountViewModel = require('../controllers/viewModels/accountViewModel');
const DestinationViewModel = require('./viewModels/destinationViewModel');

exports.reset = (req, res, next) => {
  res.status(200).send('OK');
};

exports.addAccount = (req, res, next) => {
  const id = req.body.destination;
  const amount = req.body.amount;
  let service = new accountService();
  var account = service.createAccount(id);
  if (!account) {
    res.status(404);
  }
  account.deposit(amount);
  let viewModelResponse = new DestinationViewModel(
    new AccountViewModel(account.id, account.balance),
  );
  res.status(201).json(viewModelResponse);
};
