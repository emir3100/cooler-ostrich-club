import './styles/App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Roadmap from './components/Roadmap';
import Library from './components/Library';
import Faq from './components/Faq';
import Footer from './components/Footer';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";


const theme = createTheme({
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
      <main id="#">
        <Navbar style={{"position": "relative"}}/>
        <Hero />
        <About id="About" style={{"position": "relative"}} />
        <Stats id="Stats" style={{"position": "relative"}} />
        <Roadmap id="Roadmap" style={{"position": "relative"}} />
        <Library id="Library" style={{"position": "relative"}} />
        <Faq id="FAQ" style={{"position": "relative"}} />
        <Footer />
      </main>
    </MuiThemeProvider>
  );
}

export default App;
