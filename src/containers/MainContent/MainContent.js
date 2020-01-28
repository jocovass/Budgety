import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import Summary from '../../components/Summary/Summary';
import RecentActivities from '../../components/RecentActivities/RecentActivities';
import TotalCosts from '../../components/TotalCosts/TotalCosts';
import ChartLine from '../../components/Chart/ChartLine';
import Advert from '../../components/Advert/Advert';
import DropDown from '../../components/ui/DropDown/DropDown';


const Wrapper = styled.main`
    margin-left: 12rem;
    color: var(--clr-primary);
    padding: 2rem 0;
`;

const FlexRow = styled.div`
    display: flex;
    margin-bottom: 3rem;
`;

const Title = styled.h3`
    font-size: 2.5rem;
    margin: 0 0 3rem 5rem;
`;

const ChartWrapp = styled.div`
    width: 90%;
    height: 500px;
    margin: 1rem auto;
`;

function formData(data) {
    const d = data || {};

    return Object.keys(d);
}

class MainContent extends Component {
    renderContent = () => {
        if(!this.props.signedIn) {
            return (
                <Advert />
            )
        }

        return (
            <FlexRow>
                <Summary>
                    {
                    () => {
                        return (
                            <>
                                <Title>Summary Of Your Balance</Title>
                                <DropDown opt={formData(this.props.years)}/>
                                <ChartWrapp>
                                    <ChartLine data={this.props.years} 
                                    year={this.props.selectedYear}
                                    loading={this.props.loading} />
                                </ChartWrapp>
                            </>
                        )
                    }
                    }
                </Summary>
                <RecentActivities data={this.props.recentActivities} />
            </FlexRow>
        )
    }

    render() {
        return (
            <Wrapper>
                {this.renderContent()}
                <TotalCosts />
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signedIn: state.auth.signedIn,
        years: state.db.years,
        selectedYear: state.db.selectedYear,
        recentActivities: state.db.recentActivities,
        loading: state.db.loading,
    };
};

export default connect(mapStateToProps)(MainContent);