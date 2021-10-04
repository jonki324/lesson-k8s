import React from 'react';
import { TableRow, TableCell, Button, ButtonGroup } from '@mui/material';
import { Memo } from '../../api';
import useMemoList from '../../hooks/useMemoList';

type Props = {
  memo: Memo;
};

const MemoItem: React.VFC<Props> = ({ memo }: Props) => {
  const { deleteMemo, showMemo, showMemoEditMode } = useMemoList(memo);

  return (
    <TableRow>
      <TableCell>{memo.id}</TableCell>
      <TableCell>{memo.title}</TableCell>
      <TableCell>{memo.color}</TableCell>
      <TableCell>
        <ButtonGroup variant="contained">
          <Button onClick={showMemo}>Show</Button>
          <Button onClick={showMemoEditMode}>Edit</Button>
          <Button variant="outlined" onClick={deleteMemo}>
            Delete
          </Button>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );
};

export default MemoItem;
