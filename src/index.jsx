// 1: Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18
import App from './App';

// 2: Get a reference to the div with ID root
const rootElement = document.getElementById('root');

// 3: Tell React to take control of the element
const root = ReactDOM.createRoot(rootElement);

// 5: Show the component on the screen
root.render(<App />);
