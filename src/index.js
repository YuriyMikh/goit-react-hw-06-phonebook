import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { App } from 'components/App';
import GlobalCss from 'global.css';
import { PersistGate } from 'redux-persist/integration/react';

// import css from './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    <GlobalCss />
  </>
);
