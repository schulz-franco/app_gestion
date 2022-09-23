# App de gestión

En este proyecto busco construir una aplicación web de escritorio que ofrezca herramientas de gestión para negocios y funcione por módulos. \
Práctica con firebase.

# Modulos actuales

## Productos

- Agregar
- Consultar por nombre y/o descripción
- Eliminar
- Editar
- Stock en color rojo si es bajo (actualmente a partir de 5 unidades, configurable a futuro)

## Carrito

- Consultar por nombre y/o descripción
- Agregar (solo si hay stock disponible)
- Quitar
- Limpiar carrito
- Elegir cantidades (limitado segun el stock disponible)
- Precio final por producto en base al precio unitario, unidades e iva
- Ver monto final
- Cerrar venta, con registro y descuento de stock

## Ventas (sin terminar)

- Lista de ventas registradas
- Ver detalles

### Pendientes en modulo Ventas

- Consultas en rangos de tiempo
- Calculo de ingresos totales de un dia indicado

# Como usar

Actualmente no esta pensado para ser probado. Si queres hacerlo necesitas:

- Dar de alta una database en Cloud Firestore con una colección llamada "productos" y otra llamada "ventas"
- Permitir la lectura/escritura en las reglas
- Crear un archivo .env y agregar las variables de configuración de firebase segun a como son llamadas en el archivo "src/firebase/firebaseConfig.js" 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
