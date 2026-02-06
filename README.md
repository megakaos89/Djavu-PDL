# Djavu PDL

## Descripción del Proyecto

Djavu PDL es una aplicación web moderna diseñada para ofrecer una experiencia de usuario excepcional en la gestión y personalización de muebles. Este proyecto combina tecnologías de vanguardia con un diseño elegante para proporcionar una plataforma eficiente y fácil de usar.

## Tecnologías Utilizadas

Este proyecto está construido con las siguientes tecnologías:

- **Vite**: Herramienta de construcción rápida para aplicaciones web modernas.
- **TypeScript**: Un superconjunto de JavaScript que añade tipado estático.
- **React**: Biblioteca para construir interfaces de usuario.
- **shadcn-ui**: Componentes de interfaz de usuario reutilizables y accesibles.
- **Tailwind CSS**: Un framework CSS para un diseño rápido y personalizado.

## Cómo Ejecutar el Proyecto Localmente

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd djavu-pdl
   ```

3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abre tu navegador y accede a `http://localhost:3000` para ver la aplicación.

## Conexión a una Base de Datos Local

Para conectar el proyecto a una base de datos local, sigue estos pasos:

1. Configura una base de datos local (por ejemplo, PostgreSQL):
   - Instala PostgreSQL en tu máquina local.
   - Crea una nueva base de datos para el proyecto.

2. Configura las credenciales de la base de datos:
   - Crea un archivo `.env` en la raíz del proyecto.
   - Añade las siguientes variables de entorno:
     ```env
     DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/nombre_base_datos
     ```

3. Asegúrate de que las migraciones estén configuradas correctamente y ejecútalas:
   ```bash
   npx prisma migrate dev
   ```

4. Inicia el proyecto y verifica la conexión con la base de datos.

## Despliegue con Supabase

Supabase es una excelente opción para desplegar este proyecto con una base de datos en la nube. Sigue estos pasos:

1. Crea una cuenta en [Supabase](https://supabase.com) y configura un nuevo proyecto.

2. Obtén las credenciales de la base de datos desde el panel de Supabase.

3. Configura las variables de entorno en el archivo `.env`:
   ```env
   SUPABASE_URL=https://<tu-proyecto>.supabase.co
   SUPABASE_KEY=clave_publica
   DATABASE_URL=postgresql://usuario:contraseña@<host>:<puerto>/<nombre_base_datos>
   ```

4. Asegúrate de que las migraciones estén configuradas correctamente y ejecútalas en la base de datos de Supabase:
   ```bash
   npx prisma migrate deploy
   ```

5. Despliega el proyecto en una plataforma de tu elección (por ejemplo, Vercel, Netlify) y asegúrate de incluir las variables de entorno necesarias.

## Cómo Desplegar el Proyecto

### Despliegue Local

1. **Clona el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. **Navega al directorio del proyecto:**
   ```bash
   cd djavu-pdl
   ```

3. **Instala las dependencias necesarias:**
   ```bash
   npm install
   ```

4. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

5. **Accede a la aplicación:**
   Abre tu navegador y ve a `http://localhost:8080`.

### Despliegue en Hostinger

1. **Prepara el entorno:**
   - Asegúrate de tener un dominio y un plan de hosting activo en Hostinger.
   - Configura un entorno Node.js en tu servidor.

2. **Construye el proyecto:**
   ```bash
   npm run build
   ```

3. **Sube los archivos al servidor:**
   - Sube la carpeta `dist/` generada al directorio público de tu servidor usando FTP o el Administrador de Archivos de Hostinger.

4. **Configura el servidor:**
   - Asegúrate de que el servidor esté configurado para servir archivos estáticos desde la carpeta `dist/`.

5. **Accede a la aplicación:**
   - Abre tu navegador y ve a tu dominio configurado.

### Otras Opciones de Despliegue

#### Despliegue en Vercel

1. **Instala la CLI de Vercel:**
   ```bash
   npm install -g vercel
   ```

2. **Inicia sesión en Vercel:**
   ```bash
   vercel login
   ```

3. **Despliega el proyecto:**
   ```bash
   vercel
   ```

4. **Sigue las instrucciones:**
   - Vercel te proporcionará un dominio donde estará alojada tu aplicación.

#### Despliegue en Netlify

1. **Instala la CLI de Netlify:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Inicia sesión en Netlify:**
   ```bash
   netlify login
   ```

3. **Construye el proyecto:**
   ```bash
   npm run build
   ```

4. **Despliega el proyecto:**
   ```bash
   netlify deploy
   ```

5. **Sigue las instrucciones:**
   - Netlify te proporcionará un dominio donde estará alojada tu aplicación.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas colaborar, por favor abre un issue o envía un pull request con tus cambios.

---

© 2026 Djavu PDL. Todos los derechos reservados.
