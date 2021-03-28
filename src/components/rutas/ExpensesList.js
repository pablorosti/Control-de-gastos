import React from 'react'
import {Helmet} from 'react-helmet'
import Header from './../../elements/Header'
import Title from './../../elements/Title'
import {ReturnButton} from './../../elements/ReturnButton'

import {ExpenseBar} from './../../components/ExpenseBar';
import {useGetExpenses} from './../../hooks/useGetExpenses';

import {ContainerExpenses, CardExpenses, Category, Expense, Description, ButtonEditAndDelete, Date} from './../../elements/ListElements';
import styled from 'styled-components';

import {Link} from 'react-router-dom';

import {format, fromUnixTime} from 'date-fns';
import {es} from 'date-fns/locale';

import {deleteExpense} from './../../firebase/deleteExpense';

export const ExpensesList = () => {

    const [expenses] = useGetExpenses();

    const formatDate = fecha => {
        return format(fromUnixTime(fecha), "dd 'de' MMMM 'de' yyyy", {locale:es})
    }


    return (
        <>
            <Helmet>     
            <title>Lista de gastos</title>
            
            </Helmet>
    
            <Header>
                <ReturnButton/>
                <Title>lista de gastos</Title>
            </Header>

            {expenses.length === 0
                ? <Center>no has registrado ningun gasto aún</Center>
                : <ContainerExpenses>
                        {
                            expenses.map((gasto)=>{
                                return(
                                        <div key={gasto.id}>
                                            <Date>{formatDate(gasto.fecha.seconds)}</Date>
                                            <CardExpenses >
                                                <Category>{gasto.categoria}</Category>
                                                <Description>{gasto.descripcion}</Description>
                                                <Expense>
                                                    
                                                    <ButtonEditAndDelete as={Link} to={`/editar/:${gasto.id}`}><i className="fas fa-pencil-alt"></i></ButtonEditAndDelete>
                                                    <ButtonEditAndDelete onClick={() => deleteExpense(gasto.id)}><i className="fas fa-trash-alt"></i></ButtonEditAndDelete>
                                                    <Block>${gasto.cantidad}</Block>
                                                </Expense>
                                                
                                            </CardExpenses>
                                        </div>
                                )
                            })
                        }
                    </ContainerExpenses>
            
            }
            
            

            <ExpenseBar/>
        </>
    )
}

const Center = styled.p`
    text-align:center;
    text-transform:uppercase;
    color:gray;
`;
const Block = styled.p`
    display:block;
`;