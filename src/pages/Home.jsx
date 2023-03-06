import { Box, Stack } from '@mui/system'
import React from 'react'
import Chat from '../components/chat/Chat'
import Navbar from '../components/navbar/Navbar'
import ProfilePage from '../components/profile page/ProfilePage'
import Sidebar from '../components/sidebar/Sidebar'

const Home = () => {
    return (
        <Box>
            <Stack direction="row" justifyContent="space-between">
                <Box flex={2}>
                    <Sidebar />
                </Box>
                <Box flex={8}>
                    <Navbar />
                    <ProfilePage />
                </Box>
            </Stack>
            <Chat />
        </Box>
    )
}

export default Home