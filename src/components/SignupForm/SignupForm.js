import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import styled from '@emotion/styled';
import { renderInput } from '../ui/Input/Input';
import { required, emailCheck, requiredNum, minValue, matchPasswords} from '../../utilities/formValidation';
import Button from '../ui/Button/Button';

const Form = styled.form`
    width: 90%;
    margin: 0 auto;
    padding-top: 4rem;
`;

const Row = styled.div`
    text-align: center;
    margin-top: 4rem;
`;

let SignupForm = ({ passwordVal, handleSubmit }) => {

    return (
        <Form onSubmit={handleSubmit}>
            <Field name="name"
                label="user"
                component={renderInput}
                type="text"
                id="name"
                validate={required}/>
            <Field name="email"
                label="email"
                component={renderInput}
                type="email"
                id="email"
                validate={[required, emailCheck]}/>
            <Field name="password"
                label="password"
                component={renderInput}
                type="password"
                id="password"
                validate={[required, requiredNum, minValue]}/>
            <Field name="repeat-password"
                label="password"
                component={renderInput}
                type="password"
                id="repeat-password"
                validate={[required, requiredNum, minValue, matchPasswords(passwordVal)]}/>
            <Row>
                <Button value="Signup" margin="0 2rem 0 0"/>
                <Button value="Clear" margin="0 2rem 0 0"/>
                <Button value="Cancel" hoverColor="error"/>
            </Row>
        </Form>
    );
};

// decorating our component with redux from 
SignupForm = reduxForm({
    form: 'signupForm'
})(SignupForm);

// I'm using this selector function to get the form value in order to compare to passwords
const selector = formValueSelector('signupForm');

// Mapping the state from the redux store to the component
const mapStateToProps = state => {
    return {
        passwordVal: selector(state, 'password'),
    }
};

export default connect(mapStateToProps)(SignupForm);