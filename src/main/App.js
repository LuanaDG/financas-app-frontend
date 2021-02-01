import React from 'react';
import Login from '../views/login';
import CadastroUsuario from '../views/cadastroUsuario';

import 'bootswatch/dist/flatly/bootstrap.css';
import '../custom.css';


class App extends React.Component {

  state = {
    
  }

  render(){
    return (
     <div>
       <Login />
       <br/>
       <CadastroUsuario />
     </div>
    )

  }
}

export default App;