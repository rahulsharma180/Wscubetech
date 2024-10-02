import axios, { toFormData } from "axios";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function MyForm({ api }) {

  const [inputValidity, setInputValidity] = useState({
    uname: true,
    email: true,
    mobile_number: true,
    password: true,
  });


  let checkVaild = (event) => {
    if (event.target.value == '') {
      event.target.className = ' form-control is-invalid';
    } else {
      event.target.className = ' form-control';
    }

  }

  let { apiFetch, setApiFetch } = api
  const [apiStatus, setApiStatus] = useState(0);

  const formHandler = (event) => {
    event.preventDefault();



    // Validate form fields
    const unameValid = event.target.uname.value !== '';
    const emailValid = event.target.email.value !== '';
    const mobileValid = event.target.mobile_number.value !== '';
    const passwordValid = event.target.password.value !== '';

    // Update input validity state
    setInputValidity({
      uname: unameValid,
      email: emailValid,
      mobile_number: mobileValid,
      password: passwordValid,
    });



    let userData = {
      name: event.target.uname.value,
      email: event.target.email.value,
      contact: event.target.mobile_number.value,
      password: event.target.password.value,
      id: ''
    }
    console.log(userData);

    let APIURL = 'https://wscubetech.co/form-api/save_user.php';
    axios.post(APIURL, toFormData(userData))
      .then((response) => {
        console.log(response);
        setApiFetch(!apiFetch);
        setApiStatus(1);
        event.target.uname.value = '',
          event.target.email.value = '',
          event.target.mobile_number.value = '',
          event.target.password.value = ''
      })
      .catch((error) => {
        console.log("Something went wrong");
        setApiStatus(2);
      });
  };




  
  return (


    <>

      {(apiStatus === 1)

        ?

        (<div className="alert alert-success d-flex align-items-center" role="alert">

          <div className="w-100">   Form Submitted Succesfully !!      </div>
          <div>  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>

        </div>)
        : ''
      }

      {(apiStatus === 2) ? (<div className="alert alert-danger d-flex align-items-center" role="alert">

        <div className="w-100"> Something went wrong !!      </div>
        <div>  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>

      </div>) : ''}




      <Form autoComplete="off" onSubmit={formHandler}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="uname" className={inputValidity.uname ? '' : 'form-control is-invalid'}
            onChange={(e) => checkVaild(e)} placeholder="Enter your name" />
          <div className="invalid-feedback">Please enter your name</div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMobileNumber">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="text"
            name="mobile_number" className={inputValidity.password ? '' : 'form-control is-invalid'} onChange={checkVaild}
            placeholder="Enter your Number"
          />
          <div className="invalid-feedback">Please enter your Mobile Number</div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="username" className={inputValidity.password ? '' : 'form-control is-invalid'} onChange={checkVaild}
          />
          <div className="invalid-feedback">Please enter your email</div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" autoComplete="current-password" className={inputValidity.password ? '' : 'form-control is-invalid'} onChange={checkVaild} /> <div className="invalid-feedback">Please enter your password</div>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="primary" type="reset" className="mx-2" >
          Reset
        </Button>
      </Form>
    </>
  );
}

export default MyForm;
