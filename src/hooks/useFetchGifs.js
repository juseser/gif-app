// Importamos hooks de React:
// - useEffect: para ejecutar código con efectos secundarios (llamadas API, subscripciones, etc.)
// - useState: para manejar estado local dentro del hook
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';// Importamos la función que llama a la API de Giphy y devuelve los datos procesados


// Hook personalizado que recibe una categoría como parámetro
export const useFetchGifs = ( categoria ) => {

    // Estado que almacenará las imágenes obtenidas de la API
    // Inicialmente es un array vacío
    const [imagenes, setImagenes] = useState([]);

    // Estado booleano para indicar si todavía estamos cargando
    // true al inicio porque aún no se ha hecho la petición
    const [isLoading, setIsLoading] = useState( true );

    // Función interna (async) que hace la petición y actualiza el estado
    const getImagenes = async() => {
        const nuevasImagenes = await getGifs( categoria ); // Llama a getGifs pasando la categoría y espera la respuesta (array de gifs)
        setImagenes(nuevasImagenes);// Actualiza el estado con el nuevo array de imágenes
        setIsLoading(false);// Cambia el estado de carga a false porque ya terminó la petición
    }
    
     // useEffect se ejecuta después del primer renderizado del componente que use este hook
    // [] como dependencia => solo se ejecuta una vez al montar el componente
    useEffect( () => {
        getImagenes();// Llama a la función que obtiene las imágenes desde la API
    }, []) 
  
  // Retornamos un objeto con las propiedades que queremos exponer
  // - imagenes: array de resultados
  // - isLoading: booleano que indica si aún está cargando
  return {
    imagenes,
    isLoading
  }
}
