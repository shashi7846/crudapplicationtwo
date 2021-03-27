import {useEffect, useState} from "react";
import {GetUserById, GetUserData, UpdateuserById} from "./api";
function EditUser(props)
{
    console.log(props)
    
    const [userName,setUserName]=useState("")
    const [userEmail,setUserEmail]=useState("")
    let userData={
       name: userName, 
       email:userEmail
    }

    useEffect(async()=>{
        let user=await GetUserById(props.match.params.userid);
       setUserName(user.data.name)
       setUserEmail(user.data.email)
    },[]) //did mount

    return<>
    <form onSubmit={async (e)=>{
        e.preventDefault()
        console.log(userData)
        // users.setUserList([...users.userList,userData])

        await UpdateuserById(props.match.params.userid,userData)
        setUserName("")
        setUserEmail("")
    }}>
    <div className="container">
    <div className="row">
        <div className="col-lg-5">
            <label for="textfield">Name</label>
            <input className="form-control" type="text" value={userName} onChange={(e)=>{
                setUserName(e.target.value)
            }}/>
        </div>
    
    <div className="col-lg-5">
        <label for="textfield">Email</label>
        <input className="form-control" type="text" value={userEmail} onChange={(e)=>{
         setUserEmail(e.target.value)
        }}/>
        </div>
    </div>

    <div className="row">
    <button className="btn btn-primary">Add user</button>
    </div>
    </div>
   
    
    </form>
    </>

}
export default EditUser;