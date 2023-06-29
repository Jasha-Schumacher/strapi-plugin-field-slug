function frAccents(str) {
    const accentsMap = {
      é: "e",
      è: "e",
      à: "a",
      ù: "u",
      ç: "c",
      â: "a",
      ê: "e",
      î: "i",
      ô: "o",
      û: "u",

      É: "E",
      È: "E",
      À: "A",
      Ù: "U",
      Â: "A",
      Ê: "E",
      Î: "I",
      Ô: "O",
      Û: "U",
    };
    const regex = new RegExp(Object.keys(accentsMap).join("|"), "g");
  
    return str.replace(regex, function(match) {
      return accentsMap[match] || match;
    });
  }
  
  export default frAccents;