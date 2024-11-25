# Lit Authentication App

Este proyecto es una aplicación web pequeña que utiliza [Lit](https://lit.dev) para crear componentes web reutilizables. Se enfoca en la autenticación de usuarios, navegación entre páginas y gestión de estado con `localStorage`.

## Funcionalidades

- **Autenticación de Usuario**: Sistema de login básico.
- **Gestión de Estado**: Persistencia del estado de autenticación en `localStorage`.
- **Mixins**: Para verificar y redirigir usuarios autenticados.
- **Navegación**: Implementación de rutas con `@vaadin/router`.

## Componentes base

1. **login-component**: Formulario para autenticar al usuario.
2. **alert-component**: Muestra mensajes de error en caso de login fallido.
3. **home-page**: Página principal, accesible solo si el usuario está autenticado.
4. **login-page**: Página de inicio de sesión.

## Instalación

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1. **Clona este repositorio**
2. **Instala las dependencias**
3. **Inicia el proyecto**

## Uso

- **Ruta `/login`**: Página de inicio de sesión.
- **Ruta `/home`**: Página protegida, accesible solo con autenticación.
- **User `admin@admin.com`**: Email para ingresar.
- **Pass `admin123`**: Contraseña para ingresar.

## Tecnologías

- [Lit](https://lit.dev)
- [@vaadin/router](https://github.com/vaadin/router)
