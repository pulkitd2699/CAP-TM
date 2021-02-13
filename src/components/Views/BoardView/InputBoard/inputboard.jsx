import React, {useState} from 'react';
import {TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const InputBoard = ({addBoard}) => {
    const classes = useStyles();
    const [boardTitle, setBoardTitle] = useState();
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" style={{display: "inline-grid"}}>
                <TextField id="outlined-basic" label="Enter Board Title" variant="outlined" onChange={(e) => setBoardTitle(e.target.value)} />
                <Button variant="outlined" color="primary" onClick={() => addBoard(boardTitle)} >Add Board</Button>
            </form>
        </div>
    );
}
 
export default InputBoard;