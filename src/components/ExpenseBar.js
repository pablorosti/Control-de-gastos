import React from 'react';
import styled from 'styled-components';
import {useTotalMonth} from './../context/TotalExpensesInTheMonth';

export const ExpenseBar = () => {

    const {total} = useTotalMonth();

    return (
        <Barra>
            <p>Total gastado en el mes</p>
            <p>${total}</p>
        </Barra>
    )
}

const Barra = styled.div`
    display:flex;
    justify-content:space-between;
    background: #000000;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #0f9b0f, #000000);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #0f9b0f, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    padding:.1rem .5rem;
    color:white;
    border-radius:0 0 5px 5px;
    margin-top:3rem;
    text-transform:uppercase;
`;