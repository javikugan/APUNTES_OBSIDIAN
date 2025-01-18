# HTTP

Hoy en día la mayoría de aplicaciones, tanto web como móviles, hacen la mayoría de sus comunicaciones con el protocolo HTTP, El termino hipertexto se refiere a un texto q contiene links a otros recursos y textos q los lectores pueden interpretar fácilmente.
La comunicación HTTP consiste en un cliente y servidor donde el el cliente le pide al servidor un recurso, el servidor procesa la solicitud y devuelve el recurso solicitado,  usa como puerto de serie el `puerto 80`, siempre usamos la misma solicitud cuando queremos acceder a internet, Introducimos un `Fully Qualified Domain Name` (`FQDN`) como una URL para llegar al sitio deseado

## URL

![[Pasted image 20240331124854.png]]
Aqui está lo que significa cada componente:

| **Component**  | **Example**                    | **Description**                                                                                                                                                               |
| -------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Scheme`       | `http://` `https://` ` ftp://` | Identificador del protocolo que estamos usando (`://`)                                                                                                                        |
| `User Info`    | `admin:password@`              | This is an optional component that contains the credentials (separated by a colon `:`) used to authenticate to the host, and is separated from the host with an at sign (`@`) |
| `Host`         | `inlanefreight.com`            | Se refiere a la localización de la web                                                                                                                                        |
| `Port`         | `:80`                          | Puerto al que deseamos conectarnos, de serie el http tiene el `80` y el https el `443`                                                                                        |
| `Path`         | `/dashboard.php`               | Apunta al recurso al que estamos accediendo. si no hay recurso nos devuelve el índice (e.g. `index.html`).                                                                    |
| `Query String` | `?login=true`                  | El query empieza con una interrogacion (`?`), y consiste de un parametro y un valor. varios parametros se pueden separar con un aspersand`&`).                                |
| `Fragments`    | `#status`                      | Fragments are processed by the browsers on the client-side to locate sections within the primary resource (e.g. a header or section on the page).                             |

No todos los componentes son necesarios para acceder a un recurso. Con el scheme y el host deberia valer en la mayoria de los casos

## HTTP Flow

![[Pasted image 20240331131002.png]]
El diagrama de arriba representa la anatomía de una solicitud http a un nivel muy alto
	`Nota: cuando hacemos una solicitud para resolver una url primero consultamos si ya conocemos el dominio en etc/host`
	
## cURL (client URL)

Es una herramienta de comandos y librería que admite http entre otros protocolos, esto la convierte en una buena candidata para scripts de automatización haciéndola esencial para mandar varios tipos de solicitudes web a través del CLI, lo que es necesario para varios web pentest

podemos enviar request de HTTP basicas a cualquier URL con ese comando:

```bash
javikugan@htb[/htb]$ curl inlanefreight.com

<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>

```
la solicitud no renderiza el codigo HTML/JavaScript/CSS y lo imprime en su formato RAW

Puede que también necesitemos descargar una pagina o archivo usando la Flag `-O` 

```bash
javikugan@htb[/htb]$ curl -O inlanefreight.com/index.html
```

Esto descargaría el archivo de la url dada 

```shell
javikugan@htb[/htb]$ curl -h
Usage: curl [options...] <url>
 -d, --data <data>   HTTP POST data
 -h, --help <category> Get help for commands
 -i, --include       Include protocol response headers in the output
 -o, --output <file> Write to file instead of stdout
 -O, --remote-name   Write output to a file named as the remote file
 -s, --silent        Silent mode
 -u, --user <user:password> Server user and password
 -A, --user-agent <name> Send User-Agent <name> to server
 -v, --verbose       Make the operation more talkative
```

para la prueba del apartado simplemente hacemos un curl y nos devuelve la Flag

![[Pasted image 20240331140704.png]]
