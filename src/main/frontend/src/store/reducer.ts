import {
  CREATE_MEMO,
  UPDATE_MEMO,
  DELETE_MEMO,
  SHOW_MEMO,
  FETCH_ALL_MEMO,
  Actions,
} from './action';
import { State } from './StoreProvider';

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case CREATE_MEMO:
      return { ...state };
    case UPDATE_MEMO:
      return { ...state };
    case DELETE_MEMO:
      return { ...state };
    case SHOW_MEMO:
      return { ...state };
    case FETCH_ALL_MEMO:
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
