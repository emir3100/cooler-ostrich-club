import React, {useRef, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import '../styles/Library.css'
import Asset from '../data/assets'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

const AssetPost = () => (
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

export const Library = () => {

    let titleelment = useRef(null)

    useEffect(()=> {
        gsap.from(titleelment,{
            scrollTrigger:{
                trigger: titleelment,
                endTrigger: titleelment,
                toggleActions: "restart pause restart pause",
                start: "35% 95%",
                end: "100% 5%",
                markers: false
            },
            duration: 2,
            opacity: 0,
            y: 100,
            ease: "expo.out"
        });
    }, [])

    return (
        <div id="Library" className="library-wrapper" style={{"position": "relative"}}>
            <div className="custom-container" style={{"paddingBlock" : "7rem"}} >
                <Grid container spacing={5} style={{ "margin-bottom": "1.5rem"}}>
                    <Grid item xs={12} style={{"marginBottom" : "5rem"}}>
                        <div ref={el => {titleelment = el}}>
                            <Typography align="start" variant="h3" gutterBottom>
                                Library
                            </Typography>
                        </div>
                    </Grid>
                    <AssetPost />
                </Grid>
            </div>  
        </div>
    )
}

export default Library