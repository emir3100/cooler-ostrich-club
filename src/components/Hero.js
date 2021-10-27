import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './Hero.css'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper bundle
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

// import Swiper core and required modules
import SwiperCore, { EffectCube, Pagination, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCube, Pagination, Autoplay ]);

gsap.registerPlugin(ScrollTrigger);


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
  });


function Hero(props) {
    const { classes } = props;
    let timeline = gsap.timeline();
    let text = useRef(null)
    let buttons = useRef(null)
    let image = useRef(null)


    useEffect(()=> {
        timeline.from(text,{
            duration: 1,
            opacity: 0,
            y: 100,
            stagger: 0.6
        })
        timeline.from(buttons,{
            duration: 1,
            opacity: 0,
            y: 100
        }, "0.5")
        timeline.from(image,{
            duration: 1,
            opacity: 0,
            y: 100
        }, "0.5")
        // timeline.from(text2,{
        //     duration: 1,
        //     opacity: 0,
        //     y: 100
        // }, "0.5")
        // gsap.from(text2, {
        //     scrollTrigger: {
        //         trigger: triggerContainer,
        //         endTrigger: triggerContainer,
        //         toggleActions: "restart pause restart pause",
        //         start: "90% bottom",
        //         markers: true
        //     },
        //     opacity: 0,
        //     x: 100,
        //     duration: 1,
        //     ease: "expo.out"
        // });
    });

    return (
        <div className="bg">
            <div className="custom-container pt-16">
                <Grid container spacing={40}>
                    <Grid item xs={12} sm={6} display="flex" style={{ "align-self": "center" }}>

                        <Typography variant="h1" className={classes.grow} ref={el => text = el}>
                            WELCOME TO COOLER OSTRICH CLUB
                        </Typography>
                        <div className="mt-10" mt="10rem" ref={el => buttons = el}>
                            <Box display="inline" mr="10rem">
                                <Button variant="contained" color="secondary" className={classes.button} style={{ "transform": "scale(1.5)", "transform-origin": "left"}}>
                                    BUY ON OPENSEA
                                </Button>
                            </Box>
                            <Box display="inline">
                                <Button variant="contained" color="primary" className={classes.button} style={{ "transform": "scale(1.5)"}}>
                                    JOIN OUR DISCORD
                                </Button>
                            </Box>
                        </div>

                    </Grid>
                    <Grid item xs={12} sm={6}  style={{"display":"flex" ,"justify-content": "flex-end" }}>
                        <div className="" ref={el => image = el}>
                            <Swiper effect={'cube'} grabCursor={true} cubeEffect={{
                                "shadow": true,
                                "slideShadows": true,
                                "shadowOffset": 20,
                                "shadowScale": 0.94
                                }} pagination={false} className="mySwiper" loop={true} autoplay={{ delay: 4000, disableOnInteraction: false }} >
                                <SwiperSlide ><img className={classes.swiper} src="/images/nft1.png" alt="nft" /></SwiperSlide>
                                <SwiperSlide><img className={classes.swiper} src="/images/nft2.png" alt="nft" /></SwiperSlide>
                                <SwiperSlide><img className={classes.swiper} src="/images/nft3.png"  alt="nft" /></SwiperSlide>
                                <SwiperSlide><img className={classes.swiper} src="/images/nft4.png" alt="nft" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="wrapper mt-16" style={{"position": "relative"}}>
                <div className="custom-container py-7" >
                    <Grid container spacing={40}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h3" className={classes.grow} >
                                CLAIM YOUR COOL OSTRICH
                            </Typography>
                            <Typography variant="p" className={classes.grow} >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl justo, tristique vitae ultricies eget, ultrices sed nulla. Etiam sed consequat odio. 
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} display="flex" style={{ "align-self": "center" }}>
                            <Button variant="contained" color="secondary" className={classes.button} style={{ "transform": "scale(1.5)", "margin": "0 auto", "display": "block" }} >
                                CONNECT METAMASK
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

Hero.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Hero);

