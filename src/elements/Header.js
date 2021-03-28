import styled from 'styled-components'

const Header = styled.div`
    max-width:100%;
    padding:1.5rem;
    text-align:center;

    @media(min-width:768px){
        display:flex;
        justify-content: space-between;
        align-items:center;
        flex-wrap:wrap-reverse;
    }
`;

export default Header;