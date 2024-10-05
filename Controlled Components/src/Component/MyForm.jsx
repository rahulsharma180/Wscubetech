import axios, { toFormData } from "axios";
import { useState, useRef } from "react";
import { ToastContainer, Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function MyForm({ api, input, setInput, isEditMode, setIsEditMode }) {

  const [inputValidity, setInputValidity] = useState({
    uname: true,
    email: true,
    mobile_number: true,
    password: true,
  });



  // Create a ref for the form
  // const formRef = useRef();

  let { apiFetch, setApiFetch } = api;
  const [apiStatus, setApiStatus] = useState(0);

  const formHandler = (event) => {
    event.preventDefault();

    // Validate form fields
    const unameValid = event.target.uname.value !== "";
    const emailValid = event.target.email.value !== "";
    const mobileValid = event.target.mobile_number.value !== "";
    const passwordValid = event.target.password.value !== "";

    // Update input validity state
    setInputValidity({
      uname: unameValid,
      email: emailValid,
      mobile_number: mobileValid,
      password: passwordValid,
    });

    // Check if all fields are valid
    if (unameValid && emailValid && mobileValid && passwordValid) {
      let userData = {
        name: event.target.uname.value,
        email: event.target.email.value,
        contact: event.target.mobile_number.value,
        password: event.target.password.value,
        id: input.id,
      };
      console.log(userData);

      let APIURL = "https://wscubetech.co/form-api/save_user.php";
      axios
        .post(APIURL, toFormData(userData))
        .then((response) => {
          console.log(response);
          setApiFetch(!apiFetch);
          setApiStatus(1);
          setInput(
            {
              uname: '',
              email: '',
              mobile_number: '',
              password: '',
              id: ""
            }
          )

          // formRef.current.reset();
          setTimeout(() => {
            setApiStatus(0);
          }, 3000);

          toast.success('Data save Succesfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        })
        .catch((error) => {
          console.log("Something went wrong", error);
          setApiStatus(2);

          setTimeout(() => {
            setApiStatus(0);
          }, 3000);
        });
    } else {
      console.log("Please fill out all fields correctly.");
      setApiStatus(2); // Optionally set an error status if fields are invalid
      setTimeout(() => {
        setApiStatus(0);
      }, 3000);
      toast.warn('Please fill out all fields correctly!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

    }
  };


  let checkVaild = (event) => {
    let data = { ...input }
    // console.log(data)
    data[event.target.name] = event.target.value;
    setInput(data);


    if (event.target.value === "") {
      event.target.className ="form-control is-invalid";

      event.target.reset;
    } else {
      event.target.className ="form-control";
      setApiStatus(0);
    }
  };

  return (
    <>
      {apiStatus == 1 ? (
        <div
          className="alert alert-success d-flex align-items-center"
          role="alert"
        >
          <div className="w-100"> Form Submitted Succesfully !! </div>
          <div>
            {" "}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
      ) : (
        ""
      )}

      {apiStatus == 2 ? (
        <div
          className="alert alert-danger d-flex align-items-center"
          role="alert"
        >
          <div className="w-100"> Something went wrong !! </div>
          <div>
            {" "}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
      ) : (
        ""
      )}
      <ToastContainer />
      {/* ref={formRef} */}
      <Form autoComplete="off" onSubmit={formHandler} >
        {/* <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="uname"
            className={inputValidity.uname ? "" : "form-control is-invalid"}
            onChange={(event) => checkVaild(event)}
            placeholder="Enter your name" value={input.uname}
          />
          <div className="invalid-feedback">Please enter your name</div>
        </Form.Group> */}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="uname"
            className={`${inputValidity.uname ? "" : "is-invalid"} ${isEditMode ? "is-valid" : ""}`}
            onChange={(event) => checkVaild(event)}
            placeholder="Enter your name"
            value={input.uname}
          />
          <div className="invalid-feedback">Please enter your name</div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMobileNumber">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="text"
            name="mobile_number"
            className={
              inputValidity.mobile_number ? "" : "form-control is-invalid"
            }
            onChange={(event) => checkVaild(event)}
            placeholder="Enter your Number" value={input.mobile_number}
          />
          <div className="invalid-feedback">
            Please enter your Mobile Number
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="username"
            className={inputValidity.email ? "" : "form-control is-invalid"}
            onChange={(event) => checkVaild(event)} value={input.email}
          />
          <div className="invalid-feedback">Please enter your email</div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
            className={inputValidity.password ? "" : "form-control is-invalid"}
            onChange={(event) => checkVaild(event)} value={input.password}
          />
          <div className="invalid-feedback">Please enter your password</div>
        </Form.Group>

        <Button variant="primary" type="submit" >
          Submit
        </Button>
        <Button
          variant="primary"
          type="reset"
          className="mx-2"
          onClick={() => setApiStatus(0)}
        >
          Reset
        </Button>
      </Form>
    </>
  );
}

export default MyForm;
