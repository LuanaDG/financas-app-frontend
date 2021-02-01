import React from 'react';
import { Route, Switch, HashRouter, Router } from 'react-router-dom';
import Login from '../views/login'
import CadastroUsuario from '../views/cadastroUsuario'

function Rotas(){
  return(
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/cadastro-usuarios" component={CadastroUsuario} />
      </Switch>
    </HashRouter>

  )
}