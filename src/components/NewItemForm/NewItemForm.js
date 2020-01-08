import React from 'react';
import styled from '@emotion/styled';
import { Field, reduxForm } from 'redux-form';
import { renderInput, renderRadioButton } from '../ui/Input/Input';
import Button from '../ui/Button/Button';

const Wrapper = styled.div`
    text-align: center;
`;

const Title = styled.h3`
    color: var(--clr-secondary);
    font-size: 2.1rem;
    text-transform: capitalize;
    margin-bottom: 3rem;
`;

const Form = styled.form`
    width: 90%;
    margin: 0 auto;
`;

const Row = styled.div`
    text-align: center;

    &:not(:last-child) {
        margin-bottom: 3rem;
    }
`;

let NewItemForm = ({ submitting, pristine, reset }) => {

    return (
        <Wrapper>
            <Title>Add a new item</Title>
            <Form>
                <Field name="name"
                       label="user"
                       component={renderInput}
                       type="text"
                       id="name" />
                <Field name="money"
                       label="money"
                       component={renderInput}
                       type="number"
                       id="money" />
                <Row>
                    <Field name="budget"
                        label="income"
                        component={renderRadioButton}
                        type="radio"
                        id="income"
                        value="Income"/>
                    <Field name="budget"
                        label="expense"
                        component={renderRadioButton}
                        type="radio"
                        id="expense"
                        value="Expense"/>
                </Row>
                <Row>
                    <Button value="Add" 
                            margin="0 2rem 0 0"
                            disabled={submitting} />
                    <Button value="Clear" 
                            margin="0 2rem 0 0"
                            disabled={pristine || submitting}
                            click={reset} />
                    <Button value="Cancel" hoverColor="error" data="exit" />
                </Row>
            </Form>
        </Wrapper>
    )
};

NewItemForm = reduxForm({
    form: 'newItemForm'
})(NewItemForm);

export default NewItemForm;