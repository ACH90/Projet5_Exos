//votre code ici

function printNumbers(n) {
  let result = ""; //Initialiser chaine de caractères
  for (let i = 1; i <= n; i++) {
    //Boucle d'itération
    result += i === n ? i : i + " "; //Concatenation
  }
  return result; //Retourner la chaine de caractères finale
}

export default printNumbers;
