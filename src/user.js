import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./usercontext";
import { GetUserData } from "./api";
 function User() {
  //let users = useContext(UserContext)

  let [userData, setUserData] = useState([])

  useEffect(async () => {
      let users = await GetUserData();
      setUserData(...userData, users.data);
      console.log("Mounted")
      // setTimeout(()=>{
      //   setUserData([...userData,{name:"shashi",email:21}])
        
      // })
    },[]) //Did Mount

    useEffect(()=>{
      return()=>{
console.log("unMount")
      }     //unMount
    },[])

    useEffect(()=>{
      //Did uupdate
      console.log("update")
    },[userData])
  
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Users</h1>
        <Link
          to="./createuser"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Create User
        </Link>
      </div>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {
                console.log(userData)
                }


                {userData.map((sas) => {
                  return (
                    <tr>
                      <td>
                        <Link to="./profile/1">{sas.name}</Link>
                      </td>
                      <td>{sas.email}</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>
                        <Link
                          to={`/edituser/${sas.id}`}
                          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                        >
                          <i class="fas fa-download fa-sm text-white-50"></i>{" "}
                          Edit
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
