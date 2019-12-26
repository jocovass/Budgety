import React from 'react';
import styled from '@emotion/styled';

const Row = styled.div`
    width: 100%;
    margin-bottom: 2rem;
`;

const Input = styled.input`
    width: 100%;
`;

const Label = styled.label`
    color: red;
`;

export const renderInput = (props) => {
    console.log(props)
    return (
        <Row>
            <Label>Label</Label>
            <Input type='text'/>
        </Row>
    );
};