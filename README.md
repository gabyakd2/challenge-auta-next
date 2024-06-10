
# Tienda de autos

Esta aplicación esta realizada con Next JS (react), firestore, material UI, context API, swalalert (para alertas).


## Correr la aplicación

Clonar repositorio

```bash
  git clone https://github.com/gabyakd2/challenge-auta-next.git
```
```bash
  npm install
```
```bash
  npm run dev
```
Se abrirá en el puerto localhost:3000

## Estructura de carpetas y archivos

*(screens): Se encuentran todas las pantallas de la aplicación. Dentro de ellas, cada "page.tsx" con los componentes correspondientes a cada una.

*components: Acá se encuentra el navbar. Esta por fuera ya que lo uso en toda la aplicación. La idea es que si en un futuro necesito más componentes para usar en toda mi app, vayan acá.

*context: Se encuentran dos contexts API, uno para autenticar la sesión y el otro para compartir lista de favoritos.

*hook: Se encuentran customs hooks: 
 
    -useAuth (para traer la info del usuario logueado). 
    -useGetVehicleList (trae los vehículos de mi db).
    -useSignOut (hook para cerrar la sesión).

*images: Imagenes que se usan en la app (lo ideal seria guardarlas en la db de firestore o en cloudinary).

*interfaces: Se encuentra la interfaz de los vehículos. (Esta de manera "global" por si en un futuro debo añadir mas interfaces que se utilicen en varias partes).

*credentials: este archivo tiene toda la configuración de firestore.




## Autor

- Gabriel Saldaña :D

