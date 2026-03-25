# Trabajo Integrador Final - Desarrollo Web Frontend

## Descripción

Este proyecto fue desarrollado como trabajo práctico final de la materia Desarrollo Web Frontend. La aplicación incluye registro de usuario, persistencia de sesión utilizando React Context y LocalStorage, navegación entre rutas y una página pública de documentación.

## Tecnologías utilizadas

- React
- React Router DOM
- JavaScript
- HTML
- CSS
- Vite

## Funcionalidades principales

- Ruta `/registro` con formulario de registro
- Validaciones del lado del cliente
- Persistencia del usuario con Context y LocalStorage
- Ruta pública `/acerca`
- Página de login
- Página Home
- Página 404 para rutas inexistentes

## Estructura del proyecto

```text
src/
  context/
    ChatContext.jsx
  router/
    RouterApp.jsx
  views/
    Home.jsx
    Login.jsx
    Register.jsx
    Acerca.jsx
    NotFound.jsx
  styles/
    main.css
  main.jsx
```

## Ejecución local

Instalar dependencias:

```bash
npm install
```

Ejecutar el proyecto:

```bash
npm run dev
```

## Deploy

El proyecto fue desplegado utilizando Vercel, conectado al repositorio de GitHub.

## Observaciones

Se priorizó una estructura simple y clara, enfocada en cumplir los requisitos obligatorios del trabajo práctico utilizando React, Context y persistencia local.
