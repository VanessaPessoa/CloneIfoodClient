import React from 'react'
import {Switch } from 'react-router-dom'

import MyRoute from './MyRoutes'
import {useSelector} from 'react-redux'

import Home from '../pages/Home'
import Login from '../pages/Login'
import CadastroCliente from '../pages/CadastroCliente'
import CadastroRestaurante from '../pages/CadastroRestaurante'
import ContinuaCadastro from '../pages/CadastroRestaurante/Cadastro'
import Dashboard from '../components/Dashboard'
function Routes(){
    const perfil = useSelector(state => state.auth.user.role); 

    return(
            <Switch>
                <MyRoute path="/" isClosed exact>
                    {perfil === 'cliente' ? <Home /> : <Dashboard />}
                </MyRoute>
                    
                <MyRoute path="/entrar" exact>
                    <Login />
                </MyRoute>
                <MyRoute path="/cadastrar" exact> 
                    <CadastroCliente />
                </MyRoute>
                
                <MyRoute path="/restaurante" exact>
                    <CadastroRestaurante />
                </MyRoute>
                
                <MyRoute path="/restaurante-cadastro" exact>
                    <ContinuaCadastro />
                 </MyRoute>
            </Switch>
    )
}

export default Routes