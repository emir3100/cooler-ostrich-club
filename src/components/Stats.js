import React, {useRef, useState, useEffect} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import '../styles/Stats.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

const styles = theme => ({
    root: {
      flexGrow: 1,
    }
  });

function Stats(props) {
    const { classes } = props;

    let stats = useRef(null)
    let items = useRef(null)
    let owner = useRef(null)
    let floorprice = useRef(null)
    let volumetraded = useRef(null)
    let triggerelement = useRef(null)

    useEffect(()=> {
        gsap.from(stats,{
            scrollTrigger:{
                trigger: triggerelement,
                endTrigger: triggerelement,
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
        gsap.from(items,{
            scrollTrigger:{
                trigger: triggerelement,
                endTrigger: triggerelement,
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
        gsap.from(owner,{
            scrollTrigger:{
                trigger: triggerelement,
                endTrigger: triggerelement,
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
        gsap.from(floorprice,{
            scrollTrigger:{
                trigger: triggerelement,
                endTrigger: triggerelement,
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
        gsap.from(volumetraded,{
            scrollTrigger:{
                trigger: triggerelement,
                endTrigger: triggerelement,
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
    
    

    const url = 'https://api.opensea.io/api/v1/collections?asset_owner=0x2a1ea3ac74703c4efbf09252d6e859296344de5e&offset=0';
    const [collection, setCollection] = useState(null);

    useEffect(()=> {
        axios.get(url)
        .then(response => {
            setCollection(response.data)
        })
    }, [url])

    let itemsData = null
    let ownerData = null
    let floorPriceData = 0
    let volumeTradedData = 0
    if(collection){
        itemsData = collection[0].stats.count;
        ownerData = collection[0].stats.num_owners
        floorPriceData = Math.round((collection[0].stats.floor_price)*100)/100
        volumeTradedData = Math.round((collection[0].stats.total_volume)*100)/100
    }

    return (
        <div id="Stats" className="stats-wrapper" style={{"position": "relative"}}>
            <div className="custom-container" style={{"paddingBlock" : "7rem"}} ref={el => {triggerelement = el}}>
                <Grid container spacing={3} style={{ "margin-bottom": "1.5rem"}}>
                    <Grid item xs={12} style={{"marginBottom" : "5rem"}}>
                        <Typography align="start" variant="h3" gutterBottom ref={el => {stats = el}}>
                            Stats
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <div ref={el => {items = el}}>
                            <Typography align="center" gutterBottom variant="subtitle1" component="div">
                                Items
                            </Typography>
                            <Typography align="center" variant="h6" gutterBottom>
                                {itemsData}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <div ref={el => {owner = el}}>
                            <Typography align="center" gutterBottom variant="subtitle1" component="div">
                                Owner
                            </Typography>
                            <Typography align="center" variant="h6" gutterBottom>
                                {ownerData}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <div ref={el => {floorprice = el}}>
                            <Typography align="center" gutterBottom variant="subtitle1" component="div">
                                Floor price
                            </Typography>
                            <Typography align="center" variant="h6" gutterBottom>
                                {floorPriceData} eth
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <div ref={el => {volumetraded = el}}>
                            <Typography align="center" gutterBottom variant="subtitle1" component="div">
                                Volume traded
                            </Typography>
                            <Typography align="center" variant="h6" gutterBottom>
                                {volumeTradedData} eth
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default withStyles(styles)(Stats)