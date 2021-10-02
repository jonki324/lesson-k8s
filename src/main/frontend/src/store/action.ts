import { Memo } from '../api';

export const SHOW_MEMO = 'SHOW_MEMO' as const;
export const CREATE_MEMO = 'CREATE_MEMO' as const;
export const UPDATE_MEMO = 'UPDATE_MEMO' as const;
export const DELETE_MEMO = 'DELETE_MEMO' as const;
export const FETCH_ALL_MEMO = 'FETCH_ALL_MEMO' as const;

const showMemo = (payload: { memo: Memo; isEditMode: boolean }) => ({
  type: SHOW_MEMO,
  payload,
});

const createMemo = (payload: { memo: Memo; isEditMode: boolean }) => ({
  type: CREATE_MEMO,
  payload,
});

const updateMemo = (payload: { memo: Memo; isEditMode: boolean }) => ({
  type: UPDATE_MEMO,
  payload,
});

const deleteMemo = (payload: { memo: Memo }) => ({
  type: DELETE_MEMO,
  payload,
});

const fetchAllMemo = () => ({
  type: FETCH_ALL_MEMO,
});

export type Actions = ReturnType<
  typeof showMemo | typeof createMemo | typeof updateMemo | typeof deleteMemo | typeof fetchAllMemo
>;
