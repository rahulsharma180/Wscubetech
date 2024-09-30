import React, { useEffect } from "react";
import UserTable from "./UserTable";
import MyForm from "./MyForm";
import { useState } from "react";
import axios from "axios";

export default function UserEquiry() {
     const [userData, setUserData] = useState([])

    let userFetch = ()=>{ let APIURL = 'https://wscubetech.co/form-api/view_user.php'
        axios.get(APIURL)
        .then((response)=>{
            setUserData(response.data.dataList);
         })
         .catch((error)=>{

         })}


         let userDataDelete=(id)=>{
            console.log('delete' +id)
         }

         let updateUserData=(id)=>{
            console.log('Recored Updated' +id)
         }




     useEffect(()=>{
        userFetch();
     },[])

  return (
    <div>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-4">
              
              <h1>User Enquiry Form</h1>
            </div> 
            <div className="col-md-12 ">
              <MyForm />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 py-5">
              <h1>User Data list</h1>
            </div>

            <div className="col-md-12">
              <UserTable useData={userData} userDelete={userDataDelete} userUpdate={updateUserData}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
