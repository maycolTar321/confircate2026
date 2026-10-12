# Publicar Jóvenes en Misión SMP en GitHub y Vercel

## 1. Subir la carpeta correcta

El contenido de esta carpeta (`package.json`, `index.html`, `src/`, `public/`, `vite.config.ts`, etc.) debe quedar directamente en la raíz del repositorio GitHub. No subas una carpeta contenedora adicional dejando `package.json` dentro de `jovenes-mision-smp/jovenes-mision-smp/`.

No subas `node_modules/` ni `dist/`.

## 2. Configuración de Vercel

En Project Settings → Build and Deployment:

- Framework Preset: **Vite**
- Root Directory: `./` si `package.json` está en la raíz del repositorio.
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm ci`

Si `package.json` está dentro de una subcarpeta, configura Root Directory con esa carpeta en vez de mover archivos a ciegas.

## 3. Después de desplegar

Abre Deployments y comprueba que el último despliegue terminó en **Ready**. Si aparece **Error**, abre Build Logs y corrige el primer error real antes de volver a desplegar.

En el navegador, abre la web y revisa DevTools → Console y Network si se ve en blanco. Comparte el primer error rojo de Console o el primer recurso JS/CSS con estado 404.

## Nota

El Error Boundary añadido muestra un mensaje en pantalla si React falla al renderizar, en vez de dejar una pantalla completamente blanca. No sustituye la revisión de errores de compilación o de recursos que no cargan.
