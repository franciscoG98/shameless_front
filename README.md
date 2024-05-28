# Shameless

Este es el repositorio de la parte del frontend para el [hackacode](https://hackacode.todocodeacademy.com/).
Esta boostrapeado con vite, hecho con react, y sass.


## Corre este proyecto

```
git clone https://github.com/franciscoG98/shameless_front.git
npm install
npm run dev
```

node v20.9.0

npm v10.1.0


## Como aportar al proyecto

primero asegurarte de que vas a trabajar con la ultima version de main. Clonas el proyecto:


```
git clone https://github.com/franciscoG98/shameless_front.git
```

vas a estar parado en main, para asegurarte
```
git branch
```

para ver todas las ramas
```
git branch -a
```

para trabajar sobre TU rama, te creas una nueva con este comando
```
git checkout -b feat/lo-que-vas-a-hacer
```

la idea es que cada rama contenga una funcionalidad pequeña y especifica.

cuando el trabajo esta terminado:
```
git push
```
haces una pull request y pedis review, lo vemos para estar al tanto, si se aprueba se mergea a main (siempre que no haya conflictos). Si hay que realizar cambios, los marcamos en la review, y hacemos convesacion ahi mismo, se vuelve a pedir review hasta que se aprueba, esto es mutuo lo hacemos todos

En caso de que haya conflictos con main, NUNCA se resuelve desde github, todo local.

Ahí mismo github te tira los comandos para resolverlos en tu pc pero de todas formas
```
git checkout main
git pull oringin main
git checkout tu-rama
git merge main
```

Ahi van a aparecer los conflictos en tu ide/editor de codigo y te fijas que sucede, de nuevo commit push y review.


## To do

- [] listar y editar paquetes
- [] listar clientes y empleado
- [] funcinon de editar productos (PUT)
- [] dar funcion a los botones de la lista de productos (btn edit y delete)
- [] mejorar la vista cliente
- [] agregar boton de crear a las listas de productos
- [] hacer un componente lista para los productos (como el de formulario)
- [] paquetes no sea todo required
- [] listado de paquetes
- [] ventas (crud)
- [] probar links admin como select crear o listar
- [] modal shows product info on package list
- [] dark/light theme
- [] 
- [] 
