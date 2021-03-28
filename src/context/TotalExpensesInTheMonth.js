import React, {useState, useEffect, useContext} from 'react';

import {useGetExpensesOfTheMonth} from './../hooks/useGetExpensesOfTheMonth';

const TotalExpensesContext = React.createContext();

const useTotalMonth = ()=>{
    return useContext(TotalExpensesContext)
}

const TotalExpensesProvider = ({children}) => {

    const [total, changeTotal] = useState(0);
    const expenses = useGetExpensesOfTheMonth();
    

    useEffect(() => {
        let accumulated = 0;
        expenses.forEach((expense)=>{
            changeTotal(accumulated += parseInt(expense.cantidad));
        })

    }, [expenses])

    return(
        <TotalExpensesContext.Provider value={{total:total}}>
            {children}
        </TotalExpensesContext.Provider>
    )
}

export {TotalExpensesProvider, useTotalMonth}