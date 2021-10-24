import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";


const theme = createMuiTheme({
  spacing: 8,
  palette: {
    background: {
      default: "#e4f0e2"
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
      <div>
        <Navbar />
        <Hero />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
