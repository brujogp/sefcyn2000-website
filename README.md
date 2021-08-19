# Sefcyn2000

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also
use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Lista de componentes reutilizables

Para la reutilización de código, fabriqué diferentes componentes y secciones enteras para su reutilización:

- Lista de componentes:
  - Cards
    - Este componente tiene un diseño tradicional con los bordes redondeados, con la fotografía por encima y la
      información por debajo de ésta. El componente soporta un arreglo de objetos que son definidos en una interface que
      está dentro de la carpeta contenedora del componente.
  - Carousel
    - Este componente, está diseñado con la forma tradicional de las tarjetas. Soporta un arreglo de objetos Pests. La
      definición de este tipado está en el directorio models.
  - Carousel Image Cover
    - Este Carrusel tiene el diseño para poner la imágen dada para cada tarjeta como imágen de fondo. Tiene la misma
      estructura que el carrusel normal.
  - Footer
    - Este es el componente Footer para todas las secciones y sub-páginas de la página. Contiene una referencia a
      SocialNetworkNav, que también es otro componente reutilizable.
  - Header
    - Este es el inicio de la mayoría de secciones y sub-páginas. Es un banner que toma un 70% del alto de la pantalla
      apróximadamente. Se le puede dar como argumentos la URL de una imágen que será la imágen de fondo, especificar si
      aparecen o no la navegación de circulos rojos y darle un slogan.
  - Relational Pages
    - Este componente está pensando para suministrar un listado de páginas relacionadas a la página actual. Se le podrá
      dar una arregle de objetos que especifíquen su URL, si nombre y seguramente una imágen que lo acompañe.
  - Social Network Nav
    - Es una navegación que contiene un listado de iconos que llevarán a las redes sociales de la compañía. Este
      componente soporta un parámetro en el cual se le dé el color de los iconos en formato hex.

- Lista de secciones
  > Para la conservación del diseño de la página, diseñé algunas secciones completas que funcionan autónomamente.
  - Info Pests
    - Esta sección aporta információn sobre las plagas que se seleccionaron en el formulario de residencial. Pero
      también contendrá información para mostrar un catálogo de plagas en el caso de que se ingrese a la sección sin
      antes haber rellenado el formulario.

## Lista de librerías

Usé diferentes librerías para crear algunos componentes y elementos.

- Carousel Angular
- Animated.css
