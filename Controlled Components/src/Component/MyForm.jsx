import axios, { toFormData } from "axios";
 
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function MyForm() {
  const formHandler = (event) => {
    event.preventDefault();
    let userData = {
      name: event.target.uname.value,
      mobile : event.target.mobile_number.value,
      email : event.target.email.value,
      password : event.target.password.value,
      id :''
    }

    let APIURL = "https://wscubetech.co/form-api/save_user.php";
    axios
      .post(APIURL, toFormData(userData))
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("Something went wrong");
      });
  };
  return (
    <Form autoComplete="off" onSubmit={formHandler}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="uname" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control
          type="text"
          name="mobile_number"
          placeholder="Enter ypur Number"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter your email"
          autoComplete="username"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password"   placeholder="Password" autoComplete="current-password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default MyForm;
