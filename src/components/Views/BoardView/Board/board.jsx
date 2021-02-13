import React from 'react';
import {Paper, CssBaseline} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Title from './Title/title';
import Card from './Card/card';
import InputContainer from './Input/inputcontainer';

const useStyle = makeStyles((theme) => ({
    root: {
        width: '300px',
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginLeft: theme.spacing(1)
    }
}));

const Board = ({tasks, titles, saveCard}) => {
    const classes = useStyle();
    let mappedTasks = {};

    for(let i=0;i<titles.length;i++){
        const filteredTasks = tasks.filter(task => task.section.toLowerCase() === titles[i].toLowerCase()); 
        mappedTasks[titles[i]] = (filteredTasks);
    }

    return (
        <div style={{display: "flex"}}>

            {titles.map(title => <div key={title}>
                <Paper className={classes.root}>
                    <CssBaseline />
                    <Title title={title}/>
                        {mappedTasks[title].map((task, index) => <Card key={task.createdAt} content={task.name} index={index} id={task.createdAt} />)}
                    <InputContainer title={title} saveCard={saveCard} />
                </Paper></div>
            )}
        </div>
    );
}
 
export default Board;