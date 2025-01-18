## APIs 

Hay distintos tipos de API, , muchas APIs son para interactuar con una base de datos, para que podamos especificar en nuestra consulta API y luego realizar el método HTTP requerido, por ejemplo en api.php, si queremos actualizarla tabla ciudad en nuestra tabla en la base de datos, y la fila que vamos a actualizar contiene Londres la url que usaríamos seria algo tal que asi 

``` bash
curl -X PUT http://<SERVER_IP>:<PORT>/api.php/city/london ...SNIP...
```

## CRUD

Como podemos observar podemos especificar fácilmente la tabla y la fila en la que queremos realizar una operación, por lo que podemos realizar operaciones con los distintos métodos de HTTP

|Operation|HTTP Method|Description|
|---|---|---|
|`Create`|`POST`|Adds the specified data to the database table|
|`Read`|`GET`|Reads the specified entity from the database table|
|`Update`|`PUT`|Updates the data of the specified database table|
|`Delete`|`DELETE`|Removes the specified row from the database table|

Estas operaciones estan vinculadas con la conocida como CRUD APIs, pero tambien son comunes en las APIs REST y otros tipos de API

## READ

Lo primero que haremos la interactuar con una API será leer los datos, Como hemos mencionado antes, podemos simplemente especificar el nombre de la tabla tras la API, ej. /city y despues especificar el termino de busqueda ej. /london

```shell
javikugan@htb[/htb]$ curl http://<SERVER_IP>:<PORT>/api.php/city/london

[{"city_name":"London","country_name":"(UK)"}]
```

vemos que el formato lo ha devuelto en un string JSON, podemos formatearlo apropiadamene, con la utilidad jq, q lo formateara apropiadamente, y podemos silenciar cualquier outpput innecesario con - s 

```shell
javikugan@htb[/htb]$ curl -s http://<SERVER_IP>:<PORT>/api.php/city/london | jq

[
  {
    "city_name": "London",
    "country_name": "(UK)"
  }
]
```

**SI PASAMOS UN STRING VACIO, SACAMOS TODAS LAS ENTRADAS DE LA TABLA**

## CREATE

Para añadir una nueva entrada a la tabla simplemente debemos usar el método `POST` y cambiar la cabecera de `Content-Type: application/json` y pasarle con el parámetro -d los datos de la nueva fila.

```shell
javikugan@htb[/htb]$ curl -X POST http://<SERVER_IP>:<PORT>/api.php/city/ -d '{"city_name":"HTB_City", "country_name":"HTB"}' -H 'Content-Type: application/json'
```

## UPDATE 

Para actualizar una entrada entera de la tabla simplemente debemos usar el método `PUT` (En caso de querer modificar solo un campo de la entrada debemos usar el método `PATCH`, para saber cual usar correctamente usaremos el método `OPTIONS` para saber cual es mas apropiado).

Usar `PUT` es muy similar a `POST` en este caso, lo único que debemos especificar la entidad a modificar en la url.

```shell
javikugan@htb[/htb]$ curl -X PUT http://<SERVER_IP>:<PORT>/api.php/city/london -d '{"city_name":"New_HTB_City", "country_name":"HTB"}' -H 'Content-Type: application/json'
```

## DELETE

Para eliminar un elemento de la tabla simplemente debemos usar el método `DELETE` especificando en la URL el elemento a borrar.

```shell
javikugan@htb[/htb]$ curl -X DELETE http://<SERVER_IP>:<PORT>/api.php/city/New_HTB_City
```



TERMINAR DE DOCUMENTAR

