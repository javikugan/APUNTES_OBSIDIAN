HTTP soporta varios metodos para acceder a un recurso, estos metodos se usan para decirle al servidor com procesar el `REQUEST`
que hemos enviado y como responder

# Métodos `REQUEST`

| **Método** | **Descripción**                                                                                                                                                                         |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GET`      | Solicita un recurso específico, se le puede añadir datos adicionales mediante cadenas de consulta en la URL (ej. `?param=value`).                                                       |
| `POST`     | Envía datos al servidor. Maneja varios tipos de input, dede PDF hasta otras formas de archivos binarios, estos datos se adjuntan en el cuerpo de la `REQUEST` después de las cabeceras. |
| `HEAD`     | Solicita las cabeceras que se devolverian en caso de hacer un GET.                                                                                                                      |
| `PUT`      | Crea recursos nuevos en el servidor, puede llevar a subir recursos maliciosos                                                                                                           |
| `DELETE`   | Borra un recurso existente en el servidor, puede llevar a ataques DoS, borrando archivos clave del servidor                                                                             |
| `OPTIONS`  | Devuelve información sobre el servidor, como los métodos que se pueden usar en este                                                                                                     |
| `PATCH`    | Aplica modificaciones parciales a un recurso de una localización específica.                                                                                                            |
# Códigos de Respuesta

| **Type** | **Description**                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| `1xx`    | Provee información y no afecta al procesamiento de la `REQUEST`.                                             |
| `2xx`    | Se da cuando se realiza una `REQUEST` con éxito.                                                             |
| `3xx`    | Cuando el servidor redirecciona al cliente                                                                   |
| `4xx`    | Significa que el cliente ha hecho algo mal. Por ejemplo pedir un recurso q no existe o enviar un mal formato |
| `5xx`    | Se devuelve cuando hay un problema con el servidor `HTTP`                                                    |

Los mas comunes son los siguientes: 

|**Code**|**Description**|
|---|---|
|`200 OK`|Returned on a successful request, and the response body usually contains the requested resource.|
|`302 Found`|Redirects the client to another URL. For example, redirecting the user to their dashboard after a successful login.|
|`400 Bad Request`|Returned on encountering malformed requests such as requests with missing line terminators.|
|`403 Forbidden`|Signifies that the client doesn't have appropriate access to the resource. It can also be returned when the server detects malicious input from the user.|
|`404 Not Found`|Returned when the client requests a resource that doesn't exist on the server.|
|`500 Internal Server Error`|Returned when the server cannot process the request.|
