import { CSSEffect, HTMLClip, loadPlugin } from "@donkeyclip/motorcortex";
import CounterPlugin from "@donkeyclip/motorcortex-counter";
import { colorPalette } from "../../shared/colorPalette";
import { cssObjectToString } from "../../shared/helpers";
import { fadeOutOpacityControl } from "../../shared/opacityControl";

const Counter = loadPlugin(CounterPlugin);

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
export default class ProgressBar extends HTMLClip {
  get html() {
    const list = this.attrs.data.map((elem, index) => {
      return `<div class="row row-${index}">
          <div class="bar-header">${elem.name}</div>
          <div class="container-bar container-bar-${index}">
            <div
              class="inner-bar inner-bar-${index} ${
        elem.value < this.criticalValue ? "extra-trunced-" + index : ""
      }"
            ></div>
          </div>
          <div class="text indicator-${index}">${elem.value}</div>
          <div class="text text-unit">
            ${!this.attrs.options?.hidePercentage ? "%" : ""}
          </div>
        </div>`;
    });

    return `<div class="container-progressBar">${list.join("")}</div>`;
  }

  get css() {
    const cssArgs = {
      barSum: this.barSum,
      barCount: this.barCount,
      data: this.attrs.data,
      palette: this.attrs.palette ? this.attrs.palette : {},
      font: this.attrs.font ? this.attrs.font : {},
      options: this.attrs.options ? this.attrs.options : {},
    };

    const styles = {
      ".container-progressBar": {
        height: "100%",
        background: cssArgs.palette.background || colorPalette.background,
        display: "flex",
        color: cssArgs.palette.font || colorPalette.font,
        "font-family": cssArgs.font.fontFamily || "'Staatliches', cursive",
      },
      ".row": {
        display: "flex",
        "flex-direction": "row",
        position: "absolute",
        left: "20%",
        "align-items": "center",
        height: `${60 / cssArgs.barCount}%`,
        width: "100%",
      },
      ".container-bar": {
        position: "absolute",
        height: "100%",
        background: cssArgs.palette.secondary
          ? cssArgs.palette.secondary
          : colorPalette.darkGray,
        "border-radius": "4rem",
        width: "60%",
        "box-shadow": "2px 2px 5px gray",
        border: `0.2rem solid ${cssArgs.palette.accent || colorPalette.accent}`,
        "z-index": "1",
        overflow: "hidden",
      },
      ".inner-bar": {
        position: "relative",
        background: cssArgs.palette.primary || colorPalette.lightGray,
        height: "102%",
        "border-radius": "4rem",
        bottom: "-1px",
        "z-index": "2px",
        top: "-0.5px",
      },
      ".text": {
        position: "relative",
        "z-index": "0",
        opacity: "1",
        left: "62%",
        "font-size": cssArgs.font.size || "1.2rem",
      },
      ".bar-header": {
        position: "absolute",
        left: "-21%",
        "text-align": "right",
        width: "20%",
        "font-size": cssArgs.font.size || "1.2rem",
      },
    };

    const avg = cssArgs.barSum / cssArgs.barCount;
    cssArgs.data.forEach((elem, index) => {
      styles[`.row-${index}`] = {
        bottom: `${
          50 +
          ((avg - index) * 100) / cssArgs.barCount -
          (60 / cssArgs.barCount) * 2.15
        }%`,
      };
      styles[`.inner-bar-${index}`] = {
        width: `${elem.value.toFixed(2)}%`,
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
    this.static = this.attrs.timings.static ?? 1000;

    this.intro = this.attrs.timings.intro || 0;
    this.outro = this.attrs.timings.outro || 0;
    const avg = this.barSum / this.barCount;
    fadeOutOpacityControl(this, `.container-progressBar`);

    if (this.attrs.timings?.intro) {
      const slideInDuration = Math.floor(this.intro * 0.33);
      const expandBaseDuration = Math.floor(this.intro * 0.25);
      const expandBarDuration = Math.floor(this.intro * 0.33);

      for (let i = 0; i < this.barCount; i++) {
        const slideIn = new CSSEffect(
          {
            animatedAttrs: {
              bottom: `${
                50 +
                ((avg - i) * 100) / this.barCount -
                (60 / this.barCount) * 2.15
              }%`,
              opacity: 1,
            },
            initialValues: {
              bottom: `-${65 / this.barCount}%`,
              opacity: 0,
            },
          },
          {
            duration: slideInDuration,
            selector: `.row-${i}`,
            easing: "easeInOutQuad",
          }
        );

        const expand_base = new CSSEffect(
          {
            animatedAttrs: {
              width: "60%",
            },
            initialValues: {
              width: "0.2%",
            },
          },
          {
            duration: expandBaseDuration,
            selector: `.container-bar-${i}`,
            easing: "easeInOutQuad",
          }
        );

        const expand_bar = new CSSEffect(
          {
            animatedAttrs: {
              width: `${this.attrs.data[i].value.toFixed(2)}%`,
            },
            initialValues: {
              width: "0%",
            },
          },
          {
            duration: expandBarDuration,
            selector: `.inner-bar-${i}`,
            easing: "easeInOutQuad",
          }
        );

        const indicatorCounter = new Counter.Counter(
          {
            animatedAttrs: {
              count: this.attrs.data[i].value,
            },
            initialValues: {
              count: 0,
            },
          },
          {
            easing: "easeInOutQuad",
            selector: `.indicator-${i}`,
            duration: expandBarDuration,
          }
        );

        this.addIncident(slideIn, 0);
        this.addIncident(expand_base, slideInDuration);
        this.addIncident(expand_bar, slideInDuration + expandBaseDuration);
        this.addIncident(
          indicatorCounter,
          slideInDuration + expandBaseDuration
        );
      }

      const expand_text = new CSSEffect(
        {
          animatedAttrs: {
            left: "62%",
            opacity: 1,
          },
          initialValues: {
            left: "0%",
            opacity: 0,
          },
        },
        {
          duration: expandBarDuration,
          selector: `.text`,
          easing: "easeInOutQuad",
        }
      );

      this.addIncident(expand_text, slideInDuration);
    }

    const staticGraph = new CSSEffect(
      { animatedAttrs: {} },
      { duration: this.static, selector: ".container-progressBar" }
    );
    this.addIncident(staticGraph, this.intro);

    if (this.outro) {
      const bufferTime = this.intro + this.static + this.outro;
      const slideInDuration = Math.floor(this.outro * 0.33);
      const expandBaseDuration = Math.floor(this.outro * 0.25);
      const expandBarDuration = Math.floor(this.outro * 0.33);

      for (let i = 0; i < this.barCount; i++) {
        const slideIn = new CSSEffect(
          {
            animatedAttrs: {
              bottom: `-${65 / this.barCount}%`,
              opacity: 0,
            },
            initialValues: {
              bottom: `${
                50 +
                ((avg - i) * 100) / this.barCount -
                (60 / this.barCount) * 2.15
              }%`,
              opacity: 1,
            },
          },
          {
            duration: slideInDuration,
            selector: `.row-${i}`,
            easing: "easeInOutQuad",
          }
        );

        const expand_base = new CSSEffect(
          {
            animatedAttrs: {
              width: "0.2%",
            },
            initialValues: {
              width: "60%",
            },
          },
          {
            duration: expandBaseDuration,
            selector: `.container-bar-${i}`,
            easing: "easeInOutQuad",
          }
        );

        const expand_bar = new CSSEffect(
          {
            animatedAttrs: {
              width: "0%",
            },
            initialValues: {
              width: `${this.attrs.data[i].value.toFixed(2)}%`,
            },
          },
          {
            duration: expandBarDuration,
            selector: `.inner-bar-${i}`,
            easing: "easeInOutQuad",
          }
        );

        const indicatorCounter = new Counter.Counter(
          {
            animatedAttrs: {
              count: 0,
            },
            initialValues: {
              count: this.attrs.data[i].value,
            },
          },
          {
            easing: "easeInOutQuad",
            selector: `.indicator-${i}`,
            duration: expandBarDuration,
          }
        );
        this.addIncident(slideIn, bufferTime - slideInDuration);
        this.addIncident(
          expand_base,
          bufferTime - slideInDuration - expandBaseDuration
        );
        this.addIncident(
          expand_bar,
          bufferTime - slideInDuration - expandBaseDuration - expandBarDuration
        );
        this.addIncident(
          indicatorCounter,
          bufferTime - slideInDuration - expandBaseDuration - expandBarDuration
        );
      }

      const expand_text = new CSSEffect(
        {
          animatedAttrs: {
            left: "0%",
            opacity: 0,
          },
          initialValues: {
            left: "62%",
            opacity: 1,
          },
        },
        {
          duration: expandBarDuration,
          selector: `.text`,
          easing: "easeInOutQuad",
        }
      );

      this.addIncident(
        expand_text,
        bufferTime - slideInDuration - expandBaseDuration * 1.1
      );
    }
  }

  get barSum() {
    let sum = 0;
    for (let i = 1; i <= this.barCount; i++) {
      sum += i;
    }
    return sum;
  }

  get barCount() {
    return this.attrs.data.length;
  }

  get criticalValue() {
    const barCount = this.barCount / 10;
    if (barCount === 1) {
      return barCount * 10;
    } else if (barCount > 1) {
      return (barCount - 1) * 10;
    } else {
      return (barCount + 1) * 10;
    }
  }
}
