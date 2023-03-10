import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EnhancedTable from "Components/table";
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';

import TableWithSearch from 'Components/tableNormal';

const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
    padding: theme.spacing(1),
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 12,
    p: 4,
}

export default function About() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div sx={{ backgroundColor: '#f9fafb' }}>
        <Box sx={{ flexGrow: 1, mb: 3 }}>
        <Grid container spacing={2}>
            <Grid xs={6}>
            <Item sx={{ bgcolor: "transparent" }}><Typography variant="h5" >Usuarios</Typography></Item>
            </Grid>
            <Grid xs={6}>
            <Item sx={{ bgcolor: "transparent", textAlign:'end' }}>
                <Button onClick={handleOpen} variant="contained" startIcon={<AddIcon />}>
                    Agregar
                </Button>
            </Item>
            </Grid>
        </Grid>
        
        </Box>

        <EnhancedTable />

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            </Box>
        </Modal>
        
    </div>
  );
}