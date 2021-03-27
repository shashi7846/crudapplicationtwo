import React, { useState } from "react";
import {useContext} from "react";
import { PostUserData } from "./api";
import UserContext from "./usercontext";
function CreateUser(){
    let user=useContext(UserContext)
    
    let [userName,setUserName]=useState("")
    let [userEmail,setUserEmail]=useState("")
    let userData={
       name: userName, 
       email:userEmail
    }
   
    
    return <>
    <form onSubmit={async (e)=>{
        e.preventDefault()
        console.log(userData)
        // users.setUserList([...users.userList,userData])

        await PostUserData(userData)
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
export default CreateUser;