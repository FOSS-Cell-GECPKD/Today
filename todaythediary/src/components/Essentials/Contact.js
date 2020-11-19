import React, { useState, useEffect } from 'react'
import {
    Button, Form, FormGroup, Label, Input, Col, FormFeedback
} from 'reactstrap';

export default function Contact() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [telNum, setTelNum] = useState('')
    const [contactType, setContactType] = useState('Tel.')
    const [message, setMessage] = useState('')
    const [active, setActive] = useState(false)
    const [agree, setAgree] = useState(false)
    const [touched, setTouched] = useState({
        firstname: false,
        lastname: false,
        telnum: false,
        email: false
    })
    const handleBlur = (field) => (evt) => {
        //checking whether we visited the fields or not
        setTouched({
            ...touched, [field]: true
        })
    }
    function validate(firstName, lastName, telNum, email) {

        //funtion to validate the funtion 

        const errors = {
            firstName: '',
            lastName: '',
            telNum: '',
            email: '',
            btn: false
        };

        if (touched.firstName && firstName.length < 3)
            errors.firstName = 'First Name should be greater 3 characters';
        else if (touched.firstName && firstName.length > 10)
            errors.firstname = 'First Name should be less than 10 characters';

        if (touched.lastName && lastName.length < 3)
            errors.lastName = 'Last Name should be greater than 3 characters';
        else if (touched.lastName && lastName.length > 10)
            errors.lastName = 'Last Name should be less than 10 characters';

        const reg = /^\d+$/;
        if (touched.telnum && !reg.test(telNum))
            errors.telNum = 'Tel. Number should contain only numbers ';
        const validEmailRegex =
            // eslint-disable-next-line no-useless-escape
            RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        if (touched.email) {
            errors.email =
                validEmailRegex.test(email)
                    ? ''
                    : 'Email is not valid!';
        }
        if ((!errors.firstName && !errors.lastName && !errors.telNum && !errors.email)) {
            errors.btn = true
        }
        return errors;
    }

    function handleSubmit(event) {

        if (!(Object.keys(touched).every((k) => !touched[k])) && firstName && lastName && telNum && email) {
            //submit actions come here
            setActive(false)
        } else {
            setActive(true)
        }
        event.preventDefault();
    }

    useEffect(() => {
        if (!(Object.keys(touched).every((k) => !touched[k])) && firstName && lastName && telNum && email) {
            setActive(false)
        }
    }, [active, email, firstName, lastName, setActive, telNum, touched])

    const errors = validate(firstName, lastName, telNum, email);
    console.log(errors.btn, !errors.btn)
    return (
        <div>
            <div className="row row-content ml-7 mt-3 mb-1 ">
                <div className="col-12 mb-1">
                    <h3>Send us your Feedback</h3>
                </div>
                <div className="col-12 col-md-9">
                    <Form onSubmit={handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="firstname" md={2}>First Name</Label>
                            <Col md={10}>
                                <Input type="text" id="firstname" name="firstname"
                                    placeholder="First Name"
                                    value={firstName}
                                    valid={errors.firstName === ''}
                                    invalid={errors.firstName !== ''}
                                    onBlur={handleBlur('firstName')}
                                    onChange={e => setFirstName(e.target.value)} />
                                <FormFeedback>{errors.firstName}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastname" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Input type="text" id="lastname" name="lastname"
                                    placeholder="Last Name"
                                    value={lastName}
                                    valid={errors.lastName === ''}
                                    invalid={errors.lastName !== ''}
                                    onBlur={handleBlur('lastName')}
                                    onChange={e => setLastName(e.target.value)} />
                                <FormFeedback>{errors.lastName}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="telnum" md={2}>Tel/Ph no:</Label>
                            <Col md={10}>
                                <Input type="tel" id="telnum" name="telnum"
                                    placeholder="Tel. number"
                                    value={telNum}
                                    valid={errors.telNum === ''}
                                    invalid={errors.telNum !== ''}
                                    onBlur={handleBlur('telnum')}
                                    onChange={e => setTelNum(e.target.value)} />
                                <FormFeedback>{errors.telNum}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Input type="email" id="email" name="email"
                                    placeholder="Email"
                                    value={email}
                                    valid={errors.email === ''}
                                    invalid={errors.email !== ''}
                                    onBlur={handleBlur('email')}
                                    onChange={e => setEmail(e.target.value)} />
                                <FormFeedback>{errors.email}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{ size: 6, offset: 2 }}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox"
                                            name="agree"
                                            checked={agree}
                                            onChange={e => setAgree(e.target.value)} />
                                        <strong>May we contact you?</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{ size: 3, offset: 1 }}>
                                <Input type="select" name="contactType"
                                    value={contactType}
                                    onChange={e => setContactType(e.target.value)} >
                                    <option>Tel/Ph no:</option>
                                    <option>Email</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="message" md={2}>Your Feedback</Label>
                            <Col md={10}>
                                <Input type="textarea" id="message" name="message"
                                    rows="7"
                                    value={message}
                                    onChange={e => setMessage(e.target.value)} ></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{ size: 10, offset: 2 }}>
                                <Button type="submit" color="primary" disabled={!errors.btn} >
                                    Send Feedback
                                    </Button>
                                {!errors.btn || active ? <p className="p-danger">Looks you didn't complete the form</p> :
                                    (firstName && lastName && telNum && email ? <p className="p-success text-success">Looks good</p> : null)}
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    )

}

