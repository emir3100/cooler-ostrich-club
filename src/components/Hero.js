import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './Hero.css'

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });


function Hero(props) {
    const { classes } = props;

    return (
        <div className="custom-container mt-16">
            <Grid container spacing={40}>
                <Grid item xs={12} sm={6}>
                    <div>
                    <Typography variant="h1" color="white" className={classes.grow}>
                        WELCOME TO COOLER OSTRICH CLUB
                    </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div>

                    </div>
                </Grid>
                
            </Grid>
        </div>
    )
}

Hero.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Hero);

