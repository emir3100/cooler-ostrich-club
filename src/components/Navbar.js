import React, {useState} from 'react';
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



const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 0.5,
  },
};


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

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="transparent" elevation={0} className={navbar ? "custom-appbar active" : "custom-appbar"}>
        <Toolbar>
          <Typography variant="h6" color="light" className={classes.grow}>
            COOLER OSTRICH CLUB
          </Typography>
          <div className={classes.grow}>
            <Button color="inherit" >Home</Button>
            <Button color="inherit" >About</Button>
            <Button color="inherit" >Stats</Button>
            <Button color="inherit" >Roadmap</Button>
            <Button color="inherit" >Team</Button>
            <Button color="inherit" >FAQ</Button>
          </div>
          
          <IconButton color="inherit"> <FontAwesomeIcon icon={faTwitter}/> </IconButton>
          <IconButton color="inherit"> <FontAwesomeIcon icon={faInstagram}/> </IconButton>
          <IconButton color="inherit"> <FontAwesomeIcon icon={faGithub}/> </IconButton>
          <IconButton color="inherit"> <FontAwesomeIcon icon={faDiscord}/> </IconButton>
           
        </Toolbar>
      </AppBar> 
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);