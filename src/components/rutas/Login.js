import React, {useState} from 'react'
import {Helmet} from 'react-helmet';

import Title from './../../elements/Title';
import styled from 'styled-components';
import Form from './../../elements/Form';
import ButtonLogin from './../../elements/ButtonLoginAndSignUp';

import {Link, useHistory} from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {auth} from './../../firebase/FirebaseConfig';

import swal from 'sweetalert';

const Center = styled.div`
    text-align:center;
    padding-bottom:2rem;
`;

const Icon = styled.div`
    font-size:4rem;
`;

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory()

    const handleChange = e => {
        switch (e.target.name) {
            case 'email':
                setEmail(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
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
        if(email === '' || password === ''){
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

        //Si pasamos las validaciones iniciamos sesion
        try {
            await auth.signInWithEmailAndPassword(email, password);
            swal({
                title: `Hola`,
                icon: "success",
                button: "OK",
            });
            history.push('/')
        } catch (error) {
            let mensaje;
            switch (error.code) {
                case 'auth/wrong-password':
                    mensaje = 'Contraseña incorrecta'
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
                case 'auth/user-not-found':
                    mensaje = 'El email que ingreso no esta registrado'
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
                    break;
            }
        }
    }

    return (
        <>
            <Helmet>     
                <title>Iniciar Sesion</title>
            </Helmet>
            
            <Center>
                <ToastContainer/>
                <Title>Iniciar sesion</Title>
                <Icon><i className="fas fa-sign-in-alt"></i></Icon>
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
                    <ButtonLogin>Ingresar</ButtonLogin>
                </Form>
                <p>¿No tienes una cuenta?</p>
                <Link to='/registro-usuario'>Crear Cuenta</Link>
            </Center>
        </>
        
    )
}
