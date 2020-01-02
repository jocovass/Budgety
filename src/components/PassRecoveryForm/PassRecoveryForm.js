import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import styled from '@emotion/styled';
import sprite from '../../img/sprite.svg';
import { validate } from '../../utilities/formValidation';
import { sendPasswordResetEmail } from '../../store/actions/auth';
import { renderInput } from '../ui/Input/Input';
import Button from '../ui/Button/Button';
import Loader from '../ui/Loader/Loader';

const Title = styled.h1`
    color: var(--clr-secondary);
    font-size: 2.1rem;
    text-align: center;
`;

const SubTitle = styled.p`
    color: var(--clr-secondary);
    font-size: 1.4rem;
    font-weight: 300;
    text-align: center;
`;

const Form = styled.form`
    width: 90%;
    margin: 0 auto;
    padding-top: 4.5rem;
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

const BackButton = styled.button`
    position: absolute;
    top: 20px;
    left: 20px;
    width: 2.5rem;
    height: 2.5rem;
    transition: opacity .2s ease-in-out;
    opacity: .7;
    
    &:hover {
        opacity: 1;
    }
    `;
    
    const Svg = styled.svg`
    fill: var(--clr-secondary);
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
`;

let PassRecoveryForm = ({ handleSubmit, submitting, loading, error, click, sendPasswordResetEmail }) => {
    return (
        <>
            <Title>Reset Your Password</Title>
            <SubTitle>Send a recovery email to update your password!</SubTitle>
            <Form onSubmit={handleSubmit(sendPasswordResetEmail)}>
                {error && <Strong>{error}</Strong>}
                <Field name="email"
                    label="email"
                    component={renderInput}
                    type="email"
                    id="email"/>
                {loading ? <Loader gapBottom="2" /> : null}
                <Row>
                    <Button value="Send" 
                            margin="0 2rem 0 0"
                            disabled={submitting} />
                </Row>
            </Form>
            <BackButton onClick={() => click('login')}>
                <Svg role="button" aria-labelledby="title desc">
                    <use xlinkHref={`${sprite}#icon-back`}></use>
                </Svg>
            </BackButton>
        </>
    );
};

PassRecoveryForm = reduxForm({
    form: 'passRecovery',
    validate,
})(PassRecoveryForm);

export default connect(null, { sendPasswordResetEmail })(PassRecoveryForm);