import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import ElementsRoute from './elementsRoute'

render(
  <BrowserRouter>
    <ElementsRoute />
  </BrowserRouter>, 
  document.getElementById('main'))