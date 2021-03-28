import React, {useState} from 'react';
import styled from 'styled-components';
import {SelectCategory} from './SelectCategory';
import {DatePicker} from './DatePicker'; 
import addExpense from './../firebase/addExpense';

import {useAuth} from './../context/AuthContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ExpensesForm = () => {

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0); //amount = cantidad
    const [category, setCategory] = useState('hogar');
    const [date, setDate] = useState(new Date())

    const {user} = useAuth();

    const handleChange = e => {
        switch (e.target.name) {
            case 'description':
                setDescription(e.target.value)
                break;
            case 'amount':
                setAmount(e.target.value.replace(/[^0-9.]/g, ''))
                break;
            default:
                break;
        }
    }
    
    const handleSubmit = e => {
        e.preventDefault();

        let amountParse = parseFloat(amount).toFixed(2);
        

        if(description === '' || category === '' || amount <= 0 || date === ''){
            toast.error('Error, todos los campos son obligatorios', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return;
        }

        //Si pasamos la validacion, ejecutamos el siguiente codigo...
        addExpense({
            descripcion: description, 
            cantidad: amountParse, 
            categoria: category, 
            fecha: date, 
            id: user.uid
        })

    } 
    
    return (
        <>
            <ToastContainer/>
            <Flex>
                <SelectCategory setCategory={setCategory}/>
                <DatePicker date={date}
                            setDate={setDate}
                />
            </Flex>
            <Form onSubmit={handleSubmit}>
                <input type="text" 
                    placeholder='Descripcion'
                    name='description'
                    value={description}
                    onChange={handleChange}
                />
                <input type="number" 
                    placeholder='$0.00'
                    name='amount'
                    value={amount}
                    onChange={handleChange}
                />
                <button type='submit'>Agregar gasto <i className="fas fa-plus"></i></button>
            </Form>
        </>
    )
}

const Flex = styled.div`
    text-align:center;

    @media(min-width:768px){
        display:flex;
        justify-content:space-evenly;
    }
`;

const Form = styled.form`
    & > input{
        width:80%;
        display:block;
        border:none;
        padding:.7rem;
        border-bottom:solid 1px gray;
        text-align:center;
        outline:none;
        margin:10px auto;
        font-size:19px;

        @media(min-width:768px){
            width:30%;
        }
    }
    & > button{
        display:block;
        margin:2rem auto 0 auto;
        border:none;
        border-radius:5px;
        background:purple;
        color:white;
        padding:.8rem;
        text-transform:uppercase;
        cursor:pointer;
        outline:none;
        font-weight:bold;
    }
`;


