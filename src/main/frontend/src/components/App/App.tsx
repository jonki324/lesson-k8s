import React, { useEffect } from 'react';
import { CssBaseline, Grid } from '@mui/material';
import './App.css';
import Layout from '../Layout/Layout';
import PageHeader from '../PageHeader/PageHeader';
import MemoList from '../MemoList/MemoList';
import MemoViewer from '../MemoViewer/MemoViewer';
import MemoEditor from '../MemoEditor/MemoEditor';
import useMemoList from '../../hooks/useMemoList';

const App = (): React.ReactElement => {
  const { state, fetchAllMemo } = useMemoList();

  const { memoList, selectedMemo, isEditMode } = state;

  useEffect(() => {
    fetchAllMemo();
  }, []);

  return (
    <>
      <CssBaseline />
      <Layout>
        <Grid container spacing={2}>
          <Grid item xs={12} textAlign="center">
            <PageHeader>Memo List</PageHeader>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MemoList memoList={memoList} />
          </Grid>
          <Grid item xs={12} lg={6}>
            {isEditMode ? <MemoEditor memo={selectedMemo} /> : <MemoViewer memo={selectedMemo} />}
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default App;
