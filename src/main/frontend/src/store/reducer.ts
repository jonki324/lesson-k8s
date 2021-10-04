import { Memo } from '../api';
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
    case CREATE_MEMO: {
      const { memo, isEditMode } = action.payload;
      const memoList = [...state.memoList, memo];
      return { ...state, memoList, isEditMode, selectedMemo: memo };
    }
    case UPDATE_MEMO: {
      const { memo, isEditMode } = action.payload;
      const memoList = state.memoList.map((m) => (m.id === memo.id ? memo : m));
      return { ...state, memoList, isEditMode, selectedMemo: memo };
    }
    case DELETE_MEMO: {
      const { memo } = action.payload;
      const memoList = state.memoList.filter((m) => m.id !== memo.id);
      let selectedMemo = state.selectedMemo;
      let isEditMode = state.isEditMode;
      if (memo.id === state.selectedMemo.id) {
        selectedMemo = {} as Memo;
        isEditMode = true;
      }
      return { ...state, memoList, selectedMemo, isEditMode };
    }
    case SHOW_MEMO: {
      const { memo, isEditMode } = action.payload;
      return { ...state, selectedMemo: memo, isEditMode };
    }
    case FETCH_ALL_MEMO: {
      const { memoList } = action.payload;
      return { ...state, memoList };
    }
    default:
      return state;
  }
};

export default reducer;
