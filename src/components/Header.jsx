import { AppBar, Container, createTheme, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CryptoState } from '../CryptoContext'


const useStyles = makeStyles(()=>({
  title: {
    flex:1,
    color:"gold",
    fontFamily:"Montserrat",
    fontWeight:"bold",
    cursor:"pointer",
  }
}))

const Header = () => {

  const classes = useStyles();

  const naviGation = useNavigate();

  const { currency, setCurrency } = CryptoState

  console.log(currency);
  const darkTheme = createTheme({
    palette: {
      primary:{
        main:"#fff"
      },
      type: 'dark'
    }
  })
  return (
    <ThemeProvider theme={darkTheme} >
      <AppBar color='transparent' position='static' >
        <Container>
          <Toolbar>
            <Typography variant='h6' className={classes.title} onClick={() => naviGation("/")} >Crypto Tracker</Typography>

            <Select
              variant="outlined"
              style={{ 
                width: '100',
                height:'40',
                marginRight:'15'
              }}

              value={currency}
              onChange = {(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"} >USD</MenuItem>
              <MenuItem value={"BDT"} >BDT</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
   </ThemeProvider>
  )
}

export default Header