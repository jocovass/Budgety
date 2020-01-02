import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import styled from '@emotion/styled';
import { renderInput } from '../ui/Input/Input';
import { validate } from '../../utilities/formValidation';
import { createUser } from '../../store/actions/auth';
import Button from '../ui/Button/Button';
import Loader from '../ui/Loader/Loader';

const Form = styled.form`
    width: 90%;
    margin: 0 auto;
    padding-top: 6rem;
`;

const Row = styled.div`
    text-align: center;
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

let SignupForm = ({ handleSubmit, createUser, error, submitting, pristine, reset, loading }) => {

    return (
        <Form onSubmit={handleSubmit(createUser)}>
            {error && <Strong>{error}</Strong>}
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
            <Field name="confirmPass"
                label="password"
                component={renderInput}
                type="password"
                id="repeat-password"/>
            {loading ? <Loader gapBottom="2" /> : null}
            <Row>
                <Button value="Login" 
                        margin="0 2rem 0 0"
                        disabled={submitting} />
                <Button value="Clear" 
                        margin="0 2rem 0 0"
                        disabled={pristine || submitting}
                        click={reset} />
                <Button value="Cancel" hoverColor="error" data="exit" />
            </Row>
        </Form>
    );
};

// decorating our component with redux from 
SignupForm = reduxForm({
    form: 'signupForm',
    validate,
})(SignupForm);

const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
    };
};

export default connect(mapStateToProps, { createUser })(SignupForm);