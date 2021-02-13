import React, {useState} from 'react';
import {Collapse, Paper, Typography} from '@material-ui/core';
import {fade, makeStyles} from '@material-ui/core/styles';
import InputCard from './inputcard';

const useStyle = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2)
    },
    inputCard: {
        padding: theme.spacing(1,1,1,2),
        margin: theme.spacing(0,1,1,1),
        background: '#3f51b5',
        '&:hover': {
            backgroundColor: fade('#000', 0.25)
        }
    }
}));

const InputContainer = ({title, saveCard}) => {
    const classes = useStyle();
    const [open, setOpen] = useState(false);
    return (
        <div className={classes.root}> 
            <Collapse in={open}>
                <InputCard setOpen={setOpen} title={title} saveCard={saveCard} />
            </Collapse>
            <Collapse in={!open}>
                <Paper 
                    className={classes.inputCard} 
                    elevation={0} 
                    onClick={() => setOpen(!open)}
                >
                    <Typography>+ Add a card</Typography>
                </Paper>
            </Collapse>
        </div>
    );
}
 
export default InputContainer;