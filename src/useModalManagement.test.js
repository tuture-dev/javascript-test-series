import React from 'react';
import useModalManagement from './useModalManagement';
import { renderHook, act } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import store from './store';

describe('The useModalManagement hook', () => {
  it('should not throw an error', () => {
    renderHook(() => useModalManagement());
  });

  it('should describe a closed modal by default', () => {
    const { result } = renderHook(() => useModalManagement(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });
    expect(result.current.isModalOpened).toBe(false);
  });

  describe('when the openModal function is called', () => {
    it('should describe an opened modal', () => {
      const { result } = renderHook(() => useModalManagement(), {
        wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
      });
      act(() => {
        result.current.openModal();
      });
      expect(result.current.isModalOpened).toBe(true);
    });
  });
});
