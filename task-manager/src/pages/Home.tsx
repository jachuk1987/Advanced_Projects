import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { Task } from '../types/task';

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 2 }}>My Tasks</Typography>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </Container>
  );
};

export default Home;
