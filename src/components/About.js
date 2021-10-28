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
import Avatar from '@material-ui/core/Avatar';

gsap.registerPlugin(ScrollTrigger);

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    imagexs: {
        [theme.breakpoints.only("xs")]: {
            display: "none"
          },
          [theme.breakpoints.down("sm")]: {
            left: "-85px"
          },
          [theme.breakpoints.up("md")]: {
            height: "25rem !important"
          },
    }
  });

function About(props) {
    const { classes } = props;

    return (
        <div id="About" className="wrapper" style={{"position": "relative"}}>
                <div className="custom-container py-7" >
                    <Grid container spacing={40}>
                        <Grid item xs={12} sm={6} style={{ "display" : "flex", "align-self": "center", "justifyContent" : "start" }} >
                            <img src="../images/3.png" alt="nft" style={{ "position" : "absolute", "width" : "auto", "height" : "25rem", "bottom" : "0" }} className={classes.imagexs}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h3" className={classes.grow} >
                                ABOUT US
                            </Typography>
                            <div style={{ "margin-top": "1rem", "text-transform": "uppercase" }}><Typography variant="body1" className={classes.grow}>
                                We are a small group of software and game developers that decided to create a special NFT for the best animal on earth, "The ostrich". Get it now to join the Cooler Ostrich Club and get access to our upcoming game.
                            </Typography></div>
                        </Grid>
                    </Grid>
                </div>
            </div>
    )
}

export default withStyles(styles)(About)
