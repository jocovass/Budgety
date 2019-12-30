import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import styled from '@emotion/styled';
import { onSignIn } from '../../store/actions/auth';
import { renderInput } from '../ui/Input/Input';
import { validate } from '../../utilities/formValidation';
import Button from '../ui/Button/Button';
import SignupForm from '../SignupForm/SignupForm';

const Form = styled.form`
    width: 90%;
    margin: 0 auto;
    padding-top: 6rem;
`;
    
const Header = styled.header`
    text-align: center;
    border-bottom: 1px solid var(--clr-secondary);
    position: relative;
`;

const Row = styled.div`
    text-align: center;
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

const Strong = styled.strong`
    display: block;
    text-align: center;
    color: var(--clr-error);
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1rem;
    position: absolute;
    top: 8rem;
    left: 0;
    width: 100%;
`;

let LoginForm = ({ handleSubmit, onSignIn, error, subbmitting, pristine, reset, loading }) => {
    const [form, setForm] = useState('login');

    function renderForm() {
        if(form === 'login') {
            return (
                <Form onSubmit={handleSubmit(onSignIn)}>
                    {error && <Strong>{error}</Strong>}
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
                    {loading ? <div>Loading</div>: null}
                    <Row>
                        <Button value="Login" 
                                margin="0 2rem 0 0"
                                disabled={subbmitting} />
                        <Button value="Clear" 
                                margin="0 2rem 0 0"
                                disabled={pristine || subbmitting}
                                click={reset} />
                        <Button value="Cancel" hoverColor="error" data="exit" />
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

LoginForm = reduxForm({
    form: 'loginForm',
    validate,
})(LoginForm);

const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
    };
};

export default connect(mapStateToProps, { onSignIn })(LoginForm);