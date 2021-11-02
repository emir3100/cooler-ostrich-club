import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import '../styles/Library.css'
import AssetPost from './AssetPost';

export const Library = (props) => {

    return (
        <div id="Library" className="library-wrapper" style={{"position": "relative"}}>
            <div className="custom-container" style={{"paddingBlock" : "7rem"}} >
                <Grid container spacing={5} style={{ "margin-bottom": "1.5rem"}}>
                    <Grid item xs={12} style={{"marginBottom" : "5rem"}}>
                        <Typography align="start" variant="h3" gutterBottom>
                            Library
                        </Typography>
                    </Grid>
                    <AssetPost />
                </Grid>
            </div>  
        </div>
    )
}

export default Library