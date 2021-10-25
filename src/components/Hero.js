import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './Hero.css'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { gsap } from "gsap";

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper bundle
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

// import Swiper core and required modules
import SwiperCore, { EffectCube, Pagination, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCube, Pagination, Autoplay ]);



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
            y: 100
        })
        timeline.from(buttons,{
            duration: 1,
            opacity: 0,
            y: 100
        })
        timeline.from(image,{
            duration: 1,
            opacity: 0,
            y: 100
        })
    })

    return (
        <div className="custom-container mt-16">
            <Grid container spacing={40}>
                <Grid item xs={12} sm={6}>
                    <div>
                        <Typography variant="h1" className={classes.grow} ref={el => text = el}>
                            WELCOME TO COOLER OSTRICH CLUB
                        </Typography>
                        <div className="mt-16" ref={el => buttons = el}>
                            <Box display="inline" mr="2rem">
                                <Button variant="contained" color="secondary" className={classes.button}>
                                    BUY ON OPENSEA
                                </Button>
                            </Box>
                            <Box display="inline" mr="2rem">
                                <Button variant="contained" color="primary" className={classes.button}>
                                    JOIN OUR DISCORD
                                </Button>
                            </Box>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className="" ref={el => image = el}>
                        <Swiper effect={'cube'} grabCursor={true} cubeEffect={{
                            "shadow": false,
                            "slideShadows": false,
                            "shadowOffset": 20,
                            "shadowScale": 0.94
                            }} pagination={false} className="mySwiper" loop={true} autoplay={{ delay: 5000, disableOnInteraction: false }} >
                            <SwiperSlide ><img className={classes.swiper} src="/images/nft1.png" /></SwiperSlide>
                            <SwiperSlide><img className={classes.swiper} src="/images/nft2.png" /></SwiperSlide>
                            <SwiperSlide><img className={classes.swiper} src="/images/nft3.png" /></SwiperSlide>
                            <SwiperSlide><img className={classes.swiper} src="/images/nft4.png" /></SwiperSlide>
                            <SwiperSlide><img className={classes.swiper} src="/images/nft5.png" /></SwiperSlide>
                        </Swiper>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

Hero.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Hero);

