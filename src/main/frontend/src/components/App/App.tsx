import React from 'react';
import { CssBaseline, Grid } from '@mui/material';
import Layout from '../Layout/Layout';
import PageHeader from '../PageHeader/PageHeader';
import './App.css';

const App = (): React.ReactElement => {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Grid container>
          <Grid item xs={12} textAlign="center">
            <PageHeader>Memo List</PageHeader>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default App;
