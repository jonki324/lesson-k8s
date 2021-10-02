import React from 'react';
import { Avatar, Card, CardHeader, CardContent, Typography } from '@mui/material';
import { Memo } from '../../api';

type Props = {
  memo: Memo;
};

const MemoViewer: React.VFC<Props> = ({ memo }: Props) => {
  return (
    <Card>
      <CardHeader avatar={<Avatar>{memo.color}</Avatar>} title={memo.title} />
      <CardContent>
        <Typography>{memo.body}</Typography>
      </CardContent>
    </Card>
  );
};

export default MemoViewer;
