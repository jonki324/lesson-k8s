import React from 'react';
import { TableRow, TableCell, Button, ButtonGroup } from '@mui/material';
import { Memo } from '../../api';

type Props = {
  memo: Memo;
};

const MemoItem: React.VFC<Props> = ({ memo }: Props) => {
  return (
    <TableRow>
      <TableCell>{memo.id}</TableCell>
      <TableCell>{memo.title}</TableCell>
      <TableCell>{memo.color}</TableCell>
      <TableCell>
        <ButtonGroup variant="contained">
          <Button>Show</Button>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );
};

export default MemoItem;
