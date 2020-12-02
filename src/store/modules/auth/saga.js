import { call, put, all, takeLatest }  from 'redux-saga/effects'
// import {toast} from 'react-toastify'
import * as actions from './action'
import * as types from '../types'

import api from '../../../services/api'

 function* loginRequest({payload}){
    try {
      var url = null;

      if(payload.restaurante){
        url = 'api/restaurante/'
      }
      else{
        url = 'api/cliente/'
      }

      console.log(url)
      var data = JSON.stringify({email: payload.email ,senha: payload.password});
      var config = {
        method: 'post',
        url: url,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      const prevPath = payload.prevPath;

      const response = yield call(api, config);
      yield put(actions.loginSuccess({ ...response.data }));
      window.location.href=`${prevPath}`

    } catch (e) {
      // toast.error('Credenciais inválidas');
      yield put(actions.loginFailure());
    }
}


export default all([ takeLatest(types.LOGIN_REQUEST, loginRequest)])