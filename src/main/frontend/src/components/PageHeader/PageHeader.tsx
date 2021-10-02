import React from 'react';

type Props = {
  children: React.ReactNode;
};

const PageHeader: React.VFC<Props> = ({ children }: Props) => {
  return <h1>{children}</h1>;
};

export default PageHeader;
