import { useState } from 'react';
import { AddCategory, GifGrid } from './components/';


export const GifExpertApp = () => {


    const [ categorias , setCategorias ] = useState([ 'Batman' ]);//se inicializa el useState categorias como un arreglo

    const onAddCategory = ( newCategory ) =>{
        if ( categorias.includes(newCategory)) return;
        setCategorias( [ ...categorias, newCategory ] );
    }
    

  return (
    <>
        
        <h1>GifExpertApp</h1>

        <AddCategory onNewCategory={ (value) => onAddCategory(value) }/>
        
        {/* Se pone entre llaves porque es una expresion de javascript */}
        { 
            categorias.map( ( categoria )=>(
                <GifGrid  key={ categoria } categoria={ categoria }/>
            ))//se ponen parentesis para no poner el return
        }
        
    </>
  )
}
