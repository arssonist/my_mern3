import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js'

ReactDOM.render(
  <App message=       "string" />,
  document.getElementById('root')
);


setTimeout( () => {
  ReactDOM.render(
    <h2>...</h2>,
    document.getElementById('root')
  );
}, 4000)
