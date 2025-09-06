import { GifGridItem }  from './GifGridItem';//Importamos el componente que renderiza cada tarjeta individual de GIF
import { useFetchGifs } from '../hooks/useFetchGifs';//Importamos nuestro hook personalizado que se encarga de obtener los GIFs desde la API

// Componente GifGrid: recibe como prop la categoría de la cual queremos mostrar GIFs
export const GifGrid = ({ categoria }) => {

    // Llamamos a nuestro hook personalizado pasándole la categoría
    // useFetchGifs nos devuelve un objeto el cual desestructuramos con:
    // - imagenes: array de GIFs (cada uno con id, title, url)
    // - isLoading: booleano que indica si la carga está en progreso
    const { imagenes, isLoading} = useFetchGifs( categoria );

    // JSX que se va a renderizar
    return (
        <>
            {/* Título de la sección: el nombre de la categoría */}
            <h3>{ categoria }</h3>
            {
                isLoading && ( <h2>Cargando...</h2>)
            }
           
            {/* Contenedor de tarjetas con clase 'card-grid' (grid flexible en CSS) */}
            <div className="card-grid">
                {
                    // Recorremos el array 'imagenes' con map()
                    // Cada elemento 'imagen' es un objeto con la info de un gif: { id, title, url }
                    imagenes.map( ( imagen ) => (
                        <GifGridItem 
                            key={ imagen.id }
                            { ...imagen }//exparsimos todas las props de imagen
                        />// Componente que muestra una tarjeta con la imagen y el título de un solo GIF
                    ))
                }
            </div>
         </>
    )
}
