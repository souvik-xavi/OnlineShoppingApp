
export const setLogin= (token,user) =>{
    return{
        type:'SET_LOGIN',
        payload:token,
        user
    }

}



export const setLogout= () =>{
    return{
        type:'SET_LOGOUT',
    }

}

export const setOrderId= (id) =>{
    
    return{
        type:'SET_ORDERID',
        payload:id,
    }

}