const accountService = require('../domain/services/accountService');
const AccountViewModel = require('../controllers/viewModels/accountViewModel');
const DestinationViewModel = require('./viewModels/destinationViewModel');

exports.eventsToAccount = (req, res, next) => {
  const id = Number(req.body.destination);
  const amount = req.body.amount;
  const type = req.body.type;
  let service = new accountService();
  if (type === 'deposit') {
    let account = service.createAccount(id);
    account.deposit(amount);
    res.status(201).json(getAccountToViewModel(account));
  }
};
exports.findAccount = (req, res, next) => {
  const id = Number(req.query.account_id);
  let service = new accountService();
  const account = service.getAccountById(id);
  if (!account) {
    res.status(404).json(0);
  } else {
    res.status(200).json(account.balance);
  }
};

function getAccountToViewModel(account) {
  return new DestinationViewModel(
    new AccountViewModel(account.id.toString(), account.balance),
  );
}
