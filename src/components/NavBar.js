import React from 'react';
import styled from 'styled-components';
import logo from './images/Nav_Logo.png';
import cart from './images/shopping-cart.svg';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

const NavWrapper = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding: 0px 80px;
    position: fixed;
    top: 0;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
`;

const NavContent = styled.nav`
    height: 80px;
    max-width: 1440px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HeaderLinks = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 40px;
    
    & a {
        text-decoration: none;
        color: rgb(50,50,50);
        font-weight: 600;
    }
    
    & div {
        transition: 0.2s;
        border-radius: 30px;
    }

    & div:hover {
        transform: scale(1.1);

    }

    & li {
        transition: 0.5s;
    }

    & li:hover {
        text-decoration: underline;
    }
`;

const FooterWrapper = styled.div`
    width: 100%;
    background-color: rgb(17,17,17);
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding: 0px 80px;
`;

const FooterContent = styled.div`
    height: 50px;
    max-width: 1440px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;


function NavBar(props) {
    let navigate = useNavigate();

    function handleCartClick(event) {
        props.cartClick(event);
    }

    function goHome(event) {
        navigate(`../`);
    }
    
    return (
        <NavWrapper>
            <NavContent>
                <div>
                    <img src={logo} alt="company logo" style={{ width: 200 }} onClick={goHome} />

                </div>
                <div>
                    <HeaderLinks>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><div style={{ position: 'relative' }}><img src={cart} alt="shopping cart" onClick={handleCartClick} />
                            <div style={{ position: 'absolute', bottom: -2, right: -12 }}>{props.count}</div>
                        </div></li>
                    </HeaderLinks>
                </div>
            </NavContent>
        </NavWrapper>
    );
}

export function Footer(props) {

    return (
        <FooterWrapper>
            <FooterContent>
                Terms of Use | Privacy Policy | Cookie Settings | Copyright © 2022 All Rights Reserved
            </FooterContent>
        </FooterWrapper>
    );
}



export default NavBar