import React, { Component } from 'react';
import {Paper, InputBase, Button, IconButton} from '@material-ui/core';
import {fade, withStyles} from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';

const styles = theme => ({
    card: {
        margin: theme.spacing(0,1,1,1),
        paddingBottom: theme.spacing(4)
    },
    input: {
        margin: theme.spacing(1)
    },
    btnConfirm: {
        background: '#5AAC44',
        color: '#fff',
        '&:hover': {
            background: fade('#5AAC44',0.75)
        }
    },
    confirm: {
        margin: theme.spacing(0,1,1,1),
    }
});

class InputCard extends Component {

    state = {
        name: '',
        section: '',
        priority: ''
    }
    
    updateInput = (e) => {
        this.setState({
            name: e.target.value,
            section: this.props.title.toLowerCase(),
            priority: 'low'
        });
    };
    
    addCard = () => {
        const {name, section, priority} = this.state;
        this.props.setOpen(false);
        this.props.saveCard(name, section, priority);
    };
    
    render(){
        const {classes, setOpen} = this.props;
        return (
            <div>
                <div>
                    <Paper className={classes.card}>
                        <InputBase 
                            onChange={this.updateInput}
                            multiline 
                            fullWidth 
                            inputProps={{className: classes.input}}
                            placeholder="Enter a title of this card.."
                            value={this.state.cardContent}
                        />
                    </Paper>
                </div>
                <div className={classes.confirm}>
                    <Button className={classes.btnConfirm} onClick={this.addCard} >Add Card</Button>
                    <IconButton onClick={() => setOpen(false)}>
                        <ClearIcon />
                    </IconButton>
                </div>
            </div>
        );
    }
}
 
export default withStyles(styles)(InputCard);