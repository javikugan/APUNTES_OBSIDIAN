
Systemd es un servicio que se usa en linux, para empezar procesos o scripts en un tiempo especifico, para ello debemosÑ

1. Crear un temporizador
2. Crear un servicio a ejecutar
3. Activar el Temporizador

## Crear un temporizador

```shell
javikugan@htb[/htb]$ sudo mkdir /etc/systemd/system/mytimer.timer.d
javikugan@htb[/htb]$ sudo vim /etc/systemd/system/mytimer.timer
```

#### Mytimer.timer

Code: txt

```txt
[Unit]
Description=My Timer

[Timer]
OnBootSec=3min
OnUnitActiveSec=1hour

[Install]
WantedBy=timers.target
```

## Crear un Servivio

  Task Scheduling

```shell-session
javikugan@htb[/htb]$ sudo vim /etc/systemd/system/mytimer.service
```

## Iniciar el Temporizador


```shell-session
javikugan@htb[/htb]$ sudo systemctl start mytimer.service
javikugan@htb[/htb]$ sudo systemctl enable mytimer.service
```