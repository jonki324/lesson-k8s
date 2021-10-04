import { useContext } from 'react';
import { DefaultApiFactory, Memo } from '../api';
import { baseURL, httpClient } from '../services/httpClient';
import { CREATE_MEMO, DELETE_MEMO, FETCH_ALL_MEMO, SHOW_MEMO, UPDATE_MEMO } from '../store/action';
import { AppContext, State } from '../store/StoreProvider';

const api = DefaultApiFactory(undefined, baseURL, httpClient);

type UseMemoListType = {
  state: State;
  createMemo: (memo: Memo) => void;
  updateMemo: (memo: Memo) => void;
  deleteMemo: () => void;
  showMemo: () => void;
  showMemoEditMode: () => void;
  fetchAllMemo: () => void;
};

const useMemoList = (currentMemo?: Memo): UseMemoListType => {
  const { state, dispatch } = useContext(AppContext);

  const createMemo = (memo: Memo) => {
    api.apiMemosPost(memo).then((response) => {
      dispatch({
        type: CREATE_MEMO,
        payload: {
          memo: response.data,
          isEditMode: false,
        },
      });
    });
  };

  const updateMemo = (memo: Memo) => {
    api.apiMemosIdPut(memo.id || 0, memo).then((response) => {
      dispatch({
        type: UPDATE_MEMO,
        payload: {
          memo: response.data,
          isEditMode: false,
        },
      });
    });
  };

  const deleteMemo = () => {
    api.apiMemosIdDelete(currentMemo?.id || 0, currentMemo).then(() => {
      dispatch({
        type: DELETE_MEMO,
        payload: {
          memo: currentMemo || ({} as Memo),
        },
      });
    });
  };

  const showMemo = () => {
    dispatch({
      type: SHOW_MEMO,
      payload: {
        memo: currentMemo || ({} as Memo),
        isEditMode: false,
      },
    });
  };

  const showMemoEditMode = () => {
    dispatch({
      type: SHOW_MEMO,
      payload: {
        memo: currentMemo || ({} as Memo),
        isEditMode: true,
      },
    });
  };

  const fetchAllMemo = () => {
    api.apiMemosGet().then((response) => {
      dispatch({
        type: FETCH_ALL_MEMO,
        payload: {
          memoList: response.data,
        },
      });
    });
  };

  return {
    state,
    createMemo,
    updateMemo,
    deleteMemo,
    showMemo,
    showMemoEditMode,
    fetchAllMemo,
  };
};

export default useMemoList;
