
import { Container, createTheme, TextField, ThemeProvider, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CoinList } from '../config/api';
import { CryptoState } from '../CryptoContext';

const CoinsTable = () => {

    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState();



    const {currency} = CryptoState();

    // for fetch our coins 
    const fetchCoins = async () => {

        setLoading(true);
        const {data} = await axios.get(CoinList(currency));

        setCoins(data);
        setLoading(false);        
    }


    console.log( coins);
    useEffect(() => {
       fetchCoins();
    }, [currency]);

    const darkTheme = createTheme({
        palette: {
            primary: {
                main:"#fff"    
            },
            type:"dark"
        }
    })

  return (
    <ThemeProvider theme={darkTheme} >
        <Container style={{textAlign:"center"}} >
            <Typography
                variant="h4"
                style={{margin:18, fontFamily:"Montserrat"}}
            >
                Cryptocurrency Prices by Market Cap
            </Typography>

            <TextField 
                label="Search for a Crypto Currency..."
                variant='outlined'
                style={{marginBottom:20, width:"100%"}}
                onChange={e => setSearch(e.target.value)}
            
            />
        </Container>

    </ThemeProvider>
  )
}

export default CoinsTable