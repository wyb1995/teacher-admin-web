/**
 * Created by ritter on 16-10-22.
 */
import {combineReducers} from 'redux';

import {loginReducer, paperListInfo} from './Login/login-reducer';
// import paperListReducer from './paper-list/paperList';

const rootReducer = combineReducers({loginReducer, paperListInfo});

export default rootReducer;