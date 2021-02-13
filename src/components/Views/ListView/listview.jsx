import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import ModalView from '../../common/Modal/modal';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    color: theme.palette.common.white,
    fontSize: '1.2em',
    letterSpacing: 2,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#c2daff',
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    width: 1080,
    margin: '18px auto'
  },
  tablehead: {
    backgroundColor: '#ffffff'
  }
});

const ListView = ({tasks, updateView, deleteButton}) => {
  const classes = useStyles();

  return (
    <div>
      <TableContainer>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Task Name</StyledTableCell>
              <StyledTableCell>CreatedAt</StyledTableCell>
              <StyledTableCell>Section</StyledTableCell>
              <StyledTableCell>Priority</StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => (
              <StyledTableRow key={task.createdAt}>
                <StyledTableCell >{task.name}</StyledTableCell>
                <StyledTableCell >{task.createdAt}</StyledTableCell>
                <StyledTableCell >{task.section}</StyledTableCell>
                <StyledTableCell >{task.priority}</StyledTableCell>
                <StyledTableCell>{deleteButton}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Button to add new task */}
      <ModalView updateView={updateView}>
        <h2>Add New Task Details</h2>
      </ModalView>
    </div>

  );
}
 
export default ListView;