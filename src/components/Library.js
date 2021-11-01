import React, {useState, useEffect} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import '../styles/Library.css'
import AssetPost from './AssetPost';

const styles = theme => ({
    root: {
      flexGrow: 1,
    }
  });

export const Library = (props) => {
    const { classes } = props;

    return (
        <div id="Library" className="library-wrapper" style={{"position": "relative"}}>
            <div className="custom-container" style={{"paddingBlock" : "7rem"}} >
                <Grid container spacing={3}>
                    <Grid item xs={12} style={{"marginBottom" : "5rem"}}>
                        <Typography align="start" variant="h3" gutterBottom>
                            Library
                        </Typography>
                    </Grid>
                    <Grid container spacing={20}>
                        <AssetPost></AssetPost>
                    </Grid>
                </Grid>
            </div>  
        </div>
    )
}

export default withStyles(styles)(Library)