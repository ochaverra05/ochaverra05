### Hola mi nombre es [Oriel Chaverra][website]👌

## Tengo 25 años y me encanta aprender cada día más
- Trabajo en un banco 🏦
- Adicional trabajo en un emprendimiento 🔮
- Me gusta el baloncesto 🏀
- Amo degustar comidas 🍔

### Conectate conmigo:
[<img align="left" alt="linkedin" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>][website]
[<img align="left" alt="twitter"  src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"/>][twitter]
[<img align="left" alt="facebook" src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white"/>][facebook]
[<img align="left" alt="instagram"  src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"/>][instagram]

<br><br><br>

### Spotify
[![Spotify](https://novatorem-phi-dusky.vercel.app/api/spotify)](https://open.spotify.com/user/oriel05chaverra)

---
### Estadísticas de Github
<img align="left" alt="Oriel's Github Stats" src="https://github-readme-stats.vercel.app/api?username=ochaverra05&show_icons=true&hide_border=true">

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

### Instrucción para uso del Código NPM
 - Clonar el repositorio 
 - Una vez clonado ejecutar el comando "node basic_node_cowsay.js" que se encuentra en la carpeta node-npm/
 - Copiar el enlace que aparece en consola y pegarlo en el postman
 - El código se puede ejecutar por los métodos Get y Post

### Solución Dockerizada
  Para hacer uso de la solución dockerizada, debemos tener primordialmente el docker instalado.
  Si no lo tenemos, podemos descargarla y seguir las instrucciones al pie de la letra en la [documentación Docker][docker] 
  <br>
  <br>
  una vez instalada el docker seguimos los siguientes pasos:
  <br>
  - Hacer clone o fork del repo, lo que mejor nos parezca.
  - Ejecutamos el comando npm install, para instalar las dependencias, en este caso las librerías express y cowsay en la carpeta docker_oriel/.
  - Ejecutamos el comando docker build . -t "nombre-de-la-imagen" y sirve para crear la imagen del docker, el "." sirve para construir la imagen a partir del dockerfile que se encuentra en la ruta. El "-t" es para darle el tag o nombre de repositorio.
  - Ejecutamos el comando docker images, para ver las imagenes
  - Ejecutamos el comando docker run -p "puerto-que-desees":8080 -d "nombre-de-la-imagen", esto para crear el contenedor, el "-p" sirve para cambiar un puerto de público a privado, el "-d" para dejar el contenedor ejecutandose en segundo plano.
  - Ejecutamos el comando docker ps, para ver si se creó el contenedor y si se esta ejecutando.
  - Abrimos postman e importamos el archivo docker_solution_test.json y ejecutamos para probar los diversos métodos.

  <b>NOTA</b>: en mi caso utilicé el puerto 49160 en el "puerto-que-desees", y la misma esta en el endpont que se importó en el postman, asi que debes modificar dicho puerto por el que hayas puesto.
  
[website]: https://www.linkedin.com/in/oriel-chaverra-161891181/
[twitter]: https://twitter.com/ochaverra05/
[facebook]: https://www.facebook.com/oriel.chaverra/
[instagram]: https://www.instagram.com/ochaverra05/
[docker]:  https://docs.docker.com/get-docker/
