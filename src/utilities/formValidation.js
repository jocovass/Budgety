const validate = (values) => {
    const errors = {};
    if(!values.name) {
        errors.name = 'Required.';
    } else if(values.name.length < 2) {
        errors.name = 'Too short.';
    }
    if(!values.email) {
        errors.email = 'Required.'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address.';
    }
    if(!values.password) {
        errors.password = 'Required.';
    } else if(values.password.length < 8) {
        errors.password = 'Must be 8 characters or more.';
    } else if(!/[0-9]+/.test(values.password)) {
        errors.password = 'Must contain atleast one number';
    }
    if(!values.confirmPass) {
        errors.confirmPass = 'Required.';
    } else if(values.confirmPass !== values.password) {
        errors.confirmPass = 'Password mismatched.';
    }
    if(!values.money) {
        errors.money = 'Required.';
    }
    if(!values.budget) {
        errors.budget = 'Required.';
    }
    if(!values.select) {
        errors.select = 'Required.';
    }

    return errors;
};

export { validate };