import React from 'react';
import { Container } from '@mui/material';
import Header from '../Header/Header';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Container maxWidth="xl">{children}</Container>
      </main>
    </>
  );
};

export default Layout;
