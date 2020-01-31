import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { sendVerificationEmail } from '../../store/actions/auth';
import sprite from '../../img/sprite.svg';

const Wrapper = styled.div`
    position: absolute;
    top: 2rem;
    right: 8rem;
    padding: 2rem;
    border-radius: 5px;
    background-color: var(--clr-secondary);
    display: flex;
    align-items: center;

    @media ${props => props.theme.mq.mobile} {
        position: relative;
        top: 0;
        right: 0;
        margin: 0 auto 3rem;
        width: 32rem;
    }
`;

const Title = styled.h4`
    font-size: 1.7rem;
    margin-bottom: .4rem;
`;

const TextBox = styled.div`
`;

const Svg = styled.svg`
    width: ${props => props.size}rem;
    height: ${props => props.size}rem;
    fill: ${props => props.clr};
    margin-right: ${props => props.margin}rem;
`;

const Btn = styled.button`
    font-size: 1.1rem;
    text-decoration: underline;
`;

const Verification = styled.div`
    display: flex;
    align-items: center;
`;

const VerificationText = styled.p`
    font-size: 1.2rem;
`;

const Alert = ({ sendVerificationEmail }) => {
    const [verified, setVerified] = useState(false);

    function showVerification() {
        setVerified(true);
        sendVerificationEmail();
        setTimeout(() => setVerified(false), 10000);
    }

    return (
        <Wrapper>
            <Svg role="button" 
                aria-labelledby="title desc" 
                clr="#ffd900"
                size="3"
                margin="2">
                <use xlinkHref={`${sprite}#icon-warning`}></use>
            </Svg>
            <TextBox>
                <Title>Verify your email address!</Title>
                {!verified ? <Btn onClick={showVerification}>Resend email</Btn>
                 : (
                 <Verification>
                    <Svg role="button" 
                        aria-labelledby="title desc" 
                        clr="#08964f"
                        size="2"
                        margin="0.3">
                        <use xlinkHref={`${sprite}#icon-check`}></use>
                    </Svg>
                    <VerificationText>Your email has benn sent.</VerificationText>
                </Verification>)
                }
            </TextBox>
        </Wrapper>
    );
};

export default connect(null, { sendVerificationEmail })(Alert);