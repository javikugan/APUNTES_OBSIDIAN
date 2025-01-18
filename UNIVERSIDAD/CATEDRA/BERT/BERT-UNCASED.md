
### 1. **Importación de Librerías y Definición de Directorios y Mapeos**

El código comienza con la importación de librerías esenciales, como `pandas` para el manejo de datos, `torch` y `transformers` para el modelo de BERT, y `sklearn.metrics` para las métricas de evaluación. Se definen varios directorios y un diccionario `class_dict` que mapea categorías de texto a números, lo que será útil para la clasificación.

### 2. **Generación del CSV Inicial (`make_csv`)**

Esta función itera sobre los archivos de texto en los subdirectorios de categorías, lee el contenido de cada archivo y lo almacena junto con su categoría correspondiente (etiquetada como número) en listas. Luego, estas listas se convierten en un DataFrame de pandas que se guarda en un archivo CSV.

- **Entrada:** Directorio con archivos de texto organizados por categorías.
- **Salida:** Un archivo CSV `text_data.csv` con columnas `text` y `label`.

	El hecho de crear inicialmente un CSV que recoja todos los datos, nos permitira calcular la precision con la que se han hecho las clasificaciones posteriormente, es importante que los label esten en formato númerico, parauna mayor eficiencia computacional, ademas

### 3. **Selección de una Muestra del CSV (`train_csv`)**

Después de generar el CSV inicial, esta función selecciona 500 filas aleatorias para crear un conjunto de datos de entrenamiento más manejable. 

- **Entrada:** Archivo CSV generado en el paso anterior.
- **Salida:** Un archivo CSV `text_data_train.csv` con una muestra de 500 filas.

### 4. **Carga del Tokenizer y Modelo BERT**

Se carga el tokenizer y el modelo `BertForSequenceClassification` de `transformers`. Este modelo está preentrenado en `bert-base-uncased` y se ajustará para las categorías definidas en `class_dict`.

### 5. **Carga y Preparación de Datos Etiquetados**

El archivo CSV con los datos etiquetados se carga y se eliminan las filas con textos nulos. Las etiquetas se convierten a números (si no lo estaban) y se eliminan las filas con etiquetas no válidas.

### 6. **División de Datos en Entrenamiento y Validación**

Se usa `train_test_split` para dividir los datos en conjuntos de entrenamiento y validación, con un 80% de los datos para entrenamiento y un 20% para validación.

### 7. **Tokenización de los Textos (`tokenize_function`)**

Esta función tokeniza los textos para que puedan ser procesados por el modelo BERT. Usa el tokenizer previamente cargado para truncar o rellenar los textos a una longitud fija de 256 tokens.

### 8. **Función para Calcular Métricas de Evaluación (`compute_metrics`)**

Esta función calcula las métricas de precisión, recall y F1 utilizando las predicciones del modelo y las etiquetas reales. Se usa `average='weighted'` para tener en cuenta el desequilibrio en las clases.

### 9. **Entrenamiento del Modelo (`fine_tune_bert`)**

Se ajusta el modelo BERT usando el conjunto de datos tokenizado. Se configuran los argumentos de entrenamiento, como el número de épocas, la tasa de aprendizaje, y se especifica que no se use CUDA (`no_cuda=True`). Se usa la función `compute_metrics` para evaluar el modelo en cada época. En este caso los argumentos de entrenamiento son los proporcionados en el paper  [Shedding New Light on the Language of the Dark Web](https://aclanthology.org/2022.naacl-main.412.pdf)

- **Salida:** El modelo ajustado se guarda en el directorio `MODEL_DIRECTORY`.

### 10. **Clasificación de Contenido del Darknet (`classify_darknet_content`)**

Esta función lee archivos de texto de un directorio de entrada, los procesa utilizando el modelo ajustado, y clasifica el contenido en una de las categorías definidas. Los resultados se almacenan en un DataFrame y se guardan en un archivo CSV.

- **Entrada:** Archivos de texto a clasificar.
- **Salida:** Un archivo CSV con las clasificaciones.


### 11. **Métricas Precision del Modelo entrenado**

Mediante el código adjunto de `precision.py`podemos calculas las métricas de precision del el modelo entrenado con la muestra de 500 datos generada previamente, tras ello obtenemos las siguientes métricas:

| Metrica   | Valor  |
| --------- | ------ |
| Precision | 0.8082 |
| Recall    | 0.8016 |
| F1 Score  | 0.7992 |

tras observar los valores podemos interpretar que el modelo tiene una precision buena, aunque no llega a tener la precision del documento  [Shedding New Light on the Language of the Dark Web](https://aclanthology.org/2022.naacl-main.412.pdf) que alcanza el 92.51 de Precisión

