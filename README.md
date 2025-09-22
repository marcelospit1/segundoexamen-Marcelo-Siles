# SegundoexamenMarceloSiles

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.1.

## CSS Framework elegido
Para el examén se seleccionó **Bootstrap** como framework CSS.

## Template usado
Este proyecto utiliza el template **One Page Wonder v6.0.6** de  
[Start Bootstrap](https://startbootstrap.com/theme/creative).

**Licencia:** MIT License  
[Ver licencia completa](https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)


## Avance actual
**Layout principal**: creado en `src/app/layout` con `header`, `nav`, `main` y `footer`. 
**Home**: creado en `src/app/home` 
Se configuró `app.routes.ts` para que `Layout` contenga un `<router-outlet>` en el que se carga `Home`.
En `app.html` se declaró `<router-outlet>` para montar el sistema de rutas.

## Ruta creada/ui

**Componentes integrasdos**
**Navbar de ejemplo:**

 - Diseño moderno con navbar-dark bg-primary, menú desplegable (dropdown) y sombras.

 - Totalmente responsive gracias a navbar-toggler y collapse.

**Cards mejoradas:**

 - Disposición en 3 columnas con row row-cols-1 row-cols-md-3 g-4.

 - Cards con sombras (shadow-sm), bordes redondeados y botón de acción btn-outline-primary.

**Botones:**

 - Estilos btn-primary, btn-success y btn-danger en tamaño grande (btn-lg) y con sombra (shadow).

 - Tecnologías utilizadas:

**Navegación:**

Se agregó un enlace UI Demo en el navbar de layout.html usando routerLink="/ui", permitiendo ingresar directamente desde la interfaz principal.