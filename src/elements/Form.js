import styled from 'styled-components';

const Form = styled.form`
    & > input{
        padding:.7rem;
        border:none;
        border-bottom:solid 1px gray;
        text-align:center;
        outline:none;
        display:block;
        margin:10px auto;
    }
`;

export default Form;