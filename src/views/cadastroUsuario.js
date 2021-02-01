import React from 'react';
import Card from '../components/card';
import FormGroup from '../components/form-group'

export default class Login extends React.Component {

  state = {
    nome: '',
    email: '',
    senha: '',
    senhaRepeticao: ''
  }

  cadastrar = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div className="container">
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
                <button type="button" className="btn btn-danger">Cancelar</button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    )
  }
}