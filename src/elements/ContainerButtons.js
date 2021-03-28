import styled from 'styled-components'

const ContainerButtons = styled.div`
    & > Link{
        display:block;
        margin:0 auto;
    }

    @media(min-width:768px){
        display:flex;
        display:flex;
        justify-content:space-between;
    }
`;

export default ContainerButtons;