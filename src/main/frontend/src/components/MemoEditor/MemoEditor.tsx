import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  TextField,
  Box,
  Button,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { Color, Memo } from '../../api';
import useMemoList from '../../hooks/useMemoList';

type Props = {
  memo: Memo;
};

const MemoEditor: React.VFC<Props> = ({ memo }: Props) => {
  const [title, setTitle] = useState(memo.title || '');
  const [body, setBody] = useState(memo.body || '');
  const [color, setColor] = useState(memo.color || Color.Default);

  useEffect(() => {
    setTitle(memo.title || '');
    setBody(memo.body || '');
    setColor(memo.color || Color.Default);
  }, [memo]);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };
  const onChangeBody = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody(e.currentTarget.value);
  };
  const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const colorEnum = e.currentTarget.value as Color;
    setColor(colorEnum);
  };

  const isDisableSaveBtn = title.trim() === '' || body.trim() === '';

  const { createMemo, updateMemo, showMemo } = useMemoList(memo);

  const onClickSave = () => {
    const saveMemo = {
      id: memo.id,
      title,
      body,
      color,
      version: memo.version,
    };
    memo.id ? updateMemo(saveMemo) : createMemo(saveMemo);
  };

  const onClickCancel = () => {
    if (memo.id) {
      showMemo();
    } else {
      setTitle('');
      setBody('');
      setColor(Color.Default);
    }
  };

  return (
    <Card>
      <CardContent>
        <Box sx={{ mb: 3 }}>
          <TextField
            variant="outlined"
            fullWidth
            label="Title"
            placeholder="Title of Memo"
            value={title}
            onChange={onChangeTitle}
          />
        </Box>
        <Box sx={{ mb: 3 }}>
          <TextField
            variant="outlined"
            fullWidth
            multiline
            rows={6}
            label="Body"
            placeholder="Body of Memo"
            value={body}
            onChange={onChangeBody}
          />
        </Box>
        <Box>
          <FormControl component="fieldset">
            <FormLabel>Color</FormLabel>
            <RadioGroup row>
              {Object.entries(Color).map(([key, val]) => (
                <FormControlLabel
                  key={key}
                  value={val}
                  label={key}
                  control={<Radio onChange={onChangeColor} checked={color.toString() === val} />}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
      </CardContent>
      <CardActions>
        <Button variant="outlined" onClick={onClickCancel}>
          Cancel
        </Button>
        <Button variant="contained" disabled={isDisableSaveBtn} onClick={onClickSave}>
          Save
        </Button>
      </CardActions>
    </Card>
  );
};

export default MemoEditor;
