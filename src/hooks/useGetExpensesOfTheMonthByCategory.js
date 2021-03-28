import {useState, useEffect} from 'react';
import {useGetExpensesOfTheMonth} from './useGetExpensesOfTheMonth';

export const useGetExpensesOfTheMonthByCategory = () => {
    const expenses = useGetExpensesOfTheMonth();

    const [expensesByCategory, currentExpensesByCategory] = useState([]);

    useEffect(()=>{
        const addTheExpenses = expenses.reduce((objetoResultante, objetoActual)=>{
            const currentCategory = objetoActual.categoria;
            const currentAmount = objetoActual.cantidad;
    
            objetoResultante[currentCategory] += currentAmount;
    
            return objetoResultante;
        }, {
            hogar: 0, 
            comida:0, 
            pagos:0, 
            transporte:0, 
            ropa:0,
            salud:0, 
            higiene:0, 
            compras:0,
            diversion:0
        })
    
        currentExpensesByCategory(Object.keys(addTheExpenses).map((element)=>{
            return {categoria: element, cantidad: addTheExpenses[element] }
        }))
    }, [currentExpensesByCategory, expenses])
    

    return expensesByCategory;
}
 
