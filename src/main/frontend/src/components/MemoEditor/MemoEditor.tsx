import React from 'react';
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
import { Memo } from '../../api';

type Props = {
  memo: Memo;
};

const MemoEditor: React.VFC<Props> = ({ memo }: Props) => {
  return (
    <Card>
      <CardContent>
        <Box sx={{ mb: 3 }}>
          <TextField
            variant="outlined"
            fullWidth
            label="Title"
            placeholder="Title of Memo"
            value={memo.title}
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
            value={memo.body}
          />
        </Box>
        <Box>
          <FormControl component="fieldset">
            <FormLabel>Color</FormLabel>
            <RadioGroup row>
              <FormControlLabel value="" label="Default" control={<Radio />} />
              <FormControlLabel value="" label="Default" control={<Radio />} />
              <FormControlLabel value="" label="Default" control={<Radio />} />
            </RadioGroup>
          </FormControl>
        </Box>
      </CardContent>
      <CardActions>
        <Button variant="contained">Save</Button>
      </CardActions>
    </Card>
  );
};

export default MemoEditor;
