import React from 'react';
import { CssBaseline } from '@mui/material';
import Layout from '../Layout/Layout';
import './App.css';

const App = (): React.ReactElement => {
  return (
    <>
      <CssBaseline />
      <Layout>
        <div>Hello</div>
      </Layout>
    </>
  );
};

export default App;
