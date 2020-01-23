import React from 'react';
import styled from '@emotion/styled';
import chartSvg from '../../img/chart.svg';

const Wrapper = styled.section`
    position: relative;
    flex: 1;
    background-color: var(--clr-secondary);
    border-radius: 10px;
    padding: 2rem 1rem;
    margin: 0 1rem;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, .1);
    `;

const Header = styled.header`
    margin-bottom: 3rem;
`;
    
const Main = styled.main`
    display: flex;
    justify-content: center;
`;

const Img = styled.img`
    display: inline-block;
    width: 40rem;
    height: auto;
`;

const Column = styled.div`
    padding: 3rem;
    margin-right: 5rem;
`;

const Title = styled.h4`
    font-size: 3rem;
    color: var(--clr-bg);
    text-align: center;
`;

const List = styled.ul`
    margin-top 5rem;
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
                <Column margin-left='3rem'>
                    <Img src={chartSvg} alt='Chart illustartion'/>
                </Column>
                <Column>
                    <List>
                        <ListItem>Set saving goals</ListItem>
                        <ListItem>Make celver decisions</ListItem>
                        <ListItem>Keep track of your expenses</ListItem>
                        <ListItem>Improve you financial situation</ListItem>
                    </List>
                </Column>
            </Main>
        </Wrapper>
    );
};

export default Advert;