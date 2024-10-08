  import React from "react";
  import Table from "react-bootstrap/Table";

  export default function UserTable({userData, updateUser, deleteUser,handleClick} ) {
     
    return (
      <>
                
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody >
            { userData.length!=0 ? 
              userData.map((v,i)=>{
                return(<tr key={i}>
                  <td>{++i}</td>
                  <td>{v.en_name}</td>
                  <td>{v.en_contact}</td>
                  <td>{v.en_email}</td>
                  <td><button onClick={() => {updateUser(v.en_id); handleClick()}} >Edit</button></td>
                  <td><button onClick={() => deleteUser(v.en_id) }>Delete</button></td>
                </tr>)
              })
            
            :<tr>
            <td colSpan={6}className="text-center">No Recored found!!</td>
            
          </tr>
            }
            
            
          </tbody>
        </Table>
      </>
    );
  }
