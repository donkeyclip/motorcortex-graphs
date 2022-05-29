const numberPartRegexp = /^[+-]?(\d+([.]\d*)?|[.]\d+)/gi;
export default {
  extractUnitsNums: (givenString) => {
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
  },
};

function isNumber(value) {
  return typeof value === "number" && isFinite(value);
}

export function cssObjectToString(style) {
  return Object.entries(style)
    .map(
      ([k, v]) =>
        `${k}{${Object.entries(v)
          .map(([key, value]) => `${key}:${value}`)
          .join(";\n")}}`
    )
    .join("\n");
}
