import { combineReducers } from 'redux';
//reducers
import auth from './auth';
import nav from './nav';

export default combineReducers({
	auth: auth.default,
	nav: nav.default,
});