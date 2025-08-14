import { useState } from "react"

                              //esta es una prop que se envia desde el GifExpertApp
export const AddCategory = ({ onNewCategory }) => { 

    const [ inputValue, setInputValue ] = useState('');//estado para cargar lo escrito en el input

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event )=>{
        event.preventDefault();
        if( inputValue.trim().length <=1 ) return;
        const valInput=inputValue.trim();
        onNewCategory( valInput );
        setInputValue('');//para limpiar nuestra caja de texto
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar gifs" 
                value={ inputValue } 
                onChange={ onInputChange }//Hacemos el llamado a la funcion onInputChange, como parametro siempre se envia el event, y en la funcion desestructuramos el argumento (event) y extraemos el target  
            />
        </form>
    )
}

