import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {useSelector} from 'react-redux'

export default function MyRoute({ component: Component, isClosed, isOpen, role, ...rest }){
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  
    if(isClosed && !isLoggedIn){
        return(
            <Redirect 
                to={{ pathname: '/entrar', state: { prevPath: rest.location.pathname } }}
            />
        )
    }
    

    if(!isClosed && !isOpen && isLoggedIn){
        return(
            <Redirect 
                to={{ pathname: '/', state: { prevPath: rest.location.pathname } }}
            />
        )
    }
    //eslint disable-next-line react/jsx-props-no-spreading
    return <Route component={Component}  {...rest} />

    //eslint disable-next-line react/jsx-props-no-spreading

}

MyRoute.defaultProps = {
    isClosed: false,
};

MyRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    isClosed: PropTypes.bool
};