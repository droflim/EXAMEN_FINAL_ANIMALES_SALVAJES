import { Leon, Aguila, Oso, Serpiente } from "./animal.js";


// Ejemplo de que la clase Leon si existe
const leon = new Leon(
  "leoncio",
  "1 a 3 años",
  "Leon.png",
  "its ok",
  "Rugir.mp3"
);

console.log(leon.Comentarios);
////////////////////////////////////////7

(async function () {
  const animalSelect = document.getElementById("animal");
  const edadSelect = document.getElementById("edad");
  const comentariosTextArea = document.getElementById("comentarios");
  const previewElement = document.getElementById("preview");
  const btnRegistrar = document.getElementById("btnRegistrar");
  const MostrarImagen = document.getElementById("test");
  const Request = await fetch("/animales.json");
  const { animales: Animales } = await Request.json();

  animalSelect.addEventListener("change", (event) => {
    // console.log({ event });
    const nombreDelAnimalElegido = animalSelect.value;

    const animalEncontrado = Animales.find(
      (animal) => animal.name === nombreDelAnimalElegido
    );

    previewElement.setAttribute(
      "src",
      `./assets/imgs/${animalEncontrado.imagen}`
    );
  });

  const AnimalesEnInvestigacion = [];
    AnimalesEnInvestigacion.forEach((animal, index) => {
      const DIVImagenAnimal = document.createElement("test");
      const DIVBarraSonido = document.createElement("div");

      DIVImagenAnimal.innerHTML = `
      <img type ="button "style="width: 10rem;" src="./assets/imgs/${animal.img}" class="card-img-top img-fluid" data-bs-toggle="modal" data-bs-target="#${animal.nombre}-${index}">`;

      DIVBarraSonido.innerHTML = `
      <div class="card-body p-1">
      
      <img class="p-1" height="30rem" src="./assets/imgs/audio.svg"/>
      </div>
      `;

      DIVImagenAnimal.addEventListener("click", openModalOnClick(animal));
      DIVBarraSonido.addEventListener("click", playSoundOnClick(animal));

      const ContainerDIV = document.createElement("test");
      ContainerDIV.classList.add("card", "text-white", "bg-secondary", "m-3");
      ContainerDIV.appendChild(DIVImagenAnimal);
      ContainerDIV.appendChild(DIVBarraSonido);
      AnimalesDIV.appendChild(ContainerDIV);

    
    })
    btnRegistrar.addEventListener("click", (event) => {
      const nombre = animalSelect.value.split(".")[0];
      const args = [
        nombre,
        edadSelect.value,
        animalSelect.value,
        comentariosTextArea.value,
        {},
      ];
      let instance;
  
      if (nombre === "Leon") {
        instance = new Leon(...args);
      } else if (nombre === "Lobo") {
        instance = new Lobo(...args);
      } else if (nombre === "Oso") {
        instance = new Oso(...args);
      } else if (nombre === "Serpiente") {
        instance = new Serpiente(...args);
      } else if (nombre === "Aguila") {
        instance = new Aguila(...args);
      } else {
        throw new Error("unknown animal name");
      }
  
      AnimalesEnInvestigacion.push(instance);
    })
  
})()
