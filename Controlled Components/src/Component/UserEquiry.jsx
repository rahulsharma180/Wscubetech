import React, { useEffect } from "react";
import UserTable from "./UserTable";
import MyForm from "./MyForm";
import { useState } from "react";
import axios from "axios";

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
  };

  useEffect(() => {
    userFetch();
  }, [apiFetch]);

  return (
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
  );
}
