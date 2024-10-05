import React, { useEffect } from "react";
import UserTable from "./UserTable";
import MyForm from "./MyForm";
import { useState } from "react";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UserEquiry() {
  const [editTable, setEditTable] = useState(false)
  const [isActive, setIsActive] = useState(false);
  

  let [userData, setUserData] = useState([]);
  let [apiFetch, setApiFetch] = useState(true);
  let [input, setInput] = useState({
    uname: "",
    email: "",
    mobile_number: "",
    password: "",
    id: "",
  });


  const handleClick = () => {
    setIsActive(!isActive);
    console.log("seet")
  };

  const [inputValidity, setInputValidity] = useState({
    uname: true,
    email: true,
    mobile_number: true,
    password: true,
  });

  const api = { apiFetch, setApiFetch };

  let userFetch = () => {
    let APIURL = "https://wscubetech.co/form-api/view_user.php";
    axios
      .get(APIURL)
      .then((response) => {
        // console.log("response");
        setUserData(response.data.dataList);
      })
      .catch((error) => {});
  };
  

  useEffect(() => {
    userFetch();
  }, [apiFetch]);


  

  //************** Edit Button Apifetch  *************

  let updateUserData = (id) => {
    axios
      .get("https://wscubetech.co/form-api/view_user.php", {
        params: {
          id: id,
        },
      })
      .then((response) => {
        // console.log(response.data);
        let userData = {
          uname: response.data.dataList.en_name,
          email: response.data.dataList.en_email,
          mobile_number: response.data.dataList.en_contact,
          password: response.data.dataList.en_password,
          id: response.data.dataList.en_id,
        };
       
        setInput(userData);
         setInputValidity({
          uname: true,
          email: true,
          mobile_number: true,
          password: true,
        });
        setEditTable(true);
    
      })
      .catch((error) => {});
  };

  let deleteUserData = (id) => {
    console.log("delete" + id);
    if (window.confirm("Are you sure you want to delete?")) {
      axios
        .get("https://wscubetech.co/form-api/delete_user.php", {
          params: { id: id },
        })
        .then((result) => {
          toast("🦄 Wow so easy!", {
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
        })
        .catch((error) => {
          console.log("Some thing went wrong" + error);
          toast("🦄 Wow so easy!", {
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
        });
    }
  };



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
                <MyForm
                  api={api}
                  input={input}
                  setInput={setInput}
                  inputValidity={inputValidity}
                setInputValidity={setInputValidity}
                editTable={editTable}
                setEditTable={setEditTable}
                isActive={isActive}
                 setIsActive={setIsActive}
                  />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 py-5">
                <h1>User Data list</h1>
              </div>

              <div className="col-md-12">
                <UserTable
                  userData={userData}
                  handleClick={handleClick}
                  deleteUser={deleteUserData}
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
