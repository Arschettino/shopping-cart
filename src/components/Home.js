import React from 'react';
import styled from 'styled-components';
import hero_movie from './images/home.webp';
import { Link } from 'react-router-dom';
import Shop from './Shop.js';

const HomeWrapper = styled.div`
    height: 300px;
    background-image: url(${hero_movie});
    background-repeat: no-repeat;
    background-size: cover;
`;

const HeroBanner = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    color: white;
    font-weight: 600;
    font-family: Akshar;
    font-size: 60px;
    flex-direction: column;
    margin: 0;
    padding: 0;
`;

const Header = styled.h1`
    font-size: 60px;
    margin: 0;
    padding: 0;
    padding-top: 90px;
`;

const SubMessage = styled.h3`
    font-size: 16px;
    margin: 0;
    padding: 0;
    padding-bottom: 30px;
`;


const Mission = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0px;
    flex-direction: column;
    text-align: center;
`;

const SmallMission = styled.div`
    font-size: 14px;
    font-family: Akshar;
    text-decoration: underline;
    margin-bottom: -10px;
`;

const ShopNow = styled(Link)`
    border: 1px solid white;
    padding: 10px 15px;
    text-decoration: none;
    color: white;
    font-size: 16px;
    transition: 0.3s;

    &:hover {
        background: white;
    }
`;

const Statement = styled.h2`
    margin-bottom: 0px;
`;


function Home(props) {
    return (
        <>
            <HomeWrapper>
                <HeroBanner>
                    <Header>Do What Excites</Header>
                    <SubMessage>Your enemies won't know what hit them</SubMessage>
                    <ShopNow to="/shop">Shop Now</ShopNow>
                </HeroBanner>
            </HomeWrapper>
            <Mission>
                <SmallMission>Our Mission</SmallMission>
                <Statement>To help you kill your enemies faster <br></br> than they can kill you</Statement>
            </Mission>
            <Shop items={props.items} />
        </>
    );
}

export default Home;