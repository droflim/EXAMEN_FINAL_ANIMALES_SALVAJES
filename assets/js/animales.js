export default class Animal {
  #nombre;
  #edad;
  #img;
  #comentarios;
  #sonido;

  constructor(nombre, edad, img, comentarios, sonido) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#img = img;
    this.#comentarios = comentarios;
    this.#sonido = sonido;
  }

  get Nombre() {
    return this.#nombre;
  }

  get Edad() {
    return this.#edad;
  }

  get Img() {
    return this.#img;
  }

  get Sonido() {
    return this.#sonido;
  }

  set Comentarios(comentarios) {
    this.#comentarios = comentarios;
  }

  get Comentarios() {
    return this.#comentarios;
  }
}

export class Leon extends Animal {
  constructor(...args) {
    super(...args);
  }

  Rugir() {
    console.log("rooooar");
  }
}

export class Lobo extends Animal {
  constructor(...args) {
    super(...args);
  }

  Aullar() {
    console.log("auuuuuuu");
  }
}

export class Oso extends Animal {
  constructor(...args) {
    super(...args);
  }

  Gruñir() {
    console.log("grrrrrrr");
  }
}

export class Serpiente extends Animal {
  constructor(...args) {
    super(...args);
  }

  Sisear() {
    console.log("zzzzzzzzz");
  }
}

export class Aguila extends Animal {
  constructor(...args) {
    super(...args);
  }

  Chillar() {
    console.log("chrrrchrhchrhchr");
  }
}
