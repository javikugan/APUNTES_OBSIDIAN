Cada vez que visitamos una URL, nuestro browser por defecto usa un GET para traer la pagina inicial.

## HTTP Autentificación Básica

Cuando visitamos el Ejercicio al final de esta Página, nos sale un username y password que utiliza parámetros HTTP parra validar las credenciales del usuario, lo que se maneja directamente desde el web Server para proteger una pagina en especifico / Directorio, sin interaccionar directamente con la aplicación web.

credenciales: admin:admin

![[Pasted image 20240331193150.png]]

Una vez introducimos las credenciales nos da acceso a la siguiente página

![[Pasted image 20240331193648.png]]

Vamos a intentar acceder con curl
![[Pasted image 20240331194333.png]]
nos solicita autentificación - acceso denegado, podemos proporcionar las credenciales a traves de cURL con el parámetro `-u`

![[Pasted image 20240331195549.png]]

si analizamos la cabecera del Request podemos ver la cabecera `Authorization : Basic YWRta46YWRtaW4` que es `admin:admin` codificado en  base64

Podemos intentar loguearnos dando ese valor a la cabecera Authorization con el parámetro -H, y vemos q no da ningun problema

![[Pasted image 20240331200126.png]]

## Parámetros `GET`

Una vez autenticados tenemos acceso a una función llamada city search que nos permite buscar ciudades, vamos a ver el trafico para analizar que REQUEST hace y podemos ver que realiza un request a 

![[Pasted image 20240331200958.png]]

# Ejercicio 

Para obtener la Flag del ejercicio HTB{curl_g3773r} simplemente tenemos que buscar la palabra flag con el cURL, el error de la pagina esta en el html que hace que busques lo que busques salgan siempre las dos mismas opciones


