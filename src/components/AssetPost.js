import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import '../styles/AssetPost.css'
import Asset from '../data/assets'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const styles = theme => ({
    root: {
      flexGrow: 1,
    }
  });

function AssetPost(props) {
    const { classes } = props;
    return (
        <>
            {Asset.map((AssetDetail, index) =>{
                return  <Grid item xs={12} sm={6} md={4} spacing={20} style={{"justifyContent": "center", "display": "flex"}}>
                    <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea href={AssetDetail.assetUrl}>
                    <CardMedia
                        component="img"
                        height="100%"
                        image={AssetDetail.imageUrl}
                        alt="nft"
                    />
                    <CardContent>
                        <Typography gutterBottom  variant="h5" component="div">
                        {AssetDetail.name}
                        </Typography>
                        <Typography variant="body2" color="white">
                            Accent Color: {AssetDetail.properties.accentColor.name}
                        </Typography>
                        <Typography variant="body2" color="white">
                            Type: {AssetDetail.properties.type.name}
                        </Typography>
                        <Typography variant="body2" color="white">
                            Power: {AssetDetail.levels.power}
                        </Typography>
                        <Typography variant="body2" color="white">
                            Stamina: {AssetDetail.levels.stamina}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
                </Grid> 
            })}
        </>
    )
}

export default withStyles(styles)(AssetPost)
