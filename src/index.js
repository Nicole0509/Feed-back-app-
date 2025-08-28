    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App';


ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
);

ReactDOM.createRoot(document.querySelector('.random')).render(
    <h1>This is from the class random</h1> )