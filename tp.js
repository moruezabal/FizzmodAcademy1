/* 
Realizar una función que permita contar la cantidad de vocales que tiene un texto que se recibe como parámetro. No habrá discriminación entre las vocales en mayúscula y en minúscula. Las vocales acentuadas no se contarán. El valor obtenido se retornará al terminar la función. Si se no se recibe un string retornará -1.
*/
function contarVocales(texto) {
  
  if (typeof texto === 'string'){
    let cantVocales = 0;
    let arrayCaracteres = texto.toLowerCase().split("");
   
    arrayCaracteres.forEach(caracter => {
      if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u" ){
        cantVocales++;
      }
    });
    return cantVocales;
  }
  else{
    return -1
  }
}

/* 
Crear un repo en github y subir todo el proyecto. Se ignorará la carpeta node_modules (para ellos está creado el archivo .gitignore en este proyecto) Esta función devolverá un string con la url del repo.
*/
function urlRepo() {
  return 'https://github.com/moruezabal/FizzmodAcademy1.git'
}

/* 
Crear una función arrow, que devuelva una clase en ES6 que contendrá dos métodos llamados contadorPalabras y hayNumeros. La clase recibirá un texto que se guardará en una propiedad llamada texto. contadorPalabras retornará la cantidad de palabras encontradas en la propiedad texto y hayNumeros devolverá true en caso de que encuentre un número en dicho texto, caso contrario retorna false. En ambos métodos, si el texto no es válido, se devolverá -1
Crear un propiedad estática contadorInstancias que me indique cuantas instancias hay de esa clase.
*/
const crearClase = () => {
  class Clase{
    constructor(textoIngresado){
      typeof textoIngresado === 'string' ? this.texto = textoIngresado : this.texto = null;
      if (Clase.contadorInstancias){
        Clase.contadorInstancias++
      }
      else{
        Clase.contadorInstancias = 1;
      }
    }
    contadorPalabras(){

      if(typeof this.texto === 'string'){ 
        if (this.texto.length === 0){
          return 0
        }
        else{
          let palabras = this.texto.trim().split(" ");
          return palabras.length
        }
      }
      else{
        return -1
      }
      
    }
    hayNumeros(){

      let numeros = "0123456789"

      if(typeof this.texto === 'string'){
        for(let i=0; i<numeros.length; i++){
          if (this.texto.includes(numeros.charAt(i))){
            return true;
          }
        }
        return false;  
      }
      else{
        return -1
      }      
    }
  }  
  Clase.contadorInstancias = 0;

  return Clase 
}

module.exports = {
  contarVocales,
  urlRepo,
  crearClase
};