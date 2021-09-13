export default {
  extractUnitsNums: (givenString) => {
    const numberPartRegexp = new RegExp(
      "^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)",
      "gi"
    );
    const widthNumberPart = givenString.match(numberPartRegexp)[0];
    const widthUnitPart = givenString.substring(widthNumberPart.length);
  
    if (
      isNumber(Number(widthNumberPart)) &&
      (widthUnitPart !== "%" || widthUnitPart !== "px")
    ) {
      return {
        number: Number(widthNumberPart),
        unit: widthUnitPart,
      };
    }
  }
}

function isNumber(value) {
  return typeof value === "number" && isFinite(value);
}
