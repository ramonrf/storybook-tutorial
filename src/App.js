import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux';

import InboxScreen from './components/inbox-screen';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <InboxScreen />
      </Provider>
    );
  }
}

export default App;
