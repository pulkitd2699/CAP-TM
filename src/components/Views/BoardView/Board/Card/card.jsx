import React from 'react';
import {Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(1,1,1,2),
        margin: theme.spacing(1)
    }
}));

const Card = ({id, content, index}) => {
    const classes = useStyle();
    return (
        <Paper className={classes.card}>{content}</Paper>
    );
}
 
export default Card;