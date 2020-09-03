import { useState } from 'react';

function useModalManagement() {
  const [isModalOpened, setModalVisibility] = useState(false);

  function openModal() {
    setModalVisibility(true);
  }

  function closeModal() {
    setModalVisibility(false);
  }

  return {
    isModalOpened,
    openModal,
    closeModal,
  };
}

export default useModalManagement;
