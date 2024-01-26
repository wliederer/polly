import React from 'react';
import ReactDOM from 'react-dom/client';
import Rolly from 'polly'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rolly title={"What kind of stickers do you like?"} picks={["video game","random","anime"]} />
  </React.StrictMode>
);


