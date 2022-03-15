import { makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useParams } from 'react-router-dom';
import CoinInfo from '../components/CoinInfo';
import { SingleCoin } from '../config/api';
import { CryptoState } from "./../CryptoContext";

const CoinPage = () => {

  const {id} = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () =>{
    const {data} = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  console.log(coin);

  useEffect(() =>{
    fetchCoin();
  }, []);

  const useStyles = makeStyles((theme) =>({
    container: {
      display:"flex",
      [theme.breakpoints.down("md")]:{
        flexDirection:"column",
        alignItems:"center",
      }
    },
    sidebar: {
      width:"30%",
      [theme.breakpoints.down("md")]:{
        width:"100%",        
      },
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      marginTop:25,
      borderRight:"2px solid grey"
    }
  }));

  const classes = useStyles();
  


  return (
    <div className={classes.container}>
      {/* sidebar */}
      <div className={classes.sidebar} >
        <img src={coin?.image.large} alt={coin?.name} height="200" style={{marginBottom:20}} />  

        <Typography variant="h3" className={classes.heading} >
          {coin?.name}
        </Typography>   
        <Typography variant="subtitle1" className={classes.description}>
          {ReactHtmlParser(coin?.description.en.split(". ")[0])}
        </Typography>
      </div>

      {/* chart */}
      <CoinInfo coin={coin}/>
    </div>
  )
}

export default CoinPage