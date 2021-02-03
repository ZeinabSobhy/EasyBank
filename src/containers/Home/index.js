import React from 'react';
import Header from '../../components/header/index';
import makeStyles from './style';
import { useTheme } from '@material-ui/core/styles';
 
function Home() {
    const classes = makeStyles();
	const theme = useTheme();
    return(
        <div  className={classes.homecontenir}>
            <Header/>
        </div>

    )
  
    
 
  
}
 
export default Home;