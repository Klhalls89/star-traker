import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';

// import rootReducer from './reducers'

import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

// const devTools = composeWithDevTools(applyMiddleWare(thunk));
// const store = createStore(rootReducer, devTools)
//in provider write store={store}

ReactDOM.render(

// <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
// </Provider>

  , document.getElementById('root'));

