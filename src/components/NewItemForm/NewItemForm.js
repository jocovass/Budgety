import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import uuid from 'uuid'
import { renderInput, renderRadioButton, renderDropdown } from '../ui/Input/Input';
import { validate } from '../../utilities/formValidation';
import { onAddItem } from '../../store/actions/db';
import Button from '../ui/Button/Button';

const Wrapper = styled.div`
`;

const Title = styled.h3`
    color: var(--clr-secondary);
    font-size: 2.1rem;
    text-transform: capitalize;
    margin-bottom: 6rem;
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

function calcTotals(data, appState) {
    if(data.transaction === 'Income') {
        return {
            totalBudget: appState.totalBudget + +data.money,
            totalIncome: appState.totalIncome + +data.money,
            totalCosts: {...appState.totalCosts},
        }
    } else {
        return {
            totalBudget: appState.totalBudget - +data.money,
            totalExpense: appState.totalExpense + +data.money,
            totalCosts: {
                ...appState.totalCosts,
                [data.select]: appState.totalCosts[data.select] + +data.money,
            }
        }
    }
}

function initMonths() {
    return [
        {Budget: 'Jan', Income: 0, Expense: 0},
        {Budget: 'Feb', Income: 0, Expense: 0},
        {Budget: 'Mar', Income: 0, Expense: 0},
        {Budget: 'Apr', Income: 0, Expense: 0},
        {Budget: 'May', Income: 0, Expense: 0},
        {Budget: 'Jun', Income: 0, Expense: 0},
        {Budget: 'Jul', Income: 0, Expense: 0},
        {Budget: 'Aug', Income: 0, Expense: 0},
        {Budget: 'Sep', Income: 0, Expense: 0},
        {Budget: 'Oct', Income: 0, Expense: 0},
        {Budget: 'Nov', Income: 0, Expense: 0},
        {Budget: 'Dec', Income: 0, Expense: 0},
    ];
};

function calcSummary(data, years, time) {
    let y;
    if(years[time.getFullYear()]) {
        y = [...years[time.getFullYear()]];
    } else {
        y = [...initMonths()];
    }
    if(data.transaction === 'Income') {
        y[time.getMonth()].Income += +data.money;
    } else {
        y[time.getMonth()].Expense += +data.money;
    }
    
    return y;
}

let NewItemForm = ({ handleSubmit, submitting, pristine, reset, onAddItem, appState, close, userId, error }) => {

    const onSubmit = (data) => {
        if(userId) {
            const currentTime = new Date();
            const totals = calcTotals(data, appState);
            const recentActivities = [...appState.recentActivities];
            recentActivities.unshift({id: uuid(), name: data.select, value: data.money, transaction: data.transaction, time: currentTime});
            const budgetSummary = {
                ...appState.years,
                [currentTime.getFullYear()]: calcSummary(data, appState.years, currentTime),
            };
            onAddItem({
                ...appState,
                ...totals,
                totalCosts: {...totals.totalCosts},
                recentActivities: [...recentActivities],
                years: {...budgetSummary},
            }, userId)
            close();
        } else {
            throw new SubmissionError({
                _error: 'You must login first.',
            })
        }
    }

    return (
        <Wrapper>
            <Title>Add a new item</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {error && <Strong>{error}</Strong>}
                <Field name="select" component={renderDropdown} initialValues={{select: 'gift'}} />
                <Field name="money"
                       label="money"
                       component={renderInput}
                       type="number"
                       id="money" />
                <Row>
                    <Field name="transaction"
                        label="income"
                        component={renderRadioButton}
                        type="radio"
                        id="income"
                        value="Income"/>
                    <Field name="transaction"
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
    form: 'newItemForm',
    validate,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true, 
})(NewItemForm);

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        appState: {
            totalBudget: state.db.totalBudget,
            totalIncome: state.db.totalIncome,
            totalExpense: state.db.totalExpense,
            totalCosts: state.db.totalCosts,
            recentActivities: state.db.recentActivities,
            years: state.db.years,
        }
    }
}

export default connect(mapStateToProps, { onAddItem })(NewItemForm);