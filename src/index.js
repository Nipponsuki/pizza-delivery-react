import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'redux/store';
import client from 'graphql/client';
import { theme } from 'theme/theme';
import GlobalStyle from 'theme/GlobalStyles';
import App from './routes';

const history = createBrowserHistory();

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App history={history} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
