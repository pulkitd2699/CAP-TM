import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SubjectIcon from '@material-ui/icons/Subject';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import NewTaskButton from '../Button/button';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  margin: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const ModalView = ({updateView, children}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [section, setSection] = React.useState('');
  const [priority, setPriority] = React.useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSectionChange = (event) => {
    setSection(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const updateViewTask = () => {
    updateView(name, section, priority);
    setOpen(false);
  };

  return (
    <div>
      <NewTaskButton clicked={handleOpen} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {children}
            {/* Task Name Input Field */}
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <SubjectIcon />
                </Grid>
                <Grid item>
                    <TextField id="input-with-icon-grid" label="Task Name" onChange={(e) => setName(e.target.value)} />
                </Grid>
                </Grid>
            </div>
            {/* Task Section Dropdonw */}
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Section</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={section}
                onChange={handleSectionChange}
                >
                    <MenuItem value="Todo">Todo</MenuItem>
                    <MenuItem value="Doing">Doing</MenuItem>
                    <MenuItem value="Done">Done</MenuItem>
                </Select>
            </FormControl>
            {/* Task Priority Dropdown */}
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={priority}
                onChange={handlePriorityChange}
                >
                    <MenuItem value="Low">Low</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="High">High</MenuItem>
                </Select>
            </FormControl>
            {/* Button to add the task to view */}
            <Button variant="contained" color="primary" onClick={updateViewTask} >Add</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalView;