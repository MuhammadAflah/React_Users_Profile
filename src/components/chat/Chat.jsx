import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Menu, MenuItem, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box } from '@mui/system';

const Chat = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showChatBox, setShowChatBox] = useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const chatButtonStyle = {
        position: 'fixed',
        bottom: 0,
        right: 5,
        backgroundColor: '#2196f3',
        color: 'white',
        width: '15rem',
        '&:hover': {
            backgroundColor: '#1976d2',
        },
    };

    const [users, setUsers] = useState([]);

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

    const handleUserClick = (user) => {
        setSelectedUser(user);
        setShowChatBox(true);
    };

    const handleCloseChatBox = () => {
        setSelectedUser(null);
        setShowChatBox(false);
    };

    const handleSendMessage = (message) => {
        // Send message logic here
    };

    return (
        <>
            <Button aria-label="Chat" style={chatButtonStyle}
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", }}>
                        <ChatIcon sx={{ marginRight: "5px" }} />
                        <div>Chats</div>
                    </Box>
                    <KeyboardArrowUpIcon sx={{ display: "flex", justifyContent: "end" }} />
                </Box>
            </Button>
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

                    <List sx={{
                        width: '100%',
                        // bgcolor: 'background.paper',
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

                    }}>
                        <Box sx={{ backgroundColor: "rgb(33, 150, 243)" }}>
                            <Typography variant='h5'>Chats</Typography>
                        </Box>
                        <Box>
                            {users.map((user) => (
                                <>
                                    <ListItem key={user.id} alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt={user.name} src={user.profilepicture} />
                                            <div style={{ backgroundColor: user.online ? 'green' : 'green', width: 10, height: 10, borderRadius: '50%', position: 'absolute', bottom: 0, right: 0 }} />
                                        </ListItemAvatar>
                                        <ListItemText primary={user.name} />
                                    </ListItem>
                                </>
                            ))}
                            {showChatBox && selectedUser && (
                                <Box>
                                    <Box mb={1}>
                                        <Button onClick={handleCloseChatBox}>Close</Button>
                                    </Box>
                                    <Box>
                                        <TextField label={`Chatting with ${selectedUser.name}`} />
                                    </Box>
                                    <Box mt={1}>
                                        <Button variant="contained" color="primary" onClick={() => handleSendMessage('Hello, world!')}>
                                            Send
                                        </Button>
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    </List>
                </MenuItem>
            </Menu>
        </>
    )
}

export default Chat;

