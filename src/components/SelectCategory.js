import React from 'react'
import styled from 'styled-components';

export const SelectCategory = ({setCategory}) => {

    const handleClick = e => {
        setCategory(e.target.value);
    }

    return (
        <>
            <Select onClick={handleClick}>
                <option value="hogar">Hogar</option>
                <option value="comida">Comida</option>
                <option value="pagos">Pagos</option>
                <option value="transporte">Transporte</option>
                <option value="ropa">Ropa</option>
                <option value="salud">Salud</option>
                <option value="higiene">Higiene</option>
                <option value="compras">Compras</option>
                <option value="diversion">Diversion</option>
            </Select>
        </>
    )
}

const Select = styled.select`
    border:none;
    border-bottom:solid 1px gray;
    width:80%;
    margin:1rem;
    background:transparent;
    outline:none;
    font-size:19px;
    text-transform:uppercase;

    @media(min-width:768px){
        margin:0;
        width:30%;
    }
`;
