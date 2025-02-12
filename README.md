

# Portafolio para desarrolladores
> Esta es una adaptación del excelente proyecto [Portafolios para desarrolladores](https://github.com/said7388/developer-portfolio) creado originalmente por [Abu Said](https://github.com/said7388) en Next.js.

#### ¿Tiene dificultades para crear un sitio web de portafolio profesional? ¡No busque más! Puede usar la plantilla de Portafolio para desarrolladores y crear su propio portafolio personalizado hoy mismo. Mi sitio web está diseñado para ser fácil de usar y personalizar, lo que lo hace perfecto tanto para desarrolladores como para autónomos.

---



## Ver vista previa en vivo [aquí](https://abusaid.netlify.app/).

---

## Tabla de contenidos :scroll:

- [Secciones](#sections-bookmark)
- [Demostración](#demo-movie_camera)
- [Instalación](#installation-arrow_down)
- [Introducción](#getting-started-dart)
- [Uso](#usage-joystick)
- [Implementación](#deployment-rocket)
- [Tutoriales](#tutorials-wrench)
- [Configuración de la contraseña de la aplicación Gmail](#gmail-app-password-setup)
- [Crear un bot de Telegram](#create-a-telegram-bot)
- [Obtener un blog de dev.to](#fetching-blog-from-devto)
- [Paquetes utilizados](#packages-used-package)

---

# Secciones :bookmark:

- SECCIÓN HERO
- SOBRE MI
- EXPERIENCIA
- HABILIDADES
- PROYECTOS
- FORMACIÓN
- BLOG
- CONTACTOS

---

# Instalación :arrow_down:

### Necesitará descargar Git y Node para ejecutar este proyecto

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

#### Asegúrese de tener la última versión de Git y Node en su computadora.

```bash
node --version
git --version
```

## <br />

# Primeros pasos :dart:

### Bifurcar y clonar el repositorio

Para bifurcar el repositorio, haga clic en el botón de bifurcación en la parte superior derecha de la página. Una vez que el repositorio esté bifurcado, abre tu terminal y ejecuta los siguientes comandos

```bash
git clone https://github.com/<TU NOMBRE DE USUARIO DE GITHUB>/developer-portfolio.git

cd developer-portfolio
```

### Instala paquetes desde el directorio raíz

```bash
npm install
# o
yarn install
```

Luego, ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

---

### Ejecución con Docker Compose

1. **Crear imagen de Docker y ejecutar contenedor**:
```bash
docker-compose up --build
```

2. **Acceder a la aplicación**:
Visita [http://localhost:3000](http://localhost:3000) en tu navegador web para ver la aplicación en ejecución.

---

### Creación de la imagen de Docker

1. **Crear la imagen de Docker con Dockerfile.dev**:

```bash
docker build -t nextjs-app -f Dockerfile.dev . ```

2. **Ejecución del contenedor Docker**:

```bash
docker run -p 3000:3000 nextjs-app
```

3. **Acceso a la aplicación**:
Visite [http://localhost:3000](http://localhost:3000) en su navegador web para ver la aplicación en ejecución.

---

# Uso :joystick:

Cree un nuevo archivo `.env` a partir del archivo `.env.example`.

Por ejemplo:

```env
NEXT_PUBLIC_GTM =
NEXT_PUBLIC_APP_URL =
TELEGRAM_BOT_TOKEN =
TELEGRAM_CHAT_ID =
GMAIL_PASSKEY =
EMAIL_ADDRESS =
```

### Luego, personalice los datos en la carpeta `utils/data` 

Por ejemplo:

```javascript
export const personalData = {
  name: "Alvaro Alonso",
  profile: "/profile.png", // Ruta de tu foto de perfil
  designation: "Desarrollador Web",
  description: "...",
  email: "balonsomorillo@gamil.com",
  phone: "+34666426999",
  address: "Alcalá de Guadaira, Sevilla",
  github: 'https://github.com/Alvaro-Alonso-Portillo',
  facebook: 'https://www.facebook.com/',
  linkedIn: 'https://www.linkedin.com/in/alvaro-alonso-8319b52ba/',
  twitter: 'https://twitter.com/',
  stackOverflow: 'https://stackoverflow.com/',
  leetcode: "https://leetcode.com/",
  devUsername: "AlvaroAPDev",
  resume: "..."
}
```

`devUsername` se usa para obtener publicaciones de blog de `dev.to`.

---

# Implementación :rocket:

Implementar la aplicación en plataformas como Vercel o Netlify es rápido y fácil.

## Implementación en Vercel:

1. **Regístrese o inicie sesión** en [Vercel](https://vercel.com/).
2. Una vez que haya iniciado sesión, haga clic en **"Nuevo proyecto"**.
3. Seleccione su **repositorio de GitHub** (el que contiene su proyecto bifurcado) y haga clic en **Importar**.
4. Configure sus variables de entorno en el panel de control de Vercel agregando cada clave de su archivo `.env`.
- Por ejemplo, `NEXT_PUBLIC_GTM`, `NEXT_PUBLIC_APP_URL`, `TELEGRAM_BOT_TOKEN`, etc.
5. Haz clic en **Implementar**. Vercel detectará automáticamente tu aplicación Next.js y la compilará.
6. Una vez que se complete la implementación, ¡puedes visitar tu sitio web en vivo!

### Actualización después de la implementación

Siempre que envíes cambios a tu repositorio de GitHub, Vercel volverá a implementar automáticamente la aplicación, lo que mantendrá tu cartera actualizada.

## Implementación en Netlify:

1. **Regístrate o inicia sesión** en [Netlify](https://www.netlify.com/).
2. En el **Panel de control de Netlify**, haz clic en **"Nuevo sitio desde Git"**.
3. Conecta tu cuenta de **GitHub** y selecciona tu repositorio.
4. Configura tu entorno

## Agradecimientos
¡Gracias por vuestro increíble trabajo! Vuestra contribución a este proyecto ha sido invaluable, y vuestro código refleja un gran nivel de dedicación y conocimiento. Aprecio el esfuerzo y el tiempo que habeis invertido. ¡Seguid creando cosas geniales!" 🚀💻
[Abu Said](https://github.com/said7388)