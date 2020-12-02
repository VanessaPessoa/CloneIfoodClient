import {Ilustracao, Container, Logo, Form, Input, Button} from'./style'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import api from '../../services/api'

import Logomarca from '../../assets/img/logo.png'
import Delivery from '../../assets/img/cadastro1.png'


function Cadastro() {
  let history = useHistory();
  const { register, handleSubmit, errors, watch} = useForm();

  function handleClick() {
      history.push("/");
  }

  function onSubmit(data){
    var data = JSON.stringify({
      "nome": data.nome,
      "senha": data.senha,
      "email": data.email,
      "telefone": data.telefone
    });

    var config = {
      method: 'post',
      url: 'api/cliente/create',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    api(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      history.push("/entrar");
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  return (
    <Container>
      <button onClick={handleClick}> <Logo src = {Logomarca} /> </button>
      <Ilustracao src = {Delivery} />
          
      <Form onSubmit={handleSubmit(onSubmit)}>
          <h2>  Cadastre-se </h2>
          <Input 
            placeholder="Nome"
            type="text"
            name="nome"
            ref = {register({ required: true })} />

          <Input 
            placeholder="Telefone"
            type="tel"
            name="telefone"
            ref = {register({ required: true })}  />

          <Input 
            placeholder="Email"
            type="email"
            name="email"
            ref = {register({ required: true })}  />
          <Input 
            placeholder="Senha"
            type="password" 
            name="senha"
            ref = {register({ required: true })} />

          <Input 
            placeholder="Confirma senha"
            type="password"
            name="confirmar"
            ref={register({ required: true, 
              validate: (value) => {
                  return value === watch('senha');
              }
            })} 
            />
            {errors.confirmar && errors.confirmar.type === "required" && <span className="error">Informe a senha</span>}
            {errors.confirmar && errors.confirmar.type === "validate" && <span className="error">As senhas não correspondem</span> }
          <Button> Cadastrar</Button>
      </Form>
    </Container>
    );
}

export default Cadastro;
