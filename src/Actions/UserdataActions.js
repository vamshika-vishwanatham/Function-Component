import { getUserApi, postApi } from "../Api/Apidata"

export const getUserAction = (users) =>({
    type: 'GET_USERS',
    users
})

export const postUserLogin = (token) =>({
    type: 'POST_USERS',
    token
})

export const getAllUsers =() => dispatch =>{
    debugger;
    getUserApi().then(data=>{dispatch (getUserAction(data))
    }).catch(err=>{
        console.log("Error: " +err);
    })
}

export const postUserDetails = (eml,pwrd) => dispatch => {
    const data = {email:eml,password:pwrd}
    debugger;
    postApi(data).then(res => {
        debugger
        dispatch(postUserLogin(res))
    }).catch(err=>{
        console.log("Error: " +err)
    })
}