import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { setHeading } from '../../state';
import { useDispatch } from 'react-redux';


const Sidebar = () => {

    const dispatch = useDispatch();
    
  return (
    <Box  
    sx={{
        paddingRight: "5rem",
        backgroundColor: "rgb(33, 150, 243)",
        width: "25vh",
        color: "white",
        position: "fixed",
        top: 0,
        bottom: 0,
        borderRadius:"20px",
        margin:"30px"
     }}
    >
      <Box 
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"column",
        height: "100vh",
    }}
      >
        <List sx={{ textAlign: "center", justifyItems:"center",  display:"flex", flexDirection:"column", marginLeft:"50%" }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
          <ListItem>
            <ListItemButton >
              <ListItemText  primary="Profile"sx={{ color: 'white' }} onClick={()=>dispatch(setHeading({heading: "profile"}))}/>
            </ListItemButton>
          </ListItem>
          </Link>
          <Divider style={{ backgroundColor: 'white', margin: '10px 0' }} />
          <Link to="/comming_soon" style={{ textDecoration: 'none' }}>
          <ListItem>
            <ListItemButton  >  
              <ListItemText primary="Posts" sx={{ color: 'white' }} onClick={()=>dispatch(setHeading({heading: "Posts"}))}/>
            </ListItemButton>
          </ListItem>
          </Link>
          <Divider style={{ backgroundColor: 'white',  margin: '10px 0' }} />
          <Link to="/comming_soon" style={{ textDecoration: 'none' }}>
          <ListItem>
            <ListItemButton >
              <ListItemText primary="Gallary" sx={{ color: 'white' }} onClick={()=>dispatch(setHeading({heading: "Gallary"}))}/>
            </ListItemButton>
          </ListItem>
          </Link>
          <Divider style={{ backgroundColor: 'white', margin: '10px 0' }} />
          <Link to="/comming_soon" style={{ textDecoration: 'none' }}>
          <ListItem>
            <ListItemButton >
              <ListItemText primary="ToDo" sx={{ color: 'white' }} onClick={()=>dispatch(setHeading({heading: "ToDo"}))}/>
            </ListItemButton>
          </ListItem>
          </Link>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar