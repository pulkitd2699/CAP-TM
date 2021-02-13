import React, { Component } from 'react';
import Board from './Board/board';
import InputBoard from './InputBoard/inputboard';

class BoardView extends Component {
    state = {
        titles: []
    }

    componentDidMount(){
        var set = new Set();
        this.props.tasks.forEach(task => {
            set.add(task.section);
        });
        const titles = Array.from(set);
        console.log(titles);
        this.setState({titles});
        console.log(this.state.titles);
    }
    
    addBoard = (boardTitle) => {
        const titles = [...this.state.titles, boardTitle];
        this.setState({titles});
    };

    render() { 

        return (
            <div style={{display: "flex"}}>
                <Board tasks={this.props.tasks} titles={this.state.titles} saveCard={this.props.saveCard} />
                {/* Add new Board functionality*/}
                <InputBoard addBoard={this.addBoard} />
            </div>
        );
    }
}
 
export default BoardView;