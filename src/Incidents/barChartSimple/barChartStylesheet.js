import { cssObjectToString } from "../../shared/helpers";

export default function buildCSS(barChart) {
  const styles = {
    ".y-axis": {
      width: "4px",
      height: "70%",
      left: "14%",
      top: "15%",
      background: barChart.tertiaryC,
      position: "absolute",
    },
    ".x-axis": {
      width: "74%",
      height: "4px",
      top: "85%",
      left: "14%",
      background: barChart.tertiaryC,
      position: "absolute",
    },
    ".gridlines": {
      width: "100%",
      height: "calc(100% + 3px)",
      display: "flex",
      "flex-direction": "column",
      "justify-content": "space-between",
    },
    ".gridLine": {
      height: "3px",
      width: "100%",
      background: barChart.secondaryC,
      "align-self": "flex-end",
    },
    ".graph": {
      top: 0,
      left: 0,
      position: "absolute",
      width: "100%",
      height: "100%",
      display: "flex",
      "justify-content": "space-around",
      overflow: "hidden",
    },
    ".bar-container": {
      "align-self": "flex-end",
      width: `${100 / barChart.data.length}%`,
      margin: `0% ${10 / barChart.data.length + 1}%`,
      height: "100%",
      display: "flex",
    },
    ".bar-fill": {
      width: "100%",
      height: "100%",
      background: barChart.primaryC,
      "align-self": "center",
    },
    ".block-background": {
      width: "100%",
      height: "100%",
      background: barChart.accentC,
      position: "relative",
    },
    ".title-back-animHelper": {
      width: "100%",
      height: "100%",
      display: "flex",
      "flex-direction": "row-reverse",
    },
    ".title-back-wrapper": {
      width: "100%",
      height: "100%",
      display: "flex",
      position: "absolute",
      "flex-direction": "row",
      "z-index": "-1",
    },
    ".x-labels-back-wrapper": {
      width: "70%",
      height: "5%",
      top: "87%",
      left: "16%",
      position: "absolute",
      display: "flex",
      "flex-direction": "row-reverse",
    },
    ".x-labels-container": {
      "font-family": barChart.fontFamily,
      background: "transparent",
      width: "70%",
      height: "5%",
      top: "87%",
      left: "16%",
      position: "absolute",
      display: "flex",
      "align-items": "center",
      "z-index": "1",
      "justify-content": "space-around",
    },
    ".letter-wrapper": {
      "font-size": barChart.fontSize,
      display: "flex",
      "flex-direction": "column",
      position: "relative",
    },
    ".letter-container": {
      overflow: "hidden",
      position: "relative",
    },
    ".title-container": {
      "font-family": barChart.fontFamily,
      background: "transparent",
      width: "70%",
      height: "fit-content",
      "min-height": "5%",
      "max-height": "7%",
      top: "7%",
      left: "16%",
      position: "absolute",
      display: "flex",
      "z-index": "1",
      "justify-content": "space-around",
    },
    ".title-wrapper": {
      display: "flex",
      "flex-grow": "2",
      "flex-wrap": "wrap",
      "align-items": "center",
      overflow: "hidden",
      "padding-left": "6px",
      "z-index": "1",
    },
    ".subtitle-wrapper": {
      display: "flex",
      "z-index": "1",
      "flex-wrap": "wrap",
      "align-items": "center",
    },
    ".subtitle-position-end": {
      display: "flex",
      "flex-grow": "1",
      "padding-right": "6px",
      "flex-wrap": "wrap",
      "max-width": "34%",
      overflow: "hidden",
      "justify-content": "flex-end",
    },
    ".label-container": {
      position: "relative",
      top: "1px",
      display: "flex",
      "flex-direction": "row",
      overflow: "hidden",
    },
    ".container-barChart": {
      width: "100%",
      height: "100%",
      background: barChart.backgroundC,
      display: "flex",
    },
    ".graph-container": {
      left: "16%",
      top: "17%",
      width: "70%",
      height: "63%",
      position: "absolute",
    },
    ".fontColorOn": {
      color: barChart.fontC,
    },
    ".space-char": {
      visibility: "hidden",
    },
    ".accent-background": {
      width: "100%",
      height: "100%",
      background: barChart.accentC,
      position: "relative",
    },
  };

  barChart.data.map((datum, i) => {
    styles[`.${datum.name}-bar-${i}`] = {
      "align-self": "flex-end",
      width: `${100 / barChart.data.length}%`,
      margin: `0% ${10 / barChart.data.length + 1}%`,
      height: "100%",
      display: "flex",
    };
    styles[`.${datum.name}-bar-${i}`].height = `
            ${(datum.value.toFixed(2) / barChart.maxPoint) * 100}%`;
    styles[`.${datum.name}-bar-fill`] = {
      height: "100%",
    };
  });

  return cssObjectToString(styles);
}
