import React from 'react'
import {Helmet} from 'react-helmet'
import Header from './../../elements/Header';
import Title from './../../elements/Title';
import {ExpensesForm} from './../ExpensesForm';
import {ExpenseBar} from './../ExpenseBar'
import {ReturnButton} from './../../elements/ReturnButton';
import {useGetExpense} from './../../hooks/useGetExpense';
import {useParams} from 'react-router-dom';

export const EditExpenses = () => {

    const {id} = useParams();
    //corte el primer caracter del id porque me lo devolvia con :
    const newId = id.slice(1)
    
    return (
        <>
            <Helmet>     
            <title>editar gastos</title>
            
            </Helmet>
            <Header>
                <ReturnButton ruta='/lista'/>
                <Title>Editar gasto</Title>
            </Header>

            <ExpensesForm/>
            <ExpenseBar/>
        </>
    )
}
