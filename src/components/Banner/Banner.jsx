import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Carousel from './Carousel';


const useStyles = makeStyles(() =>({
    banner:{
        backgroundImage:"url(https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?cs=srgb&dl=pexels-pixabay-373543.jpg&fm=jpg)"
    },

    bannerContainer:{
        height:400,
        display:"flex",
        flexDirection:"column",
        paddingTop:"25",
        justifyContent:"space-around"
    },
    tagLine:{
        display:"flex",
        height:"40%",
        flexDirection:"column",
        justifyContent:"center",
        textAlign:"center"
    }
}))

const Banner = () => {

    const classes = useStyles();
  return (
    <div className={classes.banner}>
        <Container className={classes.bannerContainer} >
            <div className={classes.tagLine} >
                <Typography
                    variant="h2"
                    style={{
                        fontWeight:"bold",
                        marginBottom:15,
                        fontFamily:"Montserrat"
                    }}
                >
                    Crypto Tracker
                </Typography>

                <Typography
                    variant="subtitle2"
                    style={{
                        color:"darkgrey",
                        textTransform:"capitalize",
                        fontFamily:"Montserrat"
                    }}
                >
                    Get all the info regarding your favorite Crypto Currency
                </Typography>
            </div>
            <Carousel/>
        </Container>
    </div>
  )
}

export default Banner