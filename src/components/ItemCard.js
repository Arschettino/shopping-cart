import React from 'react';
import styled from 'styled-components';
import {Link, useNavigate} from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const ImgWrap = styled.div`
    border: 1px solid black;
    transition: 0.2s;
    &>img {
        width: 100%;
        display: block;
    }
    &:hover {
        transform: scale(1.05);
        border: 3px solid green;
        background-color: rgba(0,255,0,.1);
    }
`;

const Name = styled.div`
    font-family: Akshar;

`;

const Price = styled.div`
    font-family: Akshar;
    padding-bottom: 20px;
`;



function ItemCard({ id, name, img, price }) {
    let navigate = useNavigate();

    function handleClick(event) {
        navigate(`/shop/${id}`);
    }

    return (
        <Wrapper >
            <ImgWrap id={id} onClick={handleClick}>
                <img src={img} alt="item for sale" />
            </ImgWrap>
            <Name>
                {name}
            </Name>
            <Price>
                ${price} USD
            </Price>
        </Wrapper>
    );
}

export default ItemCard;