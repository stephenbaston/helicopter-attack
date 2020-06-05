import React from 'react';
import './index.scss';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { GameScreen, TitleScreen } from './screens';
import * as serviceWorker from './serviceWorker';

render(
  <BrowserRouter>
    <GameScreen />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
