import React from 'react';
import styled from 'styled-components';
import exit from './images/x.svg';
import { Link } from 'react-router-dom';
import { separator } from './Shop';


const CartOverlay = styled.div`
    position: fixed;   
    top: 0;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: rgba(0,0,0,.7);
    z-index: 10;
`;

const Cart = styled.div`
    position: fixed;   
    right: 0;
    width: max(25%,400px);
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: white;
    z-index: 11;
    
    &>img {
        transition: 0.2s;
        position: fixed;
        right: 10px;
        top: 10px;
    }

    &>img:hover {
        transform: scale(1.05);
        transform: translateY(-2px);
    }
`;

const Heading = styled.div`
    font-family: Akshar;
    font-size: 40px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    margin-top: 50px;
`;

const Checkout = styled.button`
    background-color: black;
    color: white;
    font-family: Akshar;
    font-size: 20px;
    padding: 5px;
    width: 100%;

    &:hover {
        transform: translateY(-3px);
    }

    &:hover:active {
        transform: translateY(0px);
    }

`;

const Items = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 30px;
`;

const Item = styled.div`
    display: flex;

    &>div:nth-child(1) {
        flex: 1;
        border: 1px solid black;
    }
    &>div:nth-child(2) {
        flex: 4;
    }

    & img {
        display: block;
        min-width: 0;
        width: 100%;
        height: auto;
    }
`;

const Center = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 150px);
    padding: 20px;

`;

const CartContent = styled.div`
    padding-left: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    font-family: Akshar;
    & > * {
        font-size: 25px;
    }
`;

const Total = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0px 30px;
    box-sizing: border-box;
    margin-top: auto;
    margin-bottom: 30px;
    font-family: Akshar;
    font-size: 30px;
    font-weight: 600;
`;



export default function ShoppingCart(props) {
    console.log(props.items)
    return (
        <>
            <CartOverlay onClick={props.cartClick} show={props.show} />
            <Cart>
                <img src={exit} alt="exit button" onClick={props.cartClick} />
                <Heading>Your Cart</Heading>
                <Center>
                    <Items>
                        {
                            props.items.length ? props.items.map((item, i) => {
                                return (
                                    <Item key={i}>
                                        <div><img src={item.item.images.background} alt="cart item" /></div>
                                        <CartContent>
                                            <div className='left'>{item.item.name}</div>
                                            <div className="right">{formatPrice(item.store.cost)}</div>
                                        </CartContent>
                                    </Item>
                                )
                            }) : null
                        }

                    </Items>
                    <Total>
                        <div>Total:</div>
                        <div>{formatPrice(props.items.reduce((acc, item) => parseInt(acc) + parseInt(item.store.cost), 0))}</div>
                    </Total>
                    <Checkout>Checkout</Checkout>
                </Center>
            </Cart>
        </>
    );
}

function formatPrice(price) {
    return (`$ ${separator(price)}` + '.00');
}