import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import '../styles/Faq.css'

const styles = theme => ({
    root: {
      flexGrow: 1,
    }
  });


  const Faqaccordion = ({question,  answer}) => (
    <Grid item xs={12} md={6}>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>   
  </Grid>
  )

export const Faq = (props) => {
    const { classes } = props;
    return (
        <div id="Faq" className="faq-wrapper" style={{"position": "relative"}}>
            <div className="custom-container" style={{"paddingBlock" : "7rem"}} >
                <Grid container spacing={3} style={{ "margin-bottom": "1.5rem"}}>
                    <Grid item xs={12} style={{"marginBottom" : "5rem"}}>
                        <Typography align="start" variant="h3" gutterBottom>
                            Faq
                        </Typography>
                    </Grid>
                    <Faqaccordion question="What is Cooler Ostrich Club?" answer="Cooler Ostrich Club is a NFT collection of 12 custom made 600x600 images of diffrent cool ostriches, but there are only few rare ones that have more power than others!" />
                    <Faqaccordion question="How do I get one?" answer="1. Create a free account at Opensea.io. 2. Download the Metamask browser extension. 3. Transfer some Etheruem to your Metamask account.  4. Shop for some cool ostriches at opensea.io" />
                    <Faqaccordion question="What benefits do I get from owning a Cooler Ostrich Club NFT?" answer="Other than being cool, you get access to our upcoming game where you will get a free copy." />
                    <Faqaccordion question="What token standard and blockchain do you use?" answer="We use the ERC-1155 token standard and the Polygon blockchain." />
                </Grid>
            </div>
        </div>
    )
}



export default withStyles(styles)(Faq)

