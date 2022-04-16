import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {separator} from './Shop';

const Background = styled.div`
    padding: 50px 0px;
    width: 100%;
    background-color: rgb(240,240,240);
    display: flex;
    justify-content: center;
    height: calc(100vh - 230px);
`;  


const BuyBox = styled.div`
    display: flex;
    justify-content: flex-start;
    max-width: 1440px;
    width: 100%;
    padding-left: 80px;
    padding-right: 80px;
    gap: 20px;

    & img {
        width: 100%;
        display: block;
    }
    &>* {
        flex: 1;
    }
`;

const AddCart = styled.button`
    background: black;
    color: white;
    font-weight: 600;
    padding: 10px 30px;
    font-family: Akshar;
    font-size: 20px;
    border: none;
    transition: 0.2s;

    &:hover {
        transform: translateY(-5px);
    }
    &:active {
        transform: translateY(0px);
    }

    &:disabled {
        border: 3px solid rgb(150,150,150);
        background-color: white;
        color: rgb(150,150,150);
    }   

    &:disabled:hover {
        transform: none;
    }
`;

const InfoDisplay = styled.div`
    display: flex;
    flex-direction: column;
`;
const ItemName = styled.div`
    font-weight: 600;
    font-size: 60px;
    font-family: Akshar;
`;
const Price = styled.div`
    font-weight: 500;
    font-family: Akshar;
    font-size: 30px;

`;

const Description = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
    font-weight: 500;
    font-family: Akshar;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
`;



function ItemPage({ getItem, cartAdd, getStatus }) {
    let params = useParams();
    let item = getItem(params.id);
    const [status, updateStatus] = useState(false);

    
    useEffect(() => {
        updateStatus(getStatus(params.id));
    },[]);

    if (!item) return <>Loading...</>;

    function clickAdd(event) {
        cartAdd(params.id);
        event.target.disabled = true;
        event.target.classList.add('disabled');
        event.target.textContent = 'Already Added to Cart';
    }

    return (
        <>
            <Background>
                <BuyBox>
                    <div>
                        <img src={item.item.images.background} alt="shop item" />
                    </div>
                    <InfoDisplay>
                        <ItemName>{item.item.name}</ItemName>
                        <Price>${separator(item.store.cost)} USD</Price>
                        <Description>{item.item.description}</Description>
                        <AddCart disabled={status} onClick={clickAdd}>{!status&&'Add to Cart'}{status&&'Already Added to Cart'}</AddCart>
                    </InfoDisplay>
                </BuyBox>
            </Background>
        </>
    );
}

export default ItemPage;