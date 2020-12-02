
import {Ilustracao, Container, Logo, Form, Input, Button, Check, ButtonCadastro} from'./style'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { useForm } from "react-hook-form";
import { get } from 'lodash'

import * as actions from '../../store/modules/auth/action'

import Logomarca from '../../assets/img/logo.png'
import Bermuda from '../../assets/img/bermuda-delivery-3.png'


function Home(props) {
  let history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors} = useForm();
  const prevPath = get(props, 'location.state.prevPath', '/');

  function handleClick() {
      history.push("/");
  }

  function handleClickCadatro() {
    history.push("/cadastrar");
  }

  function handleLogin(data){
      var email = data.email;
      var password = data.password;
      var restaurante = data.restaurante;
      dispatch(actions.loginRequest({email, password, restaurante, prevPath}));
  }

  return (
    <Container>
      <button onClick = {handleClick}> <Logo src = {Logomarca} /> </button>
      <Ilustracao src = {Bermuda} />
          
      <Form onSubmit={handleSubmit(handleLogin)}>
          <h2>
              Falta pouco para <br/> matar sua fome!
          </h2>
          <Input 
              name="email"
              type="email"
              placeholder="Email:"
              ref={register({ required: true })} />
          <Input 
              name="password"
              type="password"
              placeholder="Senha:"
              ref={register({ required: true })} />
          <Check>
              <input 
                  ref={register}
                  name="restaurante"
                  value={true}
                  type="checkbox"/>
              <label 
                  value="true" 
                  checked="checked">
                  Restaurante
              </label>
          </Check>
          <Button> Entrar</Button>
          <ButtonCadastro className="link" onClick = {handleClickCadatro}> Fazer Cadastro</ButtonCadastro>
      </Form>
    </Container>
    );
}

export default Home;
