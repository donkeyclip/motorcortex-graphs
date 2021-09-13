import jss, { createGenerateId } from "jss";
import config from "../../incident_config";

export default function buildCSS(lineGraph) {
  const createGenerateId = () => {
    return (rule) => rule.key;
  };
  jss.setup({ createGenerateId });

  const styles = {
    "container-lineGraph": {
      width: "100%",
      height: "100%",
      background: lineGraph.backgroundC,
      "font-family": lineGraph.fontFamily,
      "font-size": lineGraph.fontSizeTitle,
      display: "flex",
    },
    "viewport-lineGraph": {
      position: "absolute",
      top: `${lineGraph.legend ? "2%" : "0%"}`,
      "transform-origin": "top left",
      width: "100%",
      height: "100%",
    },
    "title-container-lineGraph": {
      background: "transparent",
      width: "60%",
      height: "10%",
      top: "8%",
      left: "8%",
      position: "absolute",
      display: "flex",
      "align-items": "center",
      "z-index": "1",
      "justify-content": "space-around",
    },
    "title-wrapper-lineGraph": {
      display: "flex",
      "flex-grow": "2",
      "flex-wrap": "nowrap",
      overflow: "hidden",
      "padding-left": "6px",
    },
    "letter-wrapper-title": {
      display: "flex",
      "flex-direction": "column",
      position: "relative",
      "font-size": "190%",
    },
    "legend-wrapper": {
      position: "absolute",
      width: `${lineGraph.dataSetsNum === 1 ? 14 : 26}%`,
      height: `${lineGraph.legendHeight}%`,
      top: `${
        11 -
        3 *
          (lineGraph.legendHeightFactor +
            (lineGraph.legendHeightFactor % 1 ? 1 : 0) -
            1)
      }%`,
      left: `${68 + (lineGraph.dataSetsNum === 1 ? 12 : 0)}%`,
      background: lineGraph.quinaryC,
      "font-size": lineGraph.fontSizeInner,
      display: "flex",
      "flex-wrap": "wrap",
      "align-items": "center",
      "z-index": "1",
    },
    "line-wrapper": {
      width: `${lineGraph.dataSetsNum === 1 ? 100 : 50}%`,
      height: `${
        (1 /
          (lineGraph.legendHeightFactor +
            (lineGraph.legendHeightFactor % 1 ? 1 : 0))) *
        100
      }%`,
      display: "flex",
      overflow: "hidden",
    },
    "color-wrapper": {
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
      width: "25%",
      height: "100%",
    },
    "line-color": {
      width: "60%",
      height: "60%",
    },
    "line-title": {
      display: "flex",
      "align-items": "flex-start",
      "justify-content": "flex-start",
      "font-size": lineGraph.fontSizeInner,
      width: "75%",
      height: "100%",
    },
    "graph-background": {
      left: "10%",
      top: "13%",
      width: "80%",
      height: "70%",
      position: "absolute",
      background: lineGraph.secondaryC,
    },
    "svg-container": {
      width: `76%`,
      height: `58%`,
      top: "21%",
      left: "12%",
      position: "relative",
      "z-index": "1",
      overflow: "visible",
    },
    "lines-container": {
      width: `100%`,
      height: `100%`,
      "min-height": "100%",
      "min-width": "100%",
      overflow: "visible",
    },
    "dataStele-container": {
      width: `76%`,
      height: "58%",
      top: "21%",
      left: "12%",
      position: "absolute",
      display: "flex",
      "align-items": "center",
      "justify-content": "space-around",
      "z-index": "0",
    },
    "data-stele": {
      height: "100%",
      display: "flex",
      "flex-direction": "column-reverse",
      "justify-content": "space-between",
    },
    "line-grid": {
      width: "100%",
      height: "100%",
    },
    "stele-grid": {
      width: "1%",
      height: "100%",
    },
    "line-grid-block": {
      width: "100%",
      height: `${Math.trunc(
        lineGraph.linesHeight *
          ((0.13 * lineGraph.gridH) / lineGraph.steleBlockNum)
      )}px`,
    },
    "stele-grid-block": {
      width: "100%",
      height: `${Math.trunc(
        lineGraph.linesHeight *
          ((0.26 * lineGraph.gridH) / lineGraph.steleBlockNum)
      )}px`,
    },
    "stele-block": {
      "max-height": "5px",
      opacity: "0.8",
      background: lineGraph.primaryC,
    },
    "graph-labels-container": {
      width: `76%`,
      height: "58%",
      top: "21%",
      left: "12%",
      position: "absolute",
    },
    "x-labels-back-wrapper-lineGraph": {
      width: `76%`,
      height: "6%",
      top: "80%",
      left: "12%",
      position: "absolute",
      display: "flex",
      "justify-content": "flex-end",
    },
    "block-background": {
      width: "100%",
      height: "100%",
      background: lineGraph.accentC,
      position: "relative",
    },
    "x-labels-container-lineGraph": {
      background: "transparent",
      width: `76%`,
      height: "6%",
      top: "80%",
      left: "12%",
      position: "absolute",
      display: "flex",
      "align-items": "center",
      "z-index": "1",
      "justify-content": "space-around",
    },
    "label-container": {
      display: "flex",
      "flex-direction": "row",
      overflow: "hidden",
    },
    "letter-container": {
      overflow: "hidden",
      position: "relative",
    },
    "letter-wrapper-label": {
      "font-size": "100%",
      display: "flex",
      "flex-direction": "column",
      position: "relative",
    },
    fontColorOn: {
      color: lineGraph.fontC,
    },
    "space-char": {
      visibility: "hidden",
    },
    "inner-label": {
      opacity: "1",
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
      width: "100%",
      height: "100%",
    },
    "inner-label-container": {
      "font-size": lineGraph.fontSizeInner,
      opacity: "0.6",
      width: `${(10 / 2) * lineGraph.data.length}%`,
      "min-width": `6%`,
      "max-width": `10%`,
      height: "7%",
      position: "absolute",
      display: `${lineGraph.hover ? "none" : "block"}`,
      "z-index": "2",
    },
    hoverPoint: {
      position: "absolute",
      width: `${config.lineGraph.originalDims.width * 0.01}px`,
      height: `${config.lineGraph.originalDims.width * 0.01}px`,
      "border-radius": "50%",
      "z-index": "9999",
    },
  };

  const colorCounter = 2;
  for (let l = 0; l < lineGraph.dataSetsNum; l++) {
    let dynamicColor;
    if (lineGraph.dataSetsNum > 1) {
      dynamicColor = lineGraph.dataSets[l].color;
    } else {
      dynamicColor = lineGraph.quaternaryC;
    }

    styles[`color-${l}`] = {
      background: dynamicColor,
    };

    styles[`line-${l}-label-container`] = {
      width: "100%",
      height: "100%",
      position: "absolute",
    };

    for (let i = 0; i < lineGraph.data.length; i++) {
      const targetTop =
        lineGraph.findPointY(i, l) - lineGraph.linesHeight * 0.083;

      let fullWidth =
        (10 / 2) * lineGraph.data.length > 10
          ? 10
          : (10 / 2) * lineGraph.data.length;
      fullWidth = fullWidth < 6 ? 6 : fullWidth;
      const targetLeft =
        lineGraph.findPointX(i) -
        ((fullWidth * lineGraph.linesWidth) / 100) * 0.5;

      styles[`label-${l}-${lineGraph.data[i].name}`] = {
        background: dynamicColor,
        top: `${targetTop}px`,
        left: `${targetLeft}px`,
      };

      const pointLeftOffset =
        ((fullWidth * lineGraph.linesWidth) / 100) * 0.5 -
        (config.lineGraph.originalDims.width * 0.01) / 2;

      const pointTopOffset = 0.07 * lineGraph.linesHeight;

      styles[`hoverPoint-${l}-${lineGraph.data[i].name}`] = {
        top: `${targetTop + pointTopOffset}px`,
        left: `${targetLeft + pointLeftOffset}px`,
      };
    }
  }
  let styleSheet = jss.createStyleSheet(styles).toString();

  for (let l = 0; l < lineGraph.dataSetsNum; l++) {
    for (let i = 0; i < lineGraph.data.length; i++) {
      styleSheet += `
                .hoverPoint-${l}-${lineGraph.data[i].name}:hover + .label-${l}-${lineGraph.data[i].name} {
                    display: block;
                }
            `;
    }
  }

  return styleSheet;
}
