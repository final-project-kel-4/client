import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import JobDetail from './views/JobDetail'
import './App.css';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Home} />
          <Route path="/job/:id" exact component={JobDetail} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
