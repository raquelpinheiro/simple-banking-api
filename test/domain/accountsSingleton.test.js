const AccountsSingleton = require('../../src/domain/accountsSingleton');

test('Should to be the same instance when call more than one time', () => {
  let firstInstance = AccountsSingleton.getInstance;
  let secondInstance = AccountsSingleton.getInstance;
  let thirdInstance = AccountsSingleton.getInstance;
  expect(firstInstance).toBe(secondInstance);
  expect(secondInstance).toBe(thirdInstance);
});

test('Should reset instance', () => {
  let instance = AccountsSingleton.getInstance;
  AccountsSingleton.resetInstance();
  expect(instance).toBeNull();
});
