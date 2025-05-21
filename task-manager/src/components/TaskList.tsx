import React from 'react';
import { Task } from '../types/task';
import {
  List, ListItem, ListItemText, IconButton, Checkbox,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<Props> = ({ tasks, onToggle, onDelete }) => (
  <List>
    {tasks.map((task) => (
      <ListItem
        key={task.id}
        secondaryAction={
          <IconButton edge="end" onClick={() => onDelete(task.id)}>
            <DeleteIcon />
          </IconButton>
        }
      >
        <Checkbox
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <ListItemText
          primary={task.title}
          sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        />
      </ListItem>
    ))}
  </List>
);

export default TaskList;
