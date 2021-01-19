const fetchUserData = (state=[], action)=>{

    switch (action.type){
        case 'GET_USERS':
            return {...state,
               users:action.users}
        case 'POST_USERS':
            debugger
            return {...state,
            token:action.token, loginSuccess:true}
        default:
            return state
    }
}

export {fetchUserData}