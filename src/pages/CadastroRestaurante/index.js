import {Title, Container, Logo, Form, Input, Button} from'./style'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import Logomarca from '../../assets/img/logo.png'
import Ilustracao from '../../assets/img/register.jpg'


function Cadastro() {
    let history = useHistory();
    const { register, handleSubmit, watch, errors} = useForm();
    const dispatch = useDispatch();

    function onSubmit(data){
        dispatch({
            type: 'RESTAURANTE_VALUE',
            payload:{data}
        });
        
    }

  return (
    <Container>
        <button onClick={() => history.push('/')}> <Logo src = {Logomarca} /> </button>
        <Title>
            Venda mais com seu restaurante no iFood
        </Title>

        <p>Clientes a um clique de distância e seu negócio vendendo como nunca</p> 
        <Button onClick={() => history.push('/restaurante-cadastro')}> Começar cadastro</Button>

        <img className="ilustre" src={Ilustracao} alt ="..." />
        
    </Container>
    );
}

export default Cadastro;
