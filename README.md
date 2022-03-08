
# Proyecto Grupal Tienda de Manga 💬

# Documentación del Proyecto 📑

El proyecto es una ```REST API``` creada para interactuar con los siguientes recursos:

- Registro/ Login
- Compra
- E-mail de confirmación de compra

# Conexión

Nuestra ```REST API``` tiene una base de datos en MongoDB. La herramienta con la que implementamos dicha base de datos es MangoAtlas.

# **Estructura de código**

El lenguaje en el que se basa la estructura de nuestra API es nodejs. La arquitectura de los archivos es Vista Modelo Controlador (sobre las vistas se han realizado pruebas pero finalmente no se han implementado)

# Flujo de datos

En la siguiente imagen se ha realizado un esquema de como procesa los datos la API

![FlujoDeDatos](.\ProyectoGrupalServidor\FlujoDeDatos.png)



# Inicio de la API

Una vez instaladas las dependencias necesarias para iniciar una API desarrollada en nodejs, abrimos la consola de comandos. Ponemos el directorio donde en encuentra la "src". Ejecutamos el comando **node index.js** y se iniciará el servidor. A continuación, mediante postman realizamos el login, con este control pasado, podemos comenzar a hacer peticiones a la base de datos. Esta API se alojará en el localhost:3000.

