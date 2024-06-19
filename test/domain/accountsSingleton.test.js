const AccountsSingleton = require('../../src/domain/accountsSingleton');

test('Should to be the same instance when call twice', () => {
  let firstInstance = AccountsSingleton.getInstance;
  let secondInstance = AccountsSingleton.getInstance;
  expect(firstInstance).toBe(secondInstance);
});
