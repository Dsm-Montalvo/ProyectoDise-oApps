import React, { useState } from "react";
import { RegisterAuthUseCase } from "../../../Domain/useCases/auth/RegisterAuth";

export const RegisterViewModel = () => {
    
    const [values, setValues] = useState({
        name : '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        email: '',
        password: ''
    });

    const onChange = (property: string, value: any) => {
        setValues({...values, [property]: value});
    }

    const register= async()=>{
        const {result,error} = await RegisterAuthUseCase(values);
        console.log("Result: " + JSON.stringify(result));
        console.log("Error: "+error);
    }

    return{
        ...values,
        onChange,
        register
    }
}
