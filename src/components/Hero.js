import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import '../styles/Hero.css'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

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
gsap.registerPlugin(CSSRulePlugin);

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    imagebreakpoint: {
        [theme.breakpoints.only("xs")]: {
            justifyContent: "center !important",
            transform: "scale(0.8)"
          },
          [theme.breakpoints.between("sm", "md")]: {
            justifyContent: "center !important",
            transform: "scale(1)",
            marginTop: "5rem"
          }
    },
    buttonbreakpoint: {
        [theme.breakpoints.only("xs")]: {
            justifyContent: "center !important",
            display: "flex",
            transform: "scale(1) !important",
            width: "100%",
            marginBlock: "2rem"
          },
          [theme.breakpoints.between("sm", "md")]: {
            marginRight: "0 !important",
            marginInline: "4rem !important",
            transform: "scale(1) !important"
          }
    },
    buttoncontainerbreakpoint: {
        [theme.breakpoints.up("lg")]: {
            marginTop: "10rem"
          },
        [theme.breakpoints.between("sm", "md")]: {
            justifyContent: "center !important",
            display: "flex",
            marginTop: "5rem"
          }
    },
    textbreakpoint: {
        [theme.breakpoints.only("xs")]: {
            justifyContent: "center !important",
            display: "flex",
            fontSize: "3rem",
            textAlign: "center"
          },
          [theme.breakpoints.between("sm", "md")]: {
            justifyContent: "center !important",
            display: "flex",
            fontSize: "5rem",
            textAlign: "center"
          }
    },
    customcontainer:{
        maxWidth: "80%",
        margin: "0 auto",
        paddingTop: "150px !important",
        paddingBottom: "150px !important",
        [theme.breakpoints.only("xs")]: {
            paddingBottom: "20px !important",
        }
    },
  });


function Hero(props) {
    const { classes } = props;
    let text = useRef(null)
    let buttons = useRef(null)
    let image = useRef(null)
    let triggerelement = useRef(null)

    useEffect(()=> {
        gsap.from(text,{
            scrollTrigger:{
                trigger: triggerelement,
                endTrigger: triggerelement,
                toggleActions: "restart pause restart pause",
                start: "top 100%",
                end: "100% 5%",
                markers: false
            },
            duration: 2,
            opacity: 0,
            y: 100,
            ease: "expo.out"
        });
        gsap.from(buttons,{
            scrollTrigger:{
                trigger: triggerelement,
                endTrigger: triggerelement,
                toggleActions: "restart pause restart pause",
                start: "top 100%",
                end: "100% 5%",
                markers: false
            },
            duration: 2,
            opacity: 0,
            y: 100,
            ease: "expo.out"
        });
        gsap.from(image,{
            scrollTrigger:{
                trigger: triggerelement,
                endTrigger: triggerelement,
                toggleActions: "restart pause restart pause",
                start: "top 100%",
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
        <div className="bg" ref={el => triggerelement = el}>
            <div className={classes.customcontainer}>
                <Grid container spacing={40}>
                    <Grid item xs={12} sm={12} md={12} lg={6} display="flex" style={{ "align-self": "center" }}>

                        <Typography variant="h1" className={[classes.grow, classes.textbreakpoint].join(" ")} ref={el => text = el}>
                            WELCOME TO COOLER OSTRICH CLUB
                        </Typography>
                        <div className={classes.buttoncontainerbreakpoint} mt="10rem" ref={el => buttons = el}>
                            <Box display="inline">  
                                <Button href="https://opensea.io/collection/cooler-ostrich-club" variant="contained" color="secondary" className={classes.buttonbreakpoint} style={{ "transform": "scale(1.5)", "transform-origin": "left", "margin-right": "8rem"}}>
                                    BUY ON OPENSEA
                                </Button>
                            </Box>
                            <Box display="inline">
                                <Button variant="contained" color="primary" className={classes.buttonbreakpoint} style={{ "transform": "scale(1.5)", "transform-origin": "left"}}>
                                    JOIN OUR DISCORD
                                </Button>
                            </Box>
                        </div>

                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6}  style={{"display":"flex" ,"justify-content": "flex-end" }} className={classes.imagebreakpoint} >
                        <div className="" ref={el => image = el}>
                            <Swiper effect={'cube'} grabCursor={true} cubeEffect={{
                                "shadow": true,
                                "slideShadows": true,
                                "shadowOffset": 20,
                                "shadowScale": 0.94
                                }} pagination={false} className="mySwiper" loop={true} autoplay={{ delay: 4000, disableOnInteraction: false }} >
                                <SwiperSlide ><img className={classes.swiper} src="/images/1.jpg" alt="nft" /></SwiperSlide>
                                <SwiperSlide><img className={classes.swiper} src="/images/2.jpg" alt="nft" /></SwiperSlide>
                                <SwiperSlide><img className={classes.swiper} src="/images/3.jpg"  alt="nft" /></SwiperSlide>
                                <SwiperSlide><img className={classes.swiper} src="/images/4.jpg" alt="nft" /></SwiperSlide>
                                <SwiperSlide><img className={classes.swiper} src="/images/5.jpg" alt="nft" /></SwiperSlide>
                                <SwiperSlide><img className={classes.swiper} src="/images/6.jpg" alt="nft" /></SwiperSlide>
                                <SwiperSlide><img className={classes.swiper} src="/images/7.jpg" alt="nft" /></SwiperSlide>
                                <SwiperSlide><img className={classes.swiper} src="/images/8.jpg" alt="nft" /></SwiperSlide>
                                <SwiperSlide><img className={classes.swiper} src="/images/9.jpg" alt="nft" /></SwiperSlide>
                                <SwiperSlide><img className={classes.swiper} src="/images/10.jpg" alt="nft" /></SwiperSlide>
                                <SwiperSlide><img className={classes.swiper} src="/images/11.jpg" alt="nft" /></SwiperSlide>
                                <SwiperSlide><img className={classes.swiper} src="/images/12.jpg" alt="nft" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

Hero.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Hero);

