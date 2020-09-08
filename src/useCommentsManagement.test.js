import { renderHook, act } from '@testing-library/react-hooks';
import useCommentsManagement from './useCommentsManagement';

describe('The useCommentsManagement hook', () => {
  describe('when the fetchComments function is called', () => {
    it('should update the state after a successful request', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useCommentsManagement());

      act(() => {
        result.current.fetchComments();
      });
      await waitForNextUpdate();

      return expect(result.current.comments.length).not.toBe(0);
    });
  });
});
