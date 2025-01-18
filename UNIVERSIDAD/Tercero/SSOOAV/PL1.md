

1. **¿Están las variables locales en la misma zona de memoria que las variables globales?**

   Las variables locales no están en la misma zona de memoria que las variables globales. Las variables globales se almacenan en la sección de datos (data segment) del programa, mientras que las variables locales se almacenan en la pila (stack).

2. **¿Y los parámetros `argc` y `argv`? ¿Están cerca de las variables globales y/o cerca de las locales?**

   Los parámetros `argc` y `argv` son variables locales de la función `main`, por lo que se almacenan en la pila junto con otras variables locales de `main`, no cerca de las variables globales.

3. **¿Qué valor tienen las variables globales a las que el programa no asignó un valor inicial?**

   Las variables globales que no se inicializan explícitamente se inicializan a cero por el sistema. En este caso, `int b` y `float d` tendrán valores iniciales de 0 y 0.0, respectivamente.

4. **¿Y las locales?**

   Las variables locales que no se inicializan explícitamente contienen valores indeterminados (basura) ya que no se les asigna un valor por defecto.

5. **¿En qué orden están las variables globales entre sí? ¿Están en el mismo orden que en el código fuente? ¿Tiene algo que ver el orden con el hecho de que unas estén inicializadas y otras no?**

   Las variables globales generalmente están en el mismo orden que en el código fuente. Sin embargo, el orden específico en memoria puede depender del compilador y del enlazador, aunque usualmente las variables inicializadas se agrupan juntas y las no inicializadas se agrupan en otra sección.

6. **¿En qué direcciones de memoria se encuentran las funciones? ¿Hay algún otro elemento del programa en esa zona de la memoria?**

   Las funciones se encuentran en la sección de código (text segment) de la memoria. Esta sección es distinta de donde se almacenan las variables globales y locales.

7. **¿En qué dirección está `k` (variable global perteneciente a `mem_dinamica.c`)? ¿Está junto a las variables globales de `experimento_mem.c` o está en una zona separada?**

   La variable `k` se encuentra en la misma región de memoria que otras variables globales, ya que todas las variables globales se agrupan en la sección de datos del programa.

8. **Observe la dirección de los parámetros pasados a las funciones. ¿Guardan alguna relación con las direcciones de otros elementos del programa?**

   Los parámetros pasados a las funciones se almacenan en la pila y están cerca de las variables locales de esa función. No tienen una relación directa con las direcciones de variables globales o funciones, que están en secciones separadas.

9. **Observe las direcciones de las variables locales de las diferentes funciones. ¿Hay algún caso en que dos variables de diferentes funciones ocupan la misma posición en la memoria? ¿Cómo se explica? ¿Puede esto ocasionar algún problema?**

   Sí, puede ocurrir que las variables locales de diferentes funciones ocupen la misma posición en la memoria, ya que estas se almacenan en la pila y la memoria ocupada por una función se libera cuando esta termina, permitiendo que otra función reutilice la misma área de memoria. Esto no ocasiona problemas mientras las funciones no estén activas simultáneamente.

10. **La función factorial es recursiva. Observe las direcciones y los valores del parámetro `n` y la variable local `f` en las sucesivas invocaciones. ¿Son siempre las mismas direcciones? ¿Qué sentido tiene esto?**

    En una función recursiva, cada llamada crea un nuevo marco en la pila, por lo que las direcciones de `n` y `f` en cada invocación son diferentes, ya que cada invocación tiene su propia copia de las variables locales.

11. **¿Cambia la dirección de la propia función factorial en las sucesivas invocaciones anidadas? ¿Puede esto ocasionar algún problema?**

    La dirección de la función `factorial` no cambia en las sucesivas invocaciones, ya que las funciones tienen una dirección fija en la sección de código. No ocasiona problemas ya que las direcciones de las funciones son constantes.

12. **Observe la función `cadenas`. ¿Se encuentra la cadena literal "hasta luego" en la misma región de memoria que los arrays `a` y `b`?**

    La cadena literal `"hasta luego"` se encuentra en la sección de literales (rodata), que es una región separada de las variables locales. Los arrays `a` y `b` son variables locales y se almacenan en la pila.

13. **Observe la función `mem_dinamica`. ¿En qué direcciones se ubican los bloques de memoria dinámica reservados por `malloc`? ¿Se encuentran cerca de otros elementos del programa o en una región de memoria separada?**

    Los bloques de memoria dinámica reservados por `malloc` se encuentran en la sección de heap, que es una región de memoria separada de la pila y la sección de datos.

14. **Observe las direcciones que resultan al evaluar `p+1` y `q+1` en relación a `p` y `q` respectivamente. ¿Cuál es la diferencia, en bytes, en un caso y en el otro? ¿Cómo incide el tipo del puntero en la operación de suma puntero+entero?**

    La diferencia en bytes entre `p` y `p+1` es el tamaño de un `int`, generalmente 4 bytes. La diferencia entre `q` y `q+1` es el tamaño de un `char`, que es 1 byte. El tipo del puntero determina el tamaño del incremento.

15. **Observe la ambivalencia del tipo `char`. ¿Qué valor tiene `*r` cuando se muestra con `%c`? ¿Y cuando se muestra con `%d`? ¿Cuál es la correspondencia entre números y caracteres?**

    Cuando se muestra `*r` con `%c`, se muestra el carácter correspondiente. Con `%d`, se muestra el valor numérico del carácter en la tabla ASCII. Por ejemplo, si `*r` es `'J'`, `%c` muestra `J` y `%d` muestra `74`.

16. **¿Coinciden las direcciones de memoria de las variables de un proceso con las del otro? Si coinciden, o si coincidieran... ¿cómo podrían estar en direcciones iguales, al mismo tiempo, y seguir siendo variables diferentes e independientes entre sí?**

    Las direcciones de memoria de las variables pueden coincidir entre diferentes procesos debido al aislamiento de procesos por parte del sistema operativo. Cada proceso tiene su propio espacio de direcciones virtual, lo que permite que las mismas direcciones virtuales apunten a diferentes ubicaciones físicas de memoria.

