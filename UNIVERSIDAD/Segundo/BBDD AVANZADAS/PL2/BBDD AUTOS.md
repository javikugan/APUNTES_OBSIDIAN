SELECT COUNT(*) FROM automoviles WHERE automoviles. proveedor = 'proveedor500' AND automoviles.bastidor  NOT IN (SELECT bastidor_auto FROM compras);

![[WhatsApp Image 2023-04-10 at 12.03.56.jpg]]
![[Pasted image 20230410170100.png]]

SELECT modelo FROM automoviles INNER JOIN compras ON automoviles.bastidor = compras.bastidor_auto WHERE automoviles.precio > 50000 AND compras.fecha >= '2022-05-01' AND compras.fecha < '2022-06-01';

![[WhatsApp Image 2023-04-10 at 12.16.40.jpg]]
![[Pasted image 20230410170119.png]]


SELECT SUM(precio) FROM automoviles INNER JOIN compras ON automoviles.bastidor compras.bastidor_auto INNER JOIN clientes ON compras.dni_cli clientes.dni WHERE (automoviles.proveedor = 'proveedor300' OR automoviles.proveedor = 'proveedor500') AND clientes.telef ono BETWEEN 7000000 AND 9000000 AND compras. fecha >= '2022-02-01' AND compras. fecha < '2022-09-01';

![[WhatsApp Image 2023-04-10 at 12.32.20.jpg]]

![[Pasted image 20230410181120.png]]
