![[Pasted image 20250108194242.png]]

Comenzamos haciendo un escaneo de puertos con #RustScan
![[Pasted image 20250108194328.png]]
podemos observar que tiene 3 puertos abiertos, y llama la atencion el puerto 37370 el cual no sabemos que servicio es. 

Lanzando un gobuster al puerto 80 podemos ver que podemos encontrar un subdirectorio /static, 
![[Pasted image 20250108201609.png]]
el término **`static`** se refiere generalmente a un directorio o carpeta que contiene archivos estáticos utilizados por el sitio web. Estos archivos no son generados dinámicamente por el servidor; en cambio, son recursos predefinidos que se entregan al navegador tal cual están almacenados en el servidor.

por lo que puede ser intreresante hacer un ffuf a el directorio, a ver si contiene algun archivo interesante.

![[Pasted image 20250108202003.png]]
Vemos que hay bastantes archivos que nos pueden interesar aqui, vamos a probar a ver que contienen

---

![[Pasted image 20250108202029.png]]
**00.txt**

--- 

Parece que todo son fotos excepto el 00 que es un archivo de texto

![[Pasted image 20250108203333.png]]