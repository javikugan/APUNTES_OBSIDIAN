Las comunicaciones HTTP principalmente por una solicitud generada por el cliente para la que el servidor genera una respuesta, las solicitudes contienen todos los datos que requerimos del servidor incluyendo el recurso, cualquier dato solicitado, cabeceras u opciones que introduzcamos y varias cosas mas.

## HTTP Request

Vamos a observar el siguiente ejemplo

![[Pasted image 20240331143611.png]]

La primera línea de una solicitud contiene el tipo de acción que se realiza, q en este caso es un GET, la Ruta a la que queremos acceder y la versión HTTP usada 

```
La version 1.X de HTTP envia los datos en texto plano, y usa new lines para separar los campos, la version 2.x  los envia en formato binario con forma de diccionario
```

## HTTP Response

Vamos a analizar una respuesta HTTP

![[Pasted image 20240331144445.png]]
La primera línea contiene la versión de HTTP y el codigo de respuesta de la solicitud
Luego podemos ver varias cabeceras que indican distintos datos 
Finalmente en la parte final podemos ver el codigo de la respuesta

si usamos el parámetro `-v` en nuestro cURL nos enseñara tanto la Request como la response

```shell
javikugan@htb[/htb]$ curl inlanefreight.com -v

*   Trying SERVER_IP:80...
* TCP_NODELAY set
* Connected to inlanefreight.com (SERVER_IP) port 80 (#0)
> GET / HTTP/1.1
> Host: inlanefreight.com
> User-Agent: curl/7.65.3
> Accept: */*
> Connection: close
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 401 Unauthorized
< Date: Tue, 21 Jul 2020 05:20:15 GMT
< Server: Apache/X.Y.ZZ (Ubuntu)
< WWW-Authenticate: Basic realm="Restricted Content"
< Content-Length: 464
< Content-Type: text/html; charset=iso-8859-1
< 
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
```

```
Si usamos el parametro -vvv contendrá aún más información
```

## Browser DevTools

La mayoria de los navegadores modernos contienen herramientas de desssarroll que nos facilitan el analisis de este tipo de datos

![[Pasted image 20240331145149.png]]