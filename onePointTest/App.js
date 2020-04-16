import React from 'react';
import AppContainer from './src/components/AppContainer';
import { Provider } from 'react-redux';
import store from './store';

function App(){
  return (
    <Provider store={store}>
      <AppContainer/> 
    </Provider>     
  );
};
export default App;
