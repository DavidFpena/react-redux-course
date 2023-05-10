// 1) Import the react and reactDom libraries
import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App'

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');


// 3) Tell react to take control of the element
const root = ReactDom.createRoot(el);


// 4) Show the component on the screen
root.render(<App />);
