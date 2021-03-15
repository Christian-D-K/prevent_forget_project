import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../src/tsx/views/pages/Main';
import Edit from '../src/tsx/views/pages/Edit';
import HowUse from '../src/tsx/views/pages/HowUse';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/E" component={Edit} />
        <Route exact path="/HOW_USED" component={HowUse} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
