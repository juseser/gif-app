import { useState } from 'react';
import { AddCategory, GifGrid } from './components/';

export const GifExpertApp = () => {
    
    const [ categorias , setCategorias ] = useState([ 'Batman' ]);//se inicializa el useState categorias como un arreglo

    //Funcion para agregar una nueva categoria de gifs, recibe como argumento newCategory, el cual viene de AddCategory.jsx
    const onAddCategory = ( newCategory ) =>{
        if ( categorias.includes(newCategory)) return;//evita categorias duplicadas
        setCategorias( [ ...categorias, newCategory ] );
    }
    
    return (
        <>
            
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={ (value) => onAddCategory(value) }/>
            
            {/* Se pone entre llaves porque es una expresion de javascript */}
            { 
                categorias.map( ( categoria )=>(
                    <GifGrid  key={ categoria } categoria={ categoria }/>//React crea una instancia del componente GifGrid y la muéstra aquí
                ))//se ponen parentesis para no poner el return
            }
            
        </>
    )
}
