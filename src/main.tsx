import App from './App.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store/store.ts';
import { NextUIProvider } from '@nextui-org/react';
import './app/styles/index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <NextUIProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </NextUIProvider>
    </StrictMode>,
);
