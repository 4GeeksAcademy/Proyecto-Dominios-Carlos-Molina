let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [".com", ".net", ".io"];

function generarCorreos(pronoun, adj, noun, extension) {
  let correos = [];

  for (let palabra1 of pronoun) {
    for (let palabra2 of adj) {
      for (let palabra3 of noun) {
        for (let palabra4 of extension)
          correos.push(`${palabra1}${palabra2}${palabra3}@dominio${palabra4}`);
      }
    }
  }

  return correos;
}

const todosLosCorreos = generarCorreos(pronoun, adj, noun, extension);
console.log(todosLosCorreos);
