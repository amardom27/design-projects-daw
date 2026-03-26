# Proyecto Incluyete - Maquetación Web

## Descripción

Este proyecto es una maquetación web avanzada basada en HTML5, CSS3 y JavaScript. Utiliza una arquitectura de archivos organizada por componentes y páginas para facilitar el escalado y el mantenimiento, sin dependencias de frameworks externos.

## Instalación

Para trabajar con este proyecto en tu entorno local:

1. Clona el repositorio:
   
   ```bash
   git clone https://github.com/tu-usuario/proyecto-maquetacion.git
   ```

2. Accede al directorio raíz:
   
   ```bash
   cd proyecto-maquetacion
   ```

## Uso

Al tratarse de una estructura con múltiples rutas y recursos enlazados, se recomienda el uso de un servidor local:

1. **Live Server (VS Code):** Abre la carpeta raíz y haz clic en "Go Live".
2. **Navegador:** Puedes abrir el archivo `index.html` directamente, pero algunas rutas relativas podrían comportarse de forma distinta según el entorno.

## Ejemplos

La estructura del proyecto sigue un orden lógico para recursos y vistas:

```text
.
├── assets/                 # Recursos estáticos
│   ├── css/                # Estilos (layout, components, utilities)
│   ├── fonts/              # Tipografías (Montserrat, Open Sans)
│   └── images/             # Imágenes optimizadas en formato .webp
├── index.html              # Punto de entrada principal
└── pages/                  # Vistas del sitio
    ├── auth/               # Autenticación
    ├── lugares/            # Listado de localizaciones
    └── privacidad/         # Documentación legal
```

## Contribución

1. Crea una rama para tu mejora: `git checkout -b feature/mejora-visual`.
2. Realiza tus cambios y haz commit: `git commit -m "Añadidos estilos de tarjetas"`.
3. Envía tus cambios: `git push origin feature/mejora-visual`.
