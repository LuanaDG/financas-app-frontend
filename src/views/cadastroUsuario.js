import React from 'react';
import Card from '../components/card';
import FormGroup from '../components/form-group'
import { withRouter } from 'react-router-dom';
import UsuarioService from '../app/service/usuarioService'
import { mensagemSucesso, mensagemErro } from '../components/toastr'

class CadastroUsuario extends React.Component {

  state = {
    nome: '',
    email: '',
    senha: '',
    senhaRepeticao: ''
  }

  constructor(){
    super();
    this.service = new UsuarioService();
  }

  validar(){
    const msgs = []

    if(!this.state.nome){
      msgs.push('O campo Nome é obrigatório.')
    }

    if(!this.state.email){
      msgs.push('O campo Email é obrigatório.')
    } else if( !this.state.email.match(/^[a-z0-9]+@[a-z0-9]+\.[a-z]/)){
      msgs.push('Informe um Email válido.')
    }

    if(!this.state.senha || !this.state.senhaRepeticao){
      msgs.push('Digite a senha 2 vezes.')
    } else if(this.state.senha !== this.state.senhaRepeticao){
      msgs.push('As senhas não coincidem.')
    }

    return msgs;
  }

  cadastrar = () => {
    const msgs = this.validar();

    if(msgs && msgs.length > 0){
      msgs.forEach((msg, index) => {
        mensagemErro(msg)
      });
      return false;
    }

    const usuario = {
      nome: this.state.nome,
      email: this.state.email,
      senha: this.state.senha
    };

    this.service.salvar(usuario)
    .then(response => {
      mensagemSucesso('Usuário cadastrado com sucesso! Faça o Login para acessar o sistema.')
      this.props.history.push('/login')
    }).catch(error => {
      mensagemErro(error.response.data)
    })
  }

  cancelar = () => {
    this.props.history.push('/login')
  }


  render() {
    return (

      <Card title="Cadastro de Usuário">
        <div className="row">
          <div className="col-lg-12">
            <div className="bs-component">
              <FormGroup label="Nome: *" htmlFor="inputNome">
                <input type="text"
                  value={this.state.nome}
                  onChange={e => this.setState({ nome: e.target.value })}
                  className="form-control"
                  id="inputNome"
                  name="nome"
                  placeholder="Digite seu nome" />
              </FormGroup>
              <FormGroup label="Email: *" htmlFor="inputEmail">
                <input type="email"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                  className="form-control"
                  id="inputEmail"
                  name="email"
                  placeholder="Digite seu e-mail" />
              </FormGroup>
              <FormGroup label="Senha: *" htmlFor="inputSenha">
                <input type="password"
                  value={this.state.senha}
                  onChange={e => this.setState({ senha: e.target.value })}
                  className="form-control"
                  id="inputSenha"
                  name="senha"
                  placeholder="Digite uma senha" />
              </FormGroup>
              <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                <input type="password"
                  value={this.state.senhaRepeticao}
                  onChange={e => this.setState({ senhaRepeticao: e.target.value })}
                  className="form-control"
                  id="inputRepitaSenha"
                  name="senha"
                  placeholder="Repita a senha" />
              </FormGroup>
              <button onClick={this.cadastrar} type="button" className="btn btn-success">Salvar</button>
              <button onClick={this.cancelar} type="button" className="btn btn-danger">Cancelar</button>
            </div>
          </div>
        </div>
      </Card>
    )
  }
}
export default  withRouter (CadastroUsuario);