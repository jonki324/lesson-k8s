import React, { createContext, useReducer } from 'react';
import { Memo } from '../api';
import { Actions } from './action';
import reducer from './reducer';

export type State = {
  memoList: Memo[];
  selectedMemo: Memo;
  isEditMode: boolean;
};

const initialState: State = {
  memoList: [],
  selectedMemo: {} as Memo,
  isEditMode: true,
};

type AppCtxType = {
  state: State;
  dispatch: React.Dispatch<Actions>;
};

export const AppContext = createContext({} as AppCtxType);

type Props = {
  children: React.ReactNode;
};

const StoreProvider: React.VFC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export default StoreProvider;
