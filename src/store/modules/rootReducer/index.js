import { combineReducers } from 'redux'

import auth from '../auth/reducer'
import restaurante from '../cadastroRestaurante/reducer'
// import frequency from './frequency/reducer'

export default combineReducers({
    auth,
    restaurante
})