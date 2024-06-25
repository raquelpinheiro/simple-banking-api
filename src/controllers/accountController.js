const AccountService = require('../domain/services/accountService');
const CreateAccountViewModel = require('../controllers/viewModels/createAccountViewModel');
const WithdrawViewModel = require('../controllers/viewModels/withdrawViewModel');
const TransferWiewModel = require('../controllers/viewModels/transferViewModel');

exports.eventsToAccount = (req, res, next) => {
  const type = req.body.type;
  if (type === 'deposit') {
    deposit(req, res, next);
  } else if (type === 'withdraw') {
    withdraw(req, res, next);
  } else if (type === 'transfer') {
    transfer(req, res, next);
  }
};
exports.findAccount = (req, res, next) => {
  const id = Number(req.query.account_id);
  let service = new AccountService();
  const account = service.getAccountById(id);
  if (!account) {
    res.status(404).json(0);
  } else {
    res.status(200).json(account.balance);
  }
};

function deposit(req, res, next) {
  const id = Number(req.body.destination);
  const amount = req.body.amount;
  let service = new AccountService();
  let account = service.createAccount(id);
  if (account) {
    service.depositAccount(account, amount);
    res.status(201).json(new CreateAccountViewModel(account));
  }
}
function withdraw(req, res, next) {
  const id = Number(req.body.origin);
  const amount = req.body.amount;
  let service = new AccountService();
  let account = service.getAccountById(id);
  if (!account) {
    res.status(404).json(0);
  } else {
    service.withdraw(account, amount);
    res.status(201).json(new WithdrawViewModel(account));
  }
}

function transfer(req, res, next) {
  const originId = Number(req.body.origin);
  const destinationId = Number(req.body.destination);
  const amount = req.body.amount;
  let service = new AccountService();
  let originAccount = service.getAccountById(originId);
  if (!originAccount) {
    res.status(404).json(0);
  } else {
    let destinationAccount = service.createAccount(destinationId);
    if (!destinationAccount) res.status(404).json(0);

    service.transfer(originAccount, amount, destinationAccount);
    res
      .status(201)
      .json(new TransferWiewModel(originAccount, destinationAccount));
  }
}
