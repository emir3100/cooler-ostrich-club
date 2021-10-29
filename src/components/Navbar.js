import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1,
    },
    [theme.breakpoints.up("md")]: {
      flexGrow: 0.5,
    }
  },
  desktop:{
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
  },
  mobile:{
    [theme.breakpoints.up("md")]: {
      display: "none"
    },
  },
  drawer: {
    height: "100%",
    background: "#5762d5",
    position: "fixed",
    top: 0,
    right: 0,
    width: "300px",
    zIndex: "1200"
  },
  backdrop: {
    background: "rgba(0,0,0,.7)",
    position: "fixed",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%",
    zIndex: "1150"
  }
  
});




function SimpleAppBar(props) {
  const { classes } = props;
  const [navbar, setNavbar] = useState(false);

  const changeBg = () => {
    if(window.scrollY >= 64){
      setNavbar(true);  
    }
    else{
      setNavbar(false);
    }
  }
  
  window.addEventListener("scroll", changeBg);

  const [toggle, setToggle] = useState(false);  

  function handleToggle(e){
    e.preventDefault();
    toggle ? setToggle(false) : setToggle(true);
  }
  


  return (

    <div className={classes.root}>
      <AppBar position="fixed" color="transparent" elevation={0} className={navbar ? "custom-appbar active" : "custom-appbar"}>
        <Toolbar>
          <Typography variant="h6" color="light" className={classes.grow}>
            COOLER OSTRICH CLUB
          </Typography>

            <div className={classes.desktop} style={{ "flex-grow": "0.5" }}>
              <Button color="inherit" href="#Home">Home</Button>
              <Button color="inherit" href="#About">About</Button>
              <Button color="inherit" href="#Stats">Stats</Button>
              <Button color="inherit" href="#Roadmap">Roadmap</Button>
              <Button color="inherit" href="#Library">Library</Button>
              <Button color="inherit" href="#FAQ">FAQ</Button>
            </div>
            
            <IconButton className={classes.desktop} color="inherit"> <FontAwesomeIcon icon={faTwitter}/> </IconButton>
            <IconButton className={classes.desktop} color="inherit"> <FontAwesomeIcon icon={faInstagram}/> </IconButton>
            <IconButton className={classes.desktop} color="inherit" href="https://github.com/emir3100/cooler-ostrich-club"> <FontAwesomeIcon icon={faGithub}/> </IconButton>
            <IconButton className={classes.desktop} color="inherit"> <FontAwesomeIcon icon={faDiscord}/> </IconButton>
            
            <IconButton onClick={handleToggle} className={classes.mobile} color="inherit"> <FontAwesomeIcon icon={faBars}/> </IconButton>
        </Toolbar>
      </AppBar> 
      <Box className={classes.drawer} id={toggle ? "nav-drawer active" : "nav-drawer"}>
        <div style={{"padding": "1rem"}}>
          <IconButton onClick={handleToggle} color="inherit" > <FontAwesomeIcon icon={faTimes}/> </IconButton>
        </div>
        <Divider />
        <nav aria-label="main">
          <List>
            <ListItem>
              <ListItemButton href="#Home">
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton href="#About">
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton href="#Stats">
                <ListItemText primary="Stats" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton href="#Roadmap">
                <ListItemText primary="Roadmap" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton href="#Library">
                <ListItemText primary="Library" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton href="#FAQ">
                <ListItemText primary="Faq" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav aria-label="secondary">
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemText primary="Twitter" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemText primary="Instagram" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemText primary="Github" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemText primary="Discord" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
      <div onClick={handleToggle} className={classes.backdrop} id={toggle ? "backdrop active" : "backdrop"}>
            
      </div>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);