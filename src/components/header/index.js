import React, { useContext, useEffect, useState } from 'react';
import makeStyles from './style';
import { useTheme } from '@material-ui/core/styles';
import LOGOEA from '../../assets/images/logo-ea.svg';
import { Grid } from '@material-ui/core';
import { useMediaQuery,Button, } from '@material-ui/core';
import ResonsiveImage from '../../components//ResponsiveImage//index';


const Header = () =>{
    const classes = makeStyles();
	const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    

    return(
        <div className={classes.HeaderContainer}>
                {!isSmallScreen && (
					<Grid  className={classes.logoea}>
                        <div>
                        <img src={LOGOEA} className={classes.logoea} alt="Test" />
                        </div>
                        
					</Grid>
				)}
                <div className={classes.langughBtn}>
						<Button
							variant="contained"
                            size="small"
                            color="secondary"
							
							className={classes.btn}
						>
							العربيه
						</Button>
					</div>

            

        </div>

    );
}
export default Header;