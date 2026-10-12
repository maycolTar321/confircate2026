# Reparación móvil y publicación — Jóvenes en Misión SMP

## Qué se cambió

- Se añadió una pantalla inicial mientras carga React.
- Si el bundle no inicia, después de 9 segundos aparece un mensaje visible y un botón para reintentar, en vez de quedarse indefinidamente en blanco.
- Se ajustó el diseño móvil de portada y tarjetas.
- Se añadieron metadatos de tema y un viewport adaptable.

## Publicación correcta

1. Descomprime este ZIP.
2. Sube el contenido de la carpeta a la raíz del repositorio de GitHub conectado a Vercel.
3. En Vercel confirma que el proyecto, repositorio y rama sean los correctos.
4. Configura Framework Preset `Vite`, Build Command `npm run build`, Output Directory `dist`, Install Command `npm ci`.
5. Ejecuta un nuevo deployment y abre la URL exacta que Vercel muestra en ese deployment.
6. Copia esa misma URL desde la computadora y ábrela en el teléfono. No uses una URL antigua guardada en favoritos.

## Si el teléfono sigue en blanco

Esta versión mostrará un aviso después de 9 segundos si React no llega a arrancar. Eso ayuda a diferenciar un fallo de carga del JavaScript de un problema puramente visual. Si aparece el aviso, revisa en Vercel `Deployments → Build Logs` y confirma que la URL móvil sea exactamente la URL del último deployment correcto.

## Limitación de verificación

La instalación de dependencias agotó el tiempo disponible en este entorno, por lo que no se pudo ejecutar una compilación completa aquí. Debes confirmar que `npm run build` termine correctamente antes de publicar. No se ha publicado automáticamente ningún cambio en tu cuenta de Vercel.
