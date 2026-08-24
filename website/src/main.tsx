import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'highlight.js/styles/vs2015.css';
import App from './App.tsx';

// biome-ignore lint/style/noNonNullAssertion: the root element is guaranteed to be in the DOM
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
