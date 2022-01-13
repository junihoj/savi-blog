import {useReducer, createContext, useEffect } from "react";
import axios from 'axios'

const Context = createContext()
const initialState= {
    count: 0, 
    login:false,
    url:''
}
const rootReducer = (state, action)=>{
    switch(action.type){
        case 'INCREMENT':
            console.log("This action was dispatch")
            return {...state, count: action.count}

        case 'DECREMENT':
            return {...state, count: action.count}

        case 'RESET':
            return {...state, count:0}
        
        case 'URL':
            return {...state, url: action.url}
        
        case 'LOGIN':
            return {...state, login:action.login}
        default:
            return state
    }

}

const Provider = ({children})=>{
    const [state, dispatch] = useReducer(rootReducer, initialState)

    useEffect(()=>{
        dispatch({
            type:'LOGIN',
            login:window.localStorage.getItem('login')
        })
    },[])


    // useEffect(()=>{
    //     const getCsrfToken = async ()=>{
    //         const {data} = await axios.get("http://localhost:8000/api/csrf-token");
    //         axios.defaults.headers["X-CSRF-Token"] = data.getCsrfToken;

    //         console.log("CSRF", data);
    //         console.log('mycsrf', data.getCsrfToken)
    //     }
    //     getCsrfToken();
    // }, [])

    return(
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export {
    Context, 
    Provider,
}