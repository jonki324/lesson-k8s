import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { Memo } from '../../api';
import MemoItem from '../MemoItem/MemoItem';

type Props = {
  memoList: Memo[];
};

const MemoList: React.VFC<Props> = ({ memoList }: Props) => {
  return (
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
  );
};

export default MemoList;
