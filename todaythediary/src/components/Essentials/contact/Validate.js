
export default function validate(firstName, lastName, telNum, email, touched) {

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
        if (validEmailRegex.test(email)) {
            errors.email = ""
        } else {
            errors.email = "Email is not valid!"
        }
    }
    if ((!errors.firstName && !errors.lastName && !errors.telNum && !errors.email)) {
        errors.btn = true
    }
    return errors;
}
