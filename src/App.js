import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";



const theme = createMuiTheme({
  spacing: 8,
  palette: {
    type: "dark",
    background: {
      default: "#00061b"
    },
    primary: {
      main: '#7593B1'
    },
    
  },
  typography: {
    fontFamily: 'consolas, monospace',
    h1: {
      fontSize: "5rem",
      fontWeight: "600",
      color: "white",
    },
  },
});

function App() {
  

  return (
    <MuiThemeProvider theme={theme}> 
     <CssBaseline />
      <main id="Home">
        <Navbar style={{"position": "relative"}}/>
        <Hero />
        <About style={{"position": "relative"}}/>
        <Stats style={{"position": "relative"}}/>
      </main>
    </MuiThemeProvider>
  );
}

export default App;
