![[Pasted image 20250121173556.png]]
Hacemos un scan de subdominios y nos muestra el siguiente subdominio
web1337.inlanefreight.htb:53430
si repetimos el fuzz de subdominios podemos encontrar el siguiente tambien
dev.web1337.inlanefreight.htb:53430 vamos a enumerar directorios

si hacemos un directory scan podemos encontrar web1337.inlanefreight.htb:53430/admin_h1dd3n/ que nos da la api key 
e963d863ee0e82ba7080fbf558ca0d3f
![[Pasted image 20250121180337.png]]
Usando Spider crawl
1337testing@inlanefreight.htb
ba988b835be4aa97d068941dc852ff33