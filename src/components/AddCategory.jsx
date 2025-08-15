import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => { //esta es una prop que se envia desde el GifExpertApp

    const [ inputValue, setInputValue ] = useState('');//estado para cargar lo escrito en el input

    //funcion que carga el texto en el input text, se manda a llamar desde el evento onChange del input
    const onInputChange = ({ target }) => {
        setInputValue( target.value );//cargamos el valor en la caja
    }

    //evento para agregar la nueva categoria al array categorias
    const onSubmit = ( event )=>{
        event.preventDefault();
        if( inputValue.trim().length <=1 ) return;
        const valInput=inputValue.trim();
        onNewCategory( valInput );//llamamos a la funcion que esta en GiftExpertApp y le pasamos lo que esta escrito en el input
        setInputValue('');//para limpiar nuestra caja de texto
    }

    return (
        <form onSubmit={ onSubmit }>{/*Asignamos al evento onSubmit la funcion onSubmit */}
            <input 
                type="text" 
                placeholder="Buscar gifs" 
                value={ inputValue } 
                onChange={ onInputChange }//Hacemos el llamado a la funcion onInputChange, como parametro siempre se envia el event, y en la funcion desestructuramos el argumento (event) y extraemos el target  
            />
        </form>
    )
}

