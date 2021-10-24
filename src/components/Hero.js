import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './Hero.css'
import Button from '@material-ui/core/Button';
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
  });


function Hero(props) {
    const { classes } = props;

    return (
        <div className="custom-container mt-16">
            <Grid container spacing={40}>
                <Grid item xs={12} sm={6}>
                    <div>
                        <Typography variant="h1" color="" className={classes.grow}>
                            WELCOME TO COOLER OSTRICH CLUB
                        </Typography>
                        <div className="mt-16">
                            <Box display="inline" mr="2rem">
                                <Button variant="contained" color="primary" className={classes.button}>
                                    BUY ON OPENSEA
                                </Button>
                            </Box>
                            <Box display="inline" mr="2rem">
                                <Button variant="contained" color="secondary" className={classes.button}>
                                    JOIN OUR DISCORD
                                </Button>
                            </Box>
                        </div>
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

