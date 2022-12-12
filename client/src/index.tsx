import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Auth } from './store';

import App from './App';
import './styles/index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Auth.Provider>
                <App />
            </Auth.Provider>
        </BrowserRouter>
    </React.StrictMode>
);
