import useModalManagement from './useModalManagement';
import testHook from './testHook';

describe('The useModalManagement hook', () => {
  it('should not throw an error', () => {
    testHook(useModalManagement);
  });
});
