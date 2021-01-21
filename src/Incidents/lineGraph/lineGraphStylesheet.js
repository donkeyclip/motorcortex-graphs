import jss, { createGenerateId } from 'jss';

export default function buildCSS(lineGraph) {
    const createGenerateId = () => {
        return rule => rule.key
    }
    jss.setup({createGenerateId});
    const styles = {
        container: {
            width: "100%",
            height: "100%",
            background: lineGraph.backgroundC,
            "font-family": lineGraph.fontFamily,
            "font-size": lineGraph.fontSizeTitle,
        },
        viewport: {
            width: "100%",
            height: "100%",
        },
        "title-container": {
            background: "transparent",
            width: "70%",
            height: "10%",
            top: "8%",
            left: "8%",
            position: "absolute",
            display: "flex",
            "align-items": "center",
            "z-index": "1",
            "justify-content": "space-around",
        },
        "title-wrapper": {
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
            overflow: "visible"
        },
        "lines-container": {
            width: `100%`,
            height: `100%`,
            "min-height": "100%",
            "min-width": "100%",
            overflow: "visible"
        },
        datapoint: {
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
            width: "1%",
            display: "flex",
            "flex-direction": "column-reverse",
            "justify-content": "space-between",
        },
        "stele-block": {
            width: "100%",
            height: `${Math.trunc(lineGraph.linesHeight * (0.26 / lineGraph.steleBlockNum))}px`,
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
        "x-labels-back-wrapper": {
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
        "x-labels-container": {
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
        },
        "inner-label-container": {
            background: lineGraph.quaternaryC,
            "font-size": lineGraph.fontSizeInner,
            opacity: "0.6",
            width: `${10 / 2 * lineGraph.data.length}%`,
            "min-width": `6%`,
            "max-width": `10%`,
            height: "7%",
            position: "absolute",
        },
    };

    for (let l = 0; l < lineGraph.dataSetsNum; l++) {
        styles[`line-${l}-label-container`] = {
            width: "100%",
            height: "100%",
            position: "absolute",
            "z-index": `${2 + l}`,
        };

        for (let i = 0; i < lineGraph.data.length; i++) {
            let targetTop = lineGraph.findPointY(i, l) 
                - (lineGraph.linesHeight * 0.083);

            let fullWidth = ((10 / 2 * lineGraph.data.length) > 10) ?
                10 : (10 / 2 * lineGraph.data.length);
            fullWidth = (fullWidth < 6) ? 6 : fullWidth;
            let targetLeft = lineGraph.findPointX(i) 
                - ((fullWidth * lineGraph.linesWidth / 100) * 0.5);

            styles[`label-${lineGraph.data[i].name}-${l}`] = {
                top: `${targetTop}px`,
                left: `${targetLeft}px`,
            };
        }

    }
    let styleSheet = jss.createStyleSheet(styles).toString();

    for (let l = 0; l < lineGraph.dataSetsNum; l++) {
        for (let i = 0; i < lineGraph.data.length; i++) {
            styleSheet += `
                #point-${l}-${i}:hover + #label-${lineGraph.data[i].name}-${l} {
                    background-color: red;
                }
            `;
        }
    }

    return styleSheet;
}