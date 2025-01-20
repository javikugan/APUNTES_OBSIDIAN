
### The /lucky.php page has a button that appears to be disabled. Try to enable the button, and then click it to get the flag.

Para Realizar este apartado simplemente realizo una request normal y modifico la response para que el boton este habilitado ![[Pasted image 20250120140139.png]]

Una vez hecho capturo la request que hace el boton, la mando al requester y la repito varias veces hasta que obtengo la flag (truquito: observar el Content-Length hasta que sea distinto)

**HTB{d154bl3d_bu770n5_w0n7_570p_m3}**

The /admin.php page uses a cookie that has been encoded multiple times. Try to decode the cookie until you get a value with 31-characters. Submit the value as the answer.

Capturas la cookie de la response  ![[Pasted image 20250120140743.png]]
y al pasar por hex decode y luego un base64 se nos queda esto:

**3dac93b8cd250aa8c1a36fffc79a17a**

esto de aqui parece una cookie md5 a la que le falta un caracter por lo que vamos a tratar de fuzzearlo

![[Pasted image 20250120141947.png]]

Hay que tener en cuenta antes de fuzzear que el parametro hay q encodearlo en base 64 y luego a hex
