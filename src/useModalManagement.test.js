import useModalManagement from './useModalManagement';
import { renderHook, act } from '@testing-library/react-hooks';

describe('The useModalManagement hook', () => {
  it('should not throw an error', () => {
    renderHook(() => useModalManagement());
  });

  it('should describe a closed modal by default', () => {
    const { result } = renderHook(() => useModalManagement());
    expect(result.current.isModalOpened).toBe(false);
  });

  describe('when the openModal function is called', () => {
    it('should describe an opened modal', () => {
      const { result } = renderHook(() => useModalManagement());
      act(() => {
        result.current.openModal();
      });
      expect(result.current.isModalOpened).toBe(true);
    });
  });
});
