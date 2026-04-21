# Hrod.dev - Landing Page

Bienvenido al repositorio que aloja mi carta de presentación digital en internet. Esta *landing page* está diseñada para ser rápida, limpia y directa, buscando servir como un puente accesible al mundo de la infraestructura, Linux y el entorno Cloud (DevSecOps).

## Diseño e Inspiración

La interfaz ha sido cuidadosamente estructurada para mantener una estética tech mínima y no invasiva:
- **Tema Base:** [Nord Theme](https://www.nordtheme.com/)
- **Paletas:** Tonos del hielo (*Frost*) para áreas de contenido sólido y estallidos de color vivos (*Aurora*) para las transiciones y componentes activos, con el objetivo de proyectar amigabilidad y modernismo para principiantes en la tecnología.
- **Micro-interacciones:** Figuras geométricas (mallas de red y nubes difuminadas) recreando ambientes de infraestructura escalable.

## Stack Tecnológico 🚀

Este proyecto SSG (*Static Site Generator*) se compila con las tecnologías de punta para garantizar el mejor tiempo de carga:

- **Framework:** [Astro](https://astro.build/) (v4+)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) (Totalmente integrado por variables y nativo en CSS puro)
- **CI/CD:** GitHub Actions hacia GitHub Pages.

## Uso y Desarrollo Local

Todo está listo para empezar o modificar el código localmente. Para correr este proyecto en tu entorno:

```bash
# 1. Instalar dependencias si no lo has hecho
npm install

# 2. Iniciar el servidor local de desarrollo
npm run dev
```

> **Verificación:** Tu sitio se montará de forma predeterminada en `http://localhost:4321`.

## Estructura de despliegue
Cada vez que se sube un nuevo cambio a la rama `main`, un *Pipeline* de GitHub Actions automatiza el proceso de `npm run build` y genera el empaquetado estático optimizado, el cual se transfiere de inmediato a GitHub Pages.

## Código Abierto y Contribuciones 🤝
Este proyecto es **100% de código abierto**. Creo firmemente en la filosofía del **código libre** y en el poder de la comunidad para mejorar las herramientas que usamos.

Siéntete libre de navegar por el código, sugerir mejoras, reportar errores o proponer nuevas funcionalidades. Cualquier contribución es bienvenida a través de un *Pull Request* o abriendo un *Issue*. 

¡Sigamos construyendo juntos una red más abierta!
