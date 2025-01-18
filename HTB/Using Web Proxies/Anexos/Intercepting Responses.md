Interceptación de Respuestas HTTP

---

#### **Concepto**

Interceptar respuestas HTTP del servidor antes de que lleguen al navegador permite modificar cómo se renderizan las páginas web. Esto es útil para:

- **Habilitar campos deshabilitados.**
- **Mostrar campos ocultos.**
- **Modificar restricciones de entrada.**

Estas acciones simplifican pruebas de penetración en aplicaciones web al manipular directamente el contenido recibido.

---

#### **Interceptar Respuestas**

**Burp Suite**

1. Activa la opción de interceptar respuestas en **Proxy > Options > Intercept Server Responses**.
2. Activa la interceptación de peticiones y actualiza la página con `[CTRL+SHIFT+R]` para forzar un refresco completo.
3. Intercepta la petición, haz clic en **Forward** y revisa la respuesta interceptada.
4. Modifica el contenido, por ejemplo, cambia:
    
    ```html
    <input type="number" maxlength="3">
    ```
    
    por:
    
    ```html
    <input type="text" maxlength="100">
    ```
    
5. Haz clic en **Forward** y verifica en el navegador los cambios aplicados.

**ZAP**

1. Intercepta la respuesta usando el botón **Step** después de interceptar la petición.
2. Realiza los mismos cambios en la respuesta interceptada y haz clic en **Continue** para enviar la respuesta modificada al navegador.
3. Alternativa: Usa el HUD y haz clic en el botón de **Mostrar/Habilitar campos** (icono de bombilla) para:
    - Habilitar campos deshabilitados.
    - Mostrar campos ocultos.
    - Interactuar directamente con los campos sin interceptar la respuesta.

> **Tip:** En ZAP, también puedes habilitar un botón de **Comentarios** para identificar y analizar comentarios en el código fuente, lo que puede revelar información útil.

---

#### **Automatización de Cambios**

Tanto Burp como ZAP permiten automatizar modificaciones en las respuestas:

- **Burp:** Habilita **Proxy > Options > Response Modification** y selecciona opciones como "Unhide hidden form fields".
- **ZAP:** Usa scripts o reglas predefinidas para aplicar cambios automáticos en las respuestas.

---

#### **Ventajas en Pruebas de Penetración**

- Evitar restricciones impuestas por el cliente.
- Simplificar la interacción con campos deshabilitados u ocultos.
- Reducir el tiempo necesario para probar entradas maliciosas.
- Aumentar la visibilidad de información que puede ser útil para el análisis.

---

#### **Ejercicio Propuesto**

1. Usa Burp o ZAP para interceptar la respuesta de una página.
2. Modifica los campos de entrada para eliminar restricciones.
3. Ingresa el payload `;ls;` directamente en el navegador y observa la respuesta del servidor.

> **Nota:** En el próximo módulo se explorarán métodos para automatizar estas modificaciones, reduciendo la necesidad de cambios manuales frecuentes.