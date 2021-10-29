import React, {useState, useEffect} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Paper from '@mui/material/Paper';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        backgroundColor: "#f50057 !important",
        color: "white !important"
    }
  });


function Stats(props) {
    const { classes } = props;

    const url = 'https://api.opensea.io/api/v1/asset/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/1/';
    const [collection, setCollection] = useState(null);

    useEffect(()=> {
        axios.get(url)
        .then(response => {
            setCollection(response.data)
        })
    }, [url])
    
    return (
        <div id="Stats" className="stats-wrapper" style={{"position": "relative"}}>
                <div className="custom-container" style={{"paddingBlock" : "7rem"}} >
                    <Grid container spacing={3}>
                        <Grid item xs={12} style={{"marginBottom" : "5rem"}}>
                            <Typography align="start" variant="h3" gutterBottom>
                                Stats
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} >
                            <Typography align="center" gutterBottom variant="subtitle1" component="div">
                                Items
                            </Typography>
                            <Typography align="center" variant="h6" gutterBottom>
                                12
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography align="center" gutterBottom variant="subtitle1" component="div">
                                Owner
                            </Typography>
                            <Typography align="center" variant="h6" gutterBottom>
                                1
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography align="center" gutterBottom variant="subtitle1" component="div">
                                Floor price
                            </Typography>
                            <Typography align="center" variant="h6" gutterBottom>
                                0.1 eth
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography align="center" gutterBottom variant="subtitle1" component="div">
                                Volume traded
                            </Typography>
                            <Typography align="center" variant="h6" gutterBottom>
                                0.00 eth
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>
    )
}

export default withStyles(styles)(Stats)