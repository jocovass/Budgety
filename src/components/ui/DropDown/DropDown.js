import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    position: absolute;
    top: 20px;
    right: 40px;
    border-radius: 10px;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, .1);
`;

const Arrow = styled.span`
    font-size: 25px;
    position: absolute;
    top: 0px;
    right: 7px;
    pointer-events: none;
    color: var(--clr-secondary);
`;

const Select = styled.select`
    font-size: 1.7rem;
    width: 15rem;
    padding: .7rem 1rem;
    appearance: none;
    border-radius: 10px;
    background-color: var(--clr-bg);
    color: var(--clr-secondary);
    outline: none;
`;

const Option = styled.option`
    background-color: red;
`;

const defaultData = ['2020 Jan', '2020 Feb', '2020 March', '2020 Apr'];

const DropDown = ({ dates }) => {
    const data = dates || defaultData;

    function renderDates() {
        return data.map(function createOpt(value, index) {
            
            return <Option value={value} key={value}>{value}</Option>;
        });
    }

    return (
        <Wrapper>
            <Arrow>&#x025BE;</Arrow>
            <Select>
                <Option value="">All</Option>
                {renderDates()}
            </Select>
        </Wrapper>
    );
};

export default DropDown;