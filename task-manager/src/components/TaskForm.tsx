import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

interface Props {
  onAdd: (title: string) => void;
}

const TaskForm: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="New Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" sx={{ mt: 1 }}>
        Add Task
      </Button>
    </Box>
  );
};

export default TaskForm;
