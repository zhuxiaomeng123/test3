
import {CHANGE_VALUE,ADD_ITEM,DELETE_ITEM  } from './actionTypes.js'
const defaultState = {
	value:'hello!!!',
	list:["aaa!!!","bbb!!!"]
}

export default (state=defaultState,action)=>{
	if(action.type == CHANGE_VALUE){

		const newState = JSON.parse(JSON.stringify(state));

		newState.value = action.payload; 

		return newState
	}
	if(action.type == ADD_ITEM){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(state.value);
		newState.value = '';
		return newState;
	}

	if(action.type == DELETE_ITEM){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.payload,1);
		return newState;
	}
	return state;
}