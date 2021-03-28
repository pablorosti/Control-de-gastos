import {useState, useEffect} from 'react'
import {db} from './../firebase/FirebaseConfig';

import {startOfMonth, endOfMonth} from 'date-fns';

import {useAuth} from './../context/AuthContext';

export const useGetExpensesOfTheMonth = () => {

    const [expense, getExpense] = useState([]);
    const {user} = useAuth();

    useEffect(() => {

        const inicioMes = startOfMonth(new Date());
        const finMes = endOfMonth(new Date());

        if(user){
            const unSuscribe = db.collection('gastos')
            .orderBy('fecha', 'desc')
            .where('id', '==', user.uid)
            .where('fecha', '>=', inicioMes)
            .where('fecha', '<=', finMes)
            .onSnapshot((snapshop)=>{
                getExpense(snapshop.docs.map((data)=>{
                    return {...data.data(), id:data.id}
                }))
            })

            return unSuscribe;
        }
        
    }, [])

    return expense
}
