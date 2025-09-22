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

## Ruteo y accesibilidad básica
- Se comprobó y ajustó la navegación entre `/` y `/ui`
- Se añadió `title` dinámico en cada ruta.
- Se verificó que el template cumpla con accesibilidad (a11y)
- Textos alternativos descriptivos en algunas imágenes


## Activar PWA
- Se añadió `@angular/pwa` para convertir la app en Progressive Web App.
- Se configuró `provideServiceWorker` en `main.ts` con `enabled: !isDevMode()` para registrar el Service Worker.

## Offline
- Se consiguió que la página de inicio cargue sin conexión, gracias a la activación del Service Worker y al  precaching automático de Angular.

- ng build --configuration=production 
Genera los archivos optimizados (HTML, CSS, JS e imágenes clave) en la carpeta dist/segundoexamen-Marcelo-Siles/browser.

Prueba en servidor local:
npx http-server -p 8080 -c-1 dist/segundoexamen-Marcelo-Siles/browser
Permite servir la aplicación en modo producción para verificar su comportamiento sin conexión.

Verificación offline:
1. Abrir la app en http://127.0.0.1:8080.

2. En DevTools → Application → Service Workers, marcar la opción Offline.

3. Recargar la página: la Home continúa cargando con su contenido, estilos sin depender de Internet.

### Notificación local desde la app

- En la Home se añadieron dos botones:  
  - **Permitir notificaciones**: solicita permiso al usuario usando la API `Notification.requestPermission()`.  
  - **Probar notificación**: muestra un mensaje del sistema con título e ícono si el permiso fue concedido.

- Prueba:
  1. Compilar en modo producción con `ng build`.
  2. Servir con `npx http-server -p 8080 -c-1 dist/segundoexamen-Marcelo-Siles/browser`.
  3. Abrir en `http://127.0.0.1:8080`, aceptar el permiso y pulsar **Probar notificación**.

Nota: tb funciona probando desde el ng serve
