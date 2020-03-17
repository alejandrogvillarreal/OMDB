# OMDB

OMDB es el repositorio que contiene el docker-compose.yaml que permite instalar en tu máquina local todos los servicios necesarios para su entorno.

## Instalacion

La APP está dockerizada, lo que hace mucho mas facil la instalación y ejecución del proyecto.

* Clonar este repo y los submodulos con `git clone https://github.com/alejandrogvillarreal/OMDB.git`
* Correr docker-compose build.
* Correr docker-compose up para levantar todos los servicios.
* Para acceder a el ingresamos en http://localhost:3000

### Obtener información.

Esta APP utiliza la API de [OMDB](http://www.omdbapi.com/).

Será Un servicio RESTFULL de películas al estilo [IMDB](http://www.imdb.com/) pero open source!

### APIKEY

Para poder hacer requests vamos a necesitar identificarnos con una **APIKEY**

> `apikey=20dac387`

La API es gratis por lo que pueden sacar su propia [key](https://www.omdbapi.com/apikey.aspx?__EVENTTARGET=freeAcct&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=%2FwEPDwUKLTIwNDY4MTIzNQ9kFgYCAQ9kFgICBw8WAh4HVmlzaWJsZWhkAgIPFgIfAGhkAgMPFgIfAGhkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYDBQtwYXRyZW9uQWNjdAUIZnJlZUFjY3QFCGZyZWVBY2N0x0euvR%2FzVv1jLU3mGetH4R3kWtYKWACCaYcfoP1IY8g%3D&__VIEWSTATEGENERATOR=5E550F58&__EVENTVALIDATION=%2FwEdAAU5GG7XylwYou%2BzznFv7FbZmSzhXfnlWWVdWIamVouVTzfZJuQDpLVS6HZFWq5fYpioiDjxFjSdCQfbG0SWduXFd8BcWGH1ot0k0SO7CfuulN6vYN8IikxxqwtGWTciOwQ4e4xie4N992dlfbpyqd1D&at=freeAcct&Email=).

### Uso

La API usa la misma dirección de la pagina `https://www.omdbapi.com/` pero agrega un _query string_ para hacer una búsqueda en particular.

> No se olviden de primero pasar la APIKEY!

Este query esta definido en su documentación y tiene varias opciones, por ejemplo:

  * `s`: sirve para hacer un **search** que devuelve un arreglo de películas que puedan matchear con el valor.

    EJ: `https://www.omdbapi.com/?apikey=20dac387&s=batman`

  * `t`: es para buscar por **title** que devuelve un objeto con la información puntual de una película.

    EJ: `https://www.omdbapi.com/?apikey=20dac387&t=batman`

> Por cada "propiedad" de la búsqueda se agrega un `&` para separar los comandos.


## Setup

### Organización

#### Front-End

```bash.
├── src
│   ├── /assets
│   ├── /components
│   ├── /containers
│   ├── /redux
│   │   ├── /actions
│   │   ├── /reducers
│   │   └── store.js
│   ├── /utils
│   └── index.js
├── package.json
└── Dockerfile
```

* __src__: Carpeta donde estará el código fuente del front-end de nuestra app.
* __assets__: Imágenes y otros archivos estáticos. 
* __components__: Todos nuestros componentes de REACT.
* __containers__: Nuestros containers de REACT.
* __redux__: Todo lo relacionado con redux.
* __utils__: Funciones comunes a todos, si es que hay.


## Alcance

### Funcionalidades

Con la App podremos:

* Buscar películas y listarlas.
* Poder ver todos los detalles de una película en particular.


## Tecnologias usadas

### Front-End:

* [React](https://reactjs.org/docs/getting-started.html)
* [React-router](https://github.com/ReactTraining/react-router)
* [Redux](https://redux.js.org/basics)
* [React-Redux](https://github.com/reactjs/react-redux)

### Rutas Front-End

* `/`: la ruta de home que tiene un input para hacer la búsqueda.
* `/search`: tiene que mostrar los resultados de la búsqueda (un listado de resultados).
* `/movie/:movieId`: muestra los detalles de una película en particular.

## Puertos

El frontend se levanta en el puerto 3000, por lo tanto, para acceder a el ingresamos en http://localhost:3000.
