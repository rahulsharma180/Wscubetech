import React, { useEffect } from "react";
import UserTable from "./UserTable";
import MyForm from "./MyForm";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, Bounce,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UserEquiry() {
  let [userData, setUserData] = useState([]);
  let [apiFetch, setApiFetch] = useState(true);

  const api = {apiFetch, setApiFetch }

  let userFetch = () => {
    let APIURL = 'https://wscubetech.co/form-api/view_user.php';
    axios
      .get(APIURL)
      .then((response) => {
        console.log("response");
        setUserData(response.data.dataList);
      })
      .catch((error) => {});
  };

  let updateUserData = (id) => {
    console.log("Recored Updated" +id);
  };

  let deletUserData = (id) => {
    console.log("delete" +id);
    if(window.confirm('Are you sure you want to delete?'))
   { axios.get("https://wscubetech.co/form-api/delete_user.php",{params: {id:id}})
    .then((result) => {
      toast('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      userFetch();   
    ;   
      
    })
    .catch((error) => {
      console.log("Some thing went wrong" +error);
      toast('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    });}
  };

  useEffect(() => {
      userFetch();
  }, [apiFetch]);

  return (
    <> 
    <div>
      
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-4">
              <h1>User Enquiry Form</h1>
            </div>
            <div className="col-md-12 ">
              <MyForm api={api} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 py-5">
              <h1>User Data list</h1>
            </div>

            <div className="col-md-12">
              <UserTable
                userData={userData}
                deleteUser={deletUserData}
                updateUser={updateUserData}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
