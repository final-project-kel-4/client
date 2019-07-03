import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import JobDetail from './views/JobDetail'
import Print from './views/Print'
import './App.css';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/job/:id" component={JobDetail} />
          <Route path="/print/:id" component={Print} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
