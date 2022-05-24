import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import AddTodo from '../components/AddTodo';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
  })
);

const TodoList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AddTodo />
    </div>
  );
};

export default TodoList;
