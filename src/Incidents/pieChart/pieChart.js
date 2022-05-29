import { HTMLClip, CSSEffect } from "@donkeyclip/motorcortex";
import { colorPalette } from "../../shared/colorPalette";
import { cssObjectToString } from "../../shared/helpers";
import { fadeOutOpacityControl } from "../../shared/opacityControl";

/**
 * The purpose of extending the HTMLClip is to full, parametric
 * HTMLClips with both context and Incidents.
 *
 * HTMLClip allows you to set your html, css, fonts and audioSources
 * upfront by the corresponding getter methods. You can use the this.attrs
 * reference on these methods so you can generate dynamic content.
 * Overwrite ONLY the ones you are interested in, ignore the rest.
 * The buildTree method allows developers to define Incidents (of any plugin)
 * dynamically and position them on the Clip.
 */

function generateColor(index) {
  if (index > colorPalette.dataColors.length - 1) {
    return colorPalette.dataColors[
      Math.floor(Math.random() * Math.floor(colorPalette.dataColors.length))
    ];
  }
  return colorPalette.dataColors[index];
}

export default class PieChart extends HTMLClip {
  get html() {
    this.data = this.attrs.data.data;

    return `<div class="container-pieChart">
        <h1 class="title">${this.buildTitle().join("")}</h1>
        <div class="columns">
          <div class="col-1">
            <div class="piechart"></div>
          </div>
          <div class="col-2">
            <div class="legend">${this.buildLegend().join("")}</div>
          </div>
        </div>
      </div>`;
  }

  get css() {
    const cssArgs = {
      data: this.attrs.data,
      palette: this.attrs.palette || {},
      font: this.attrs.font || {},
      radiusString: this.createRadiusString(),
    };
    const styles = {
      ".container-pieChart": {
        opacity: 1,
        "background-color": "transparent",
        width: "100%",
        height: "100%",
        display: "flex",
        "align-items": "center",
        "flex-direction": "column",
        "font-family": `${cssArgs.font?.fontFamily || "Staatliches, cursive"}`,
        "font-size": `${cssArgs.font?.size || "1.6rem"}`,
        color: cssArgs.palette.font || colorPalette.font,
      },
      ".title": {
        top: "-1rem",
        position: "relative",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        "flex:direction": "row",
        overflow: "hidden",
      },
      ".columns": {
        width: "100%",
        height: "100%",
        display: "flex",
      },
      ".col-1": {
        width: "65%",
        height: "100%",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
      },
      ".col-2": {
        width: "35%",
        height: "100%",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
      },
      ".piechart": {
        display: "block",
        width: "95%",
        height: "95%",
        "border-radius": "50%",
        "background-image": `conic-gradient(${cssArgs.radiusString})`,
        "margin-left": "2rem",
      },
      ".legend": {
        display: "flex",
        "flex-direction": "column",
        padding: "1rem",
        "max-width": "75%",
        "min-width": "50%",
        background: cssArgs.palette.primary || "rgba(0,0,0, 0.2)",
        position: "relative",
        top: "22.5%",
        overflow: "hidden",
      },
      ".legend-row": {
        display: "flex",
        "flex-direction": "row",
        "align-items": "center",
        "align-self": "flex-start",
      },
      ".legend-text": {
        " white-space": "nowrap",
      },
      ".space": {
        "min-width": cssArgs.font?.size
          ? `calc(${cssArgs.font.size} * 0.5)`
          : "0.8rem",
      },
      ".char": {
        position: "relative",
      },
    };

    cssArgs.data.data.forEach((elem, i) => {
      styles[".meter-" + i] = {
        background: elem.color || generateColor(i),
        width: "1rem",
        height: "1rem",
        display: "block",
        "margin-right": "0.5rem",
        "margin-bottom": "0.25rem",
      };
    });
    return cssObjectToString(styles);
  }

  get fonts() {
    return [
      {
        type: "google-font",
        src:
          this.attrs.font?.url ||
          "https://fonts.googleapis.com/css2?family=Staatliches&display=swap",
      },
    ];
  }

  buildTree() {
    fadeOutOpacityControl(this, `.container-pieChart`);

    this.static = this.attrs.timings.static ?? 1000;

    this.intro = this.attrs.timings.intro || 0;
    this.outro = this.attrs.timings.outro || 0;

    if (this.intro) {
      const rotateDuration = Math.round(this.intro * 0.8);
      const titleInDuration = Math.round(this.intro * 0.4);

      if (this.attrs.data.title) {
        [...this.attrs.data.title].forEach((char, index) => {
          const titleIn = new CSSEffect(
            {
              animatedAttrs: {
                right: "0%",
                opacity: 1,
              },
              initialValues: {
                right: "-102%",
                opacity: 0,
                position: "relative",
              },
            },
            {
              duration: Math.round(
                titleInDuration / this.attrs.data.title.length
              ),
              selector: `.char-${index}`,
              easing: "easeOutCubic",
            }
          );
          this.addIncident(
            titleIn,
            Math.round(titleInDuration / this.attrs.data.title.length) * index
          );
        });
      }

      const rotateIn = new CSSEffect(
        {
          animatedAttrs: {
            "background-image": `conic-gradient(${this.createRadiusString()})`,
          },
          initialValues: {
            "background-image": `conic-gradient(${this.createNullRadiusString()})`,
          },
        },
        {
          duration: rotateDuration,
          selector: `.piechart`,
          easing: "easeInOutCubic",
        }
      );
      this.addIncident(rotateIn, titleInDuration - this.intro * 0.2);

      const legendIn = new CSSEffect(
        {
          animatedAttrs: {
            width: "75%",
            "min-width": "50%",
            opacity: 1,
          },
          initialValues: {
            width: "0%",
            "min-width": "0%",
            opacity: 0,
          },
        },
        {
          duration: rotateDuration,
          selector: ".legend",
          easing: "easeInOutCubic",
        }
      );

      this.addIncident(legendIn, titleInDuration - this.intro * 0.2);
    }

    const staticPie = new CSSEffect(
      {
        animatedAttrs: {},
      },
      {
        duration: this.static,
        selector: ".container-pieChart",
      }
    );

    this.addIncident(staticPie, this.intro);

    if (this.attrs.timings?.outro) {
      const outroDuration = Math.round(this.attrs.timings?.outro);

      const titleOut = new CSSEffect(
        {
          animatedAttrs: {
            top: "-10%",
          },
          initialValues: {
            top: "0%",
          },
        },
        {
          duration: outroDuration * 0.5,
          selector: ".title",
          easing: "easeInQuart",
        }
      );
      this.addIncident(titleOut, this.intro + this.static + this.outro * 0.2);

      const legendOut = new CSSEffect(
        {
          animatedAttrs: {
            width: "0%",
            "min-width": "0%",
            opacity: 0,
          },
        },
        {
          duration: outroDuration,
          selector: ".legend",
          easing: "easeInOutCirc",
        }
      );
      this.addIncident(legendOut, this.intro + this.static);

      const pieOut = new CSSEffect(
        {
          animatedAttrs: {
            "background-image": `conic-gradient(${this.createNullRadiusString()})`,
          },
          initialValues: {
            "background-image": `conic-gradient(${this.createRadiusString()})`,
          },
        },
        {
          duration: outroDuration,
          selector: `.piechart`,
          easing: "easeInOutCubic",
        }
      );
      this.addIncident(pieOut, this.intro + this.static);
    }
  }

  createRadiusString() {
    let gradientString = "";
    let turnCount = 0;
    for (const datum in this.data) {
      if (datum === "0") {
        gradientString += `
                    ${this.data[datum].color || generateColor(datum)}
                    ${this.data[datum].value / 100}turn,
                `;
      } else {
        gradientString += `
                    ${this.data[datum - 1].color || generateColor(datum)}
                    ${this.data[datum - 1].value / 100}turn,
                    ${this.data[datum].color || generateColor(datum)}
                    ${turnCount + this.data[datum].value / 100}turn,
                `;
      }
      turnCount += this.data[datum].value / 100;
    }

    return gradientString + "rgba(0,0,0,0) 0 360deg";
  }

  createNullRadiusString() {
    let gradientString = "";
    for (const datum in this.data) {
      if (datum === "0") {
        gradientString += `
                    ${this.data[datum].color || generateColor(datum)}
                    ${0}turn,
                `;
      } else {
        gradientString += `
                    ${this.data[datum - 1].color || generateColor(datum)}
                    ${0}turn,
                    ${this.data[datum].color || generateColor(datum)}
                    ${0}turn,
                `;
      }
    }

    return gradientString + "rgba(0,0,0,0) 0 360deg";
  }

  buildTitle() {
    return (this.data.title || []).map(
      (char, index) =>
        `<div class="char">
          <div class="char-${index} ${char === " " ? " space" : ""}">
            ${char}
          </div>
        </div>`
    );
  }

  buildLegend() {
    return this.data.map((elem, index) => {
      if (elem.name.length > 24) {
        elem.name = elem.name.substring(0, 21) + "...";
      }
      return `<div class="legend-row">
          <div class="meter-${index}"></div>
          <div class="legend-text">${elem.name}</div>
        </div>`;
    });
  }
}
