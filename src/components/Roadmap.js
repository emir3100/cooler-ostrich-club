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
                                        <span class="title">1</span>
                                        <p>Lorem, ipsum dolor sit amet</p>
                                        </li>
                                        <li>
                                        <span class="timeline-point"></span>
                                        <span class="title">2</span>
                                        <p>Lorem, ipsum dolor sit amet</p>
                                        </li>
                                        <li>
                                        <span class="timeline-point"></span>
                                        <span class="title">3</span>
                                        <p>Lorem, ipsum dolor sit amet</p>
                                        </li>
                                        <li>
                                        <span class="timeline-point"></span>
                                        <span class="title">4</span>
                                        <p>Lorem, ipsum dolor sit amet</p>
                                        </li>
                                        <li>
                                        <span class="timeline-point"></span>
                                        <span class="title">5</span>
                                        <p>Lorem, ipsum dolor sit amet</p>
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
