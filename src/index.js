import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './containers/App/App';
import { rootReducer } from './reducers'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
const devTools = composeWithDevTools(applyMiddleware(thunk));

// const devTools = composeWithDevTools();
const store = createStore(rootReducer, devTools)


ReactDOM.render(

<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>

  , document.getElementById('root'));

