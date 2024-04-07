import * as React from 'react';
import {Box} from '@mui/material'
import Navbar from './Navbar';
import Advt from './Advt';

const Landing = () => {
  return (
    <Box sx={{position: 'relative', width: '100vw'}}>
    <Navbar/>
    <Advt />
    </Box>
  )
}

export default Landing