import {useState, useEffect} from 'react';
import {db} from './../firebase/FirebaseConfig';
import {useHistory} from 'react-router-dom';

export const useGetExpense = (id) => {

    const [expense, getExpense] = useState([]);
    const history = useHistory();

    useEffect(async id =>{
        const doc = await db.collection('gastos').doc(id).get();
        if(doc.exists){
            getExpense(doc)
        }else{
            history.push('/lista')
        }

    }, [history, id])

    return [expense];
}
