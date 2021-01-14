import jss, { createGenerateId } from 'jss';

export default function buildCSS(cssArgs) {
    const createGenerateId = () => {
        return rule => rule.key
    }
    jss.setup({createGenerateId});

    const styles = {
        "y-axis": {
            width: "4px",
            height: "70%",
            left: "14%",
            top: "15%",
            background: cssArgs.tertiaryC,
            position: "absolute",
        },
        "x-axis": {
            width: "74%",
            height: "4px",
            top: "85%",
            left: "14%",
            background: cssArgs.tertiaryC,
            position: "absolute",
        },
        gridlines: {
            width: "100%",
            height: "calc(100% + 3px)",
            display: "flex",
            "flex-direction": "column",
            "justify-content": "space-between",
        },
        gridLine: {
            height: "3px",
            width: "100%",
            background: cssArgs.secondaryC,
            "align-self": "flex-end",
        },
        graph: {
            top: 0,
            left: 0,
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            "justify-content": "space-around",
            overflow: "hidden",
        },
        "bar-container": { 
            "align-self": "flex-end",
            width: `${(100/cssArgs.data.length)}%`,
            margin: `0% ${(10/cssArgs.data.length)+1}%`,
            height: "100%",
            display: "flex",
        },
        "bar-fill": {
            width: "100%",
            height: "100%",
            background: cssArgs.primaryC,
            "align-self": "center",
        },
        "block-background": {
            width: "100%",
            height: "100%",
            background: cssArgs.accentC,
            position: "relative",
        },
        "x-labels-back-wrapper": {
            width: "70%",
            height: "5%",
            top: "87%",
            left: "16%",
            position: "absolute",
            display: "flex",
            "flex-direction": "row-reverse",
        },
        "x-labels-container": {
            "font-family": cssArgs.fontFamily,
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
        "letter-wrapper": {
            "font-size": cssArgs.fontSize,
            display: "flex",
            "flex-direction": "column",
            position: "relative",
        },
        "letter-container": {
            overflow: "hidden",
            position: "relative",
        },
        "title-back-wrapper": {
            width: "70%",
            height: "5%",
            top: "8%",
            left: "16%",
            position: "absolute",
            display: "flex",
            "flex-direction": "row-reverse",
        },
        "title-container": {
            "font-family": cssArgs.fontFamily,
            background: "transparent",
            width: "70%",
            height: "5%",
            top: "8%",
            left: "16%",
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
        "subtitle-wrapper": {
            display: "flex",
        },
        "label-container": {
            display: "flex",
            "flex-direction": "row",
            overflow: "hidden",
        },
        "subtitle-position-end": {
            display: "flex",
            "flex-grow": "1",
            "padding-right": "6px",
            "flex-wrap": "nowrap",
            overflow: "hidden",
            "justify-content": "flex-end",
        },
        container: {
            width: "100%",
            height: "100%",
            background: cssArgs.backgroundC,
            display: "flex",
        },
        "graph-container": {
            left: "16%",
            top: "17%",
            width: "70%",
            height: "63%",
            position: "absolute",
        },
        fontColorOn: {
            color: cssArgs.fontC,
        },
        "space-char": {
            visibility: "hidden",
        },
        "accent-background": {
            width: "100%",
            height: "100%",
            background: cssArgs.accentC,
            position: "relative",
        }
    };

    cssArgs.data.map( (datum) => {
        styles[`${datum.name}-bar`] = {
            "align-self": "flex-end",
            width: `${(100/cssArgs.data.length)}%`,
            margin: `0% ${(10/cssArgs.data.length)+1}%`,
            height: "100%",
            display: "flex",
        };
        styles[`${datum.name}-bar`].height = `${(datum.value.toFixed(2)/cssArgs.maxPoint)*100}%`;

        styles[`${datum.name}-bar-fill`] = {
            height: "100%",
        };
    });
    const styleSheet = jss.createStyleSheet(styles).toString();

    return styleSheet;
}