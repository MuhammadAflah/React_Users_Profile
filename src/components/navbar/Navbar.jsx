import { Divider, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
import ProfileCard from '../profileCard/ProfileCard'


const Navbar = () => {
    const heading = useSelector((state)=>state.heading);
    return (
        <>
        <Stack direction="row" justifyContent="space-between" >
            <Box sx={{left:20, margin:"10px"}}>
                <Typography sx={{ fontWeight: "bold" }} variant="body1">{heading}</Typography>
            </Box>
            <Box>
                <ProfileCard />
                </Box>
            </Stack>
            <Divider />
        </>
    )
}

export default Navbar