function umlauts(str) {
    const umlautMap = {
      ö: "oe",
      Ö: "Oe",
      ä: "ae",
      Ä: "Ae",
      ü: "ue",
      Ü: "Ue",
    };
    const regex = new RegExp(Object.keys(umlautMap).join("|"), "g");
  
    return str.replace(regex, function(match) {
      return umlautMap[match] || match;
    });
  }
  
  export default umlauts;
  