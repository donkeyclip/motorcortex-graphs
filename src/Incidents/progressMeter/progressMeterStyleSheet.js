import jss from "jss";

export default function buildCSS(progressMeter) {
  const createGenerateId = () => {
    return (rule) => rule.key;
  };
  jss.setup({ createGenerateId });
  const styles = {
    "container-progressMeter": {
      width: "100%",
      height: "100%",
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
      "flex-direction": "column",
      "font-family": progressMeter.fontFamily,
      "font-size": progressMeter.fontSize,
      "background-color": progressMeter.backgroundC,
    },
    "svg-container": {
      width: `${progressMeter.boxSize}px`,
      height: `${progressMeter.boxSize}px`,
      position: "relative",
    },
    "svg-viewbox": {
      width: `100%`,
      height: `100%`,
    },
    "meter-general": {
      "stroke-width": progressMeter.boxSize * 0.06,
      "stroke-linecap": "round",
      "fill-opacity": 0,
      "transform-origin": "center",
      transform: "rotate(-90deg)",
    },
    "meter-track": {
      stroke: progressMeter.accentC,
      opacity: 0.3,
      "stroke-dasharray": progressMeter.pathLength,
      "stroke-dashoffset": 0,
    },
    "meter-path": {
      stroke: progressMeter.accentC,
      "stroke-dasharray": progressMeter.pathLength,
      "stroke-dashoffset":
        progressMeter.pathLength -
        (progressMeter.pathLength * progressMeter.data.value) / 100,
    },
    "indicator-general": {
      width: `${progressMeter.boxSize}px`,
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
      color: progressMeter.fontC,
    },
    "indicator-label": {
      "align-items": "center",
    },
    "indicator-value": {},
    "indicator-center": {
      position: "absolute",
      "font-size": "165%",
    },
    "indicator-inner": {
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
    },
    "inner-svg-container": {
      width: `100%`,
      height: `100%`,
      position: "absolute",
      top: 0,
      left: 0,
    },
    "path-container": {
      width: `100%`,
      height: `100%`,
      position: "absolute",
      top: 0,
      left: 0,
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
    },
    "svg-preset": {
      width: `${progressMeter.boxSize * 0.5}px`,
      height: `${progressMeter.boxSize * 0.5}px`,
    },
    "gradient-filter": {},
    "gradient-stop": {
      offset: `${progressMeter.data.value}%`,
    },
  };

  return jss.createStyleSheet(styles).toString();
}
