import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Container from './elements/Container';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {Categories} from './components/rutas/Categories';
import {EditExpenses} from './components/rutas/EditExpenses';
import {ExpensesList} from './components/rutas/ExpensesList';
import {Login} from './components/rutas/Login';
import {SignUp} from './components/rutas/SignUp';

import {AuthProvider} from './context/AuthContext';
import {TotalExpensesProvider} from './context/TotalExpensesInTheMonth';

import {PrivateRoute} from './components/PrivateRoute';

const Index = () => {
  return (
      <>
        <AuthProvider>
          <TotalExpensesProvider>
            <Container>
              <BrowserRouter>
                  
                    <Switch>
                      <Route path='/inicio-sesion' component={Login}/>
                      <Route path='/registro-usuario' component={SignUp}/>
                      
                      <PrivateRoute path='/categorias'>
                        <Categories/>
                      </PrivateRoute>

                      <PrivateRoute path='/lista'>
                        <ExpensesList/>
                      </PrivateRoute>

                      <PrivateRoute path='/editar/:id'>
                        <EditExpenses/>
                      </PrivateRoute>

                      <PrivateRoute path='/'>
                        <App/>
                      </PrivateRoute>

                      {/*<Route path='/categorias' component={Categories}/>
                      <Route path='/lista' component={ExpensesList}/>
                      <Route path='/editar/:id' component={EditExpenses}/>
                      <Route path='/' component={App}/>*/}
                    </Switch>
                
              </BrowserRouter>
            </Container>
          </TotalExpensesProvider>
        </AuthProvider>
      </>
      
  
  )
}

ReactDOM.render(<Index />, document.getElementById('root'));


