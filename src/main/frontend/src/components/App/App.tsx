import React from 'react';
import { CssBaseline, Grid } from '@mui/material';
import './App.css';
import Layout from '../Layout/Layout';
import PageHeader from '../PageHeader/PageHeader';
import MemoList from '../MemoList/MemoList';
import { Color, Memo } from '../../api';
import MemoViewer from '../MemoViewer/MemoViewer';
import MemoEditor from '../MemoEditor/MemoEditor';

const App = (): React.ReactElement => {
  const memoList: Memo[] = [
    { id: 1, title: 'memo1', color: Color.Default },
    { id: 2, title: 'memo2', color: Color.Default },
    { id: 3, title: 'memo3', color: Color.Default },
  ];

  const selectedMemo: Memo = { id: 1, title: 'memo1', color: Color.Default, body: 'memo body1' };

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
            <MemoViewer memo={selectedMemo} />
            <MemoEditor memo={selectedMemo} />
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default App;
