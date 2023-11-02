import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';

import { IntlProvider } from 'react-intl';
import English from './languages/english.json'
import French from './languages/french.json'
import { ApolloProvider,ApolloClient, InMemoryCache } from '@apollo/client';

 

const  client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache()
});



//here to demontrate the intl i will use french and english NB: we used it only inside listUser interface because of time
const local = navigator.language;
var lang='';

if(local == 'en-US'){
  lang=English
}else{
  lang = French
}

// here is redux.
const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <IntlProvider locale={local} messages={lang}>
        <App />
      </IntlProvider>
    </ApolloProvider>
  </Provider>,
)
