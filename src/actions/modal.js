const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

function openModal() {
  return {
    type: OPEN_MODAL,
  };
}

function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}

export { OPEN_MODAL, CLOSE_MODAL, openModal, closeModal };
