import { React, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, CardActionArea, Divider, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import { setUserId } from '../../state';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const LandingPage = () => {

    const [users, setUsers] = useState([]);
    const dispatch = useDispatch()
    const userId = useSelector((state)=>state.userId);

    useEffect(() => {
        fetch("https://panorbit.in/api/users.json")
            .then(response => response.json())
            .then(data => {
                setUsers(data.users);
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <Grid container sx={{
            height: "100vh",
            backgroundImage: "url('https://wallpaper.dog/large/17209629.jpg')",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "10% 20%",
            borderRadius: "20%",
            
        }}>
            <Card sx={{ width: "100%" }}>
                <CardActionArea sx={{
                    width: "100%"
                }}>
                    <CardMedia sx={{
                        background: "grey",
                        height: "3rem",
                        textAlign: "center",
                        padding: "5px 0",


                    }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ marginTop: "5px" }}>
                            Select an account
                        </Typography>
                    </CardMedia>
                    <CardContent>
                        <List sx={{
                            width: '100%',
                            bgcolor: 'background.paper',
                            maxHeight: "50vh",
                            overflowY: "scroll",
                            "::-webkit-scrollbar": {
                                width: "10px",
                            },
                            "::-webkit-scrollbar-track": {
                                background: "#f1f1f1",
                            },
                            "::-webkit-scrollbar-thumb": {
                                background: "#888",
                                borderRadius: "5px",
                            },
                            "::-webkit-scrollbar-thumb:hover": {
                                background: "#555",
                            },
                        }}>
                            {users.map((user,index) => (
                                    <>
                                        <ListItem key={user.id} alignItems="flex-start">
                                            <Link to="/" style={{ textDecoration: 'none' }}>
                                            <ListItemButton  onClick={()=>dispatch(setUserId({userId: index}))}>
                                            <ListItemAvatar>
                                                <Avatar alt={user.name} src={user.profilepicture} />
                                            </ListItemAvatar>
                                            <ListItemText primary={user.name} sx={{color:"black"}} />
                                            </ListItemButton>
                                            </Link>
                                        </ListItem>
                                        <Divider variant="middle" />

                                    </>
                                ))}
                        </List>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
        </Grid>
    );
}

export default LandingPage