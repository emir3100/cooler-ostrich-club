import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import '../styles/Footer.css'

const styles = theme => ({
    root: {
      flexGrow: 1,
    }
  });

export const Footer = (props) => {
    const { classes } = props;
    return (
        <div>
            
        </div>
    )
}

export default withStyles(styles)(Footer)