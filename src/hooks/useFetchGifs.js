
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifts';

export const useFetchGifs = ( categoria ) => {

    const [imagenes, setImagenes] = useState([]);
    const [isLoading, setIsLoagind] = useState( true );

    const getImagenes = async() => {
        const nuevasImagenes = await getGifs( categoria );
        setImagenes(nuevasImagenes);
        setIsLoagind(false);
    }
    
    useEffect( () => {
        getImagenes();
    }, []) 

  return {
    imagenes: imagenes,
    isLoading
  }
}
