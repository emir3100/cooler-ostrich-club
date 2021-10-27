import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './About.css'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
  });

function About(props) {
    const { classes } = props;

    return (
        <div id="About" className="wrapper" style={{"position": "relative"}}>
                <div className="custom-container py-7" >
                    <Grid container spacing={40}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h3" className={classes.grow} >
                                ABOUT US
                            </Typography>
                            <Typography variant="p" className={classes.grow} >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl justo, tristique vitae ultricies eget, ultrices sed nulla. Etiam sed consequat odio. 
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} display="flex" style={{ "align-self": "center" }}>
                                
                        </Grid>
                    </Grid>
                </div>
            </div>
    )
}

export default withStyles(styles)(About)
