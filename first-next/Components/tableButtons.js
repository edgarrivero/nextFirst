import * as React from 'react';
import Grid from '@mui/material/Grid';
import styled from '@mui/system/styled';
import {TextField, Button} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
}));

function createData(name, lastName, age) {
  return { name, lastName, age };
}

export default function DenseTable() {
  

  const [namep, setName] = useState('');
  const [lastNamep, setLastName] = useState('');
  const [agep, setAge] = useState('');
  const [rows, setRows] = useState([
    createData('Edgar', 'Rivero', 30),
    createData('Marcus', 'Rivero', 1),
    createData('Michelle', 'Reyes', 22),
    createData('Joseph', 'Matheus', 23),
    createData('Keiny', 'Parra', 16),
  ]);

  const handleAddRow = () => {
    const newRow = { name: namep, lastName: lastNamep, age: agep };
    setRows([...rows, newRow]);
  };
  const handleDeleteRow = (index) => {
    const newData = rows.filter((_, i) => i !== index);
    setRows(newData);
  };

  const handleChangeName = e => {
    setName(e.target.value);
  }
  const handleChangeLastName = e => {
    setLastName(e.target.value);
  }
  const handleChangeAge = e => {
    setAge(e.target.value);
  }

  

  return (
    <TableContainer component={Paper} sx={{ padding: '1rem', borderRadius: '1rem', boxShadow: 12 }}>
      <Grid container spacing={2}>
          <Grid item xs={3}>
              <Item>
                  <TextField id="txt-name" label="Nombre" variant="standard" value={namep} onChange={handleChangeName}  />
              </Item>
          </Grid>
          <Grid item xs={3}>
              <Item>
                  <TextField ids="txt-lastname" label="Apellido" variant="standard" value={lastNamep} onChange={handleChangeLastName} />
              </Item>
          </Grid>
          <Grid item xs={3}>
              <Item>
                      <TextField id="txt-age" label="Edad" variant="standard" value={agep} onChange={handleChangeAge} />
              </Item>
          </Grid>
          <Grid item xs={3}>
              <Item>
                <Button startIcon={<AddIcon />} variant="contained" onClick={handleAddRow}>Agregar</Button>
              </Item>
          </Grid>
      </Grid>
      
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" >
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Edad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>
              <IconButton aria-label="delete" onClick={() => handleDeleteRow(index)}>
                <DeleteIcon />
              </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}