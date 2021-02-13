import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme) => ({
  button: {
    position: 'relative',
    left: '50%'
  },
}));

const NewTaskButton = ({clicked}) => {
  const classes = useStyles();

  return (
    <div className={classes.button}>
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<AddCircleIcon />}
        onClick={clicked}
      >
        Add Task
      </Button>
    </div>
  );
}

export default NewTaskButton;
