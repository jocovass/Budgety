import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

const Wrapper = styled.section`
    position: relative;
    flex: 3;
    background-color: var(--clr-secondary);
    border-radius: 10px;
    padding: 2rem 1rem;
    margin: 0 1rem;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, .1);
`;

const Summary = ({ children, years, selectedYear }) => {

    return (
        <Wrapper>
            {children(years, selectedYear)}
        </Wrapper>
    );
};

const mapStateToProps = (state) => {
    return {
      years: state.db.years,
      selectedYear: state.db.selectedYear,
    };
  };

export default connect(mapStateToProps)(Summary);