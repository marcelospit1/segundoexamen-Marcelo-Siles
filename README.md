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