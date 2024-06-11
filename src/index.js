import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import useRouter from './routes/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={ useRouter } />
	</React.StrictMode>
);

reportWebVitals();
