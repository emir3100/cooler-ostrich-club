import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './Roadmap.css'
const styles = theme => ({
    root: {
      flexGrow: 1,
    }
  });

function Roadmap(props) {
    const { classes } = props;

    return (
        <div id="Roadmap" className="roadmap-wrapper" style={{"position": "relative"}}>
                    <div className="custom-container" style={{"paddingBlock" : "7rem"}} >
                        <Grid container spacing={3}>
                            <Grid item xs={12} style={{"marginBottom" : "5rem"}}>
                                <Typography align="start" variant="h3" gutterBottom>
                                    Roadmap
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <section class="timeline">
                                    <div class="timeline-line">
                                    <span class="timeline-innerline"></span>
                                    </div>
                                    <ul class="tmul">
                                        <li>
                                            <span class="timeline-point"></span>
                                            <Typography span component="span" className="title" variant="h6">
                                                1
                                            </Typography>
                                            <Typography paragraph  component="p" align="center" gutterBottom variant="subtitle1">
                                                Lorem, ipsum dolor sit amet
                                            </Typography>
                                        </li>
                                        <li>
                                            <span class="timeline-point"></span>
                                            <Typography span component="span" className="title" variant="h6">
                                                2
                                            </Typography>
                                            <Typography paragraph  component="p" align="center" gutterBottom variant="subtitle1">
                                                Lorem, ipsum dolor sit amet
                                            </Typography>
                                        </li>
                                        <li>
                                            <span class="timeline-point"></span>
                                            <Typography span component="span" className="title" variant="h6">
                                                3
                                            </Typography>
                                            <Typography paragraph  component="p" align="center" gutterBottom variant="subtitle1">
                                                Lorem, ipsum dolor sit amet
                                            </Typography>
                                        </li>
                                        <li>
                                            <span class="timeline-point"></span>
                                            <Typography span component="span" className="title" variant="h6">
                                                4
                                            </Typography>
                                            <Typography paragraph  component="p" align="center" gutterBottom variant="subtitle1">
                                                Lorem, ipsum dolor sit amet
                                            </Typography>
                                        </li>
                                        <li>
                                            <span class="timeline-point"></span>
                                            <Typography span component="span" className="title" variant="h6">
                                                5
                                            </Typography>
                                            <Typography paragraph  component="p" align="center" gutterBottom variant="subtitle1">
                                                Lorem, ipsum dolor sit amet
                                            </Typography>
                                        </li>
                                    </ul>
                                </section>
                            </Grid>
                        </Grid>
                    </div>
                </div>
    )
}

export default withStyles(styles)(Roadmap)
