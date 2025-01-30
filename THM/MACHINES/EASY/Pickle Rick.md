
This Rick and Morty-themed challenge requires you to exploit a web server and find three ingredients to help Rick make his potion and transform himself back into a human from a pickle.

Deploy the virtual machine on this task and explore the web application:


## 1. Escaneo de Puertos

Hacemos un nmap para escanear los puertos abiertos que tiene la maquina 

![[Pasted image 20241230170008.png]] Como podemos observar tiene los puertos 22 ssh y 80 http abiertos, tras comprobar si se puede hacer conexion mediante ssh comprobamos q no (funciona mediante private keys), por lo que tratamos de acceder a la pagina web

## 2. Accedemos a la web


![[Pasted image 20241230170355.png]]

podemos observar que se puede acceder a un idex.html, si inspeccionamos la pagina podemos observar una credencial comprometida:

![[Pasted image 20241230170456.png]]

lanzamos un gobuster para identificar posibles subdominios y subdirectorios.
![[Pasted image 20241230170613.png]]
Debemos añadir la extension -x con posibles extensiones a buscar para poder ampliar la busqueda

![[Pasted image 20241230170707.png]]

Visitando robots.txt, podemos observar una posible contraseña:

![[Pasted image 20241230170809.png]]
Por lo que hasta ahora tenemos que

**User : R1ckRul3s**
**Pass : Wubbalubbadubdub**

Vamos a visitar el /login.php y probar las credenciales

![[Pasted image 20241230171014.png]]

![[Pasted image 20241230171031.png]]

haciendo un ls podemos ver lo siguiente
![[Pasted image 20241230171110.png]]

si usamos cat nos dice que esta bloqueado por lo que usamos el comando 
reverse php shell, sudo -l, sudo su, estan en /root y /home/rick


