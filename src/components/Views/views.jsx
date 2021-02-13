import React, { Component } from 'react';
import dateTime from 'date-time';
import ListView from './ListView/listview';
import BoardView from './BoardView/boardview';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {Button} from '@material-ui/core';
import classes from './views.module.css';

class Views extends Component {
    state = {
        tasks: [
            // {
            //     name: 'Todo tasks',
            //     createdAt: 'Today',
            //     section: 'todo',
            //     priority: 'High'
            // },
            // {
            //     name: 'doing tasks',
            //     createdAt: 'To',
            //     section: 'doing',
            //     priority: 'High'
            // },
            // {
            //     name: 'done tasks',
            //     createdAt: 'day',
            //     section: 'done',
            //     priority: 'High'
            // }
        ],
        showModal: false,
        listView: true,
    }

    deleteButton = <IconButton aria-label="delete" onClick={(task) => this.handleDeleteTask(task)}><DeleteIcon /></IconButton>;

    handleSaveTask = (name, section, priority, deleteButton) => {
        const createdAt = dateTime();
        const task = {
            name,
            createdAt,
            section,
            priority,
            deleteButton
        }
        const tasks = [...this.state.tasks, task];
        this.setState({tasks});
    };

    handleChangeView = () => {
        const listView = !this.state.listView;
        this.setState({listView});
    };

    handleDeleteTask = (task) => {
        const tasks = [...this.state.tasks];
        tasks.filter(t => task !== t);
        this.setState({tasks});
    };

    render() { 
        const view = (this.state.listView) ? 
            <ListView tasks={this.state.tasks} updateView={this.handleSaveTask} deleteTask={this.handleDeleteTask} deleteButton={this.deleteButton} /> : 
            <BoardView tasks={this.state.tasks} saveCard={this.handleSaveTask}/>;
        return (
            <div>
                <Button className={classes.button} onClick={this.handleChangeView}>Toggle View</Button>
                {view}
            </div>
        );
    }
}
 
export default Views;