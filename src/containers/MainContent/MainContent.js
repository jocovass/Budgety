import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import Summary from '../../components/Summary/Summary';
import RecentActivities from '../../components/RecentActivities/RecentActivities';
import TotalCosts from '../../components/TotalCosts/TotalCosts';
import ChartLine from '../../components/Chart/ChartLine';
import Advert from '../../components/Advert/Advert';
import DropDown from '../../components/ui/DropDown/DropDown';
import { updateSelectedYear } from '../../store/actions/db';


const Wrapper = styled.main`
    margin-left: 12rem;
    padding: 2rem 1rem;
    color: var(--clr-primary);
    
    @media ${props => props.theme.mq.tablet} {
        padding: 2rem;
        margin: 0;
    }
`;

const FlexRow = styled.div`
    display: flex;
    margin-bottom: 3rem;

    @media ${props => props.theme.mq['tablet-land']} {
        flex-direction: column;
    }
`;

const Title = styled.h3`
    font-size: 2.5rem;
    margin: 0 0 3rem 5rem;
`;

const ChartWrapp = styled.div`
    position: relative;
    width: 98%;
    height: 50rem;
    margin: 1rem auto;

    @media ${props => props.theme.mq.tablet} {
        min-width: 80rem;
    }
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
                <RecentActivities data={this.props.recentActivities} />
                <Summary>
                    {
                    () => {
                        return (
                            <>
                                <Title>Summary Of Your Balance</Title>
                                <ChartWrapp>
                                    <DropDown opt={formData(this.props.years)}
                                              positions={{top: '-6.5rem', right: '2rem'}}
                                              change={this.props.updateSelectedYear}/>
                                    <ChartLine data={this.props.years} 
                                    year={this.props.selectedYear}
                                    loading={this.props.loading} />
                                </ChartWrapp>
                            </>
                        )
                    }
                    }
                </Summary>
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

export default connect(mapStateToProps, { updateSelectedYear })(MainContent);