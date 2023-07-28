# Box Model

### Conceptos:

Todo elemento en una pagina web es una caja

![Untitled](Box%20Model%20e592061caf3c4641a4f3eaee858367dc/Untitled.png)

Asi al considerarlo de esta manera de puede entrar en materia de diseño, crear paginas web que sean interesantes por ejemplo

Cuales son sus 4 elementos principales?

1. Content Box: seria el contenido de la caja, es una área donde puedo tener textos, imágenes ,videos, etc.
    
    ![Untitled](Box%20Model%20e592061caf3c4641a4f3eaee858367dc/Untitled%201.png)
    
    Al momento de manejar el diseño hay dos propiedades
    
    - Width: ancho
    - Height: alto
2. Padding Box: seria un espacio del elemento hacia adentro de el mismo.
    
    ![Untitled](Box%20Model%20e592061caf3c4641a4f3eaee858367dc/Untitled%202.png)
    
    Para manejar las propiedades de este espacio se utiliza la propiedad pading.
    
3. Border Box:
    
    ![Untitled](Box%20Model%20e592061caf3c4641a4f3eaee858367dc/Untitled%203.png)
    

4.Margin Box: es una especie de área que hay del elemento hacia afuera.

![Untitled](Box%20Model%20e592061caf3c4641a4f3eaee858367dc/Untitled%204.png)

Propiedad para utilizarlo : margin

A continuación se vera algo que a primera vista parece una incongruencia:

![Untitled](Box%20Model%20e592061caf3c4641a4f3eaee858367dc/Untitled%205.png)

![Untitled](Box%20Model%20e592061caf3c4641a4f3eaee858367dc/Untitled%206.png)

La especificaciones es que la altura sea de 500px, sin embargo aparecen 560 en la muestra a través de la inspección, lo que en realidad me esta mostrando es que tanto el valor asignado a la altura del elemento como los valores de padding-top y padding-bottom están incluidos.

La explicación es análoga para en ancho del elemento.

En conclusión según la sección que revise observare unos valores específicos u la suma en su conjunto.

### Un detalle a corregir de la pagina para dar le mas comodidad al usuario es :

- La de evitar el scroll de hacia los laterales:
    
    ```css
    *{
        box-sizing: border-box;
     }
    ```
    

Ahora volviendo a la pagina, no tengo el scroll y a medida que agrande y achique la pagina el tamaño se mantiene en equilibrio.

### Ocurre otra aparente anomalía

![Untitled](Box%20Model%20e592061caf3c4641a4f3eaee858367dc/Untitled%207.png)

Mi especificación es que el alto sea 500px y aparece 440px, en este caso el valor de 500 tiene lugar al considerar los valores de el padding-top y border top, padding-botton y border botton .

Yo puedo cambiar los valores y agregar elementos sin temer que se desconfiguren las dimensiones ya aplicada la propiedad de box-sizing: border-box.

### Detalle sobre margin

Todas las etiquetas vienen con un margen por defecto de 8px

Si yo quiero cambiar eso debo al selector universal *(asterisco) y agregar

marging:0 y padding:0.

```css
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
 }
```

De esta manera se manipulan las propiedades del modelo de caja.