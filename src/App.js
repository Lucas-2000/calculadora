import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Calculadora from './paginas/Calculadora';

const tema = createMuiTheme({
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
})

function App() {
  return (
    <Router>
      <ThemeProvider theme={tema}>
        <CssBaseline />
        <Switch>
          <Route exact path='/'>
            <Calculadora />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
