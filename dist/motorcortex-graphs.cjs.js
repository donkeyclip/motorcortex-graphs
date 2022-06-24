'use strict';

var MotorCortex = require('@donkeyclip/motorcortex');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var MotorCortex__default = /*#__PURE__*/_interopDefaultLegacy(MotorCortex);

const colorPalette = {
  gray: "#75706E",
  lightGray: "#B2B1AE",
  darkGray: "#434243",
  whiteBack: "#EEEEEE",
  font: "#100300",
  accent: "#FFD800",
  background: "transparent",
  dataColors: ["rgb(117,112,110)", "rgb(255,216,0)", "rgb(87,86,87)", "rgb(163, 255, 200)", "rgb(255,255,255)", "rgb(206, 36, 132)", "rgb(68, 214, 37)", "rgb(228, 31, 31)", "rgb(68, 36, 157)", "rgb(45, 109, 121)"]
};

// Making the contents of this animation invisible before timestamp:0
// and after timestamp: {totalDuration}

function opacityControl(clip, selector) {
  clip.addIncident(new MotorCortex.CSSEffect({
    animatedAttrs: {
      opacity: 1
    },
    initialValues: {
      opacity: 0
    }
  }, {
    selector: selector,
    duration: 1
  }), 0);
  clip.addIncident(new MotorCortex.CSSEffect({
    animatedAttrs: {
      opacity: 0
    }
  }, {
    selector: selector,
    duration: 1
  }), clip.introDur + clip.staticDur + clip.outroDur - 1);
} // Static control: used for fadeout outro components
// Making the contents of this animation invisible before timestamp:0
// and after timestamp: {totalDuration}

function fadeOutOpacityControl(clip, selector) {
  clip.addIncident(new MotorCortex.CSSEffect({
    animatedAttrs: {
      opacity: 1
    },
    initialValues: {
      opacity: 0
    }
  }, {
    selector: selector,
    duration: 1
  }), 0);

  if (!clip.attrs.timings.outro) {
    clip.addIncident(new MotorCortex.CSSEffect({
      animatedAttrs: {
        opacity: 0
      }
    }, {
      selector: selector,
      duration: 1
    }), clip.attrs.timings.intro + clip.attrs.timings.static - 1);
  }
}

const numberPartRegexp = /^[+-]?(\d+([.]\d*)?|[.]\d+)/gi;
var helpers = {
  extractUnitsNums: givenString => {
    const widthNumberPart = givenString.match(numberPartRegexp)[0];
    const widthUnitPart = givenString.substring(widthNumberPart.length);

    if (isNumber(Number(widthNumberPart)) && (widthUnitPart !== "%" || widthUnitPart !== "px")) {
      return {
        number: Number(widthNumberPart),
        unit: widthUnitPart
      };
    }
  }
};

function isNumber(value) {
  return typeof value === "number" && isFinite(value);
}

function cssObjectToString(style) {
  return Object.entries(style).map(_ref => {
    let [k, v] = _ref;
    return "".concat(k, "{").concat(Object.entries(v).map(_ref2 => {
      let [key, value] = _ref2;
      return "".concat(key, ":").concat(value);
    }).join(";"), "}");
  }).join("");
}

function buildCSS$1(barChart) {
  const styles = {
    ".y-axis": {
      width: "4px",
      height: "70%",
      left: "14%",
      top: "15%",
      background: barChart.tertiaryC,
      position: "absolute"
    },
    ".x-axis": {
      width: "74%",
      height: "4px",
      top: "85%",
      left: "14%",
      background: barChart.tertiaryC,
      position: "absolute"
    },
    ".gridlines": {
      width: "100%",
      height: "calc(100% + 3px)",
      display: "flex",
      "flex-direction": "column",
      "justify-content": "space-between"
    },
    ".gridLine": {
      height: "3px",
      width: "100%",
      background: barChart.secondaryC,
      "align-self": "flex-end"
    },
    ".graph": {
      top: 0,
      left: 0,
      position: "absolute",
      width: "100%",
      height: "100%",
      display: "flex",
      "justify-content": "space-around",
      overflow: "hidden"
    },
    ".bar-container": {
      "align-self": "flex-end",
      width: "".concat(100 / barChart.data.length, "%"),
      margin: "0% ".concat(10 / barChart.data.length + 1, "%"),
      height: "100%",
      display: "flex"
    },
    ".bar-fill": {
      width: "100%",
      height: "100%",
      background: barChart.primaryC,
      "align-self": "center"
    },
    ".block-background": {
      width: "100%",
      height: "100%",
      background: barChart.accentC,
      position: "relative"
    },
    ".title-back-animHelper": {
      width: "100%",
      height: "100%",
      display: "flex",
      "flex-direction": "row-reverse"
    },
    ".title-back-wrapper": {
      width: "100%",
      height: "100%",
      display: "flex",
      position: "absolute",
      "flex-direction": "row",
      "z-index": "-1"
    },
    ".x-labels-back-wrapper": {
      width: "70%",
      height: "5%",
      top: "87%",
      left: "16%",
      position: "absolute",
      display: "flex",
      "flex-direction": "row-reverse"
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
      "justify-content": "space-around"
    },
    ".letter-wrapper": {
      "font-size": barChart.fontSize,
      display: "flex",
      "flex-direction": "column",
      position: "relative"
    },
    ".letter-container": {
      overflow: "hidden",
      position: "relative"
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
      "justify-content": "space-around"
    },
    ".title-wrapper": {
      display: "flex",
      "flex-grow": "2",
      "flex-wrap": "wrap",
      "align-items": "center",
      overflow: "hidden",
      "padding-left": "6px",
      "z-index": "1"
    },
    ".subtitle-wrapper": {
      display: "flex",
      "z-index": "1",
      "flex-wrap": "wrap",
      "align-items": "center"
    },
    ".subtitle-position-end": {
      display: "flex",
      "flex-grow": "1",
      "padding-right": "6px",
      "flex-wrap": "wrap",
      "max-width": "34%",
      overflow: "hidden",
      "justify-content": "flex-end"
    },
    ".label-container": {
      position: "relative",
      top: "1px",
      display: "flex",
      "flex-direction": "row",
      overflow: "hidden"
    },
    ".container-barChart": {
      width: "100%",
      height: "100%",
      background: barChart.backgroundC,
      display: "flex"
    },
    ".graph-container": {
      left: "16%",
      top: "17%",
      width: "70%",
      height: "63%",
      position: "absolute"
    },
    ".fontColorOn": {
      color: barChart.fontC
    },
    ".space-char": {
      visibility: "hidden"
    },
    ".accent-background": {
      width: "100%",
      height: "100%",
      background: barChart.accentC,
      position: "relative"
    }
  };
  barChart.data.map((datum, i) => {
    styles[".".concat(datum.name, "-bar-").concat(i)] = {
      "align-self": "flex-end",
      width: "".concat(100 / barChart.data.length, "%"),
      margin: "0% ".concat(10 / barChart.data.length + 1, "%"),
      height: "100%",
      display: "flex"
    };
    styles[".".concat(datum.name, "-bar-").concat(i)].height = "\n            ".concat(datum.value.toFixed(2) / barChart.maxPoint * 100, "%");
    styles[".".concat(datum.name, "-bar-fill")] = {
      height: "100%"
    };
  });
  return cssObjectToString(styles);
}

/**
 * BAR CHART SIMPLE GRAPH: MotorCortex Implementation
 */

class BarChartSimple extends MotorCortex.HTMLClip {
  // Building HTML tree for incident
  get html() {
    this.buildVars(); // Title modal html generation

    const title = [];

    for (const i in this.title) {
      const letter = this.title[i] === " " ? "<div class=\"space-char letter-wrapper\">-</div>" : "<div class=\"fontColorOn letter-wrapper\">".concat(this.title[i], "</div>");
      title.push("<div id=\"letter-".concat(i, "\" class=\"letter-container\">").concat(letter, "</div>"));
    } // Subtitle modal html generation


    const subtitle = [];

    for (const i in this.subtitle) {
      const letter = this.subtitle[i] === " " ? "<div class=\"space-char letter-wrapper\">-</div>" : "<div className=\"fontColorOn letter-wrapper\">".concat(this.subtitle[i], "</div>");
      subtitle.push("<div id=\"letter-".concat(i, "\" class=\"letter-container\">").concat(letter, "</div>"));
    } // Gridlines conditional html generation


    const gridLines = [];

    for (let i = 0; i < this.gridLinesNum; i++) {
      gridLines.push("<div class=\"gridLine\" id=\"gridLine".concat(i, "\"></div>"));
    } // X-axis labels html generation with data parameter as reference


    const xLabels = [];
    const bars = [];

    for (const i in this.data) {
      const datum = this.data[i];

      if (datum.name.length > 4) {
        datum.name = datum.name.slice(0, 4);
        this.data[i] = datum;
      }

      xLabels.push("<div class=\"label-container\" id=\"label-".concat(i, "\">").concat(this.data[i].name, "</div>")); //  Bars html generation with data parameter as reference

      if (this.maxPoint < datum.value) {
        this.maxPoint = datum.value;
      }

      bars.push("<div class=\"".concat(datum.name, "-bar-").concat(i, "\">\n          <div\n            class=\"bar-fill\"\n            style=\"background:").concat(datum.color ? datum.color : this.primaryC, "\"\n            id=\"").concat(datum.name, "-bar-fill\"\n          ></div>\n        </div>"));
    }

    this.maxPoint = this.attrs.data.maxValue ? this.attrs.data.maxValue : this.maxPoint; // MAIN HTML TREE

    return "<div class=\"container-barChart\">\n        <div class=\"title-container\">\n          <div class=\"title-wrapper\">".concat(title.join(""), "</div>\n          <div class=\"subtitle-position-end\">\n            <div class=\"subtitle-wrapper\">").concat(subtitle.join(""), "</div>\n          </div>\n          <div class=\"title-back-wrapper\">\n            <div class=\"title-back-animHelper\">\n              <div class=\"title-background block-background\"></div>\n            </div>\n          </div>\n        </div>\n        <div class=\"graph-container\">\n          <div class=\"graph\">").concat(bars.join(""), "</div>\n          <div class=\"gridlines\">").concat(gridLines.join(""), "</div>\n        </div>\n        <div class=\"y-axis\"></div>\n        <div class=\"x-axis\"></div>\n        <div class=\"x-labels-container\">").concat(xLabels.join(""), "</div>\n        <div class=\"x-labels-back-wrapper\">\n          <div class=\"x-labels-background block-background\"></div>\n        </div>\n      </div>");
  } // Build CSS rules for incident


  get css() {
    return buildCSS$1(this);
  } // Font API call (only google fonts API supported)


  get fonts() {
    return [{
      type: "google-font",
      src: "".concat(this.url)
    }];
  } // MotorCortex Animation generation and


  buildTree() {
    opacityControl(this, ".container-barChart"); // INTRO CONTROL

    if (this.attrs.timings.intro) {
      const textAnimDur = this.introDur * 0.75;
      const introGroup = new MotorCortex.Group(); // Axis Intro Control

      const axisCombo = new MotorCortex.Combo({
        incidents: [{
          incidentClass: MotorCortex.CSSEffect,
          attrs: {
            animatedAttrs: {
              height: "70%"
            },
            initialValues: {
              height: "0%"
            }
          },
          props: {
            selector: ".y-axis",
            duration: Math.trunc(this.introDur * 0.2),
            easing: "easeInQuad"
          },
          position: Math.trunc(this.introDur * 0)
        }, {
          incidentClass: MotorCortex.CSSEffect,
          attrs: {
            animatedAttrs: {
              width: "74%"
            },
            initialValues: {
              width: "0%"
            }
          },
          props: {
            selector: ".x-axis",
            duration: Math.trunc(this.introDur * 0.3),
            easing: "easeOutQuad"
          },
          position: Math.trunc(this.introDur * 0.2)
        }]
      }, {
        selector: ".container-barChart"
      });
      introGroup.addIncident(axisCombo, this.introDur * 0); // GridLines Intro Control

      const gridLinesAnim = new MotorCortex.CSSEffect({
        animatedAttrs: {
          width: "100%"
        },
        initialValues: {
          width: "0%"
        }
      }, {
        selector: ".gridLine",
        duration: Math.trunc(this.introDur * 0.5),
        easing: "easeOutQuad"
      });
      introGroup.addIncident(gridLinesAnim, Math.trunc(this.introDur * 0.2)); // Title Bar Intro Control

      const titlesAnim = new MotorCortex.Group();
      titlesAnim.addIncident(new MotorCortex.CSSEffect({
        animatedAttrs: {
          width: "100%"
        },
        initialValues: {
          width: "0%"
        }
      }, {
        selector: ".title-background",
        duration: Math.trunc(this.introDur * 0.25),
        easing: "easeInOutQuad"
      }), 0); // Main Title Intro: letter animation control

      const titleDur = this.introDur * 0.7;
      const titleLetterDur = titleDur * 2 / (this.title.length + 1);
      const titleIncidents = [];

      for (const i in this.title) {
        titleIncidents.push({
          incidentClass: MotorCortex.CSSEffect,
          attrs: {
            animatedAttrs: {
              left: "0px",
              opacity: 1
            },
            initialValues: {
              left: "20px",
              opacity: 0
            }
          },
          props: {
            selector: "#letter-".concat(i),
            duration: Math.trunc(titleLetterDur),
            easing: "easeOutQuart"
          },
          position: Math.trunc(titleLetterDur * i / 2)
        });
      }

      const titleCombo = new MotorCortex.Combo({
        incidents: titleIncidents
      }, {
        selector: ".title-wrapper"
      });
      titlesAnim.addIncident(titleCombo, Math.trunc(this.introDur * 0.25)); // Subtitle Intro: letter animation control

      const subtitleDur = this.introDur * 0.8;
      const subLetterDur = subtitleDur * 2 / (this.subtitle.length + 1);
      const subIncidents = [];

      for (const i in this.subtitle) {
        subIncidents.push({
          incidentClass: MotorCortex.CSSEffect,
          attrs: {
            animatedAttrs: {
              left: "0px",
              opacity: 1
            },
            initialValues: {
              left: "20px",
              opacity: 0
            }
          },
          props: {
            selector: "#letter-".concat(i),
            duration: Math.trunc(subLetterDur),
            easing: "easeOutQuart"
          },
          position: Math.trunc(subLetterDur * i / 2)
        });
      }

      const subtitleCombo = new MotorCortex.Combo({
        incidents: subIncidents
      }, {
        selector: ".subtitle-wrapper"
      });
      titlesAnim.addIncident(subtitleCombo, Math.trunc(this.introDur * 0.1));
      introGroup.addIncident(titlesAnim, Math.trunc(this.introDur * 0.05)); // Labels (xAxis) Intro Control

      const xLabelsAnim = new MotorCortex.Group();
      xLabelsAnim.addIncident(new MotorCortex.CSSEffect({
        animatedAttrs: {
          width: "70%"
        },
        initialValues: {
          width: "0%"
        }
      }, {
        selector: ".x-labels-back-wrapper",
        duration: Math.trunc(this.introDur * 0.25),
        easing: "easeInOutCubic"
      }), 0); // Labels (xAxis) Intro: letter animation control

      const labelDur = textAnimDur * 2 / (this.data.length + 1);

      for (const i in this.data) {
        const labelLength = this.data[i].name.length;
        const letterDur = labelDur * 2 / (labelLength + 1);
        const incidents = [];

        for (const z in this.data[i].name) {
          incidents.push({
            incidentClass: MotorCortex.CSSEffect,
            attrs: {
              animatedAttrs: {
                top: "0px",
                opacity: 1
              },
              initialValues: {
                top: "-30px",
                opacity: 0
              }
            },
            props: {
              selector: "#letter-".concat(i, "-").concat(z),
              duration: Math.trunc(letterDur),
              easing: "easeOutQuart"
            },
            position: Math.trunc(letterDur * z / 2)
          });
        }

        const datumCombo = new MotorCortex.Combo({
          incidents: incidents
        }, {
          selector: ".label-container"
        });
        xLabelsAnim.addIncident(datumCombo, Math.trunc(textAnimDur / (this.data.length + 1) * i));
      }

      introGroup.addIncident(xLabelsAnim, Math.trunc(this.introDur * 0.05)); // Bar Intro Control

      const barAnimation = new MotorCortex.Combo({
        incidents: [{
          incidentClass: MotorCortex.CSSEffect,
          attrs: {
            animatedAttrs: {
              height: "100%"
            },
            initialValues: {
              height: "0%"
            }
          },
          props: {
            duration: Math.trunc(this.introDur * 0.3),
            easing: "easeInOutQuad"
          },
          position: 0
        }]
      }, {
        selector: ".bar-fill",
        delay: "@stagger(0, ".concat(Math.trunc(this.introDur * 0.4), ")")
      });
      introGroup.addIncident(barAnimation, Math.trunc(this.introDur * 0.3));
      this.addIncident(introGroup, this.introDur * 0);
    } // OUTRO CONTROL


    if (this.attrs.timings.outro) {
      const textAnimDur = this.outroDur * 0.75;
      const outroGroup = new MotorCortex.Group(); // Axis Outro Control

      const axisCombooutro = new MotorCortex.Combo({
        incidents: [{
          incidentClass: MotorCortex.CSSEffect,
          attrs: {
            animatedAttrs: {
              width: "0%"
            },
            initialValues: {
              width: "74%"
            }
          },
          props: {
            selector: ".x-axis",
            duration: Math.trunc(this.outroDur * 0.2),
            easing: "easeInQuad"
          },
          position: this.outroDur * 0
        }, {
          incidentClass: MotorCortex.CSSEffect,
          attrs: {
            animatedAttrs: {
              height: "0%"
            },
            initialValues: {
              height: "70%"
            }
          },
          props: {
            selector: ".y-axis",
            duration: Math.trunc(this.outroDur * 0.3),
            easing: "easeOutQuad"
          },
          position: Math.trunc(this.outroDur * 0.2)
        }]
      }, {
        selector: ".container-barChart"
      });
      outroGroup.addIncident(axisCombooutro, Math.trunc(this.outroDur * 0.5)); // GridLines Outro Control

      const gridLinesoutro = new MotorCortex.CSSEffect({
        animatedAttrs: {
          width: "0%"
        },
        initialValues: {
          width: "100%"
        }
      }, {
        selector: ".gridlines",
        easing: "easeInOutQuad",
        duration: Math.trunc(this.outroDur * 0.5)
      });
      outroGroup.addIncident(gridLinesoutro, Math.trunc(this.outroDur * 0.2)); // Title Bar Outro Control

      const titlesoutro = new MotorCortex.Group();
      titlesoutro.addIncident(new MotorCortex.CSSEffect({
        animatedAttrs: {
          width: "0%"
        },
        initialValues: {
          width: "100%"
        }
      }, {
        selector: ".title-back-animHelper",
        duration: Math.trunc(this.outroDur * 0.45),
        easing: "easeInOutQuad"
      }), Math.trunc(this.outroDur * 0.3)); // Main Title Outro: letter animation control

      const titleDur = this.outroDur * 0.8;
      const letterDur = titleDur * 2 / (this.title.length + 1);
      const titleIncidents = [];

      for (const i in this.title) {
        titleIncidents.push({
          incidentClass: MotorCortex.CSSEffect,
          attrs: {
            animatedAttrs: {
              left: "20px",
              opacity: 0
            },
            initialValues: {
              left: "0px",
              opacity: 1
            }
          },
          props: {
            selector: "#letter-".concat(i),
            duration: Math.trunc(letterDur),
            easing: "easeOutQuart"
          },
          position: Math.trunc(letterDur * (this.title.length - i - 1) / 2)
        });
      }

      const titleCombo = new MotorCortex.Combo({
        incidents: titleIncidents
      }, {
        selector: ".title-wrapper"
      });
      titlesoutro.addIncident(titleCombo, Math.trunc(this.outroDur * 0.1)); // Subtitle Outro: letter animation control

      const subtitleDur = this.outroDur * 0.4;
      const subLetterDur = subtitleDur * 2 / (this.subtitle.length + 1);
      const subIncidents = [];

      for (const i in this.subtitle) {
        subIncidents.push({
          incidentClass: MotorCortex.CSSEffect,
          attrs: {
            animatedAttrs: {
              left: "20px",
              opacity: 0
            },
            initialValues: {
              left: "0px",
              opacity: 1
            }
          },
          props: {
            selector: "#letter-".concat(i),
            duration: Math.trunc(subLetterDur),
            easing: "easeOutQuart"
          },
          position: Math.trunc(subLetterDur * (this.subtitle.length - i - 1) / 2)
        });
      }

      const subtitleCombo = new MotorCortex.Combo({
        incidents: subIncidents
      }, {
        selector: ".subtitle-wrapper"
      });
      titlesoutro.addIncident(subtitleCombo, Math.trunc(this.outroDur * 0));
      outroGroup.addIncident(titlesoutro, Math.trunc(this.outroDur * 0.05)); // Labels (xAxis) Outro Control

      const xLabelsoutro = new MotorCortex.Group();
      xLabelsoutro.addIncident(new MotorCortex.CSSEffect({
        animatedAttrs: {
          width: "0%"
        },
        initialValues: {
          width: "100%"
        }
      }, {
        selector: ".x-labels-background",
        duration: Math.trunc(this.outroDur * 0.45),
        easing: "easeInOutCubic"
      }), this.outroDur * 0.3); // Labels (xAxis) Outro: letter animation control

      const labelDur = textAnimDur * 2 / (this.data.length + 1);

      for (const i in this.data) {
        const labelLength = this.data[i].name.length;
        const letterDur = labelDur * 2 / (labelLength + 1);
        const incidents = [];

        for (const z in this.data[i].name) {
          incidents.push({
            incidentClass: MotorCortex.CSSEffect,
            attrs: {
              animatedAttrs: {
                opacity: 0,
                top: "-30px"
              },
              initialValues: {
                opacity: 1,
                top: "0px"
              }
            },
            props: {
              selector: "#letter-".concat(i, "-").concat(z),
              duration: Math.trunc(letterDur),
              easing: "easeInQuart"
            },
            position: Math.trunc(letterDur * z / 2)
          });
        }

        const datumCombo = new MotorCortex.Combo({
          incidents: incidents
        }, {
          selector: ".label-container"
        });
        xLabelsoutro.addIncident(datumCombo, Math.trunc(textAnimDur / (this.data.length + 1) * i));
      }

      outroGroup.addIncident(xLabelsoutro, Math.trunc(this.outroDur * 0.05)); // Bar outro Control

      const barIncidents = [];

      for (const i in this.data) {
        barIncidents.push({
          incidentClass: MotorCortex.CSSEffect,
          attrs: {
            animatedAttrs: {
              height: "0%"
            },
            initialValues: {
              height: "100%"
            }
          },
          props: {
            duration: Math.trunc(this.outroDur * 0.3),
            easing: "easeInOutCubic",
            selector: "#".concat(this.data[i].name, "-bar-fill")
          },
          position: Math.trunc(subLetterDur * (this.data.length - i - 1) / 2)
        });
      }

      const barAnimationoutro = new MotorCortex.Combo({
        incidents: barIncidents
      }, {
        selector: ".graph"
      });
      outroGroup.addIncident(barAnimationoutro, this.outroDur * 0);
      this.addIncident(outroGroup, 0 + this.introDur + this.staticDur);
    } // STATIC DURATION CONTROL


    const staticIncident = new MotorCortex.CSSEffect({
      animatedAttrs: {}
    }, {
      selector: ".container-barChart",
      duration: this.staticDur
    });
    this.addIncident(staticIncident, this.introDur);
  }

  buildVars() {
    var _this$attrs$timings$s;

    this.data = this.attrs.data.data;
    this.title = this.attrs.data.title;
    this.subtitle = this.attrs.data.subtitle;
    this.maxPoint = 0;
    this.gridLinesNum = this.attrs.data.showGrid ? 11 : 0;
    this.attrs.palette = this.attrs.palette || {};
    this.primaryC = this.attrs.palette.primary || colorPalette.gray;
    this.secondaryC = this.attrs.palette.secondary || colorPalette.lightGray;
    this.tertiaryC = this.attrs.palette.tertiary || colorPalette.darkGray;
    this.fontC = this.attrs.palette.font || colorPalette.font;
    this.accentC = this.attrs.palette.accent || colorPalette.accent;
    this.backgroundC = this.attrs.palette.background || colorPalette.background;
    this.attrs.font = this.attrs.font || {};
    this.fontFamily = this.attrs.font.fontFamily || "'Staatliches', cursive";
    this.fontSize = this.attrs.font.size || "1.7rem";
    this.url = this.attrs.font.url || "https://fonts.googleapis.com/css2?family=Staatliches&display=swap";
    this.attrs.timings = this.attrs.timings || {};
    this.introDur = this.attrs.timings.intro || 0;
    this.outroDur = this.attrs.timings.outro || 0;
    this.staticDur = (_this$attrs$timings$s = this.attrs.timings.static) !== null && _this$attrs$timings$s !== void 0 ? _this$attrs$timings$s : 1000;
  }

}

/**
 * The purpose of Effects is to timely alter the state or value of attributes of
 * selected elements of the context, specified on the "selector"
 * property of theirs.
 *
 * The attributes of the elements that the Effect manipulates are
 * always defined on the attrs.animatedAttrs object, passed to it on its constructor.
 * Each key of this object corresponds to an attribute that the Effect will alter and the value
 * of each specifies the final value to go to.
 * On runtime, each Effect is analysed first by element and secondly
 * by animatedAttr.
 * For example an Effect that has the selector ".my-class",
 * that applies in two elements of the context, and has two animatedAttrs
 * will be analysed into four in total "MonoIncidents" (2 elements * 2 animatedAttrs).
 * Each of these produced MonoIncidents refer to a very specific element and
 * to a very specific animated attribute.
 * The Class that you are defining here extends Effect which represents exactly this MonoIncident.
 *
 * Thus, here you'll find:
 * the following properties:
 * - this.element: provides a reference to the specific element of the MonoIncident
 * - this.attributeKey: the key of the animatedAttr of the MonoIncident
 * - this.targetValue: the final value of the animatedAttr
 * - this.initialValue: the initial value of the animatedAttr
 * and the following methods:
 * - onGetContext
 * - getScratchValue
 * - onProgress
 * which are analysed more inline
 *
 **/

class Counter$1 extends MotorCortex__default["default"].Effect {
  /**
   * the very first MonoIncident of the specific element and the
   * specific attribute that will ever enter a Clip will be asked
   * to provide the initial (the scratch) value of its animatedAttr
   * for its element.
   **/
  getScratchValue() {
    return 0;
  }
  /**
   * The moment the Effect gets applied as MonoIncident to the specific
   * element and for the specific animatedAttr.
   * You can use this method to initialise anything you need to initialise
   * in order to use it on the onProgress method
   **/


  onGetContext() {
    this.element.innerHTML = this.initialValue;
  }
  /**
   * Takes two arguments the "fraction" which is a number from 0 to 1, representing
   * the fraction (the percentage) of the duration that we are in,
   * and the millisecond which defines the absolute millisecond.
   * You can use this method to animate your attribute.
   * Remember that you don't need to worry about easings. Easings are already
   * applied before reaching the execution of this method. This method's
   * arguments have already been re-calculated based on the easing.
   **/


  onProgress(millisecond) {
    let currentVal = this.initialValue + (this.targetValue - this.initialValue) * this.getFraction(millisecond);

    if (this.attrs.decimals) {
      currentVal = currentVal.toFixed(this.attrs.decimals);
    } else {
      currentVal = Math.trunc(currentVal);
    }

    this.element.innerHTML = currentVal;
  }

}

var name$3 = "@donkeyclip/motorcortex-counter";
var version$3 = "2.1.1";
var index$3 = {
  npm_name: name$3,
  // don't touch this
  version: version$3,
  // don't touch this
  incidents: [{
    exportable: Counter$1,
    name: "Counter",
    attributesValidationRules: {
      animatedAttrs: {
        type: "object",
        props: {
          count: {
            type: "number"
          }
        }
      },
      decimals: {
        type: "number",
        optional: true,
        min: 0,
        max: 20,
        integer: true
      }
    }
  }]
};

const Counter = MotorCortex.loadPlugin(index$3);
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

class ProgressBar extends MotorCortex.HTMLClip {
  get html() {
    const list = this.attrs.data.map((elem, index) => {
      var _this$attrs$options;

      return "<div class=\"row row-".concat(index, "\">\n          <div class=\"bar-header\">").concat(elem.name, "</div>\n          <div class=\"container-bar container-bar-").concat(index, "\">\n            <div\n              class=\"inner-bar inner-bar-").concat(index, " ").concat(elem.value < this.criticalValue ? "extra-trunced-" + index : "", "\"\n            ></div>\n          </div>\n          <div class=\"text indicator-").concat(index, "\">").concat(elem.value, "</div>\n          <div class=\"text text-unit\">\n            ").concat(!((_this$attrs$options = this.attrs.options) !== null && _this$attrs$options !== void 0 && _this$attrs$options.hidePercentage) ? "%" : "", "\n          </div>\n        </div>");
    });
    return "<div class=\"container-progressBar\">".concat(list.join(""), "</div>");
  }

  get css() {
    const cssArgs = {
      barSum: this.barSum,
      barCount: this.barCount,
      data: this.attrs.data,
      palette: this.attrs.palette ? this.attrs.palette : {},
      font: this.attrs.font ? this.attrs.font : {},
      options: this.attrs.options ? this.attrs.options : {}
    };
    const styles = {
      ".container-progressBar": {
        height: "100%",
        background: cssArgs.palette.background || colorPalette.background,
        display: "flex",
        color: cssArgs.palette.font || colorPalette.font,
        "font-family": cssArgs.font.fontFamily || "'Staatliches', cursive"
      },
      ".row": {
        display: "flex",
        "flex-direction": "row",
        position: "absolute",
        left: "20%",
        "align-items": "center",
        height: "".concat(60 / cssArgs.barCount, "%"),
        width: "100%"
      },
      ".container-bar": {
        position: "absolute",
        height: "100%",
        background: cssArgs.palette.secondary ? cssArgs.palette.secondary : colorPalette.darkGray,
        "border-radius": "4rem",
        width: "60%",
        "box-shadow": "2px 2px 5px gray",
        border: "0.2rem solid ".concat(cssArgs.palette.accent || colorPalette.accent),
        "z-index": "1",
        overflow: "hidden"
      },
      ".inner-bar": {
        position: "relative",
        background: cssArgs.palette.primary || colorPalette.lightGray,
        height: "102%",
        "border-radius": "4rem",
        bottom: "-1px",
        "z-index": "2px",
        top: "-0.5px"
      },
      ".text": {
        position: "relative",
        "z-index": "0",
        opacity: "1",
        left: "62%",
        "font-size": cssArgs.font.size || "1.2rem"
      },
      ".bar-header": {
        position: "absolute",
        left: "-21%",
        "text-align": "right",
        width: "20%",
        "font-size": cssArgs.font.size || "1.2rem"
      }
    };
    const avg = cssArgs.barSum / cssArgs.barCount;
    cssArgs.data.forEach((elem, index) => {
      styles[".row-".concat(index)] = {
        bottom: "".concat(50 + (avg - index) * 100 / cssArgs.barCount - 60 / cssArgs.barCount * 2.15, "%")
      };
      styles[".inner-bar-".concat(index)] = {
        width: "".concat(elem.value.toFixed(2), "%")
      };
    });
    return cssObjectToString(styles);
  }

  get fonts() {
    var _this$attrs$font;

    return [{
      type: "google-font",
      src: ((_this$attrs$font = this.attrs.font) === null || _this$attrs$font === void 0 ? void 0 : _this$attrs$font.url) || "https://fonts.googleapis.com/css2?family=Staatliches&display=swap"
    }];
  }

  buildTree() {
    var _this$attrs$timings$s, _this$attrs$timings;

    this.static = (_this$attrs$timings$s = this.attrs.timings.static) !== null && _this$attrs$timings$s !== void 0 ? _this$attrs$timings$s : 1000;
    this.intro = this.attrs.timings.intro || 0;
    this.outro = this.attrs.timings.outro || 0;
    const avg = this.barSum / this.barCount;
    fadeOutOpacityControl(this, ".container-progressBar");

    if ((_this$attrs$timings = this.attrs.timings) !== null && _this$attrs$timings !== void 0 && _this$attrs$timings.intro) {
      const slideInDuration = Math.floor(this.intro * 0.33);
      const expandBaseDuration = Math.floor(this.intro * 0.25);
      const expandBarDuration = Math.floor(this.intro * 0.33);

      for (let i = 0; i < this.barCount; i++) {
        const slideIn = new MotorCortex.CSSEffect({
          animatedAttrs: {
            bottom: "".concat(50 + (avg - i) * 100 / this.barCount - 60 / this.barCount * 2.15, "%"),
            opacity: 1
          },
          initialValues: {
            bottom: "-".concat(65 / this.barCount, "%"),
            opacity: 0
          }
        }, {
          duration: slideInDuration,
          selector: ".row-".concat(i),
          easing: "easeInOutQuad"
        });
        const expand_base = new MotorCortex.CSSEffect({
          animatedAttrs: {
            width: "60%"
          },
          initialValues: {
            width: "0.2%"
          }
        }, {
          duration: expandBaseDuration,
          selector: ".container-bar-".concat(i),
          easing: "easeInOutQuad"
        });
        const expand_bar = new MotorCortex.CSSEffect({
          animatedAttrs: {
            width: "".concat(this.attrs.data[i].value.toFixed(2), "%")
          },
          initialValues: {
            width: "0%"
          }
        }, {
          duration: expandBarDuration,
          selector: ".inner-bar-".concat(i),
          easing: "easeInOutQuad"
        });
        const indicatorCounter = new Counter.Counter({
          animatedAttrs: {
            count: this.attrs.data[i].value
          },
          initialValues: {
            count: 0
          }
        }, {
          easing: "easeInOutQuad",
          selector: ".indicator-".concat(i),
          duration: expandBarDuration
        });
        this.addIncident(slideIn, 0);
        this.addIncident(expand_base, slideInDuration);
        this.addIncident(expand_bar, slideInDuration + expandBaseDuration);
        this.addIncident(indicatorCounter, slideInDuration + expandBaseDuration);
      }

      const expand_text = new MotorCortex.CSSEffect({
        animatedAttrs: {
          left: "62%",
          opacity: 1
        },
        initialValues: {
          left: "0%",
          opacity: 0
        }
      }, {
        duration: expandBarDuration,
        selector: ".text",
        easing: "easeInOutQuad"
      });
      this.addIncident(expand_text, slideInDuration);
    }

    const staticGraph = new MotorCortex.CSSEffect({
      animatedAttrs: {}
    }, {
      duration: this.static,
      selector: ".container-progressBar"
    });
    this.addIncident(staticGraph, this.intro);

    if (this.outro) {
      const bufferTime = this.intro + this.static + this.outro;
      const slideInDuration = Math.floor(this.outro * 0.33);
      const expandBaseDuration = Math.floor(this.outro * 0.25);
      const expandBarDuration = Math.floor(this.outro * 0.33);

      for (let i = 0; i < this.barCount; i++) {
        const slideIn = new MotorCortex.CSSEffect({
          animatedAttrs: {
            bottom: "-".concat(65 / this.barCount, "%"),
            opacity: 0
          },
          initialValues: {
            bottom: "".concat(50 + (avg - i) * 100 / this.barCount - 60 / this.barCount * 2.15, "%"),
            opacity: 1
          }
        }, {
          duration: slideInDuration,
          selector: ".row-".concat(i),
          easing: "easeInOutQuad"
        });
        const expand_base = new MotorCortex.CSSEffect({
          animatedAttrs: {
            width: "0.2%"
          },
          initialValues: {
            width: "60%"
          }
        }, {
          duration: expandBaseDuration,
          selector: ".container-bar-".concat(i),
          easing: "easeInOutQuad"
        });
        const expand_bar = new MotorCortex.CSSEffect({
          animatedAttrs: {
            width: "0%"
          },
          initialValues: {
            width: "".concat(this.attrs.data[i].value.toFixed(2), "%")
          }
        }, {
          duration: expandBarDuration,
          selector: ".inner-bar-".concat(i),
          easing: "easeInOutQuad"
        });
        const indicatorCounter = new Counter.Counter({
          animatedAttrs: {
            count: 0
          },
          initialValues: {
            count: this.attrs.data[i].value
          }
        }, {
          easing: "easeInOutQuad",
          selector: ".indicator-".concat(i),
          duration: expandBarDuration
        });
        this.addIncident(slideIn, bufferTime - slideInDuration);
        this.addIncident(expand_base, bufferTime - slideInDuration - expandBaseDuration);
        this.addIncident(expand_bar, bufferTime - slideInDuration - expandBaseDuration - expandBarDuration);
        this.addIncident(indicatorCounter, bufferTime - slideInDuration - expandBaseDuration - expandBarDuration);
      }

      const expand_text = new MotorCortex.CSSEffect({
        animatedAttrs: {
          left: "0%",
          opacity: 0
        },
        initialValues: {
          left: "62%",
          opacity: 1
        }
      }, {
        duration: expandBarDuration,
        selector: ".text",
        easing: "easeInOutQuad"
      });
      this.addIncident(expand_text, bufferTime - slideInDuration - expandBaseDuration * 1.1);
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

var config = {
  lineGraph: {
    originalDims: {
      width: 1200,
      height: 900
    }
  }
};

function buildCSS(lineGraph) {
  const styles = {
    ".container-lineGraph": {
      width: "100%",
      height: "100%",
      background: lineGraph.backgroundC,
      "font-family": lineGraph.fontFamily,
      "font-size": lineGraph.fontSizeTitle,
      display: "flex"
    },
    ".viewport-lineGraph": {
      position: "absolute",
      top: "".concat(lineGraph.legend ? "2%" : "0%"),
      "transform-origin": "top left",
      width: "100%",
      height: "100%"
    },
    ".title-container-lineGraph": {
      background: "transparent",
      width: "60%",
      height: "10%",
      top: "8%",
      left: "8%",
      position: "absolute",
      display: "flex",
      "align-items": "center",
      "z-index": "1",
      "justify-content": "space-around"
    },
    ".title-wrapper-lineGraph": {
      display: "flex",
      "flex-grow": "2",
      "flex-wrap": "nowrap",
      overflow: "hidden",
      "padding-left": "6px"
    },
    ".letter-wrapper-title": {
      display: "flex",
      "flex-direction": "column",
      position: "relative",
      "font-size": "190%"
    },
    ".legend-wrapper": {
      position: "absolute",
      width: "".concat(lineGraph.dataSetsNum === 1 ? 14 : 26, "%"),
      height: "".concat(lineGraph.legendHeight, "%"),
      top: "".concat(11 - 3 * (lineGraph.legendHeightFactor + (lineGraph.legendHeightFactor % 1 ? 1 : 0) - 1), "%"),
      left: "".concat(68 + (lineGraph.dataSetsNum === 1 ? 12 : 0), "%"),
      background: lineGraph.quinaryC,
      "font-size": lineGraph.fontSizeInner,
      display: "flex",
      "flex-wrap": lineGraph.attrs.legendWrrap ? "wrap" : "nowrap",
      "align-items": "center",
      "z-index": "1",
      padding: "0 10px"
    },
    ".line-wrapper": {
      // width: `${lineGraph.dataSetsNum === 1 ? 100 : 50}%`,
      height: "".concat(1 / (lineGraph.legendHeightFactor + (lineGraph.legendHeightFactor % 1 ? 1 : 0)) * 100, "%"),
      display: "flex",
      overflow: "hidden",
      "flex-grow": 1
    },
    ".color-wrapper": {
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
      width: "100%",
      height: "100%"
    },
    ".line-color": {
      width: "60%",
      height: "60%"
    },
    ".line-title": {
      display: "flex",
      "align-items": "flex-start",
      "justify-content": "flex-start",
      "font-size": lineGraph.fontSizeInner,
      width: "75%",
      height: "100%"
    },
    ".graph-background": {
      left: "10%",
      top: "13%",
      width: "80%",
      height: "70%",
      position: "absolute",
      background: lineGraph.secondaryC
    },
    ".svg-container": {
      width: "76%",
      height: "58%",
      top: "21%",
      left: "12%",
      position: "relative",
      "z-index": "1",
      overflow: "visible"
    },
    ".lines-container": {
      width: "100%",
      height: "100%",
      "min-height": "100%",
      "min-width": "100%",
      overflow: "visible"
    },
    ".dataStele-container": {
      width: "76%",
      height: "58%",
      top: "21%",
      left: "12%",
      position: "absolute",
      display: "flex",
      "align-items": "center",
      "justify-content": "space-around",
      "z-index": "0"
    },
    ".data-stele": {
      height: "100%",
      display: "flex",
      "flex-direction": "column-reverse",
      "justify-content": "space-between"
    },
    ".line-grid": {
      width: "100%",
      height: "100%"
    },
    ".stele-grid": {
      width: "1%",
      height: "100%"
    },
    ".line-grid-block": {
      width: "100%",
      height: "".concat(Math.trunc(lineGraph.linesHeight * (0.13 * lineGraph.gridH / lineGraph.steleBlockNum)), "px")
    },
    ".stele-grid-block": {
      width: "100%",
      height: "".concat(Math.trunc(lineGraph.linesHeight * (0.26 * lineGraph.gridH / lineGraph.steleBlockNum)), "px")
    },
    ".stele-block": {
      "max-height": "".concat(5 * lineGraph.gridH, "px"),
      opacity: "0.8",
      background: lineGraph.primaryC
    },
    ".graph-labels-container": {
      width: "76%",
      height: "58%",
      top: "21%",
      left: "12%",
      position: "absolute"
    },
    ".x-labels-back-wrapper-lineGraph": {
      width: "76%",
      height: "6%",
      top: "80%",
      left: "12%",
      position: "absolute",
      display: "flex",
      "justify-content": "flex-end"
    },
    ".block-background": {
      width: "100%",
      height: "100%",
      background: lineGraph.accentC,
      position: "relative"
    },
    ".x-labels-container-lineGraph": {
      background: "transparent",
      width: "76%",
      height: "6%",
      top: "80%",
      left: "12%",
      position: "absolute",
      display: "flex",
      "align-items": "center",
      "z-index": "1",
      "justify-content": "space-around"
    },
    ".label-container": {
      display: "flex",
      "flex-direction": "row",
      overflow: "hidden"
    },
    ".letter-container": {
      overflow: "hidden",
      position: "relative"
    },
    ".letter-wrapper-label": {
      "font-size": "100%",
      display: "flex",
      "flex-direction": "column",
      position: "relative"
    },
    ".fontColorOn": {
      color: lineGraph.fontC
    },
    ".space-char": {
      visibility: "hidden"
    },
    ".inner-label": {
      opacity: "1",
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
      width: "100%",
      height: "100%"
    },
    ".inner-label-container": {
      "font-size": lineGraph.fontSizeInner,
      opacity: "0.6",
      width: "".concat(10 / 2 * lineGraph.data.length, "%"),
      "min-width": "6%",
      "max-width": "10%",
      height: "7%",
      position: "absolute",
      display: "".concat(lineGraph.hover ? "none" : "block"),
      "z-index": "2"
    },
    ".hoverPoint": {
      position: "absolute",
      width: "".concat(config.lineGraph.originalDims.width * 0.01, "px"),
      height: "".concat(config.lineGraph.originalDims.width * 0.01, "px"),
      "border-radius": "50%",
      "z-index": "9999"
    }
  };

  for (let l = 0; l < lineGraph.dataSetsNum; l++) {
    let dynamicColor;

    if (lineGraph.dataSetsNum > 1) {
      dynamicColor = lineGraph.dataSets[l].color;
    } else {
      dynamicColor = lineGraph.quaternaryC;
    }

    styles[".color-".concat(l)] = {
      background: dynamicColor
    };
    styles[".line-".concat(l, "-label-container")] = {
      width: "100%",
      height: "100%",
      position: "absolute"
    };

    for (let i = 0; i < lineGraph.data.length; i++) {
      const targetTop = lineGraph.findPointY(i, l) - lineGraph.linesHeight * 0.083;
      let fullWidth = 10 / 2 * lineGraph.data.length > 10 ? 10 : 10 / 2 * lineGraph.data.length;
      fullWidth = fullWidth < 6 ? 6 : fullWidth;
      const targetLeft = lineGraph.findPointX(i) - fullWidth * lineGraph.linesWidth / 100 * 0.5;
      styles[".label-".concat(l, "-").concat(lineGraph.data[i].name)] = {
        background: dynamicColor,
        top: "".concat(targetTop, "px"),
        left: "".concat(targetLeft, "px")
      };
      const pointLeftOffset = fullWidth * lineGraph.linesWidth / 100 * 0.5 - config.lineGraph.originalDims.width * 0.01 / 2;
      const pointTopOffset = 0.07 * lineGraph.linesHeight;
      styles[".hoverPoint-".concat(l, "-").concat(lineGraph.data[i].name)] = {
        top: "".concat(targetTop + pointTopOffset, "px"),
        left: "".concat(targetLeft + pointLeftOffset, "px")
      };
    }
  }

  for (let l = 0; l < lineGraph.dataSetsNum; l++) {
    for (let i = 0; i < lineGraph.data.length; i++) {
      styles[".hoverPoint-".concat(l, "-").concat(lineGraph.data[i].name, ":hover + .label-").concat(l, "-").concat(lineGraph.data[i].name)] = {
        display: "block"
      };
    }
  }

  return cssObjectToString(styles);
}

class Draw extends MotorCortex.Effect {
  getScratchValue() {
    this.pathLength = Math.ceil(this.element.getTotalLength());
    this.element.style.strokeDasharray = "".concat(this.pathLength, " ").concat(this.pathLength);
    this.element.style.strokeDashoffset = this.pathLength;
    return 0;
  }

  onGetContext() {
    this.pathLength = Math.ceil(this.element.getTotalLength());
  }

  onProgress(millisecond) {
    const cover = (this.targetValue - this.initialValue) * this.getFraction(millisecond) + this.initialValue;
    this.element.style.strokeDashoffset = Math.ceil(this.pathLength * (1 - cover));
  }

}

var name$2 = "@donkeyclip/motorcortex-svgdraw";
var version$2 = "1.2.0";
var index$2 = {
  npm_name: name$2,
  version: version$2,
  incidents: [{
    exportable: Draw,
    name: "Draw",
    attributesValidationRules: {
      animatedAttrs: {
        type: "object",
        props: {
          cover: {
            type: "number",
            min: 0,
            max: 1
          }
        }
      }
    }
  }]
};

function getMatrix2D(element) {
  const win = window;
  const transform = win.getComputedStyle(element).transform;

  if (transform === "" || transform === "none") {
    return {
      rotate: "0deg",
      scaleX: 1,
      scaleY: 1,
      skewX: "0deg",
      skewY: "0deg",
      translateX: "0px",
      translateY: "0px"
    };
  }

  const values = transform.split("(")[1].split(")")[0].split(",");

  const qrDecompone = function qrDecompone(a) {
    const angle = Math.atan2(a[1], a[0]),
          denom = Math.pow(a[0], 2) + Math.pow(a[1], 2),
          denom2 = Math.pow(a[2], 2) + Math.pow(a[3], 2),
          scaleX = Math.sqrt(denom),
          scaleY = (a[0] * a[3] - a[2] * a[1]) / scaleX,
          skewX = Math.atan2(a[0] * a[2] + a[1] * a[3], denom),
          skewY = Math.atan2(a[1] * a[3] + a[0] * a[2], denom2);
    return {
      rotate: angle / (Math.PI / 180) + "deg",
      // this is rotation angle in degrees
      scaleX: scaleX,
      // scaleX factor
      scaleY: scaleY,
      // scaleY factor
      skewX: (denom === 1 ? skewX / (Math.PI / 180) : 0) + "deg",
      // skewX angle degrees
      skewY: (denom2 === 1 ? skewY / (Math.PI / 180) : 0) + "deg",
      // skewY angle degrees
      translateX: a[4] + "px",
      // translation point  x
      translateY: a[5] + "px" // translation point  y

    };
  };

  return qrDecompone(values);
}

class Adaptor {
  constructor(el) {
    this.el = el;
    this.matrix = this.getMatrix(el);
    this.viewportCenter = this.getViewPortCenter();
    this.idlePosition = this.getIdlePosition();
  }

  getMatrix(el) {
    return getMatrix2D(el);
  }

  getViewPortCenter() {
    const el = this.el;
    const parentNode = el.parentNode;
    const viewportDims = {
      width: parseFloat(getComputedStyle(parentNode, null).width.replace("px", "")),
      height: parseFloat(getComputedStyle(parentNode, null).height.replace("px", ""))
    };
    return {
      x: viewportDims.width / 2,
      y: viewportDims.height / 2
    };
  }
  /**
   * Returns the position of the element on its parent on its initial state,
   * with translateX and translateY = 0. We consider this position as the
   * idle position of the element on its parent.
   */


  getIdlePosition() {
    const el = this.el; // bounding rect: {top, right, bottom, left}

    const elBoundingRect = el.getBoundingClientRect();
    const parentBoundingRect = el.parentNode.getBoundingClientRect(); // the absolute position of our element on its parent

    return {
      x: elBoundingRect.left - parentBoundingRect.left,
      y: elBoundingRect.top - parentBoundingRect.top
    };
  }
  /**
   *
   * @param {HTMLElement} el
   * @returns {object} x, y, zoom, initialTransofrm{x,y}
   */


  calcXYZoom() {
    const matrix = this.matrix;
    const position = this.idlePosition;
    const viewportCenter = this.viewportCenter;
    const currentOneToOneCenter = {
      x: viewportCenter.x - position.x,
      y: viewportCenter.y - position.y
    }; // the current X,Y of our element

    const currentCenter = {
      x: currentOneToOneCenter.x / matrix.scaleX,
      y: currentOneToOneCenter.y / matrix.scaleY
    };
    return { ...currentCenter,
      zoom: matrix.scaleX
    };
  }
  /**
   * @param {object} params - {start{x,y,zoom}, target{x,y.zoom}}
   */


  createProgressFunction(params) {
    const start = this._xyzoomToTranslate(params.start);

    const target = this._xyzoomToTranslate(params.target); // first we need to calculate the angle and the distance that we are going to use for our calculations


    const theta = Math.atan(Math.abs(target.y - start.y) / Math.abs(target.x - start.x));
    const lineLength = Math.sqrt(Math.pow(target.y - start.y, 2) + Math.pow(target.x - start.x, 2)); // secondly we need to identify the multipliers that we are going to use to calculate for our x and y
    // depending on the relative position of our target compared to our start

    let _x = 1,
        _y = 1;
    if (target.x < start.x) _x = -1;
    if (target.y < start.y) _y = -1;
    return function progress(fraction) {
      const distanceOnLine = fraction * lineLength;
      return {
        translateX: _x * distanceOnLine * Math.cos(theta) + start.x,
        translateY: _y * distanceOnLine * Math.sin(theta) + start.y,
        scale: (target.scale - start.scale) * fraction + start.scale
      };
    };
  }

  _xyzoomToTranslate(vals) {
    // the target point from the top-left corner of the element, having applied the target zoom
    const targetCenter = {
      x: vals.zoom * vals.x,
      y: vals.zoom * vals.y
    };
    const move = {
      x: this.viewportCenter.x - targetCenter.x,
      y: this.viewportCenter.y - targetCenter.y
    };
    return {
      x: move.x - this.idlePosition.x,
      y: move.y - this.idlePosition.y,
      scale: vals.zoom
    };
  }
  /**
     * 
     * @param {object} data - {
            path,
            startPoint,
            finalPoint,
            pathLength,
            zoom,
            startFrom,
            endTo,
            transitionDuration,
            alongPathDuration
        }
     */


  createPathProgressFunction(data, initialValue) {
    let transitionProgress = progress => {};

    if (data.transitionDuration > 0) {
      transitionProgress = this.createProgressFunction({
        start: initialValue,
        target: {
          x: data.startPoint.x,
          y: data.startPoint.y,
          zoom: initialValue.zoom
        }
      });
    }

    const transitionFraction = data.transitionDuration / (data.transitionDuration + data.alongPathDuration);
    const alongPathFraction = data.alongPathDuration / (data.transitionDuration + data.alongPathDuration); // the actual length of the path to move on having taken out the startFrom and endTo parts

    const fractionPathLength = (data.endTo - data.startFrom) * data.pathLength;
    return progress => {
      if (data.transitionDuration > 0 && progress < transitionFraction) {
        return transitionProgress(progress / transitionFraction);
      } // the fraction from 0 to 1 of the second part calculated strictly out of the durations


      const secondPartProgress = (progress - transitionFraction) / alongPathFraction; // calculate the scale of the point

      const scale = (data.zoom - initialValue.zoom) * secondPartProgress + initialValue.zoom; // the distance that we expect to have covered on the full path

      const distanceFromZero = secondPartProgress * fractionPathLength + data.startFrom * data.pathLength;
      const point = data.path.getPointAtLength(distanceFromZero); // x, y -> that's where we want to be

      const res = this._xyzoomToTranslate({
        x: point.x,
        y: point.y,
        zoom: scale
      });

      return {
        translateX: res.x,
        translateY: res.y,
        scale: res.scale
      };
    };
  }

}
/**
 * Thus, here you'll find:
 * the following properties:
 * - this.element: provides a reference to the specific element of the MonoIncident
 * - this.attributeKey: the key of the animatedAttr of the MonoIncident
 * - this.targetValue: the final value of the animatedAttr
 * and the following methods:
 * - onGetContext
 * - getScratchValue
 * - onProgress
 * which are analysed more inline
 *
 **/


class MyEffect extends MotorCortex.Effect {
  /**
   * the scratch value of the Incident should return back the triplette
   * x, y, zoom
   * We consider as the viewport the parent node of our element and we calculate
   * its initial position taking in consideration the relative position of our
   * element into its parent node. The initial zoom is calculated out of the
   * scaleX value of our element
   **/
  getScratchValue() {
    this.adaptor = new Adaptor(this.element);
    return this.adaptor.calcXYZoom();
  }

  onGetContext() {
    this.adaptor = new Adaptor(this.element);
    this.progressMethod = this.adaptor.createProgressFunction({
      start: this.initialValue,
      target: this.targetValue
    });
  }

  onProgress(m) {
    const vals = this.progressMethod(this.getFraction(m));
    this.element.style.transform = "translateX(".concat(vals.translateX, "px) translateY(").concat(vals.translateY, "px) scaleX(").concat(vals.scale, ") scaleY(").concat(vals.scale, ")");
  }

}

const xmlns = "http://www.w3.org/2000/svg";
/**
 * The attrs that this Incident expect are almost identical with its "brother's"
 * ZoomTo:
 * {
 *  animatedAttrs:{
 *      position: {
 *          path,
 *          zoom
 *      }
 *  },
 *  transition: 0,
 *  from: 0,
 *  to: 1
 * }
 *
 * path must be a valid svg path that will be put on the "d" attribute of the path element
 * that will be created out of it and which will be used as our guide for the
 * move.
 * A difference between this Incident and the simple ZoomTo Incident is that
 * ZoomTo optionally takes initial values, meaning that it will just move from
 * where the camera is to the target value. FocusAlongPath will start from the
 * first point of the provided path, no matter where the camera was. This might
 * introduce an anwanted jump effect.
 * The "transition" attribute, provided outside the animatedAttrs allows us to optionally
 * define a transition duration from the current point to the start of the path. This is
 * by default 0. Keep in mind that the duration of the transition will be substracted from
 * the move along path. For example if the user provides props.duration = 2000 and
 * attrs.transition = 100, then the move along the path will only last 1900 milliseconds
 * and the total duration of the Incident will still be 2000. Zoom remains tha same during
 * the transition and only starts animating when the movement enters the path.
 * The "from" and "to" attributes (also outside the animatedAttrs) allows the developer
 * to define if they want the movement to start from a specific portion (0 to 1) of the
 * path or to end on a specific portion of it (again 0 to 1). These two attributes are
 * optional too with default values from:0 and to:1.
 */

class FollowPath extends MyEffect {
  onInitialise() {
    const duration = this.props.duration;
    const path = document.createElementNS(xmlns, "path");
    path.setAttributeNS(null, "d", this.targetValue.path); // create a data repository that will hold useful info of our Incident

    this.data = {
      path,
      finalPoint: null,
      startPoint: null,
      zoom: this.targetValue.zoom,
      pathLength: path.getTotalLength(),
      startFrom: !this.attrs.from ? 0 : this.attrs.from,
      endTo: !this.attrs.to ? 1 : this.attrs.to,
      transitionDuration: !this.attrs.transition ? 0 : this.attrs.transition,

      get alongPathDuration() {
        return duration - this.transitionDuration;
      }

    };
    this.data.finalPoint = path.getPointAtLength(this.data.endTo * this.data.pathLength);
    this.data.startPoint = path.getPointAtLength(this.data.startFrom * this.data.pathLength); // then set the final values of the Incident in terms of x, y, zoom so the
    // following Incidents can use it

    this.targetValue.x = this.data.finalPoint.x;
    this.targetValue.y = this.data.finalPoint.y;
  }

  onGetContext() {
    this.adaptor = new Adaptor(this.element);
    this.data.zoom = this.targetValue.zoom;
    this.progressMethod = this.adaptor.createPathProgressFunction(this.data, this.initialValue);
  }

}

var name$1 = "@donkeyclip/motorcortex-2dcam";
var version$1 = "0.3.1";
var index$1 = {
  npm_name: name$1,
  version: version$1,
  incidents: [{
    exportable: MyEffect,
    name: "ZoomTo",
    attributesValidationRules: {
      animatedAttrs: {
        type: "object",
        props: {
          position: {
            type: "object",
            props: {
              x: {
                type: "number",
                optional: true,
                min: 0
              },
              y: {
                type: "number",
                optional: true,
                min: 0
              },
              zoom: {
                type: "number",
                optional: true,
                min: 0
              }
            }
          }
        }
      }
    }
  }, {
    exportable: FollowPath,
    name: "FollowPath",
    attributesValidationRules: {
      animatedAttrs: {
        type: "object",
        props: {
          position: {
            type: "object",
            props: {
              path: {
                type: "string",
                optional: false
              },
              zoom: {
                type: "number",
                optional: true,
                min: 0
              }
            }
          }
        }
      },
      transition: {
        type: "number",
        integer: true,
        min: 0,
        optional: true
      },
      from: {
        type: "number",
        min: 0,
        max: 1,
        optional: true
      },
      to: {
        type: "number",
        min: 0,
        max: 1,
        optional: true
      }
    }
  }],
  compositeAttributes: {
    position: ["x", "y", "zoom", "path"]
  }
};

const SVGD = MotorCortex.loadPlugin(index$2);
const TDCAM = MotorCortex.loadPlugin(index$1);
class AnimationConstructor {
  constructor(instance) {
    this.instance = instance;
  }

  buildStaticControl() {
    return new MotorCortex.CSSEffect({
      animatedAttrs: {}
    }, {
      selector: ".container-lineGraph",
      duration: this.instance.staticDur
    });
  }

  buildBackgroundIntro() {
    return new MotorCortex.CSSEffect({
      animatedAttrs: {
        height: "70%"
      },
      initialValues: {
        height: "0%"
      }
    }, {
      selector: ".graph-background",
      duration: Math.trunc(this.instance.introDur * 0.2),
      easing: "easeInOutQuart"
    });
  }

  buildBackgroundOutro() {
    return new MotorCortex.CSSEffect({
      animatedAttrs: {
        height: "0%"
      },
      initialValues: {
        height: "70%"
      }
    }, {
      selector: ".graph-background",
      duration: Math.trunc(this.instance.outroDur * 0.2),
      easing: "easeInOutQuart"
    });
  }

  buildTitleIntroCombo() {
    const titleDur = this.instance.introDur * 0.13;
    const titleIncidents = [];

    for (const i in this.instance.words) {
      titleIncidents.push({
        incidentClass: MotorCortex.CSSEffect,
        attrs: {
          animatedAttrs: {
            top: "0px",
            opacity: 1
          },
          initialValues: {
            top: "-50px",
            opacity: 0
          }
        },
        props: {
          selector: "#word-".concat(i),
          duration: Math.trunc(titleDur / this.instance.words.length),
          easing: "easeInOutQuart"
        },
        position: Math.trunc(titleDur / this.instance.words.length * i)
      });
    }

    return new MotorCortex.Combo({
      incidents: titleIncidents
    }, {
      selector: ".title-wrapper-lineGraph"
    });
  }

  buildTitleOutroCombo() {
    const titleDur = this.instance.outroDur * 0.13;
    const titleIncidents = [];

    for (const i in this.instance.words) {
      titleIncidents.push({
        incidentClass: MotorCortex.CSSEffect,
        attrs: {
          animatedAttrs: {
            top: "-50px",
            opacity: 0
          },
          initialValues: {
            top: "0px",
            opacity: 1
          }
        },
        props: {
          selector: "#word-".concat(i),
          duration: Math.trunc(titleDur / this.instance.words.length),
          easing: "easeInOutQuart"
        },
        position: Math.trunc(titleDur / this.instance.words.length * (this.instance.words.length - 1 - i))
      });
    }

    return new MotorCortex.Combo({
      incidents: titleIncidents
    }, {
      selector: ".title-wrapper-lineGraph"
    });
  }

  buildIntroLegend() {
    const colorsDur = this.instance.introDur * 0.25;
    const colorDur = colorsDur / this.instance.dataSetsNum;
    const delay = this.instance.dataSetsNum === 1 ? null : "@stagger(0, ".concat(colorsDur - colorDur, ")");
    const legendIncidents = [{
      incidentClass: MotorCortex.CSSEffect,
      attrs: {
        animatedAttrs: {
          height: "".concat(this.instance.legendHeight, "%")
        },
        initialValues: {
          height: "0%"
        }
      },
      props: {
        duration: Math.trunc(this.instance.introDur * 0.2),
        easing: "easeInOutQuart"
      },
      position: 0
    }, {
      incidentClass: MotorCortex.CSSEffect,
      attrs: {
        animatedAttrs: {
          opacity: 1
        },
        initialValues: {
          opacity: 0
        }
      },
      props: {
        selector: ".color-wrapper",
        duration: Math.trunc(this.instance.introDur * 0.1),
        delay: delay,
        easing: "easeInOutQuad"
      },
      position: Math.trunc(this.instance.introDur * 0.15)
    }, {
      incidentClass: MotorCortex.CSSEffect,
      attrs: {
        animatedAttrs: {
          opacity: 1
        },
        initialValues: {
          opacity: 0
        }
      },
      props: {
        selector: ".line-title",
        duration: Math.trunc(this.instance.introDur * 0.1),
        delay: delay,
        easing: "easeInOutQuad"
      },
      position: Math.trunc(this.instance.introDur * 0.15)
    }];
    return new MotorCortex.Combo({
      incidents: legendIncidents
    }, {
      selector: ".legend-wrapper"
    });
  }

  buildOutroLegend() {
    const colorsDur = this.instance.outroDur * 0.25;
    const colorDur = colorsDur / this.instance.dataSetsNum;
    const delay = this.instance.dataSetsNum === 1 ? null : "@stagger(0, ".concat(colorsDur - colorDur, ", 0, linear, linear, true)");
    const legendIncidents = [{
      incidentClass: MotorCortex.CSSEffect,
      attrs: {
        animatedAttrs: {
          height: "0%"
        },
        initialValues: {
          height: "".concat(this.instance.legendHeight, "%")
        }
      },
      props: {
        duration: Math.trunc(this.instance.introDur * 0.2),
        easing: "easeInOutQuart"
      },
      position: colorsDur
    }, {
      incidentClass: MotorCortex.CSSEffect,
      attrs: {
        animatedAttrs: {
          opacity: 1
        },
        initialValues: {
          opacity: 0
        }
      },
      props: {
        selector: ".color-wrapper",
        duration: Math.trunc(this.instance.introDur * 0.1),
        delay: delay,
        easing: "easeInOutQuad"
      },
      position: Math.trunc(colorsDur - this.instance.introDur * 0.15)
    }, {
      incidentClass: MotorCortex.CSSEffect,
      attrs: {
        animatedAttrs: {
          opacity: 1
        },
        initialValues: {
          opacity: 0
        }
      },
      props: {
        selector: ".line-title",
        duration: Math.trunc(this.instance.introDur * 0.1),
        delay: delay,
        easing: "easeInOutQuad"
      },
      position: Math.trunc(colorsDur - this.instance.introDur * 0.15)
    }];
    return new MotorCortex.Combo({
      incidents: legendIncidents
    }, {
      selector: ".legend-wrapper"
    });
  }

  buildIntroLabels() {
    const xLabelsAnim = new MotorCortex.Group(); // Label Background intro animation

    xLabelsAnim.addIncident(new MotorCortex.CSSEffect({
      animatedAttrs: {
        width: "100%"
      },
      initialValues: {
        width: "0%"
      }
    }, {
      selector: ".block-background",
      duration: Math.trunc(this.instance.introDur * 0.25),
      easing: "easeInOutQuart"
    }), 0); // Labels Intro Animation

    const textAnimDur = this.instance.introDur * 0.2;
    const labelDur = textAnimDur * 3 / (this.instance.data.length + 2);

    for (const i in this.instance.data) {
      let remainingDur = labelDur / 2;
      const incidents = [];

      for (const z in this.instance.data[i].name) {
        incidents.push({
          incidentClass: MotorCortex.CSSEffect,
          attrs: {
            animatedAttrs: {
              opacity: 1
            },
            initialValues: {
              opacity: 0
            }
          },
          props: {
            selector: "#letter-".concat(i, "-").concat(z),
            duration: Math.trunc(this.instance.introDur * 0.015),
            easing: "easeInOutQuart"
          },
          position: Math.trunc(labelDur - remainingDur)
        });
        remainingDur = remainingDur / 2;
      }

      const datumCombo = new MotorCortex.Combo({
        incidents: incidents
      }, {
        selector: ".label-container"
      });
      xLabelsAnim.addIncident(datumCombo, Math.trunc(this.instance.introDur * 0.14 + textAnimDur / (this.instance.data.length + 1) * (this.instance.data.length - i - 1)));
    }

    return xLabelsAnim;
  }

  buildOutroLabels() {
    const xLabelsAnim = new MotorCortex.Group();
    const labelsDur = this.instance.outroDur * 0.55; // Label Background outro animation

    xLabelsAnim.addIncident(new MotorCortex.CSSEffect({
      animatedAttrs: {
        width: "0%"
      },
      initialValues: {
        width: "100%"
      }
    }, {
      selector: ".block-background",
      duration: Math.trunc(labelsDur * 0.55),
      easing: "easeInOutQuart"
    }), labelsDur * 0); // Labels Outro Animation

    const textAnimDur = this.instance.outroDur * 0.2;
    const labelDur = textAnimDur * 3 / (this.instance.data.length + 2);

    for (const i in this.instance.data) {
      let remainingDur = labelDur / 2;
      const incidents = [];

      for (const z in this.instance.data[i].name) {
        incidents.push({
          incidentClass: MotorCortex.CSSEffect,
          attrs: {
            animatedAttrs: {
              opacity: 0
            },
            initialValues: {
              opacity: 1
            }
          },
          props: {
            selector: "#letter-".concat(i, "-").concat(z),
            duration: Math.trunc(this.instance.outroDur * 0.015),
            easing: "easeInOutQuart"
          },
          position: Math.trunc(labelDur - (labelDur - remainingDur))
        });
        remainingDur = remainingDur / 2;
      }

      const datumCombo = new MotorCortex.Combo({
        incidents: incidents
      }, {
        selector: ".label-container"
      });
      xLabelsAnim.addIncident(datumCombo, Math.trunc(textAnimDur * i / (this.instance.data.length + 1)));
    }

    return xLabelsAnim;
  }

  buildIntroStele() {
    const stelesIntro = new MotorCortex.Group();
    const stelesFullDur = this.instance.introDur * 0.3;
    const steleOverlapIndex = 5;
    const blockOverlapIndex = 3;
    const steleDur = stelesFullDur * steleOverlapIndex / (this.instance.data.length + 1);
    const steleDelay = steleDur / steleOverlapIndex;
    const blockDur = steleDur * blockOverlapIndex / (this.instance.steleBlockNum + 1);

    if (this.instance.grid === "steles") {
      for (const i in this.instance.data) {
        const steleGroup = new MotorCortex.Group({
          selector: "#stele-".concat(i)
        });
        const blockCombo = new MotorCortex.Combo({
          incidents: [{
            incidentClass: MotorCortex.CSSEffect,
            attrs: {
              animatedAttrs: {
                opacity: 1
              },
              initialValues: {
                opacity: 0
              }
            },
            props: {
              duration: Math.trunc(blockDur)
            },
            position: 0
          }]
        }, {
          selector: ".stele-block-".concat(i),
          delay: "@stagger(0, ".concat(Math.trunc(steleDur - blockDur), ", 0, easeOutQuad)")
        });
        steleGroup.addIncident(blockCombo, 0);
        stelesIntro.addIncident(steleGroup, Math.trunc(i * steleDelay));
      }
    } else if (this.instance.grid === "lines") {
      const steleGroup = new MotorCortex.Group({
        selector: "#stele-".concat(0)
      });
      const blockCombo = new MotorCortex.Combo({
        incidents: [{
          incidentClass: MotorCortex.CSSEffect,
          attrs: {
            animatedAttrs: {
              width: "100%"
            },
            initialValues: {
              width: "0%"
            }
          },
          props: {
            duration: Math.trunc(steleDur),
            easing: "easeInOutQuad"
          },
          position: 0
        }]
      }, {
        selector: ".stele-block-".concat(0),
        delay: "@stagger(0, ".concat(Math.trunc(steleDur - blockDur), ", 0)")
      });
      steleGroup.addIncident(blockCombo, 0);
      stelesIntro.addIncident(steleGroup, Math.trunc(steleDelay));
    }

    return stelesIntro;
  }

  buildOutroStele() {
    const stelesOutro = new MotorCortex.Group();
    const stelesFullDur = this.instance.outroDur * 0.3;
    const steleOverlapIndex = 5;
    const blockOverlapIndex = 3;
    const steleDur = stelesFullDur * steleOverlapIndex / (this.instance.data.length + 1);
    const steleDelay = steleDur / steleOverlapIndex;
    const blockDur = steleDur * blockOverlapIndex / (this.instance.steleBlockNum + 1);

    if (this.instance.grid === "steles") {
      for (const i in this.instance.data) {
        const steleGroup = new MotorCortex.Group({
          selector: "#stele-".concat(i)
        });
        const blockCombo = new MotorCortex.Combo({
          incidents: [{
            incidentClass: MotorCortex.CSSEffect,
            attrs: {
              animatedAttrs: {
                opacity: 0
              },
              initialValues: {
                opacity: 1
              }
            },
            props: {
              duration: Math.trunc(blockDur)
            },
            position: 0
          }]
        }, {
          selector: ".stele-block-".concat(i),
          delay: "@stagger(0, ".concat(Math.trunc(steleDur - blockDur), ", 0, easeOutQuad, omni, true)")
        });
        steleGroup.addIncident(blockCombo, 0);
        stelesOutro.addIncident(steleGroup, (this.instance.data.length - 1 - i) * steleDelay);
      }
    } else if (this.instance.grid === "lines") {
      const steleGroup = new MotorCortex.Group({
        selector: "#stele-".concat(0)
      });
      const blockCombo = new MotorCortex.Combo({
        incidents: [{
          incidentClass: MotorCortex.CSSEffect,
          attrs: {
            animatedAttrs: {
              width: "0%"
            },
            initialValues: {
              width: "100%"
            }
          },
          props: {
            duration: Math.trunc(steleDur),
            easing: "easeInOutQuad"
          },
          position: 0
        }]
      }, {
        selector: ".stele-block-".concat(0),
        delay: "@stagger(0, ".concat(Math.trunc(steleDur - blockDur), ", 0, linear, omni, true)")
      });
      steleGroup.addIncident(blockCombo, 0);
      stelesOutro.addIncident(steleGroup, (this.instance.data.length - 1) * steleDelay);
    }

    return stelesOutro;
  }

  buildIntroGraph(targetGroup) {
    const segmentDur = this.instance.introDur / this.instance.data.length;
    const pointDur = segmentDur * 0.35;
    const pathDur = segmentDur * 0.8;
    const pathAnimGroup = new MotorCortex.Group();
    const pointAnimGroup = new MotorCortex.Group();

    for (let l = 0; l < this.instance.dataSetsNum; l++) {
      for (let i = 0; i < this.instance.data.length; i++) {
        // Path Intro Animation
        if (i !== this.instance.data.length - 1) {
          const pathAnimation = new SVGD.Draw({
            animatedAttrs: {
              cover: 1
            },
            initialValues: {
              cover: 0
            }
          }, {
            selector: "#line-".concat(l, "-").concat(i),
            duration: Math.trunc(pathDur),
            easing: "easeInOutQuad"
          });
          pathAnimGroup.addIncident(pathAnimation, Math.trunc(segmentDur * i + segmentDur * 0.2));
        } // Points Intro Animation


        const pointAnimation = new MotorCortex.CSSEffect({
          animatedAttrs: {
            opacity: 1,
            r: "".concat(this.instance.r, "%")
          },
          initialValues: {
            opacity: 0,
            r: "0"
          }
        }, {
          selector: "#point-".concat(l, "-").concat(i),
          duration: Math.trunc(pointDur),
          easing: "easeInQuart"
        });
        pointAnimGroup.addIncident(pointAnimation, Math.trunc(segmentDur * i)); // Graph Label Intro Animation

        const targetTop = this.instance.findPointY(i, l) - this.instance.linesHeight * 0.083;
        const topOffset = targetTop + this.instance.linesHeight * 0.07 / 2;
        let targetWidth = this.instance.data.length > 2 ? 10 : 5 * this.instance.data.length;
        targetWidth = targetWidth < 6 ? 6 : targetWidth;
        const targetLeft = this.instance.findPointX(i) - targetWidth * this.instance.linesWidth / 100 * 0.5;
        const leftOffset = targetLeft + this.instance.linesWidth * (targetWidth / 100) / 2;
        const gLabelAnimation = new MotorCortex.CSSEffect({
          animatedAttrs: {
            opacity: 0.6,
            width: "".concat(targetWidth, "%"),
            "min-width": "".concat(targetWidth, "%"),
            height: "7%",
            top: "".concat(targetTop, "px"),
            left: "".concat(targetLeft, "px"),
            "font-size": this.instance.fontSizeInner
          },
          initialValues: {
            opacity: 0,
            width: "0%",
            "min-width": "0%",
            height: "0%",
            top: "".concat(topOffset, "px"),
            left: "".concat(leftOffset, "px"),
            "font-size": 0
          }
        }, {
          selector: ".label-".concat(l, "-").concat(this.instance.data[i].name),
          duration: Math.trunc(pointDur),
          easeing: "easeInOutCubic"
        });
        targetGroup.addIncident(gLabelAnimation, Math.trunc(segmentDur * i + pointDur * 0.2));

        if (this.instance.trace) {
          const [entry, duration, xInit, yInit, zoomInit, xTarget, yTarget, zoomTarget] = [...this.buildSvgIntroParams(i, pointDur, segmentDur)];
          const zoomIncident = new TDCAM.ZoomTo({
            animatedAttrs: {
              position: {
                x: xTarget,
                y: yTarget,
                zoom: zoomTarget
              }
            },
            initialValues: {
              position: {
                x: xInit,
                y: yInit,
                zoom: zoomInit
              }
            }
          }, {
            selector: ".viewport-lineGraph",
            duration: Math.trunc(duration),
            easing: "easeInOutQuad"
          });
          targetGroup.addIncident(zoomIncident, Math.trunc(entry));
        }
      }
    }

    return [targetGroup, pathAnimGroup, pointAnimGroup];
  }

  buildSvgIntroParams(index, pointDur, segmentDur) {
    let entry = 0;
    let duration = 0;
    let xTarget = this.instance.findPointX(index) + (1 - this.instance.graphScale.width) / 2 * config.lineGraph.originalDims.width;
    let yTarget = this.instance.findPointY(index, 0) + (1 - this.instance.graphScale.height) / 2 * config.lineGraph.originalDims.height;
    let zoomTarget = this.instance.traceScale;
    let xInit, yInit, zoomInit;

    if (index === 0) {
      xInit = config.lineGraph.originalDims.width * 0.5;
      yInit = config.lineGraph.originalDims.height * 0.5;
      zoomInit = this.instance.traceScale;
      duration = pointDur - segmentDur * 0.15;
      entry = 0;
    } else if (index === this.instance.data.length - 1) {
      xInit = this.instance.findPointX(index - 1) + (1 - this.instance.graphScale.width) / 2 * config.lineGraph.originalDims.width;
      yInit = this.instance.findPointY(index - 1, 0) + (1 - this.instance.graphScale.height) / 2 * config.lineGraph.originalDims.height;
      zoomInit = this.instance.traceScale;
      xTarget = config.lineGraph.originalDims.width * 0.5;
      yTarget = config.lineGraph.originalDims.height * 0.5;
      zoomTarget = 1;
      entry = segmentDur * (index - 1) + pointDur;
      duration = segmentDur + pointDur - segmentDur * 0.15;
    } else {
      xInit = this.instance.findPointX(index - 1) + (1 - this.instance.graphScale.width) / 2 * config.lineGraph.originalDims.width;
      yInit = this.instance.findPointY(index - 1, 0) + (1 - this.instance.graphScale.height) / 2 * config.lineGraph.originalDims.height;
      zoomInit = this.instance.traceScale;
      duration = segmentDur;
      entry = segmentDur * (index - 1) + pointDur;
    }

    return [entry, duration, xInit, yInit, zoomInit, xTarget, yTarget, zoomTarget];
  }

  buildOutroGraph(targetGroup) {
    const segmentDur = this.instance.outroDur / (this.instance.data.length + 1);
    const pointDur = segmentDur * 0.25;
    const pathDur = segmentDur * 0.8;
    const zoomOffset = this.instance.trace ? 1 : 0;
    const pathAnimGroup = new MotorCortex.Group();
    const pointAnimGroup = new MotorCortex.Group();

    for (let l = 0; l < this.instance.dataSetsNum; l++) {
      const gLabelGroup = new MotorCortex.Group();

      for (let i = 0; i < this.instance.data.length; i++) {
        // Path outro Animation
        if (i !== this.instance.data.length - 1) {
          const pathAnimation = new SVGD.Draw({
            animatedAttrs: {
              cover: 0
            },
            initialValues: {
              cover: 1
            }
          }, {
            selector: "#line-".concat(l, "-").concat(i),
            duration: Math.trunc(pathDur),
            easing: "easeInOutQuad"
          });
          pathAnimGroup.addIncident(pathAnimation, Math.trunc(segmentDur * (this.instance.data.length + zoomOffset - i - 2) + segmentDur * 0.2));
        } // Points outro Animation


        const pointAnimation = new MotorCortex.CSSEffect({
          animatedAttrs: {
            opacity: 0,
            r: "0"
          },
          initialValues: {
            opacity: 1,
            r: "".concat(this.instance.r, "%")
          }
        }, {
          selector: "#point-".concat(l, "-").concat(i),
          duration: Math.trunc(pointDur),
          easeing: "easeOutCubic"
        });
        pointAnimGroup.addIncident(pointAnimation, Math.trunc(segmentDur * (this.instance.data.length + zoomOffset - i - 1))); // Graph Label Outro Animation

        const targetTop = this.instance.findPointY(i, l) - this.instance.linesHeight * 0.083;
        const topOffset = targetTop + this.instance.linesHeight * 0.07 / 2;
        let targetWidth = 10 / 2 * this.instance.data.length > 10 ? 10 : 10 / 2 * this.instance.data.length;
        targetWidth = targetWidth < 6 ? 6 : targetWidth;
        const targetLeft = this.instance.findPointX(i) - targetWidth * this.instance.linesWidth / 100 * 0.5;
        const leftOffset = targetLeft + this.instance.linesWidth * (targetWidth / 100) / 2;
        const gLabelAnimation = new MotorCortex.CSSEffect({
          animatedAttrs: {
            opacity: 0,
            width: "0%",
            "min-width": "0%",
            height: "0%",
            top: "".concat(topOffset, "px"),
            left: "".concat(leftOffset, "px"),
            "font-size": 0
          },
          initialValues: {
            opacity: 0.6,
            width: "".concat(targetWidth, "%"),
            "min-width": "".concat(targetWidth, "%"),
            height: "7%",
            top: "".concat(targetTop, "px"),
            left: "".concat(targetLeft, "px"),
            "font-size": this.instance.fontSizeInner
          }
        }, {
          selector: ".label-".concat(l, "-").concat(this.instance.data[i].name),
          duration: Math.trunc(pointDur),
          easeing: "easeInOutCubic"
        });
        gLabelGroup.addIncident(gLabelAnimation, Math.trunc(segmentDur * (this.instance.data.length + zoomOffset - i - 1) + pointDur * 0.2));
      }

      targetGroup.addIncident(gLabelGroup, 0);
    }

    return [targetGroup, pathAnimGroup, pointAnimGroup];
  }

}

/**
 * LINE GRAPH: MotorCortex Implementation
 */

class LineGraph extends MotorCortex.HTMLClip {
  // Building HTML tree for incident
  get html() {
    this.buildVars(); // Title modal html generation

    const title = [];

    for (let i = 0; i < this.words.length; i++) {
      title.push("<div id=\"word-".concat(i, "\" class=\"fontColorOn letter-wrapper-title\">").concat(this.words[i], "</div>"));

      if (i !== this.words.length - 1) {
        title.push('<div class="space-char letter-wrapper-title">-</div>');
      }
    } // Legend html generation


    const legend = [];

    if (this.legend) {
      const legendLine = [];

      for (let l = 0; l < this.dataSetsNum; l++) {
        legendLine.push("<div class=\"line-wrapper\"><div class=\"color-wrapper\">\n              <div class=\"line-color color-".concat(l, "\"></div>\n            </div><div class=\"line-title\">").concat(this.dataSets[l].title, "</div></div>"));
      }

      legend.push("<div class=\"legend-wrapper\">".concat(legendLine.join(""), "</div>"));
    } // Data stele html generation


    const dataSteles = [];

    if (this.grid === "steles") {
      for (const i in this.data) {
        const stele = [];

        for (let z = 0; z < this.steleBlockNum; z++) {
          stele.push("<div\n              class=\"stele-block-".concat(i, " stele-block stele-grid-block\"}\n            ></div>"));
        }

        dataSteles.push("<div id=\"stele-".concat(i, "\" class=\"data-stele stele-grid\">").concat(stele.join(""), "</div>"));
      }
    } else if (this.grid === "lines") {
      const stele = [];

      for (let z = 0; z < this.steleBlockNum; z++) {
        stele.push('<div class="stele-block-0 stele-block line-grid-block"></div>');
      }

      dataSteles.push("<div id=\"stele-0\" class=\"data-stele line-grid\">".concat(stele.join(""), "</div>"));
    } // Graph Lines SVG hmtl generation


    const lineGroups = [];

    for (let l = 0; l < this.dataSetsNum; l++) {
      const linePaths = [];

      for (let i = 0; i < this.data.length; i++) {
        const lineSegment = [];
        const xPoint1 = this.findPointX(i);
        const yPoint1 = this.findPointY(i, l);

        if (i !== this.data.length - 1) {
          const xPoint2 = this.findPointX(i + 1);
          const yPoint2 = this.findPointY(i + 1, l); // Dataline Generation

          lineSegment.push("<path\n              id=\"line-".concat(l, "-").concat(i, "\"\n              class=\"line-").concat(l, "\"\n              d=\"M ").concat(xPoint1, " ").concat(yPoint1, "L ").concat(xPoint2, " ").concat(yPoint2, "\"\n              stroke=\"").concat(this.dataSets[l].color, "\"\n              stroke-width=\"0.65%\"\n              stroke-linecap=\"round\"\n              fill=\"none\"\n            />"));
        } // Datapoint Generation


        lineSegment.push("<circle\n            id=\"point-".concat(l, "-").concat(i, "\"\n            class=\"point-").concat(l, " datapoint\"\n            cx=\"").concat(xPoint1, "\"\n            cy=\"").concat(yPoint1, "\"\n            r=\"").concat(this.r, "%\"\n            fill=\"").concat(this.senaryC, "\"\n            stroke=\"").concat(this.senaryC, "\"\n          />"));
        linePaths.push("<g>".concat(lineSegment.join(""), "</g>"));
      }

      lineGroups.push("<g>".concat(linePaths.join(""), "</g>"));
    }

    const lines = [];
    lines.push("<svg\n        class=\"lines-container\"\n        viewbox=\"0 0 ".concat(this.linesWidth, " ").concat(this.linesHeight, "\"\n      >").concat(lineGroups.join(""), "</svg>")); // Graph labels html generation with data parameters as reference

    const labelGroups = [];

    for (let l = 0; l < this.dataSetsNum; l++) {
      const graphLabels = [];

      for (let i = 0; i < this.data.length; i++) {
        const {
          name,
          values
        } = this.data[i];
        graphLabels.push("<div>\n            <div\n              class=\"hoverPoint-".concat(l, "-").concat(name, " hoverPoint\"\n            ></div>\n            <div\n              class=\"label-").concat(l, "-").concat(name, " inner-label-container\"\n              id=\"label-").concat(l, "-").concat(name, "\"\n            >\n              <div class=\"inner-label\">\n                ").concat(parseFloat(values[l].toFixed(2)), " ").concat(this.unit, "\n              </div>\n            </div>\n          </div>"));
      }

      labelGroups.push("<div class=\"line-".concat(l, "-label-container\">").concat(graphLabels.join(""), "</div>"));
    } // X-axis labels html generation with data parameter as reference


    const xLabels = [];

    for (const i in this.data) {
      const labelX = [];

      if (this.data[i].name.length > 4) {
        this.data[i].name = this.data[i].name.slice(0, 4);
      }

      for (const z in this.data[i].name) {
        labelX.push("<div id=\"letter-".concat(i, "-").concat(z, "\" class=\"letter-container\">\n            <div class=\"letter-wrapper-label fontColorOn\">\n              ").concat(this.data[i].name[z], "\n            </div>\n          </div>"));
      }

      xLabels.push("<div class=\"label-container\" id=\"label-".concat(i, "\">\n          ").concat(labelX.join(""), "\n        </div>"));
    } // MAIN HTML TREE


    return "<div class=\"container-lineGraph\">\n        <div class=\"viewport-lineGraph\">\n          <div class=\"title-container-lineGraph\">\n            <div class=\"title-wrapper-lineGraph\">".concat(title.join(""), "</div>\n          </div>\n          ").concat(legend.join(""), "\n          <div class=\"graph-background\"></div>\n          <div class=\"dataStele-container\">").concat(dataSteles.join(""), "</div>\n          <div class=\"svg-container\">").concat(lines.join(""), "</div>\n          <div class=\"graph-labels-container\">").concat(labelGroups.join(""), "</div>\n          <div class=\"x-labels-container-lineGraph\">").concat(xLabels.join(""), "</div>\n          <div class=\"x-labels-back-wrapper-lineGraph\">\n            <div class=\"block-background\"></div>\n          </div>\n        </div>\n      </div>");
  } // Build CSS rules for incident


  get css() {
    return buildCSS(this);
  } // Font API call (only google fonts API supported)


  get fonts() {
    return [{
      type: "google-font",
      src: "".concat(this.url)
    }];
  } // MotorCortex Animation generation and


  buildTree() {
    opacityControl(this, ".container-lineGraph"); // INTRO CONTROL

    if (this.attrs.timings.intro) {
      let introGroup = new MotorCortex.Group(); // Background Intro Animation

      introGroup.addIncident(this.animConstructor.buildBackgroundIntro(), this.introDur * 0); // Main Title Intro Animation

      introGroup.addIncident(this.animConstructor.buildTitleIntroCombo(), Math.trunc(this.introDur * 0.14)); // Legend Intro Animation

      introGroup.addIncident(this.animConstructor.buildIntroLegend(), Math.trunc(this.introDur * 0.1)); // Label Intro Animation

      introGroup.addIncident(this.animConstructor.buildIntroLabels(), Math.trunc(this.introDur * 0.18)); // Data Stele intro animation

      introGroup.addIncident(this.animConstructor.buildIntroStele(), Math.trunc(this.introDur * 0.45)); // Graph SVG, Labels, & Zoom Intro Animation

      const segmentDur = this.introDur / this.data.length;
      const pointDur = segmentDur * 0.35;
      const [targetGroup, pathGroup, pointGroup] = this.animConstructor.buildIntroGraph(introGroup);
      introGroup = targetGroup;
      introGroup.addIncident(pathGroup, Math.trunc(pointDur));
      introGroup.addIncident(pointGroup, 0);
      this.addIncident(introGroup, 0);
    } // OUTRO CONTROL


    if (this.attrs.timings.outro) {
      let outroGroup = new MotorCortex.Group(); // Background Outro Animation

      outroGroup.addIncident(this.animConstructor.buildBackgroundOutro(), Math.trunc(this.outroDur * 0.8)); // Main Title Outro Animation

      outroGroup.addIncident(this.animConstructor.buildTitleOutroCombo(), Math.trunc(this.outroDur * 0.76)); // Legend Outro Animation

      outroGroup.addIncident(this.animConstructor.buildOutroLegend(), Math.trunc(this.outroDur * 0.1)); // Label Outro Animation

      outroGroup.addIncident(this.animConstructor.buildOutroLabels(), this.outroDur - this.outroDur * 0.55); // Data Stele Outro Animation

      outroGroup.addIncident(this.animConstructor.buildOutroStele(), this.outroDur * 0.25); // Graph SVG & Labels Outro Animation

      const segmentDur = this.outroDur / (this.data.length + 1);
      const pointDur = segmentDur * 0.25;
      const [targetGroup, pathGroup, pointGroup] = [...this.animConstructor.buildOutroGraph(outroGroup)];
      outroGroup = targetGroup;
      outroGroup.addIncident(pathGroup, Math.trunc(pointDur));
      outroGroup.addIncident(pointGroup, 0);
      this.addIncident(outroGroup, 0 + this.introDur + this.staticDur);
    } // STATIC DURATION CONTROL


    this.addIncident(this.animConstructor.buildStaticControl(), this.introDur);
  }

  buildVars() {
    var _this$attrs$timings$s;

    // AnimConstructor Init
    this.animConstructor = new AnimationConstructor(this); // Data init

    this.data = this.attrs.data.data; // Colors control

    this.colorPalette = colorPalette;
    this.attrs.palette = this.attrs.palette || {};
    this.primaryC = this.attrs.palette.primary || this.colorPalette.gray;
    this.secondaryC = this.attrs.palette.secondary || this.colorPalette.lightGray;
    this.tertiaryC = this.attrs.palette.tertiary || this.colorPalette.darkGray;
    this.quaternaryC = this.attrs.palette.quaternary || this.colorPalette.whiteBack;
    this.quinaryC = this.attrs.palette.quinary || this.colorPalette.gray;
    this.senaryC = this.attrs.palette.senary || this.colorPalette.accent;
    this.fontC = this.attrs.palette.font || this.colorPalette.font;
    this.accentC = this.attrs.palette.accent || this.colorPalette.accent;
    this.backgroundC = this.attrs.palette.background || this.colorPalette.background; // Data processing

    this.title = this.attrs.data.title;
    this.words = this.title.split(" ");
    this.dataSets = this.attrs.data.dataSets ? this.attrs.data.dataSets : [{
      title: "",
      color: this.accentC
    }];
    this.dataSetsNum = this.dataSets.length;
    let colorCount = 2;
    this.dataSets.map((dataSet, l) => {
      if (dataSet.color === "" || !dataSet.color) {
        dataSet.color = this.colorPalette.dataColors[colorCount];
        colorCount++;
      }

      if (dataSet.title === "" || !dataSet.title) {
        dataSet.title = "Dataset-".concat(l + 1);
      } else if (dataSet.title.length > 10) {
        dataSet.title = dataSet.title.substr(0, 10);
      }
    });
    this.legend = this.dataSetsNum > 1 ? true : this.attrs.legend || false;
    this.maxPoint = 0;

    for (const datum of this.data) {
      if (Math.max(...datum.values) > this.maxPoint) {
        this.maxPoint = Math.max(...datum.values);
      }
    }

    this.maxPoint = this.attrs.data.maxValue ? this.attrs.data.maxValue : this.maxPoint;
    this.hover = this.attrs.data.hover || false;
    this.hover = this.dataSetsNum !== 1 ? true : this.hover;
    this.grid = this.attrs.grid || "lines";
    this.grid = this.grid !== "lines" && this.grid !== "steles" ? "lines" : this.grid;
    this.gridH = this.attrs.gridH || 1;
    this.attrs.trace = this.attrs.trace || {};
    this.trace = this.dataSetsNum === 1 ? this.attrs.trace.toggle || false : false;
    this.traceScale = this.attrs.trace.scale || 1.4;
    this.unit = this.attrs.data.unit || "%";
    this.interval = this.attrs.data.interval || 5;
    this.steleBlockNum = this.maxPoint / this.interval + 1; // Sizing and position controls

    this.config = config;
    this.graphScale = {
      width: 0.76,
      height: 0.58
    };
    this.legendHeightFactor = this.dataSetsNum === 1 ? 1 : this.dataSetsNum / 2;
    this.legendHeight = this.attrs.legendHeight ? this.attrs.legendHeight : 4 * (this.legendHeightFactor + (this.legendHeightFactor % 1 ? 1 : 0));
    this.linesWidth = helpers.extractUnitsNums(this.props.containerParams.width).number * this.graphScale.width;
    this.linesHeight = helpers.extractUnitsNums(this.props.containerParams.height).number * this.graphScale.height;
    this.steleWidth = this.linesWidth * 0.01;
    this.spaceAround = (this.linesWidth - this.steleWidth * this.data.length) / (this.data.length * 2);
    this.r = this.attrs.dataPointR || 0.65; // Global access data process functions

    this.findPointX = datapoint => {
      return this.steleWidth / 2 + this.spaceAround + datapoint * (2 * this.spaceAround + this.steleWidth);
    };

    this.findPointY = (datapoint, line) => {
      return this.linesHeight - this.data[datapoint].values[line] * this.linesHeight / this.maxPoint;
    }; // Fonts control


    this.attrs.font = this.attrs.font || {};
    this.fontFamily = this.attrs.font.fontFamily || "'Staatliches', cursive";
    this.fontSizeLabel = this.attrs.font.size || "1.7rem";
    this.fontSizeTitle = 1.5 * helpers.extractUnitsNums(this.fontSizeLabel).number + helpers.extractUnitsNums(this.fontSizeLabel).unit;
    this.fontSizeInner = 1 * helpers.extractUnitsNums(this.fontSizeLabel).number + helpers.extractUnitsNums(this.fontSizeLabel).unit;
    this.url = this.attrs.font.url || "https://fonts.googleapis.com/css2?family=Staatliches&display=swap"; // Timeline control

    this.attrs.timings = this.attrs.timings || {};
    this.introDur = this.attrs.timings.intro || 0;
    this.outroDur = this.attrs.timings.outro || 0;
    this.staticDur = (_this$attrs$timings$s = this.attrs.timings.static) !== null && _this$attrs$timings$s !== void 0 ? _this$attrs$timings$s : 1000;
  }

}

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
    return colorPalette.dataColors[Math.floor(Math.random() * Math.floor(colorPalette.dataColors.length))];
  }

  return colorPalette.dataColors[index];
}

class PieChart extends MotorCortex.HTMLClip {
  get html() {
    this.data = this.attrs.data.data;
    return "<div class=\"container-pieChart\">\n        <h1 class=\"title\">".concat(this.buildTitle().join(""), "</h1>\n        <div class=\"columns\">\n          <div class=\"col-1\">\n            <div class=\"piechart\"></div>\n          </div>\n          <div class=\"col-2\">\n            <div class=\"legend\">").concat(this.buildLegend().join(""), "</div>\n          </div>\n        </div>\n      </div>");
  }

  get css() {
    var _cssArgs$font, _cssArgs$font2, _cssArgs$font3;

    const cssArgs = {
      data: this.attrs.data,
      palette: this.attrs.palette || {},
      font: this.attrs.font || {},
      radiusString: this.createRadiusString()
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
        "font-family": "".concat(((_cssArgs$font = cssArgs.font) === null || _cssArgs$font === void 0 ? void 0 : _cssArgs$font.fontFamily) || "Staatliches, cursive"),
        "font-size": "".concat(((_cssArgs$font2 = cssArgs.font) === null || _cssArgs$font2 === void 0 ? void 0 : _cssArgs$font2.size) || "1.6rem"),
        color: cssArgs.palette.font || colorPalette.font
      },
      ".title": {
        top: "-1rem",
        position: "relative",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        "flex:direction": "row",
        overflow: "hidden"
      },
      ".columns": {
        width: "100%",
        height: "100%",
        display: "flex"
      },
      ".col-1": {
        width: "65%",
        height: "100%",
        display: "flex",
        "justify-content": "center",
        "align-items": "center"
      },
      ".col-2": {
        width: "35%",
        height: "100%",
        display: "flex",
        "justify-content": "center",
        "align-items": "center"
      },
      ".piechart": {
        display: "block",
        width: "95%",
        height: "95%",
        "border-radius": "50%",
        "background-image": "conic-gradient(".concat(cssArgs.radiusString, ")"),
        "margin-left": "2rem"
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
        overflow: "hidden"
      },
      ".legend-row": {
        display: "flex",
        "flex-direction": "row",
        "align-items": "center",
        "align-self": "flex-start"
      },
      ".legend-text": {
        " white-space": "nowrap"
      },
      ".space": {
        "min-width": (_cssArgs$font3 = cssArgs.font) !== null && _cssArgs$font3 !== void 0 && _cssArgs$font3.size ? "calc(".concat(cssArgs.font.size, " * 0.5)") : "0.8rem"
      },
      ".char": {
        position: "relative"
      }
    };
    cssArgs.data.data.forEach((elem, i) => {
      styles[".meter-" + i] = {
        background: elem.color || generateColor(i),
        width: "1rem",
        height: "1rem",
        display: "block",
        "margin-right": "0.5rem",
        "margin-bottom": "0.25rem"
      };
    });
    return cssObjectToString(styles);
  }

  get fonts() {
    var _this$attrs$font;

    return [{
      type: "google-font",
      src: ((_this$attrs$font = this.attrs.font) === null || _this$attrs$font === void 0 ? void 0 : _this$attrs$font.url) || "https://fonts.googleapis.com/css2?family=Staatliches&display=swap"
    }];
  }

  buildTree() {
    var _this$attrs$timings$s, _this$attrs$timings;

    fadeOutOpacityControl(this, ".container-pieChart");
    this.static = (_this$attrs$timings$s = this.attrs.timings.static) !== null && _this$attrs$timings$s !== void 0 ? _this$attrs$timings$s : 1000;
    this.intro = this.attrs.timings.intro || 0;
    this.outro = this.attrs.timings.outro || 0;

    if (this.intro) {
      const rotateDuration = Math.round(this.intro * 0.8);
      const titleInDuration = Math.round(this.intro * 0.4);

      if (this.attrs.data.title) {
        [...this.attrs.data.title].forEach((char, index) => {
          const titleIn = new MotorCortex.CSSEffect({
            animatedAttrs: {
              right: "0%",
              opacity: 1
            },
            initialValues: {
              right: "-102%",
              opacity: 0,
              position: "relative"
            }
          }, {
            duration: Math.round(titleInDuration / this.attrs.data.title.length),
            selector: ".char-".concat(index),
            easing: "easeOutCubic"
          });
          this.addIncident(titleIn, Math.round(titleInDuration / this.attrs.data.title.length) * index);
        });
      }

      const rotateIn = new MotorCortex.CSSEffect({
        animatedAttrs: {
          "background-image": "conic-gradient(".concat(this.createRadiusString(), ")")
        },
        initialValues: {
          "background-image": "conic-gradient(".concat(this.createNullRadiusString(), ")")
        }
      }, {
        duration: rotateDuration,
        selector: ".piechart",
        easing: "easeInOutCubic"
      });
      this.addIncident(rotateIn, titleInDuration - this.intro * 0.2);
      const legendIn = new MotorCortex.CSSEffect({
        animatedAttrs: {
          width: "75%",
          "min-width": "50%",
          opacity: 1
        },
        initialValues: {
          width: "0%",
          "min-width": "0%",
          opacity: 0
        }
      }, {
        duration: rotateDuration,
        selector: ".legend",
        easing: "easeInOutCubic"
      });
      this.addIncident(legendIn, titleInDuration - this.intro * 0.2);
    }

    const staticPie = new MotorCortex.CSSEffect({
      animatedAttrs: {}
    }, {
      duration: this.static,
      selector: ".container-pieChart"
    });
    this.addIncident(staticPie, this.intro);

    if ((_this$attrs$timings = this.attrs.timings) !== null && _this$attrs$timings !== void 0 && _this$attrs$timings.outro) {
      var _this$attrs$timings2;

      const outroDuration = Math.round((_this$attrs$timings2 = this.attrs.timings) === null || _this$attrs$timings2 === void 0 ? void 0 : _this$attrs$timings2.outro);
      const titleOut = new MotorCortex.CSSEffect({
        animatedAttrs: {
          top: "-10%"
        },
        initialValues: {
          top: "0%"
        }
      }, {
        duration: outroDuration * 0.5,
        selector: ".title",
        easing: "easeInQuart"
      });
      this.addIncident(titleOut, this.intro + this.static + this.outro * 0.2);
      const legendOut = new MotorCortex.CSSEffect({
        animatedAttrs: {
          width: "0%",
          "min-width": "0%",
          opacity: 0
        }
      }, {
        duration: outroDuration,
        selector: ".legend",
        easing: "easeInOutCirc"
      });
      this.addIncident(legendOut, this.intro + this.static);
      const pieOut = new MotorCortex.CSSEffect({
        animatedAttrs: {
          "background-image": "conic-gradient(".concat(this.createNullRadiusString(), ")")
        },
        initialValues: {
          "background-image": "conic-gradient(".concat(this.createRadiusString(), ")")
        }
      }, {
        duration: outroDuration,
        selector: ".piechart",
        easing: "easeInOutCubic"
      });
      this.addIncident(pieOut, this.intro + this.static);
    }
  }

  createRadiusString() {
    let gradientString = "";
    let turnCount = 0;

    for (const datum in this.data) {
      if (datum === "0") {
        gradientString += "\n                    ".concat(this.data[datum].color || generateColor(datum), "\n                    ").concat(this.data[datum].value / 100, "turn,\n                ");
      } else {
        gradientString += "\n                    ".concat(this.data[datum - 1].color || generateColor(datum), "\n                    ").concat(this.data[datum - 1].value / 100, "turn,\n                    ").concat(this.data[datum].color || generateColor(datum), "\n                    ").concat(turnCount + this.data[datum].value / 100, "turn,\n                ");
      }

      turnCount += this.data[datum].value / 100;
    }

    return gradientString + "rgba(0,0,0,0) 0 360deg";
  }

  createNullRadiusString() {
    let gradientString = "";

    for (const datum in this.data) {
      if (datum === "0") {
        gradientString += "\n                    ".concat(this.data[datum].color || generateColor(datum), "\n                    ", 0, "turn,\n                ");
      } else {
        gradientString += "\n                    ".concat(this.data[datum - 1].color || generateColor(datum), "\n                    ", 0, "turn,\n                    ").concat(this.data[datum].color || generateColor(datum), "\n                    ", 0, "turn,\n                ");
      }
    }

    return gradientString + "rgba(0,0,0,0) 0 360deg";
  }

  buildTitle() {
    return (this.data.title || []).map((char, index) => "<div class=\"char\">\n          <div class=\"char-".concat(index, " ").concat(char === " " ? " space" : "", "\">\n            ").concat(char, "\n          </div>\n        </div>"));
  }

  buildLegend() {
    return this.data.map((elem, index) => {
      if (elem.name.length > 24) {
        elem.name = elem.name.substring(0, 21) + "...";
      }

      return "<div class=\"legend-row\">\n          <div class=\"meter-".concat(index, "\"></div>\n          <div class=\"legend-text\">").concat(elem.name, "</div>\n        </div>");
    });
  }

}

var validationRules = {
  ProgressBar: {
    data: {
      type: "array",
      items: {
        type: "any"
      }
    },
    timings: {
      type: "object",
      props: {
        intro: {
          type: "number",
          min: 0,
          optional: true
        },
        static: {
          type: "number",
          min: 0,
          optional: true
        },
        outro: {
          type: "number",
          min: 0,
          optional: true
        }
      }
    },
    pallete: {
      type: "object",
      optional: true,
      props: {
        primary: {
          type: "color",
          optional: true
        },
        secondary: {
          type: "color",
          optional: true
        },
        font: {
          type: "color",
          optional: true
        },
        accent: {
          type: "color",
          optional: true
        },
        background: {
          type: "color",
          optional: true
        }
      }
    },
    font: {
      type: "object",
      optional: true,
      props: {
        url: {
          type: "string",
          optional: true
        },
        fontFamily: {
          type: "string",
          optional: true
        },
        size: {
          type: "measurement",
          optional: true,
          min: 0,
          units: ["px", "%", "em", "rem"]
        }
      }
    },
    options: {
      type: "object",
      optional: true,
      props: {
        hidePercentage: {
          type: "boolean",
          optional: true
        }
      }
    }
  },
  BarChartSimple: {
    data: {
      type: "object",
      props: {
        title: {
          type: "string",
          optional: true
        },
        subtitle: {
          type: "string",
          optional: true
        },
        showGrid: {
          type: "boolean",
          optional: true
        },
        maxValue: {
          type: "number",
          min: 0,
          optional: true
        },
        data: {
          type: "array",
          items: {
            type: "any"
          }
        }
      }
    },
    timings: {
      type: "object",
      props: {
        intro: {
          type: "number",
          min: 0,
          optional: true
        },
        static: {
          type: "number",
          min: 0,
          optional: true
        },
        outro: {
          type: "number",
          min: 0,
          optional: true
        }
      }
    },
    pallete: {
      type: "object",
      optional: true,
      props: {
        primary: {
          type: "color",
          optional: true
        },
        secondary: {
          type: "color",
          optional: true
        },
        tertiary: {
          type: "color",
          optional: true
        },
        font: {
          type: "color",
          optional: true
        },
        accent: {
          type: "color",
          optional: true
        },
        background: {
          type: "color",
          optional: true
        }
      }
    },
    font: {
      type: "object",
      optional: true,
      props: {
        url: {
          type: "string",
          optional: true
        },
        fontFamily: {
          type: "string",
          optional: true
        },
        size: {
          type: "measurement",
          optional: true,
          min: 0,
          units: ["px", "%", "em", "rem"]
        }
      }
    }
  },
  LineGraph: {
    data: {
      type: "object",
      props: {
        title: {
          type: "string",
          optional: true
        },
        showGrid: {
          type: "boolean",
          optional: true
        },
        interval: {
          type: "number",
          min: 0,
          optional: true
        },
        maxValue: {
          type: "number",
          min: 0,
          optional: true
        },
        unit: {
          type: "string",
          optional: true
        },
        hover: {
          type: "boolean",
          optional: true
        },
        data: {
          type: "array",
          items: {
            type: "any"
          }
        },
        dataSets: {
          type: "array",
          items: {
            type: "any"
          }
        }
      }
    },
    timings: {
      type: "object",
      props: {
        intro: {
          type: "number",
          min: 0,
          optional: true
        },
        static: {
          type: "number",
          min: 0,
          optional: true
        },
        outro: {
          type: "number",
          min: 0,
          optional: true
        }
      }
    },
    pallete: {
      type: "object",
      optional: true,
      props: {
        primary: {
          type: "color",
          optional: true
        },
        secondary: {
          type: "color",
          optional: true
        },
        tertiary: {
          type: "color",
          optional: true
        },
        quaternary: {
          type: "color",
          optional: true
        },
        font: {
          type: "color",
          optional: true
        },
        accent: {
          type: "color",
          optional: true
        },
        background: {
          type: "color",
          optional: true
        }
      }
    },
    font: {
      type: "object",
      optional: true,
      props: {
        url: {
          type: "string",
          optional: true
        },
        fontFamily: {
          type: "string",
          optional: true
        },
        size: {
          type: "measurement",
          optional: true,
          min: 0,
          units: ["px", "%", "em", "rem"]
        }
      }
    },
    hover: {
      type: "boolean",
      optional: true
    },
    legend: {
      type: "boolean",
      optional: true
    },
    trace: {
      type: "object",
      optional: true,
      props: {
        toggle: {
          type: "boolean",
          optional: true
        },
        scale: {
          type: "number",
          optional: true
        }
      }
    }
  },
  PieChart: {
    data: {
      type: "object",
      props: {
        title: {
          type: "string",
          optional: true
        },
        data: {
          type: "array",
          items: {
            type: "any"
          }
        }
      }
    },
    timings: {
      type: "object",
      props: {
        intro: {
          type: "number",
          min: 0,
          optional: true
        },
        static: {
          type: "number",
          min: 0,
          optional: true
        },
        outro: {
          type: "number",
          min: 0,
          optional: true
        }
      }
    },
    pallete: {
      type: "object",
      optional: true,
      props: {
        font: {
          type: "color",
          optional: true
        },
        background: {
          type: "color",
          optional: true
        }
      }
    },
    font: {
      type: "object",
      optional: true,
      props: {
        url: {
          type: "string",
          optional: true
        },
        fontFamily: {
          type: "string",
          optional: true
        },
        size: {
          type: "measurement",
          optional: true,
          min: 0,
          units: ["px", "%", "em", "rem"]
        }
      }
    }
  }
};

var name = "@donkeyclip/motorcortex-graphs";
var version = "2.2.0";

var index = {
  npm_name: name,
  version: version,
  incidents: [{
    exportable: ProgressBar,
    name: "ProgressBar",
    attributesValidationRules: validationRules.ProgressBar,
    originalDims: {
      width: "1200px",
      height: "900px"
    }
  }, {
    exportable: BarChartSimple,
    name: "BarChartSimple",
    attributesValidationRules: validationRules.BarChartSimple
  }, {
    exportable: LineGraph,
    name: "LineGraph",
    attributesValidationRules: validationRules.LineGraph
  }, {
    exportable: PieChart,
    name: "PieChart",
    attributesValidationRules: validationRules.PieChart,
    originalDims: {
      width: "1200px",
      height: "900px"
    }
  }]
};

module.exports = index;
