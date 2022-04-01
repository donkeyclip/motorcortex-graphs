import {
  loadPlugin,
  CSSEffect,
  HTMLClip,
  Group,
} from "@donkeyclip/motorcortex";
import CounterPlugin from "@donkeyclip/motorcortex-counter";
const Counter = loadPlugin(CounterPlugin);

import { colorPalette } from "../../shared/colorPalette";
import { opacityControl } from "../../shared/opacityControl";
import helpers from "../../shared/helpers";
import buildCSS from "./progressMeterStyleSheet";
import config from "../../incident_config";
import { svgPresets } from "../../shared/presetsExports";

/**
 * BAR CHART SIMPLE GRAPH: MotorCortex Implementation
 */
export default class ProgressMeter extends HTMLClip {
  // Building HTML tree for incident
  get html() {
    this.buildVars();
    // Building Inner SVG
    let innerImage = null;
    if (this.innerSVG) {
      const initialSVG = svgPresets[this.innerSVG]
        ? svgPresets[this.innerSVG]
        : this.innerSVG;

      const gradientControl = this.innerFill.rotate
        ? {
            x1: this.innerFill.revert ? 1 : 0,
            x2: this.innerFill.revert ? 0 : 1,
            y1: 0,
            y2: 0,
          }
        : {
            x1: 0,
            x2: 0,
            y1: this.innerFill.revert ? 0 : 1,
            y2: this.innerFill.revert ? 1 : 0,
          };

      const classPos = initialSVG.indexOf("<svg ") + 5;
      const customPathClass = `class="svg-preset" fill="url(#gradientFilter)"`;
      let svgPath = [
        initialSVG.slice(0, classPos),
        customPathClass,
        initialSVG.slice(classPos),
      ].join("");

      const gradientPos = svgPath.indexOf(">") + 1;
      const gradient = (
        <linearGradient
          class="gradient-filter"
          id="gradientFilter"
          x1={gradientControl.x1}
          x2={gradientControl.x2}
          y1={gradientControl.y1}
          y2={gradientControl.y2}
        >
          <stop offset="0%" stop-opacity="1" stop-color={this.accentC} />
          <stop
            offset={`${this.data.value}%`}
            stop-opacity="1"
            class="gradient-stop"
            stop-color={this.accentC}
          />
          <stop
            offset={`${this.data.value}%`}
            stop-opacity="0.3"
            class="gradient-stop"
            stop-color={this.accentC}
          />
          <stop
            offset="100%"
            stop-opacity="0.3"
            class="gradient-back-bottom"
            stop-color={this.accentC}
          />
          <stop
            offset="100%"
            stop-opacity="0.0"
            class="gradient-back-bottom"
            stop-color={this.accentC}
          />
          <stop
            offset="100%"
            stop-opacity="0.0"
            class="gradient-back-top"
            stop-color={this.accentC}
          />
        </linearGradient>
      ).toString();
      svgPath = [
        svgPath.slice(0, gradientPos),
        gradient,
        svgPath.slice(gradientPos),
      ].join("");

      innerImage = (
        <div class="inner-svg-container">
          <div class="path-container">{svgPath}</div>
        </div>
      );
    }

    // Bulding SVG for meter circle
    const svgViewBox = (
      <div class="svg-container">
        <svg
          class="svg-viewbox"
          viewbox={`0 0 ${this.boxSize} ${this.boxSize}`}
        >
          <circle
            class="meter-track meter-general"
            cx={`${this.boxSize * 0.5}`}
            cy={`${this.boxSize * 0.5}`}
            r= {this.boxSize * 0.46}
            pathLength={this.pathLength}
          ></circle>
          <circle
            class="meter-path meter-general"
            cx={`${this.boxSize * 0.5}`}
            cy={`${this.boxSize * 0.5}`}
            pathLength={this.pathLength}
            r= {this.boxSize * 0.46}
          ></circle>
        </svg>
        {innerImage}
      </div>
    );

    // Building Meter Indicator
    const indicatorClass =
      this.innerSVG === null ? "indicator-center" : "indicator-label";

    const indicator = (
      <div class={`indicator-general ${indicatorClass}`}>
        <div class="indicator-value indicator-inner">{this.data.value}</div>
        <div class="indicator-unit indicator-inner">{this.data.unit}</div>
      </div>
    );

    // Complete HTML tree construction
    const progressMeterHTML = (
      <div class="container-progressMeter">
        {svgViewBox}
        {indicator}
      </div>
    );

    return progressMeterHTML;
  }

  // Build CSS rules for incident
  get css() {
    return buildCSS(this);
  }

  // Font API call (only google fonts API supported)
  get fonts() {
    return [
      {
        type: "google-font",
        src: `${this.url}`,
      },
    ];
  }

  // MotorCortex Animation generation and
  buildTree() {
    opacityControl(this, `.container-progressMeter`);

    // INTRO CONTROL
    if (this.attrs.timings.intro) {
      const introGroup = new Group();

      const pathAnimsDur = this.introDur * 0.7;
      const trackAnimsDur = this.introDur * 0.7;

      // Circle Track Intro Animation
      const circleTrackAnim = new CSSEffect(
        {
          animatedAttrs: {
            "stroke-dashoffset": 0,
          },
          initialValues: {
            "stroke-dashoffset": this.pathLength,
          },
        },
        {
          duration: Math.trunc(trackAnimsDur),
          easing: "easeInOutCubic",
          selector: ".meter-track",
        }
      );
      introGroup.addIncident(circleTrackAnim, 0);

      // Circle Path Intro Animation
      const circlePathAnim = new CSSEffect(
        {
          animatedAttrs: {
            "stroke-dashoffset":
              this.pathLength - (this.pathLength * this.data.value) / 100,
          },
          initialValues: {
            "stroke-dashoffset": this.pathLength,
          },
        },
        {
          duration: Math.trunc(pathAnimsDur),
          easing: "easeInOutCubic",
          selector: ".meter-path",
        }
      );
      introGroup.addIncident(circlePathAnim, Math.trunc(this.introDur * 0.3));

      // Circle Track Animation Fade In Effect
      const circleTrackFadeIn = new CSSEffect(
        {
          animatedAttrs: {
            "stroke-width": this.boxSize * 0.05,
          },
          initialValues: {
            "stroke-width": 0,
          },
        },
        {
          selector: ".meter-track",
          easing: "easeInQuart",
          duration: Math.trunc(trackAnimsDur * 0.04),
        }
      );
      introGroup.addIncident(circleTrackFadeIn, 0);

      // Circle Path Animation Fade In Effect
      const circlePathFadeIn = new CSSEffect(
        {
          animatedAttrs: {
            "stroke-width": this.boxSize * 0.05,
          },
          initialValues: {
            "stroke-width": 0,
          },
        },
        {
          selector: ".meter-path",
          easing: "easeInQuart",
          duration: Math.trunc(trackAnimsDur * 0.04),
        }
      );
      introGroup.addIncident(circlePathFadeIn, Math.trunc(this.introDur * 0.3));

      // Indicator Fade In Animation
      const indicatorFade = new CSSEffect(
        {
          animatedAttrs: {
            opacity: 1,
          },
          initialValues: {
            opacity: 0,
          },
        },
        {
          selector: ".indicator-general",
          easing: "easeInQuart",
          duration: Math.trunc(this.introDur * 0.3),
        }
      );
      introGroup.addIncident(indicatorFade, 0);

      // Indicator Counter Intro Animation
      const indicatorCounter = new Counter.Counter(
        {
          animatedAttrs: {
            count: Math.round(this.data.value),
          },
        },
        {
          selector: ".indicator-value",
          easing: "easeInOutCubic",
          duration: Math.trunc(pathAnimsDur),
        }
      );
      introGroup.addIncident(indicatorCounter, Math.trunc(this.introDur * 0.3));

      if (this.innerSVG) {
        // Gradient Background Fill-Up Intro Animation
        const gradientBackFillBottom = new CSSEffect(
          {
            animatedAttrs: {
              offset: `100%`,
            },
            initialValues: {
              offset: `${0}%`,
            },
          },
          {
            selector: ".gradient-back-bottom",
            easing: "easeInOutCubic",
            duration: Math.trunc(trackAnimsDur),
          }
        );
        introGroup.addIncident(gradientBackFillBottom, 0);

        // Gradient Background Fill-Up Intro Animation
        const gradientFill = new CSSEffect(
          {
            animatedAttrs: {
              offset: `${this.data.value}%`,
            },
            initialValues: {
              offset: `0%`,
            },
          },
          {
            selector: ".gradient-stop",
            easing: "easeInOutCubic",
            duration: Math.trunc(pathAnimsDur),
          }
        );
        introGroup.addIncident(gradientFill, Math.trunc(this.introDur * 0.3));

        const svgOpacity = new CSSEffect(
          {
            animatedAttrs: {
              opacity: 1,
            },
            initialValues: {
              opacity: 0,
            },
          },
          {
            selector: ".inner-svg-container",
            easing: "easeInCubic",
            duration: Math.trunc(this.introDur * 0.05),
          }
        );
        introGroup.addIncident(svgOpacity, Math.trunc(this.introDur * 0.1));
      }
      this.addIncident(introGroup, 0);
    }

    // OUTRO CONTROL
    if (this.attrs.timings.outro) {
      const outroGroup = new Group();

      const pathAnimsDur = this.outroDur * 0.7;
      const trackAnimsDur = this.outroDur * 0.7;

      // Circle Track OUtro Animation
      const circleTrackAnim = new CSSEffect(
        {
          animatedAttrs: {
            "stroke-dashoffset": this.pathLength,
          },
          initialValues: {
            "stroke-dashoffset": 0,
          },
        },
        {
          duration: Math.trunc(trackAnimsDur),
          easing: "easeInOutCubic",
          selector: ".meter-track",
        }
      );
      outroGroup.addIncident(circleTrackAnim, Math.trunc(this.outroDur * 0.3));

      // Circle Path Outro Animation
      const circlePathAnim = new CSSEffect(
        {
          animatedAttrs: {
            "stroke-dashoffset": this.pathLength,
          },
          initialValues: {
            "stroke-dashoffset":
              this.pathLength - (this.pathLength * this.data.value) / 100,
          },
        },
        {
          duration: Math.trunc(pathAnimsDur),
          easing: "easeInOutCubic",
          selector: ".meter-path",
        }
      );
      outroGroup.addIncident(circlePathAnim, 0);

      // Circle Track Animation Fade Out Effect
      const circleTrackFadeIn = new CSSEffect(
        {
          animatedAttrs: {
            "stroke-width": 0,
          },
          initialValues: {
            "stroke-width": this.boxSize * 0.05,
          },
        },
        {
          selector: ".meter-track",
          easing: "easeInQuart",
          duration: Math.trunc(trackAnimsDur * 0.1),
        }
      );
      outroGroup.addIncident(
        circleTrackFadeIn,
        Math.trunc(this.outroDur - trackAnimsDur * 0.1)
      );

      // Circle Path Animation Fade Out Effect
      const circlePathFadeIn = new CSSEffect(
        {
          animatedAttrs: {
            "stroke-width": 0,
          },
          initialValues: {
            "stroke-width": this.boxSize * 0.05,
          },
        },
        {
          selector: ".meter-path",
          easing: "easeInQuart",
          duration: Math.trunc(trackAnimsDur * 0.1),
        }
      );
      outroGroup.addIncident(
        circlePathFadeIn,
        Math.trunc(this.outroDur * 0.7 - trackAnimsDur * 0.1)
      );

      // Indicator Fade Out Animation
      const indicatorFade = new CSSEffect(
        {
          animatedAttrs: {
            opacity: 0,
          },
          initialValues: {
            opacity: 1,
          },
        },
        {
          selector: ".indicator-general",
          easing: "easeInQuart",
          duration: Math.trunc(this.outroDur * 0.3),
        }
      );
      outroGroup.addIncident(indicatorFade, Math.trunc(this.outroDur * 0.55));

      // Indicator Counter Outtro Animation
      const indicatorCounter = new Counter.Counter(
        {
          animatedAttrs: {
            count: 0,
          },
        },
        {
          selector: ".indicator-value",
          easing: "easeInOutCubic",
          duration: Math.trunc(pathAnimsDur),
        }
      );
      outroGroup.addIncident(indicatorCounter, 0);

      if (this.innerSVG) {
        // Gradient Background Empty-Out Intro Animation4
        const gradientBackFillBottom = new CSSEffect(
          {
            animatedAttrs: {
              offset: `${0}%`,
            },
            initialValues: {
              offset: `100%`,
            },
          },
          {
            selector: ".gradient-back-bottom",
            easing: "easeInOutCubic",
            duration: Math.trunc(trackAnimsDur),
          }
        );
        outroGroup.addIncident(
          gradientBackFillBottom,
          Math.trunc(this.outroDur * 0.3)
        );

        // Gradient Background Fill-Up Intro Animation
        const gradientFill = new CSSEffect(
          {
            animatedAttrs: {
              offset: `0%`,
            },
            initialValues: {
              offset: `${this.data.value}%`,
            },
          },
          {
            selector: ".gradient-stop",
            easing: "easeInOutCubic",
            duration: Math.trunc(pathAnimsDur),
          }
        );
        outroGroup.addIncident(gradientFill, 0);

        const svgOpacity = new CSSEffect(
          {
            animatedAttrs: {
              opacity: 0,
            },
            initialValues: {
              opacity: 1,
            },
          },
          {
            selector: ".inner-svg-container",
            easing: "easeOutCubic",
            duration: Math.trunc(this.outroDur * 0.1),
          }
        );
        outroGroup.addIncident(svgOpacity, Math.trunc(this.outroDur * 0.75));
      }

      this.addIncident(outroGroup, 0 + this.introDur + this.staticDur);
    }

    // STATIC DURATION CONTROL
    const staticIncident = new CSSEffect(
      { animatedAttrs: {} },
      {
        selector: ".container-progressMeter",
        duration: this.staticDur,
      }
    );
    this.addIncident(staticIncident, this.introDur);
  }

  buildVars() {
    this.data = this.attrs.data;
    this.innerSVG = this.attrs.innerImage || null;
    this.innerFill = this.data.innerFill || {
      revert: false,
      rotate: false,
    };
    this.originalDims = config.progressMeter.originalDims;
    this.heightDimension = helpers.extractUnitsNums(
      this.props.containerParams.height
    ).number;
    this.widthDimension = helpers.extractUnitsNums(
      this.props.containerParams.width
    ).number;
    this.boxSize =
      this.widthDimension < this.heightDimension
        ? this.widthDimension * 0.65
        : this.heightDimension * 0.65;
    this.pathLength = 10000;

    this.attrs.palette = this.attrs.palette || {};
    this.fontC = this.attrs.palette.font || colorPalette.font;
    this.accentC = this.attrs.palette.accent || colorPalette.accent;
    this.backgroundC = this.attrs.palette.background || colorPalette.background;

    this.attrs.font = this.attrs.font || {};

    this.fontFamily = this.attrs.font.fontFamily || "'Staatliches', cursive";
    this.fontSize = this.attrs.font.size || "1.7rem";
    this.url =
      this.attrs.font.url ||
      "https://fonts.googleapis.com/css2?family=Staatliches&display=swap";

    this.attrs.timings = this.attrs.timings || {};
    this.introDur = this.attrs.timings.intro || 0;
    this.outroDur = this.attrs.timings.outro || 0;
    this.staticDur = this.attrs.timings.static ?? 1000;
  }
}
