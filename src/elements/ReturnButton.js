import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const Button = styled.button`
    font-size:1.5rem;
    background:transparent;
    border:none;
    border-radius:50px;
    outline:none;
`;

export const ReturnButton = ({ruta = '/'}) => {
    const history = useHistory();

    return (
        <Button onClick={() => history.push(ruta)}><i className="fas fa-arrow-circle-left"></i></Button>
    )
}
