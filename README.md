# 📸 Gif Expert App

Aplicación web desarrollada con **React** y **Vite** que permite buscar y mostrar GIFs animados en tiempo real, consumiendo una API externa.  
Ideal para practicar hooks, manejo de estado y consumo de APIs.

## 🌐 Enlace en Producción

🔗 [https://gif-app-practica.netlify.app/](https://gif-app-practica.netlify.app/)

## 🚀 Características

- 🔍 **Búsqueda dinámica** de GIFs por categorías.
- 📂 Posibilidad de agregar múltiples categorías.
- ⚡ Carga rápida gracias a **Vite** como bundler.
- 🖼️ Visualización optimizada con grid responsivo.
- 🎯 Código modular y fácil de mantener.

## 🛠️ Tecnologías usadas

- [React 18](https://reactjs.org/) – Librería para la construcción de interfaces.
- [Vite](https://vitejs.dev/) – Empaquetador rápido y ligero.
- [JavaScript (ES6+)](https://developer.mozilla.org/es/docs/Web/JavaScript) – Lenguaje base.
- [CSS Modules / estilos propios] – Estilizado del proyecto.
- API de GIFs (ej. [Giphy API](https://developers.giphy.com/)) – Fuente de datos.

## 📦 Instalación y uso

1. **Clonar el repositorio**  
   ```bash
   git clone https://github.com/tu-usuario/gif-expert-app.git
   cd gif-expert-app
   ```

2. **Instalar dependencias**  
   ```bash
   yarn install
   # o con npm
   npm install
   ```

3. **Configurar API Key**  
   - Regístrate en [Giphy Developers](https://developers.giphy.com/) (o la API que uses).
   - Crea un archivo `.env` en la raíz con:
     ```env
     VITE_API_KEY=tu_api_key
     ```

4. **Ejecutar en modo desarrollo**  
   ```bash
   yarn dev
   # o con npm
   npm run dev
   ```

5. **Build para producción**  
   ```bash
   yarn build
   # o con npm
   npm run build
   ```

## 📂 Estructura de carpetas

```plaintext
src/
├── components/   # Componentes reutilizables
├── hooks/        # Hooks personalizados
├── helpers/      # Funciones auxiliares
├── styles/       # Estilos
└── main.jsx      # Punto de entrada
```

## 🧑‍💻 Autor

**Juan Sebastian Serrano** – [GitHub](https://github.com/juseser)  
