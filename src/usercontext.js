import React,{useState} from "react";

let UserContext = React.createContext();
export const UserProvider = ({children})=>
 {
     let [userList,setUserList]=useState([])

return <UserContext.Provider value={{userName : "shashi", age:22,userList,setUserList}}>
    {children}
</UserContext.Provider>
}
export default UserContext;