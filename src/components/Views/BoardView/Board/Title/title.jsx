import React, {useState} from 'react';
import {InputBase, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyle = makeStyles((theme) => ({
    titleContainer: {
        margin: theme.spacing(1),
        display: "flex"
    },
    title: {
        flexGrow: 1,
        fontSize: "1.2rem",
        fontWeight: "bold"
    },
    input: {
        margin: theme.spacing(1),
        fontSize: "1.2rem",
        fontWeight: "bold",
        "&:focus": {
            background: "#ddd"
        }
    }
}));


const Title = ({title}) => {
    const [open, setOpen] = useState(false);
    const classes = useStyle();
    return (
        <div>
            {open ? 
                <div>
                    <InputBase 
                        autoFocus
                        value={title} 
                        inputProps={{
                            className: classes.input
                        }}
                        fullWidth
                        onBlur={() => setOpen(!open)}
                    />
                </div> : 
                <div className={classes.titleContainer}>
                    <Typography 
                        align='left'
                        onClick={() => setOpen(!open)} 
                        className={classes.title}
                    >
                    {title}
                    </Typography>
                    <MoreHorizIcon />
                </div>}
        </div>
    );
}
 
export default Title;
