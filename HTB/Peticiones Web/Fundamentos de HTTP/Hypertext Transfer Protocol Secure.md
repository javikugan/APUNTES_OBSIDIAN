## HTTPS

Todos los datos enviados en una solicitud HTTP se en enviaban en texto plano sin cifrar por lo que eran muy susceptibles a un Man in the Middle, para eso llega HTTPS que soluciona el problema encriptando las comunicaciones
una comparación de una captura en Wireshark

HTTP
![[Pasted image 20240331141222.png]]

HTTPS
![[Pasted image 20240331141301.png]]

## HTTPS FLOW
![[Pasted image 20240331141837.png]]
Podemos ver que si se realiza una petición http a un servidor https el servidor transada la petición del puerto 80 al 443 lo hace con el codigo de respuesta `301 Moved Permanently`, primero el cliente envía un paquete de bienvenida y el servido le responde con otro paquete  de bienvenida intercambiando los certificados SSL y se genera un handshake

```
nota: Un atacante puede ser capaz de degradar el https a un http haciendo que los datos se transfieran de manera clara creando uun proxy MITM que haga de intermedirario de comunicaciones
```

## cURL en HTTPS

CURL debería ser capaz de intercambiar certificados SSL sin problema de manera automática, en caso de que el certificado del host destino es invalido la mayoría de aplicaciones avisaran para evitar esos riesgos de un MITM, para evitar ese checkeo de SSL podemos usar la Flag `-k`

