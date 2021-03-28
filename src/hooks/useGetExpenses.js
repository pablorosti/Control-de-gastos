import  {useState, useEffect} from 'react';
import {db} from './../firebase/FirebaseConfig';
import {useAuth} from './../context/AuthContext';

export const useGetExpenses = () => {
    
    const {user} = useAuth();    

    const [expenses, setExpenses] = useState([]);

    useEffect(()=>{
        const unSuscribe = db.collection('gastos')
        .where('id', '==', user.uid)
        .orderBy('fecha', 'desc')
        .limit(10)
        .onSnapshot((snapshot) => {
            setExpenses(snapshot.docs.map((gasto)=>{
                return {...gasto.data(), id: gasto.id}
            }))
            
        })
        return unSuscribe
    }, [user])

    return [expenses]
}
