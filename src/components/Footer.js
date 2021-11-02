import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import '../styles/Footer.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from '@material-ui/core/IconButton';
import { Link } from '@mui/material';
import Stack from '@mui/material/Stack';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    pstyle: {
      color: "white",
      lineHeight: 3
    },
    footerbreakpoint: {
        [theme.breakpoints.between("xs", "md")]: {
          justifyContent: "center !important",
          display: "flex"
        },
  },
    centertextbreakpoint: {
      [theme.breakpoints.between("xs", "md")]: {
        textAlign: "center"
      },
  }
  });

export const Footer = (props) => {
    const { classes } = props;
    return (
        <div className="footer-wrapper">
          <div className="custom-container" style={{"paddingBlock" : "7rem"}} >
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center" spacing={10} >
                <Grid item xs={12} md={12} lg={4} className={classes.footerbreakpoint} justifyContent="space-evenly" alignItems="center">
                  <Stack>
                    <Typography align="start" variant="h4" gutterBottom className={classes.centertextbreakpoint}>
                      Cooler Ostrich Club
                    </Typography>
                    <Typography align="start" className={classes.centertextbreakpoint, classes.pstyle}>
                      2021 Copyright. All Rights Reserved.
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={12} lg={3} className={classes.footerbreakpoint} justifyContent="space-evenly" alignItems="center">
                  <Stack>
                    <Typography align="start" variant="h4" gutterBottom className={classes.centertextbreakpoint}>
                      Socials
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <IconButton color="inherit"> <FontAwesomeIcon icon={faTwitter}/> </IconButton>
                      <IconButton color="inherit"> <FontAwesomeIcon icon={faInstagram}/> </IconButton>
                      <IconButton color="inherit" href="https://github.com/emir3100/cooler-ostrich-club"> <FontAwesomeIcon icon={faGithub}/> </IconButton>
                      <IconButton color="inherit"> <FontAwesomeIcon icon={faDiscord}/> </IconButton>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={12} lg={4} className={classes.footerbreakpoint} justifyContent="space-around" alignItems="center">
                  <Stack>
                    <Typography align="start" variant="h4" gutterBottom className={classes.centertextbreakpoint}>
                      Sections
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      <Link href="#"><Typography className={classes.pstyle} align="start">
                        Home
                      </Typography></Link>
                      <Link href="#About"><Typography className={classes.pstyle} align="start">
                        About
                      </Typography></Link>
                      <Link href="#Stats"><Typography className={classes.pstyle} align="start">
                        Stats
                      </Typography></Link>
                      <Link href="#Roadmap"><Typography className={classes.pstyle} align="start">
                        Roadmap
                      </Typography></Link>
                      <Link href="#Library"><Typography className={classes.pstyle} align="start">
                        Library
                      </Typography></Link>
                      <Link href="#Faq"><Typography className={classes.pstyle} align="start">
                        Faq
                      </Typography></Link>
                    </Stack>
                  </Stack>
                </Grid>
            </Grid>
          </div>
        </div>
    )
}

export default withStyles(styles)(Footer)