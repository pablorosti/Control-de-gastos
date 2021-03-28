import Header from './elements/Header'
import Title from './elements/Title';
import ContainerButtons from './elements/ContainerButtons';
import Button from './elements/Button';
import {Helmet} from "react-helmet";

import {ExpensesForm} from './components/ExpensesForm';
import {ExpenseBar} from './components/ExpenseBar';

import {auth} from './firebase/FirebaseConfig';
import swal from 'sweetalert';
import {useHistory} from 'react-router-dom';


function App() {

  const history = useHistory()

  //Se ejecuta cuando queremos cerrar sesion
  const handleClick = async () => {
    try {
      await auth.signOut();
      
      swal({
            title: 'Adios, nos vemos pronto :)',
            icon: "info",
            button: "OK",
          });

      history.push('/inicio-sesion');

    } catch (error) {
      swal({
          title: 'Ocurrió un error al intentar cerrar sesión',
          icon: "warning",
          button: "OK",
        });
      }   
  }

  return (
    <>
      <Helmet>     
        <title>Agregar Gasto</title>
        
      </Helmet>

      <Header>
          <ContainerButtons>
                <Button to='/categorias'>Categoria</Button>
                <Button to='/lista'>Lista de gastos</Button>
                <Button onClick={handleClick}>Salir</Button>
          </ContainerButtons>
          <Title>agregar gasto</Title>
      </Header>

      <ExpensesForm/>
      <ExpenseBar/>
    </>
  );
}

export default App;
