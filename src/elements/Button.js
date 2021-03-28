import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Button = styled(Link)`
    display:block;
    margin:0 auto;
    background: ${(props) => props.primary ? '#5B69E2' : 'black'};
    padding:.5rem;
    color:white;
    text-decoration:none;
    text-transform:uppercase;
    border:none;
    border-radius:5px;
    width:auto;
    margin-top:5px;
    font-weight:bold;
    cursor:pointer;
    outline:none;

    @media(min-width:768px){
        display:inline;
        margin-right:5px;
        
    }
`;
export default Button;