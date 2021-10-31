import React, {useState, useEffect} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import '../Styles/Stats.css'

const styles = theme => ({
    root: {
      flexGrow: 1,
    }
  });


function Stats(props) {
    const { classes } = props;

    const url = 'https://api.opensea.io/api/v1/collections?asset_owner=0x2a1ea3ac74703c4efbf09252d6e859296344de5e&offset=0';
    const [collection, setCollection] = useState(null);

    useEffect(()=> {
        axios.get(url)
        .then(response => {
            setCollection(response.data)
        })
    }, [url])
    
    if(collection){
        return (
            <div id="Stats" className="stats-wrapper" style={{"position": "relative"}}>
                    <div className="custom-container" style={{"paddingBlock" : "7rem"}} >
                        <Grid container spacing={3} style={{ "margin-bottom": "1.5rem"}}>
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
                                    {collection[0].stats.count}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography align="center" gutterBottom variant="subtitle1" component="div">
                                    Owner
                                </Typography>
                                <Typography align="center" variant="h6" gutterBottom>
                                    {collection[0].stats.num_owners}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography align="center" gutterBottom variant="subtitle1" component="div">
                                    Floor price
                                </Typography>
                                <Typography align="center" variant="h6" gutterBottom>
                                    {Math.round((collection[0].stats.floor_price)*100)/100} eth
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography align="center" gutterBottom variant="subtitle1" component="div">
                                    Volume traded
                                </Typography>
                                <Typography align="center" variant="h6" gutterBottom>
                                    {Math.round((collection[0].stats.total_volume)*100)/100} eth
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </div>
        )
    }

    return(
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
                            No data
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography align="center" gutterBottom variant="subtitle1" component="div">
                            Owner
                        </Typography>
                        <Typography align="center" variant="h6" gutterBottom>
                            No data
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography align="center" gutterBottom variant="subtitle1" component="div">
                            Floor price
                        </Typography>
                        <Typography align="center" variant="h6" gutterBottom>
                            No data
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography align="center" gutterBottom variant="subtitle1" component="div">
                            Volume traded
                        </Typography>
                        <Typography align="center" variant="h6" gutterBottom>
                            No data
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default withStyles(styles)(Stats)