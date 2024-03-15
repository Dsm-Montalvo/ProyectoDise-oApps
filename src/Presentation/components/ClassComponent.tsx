import React, {Component} from 'react';
import {View, Text} from 'react-native';

interface Props{
    /* dentro de la interface se encontrara los Props */
    age: number;
    name: string;
}

interface State{
    /* dentro de la interface se encontraran los estados */
    message: string;
}

class ClassComponent extends Component<Props, State>{
    constructor(props: Props){
        super(props) // llamada dek constructir de la clase padre
        //se inciializa el estado 
        this.state = {
            message: "mensaje desde el componente clase"
        };
    }

    render(){
        const {age, name} = this.props;
        const {message} = this.state;
        return (

            <View>
                <Text>{message}</Text>
                <Text>hola {name} tu edad : {age}</Text>
            </View>
        );
    }
}

export default ClassComponent;

/* interface  algo que pertenece a la vista */