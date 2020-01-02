import React, { useState } from 'react';
import styled from '@emotion/styled';
import SignupForm from '../SignupForm/SignupForm';
import PassRecoveryForm from '../PassRecoveryForm/PassRecoveryForm';
import LoginForm from '../LoginForm/LoginForm';
    
const Header = styled.header`
    text-align: center;
    border-bottom: 1px solid var(--clr-secondary);
    position: relative;
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

let Forms = () => {
    const [form, setForm] = useState('login');

    function renderForm() {
        if(form === 'login') {
            return  <LoginForm click={setForm} />;
        } else if(form === 'signup') {
            return <SignupForm />;
        } else if(form === 'passRec') {
            return <PassRecoveryForm click={setForm} />;
        }
    }
    
    return (
        form === 'passRec' 
            ? <PassRecoveryForm click={setForm} />
            : (  
                <>
                    <Header>
                        <InlineBtn onClick={() => setForm('login')}
                                active={form === 'login'}>Login</InlineBtn>
                        <InlineBtn onClick={() => setForm('signup')}
                            active={form === 'signup'}>Signup</InlineBtn>
                    </Header>
                    {renderForm()}
                </>
            )
    );
};

export default Forms;