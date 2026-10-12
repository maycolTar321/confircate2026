# Entrega de Jóvenes en Misión SMP

## Cambios incluidos en esta versión

- Se corrigió el botón **INICIAR ENCUESTA** para que abra el asistente de encuesta. Antes estaba conectado a la acción de desplazarse hacia los pilares.
- Se añadió un botón secundario **CONOCER LOS PILARES** para separar claramente ambas acciones.
- Se reforzaron reglas globales de adaptación móvil, control de desbordamiento horizontal, proporciones de medios y respeto a `prefers-reduced-motion`.
- Se sustituyeron varios acentos rojos de gráficos administrativos por tonos verdes y neutros.
- Se conservó el logotipo original y la arquitectura React/Vite, junto con el backend de Google Apps Script incluido en `backend/google-apps-script/Code.gs`.

## Abrir en Windows

1. Instala Node.js LTS.
2. Descomprime la carpeta del proyecto.
3. Abre una terminal dentro de la carpeta `jovenes-mision-smp`.
4. Ejecuta:

   ```bash
   npm ci
   npm run dev
   ```

5. Abre la dirección local que muestre Vite en la terminal.

Para generar la versión de producción:

```bash
npm run build
```

## Publicación en Vercel

Importa el repositorio en Vercel y utiliza:

- Build Command: `npm run build`
- Output Directory: `dist`

Después de publicar, verifica la URL de producción desde un navegador móvil y realiza una nueva implementación si estás viendo una versión anterior.

## Importante: backend y seguridad

El proyecto contiene un cliente para Google Apps Script y el archivo backend en `backend/google-apps-script/Code.gs`. Antes de usarlo con participantes reales, confirma que la URL del Web App corresponde al despliegue vigente, que el script tiene permisos correctos y que los datos se guardan en la hoja prevista. No distribuyas códigos de acceso administrativos a participantes.

El acceso administrativo inicial configurado por el proyecto es `admin5230`. Cámbialo desde la configuración administrativa/backend antes de un uso público, si la configuración de tu despliegue lo permite, y vuelve a desplegar el backend. No reutilices esa contraseña en otras cuentas.

## Estado de verificación de esta entrega

Los cambios de código se realizaron sobre el proyecto fuente proporcionado. En este entorno no se pudieron instalar las dependencias mediante `npm ci`, por lo que no fue posible ejecutar una compilación de producción ni pruebas automatizadas aquí. Ejecuta los comandos anteriores antes de desplegar y corrige cualquier error que aparezca.
