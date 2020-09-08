import { useDispatch, useSelector } from 'react-redux';
import * as modalActions from './actions/modal';

function useModalManagement() {
  const isModalOpened = useSelector((state) => state.modal.isOpened);
  const dispatch = useDispatch();

  function openModal() {
    dispatch(modalActions.openModal());
  }

  function closeModal() {
    dispatch(modalActions.closeModal());
  }

  return {
    isModalOpened,
    openModal,
    closeModal,
  };
}

export default useModalManagement;
