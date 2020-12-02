import {Nav, Search, Button} from './style'
import { useHistory } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import Logo from '../../assets/img/logo.png'
import Enter from '../../assets/img/enter.png'
import Logout from '../../assets/img/logout.png'
import Bag from '../../assets/img/bag.png'
import Menu from '../../assets/img/menu.png'

import * as actions from '../../store/modules/auth/action'

function Header(){

    let history = useHistory();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const perfil = useSelector(state => state.auth.user.role); 

    let dispatch = useDispatch();

    function handleClick() {
        history.push("/entrar");
    }

    const handleLogout = e =>{
        e.preventDefault();
        dispatch(actions.loginFailure());
        
        history.push('/')
    }

    return(
        <header>
            <Nav>
                <div className = "logo">
                    <img src = {Logo} alt = "logo ifood" />
                </div>
                <Search 
                    placeholder = "Busque por item ou loja" 
                    type="search"
                />

                <div className = "box-button">
                    {!isLoggedIn ? (
                        <Button onClick={handleClick}>
                            <img src = {Enter} alt = "entrar" />
                            <span> Entrar</span>
                        </Button>
                    ):(
                        <Button onClick={handleLogout}>
                            <img src = {Logout} alt = "entrar" />
                            <span> Sair</span>
                         </Button>
                    )}
                    {console.log(perfil)}
                    {perfil != 'restaurante' &&(
                        <Button>
                            <img src = {Bag} alt = "sacola" />
                            <span> Sacola</span>
                        </Button>
                    )}
                   {perfil === 'restaurante' &&( 
                        <Button className="ml-3">
                            <img src = {Menu} alt = "sacola" />
                        </Button>
                    )}
                </div>
            </Nav>
        </header>
    )
}

export default Header;
