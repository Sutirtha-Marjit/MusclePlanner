const Actions = {

    ENTRY: {
        ADD_REQUEST: 'entry add request',
        UPDTAE_REQUEST: 'entry update request',
        DELETE_REQUEST: 'entry delete request',
        VALIDTATE_REQUEST: 'entry validate request',
        LIST_IN_PROGRESS: 'list in progress'
    },
    USER:{
        UPDTAE_DATA_USER: 'user updated'
    }

}

const getActionObject = (actionType)=>{

    return {
        type:actionType,
        data:{},
        timeStamp:new Date().getTime()
    };

};

export { Actions , getActionObject};