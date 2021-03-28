import React, {useState} from 'react'
import {Helmet} from 'react-helmet';
import Title from './../../elements/Title';
import styled from 'styled-components';
import Form from './../../elements/Form';
import ButtonLogin from './../../elements/ButtonLoginAndSignUp';

import {Link, useHistory} from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import swal from 'sweetalert';

import {auth} from './../../firebase/FirebaseConfig';


const Center = styled.div`
    text-align:center;
    padding-bottom:2rem;
`;

const Icon = styled.div`
    font-size:4rem;
`;

export const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const history = useHistory()

    const handleChange = e => {
        switch (e.target.name) {
            case 'email':
                setEmail(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
                break;
            case 'password2':
                setPassword2(e.target.value)
                break;
            default:
                break;
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();

        const regex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i

        if(!regex.test(email)){
            toast.error('Error, ingresa un correo valido', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return;
        }
        if(email === '' || password === '' || password2 === ''){
            toast.error('Todos los campos son obligatorios', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return
        }
        if(password !== password2){
            toast.error('Las contraseñas deben ser iguales', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return
        }

        //Cuando pasamos todas las validaciones creamos un nuevo usuario
        try {
            await auth.createUserWithEmailAndPassword(email, password);
            swal({
                title: 'Bienvenido',
                text: "Se creo su cuenta exitosamente",
                icon: "success",
                button: "OK",
              });
            history.push('/')

        } catch (error) {
            let mensaje;
            switch (error.code) {
                case 'auth/weak-password':
                    mensaje = 'La contraseña debe de ser al menos de 6 caracteres'
                    toast.error(mensaje, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                    break;
                case 'auth/email-already-exists':
                    mensaje = 'El email ingresado ya esta en uso'
                    toast.error(mensaje, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                    break;
                case 'auth/invalid-email':
                    mensaje = 'El email ingreado no es valido'
                    toast.error(mensaje, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                    break;
                default:
                    mensaje = 'Hubo un error al intentar crear la cuenta'
                    toast.error(mensaje, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                    break;
            }
        }

    }

    return (
        <>
            <Helmet>     
                <title>Crear cuenta</title>
            
            </Helmet>
            
            <Center>
                <ToastContainer/>
                <Title>Registrate</Title>
                <Icon><i className="fas fa-user-plus"></i></Icon>
                <Form onSubmit={handleSubmit}>
                    <input type="email"
                        placeholder='Correo electrónico'
                        name='email'
                        value={email}
                        onChange={handleChange}                   
                        
                    />
                    <input type="password" 
                        placeholder='Contraseña'
                        name='password'
                        value={password}
                        onChange={handleChange}                   
                    />
                    <input type="password" 
                        placeholder='Repetir contraseña'
                        name='password2'
                        value={password2}
                        onChange={handleChange}                   
                    />
                    <ButtonLogin>Registrate</ButtonLogin>
                </Form>
                <p>¿Ya tienes una cuenta?</p>
                <Link to='/inicio-sesion'>Iniciar Sesión</Link>
            </Center>
        </>
    )
}
