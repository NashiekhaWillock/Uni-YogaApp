export default function validate(values) {
    let errors = {};
    /*   
      if (!values.username.trim()) {
          errors.username = 'Must not be empty!';
      } */
    if (!values.fName.trim()) {
        errors.fName = 'First name required!';
    }
    if (!values.lName.trim()) {
        errors.lName = 'Last name required!';
    }
    if (!values.email.trim()) {
        errors.email = 'Email required!';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Invalid email!';
    }
    if (!values.password.trim()) {
        errors.password = 'Password must be between 6 and 10 characters! ';
    } else if (values.password.length < 6) {
        errors.password = 'Minimum 6 characters required!';
    } else if (values.password.length > 10) {
        errors.password = 'No more than 10 characters required!';
    }
    return errors;
}

export function validateSignIn(values) {
    const errorsSignIn = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email.trim()) {
        errorsSignIn.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
        errorsSignIn.email = "This is not a valid email format!";
    }
    if (!values.password.trim()) {
        errorsSignIn.password = 'Password is required! ';
    } else if (values.password.length < 6) {
        errorsSignIn.password = "Password must be more than 6 characters";
    } else if (values.password.length > 10) {
        errorsSignIn.password = "Password cannot exceed more than 10 characters";
    }

    return errorsSignIn;
} 