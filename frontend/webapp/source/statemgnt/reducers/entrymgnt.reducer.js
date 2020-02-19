import { getInitialState } from './initialstate';
import { Actions } from '../actions';

const initState = getInitialState();
const entryReducer = (previousState=initState, actionObject) => {

    const state = {...previousState};
    switch(actionObject.type){

        case Actions.ENTRY.ADD_REQUEST:
            currentEntry = [...state.appData.entry];
            currentEntry.push(actionObject.data);
            state.appData.entry = currentEntry;
        break;
        
        case Actions.ENTRY.DELETE_REQUEST:

        break;

        case Actions.ENTRY.LIST_IN_PROGRESS:

        break;

        case Actions.ENTRY.VALIDTATE_REQUEST:
        
        break;

        case Actions.ENTRY.UPDTAE_REQUEST:

        break;    
         
    }

    return state;

};

export { entryReducer };