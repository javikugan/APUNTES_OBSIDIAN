## Filosofía

**Todo es un archivo**: Todos los archivos de configuración están almacenados en uno o varios archivos

**Programas simples con un propósito**: Linux ofrece muchas herramientas simples que podemos combinar para soluciones complejas

## Componentes

**Bootloader**: Pieza de codigo encargada del proceso de arranque del sistema operativo

**OS** **Kernel**: El kernel es el componente principal del de un sistema operativo, controla los recursos para los sistemas de entrada/salida a nivel Hardware

**Daemon**: Los servicios en segundo plano de Linux se llaman Daemon su propósito es asegurar que las funciones clave se ejecutan correctamente

**OS Shell**: Es la interfaz entre el sistema operativo y el usuario. Esta interfaz permite al usuario decirle al OS que hacer

**Servidor Grafico**: Provee de un subsistema grafico llamado x o x-server que permite a programas gráficos correr localmente o de manera remota en el x-server

**Gestor de Ventanas**: También conocido como GUI, hay muchas opciones como GNOME, KDE, MATE, un entorno de escritorio suele tener varias aplicaciones incluyendo Navegadores Web y de Archivos


## Arquitectura de Linux

**Hardware**: Dispositivos periféricos tales como la RAM, El disco duro, CPU, y otros.

**Kernel**: Núcleo del Sistema operativo Linux cuya funcione s virtualizar y controlar los recursos hardware comunes como la CPU, la memoria local, los datos accedidos, etc...., El kernel le da a cada proceso sus propios recursos virtuales y previene conflictos entre distintos procesos.

**Shell**: La interfaz de comandos donde el usuario introduce comandos para ejecutar las funciones del kernel

## Jerarquía del sistema de Archivos

El sistema operativo Linux esta estructurado en una jerarquía con forma de árbol


| `/`      | Es el directorio raíz del sistema de archivos y contiene todos los archivos requeridos para arrancar el sistema                     |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `/bin`   | Contiene los .bin esenciales de los comandos                                                                                        |
| `/boot`  | Consiste de un bootloader, el ejecutable del kernel y ficheros necesarios para arrancar el sistema operativo                        |
| `/dev`   | Contiene los ficheros de dispositivos para acceder a todo el hardware conectado al dispositivo                                      |
| `/etc`   | Archivos de configuración local, Los de las aplicaciones instaladas se deben guardar aqui                                           |
| `/home`  | Cada Usuario de sistema tiene su propio Subdirectorio de archivos                                                                   |
| `/lib`   | Ficheros de librerias compartidas que contienen archivos necesarios para el arranque                                                |
| `/media` | Los dispositivos externos como por ejemplo un USB son montados aqui                                                                 |
| `/mnt`   | Punto de montado comun para los sistemas de archivos regulares                                                                      |
| `/opt`   | Archivos opcionales, se pueden almacenar herramientas de terceros                                                                   |
| `/root`  | El directorio home de el usuario 'root'                                                                                             |
| `/sbin`  | Contiene ficheros necesarios para la ejecución del sistema (binary system files).                                                   |
| `/tmp`   | Es un directorio que usan los programas para almacenar archivos temporales                                                          |
| `/usr`   | Contains executables, libraries, man files, etc.                                                                                    |
| `/var`   | This directory contains variable data files such as log files, email in-boxes, web application related files, cron files, and more. |

