import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import Chat from '@mui/icons-material/Chat';

const CommingSoon = () => {
    return (

        <Box>
            <Stack direction="row" justifyContent="space-between">
                <Box flex={2}>
                    <Sidebar />
                </Box>
                <Box flex={8}>
                    <Navbar />
                    <Box flex={8} display="flex" alignItems="center" justifyContent="center" height="100vh">
                        <Typography variant="h1" component="h1" align="center" color="rgb(194 194 194 / 60%)" fontWeight="bolder">
                            Coming Soon!
                        </Typography>
                    </Box>
                </Box>
            </Stack>
            <Chat />
        </Box>
    );
}

export default CommingSoon;