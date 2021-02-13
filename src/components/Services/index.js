import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makeStyles from "./Style";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { FormattedMessage, useIntl } from "react-intl";
import DOCUMENT_ICON from '../../assets/icons/document.png';
import STAR_ICON from '../../assets//icons//Star.png';
import CLOCK_ICON from '../../assets//icons/clock.png'

const Services = () => {
    const classes = makeStyles();
    const theme = useTheme();
    const [spacing, setSpacing] = React.useState(1);
    const isSmallScreen = useMediaQuery(theme.breakpoints.only("sm"));
    const isXSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));


    return (
        <Grid container className={classes.root}>
            <Grid container  item sm={isSmallScreen ? '4' : '12'}>
            <Grid container  item xs={isXSmallScreen ? '12' :'4'}>
            <div className={classes.title}>
                <Typography className={classes.firstTitle}> <FormattedMessage id="services.headline" /></Typography>
                <Typography className={classes.scondTitle}> <FormattedMessage id="services.subtitle" /></Typography>
                

            </div>



        <div  className={classes.continer}>
            


            <div className={classes.help}>
            <div className={classes.documentIcon}>
                <img
                //   style={{
                //     width: isSmallScreen && "40px",
                //     height: isSmallScreen && "50px",
                //   }}
                  src={DOCUMENT_ICON}
                  alt="document"
                />
              </div>
              <div className={classes.textone}>
                <Typography className={classes.titleEasy}> <FormattedMessage id="services.firstCard.headline" /></Typography>
               <Typography className={classes.texthelp}><FormattedMessage id="services.firstCard.subtitle" /> </Typography>

           </div>
           </div>
           
           
           <div className={classes.BestReturn}>
           <div className={classes.startIcon}>
                <img
                  src={STAR_ICON}
                  alt="star"
                />
              </div>
               <div className={classes.texttwo}>
               <Typography className={classes.titleBest}><FormattedMessage id="services.secondCard.headline" /></Typography>
               <Typography className={classes.textBestReturn}><FormattedMessage id="services.secondCard.subtitle" /></Typography>

           </div>
           </div>

           <div className={classes.DedicatedTeam}>
           <div className={classes.startIcon}>
                <img
                  src={CLOCK_ICON }
                  alt="clock"
                />
              </div>
              <div className={classes.texttwo}>
               <Typography className={classes.titleBest}> <FormattedMessage id="services.thirdCard.headline" /></Typography>
               <Typography className={classes.textBestReturn}><FormattedMessage id="services.thirdCard.subtitle" /></Typography>

           </div>
           </div>

           
         
        </div>
        </Grid>
        </Grid>
        </Grid>


    );
    
   
    
   










};
export default Services;

