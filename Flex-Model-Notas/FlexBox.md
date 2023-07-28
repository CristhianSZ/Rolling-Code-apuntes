# FlexBox

“El triunfo del verdadero hombre surge de las cenizas de error” 

En las siguientes condiciones 

```css
.padre{
    height: 600px;
    width: 1200px;
    background-color: beige;
    margin: 10px auto;
}
.hijos{
    height: 200px;
    width: 200px;
    background-color: aquamarine;
    margin: 10px;
}
```

Se observa lo siguiente en la pagina

![Untitled](FlexBox%200c293091eb1c4f41aef3f44951c189f7/Untitled.png)

Ahora con la propiedad display: flex

![Untitled](FlexBox%200c293091eb1c4f41aef3f44951c189f7/Untitled%201.png)

Explicación: lo que tenia en columnas actualmente se vera en filas, lo que hace flexbox es colocar los ítem que tiene adentro en fila

Propiedad flex-direction

```css
flex-direction: column; /*regresa los iten a columnas*/
flex-direction: row;/*regresa los iten a filas*/
flex-direction: row-reverse;/*Nuestros contenedores toman la posicion
contrario pero en fila*/
```

flex-direction: column

![Untitled](FlexBox%200c293091eb1c4f41aef3f44951c189f7/Untitled%202.png)

flex-direction: row

![Untitled](FlexBox%200c293091eb1c4f41aef3f44951c189f7/Untitled%203.png)

flex-direction: row-reverse

![Untitled](FlexBox%200c293091eb1c4f41aef3f44951c189f7/Untitled%204.png)

Propiedad justify-content: center;

```css
flex-direction: row;
    justify-content: center;
```

![Untitled](FlexBox%200c293091eb1c4f41aef3f44951c189f7/Untitled%205.png)

Propiedad align-items: flex-end;

![Untitled](FlexBox%200c293091eb1c4f41aef3f44951c189f7/Untitled%206.png)

Propiedad flex-wrap: lo que hace es colocar todos los elementos que un div contiene y ponerlo de una manera de que se acomode a la posición que tiene el flex direction

Si agregan mas div hijos en este caso

![Untitled](FlexBox%200c293091eb1c4f41aef3f44951c189f7/Untitled%207.png)

Se observa que se ha conservado la direccion

### ¿Que es el FlexBox?

Sirve para crear cajas flexibles

### Utilizando la pripiedad flex los contenedores se muestran por defecto en…?

En una misma fila

### Para cambiar la orientación en la que se muestran los contenedores, utilizamos…

Flex.direction

### Para centrar contenedores usa la propiedad…

Justify-content: center;