import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from '@emotion/styled';
import { renderInput } from '../ui/Input/Input';
import { required, emailCheck, requiredNum, minValue} from '../../utilities/formValidation';
import Button from '../ui/Button/Button';
import SignupForm from '../SignupForm/SignupForm';

const Form = styled.form`
    width: 90%;
    margin: 0 auto;
    padding-top: 4rem;
`;
    
const Header = styled.header`
    text-align: center;
    border-bottom: 1px solid var(--clr-secondary);
    position: relative;
`;

const Row = styled.div`
    text-align: center;
    margin-top: 4rem;
`;
    
const InlineBtn = styled.button`
    color: var(--clr-secondary);
    font-size: 2.1rem;
    border-radius: 5px 5px 0 0;
    border: 1px solid transparent;
    padding: .5rem 2rem;
    background-color: ${props => props.active ? `var(--clr-bg)` : `transparent`};
    border-color: ${props => props.active ? `var(--clr-secondary) var(--clr-secondary) var(--clr-bg)` 
                                    : `transparent`};
    box-shadow: ${props => props.active ? `-5px -5px 10px -4px rgba(0, 0, 0, .5)`: null};
    margin-bottom: -2px;
`;

const LoginForm = (props) => {
    const [form, setForm] = useState('login');

    function renderForm() {
        if(form === 'login') {
            return (
                <Form onSubmit={props.handleSubmit}>
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
                    <Row>
                        <Button value="Login" margin="0 2rem 0 0"/>
                        <Button value="Clear" margin="0 2rem 0 0"/>
                        <Button value="Cancel" hoverColor="error"/>
                    </Row>
                </Form>
            );
        } else {
            return <SignupForm />
        }
    }
    
    return (
        <>
            <Header>
                <InlineBtn onClick={() => setForm('login')}
                           active={form === 'login'}>Login</InlineBtn>
                <InlineBtn onClick={() => setForm('signup')}
                           active={form === 'signup'}>Signup</InlineBtn>
            </Header>
            {renderForm()}
        </>
    );
};

export default reduxForm({
    form: 'loginForm'
})(LoginForm);