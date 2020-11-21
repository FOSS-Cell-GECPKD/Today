import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback,
} from "reactstrap";
import validate from "./Validate";

export default function Contact() {

    const [inputValues, setInputValues] = useState({
    firstName:"",
    lastName:"",
    email:"",
    telNum:"",
    contactType:"Tel.",
    message:"",
    agree:false
  });
  
  const {
    firstName,
    lastName,
    email,
    telNum,
    contactType,
    message,
    agree
  }=inputValues
  const [active, setActive] = useState(false);
  const [touched, setTouched] = useState({
    firstname: false,
    lastname: false,
    telnum: false,
    email: false,
  });

  //fix here 
  const handleChange = event => {

    setInputValues({ ...inputValues, [event.target.name]: event.target.value,});
    console.log(inputValues);
  };
  const handleBlur = (field) => (evt) => {
    //checking whether we visited the fields or not
    setTouched({
      ...touched,
      [field]: true,
    });
  };

  function handleSubmit(event) {
    if (
      !Object.keys(touched).every((k) => !touched[k]) &&
      firstName &&
      lastName &&
      telNum &&
      email
    ) {
      //submit actions come here
      setActive(false);
    } else {
      setActive(true);
    }
    event.preventDefault();
  }

  useEffect(() => {
    if (
      !Object.keys(touched).every((k) => !touched[k]) &&
      firstName &&
      lastName &&
      telNum &&
      email
    ) {
      setActive(false);
    }
  }, [active, email, firstName, lastName, setActive, telNum, touched]);

  const errors = validate(firstName, lastName, telNum, email, touched);
  
  return (
    <div>
      <div className='row row-content ml-7 mt-3 mb-1 '>
        <div className='col-12 mb-1'>
          <h3>Send us your Feedback</h3>
        </div>
        <div className='col-12 col-md-9'>
          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Label htmlFor='firstname' md={2}>
                First Name
              </Label>
              <Col md={10}>
                <Input
                  type='text'
                  id='firstname'
                  name='firstname'
                  placeholder='First Name'
                  value={firstName}
                  valid={errors.firstName === ""}
                  invalid={errors.firstName !== ""}
                  onBlur={handleBlur("firstName")}
                  onChange={handleChange}             />
                <FormFeedback>{errors.firstName}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor='lastname' md={2}>
                Last Name
              </Label>
              <Col md={10}>
                <Input
                  type='text'
                  id='lastname'
                  name='lastname'
                  placeholder='Last Name'
                  value={lastName}
                  valid={errors.lastName === ""}
                  invalid={errors.lastName !== ""}
                  onBlur={handleBlur("lastName")}
                  onChange={e=>handleChange(e)}          
                  />
                <FormFeedback>{errors.lastName}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor='telnum' md={2}>
                Tel/Ph no:
              </Label>
              <Col md={10}>
                <Input
                  type='tel'
                  id='telnum'
                  name='telnum'
                  placeholder='Tel. number'
                  value={telNum}
                  valid={errors.telNum === ""}
                  invalid={errors.telNum !== ""}
                  onBlur={handleBlur("telnum")}
                  onChange={e=>handleChange(e)}                 />
                <FormFeedback>{errors.telNum}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor='email' md={2}>
                Email
              </Label>
              <Col md={10}>
                <Input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Email'
                  value={email}
                  valid={errors.email === ""}
                  invalid={errors.email !== ""}
                  onBlur={handleBlur("email")}
                  onChange={e=>handleChange(e)}                 />
                <FormFeedback>{errors.email}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 6, offset: 2 }}>
                <FormGroup check>
                  <Label check>
                    <Input
                      type='checkbox'
                      name='agree'
                      checked={agree}
                      onChange={e=>handleChange(e)}                     />
                    <strong>May we contact you?</strong>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={{ size: 3, offset: 1 }}>
                <Input
                  type='select'
                  name='contactType'
                  value={contactType}
                  onChange={handleChange}                >
                  <option>Tel/Ph no:</option>
                  <option>Email</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor='message' md={2}>
                Your Feedback
              </Label>
              <Col md={10}>
                <Input
                  type='textarea'
                  id='message'
                  name='message'
                  rows='7'
                  value={message}
                  onChange={e=>handleChange(e)}   />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 10, offset: 2 }}>
                <Button type='submit' color='primary' disabled={!errors.btn}>
                  Send Feedback
                </Button>
                {!errors.btn || active ? (
                  <p className='p-danger'>Looks you didn't complete the form</p>
                ) : firstName && lastName && telNum && email ? (
                  <p className='p-success text-success'>Looks good</p>
                ) : null}
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
}
