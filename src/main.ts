import './style.css';
import { buscarPorNombre } from './productos/productos';
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Formulario de búsqueda</h1>
<form>
  <label for="search-input">Buscar:</label>
  <input type="text" id="buscar-input">
  <button type="submit" id="buscar-btn">Buscar</button>
  
</form>
`;

const btnBuscar = document.querySelector<HTMLInputElement>('#buscar-btn')!;
const resultado = document.querySelector<HTMLDivElement>('#resultado')!;
btnBuscar.addEventListener('click', (e) => {
	const producto= document.querySelector<HTMLInputElement>('#buscar-input')!;
	e.preventDefault();
buscarPorNombre(producto.value);


	//TODO: llamar a la funcion de buscarPorNombre(inpurtValue) con el valor que el usuario ingresio
	// e imprimir en consola el resultado
});




	//TODO: llamar a la funcion de buscarPorNombre(inpurtValue) con el valor que el usuario ingresio
	// e imprimir en consola el resultado
