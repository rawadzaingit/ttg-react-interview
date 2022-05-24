import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
  })
);

type AddToDoProps = {
  onAddTask?: (todo: string) => void;
};

const AddTodo = ({ onAddTask }: AddToDoProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        id="addTaskInput"
        label="Title"
        variant="outlined"
        margin="dense"
        autoFocus={true}
      />
      <Button variant="contained">Add Task</Button>
    </div>
  );
};

export default AddTodo;
