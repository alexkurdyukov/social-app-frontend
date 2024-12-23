import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store/store.ts';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from './app/theme/ThemeProvider.tsx';
import { AppRouter } from './app/router/AppRouter.tsx';
import './app/styles/index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <NextUIProvider>
            <ThemeProvider>
                <Provider store={store}>
                    <AppRouter />
                </Provider>
            </ThemeProvider>
        </NextUIProvider>
    </StrictMode>,
);
