import { getUserApi } from "../Api/Apidata"

export const getUserAction = (users) =>({
    type: 'GET_USERS',
    users
})

export const getAllUsers =() => dispatch =>{
    debugger
    getUserApi().then(data=>{dispatch (getUserAction(data))
    }).catch(err=>{
        console.log("Error: " +err);
    })
}