import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import ItemCard from './ItemCard.js';

const GridWrapper = styled.div`
    background-color: rgb(240,240,240);
    width: 100%;
    box-sizing: border-box;
    padding: 40px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const ItemGrid = styled.div`
    width: 100%;
    display: grid;
    max-width: 1440px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr) );
    gap: 20px;
`;

const Header = styled.h1`
    margin-top: 0;
    margin-bottom: 30px;
`;


function Shop({ items }) {


    return (
        <GridWrapper>
            <Header>Today's Items</Header>
            <ItemGrid>
                {
                    items.length ? items.map(
                        (item, i) => {
                            let name = item.item.name;
                            let img = item.item.images.information;
                            let price = separator(item.store.cost);
                            return <ItemCard key={i} id={i} name={name} img={img} price={price} />
                        }
                    ) : null
                }
            </ItemGrid>
        </GridWrapper>
    );
}

export function separator(numb) {
    let str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}

export default Shop;