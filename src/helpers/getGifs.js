export const getGifs = async( categoria ) =>{

    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${ categoria }&limit=10`;
    const resp = await fetch( url);
    const { data = [] } = await resp.json();// Desestructuramos 'data' de la respuesta en formato JSON
                                            // Si por alguna razón 'data' no existe, se asigna un array vacío por defecto
    
                                            // Transformamos el array 'data' a un nuevo array con solo la info que necesitamos:
    // id: identificador del gif
    // title: título del gif
    // url: enlace directo a la imagen en tamaño medio
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}


