import styled from 'styled-components';

const ContainerExpenses = styled.div`
    margin:0 10px;

    @media(min-width:768px){
        height:50vh;
        overflow-y:scroll;
    }
`;
const CardExpenses = styled.div`
    display:flex;
    justify-content:space-between;
    border: solid 1px gray;
    padding:0 .3rem 0 0;
    margin-bottom:5px;
    border-radius:0px 3px 3px 3px;

    
`;
const Category = styled.div`
    background:purple;
    max-width:100%;
    max-height:100vh;
    display:flex;
    align-items:center;
    padding:0 5px;
    text-transform:capitalize;
    color:white;
    font-weight:bold;
`;

const Expense = styled.p`
    font-weight:bold;
`;
const Description = styled.p`
    display:flex;
    align-items:center;
    margin:0 7px 0 7px;
`;
const ButtonEditAndDelete = styled.button`
    background:transparent;
    border-radius:50%;
    margin-right:2px;
    border:none;
    cursor:pointer;
    
`; 

const Date = styled.p`
    background:rgb(58, 136, 184);
    padding:5px;
    color:white;
    max-width:150px;
    border-radius:2px 2px 0 0;
    margin-bottom:0px;
`;

export {ContainerExpenses, 
    CardExpenses, 
    Category, 
    Expense, 
    Description, 
    ButtonEditAndDelete, 
    Date
}