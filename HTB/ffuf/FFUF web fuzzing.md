
USING WORDLIST FROM SecList
## Directory Fuzzing

As we can see from the example above, the main two options are `-w` for wordlists and `-u` for the URL. We can assign a wordlist to a keyword to refer to it where we want to fuzz. For example, we can pick our wordlist and assign the keyword `FUZZ` to it by adding `:FUZZ` after it:

  Directory Fuzzing

```shell-session
javikugan@htb[/htb]$ ffuf -w /opt/useful/seclists/Discovery/Web-Content/directory-list-2.3-small.txt:FUZZ
```

Next, as we want to be fuzzing for web directories, we can place the `FUZZ` keyword where the directory would be within our URL, with:

  Directory Fuzzing

```shell-session
javikugan@htb[/htb]$ ffuf -w <SNIP> -u http://SERVER_IP:PORT/FUZZ
```
# Recursive Fuzzing

---

So far, we have been fuzzing for directories, then going under these directories, and then fuzzing for files. However, if we had dozens of directories, each with their own subdirectories and files, this would take a very long time to complete. To be able to automate this, we will utilize what is known as `recursive fuzzing`.

---

## Recursive Flags

When we scan recursively, it automatically starts another scan under any newly identified directories that may have on their pages until it has fuzzed the main website and all of its subdirectories.

Some websites may have a big tree of sub-directories, like `/login/user/content/uploads/...etc`, and this will expand the scanning tree and may take a very long time to scan them all. This is why it is always advised to specify a `depth` to our recursive scan, such that it will not scan directories that are deeper than that depth. Once we fuzz the first directories, we can then pick the most interesting directories and run another scan to direct our scan better.

In `ffuf`, we can enable recursive scanning with the `-recursion` flag, and we can specify the depth with the `-recursion-depth` flag. If we specify `-recursion-depth 1`, it will only fuzz the main directories and their direct sub-directories. If any sub-sub-directories are identified (like `/login/user`, it will not fuzz them for pages). When using recursion in `ffuf`, we can specify our extension with `-e .php`

Note: we can still use `.php` as our page extension, as these extensions are usually site-wide.

Finally, we will also add the flag `-v` to output the full URLs. Otherwise, it may be difficult to tell which `.php` file lies under which directory.

```shell-session
javikugan@htb[/htb]$ ffuf -w /opt/useful/seclists/Discovery/Web-Content/directory-list-2.3-small.txt:FUZZ -u http://SERVER_IP:PORT/FUZZ -recursion -recursion-depth 1 -e .php -v
```

# Sub-domain Fuzzing

---

In this section, we will learn how to use `ffuf` to identify sub-domains (i.e., `*.website.com`) for any website.

---

## Sub-domains

A sub-domain is any website underlying another domain. For example, `https://photos.google.com` is the `photos` sub-domain of `google.com`.

In this case, we are simply checking different websites to see if they exist by checking if they have a public DNS record that would redirect us to a working server IP. So, let's run a scan and see if we get any hits. Before we can start our scan, we need two things:

- A `wordlist`
- A `target`

Luckily for us, in the `SecLists` repo, there is a specific section for sub-domain wordlists, consisting of common words usually used for sub-domains. We can find it in `/opt/useful/seclists/Discovery/DNS/`. In our case, we would be using a shorter wordlist, which is `subdomains-top1million-5000.txt`. If we want to extend our scan, we can pick a larger list.

```shell-session
ffuf -w /opt/useful/seclists/Discovery/DNS/subdomains-top1million-5000.txt:FUZZ -u https://FUZZ.inlanefreight.com/
```

# Vhost Fuzzing

---

As we saw in the previous section, we were able to fuzz public sub-domains using public DNS records. However, when it came to fuzzing sub-domains that do not have a public DNS record or sub-domains under websites that are not public, we could not use the same method. In this section, we will learn how to do that with `Vhost Fuzzing`.

---

## Vhosts vs. Sub-domains

The key difference between VHosts and sub-domains is that a VHost is basically a 'sub-domain' served on the same server and has the same IP, such that a single IP could be serving two or more different websites.

`VHosts may or may not have public DNS records.`

In many cases, many websites would actually have sub-domains that are not public and will not publish them in public DNS records, and hence if we visit them in a browser, we would fail to connect, as the public DNS would not know their IP. Once again, if we use the `sub-domain fuzzing`, we would only be able to identify public sub-domains but will not identify any sub-domains that are not public.

This is where we utilize `VHosts Fuzzing` on an IP we already have. We will run a scan and test for scans on the same IP, and then we will be able to identify both public and non-public sub-domains and VHosts.

---

## Vhosts Fuzzing

To scan for VHosts, without manually adding the entire wordlist to our `/etc/hosts`, we will be fuzzing HTTP headers, specifically the `Host:` header. To do that, we can use the `-H` flag to specify a header and will use the `FUZZ` keyword within it, as follows:

```shell-session
javikugan@htb[/htb]$ ffuf -w /opt/useful/seclists/Discovery/DNS/subdomains-top1million-5000.txt:FUZZ -u http://academy.htb:PORT/ -H 'Host: FUZZ.academy.htb'
```


### Parameter Fuzzing: GET y POST Requests

La técnica de fuzzing de parámetros consiste en identificar claves no documentadas que pueden ser utilizadas en una URL o como datos de una solicitud HTTP para acceder a funcionalidades ocultas o no probadas de una aplicación web. Aquí se detallan los pasos clave para fuzzing en solicitudes **GET** y **POST** usando `ffuf`.

---

### **Fuzzing de Parámetros con Solicitudes GET**

1. **Descripción**:
    
    - Los parámetros GET se envían directamente en la URL después de un `?`.
    - Ejemplo:
        
        bash
        
        CopiarEditar
        
        `http://admin.academy.htb:PORT/admin/admin.php?param1=key`
        
2. **Uso de `ffuf` para Fuzzing**:
    
    - Reemplazar el nombre del parámetro con `FUZZ`:
        
        bash
        
        CopiarEditar
        
        `ffuf -w /opt/useful/seclists/Discovery/Web-Content/burp-parameter-names.txt:FUZZ \ -u http://admin.academy.htb:PORT/admin/admin.php?FUZZ=key -fs xxx`
        
    - **Opciones importantes**:
        
        - `-w`: Ruta del wordlist con nombres potenciales de parámetros.
        - `-u`: URL con `FUZZ` como marcador para el parámetro.
        - `-fs xxx`: Filtrar respuestas basadas en tamaño (`xxx`).
3. **Resultados**:
    
    - Se recibe un hit:
        
        bash
        
        CopiarEditar
        
        `http://admin.academy.htb:PORT/admin/admin.php?REDACTED=key`
        
    - Sin embargo, este parámetro parece estar en desuso.

---

### **Fuzzing de Parámetros con Solicitudes POST**

1. **Descripción**:
    
    - Los parámetros POST no van en la URL, sino en el cuerpo de la solicitud HTTP.
    - Requieren el encabezado `Content-Type` con valor `application/x-www-form-urlencoded`.
2. **Uso de `ffuf` para Fuzzing**:
    
    - Comando para fuzzing en solicitudes POST:
        
        bash
        
        CopiarEditar
        
        `ffuf -w /opt/useful/seclists/Discovery/Web-Content/burp-parameter-names.txt:FUZZ \ -u http://admin.academy.htb:PORT/admin/admin.php \ -X POST -d 'FUZZ=key' \ -H 'Content-Type: application/x-www-form-urlencoded' -fs xxx`
        
    - **Opciones importantes**:
        
        - `-X POST`: Especifica que la solicitud es POST.
        - `-d 'FUZZ=key'`: Indica que `FUZZ` será reemplazado por valores del wordlist en el cuerpo.
        - `-H`: Establece el encabezado para la codificación de datos.
3. **Resultados**:
    
    - Se obtienen hits:
        - Uno ya identificado en el fuzzing GET.
        - Un nuevo parámetro: `id`.
4. **Prueba del Parámetro `id`**:
    
    - Se realiza una solicitud POST con `curl`:
        
        bash
        
        CopiarEditar
        
        `curl http://admin.academy.htb:PORT/admin/admin.php \ -X POST -d 'id=key' \ -H 'Content-Type: application/x-www-form-urlencoded'`
        
    - Respuesta:
        
        php
        
        CopiarEditar
        
        `<div class='center'><p>Invalid id!</p></div>`
        
    - Indica que el parámetro `id` es reconocido, pero el valor no es válido.
        

---

### **Consejos Prácticos**

- **Wordlists**: Usar listas especializadas, como las de [SecLists](https://github.com/danielmiessler/SecLists).
- **Filtro de Respuestas**: Filtrar resultados para evitar ruido, utilizando criterios como tamaño (`-fs`) o estado HTTP (`-mc`).
- **Pruebas Adicionales**:
    - Revisar parámetros identificados para vulnerabilidades comunes (SQLi, XSS, etc.).
    - Usar herramientas adicionales para validación como `curl` o `Burp Suite`.

# Value Fuzzing
### **1. Creación de Wordlist Personalizado**

Algunos parámetros, como `id` o `username`, requieren valores específicos. Si no existe un wordlist predefinido, podemos crear uno personalizado.

#### **Ejemplo: Wordlist de IDs Secuenciales**

- Crear un archivo con números del `1` al `1000` usando Bash:
    
    bash
    
    CopiarEditar
    
    `for i in $(seq 1 1000); do echo $i >> ids.txt; done`
    
- Verificar el contenido:
    
    bash
    
    CopiarEditar
    
    `cat ids.txt`
    
    Resultado:
    
    python
    
    CopiarEditar
    
    `1 2 3 ... 1000`
    

---

### **2. Fuzzing de Valores con `ffuf`**

Usando el archivo `ids.txt` como wordlist, podemos realizar fuzzing en el valor del parámetro.

#### **Comando de Fuzzing**

bash

CopiarEditar

`ffuf -w ids.txt:FUZZ \ -u http://admin.academy.htb:PORT/admin/admin.php \ -X POST -d 'id=FUZZ' \ -H 'Content-Type: application/x-www-form-urlencoded' \ -fs xxx`

#### **Descripción del Comando**

- **`-w ids.txt:FUZZ`**: Define el archivo `ids.txt` como wordlist, reemplazando `FUZZ` por cada línea del archivo.
- **`-u`**: Especifica la URL objetivo.
- **`-X POST`**: Indica que la solicitud es POST.
- **`-d 'id=FUZZ'`**: Coloca `FUZZ` como el valor del parámetro `id`.
- **`-H 'Content-Type: application/x-www-form-urlencoded'`**: Establece el encabezado necesario para el envío de datos POST.
- **`-fs xxx`**: Filtra respuestas basadas en el tamaño.

---

### **3. Interpretación de Resultados**

Al ejecutar el comando, obtendremos líneas similares a esta:

yaml

CopiarEditar

`[Status: xxx, Size: xxx, Words: xxx, Lines: xxx]`

- Un hit indica un valor potencialmente válido para el parámetro.

---

### **4. Verificación del Valor Encontrado**

Una vez identificado el valor correcto, puedes probarlo usando `curl` para confirmar la respuesta esperada.

#### **Ejemplo de Prueba con `curl`**

bash

CopiarEditar

`curl http://admin.academy.htb:PORT/admin/admin.php \ -X POST -d 'id=VALUE' \ -H 'Content-Type: application/x-www-form-urlencoded'`

- Sustituye `VALUE` con el valor identificado durante el fuzzing.

---

### **Consejos Prácticos**

- **Filtros Adicionales**:
    - Usa `-mc` para incluir solo códigos HTTP relevantes (e.g., `200,302`).
    - Ajusta `-fs` para filtrar respuestas basadas en tamaño.
- **Automatización**:
    - Usa scripts en Bash o Python para generar wordlists más complejas si es necesario.

# Skill Assesment

Comenzamos haciendo una enumeracion de dominios del VHOST mediante ![[Pasted image 20250117011316.png]]
filtrando las respuestas erroneas(size 985 en este caso)

podemos ver que tiene de subdominios archive, test y faculty

ahora vamos a realizar un escaneo de extensiones para ver q extensiones aceptan los dominios para ello **no olvidarse de a;adirlos a /etc/hosts** 

![[Pasted image 20250117012002.png]]

tras hacer el escaneo podemos ver q acecpta las extensiones .php .phps y php7

ahora vamos a hacer un scaneo recursivo para ver posibles directorios

![[Pasted image 20250117014852.png]]

y vemos uno que es linux-security.php7, visitamos la pagina y podemos ver q no tenemos acceso
![[Pasted image 20250117114335.png]]

por lo que procedemos a hacer un parameter fuzzing

con el fuzzin de los parametros GET solo obtenemos el parametro user, que si hacemos una request nos dice que esta deprecated, pero con el de post ![[Pasted image 20250117122248.png]]

podemos observar que devuelve tanto user como username, y este segundo no esta deprecated

ahora hacermos un value fuzzing y observamos que nos devuelve tres usuarios Harry

![[Pasted image 20250117121817.png]]

Una vez hecho eso podemos ver que nos devuelve la flag
![[Pasted image 20250117123057.png]]

HTB{w3b_fuzz1n6_m4573r}
