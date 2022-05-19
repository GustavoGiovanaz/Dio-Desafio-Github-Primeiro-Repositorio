import React from 'react';
import {stylesProvider} from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import globalStyle from './commons/styles/global-style'
import { StylesProvider } from '../node_modules/@material-ui/styles/index';

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <globalStyle />
      <div>
        teste
      </div>
    </StylesProvider>
  );
}

export default App;
