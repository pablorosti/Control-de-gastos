import {db} from './FirebaseConfig';
import swal from 'sweetalert';

const addExpense = async ({descripcion, cantidad, fecha, categoria, id}) => {
    try {
        
        await db.collection('gastos').add({
            categoria:categoria, 
            descripcion: descripcion, 
            cantidad: cantidad, 
            fecha: fecha, 
            id: id
        })
        swal({
            title: 'Se agrego el gasto correctamente',
            icon: "success",
            button: "OK",
          });
    } catch (error) {
        swal({
            title: error,
            icon: "warning",
            button: "OK",
          });
    } 
}



export default addExpense;