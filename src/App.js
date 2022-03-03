
import { makeStyles } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import CoinPage from './Pages/CoinPage';
import HomePage from './Pages/HomePage';

function App() {

  const useStyles = makeStyles(() =>({
    App: {
      backgroundColor: "#14161a",
      color:"white",
      minHeight:"100vh"
    }
  }))

  const classes = useStyles();
  return (
    <BrowserRouter>
    <div className={classes.App}>
      <Header/>
      <Routes>
        <Route path='/'  element={<HomePage/>} exact />
        <Route path='/coins/:id' element={<CoinPage/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
