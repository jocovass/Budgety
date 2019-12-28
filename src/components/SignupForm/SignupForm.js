import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from '@emotion/styled';
import { renderInput } from '../ui/Input/Input';
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

const SignupForm = (props) => {

    return (
        <Form onSubmit={props.handleSubmit}>
            <Field name="name"
                label="user"
                component={renderInput}
                type="text"
                id="name"/>
            <Field name="email"
                label="email"
                component={renderInput}
                type="email"
                id="email"/>
            <Field name="password"
                label="password"
                component={renderInput}
                type="password"
                id="password"/>
            <Field name="repeat-password"
                label="password"
                component={renderInput}
                type="password"
                id="repeat-password"/>
            <Row>
                <Button value="Signup" margin="0 2rem 0 0"/>
                <Button value="Clear" margin="0 2rem 0 0"/>
                <Button value="Cancel" hoverColor="error"/>
            </Row>
        </Form>
    );
};

export default reduxForm({
    form: 'signupForm'
})(SignupForm);