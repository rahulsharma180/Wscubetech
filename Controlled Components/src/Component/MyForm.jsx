import axios, { toFormData } from "axios";
 
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function MyForm({api}) {

  let checkVaild = (event) => {
    if (event.target.value == '') {
      event.target.className = ' form-control is-invalid';
    }else{
      event.target.className = ' form-control is-valid';
    }
 
  }

 let {apiFetch, setApiFetch } = api

  const formHandler = (event) => {
    event.preventDefault();
 
    let userData = {
      name: event.target.uname.value,
      email : event.target.email.value,
      contact : event.target.mobile_number.value,    
      password : event.target.password.value,
      id : ''
    }
    console.log(userData);

    var APIURL = 'https://wscubetech.co/form-api/save_user.php';
    axios.post(APIURL, toFormData(userData))
     .then((response) => {
        console.log(response);
        setApiFetch(!apiFetch);
         event.target.uname.value = '',
        event.target.email.value = '',
         event.target.mobile_number.value = '',    
         event.target.password.value = ''
      })
      .catch((error) => {
        console.log("Something went wrong");
      });
  };
  return (
    <Form     autoComplete="off" onSubmit={formHandler}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="uname"  className='' onChange={checkVaild} placeholder="Enter your name" />
        <div className="invalid-feedback">Please enter your name</div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicMobileNumber">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control
          type="text"
          name="mobile_number"  className='' onChange={checkVaild} 
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
          autoComplete="username"  className='' onChange={checkVaild} 
        />
         <div className="invalid-feedback">Please enter your email</div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" autoComplete="current-password"  className='' onChange={checkVaild}  /> <div className="invalid-feedback">Please enter your password</div>
      </Form.Group>

      <Button variant="primary" type="submit"> 
      Submit
      </Button>
      <Button variant="primary" type="reset" className="mx-2" >
        Reset
      </Button>
    </Form>
  );
}

export default MyForm;
