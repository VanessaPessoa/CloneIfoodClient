import React from 'react'
import Pedidos from '../../pages/RestaurantePratos'
import {Sidebar, Nav, Container} from './style'
import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Bell from '../../assets/img/bell.png'
import Cardapio from '../../assets/img/cardapio.png'
import Settings from '../../assets/img/settings.png'

import * as actions from '../../store/modules/auth/action'


function Home() {
    const perfil = useSelector(state => state.auth.user.data[0]);
    const [anchorEl, setAnchorEl] = React.useState(null);
    let dispatch = useDispatch();
    let history = useHistory();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = e =>{
        e.preventDefault();
        dispatch(actions.loginFailure());
        
        history.push('/')
    }
    
    return (
    <div>
        {console.log(perfil)}
        <Nav>
            <div className="box">
                <img src = {perfil.imagem} alt="..." />
                <h1> {perfil.nomeRestaurante} </h1>
            </div>
            <div className="funcionamento">
                <h3> Horário de funcionamento</h3>
                <p> {perfil.hora_abertura} às {perfil.hora_fechamento} </p>
            </div>
        </Nav>
        <Sidebar>
            <ul>
                <li>
                    <button>
                        <img src={Bell} alt="..."/>
                        <span>Pedidos</span>
                    </button>
                </li>
                <li>
                    <button>
                        <img src={Cardapio} alt="..." />
                        <span>Cardapio</span>
                    </button>
                </li>
                <li className="bottom">
                    <button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <img src={Settings} alt="..." />
                    </button>
                </li>
            </ul>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Perfil</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </Sidebar>
        <Container >
            <Pedidos />
        </Container>
    </div>
  );
}

export default Home;
