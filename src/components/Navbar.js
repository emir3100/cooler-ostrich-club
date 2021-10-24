import React from 'react';
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

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0} className='custom-appbar'>
        <Toolbar>
          <Typography variant="h6" color="primary" className={classes.grow}>
            COOLER OSTRICH CLUB
          </Typography>
          <div className={classes.grow}>
            <Button color="inherit">Stats</Button>
            <Button color="inherit">Roadmap</Button>
            <Button color="inherit">Team</Button>
            <Button color="inherit">Gallery</Button>
          </div>
          
          <IconButton color="primary"> <FontAwesomeIcon icon={faTwitter}/> </IconButton>
          <IconButton color="primary"> <FontAwesomeIcon icon={faInstagram}/> </IconButton>
          <IconButton color="primary"> <FontAwesomeIcon icon={faGithub}/> </IconButton>
          <IconButton color="primary"> <FontAwesomeIcon icon={faDiscord}/> </IconButton>
           
        </Toolbar>
      </AppBar> 
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);