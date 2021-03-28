import {db} from './FirebaseConfig';

export const deleteExpense = async id => {
    await db.collection('gastos').doc(id).delete()
}
