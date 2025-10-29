# Assets - Imágenes del Proyecto S Dron

Esta carpeta contiene todas las imágenes utilizadas en la aplicación. Los archivos en la carpeta `public` son servidos directamente y se acceden con rutas que comienzan con `/`.

## Estructura de archivos requeridos:

### Hero Section:
- `hero-background-drone.jpg` - Imagen de fondo para la sección hero (NUEVO)
- `hero-video-drone.mp4` - Video de fondo para la sección hero (OPCIONAL - no se usa actualmente)
- `hero-fallback-drone.jpg` - Imagen de respaldo si el video no carga (OPCIONAL - no se usa actualmente)

### Servicios:
- `dronia.jpg` - Imagen para el servicio de mapeo de terrenos
- `service-bodas-eventos.jpg` - Imagen para el servicio de bodas y eventos  
- `service-filmacion-profesional.jpg` - Imagen para el servicio de filmación
- `service-inspeccion-tecnica.jpg` - Imagen para el servicio de inspección

### Portafolio:
- `dron2.jpg` - Ejemplo de mapeo aéreo
- `foto-bodas.jpg` - Ejemplo de fotografía de bodas (sin espacios en el nombre)
- `inspeccion.jpg` - Ejemplo de inspección con drones
- `corpo.jpg` - Ejemplo de eventos corporativos
- `campo.jpg` - Ejemplo de agricultura de precisión
- `aereo.jpg` - Ejemplo de celebraciones aéreas
- `cabañas.jpg` - Ejemplo de seguimiento de construcción
- `barichara.jpg` - Ejemplo de paisajes naturales

### Sección Nosotros:
- `about-team-drones.jpg` - Imagen del equipo con drones profesionales

## Cómo usar:

1. **Copiar archivos**: Coloca tus imágenes en esta carpeta `public/assets/`
2. **Nombres exactos**: Usa exactamente los nombres listados arriba
3. **Acceso directo**: Las imágenes se acceden con `/assets/nombre-archivo.jpg`
4. **Sin importaciones**: No necesitas importar estas imágenes en Vue

## Formato recomendado:
- Formato: JPG o PNG
- Resolución mínima: 1920x1080 para hero, 800x600 para servicios y portafolio
- Peso máximo: 500KB por imagen para optimizar carga
- Calidad: 80-90% para balance entre calidad y peso

## Ventajas de usar `public/assets`:
- ✅ Acceso directo sin importaciones
- ✅ URLs simples y predecibles
- ✅ Perfecto para contenido estático
- ✅ Fácil de cambiar archivos sin tocar código
- ✅ Compatible con cualquier framework

## Notas importantes:
- Evita espacios en nombres de archivo (usa guiones en su lugar)
- Los archivos en `public` son copiados tal como están al build final
- Mantén los nombres exactos para que las referencias funcionen