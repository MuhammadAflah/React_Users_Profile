import React, { useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import map from '../images/map.png'
import { useEffect } from 'react';
import { setUser } from '../../state';
import { useSelector } from 'react-redux';


const ProfilePage = () => {

    const [user, setUser] = useState(null);
    const userId = useSelector((state)=>state.userId);
    
    useEffect(() => {
        fetch("https://panorbit.in/api/users.json")
            .then(response => response.json())
            .then(data => {
                setUser(data.users[userId]);
                console.log(data.users[0]);
            })
            .catch(error => {
                console.log(error);
            });
    }, [userId]);
    console.log(userId,'state userID');
  return (
    <Box  
    sx={{
        // display: { xs: "none", md: "block" },
        // paddingLeft: "8rem",
        top: 0,
        bottom: 0,
        borderRadius:"20px",
        margin:"30px",
        marginTop:"30px"
    
     }}
    >
        {/* <Box sx={{display:"flex", justifyContent:"space-between"}}>
            <Typography sx={{fontWeight:"bold"}} variant="body1">aaaaaaa</Typography>
        </Box>
        <Divider/> */}
      <Grid container spacing={4}>
      
        
        <Grid item lg={4}>
          <Box  style={{ textAlign: 'center' }}>
            <img
              src={user?.profilepicture}
              alt="avatar"
              style={{ width: '150px',height:"150px", borderRadius: '50%' }}
            />
            <Typography variant="h6" color="black" fontWeight="bold" >
              {user?.name}
            </Typography>
            <Box lineHeight={2} style={{ padding: '16px' }}>
            <Box lineHeight={2} sx={{display:"flex"}}>
            <Typography variant="subtitle1" color="textSecondary">UserName: </Typography>
            <Typography sx={{paddingLeft:"5px", marginTop:"2px",fontWeight:"bold"}} variant="body1"  >
            {user?.username}
            </Typography>
            </Box>
            <Box lineHeight={2} sx={{display:"flex"}}>
            <Typography variant="subtitle1" color="textSecondary">Email: </Typography>
            <Typography sx={{paddingLeft:"5px", marginTop:"2px",fontWeight:"bold"}} variant="body1" >
            {user?.email}
            </Typography>
            </Box>
            <Box sx={{display:"flex"}}>
            <Typography variant="subtitle1" color="textSecondary">Phone: </Typography>
            <Typography sx={{paddingLeft:"5px", marginTop:"2px",fontWeight:"bold"}} variant="body1" >
            {user?.phone}
            </Typography>
            </Box>
            <Box sx={{display:"flex"}}>
            <Typography variant="subtitle1" color="textSecondary">Website: </Typography>
            <Typography sx={{paddingLeft:"5px", marginTop:"2px",fontWeight:"bold"}} variant="body1" >
            {user?.website}
            </Typography>
            </Box>
            <hr />
            <Typography variant="subtitle1">Comapny </Typography>
            <Box sx={{display:"flex"}}>
            <Typography variant="subtitle1" color="textSecondary">Name: </Typography>
            <Typography sx={{paddingLeft:"5px", marginTop:"2px",fontWeight:"bold"}} variant="body1"  >
            {user?.company.name}
            </Typography>
            </Box>
            <Box sx={{display:"flex"}}>
            <Typography variant="subtitle1" color="textSecondary">CatchPhrase: </Typography>
            <Typography sx={{paddingLeft:"5px", marginTop:"2px",fontWeight:"bold"}} variant="body1" >
            {user?.company.catchPhrase}
            </Typography>
            </Box>
            <Box sx={{display:"flex"}}>
            <Typography variant="subtitle1" color="textSecondary">bs: </Typography>
            <Typography sx={{paddingLeft:"5px", marginTop:"2px",fontWeight:"bold"}} variant="body1" >
            {user?.company.bs}
            </Typography>
            </Box>
          </Box>
          </Box>
        </Grid>
        {/* <Divider orientation="vertical" /> */}
        <Grid item lg={8}>
        <Typography variant="subtitle1" color="textSecondary" fontWeight="550">Address</Typography>
          <Box lineHeight={2} style={{ padding: '16px' }}>
            <Box lineHeight={2} sx={{display:"flex"}}>
            <Typography variant="subtitle1" color="textSecondary">Street: </Typography>
            <Typography sx={{paddingLeft:"5px", marginTop:"2px",fontWeight:"bold"}} variant="body1" >
            {user?.address.street}
            </Typography>
            </Box>
            <Box sx={{display:"flex"}}>
            <Typography variant="subtitle1" color="textSecondary">Suite: </Typography>
            <Typography sx={{paddingLeft:"5px", marginTop:"2px",fontWeight:"bold"}} variant="body1" >
            {user?.address.suite}
            </Typography>
            </Box>
            <Box sx={{display:"flex"}}>
            <Typography variant="subtitle1" color="textSecondary">City: </Typography>
            <Typography sx={{paddingLeft:"5px", marginTop:"2px",fontWeight:"bold"}} variant="body1">
            {user?.address.city}
            </Typography>
            </Box>
            <Box sx={{display:"flex"}}>
            <Typography variant="subtitle1" color="textSecondary">Zipcode: </Typography>
            <Typography sx={{paddingLeft:"5px", marginTop:"2px",fontWeight:"bold"}} variant="body1" >
            {user?.address.zipcode}
            </Typography>
            </Box>
            <Box sx={{marginTop:"5px"}}>
                <img src={map} alt="map" />
                <Box sx={{display:"flex", justifyContent:"end"}}>
                <Typography  color="textSecondary">Lat: </Typography>
                <Typography sx={{paddingLeft:"5px", marginTop:"2px",fontWeight:"bold"}} variant="body1" >
                {user?.address.geo.lat}
                </Typography>
                
                <Typography variant="subtitle1" color="textSecondary">Long: </Typography>
                <Typography sx={{paddingLeft:"5px", marginTop:"2px",fontWeight:"bold"}} variant="body1" >
                {user?.address.geo.lng}
                </Typography>
                </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePage;
