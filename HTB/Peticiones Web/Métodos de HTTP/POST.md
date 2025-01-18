Cuando las aplicaciones web necesitan transferir archivos se utilizan solicitudes `POST` 

`HTTP POST` coloca los parámetros de usuario en el cuerpo de la `REQUEST` esto tiene 3 beneficios principales:

1. No Se Loggean todos los archivos subidos, lo que aumenta la eficiencia del servidor
2. Las Solicitudes Post no requieren de tanta codificacion, el cuerpo del `REQUEST` acepta datos binarios. 
3. Se pueden enviar mas datos

## Formularios de Login

Vamos a ver un ejemplo que utiliza PHP login en vez de HTTP basic auth
![[Pasted image 20240331211420.png]]podemos ver que tanto el usuario como la contraseña estan en el cuerpo del `REQUEST`
![[Pasted image 20240331221101.png]]

Podemos realizar un curl si insertamos el cuerpo del `REQUEST` con el parámetro  `-d`  e indicamos el `METHOD: POST` con `-X`

![[Pasted image 20240331222103.png]]

Una vez autenticados podemos observar que se nos ha asignado una Cookie en el `RESPONSE` en este caso es:
`PHPSESSID=8unohkbq2o7rodgbmuctv0k9bv`

podemos usar esta cookie para autenticarnos en el resto de la web con el parámetro `-b` en el  `cURL` o cambiando la cabecera:
`Cookie: PHPSESSID = 8unohkbq2o7rodgbmuctv0k9bv`

![[Pasted image 20240331223543.png]]



