import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from '@emotion/styled';
import { renderInput } from '../ui/Input/Input';

const Form = styled.form`
    width: 90%;
    margin: 0 auto;
`;

const LoginForm = (props) => {

    return (
        <Form onSubmit={props.handleSubmit}>
            <Field name="email"
                   label="Email"
                   component={renderInput}
                   type="name"/>
        </Form>
    );
};

export default reduxForm({
    form: 'loginForm'
})(LoginForm);