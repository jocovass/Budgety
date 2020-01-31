import React from 'react';
import styled from '@emotion/styled';
import chartSvg from '../../img/chart.svg';

const Wrapper = styled.section`
    position: relative;
    flex: 1;
    margin-bottom: 2rem;
`;

const Header = styled.header`
    margin-bottom: 1rem;
`;
    
const Main = styled.main`
    display: flex;
    justify-content: center;

    @media ${props => props.theme.mq.mobile} {
        display: block;
    }
`;

const Img = styled.img`
    width: 40rem;
    height: auto;

    @media ${props => props.theme.mq.mobile} {
        width: 100%;
    }
`;

const Column = styled.div`
    padding: 3rem;
    text-align: center;
    
    :not(:last-child) {
        margin-right: 5rem;
    }

    @media ${props => props.theme.mq.tablet} {
        padding: 2rem;
    }

    @media ${props => props.theme.mq.mobile} {
        width: 40rem;
        margin: 0 auto;
        text-align: center;

        :not(:last-child) {
            margin: 0 auto;
        }
    }
`;

const Title = styled.h2`
    font-size: 3.2rem;
    color: var(--clr-bg);
    text-align: center;
`;

const List = styled.ul`
    margin-top 5rem;
    list-style-position: inside;    

    @media ${props => props.theme.mq.mobile} {
        margin-top: 1rem;
    }
`;

const ListItem = styled.li`
    font-size: 1.9rem;
    margin-bottom: 1rem;
    font-weight: 300;
    }
`;

const Advert = () => {

    return (
        <Wrapper>
            <Header>
                <Title>Manage your money smarter</Title>
            </Header>
            <Main>
                <Column>
                    <List>
                        <ListItem>Set saving goals</ListItem>
                        <ListItem>Make celver decisions</ListItem>
                        <ListItem>Keep track of your expenses</ListItem>
                        <ListItem>Improve you financial situation</ListItem>
                    </List>
                </Column>
                <Column margin-left='3rem'>
                    <Img src={chartSvg} alt='Chart illustartion'/>
                </Column>
            </Main>
        </Wrapper>
    );
};

export default Advert;