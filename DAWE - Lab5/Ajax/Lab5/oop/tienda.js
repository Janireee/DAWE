class Producto {
    constructor(titulo, autor, precio) {
      this.titulo = titulo;
      this.autor = autor;
      this.precio = precio;
    }
  
    mostrar() {
    return "Producto: " + this.titulo + "<br/>" + "Autor: " + this.autor + "<br/>" + "Precio: " + this.precio + "<hr/>";
    
    }
  }
  
  export const tienda = [
    new Producto("Dublinés", "Alfonso Zapico", 18),
    new Producto("El arte de volar", "Antonio Altarriba y Kim", 20.90),
    new Producto("Próxima estación: Esperanza", "Manu Chao", 15),
  ];