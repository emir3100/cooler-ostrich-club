import React, {useRef, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import '../styles/Roadmap.css'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

function Roadmap() {
    let titleelment = useRef(null)
    let roadmapelement = useRef(null)
    let triggerelement = useRef(null)

    useEffect(()=> {
        gsap.from(roadmapelement,{
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
        gsap.from(titleelment,{
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
    

    return (
        <div id="Roadmap" className="roadmap-wrapper" style={{"position": "relative"}}>
                    <div className="custom-container" style={{"paddingBlock" : "7rem"}} ref={el => {triggerelement = el}}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} style={{"marginBottom" : "5rem"}}>
                                <div ref={el => {titleelment = el}}>
                                    <Typography align="start" variant="h3" gutterBottom>
                                        Roadmap
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <section class="timeline" ref={el => {roadmapelement = el}}>
                                    <div class="timeline-line">
                                    <span class="timeline-innerline"></span>
                                    </div>
                                    <ul class="tmul">
                                        <li>
                                            <span class="timeline-point"></span>
                                            <Typography span component="span" className="title" variant="h6">
                                                1
                                            </Typography>
                                            <Typography paragraph component="p" align="center" gutterBottom variant="subtitle1">
                                                Launch our NFT collection on Opensea.io
                                            </Typography>
                                        </li>
                                        <li>
                                            <span class="timeline-point"></span>
                                            <Typography span component="span" className="title" variant="h6">
                                                2
                                            </Typography>
                                            <Typography paragraph component="p" align="center" gutterBottom variant="subtitle1">
                                                Get our nft collection listed on rarity.tools.
                                            </Typography>
                                        </li>
                                        <li>
                                            <span class="timeline-point"></span>
                                            <Typography span component="span" className="title" variant="h6">
                                                3
                                            </Typography>
                                            <Typography paragraph component="p" align="center" gutterBottom variant="subtitle1">
                                                Sell everything out and get more club members.
                                            </Typography>
                                        </li>
                                        <li>
                                            <span class="timeline-point"></span>
                                            <Typography span component="span" className="title" variant="h6">
                                                4
                                            </Typography>
                                            <Typography paragraph component="p" align="center" gutterBottom variant="subtitle1">
                                                Finish the game and launch it on steam.
                                            </Typography>
                                        </li>
                                        <li>
                                            <span class="timeline-point"></span>
                                            <Typography span component="span" className="title" variant="h6">
                                                5
                                            </Typography>
                                            <Typography paragraph component="p" align="center" gutterBottom variant="subtitle1">
                                                All the NFT owners get a free access to game.
                                            </Typography>
                                        </li>
                                    </ul>
                                </section>
                            </Grid>
                        </Grid>
                    </div>
                </div>
    )
}

export default Roadmap
