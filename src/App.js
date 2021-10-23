import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7593B1'
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}> 
      <div>
        <Navbar></Navbar>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
