import React, {useContext, useState, useEffect} from 'react'
import {auth} from './../firebase/FirebaseConfig';

//Creamos el contexto
const AuthContext = React.createContext();

//Hook para acceder al contexto, esto me va a devolver el valor que tenga el usuario
const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(true);
    const [loading, setLoading] = useState(true);

    //comprobamos solo UNA vez si hay una sesion activa
    useEffect(()=>{
        //comprobamos si hay un usuario
        auth.onAuthStateChanged(usuario => {
            setUser(usuario) 
            setLoading(false); 
        })
    }, [])

    

    return (
        <AuthContext.Provider value={{user}}>
            {/*Retornamos la aplicacion cuando ya no este cargando.
            Si no hacemos esto, el componente children va a intentar
            cargar antes de haber comporbado que existe un usuario*/}
            {!loading && children}
        </AuthContext.Provider>
    )
}

export {AuthProvider, useAuth};