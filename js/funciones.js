const enlaces = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const flechasModal = document.querySelectorAll(".modal button");
let imgActual=0

//abrir modal
//hacer click en cualquiera de los enlaces y ponerle la clase visible a la modal
enlaces.forEach(function(enlace,indice){
	enlace.addEventListener("click", function(evento){
		evento.preventDefault();
		imgActual=indice;
		console.log(indice);
		imgModal.setAttribute("src",enlace[imgActual].getAtrribute("href"));
		modal.classList.add("visible");
	});
});

/*Otras opciones:

enlaces[0].addEventListener("click",function(evento){
	evento.preventDefault();
	imgModal.setAttribute("src", enlace.getAttribute("href"));
	modal.classList.add("visible");
})

for(let i=0; i<enlaces.length; i++){
	evento.preventDefault();
	modal.classList.add("visible")
}
*/

//cerrar modal
//hacer click en cualquier parte de la modal y quitarle la clase visible a la modal

modal.addEventListener("click",function(){
	modal.classList.remove("visible");
});

//navegación imágenes
flechasModal.forEach(function(flecha,indice){
	flecha.addEventListener("click", function(evento){
		evento.stopPropagation();
		if(indice==0){
			imgActual = imgActual>0? imgActual-1 : enlaces.length-1;
		}else{
			imgActual = imgActual<enlaces.length-1? imgActual+1 : 0;
		}
		imgModal.setAttribute("src",enlaces[imgActual].getAtrribute("href"));
	});
});

//Que al hacer click en flecha se pase a la siguiente imagen y que luego de la última se vuelva a la primera