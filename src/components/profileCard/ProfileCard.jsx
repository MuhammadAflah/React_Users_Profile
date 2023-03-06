import React, { useEffect, useState } from 'react';
import {
    Grid,
    Button,
    Typography,
    Avatar,
    Paper,
    MenuItem,
    Menu,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListItemButton,
} from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { setUserId } from '../../state';
import { Link } from 'react-router-dom';



const ProfileCard = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [users, setUsers] = useState([]);
    const userId = useSelector((state) => state.userId)
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        if (userId !== null && users.length > userId) {
            setSelectedUser(users[userId]);
        }
    }, [userId, users]);

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
        <>
            <Box sx={{ display: "flex" }}
                onClick={handleClick}
                size="small"
                // sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                {selectedUser && (
                    <>
                        <Avatar src={selectedUser.profilepicture} alt={selectedUser.name} />
                        <Typography sx={{ fontWeight: "bold", padding: "5px" }} variant="body1">{selectedUser.name}</Typography>
                    </>
                )}
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>

                    <Grid item lg={6} sx={{ borderRadius: "30px" }}>
                        <Paper style={{ textAlign: 'center', borderRadius: "30px" }}>
                            {selectedUser && (
                                <>
                                    <img
                                        src={selectedUser.profilepicture}
                                        alt={selectedUser.name}
                                        style={{ width: '150px', height: "150px", borderRadius: '50%' }}
                                    />
                                    <Typography variant="h6" color="black" fontWeight="bold" >
                                        {selectedUser.name}
                                    </Typography>
                                    <Box lineHeight={2} style={{ padding: '16px' }}>
                                        <Box lineHeight={2} sx={{ display: "flex" }}>
                                            <Typography variant="subtitle1" color="textSecondary">Email: </Typography>
                                            <Typography sx={{ paddingLeft: "5px", marginTop: "2px", fontWeight: "bold" }} variant="body1" >
                                                {selectedUser.email}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </>
                            )}
                            <Divider />
                            <List sx={{
                                width: '100%',
                                bgcolor: 'background.paper',
                                maxHeight: "10vh",
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
                                {users.map((user, index) => (
                                    <>
                                        <ListItem key={user.id} alignItems="flex-start">
                                            <ListItemButton onClick={() => dispatch(setUserId({ userId: index }))}>
                                                <ListItemAvatar>
                                                    <Avatar alt={user.name} src={user.profilepicture} />
                                                </ListItemAvatar>
                                                <ListItemText primary={user.name} />
                                            </ListItemButton>
                                        </ListItem>
                                        <Divider variant="middle" />

                                    </>
                                ))}
                            </List>
                            <Link to="/landing_page" style={{ textDecoration: 'none' }}>
                                <Button variant="contained" color="warning" size="large" sx={{ borderRadius: "50px", margin: "10px" }}>
                                    SignOut
                                </Button>
                            </Link>
                        </Paper>
                    </Grid>
                </MenuItem>
            </Menu>
        </>
    );
}

export default ProfileCard



