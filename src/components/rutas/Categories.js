import React from 'react'
import {Helmet} from 'react-helmet'
import Header from './../../elements/Header'
import Title from './../../elements/Title'
import {ReturnButton} from './../../elements/ReturnButton'

import {ExpenseBar} from './../../components/ExpenseBar';

import {useGetExpensesOfTheMonthByCategory} from './../../hooks/useGetExpensesOfTheMonthByCategory';

import {ContainerExpenses, CardExpenses, Category, Expense} from './../../elements/ListElements';

export const Categories = () => {

    const expensesByCategory = useGetExpensesOfTheMonthByCategory();

    return (
        <>
            <Helmet>     
            <title>gasto por categoria</title>
            
            </Helmet>
    
            <Header>
                <ReturnButton/>
                <Title>gastos por categoria</Title>
            </Header>

            <ContainerExpenses>
                
                {expensesByCategory.map((expense, index)=>{
                   
                    return <CardExpenses key={index}>
                                <Category>{expense.categoria}</Category>
                                <Expense>${expense.cantidad}</Expense>
                            </CardExpenses>
                })}
            
            </ContainerExpenses>

            <ExpenseBar/>
        </>
    )
}