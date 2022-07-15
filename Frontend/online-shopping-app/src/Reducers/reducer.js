import React from 'react';
let intialState={
    'auth':false,
    'token':null,
    'user':null,
    'orderid':0
}

const reducer=(state={...intialState},action)=> {
        switch(action.type){
            case 'SET_LOGIN':
                return state={
                    ...intialState,
                    auth:true,
                    token:action.payload,
                    user:action.user
                }
                case 'SET_LOGOUT':
                    return state={
                        ...intialState,
                        auth:false,
                        token:null,
                        user:null,
                    }

                case 'SET_ORDERID':
                    return state={
                        ...state,
                        orderid:action.payload
                    }

                default:
                    return state
        }
    
}

export default reducer;