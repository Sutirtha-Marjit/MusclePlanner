import { getInitialState } from './initialstate';
import { Actions } from '../actions';

const initState = getInitialState();
const userReducer = (previousState=initState, actionObject) => {

    const state = {...previousState};
    switch(actionObject.type){

        case Actions.USER.UPDTAE_DATA_USER:
            currentUser = {...state.appData.user};
            state.appData.user = currentUser;
        break;
         
    }

    return state;

};

export { userReducer };