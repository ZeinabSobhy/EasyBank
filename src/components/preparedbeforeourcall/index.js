import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makeStyles from "./style";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { FormattedMessage, useIntl } from "react-intl";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const Preparedbeforeourcall = () => {
    const classes = makeStyles();
    const theme = useTheme();
    const [spacing, setSpacing] = React.useState(1);
    const isSmallScreen = useMediaQuery(theme.breakpoints.only("sm"));
    const isXSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));


    return (
        <Grid container className={classes.root}>
            <Grid container  item sm={isSmallScreen ? '6' : '12'}>
            <Grid container  item xs={isXSmallScreen ? '12' :'6'}>
            <div className={classes.title}>
                <Typography className={classes.firstTitle}>Get prepared before our call  </Typography>
                <Typography className={classes.scondTitle}>Required Documents & Procedures  </Typography>
            </div>
    <Grid container item sm={6} xs={12}className={classes.continerone} spacing={3}>
               
     
         <Grid item sm={6} xs={12}  >

        <div className={classes.culem1}>
                <div    >
                <Avatar className={classes. Circle}>
                 <div></div>
                 </Avatar>
                   <Typography className={classes.text1}>
                   {/* <FormattedMessage id="howItWorks.secondPoint.title" />   */}
                   The car must be brought in good working condition
                   </Typography>
                   </div>

                   <div>
                   <Avatar className={classes.Circle}>
                 <div></div>
                 </Avatar>
                   <Typography className={classes.text2}>
                   {/* <FormattedMessage id="howItWorks.secondPoint.subtitle" />  */}
                   In case the chassis is not OK, we'll do a registration 
                  test (AED 170 is the cost).
                   </Typography>
                   </div>

                   <div>
                <Avatar className={classes. Circle}>
                 <div></div>
                 </Avatar>
                   <Typography className={classes.text3}>
                   The commission is 5% for GCC cars and 7% for
                 imported cars (minimum commission 1000 AED).
                   </Typography>
                   </div>

                   <div>
                   <Avatar className={classes. Circle}>
                 <div></div>
                 </Avatar>
                   <Typography className={classes.text4}>
                   If the item is sold, the check will be deposit in your bank account after 10 working days from the time of auction’s conclusion
                   </Typography>
                   </div>
                   </div>
        </Grid>
                 



                   <Grid  item sm={6} xs={12} >
                       <div className={classes.culem2}>
                       
                   <div>
                <Avatar className={classes. Circle}>
                 <div></div>
                 </Avatar>
                   <Typography className={classes.text1}>
                   {/* <FormattedMessage id="howItWorks.secondPoint.title" />   */}
                   If the car is sold for less than AED 5,000, the company 
commission is only AED 500.
                   </Typography>
                   </div>

                   <div>
                   <Avatar className={classes.Circle}>
                 <div></div>
                 </Avatar>
                   <Typography className={classes.text2}>
                   {/* <FormattedMessage id="howItWorks.secondPoint.subtitle" />  */}
                   For the classic cars, trucks and heavy equipment, you must bring export test only and the commission is 7% (minimum commission 1000 AED).
                   </Typography>
                   </div>

                   <div>
                   <Avatar className={classes. Circle}>
                 <div></div>
                 </Avatar>
                   <Typography className={classes.text3}>
                   For the equipment (generator, scissor lift, electric forklift ..... etc) Tax invoice is required.
                   </Typography>
                   </div>

                   <div>
                   <Avatar className={classes. Circle}>
                 <div></div>
                 </Avatar>
                   <Typography className={classes.text4}>
                   We'll do a comprehensive test (AED 300 is the cost).
                   </Typography>
                   </div>
                   </div>
                  




                   </Grid>
                 
         
     
               
           
            </Grid>
           


       
        
        </Grid>
        </Grid> 
         </Grid>


    );
    
   
    
   










};
export default Preparedbeforeourcall;

