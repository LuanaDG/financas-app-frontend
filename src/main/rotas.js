import React from 'react';
import { Route, Switch, HashRouter, Router } from 'react-router-dom';
import Login from '../views/login'

function Rotas(){
  return(
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </HashRouter>
  )
}