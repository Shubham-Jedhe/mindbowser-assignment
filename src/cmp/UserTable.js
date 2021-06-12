import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import UserForm from './UserForm'
import { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const onCall = (setFlag)=>{
    console.log("on call")
    setFlag(true)
}

const editData= (setEdit,row,setField)=>{
    setEdit(true)
    setField(row)
}
const deleteUser =(obj,row,setData)=>{
    console.log("in delete before",obj)
    obj=obj.splice(obj.indexOf(row.name), 1);
    console.log("in delete after",obj)
    setData(obj)  
}
export default function CustomizedTables({usersData=[]}) {
  const classes = useStyles();
  const [flag, setFlag] = useState(false)
  const [edit, setEdit] = useState(false)
  const [field, setField]=useState({})
  const [data,setData] = useState(usersData)
  const [obj, setObj] = useState([{
    name: 'prats',
    birthDate: '24',
    address: 'hggh',
    gender: 'female',
    college: "bgc",
    hobbies: 'xyz'
    }])
    console.log("obj.......",obj)
    console.log("field.......",field)

  if(flag){
      return(
          <UserForm obj={obj} setObj={setObj} isCreate fields={field}/>
      )
  }
    if(edit){
    return(
        <UserForm obj={obj} setObj={setObj} isCreate={false} fields={field}/>

    )
}
  return (
      
    <TableContainer component={Paper} style={{marginTop:'10%', width:'60%', marginLeft:'20%'}}>
        <Button 
        onClick={()=> onCall(setFlag)}
        variant="contained" color="primary" disableElevation style={{float:'right'}}>
      Add Users
    </Button>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Birth Date</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell align="right">College</StyledTableCell>
            <StyledTableCell align="right">Hobbies</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.birthDate}</StyledTableCell>
              <StyledTableCell align="right">{row.address}</StyledTableCell>
              <StyledTableCell align="right">{row.gender}</StyledTableCell>
              <StyledTableCell align="right">{row.college}</StyledTableCell>
              <StyledTableCell align="right">{row.hobbies}</StyledTableCell>
              <StyledTableCell align="right">
                  <EditIcon onClick={()=>
                   editData(setEdit,row,setField)
                  }/>
                  <DeleteIcon
                  onClick={()=>
                    deleteUser(data,row,setData)
                 }
                  />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}