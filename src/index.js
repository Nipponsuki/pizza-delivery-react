import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';

import store from 'redux/store';
import client from 'graphql/client';
import { theme } from 'theme/theme';
import GlobalStyle from 'theme/GlobalStyles';
import App from './routes';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App history={history} />
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
