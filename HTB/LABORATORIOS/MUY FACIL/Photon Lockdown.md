We've located the adversary's location and must now secure access to their Optical Network Terminal to disable their internet connection. Fortunately, we've obtained a copy of the device's firmware, which is suspected to contain hardcoded credentials. Can you extract the password from it?


## 1. Primer Paso

Descargamos el archivo q nos otorga Hack The Box, y podemos comprobar que es un zip, tras descomprimirlo podemos ver que se nos quedan 3 archivos, pero el importante es el siguiente

![[Pasted image 20240402004928.png]]

podemos ver que es un archivo **Squashfs**, (Un backup de un S.O linux) y tras una busqueda en google podemos ver que 7zip maneja este tipo de archivos

## 2. Segundo Paso 

Tras descomprimir el archivo con `7z e rootfs` podemos observar un **sistema de archivos linux**

![[Pasted image 20240402005242.png]]

## 3. Tercer Paso (FINAL)

Observamos que hay un archivo *XML* que podemos leer

![[Pasted image 20240402005430.png]]

Tras analizar el archivo podemos observar que hay un campo **SUSER_PASSWORD** que contiene en su valor la flag: **HTB{N0w_Y0u_C4n_L0g1n}** 

![[Pasted image 20240402005709.png]]




