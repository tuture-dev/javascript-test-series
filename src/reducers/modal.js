import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal';

const initialState = {
  isOpened: false,
};

export default function modal(state = initialState, action) {
  if (action.type == OPEN_MODAL) {
    return { isOpened: true };
  } else if (action.type == CLOSE_MODAL) {
    return { isOpened: false };
  } else {
    return state;
  }
}
