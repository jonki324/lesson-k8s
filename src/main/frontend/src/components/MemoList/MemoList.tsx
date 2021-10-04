import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Box, Button } from '@mui/material';
import { Memo } from '../../api';
import MemoItem from '../MemoItem/MemoItem';
import useMemoList from '../../hooks/useMemoList';

type Props = {
  memoList: Memo[];
};

const MemoList: React.VFC<Props> = ({ memoList }: Props) => {
  const { showMemoEditMode } = useMemoList();

  return (
    <>
      <Box textAlign="right" sx={{ mb: 1 }}>
        <Button variant="contained" onClick={showMemoEditMode}>
          Create Memo
        </Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Color</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {memoList.map((memo) => {
            return <MemoItem key={memo.id} memo={memo} />;
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default MemoList;
