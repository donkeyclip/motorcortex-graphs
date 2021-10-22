import MotorCortex from "@donkeyclip/motorcortex";
import AnimePlugin from "@donkeyclip/motorcortex-anime";
import { colorPalette } from "../../shared/colorPalette";
import { opacityControl } from "../../shared/opacityControl";
import buildCSS from "./barChartStylesheet";
const Anime = MotorCortex.loadPlugin(AnimePlugin);

/**
 * BAR CHART SIMPLE GRAPH: MotorCortex Implementation
 */
export default class BarChartSimple extends MotorCortex.HTMLClip {
  // Building HTML tree for incident
  get html() {
    this.buildVars();

    // Title modal html generation
    const title = [];
    for (const i in this.title) {
      const letter = [];
      if (this.title[i] === " ") {
        letter.push('<div class="space-char letter-wrapper">-</div>');
      } else {
        letter.push(
          `<div class="fontColorOn letter-wrapper">${this.title[i]}</div>`
        );
      }

      title.push(
        `<div id={"letter-" + i} class="letter-container">
          ${letter}
        </div>`
      );
    }

    // Subtitle modal html generation
    const subtitle = [];
    for (const i in this.subtitle) {
      const letter = [];
      if (this.subtitle[i] === " ") {
        letter.push('<div class="space-char letter-wrapper">-</div>');
      } else {
        letter.push(
          <div class="fontColorOn letter-wrapper">{this.subtitle[i]}</div>
        );
      }

      subtitle.push(
        `<div id={"letter-" + i} class="letter-container">
          ${letter}
        </div>`
      );
    }

    // Gridlines conditional html generation
    const gridLines = [];
    for (let i = 0; i < this.gridLinesNum; i++) {
      gridLines.push(<div class="gridLine" id={"gridLine" + i}></div>);
    }

    // X-axis labels html generation with data parameter as reference
    const xLabels = [];
    for (const i in this.data) {
      const label = [];

      if (this.data[i].name.length > 4) {
        this.data[i].name = this.data[i].name.slice(0, 4);
      }

      xLabels.push(
        <div class="label-container" id={"label-" + i}>
          {label}
        </div>
      );
    }

    //  Bars html generation with data parameter as reference
    const bars = this.data.map((datum, i) => {
      this.maxPoint = this.maxPoint < datum.value ? datum.value : this.maxPoint;

      return (
        <div class={datum.name + `-bar-${i}`}>
          <div
            class="bar-fill"
            style={` background: ${datum.color ? datum.color : this.primaryC} `}
            id={datum.name + "-bar-fill"}
          ></div>
        </div>
      );
    });
    this.maxPoint = this.attrs.data.maxValue
      ? this.attrs.data.maxValue
      : this.maxPoint;

    // MAIN HTML TREE
    const barGraphHTML = (
      <div class="container-barChart">
        <div class="title-container">
          <div class="title-wrapper">{title}</div>
          <div class="subtitle-position-end">
            <div class="subtitle-wrapper">{subtitle}</div>
          </div>
          <div class="title-back-wrapper">
            <div class="title-back-animHelper">
              <div class="title-background block-background"></div>
            </div>
          </div>
        </div>
        <div class="graph-container">
          <div class="graph">{bars}</div>
          <div class="gridlines">{gridLines}</div>
        </div>
        <div class="y-axis"></div>
        <div class="x-axis"></div>
        <div class="x-labels-container">{xLabels}</div>
        <div class="x-labels-back-wrapper">
          <div class="x-labels-background block-background"></div>
        </div>
      </div>
    );

    return barGraphHTML;
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
    opacityControl(this, `.container-barChart`);

    // INTRO CONTROL
    if (this.attrs.timings.intro) {
      const textAnimDur = this.introDur * 0.75;
      const introGroup = new MotorCortex.Group();

      // Axis Intro Control
      const axisCombo = new MotorCortex.Combo(
        {
          incidents: [
            {
              incidentClass: Anime.Anime,
              attrs: {
                animatedAttrs: {
                  height: "70%",
                },
                initialValues: {
                  height: "0%",
                },
              },
              props: {
                selector: ".y-axis",
                duration: Math.trunc(this.introDur * 0.2),
                easing: "easeInQuad",
              },
              position: Math.trunc(this.introDur * 0),
            },
            {
              incidentClass: Anime.Anime,
              attrs: {
                animatedAttrs: {
                  width: "74%",
                },
                initialValues: {
                  width: "0%",
                },
              },
              props: {
                selector: ".x-axis",
                duration: Math.trunc(this.introDur * 0.3),
                easing: "easeOutQuad",
              },
              position: Math.trunc(this.introDur * 0.2),
            },
          ],
        },
        {
          selector: ".container-barChart",
        }
      );
      introGroup.addIncident(axisCombo, this.introDur * 0);

      // GridLines Intro Control
      const gridLinesAnim = new Anime.Anime(
        {
          animatedAttrs: {
            width: "100%",
          },
          initialValues: {
            width: "0%",
          },
        },
        {
          selector: ".gridLine",
          duration: Math.trunc(this.introDur * 0.5),
          easing: "easeOutQuad",
        }
      );
      introGroup.addIncident(gridLinesAnim, Math.trunc(this.introDur * 0.2));

      // Title Bar Intro Control
      const titlesAnim = new MotorCortex.Group();
      titlesAnim.addIncident(
        new Anime.Anime(
          {
            animatedAttrs: {
              width: "100%",
            },

            initialValues: {
              width: "0%",
            },
          },
          {
            selector: ".title-background",
            duration: Math.trunc(this.introDur * 0.25),
            easing: "easeInOutQuad",
          }
        ),
        0
      );

      // Main Title Intro: letter animation control
      const titleDur = this.introDur * 0.7;
      const titleLetterDur = (titleDur * 2) / (this.title.length + 1);
      const titleIncidents = [];
      for (const i in this.title) {
        titleIncidents.push({
          incidentClass: Anime.Anime,
          attrs: {
            animatedAttrs: {
              left: "0px",
              opacity: 1,
            },
            initialValues: {
              left: "20px",
              opacity: 0,
            },
          },
          props: {
            selector: `#letter-${i}`,
            duration: Math.trunc(titleLetterDur),
            easing: "easeOutQuart",
          },
          position: Math.trunc((titleLetterDur * i) / 2),
        });
      }

      const titleCombo = new MotorCortex.Combo(
        {
          incidents: titleIncidents,
        },
        {
          selector: ".title-wrapper",
        }
      );
      titlesAnim.addIncident(titleCombo, Math.trunc(this.introDur * 0.25));

      // Subtitle Intro: letter animation control
      const subtitleDur = this.introDur * 0.8;
      const subLetterDur = (subtitleDur * 2) / (this.subtitle.length + 1);
      const subIncidents = [];
      for (const i in this.subtitle) {
        subIncidents.push({
          incidentClass: Anime.Anime,
          attrs: {
            animatedAttrs: {
              left: "0px",
              opacity: 1,
            },
            initialValues: {
              left: "20px",
              opacity: 0,
            },
          },
          props: {
            selector: `#letter-${i}`,
            duration: Math.trunc(subLetterDur),
            easing: "easeOutQuart",
          },
          position: Math.trunc((subLetterDur * i) / 2),
        });
      }

      const subtitleCombo = new MotorCortex.Combo(
        {
          incidents: subIncidents,
        },
        {
          selector: ".subtitle-wrapper",
        }
      );
      titlesAnim.addIncident(subtitleCombo, Math.trunc(this.introDur * 0.1));
      introGroup.addIncident(titlesAnim, Math.trunc(this.introDur * 0.05));

      // Labels (xAxis) Intro Control
      const xLabelsAnim = new MotorCortex.Group();
      xLabelsAnim.addIncident(
        new Anime.Anime(
          {
            animatedAttrs: {
              width: "70%",
            },
            initialValues: {
              width: "0%",
            },
          },
          {
            selector: ".x-labels-back-wrapper",
            duration: Math.trunc(this.introDur * 0.25),
            easing: "easeInOutCubic",
          }
        ),
        0
      );

      // Labels (xAxis) Intro: letter animation control
      const labelDur = (textAnimDur * 2) / (this.data.length + 1);
      for (const i in this.data) {
        const labelLength = this.data[i].name.length;
        const letterDur = (labelDur * 2) / (labelLength + 1);

        const incidents = [];
        for (const z in this.data[i].name) {
          incidents.push({
            incidentClass: Anime.Anime,
            attrs: {
              animatedAttrs: {
                top: "0px",
                opacity: 1,
              },
              initialValues: {
                top: "-30px",
                opacity: 0,
              },
            },
            props: {
              selector: `#letter-${i}-${z}`,
              duration: Math.trunc(letterDur),
              easing: "easeOutQuart",
            },
            position: Math.trunc((letterDur * z) / 2),
          });
        }

        const datumCombo = new MotorCortex.Combo(
          {
            incidents: incidents,
          },
          {
            selector: ".label-container",
          }
        );
        xLabelsAnim.addIncident(
          datumCombo,
          Math.trunc((textAnimDur / (this.data.length + 1)) * i)
        );
      }
      introGroup.addIncident(xLabelsAnim, Math.trunc(this.introDur * 0.05));

      // Bar Intro Control
      const barAnimation = new MotorCortex.Combo(
        {
          incidents: [
            {
              incidentClass: Anime.Anime,
              attrs: {
                animatedAttrs: {
                  height: "100%",
                },
                initialValues: {
                  height: "0%",
                },
              },
              props: {
                duration: Math.trunc(this.introDur * 0.3),
                easing: "easeInOutQuad",
              },
              position: 0,
            },
          ],
        },
        {
          selector: ".bar-fill",
          delay: `@stagger(0, ${Math.trunc(this.introDur * 0.4)})`,
        }
      );
      introGroup.addIncident(barAnimation, Math.trunc(this.introDur * 0.3));

      this.addIncident(introGroup, this.introDur * 0);
    }

    // OUTRO CONTROL
    if (this.attrs.timings.outro) {
      const textAnimDur = this.outroDur * 0.75;
      const outroGroup = new MotorCortex.Group();

      // Axis Outro Control
      const axisCombooutro = new MotorCortex.Combo(
        {
          incidents: [
            {
              incidentClass: Anime.Anime,
              attrs: {
                animatedAttrs: {
                  width: "0%",
                },
                initialValues: {
                  width: "74%",
                },
              },
              props: {
                selector: ".x-axis",
                duration: Math.trunc(this.outroDur * 0.2),
                easing: "easeInQuad",
              },
              position: this.outroDur * 0,
            },
            {
              incidentClass: Anime.Anime,
              attrs: {
                animatedAttrs: {
                  height: "0%",
                },
                initialValues: {
                  height: "70%",
                },
              },
              props: {
                selector: ".y-axis",
                duration: Math.trunc(this.outroDur * 0.3),
                easing: "easeOutQuad",
              },
              position: Math.trunc(this.outroDur * 0.2),
            },
          ],
        },
        {
          selector: ".container-barChart",
        }
      );
      outroGroup.addIncident(axisCombooutro, Math.trunc(this.outroDur * 0.5));

      // GridLines Outro Control
      const gridLinesoutro = new Anime.Anime(
        {
          animatedAttrs: {
            width: "0%",
          },
          initialValues: {
            width: "100%",
          },
        },
        {
          selector: ".gridlines",
          easing: "easeInOutQuad",
          duration: Math.trunc(this.outroDur * 0.5),
        }
      );
      outroGroup.addIncident(gridLinesoutro, Math.trunc(this.outroDur * 0.2));

      // Title Bar Outro Control
      const titlesoutro = new MotorCortex.Group();
      titlesoutro.addIncident(
        new Anime.Anime(
          {
            animatedAttrs: {
              width: "0%",
            },
            initialValues: {
              width: "100%",
            },
          },
          {
            selector: ".title-back-animHelper",
            duration: Math.trunc(this.outroDur * 0.45),
            easing: "easeInOutQuad",
          }
        ),
        Math.trunc(this.outroDur * 0.3)
      );

      // Main Title Outro: letter animation control
      const titleDur = this.outroDur * 0.8;
      const letterDur = (titleDur * 2) / (this.title.length + 1);
      const titleIncidents = [];
      for (const i in this.title) {
        titleIncidents.push({
          incidentClass: Anime.Anime,
          attrs: {
            animatedAttrs: {
              left: "20px",
              opacity: 0,
            },
            initialValues: {
              left: "0px",
              opacity: 1,
            },
          },
          props: {
            selector: `#letter-${i}`,
            duration: Math.trunc(letterDur),
            easing: "easeOutQuart",
          },
          position: Math.trunc((letterDur * (this.title.length - i - 1)) / 2),
        });
      }
      const titleCombo = new MotorCortex.Combo(
        {
          incidents: titleIncidents,
        },
        {
          selector: ".title-wrapper",
        }
      );
      titlesoutro.addIncident(titleCombo, Math.trunc(this.outroDur * 0.1));

      // Subtitle Outro: letter animation control
      const subtitleDur = this.outroDur * 0.4;
      const subLetterDur = (subtitleDur * 2) / (this.subtitle.length + 1);
      const subIncidents = [];
      for (const i in this.subtitle) {
        subIncidents.push({
          incidentClass: Anime.Anime,
          attrs: {
            animatedAttrs: {
              left: "20px",
              opacity: 0,
            },
            initialValues: {
              left: "0px",
              opacity: 1,
            },
          },
          props: {
            selector: `#letter-${i}`,
            duration: Math.trunc(subLetterDur),
            easing: "easeOutQuart",
          },
          position: Math.trunc(
            (subLetterDur * (this.subtitle.length - i - 1)) / 2
          ),
        });
      }

      const subtitleCombo = new MotorCortex.Combo(
        {
          incidents: subIncidents,
        },
        {
          selector: ".subtitle-wrapper",
        }
      );
      titlesoutro.addIncident(subtitleCombo, Math.trunc(this.outroDur * 0));
      outroGroup.addIncident(titlesoutro, Math.trunc(this.outroDur * 0.05));

      // Labels (xAxis) Outro Control
      const xLabelsoutro = new MotorCortex.Group();
      xLabelsoutro.addIncident(
        new Anime.Anime(
          {
            animatedAttrs: {
              width: "0%",
            },
            initialValues: {
              width: "100%",
            },
          },
          {
            selector: ".x-labels-background",
            duration: Math.trunc(this.outroDur * 0.45),
            easing: "easeInOutCubic",
          }
        ),
        this.outroDur * 0.3
      );

      // Labels (xAxis) Outro: letter animation control
      const labelDur = (textAnimDur * 2) / (this.data.length + 1);
      for (const i in this.data) {
        const labelLength = this.data[i].name.length;
        const letterDur = (labelDur * 2) / (labelLength + 1);

        const incidents = [];
        for (const z in this.data[i].name) {
          incidents.push({
            incidentClass: Anime.Anime,
            attrs: {
              animatedAttrs: {
                opacity: 0,
                top: "-30px",
              },
              initialValues: {
                opacity: 1,
                top: "0px",
              },
            },
            props: {
              selector: `#letter-${i}-${z}`,
              duration: Math.trunc(letterDur),
              easing: "easeInQuart",
            },
            position: Math.trunc((letterDur * z) / 2),
          });
        }

        const datumCombo = new MotorCortex.Combo(
          {
            incidents: incidents,
          },
          {
            selector: ".label-container",
          }
        );
        xLabelsoutro.addIncident(
          datumCombo,
          Math.trunc((textAnimDur / (this.data.length + 1)) * i)
        );
      }
      outroGroup.addIncident(xLabelsoutro, Math.trunc(this.outroDur * 0.05));

      // Bar outro Control
      const barIncidents = [];
      for (const i in this.data) {
        barIncidents.push({
          incidentClass: Anime.Anime,
          attrs: {
            animatedAttrs: {
              height: "0%",
            },
            initialValues: {
              height: "100%",
            },
          },
          props: {
            duration: Math.trunc(this.outroDur * 0.3),
            easing: "easeInOutCubic",
            selector: `#${this.data[i].name}-bar-fill`,
          },
          position: Math.trunc((subLetterDur * (this.data.length - i - 1)) / 2),
        });
      }
      const barAnimationoutro = new MotorCortex.Combo(
        {
          incidents: barIncidents,
        },
        {
          selector: ".graph",
        }
      );
      outroGroup.addIncident(barAnimationoutro, this.outroDur * 0);

      this.addIncident(outroGroup, 0 + this.introDur + this.staticDur);
    }

    // STATIC DURATION CONTROL
    const staticIncident = new Anime.Anime(
      { animatedAttrs: {} },
      {
        selector: ".container-barChart",
        duration: this.staticDur,
      }
    );
    this.addIncident(staticIncident, this.introDur);
  }

  buildVars() {
    this.data = this.attrs.data.data;
    this.title = this.attrs.data.title;
    this.subtitle = this.attrs.data.subtitle;
    this.maxPoint = 0;
    this.gridLinesNum = this.attrs.data.showGrid ? 11 : 0;

    this.attrs.palette = this.attrs.palette ? this.attrs.palette : {};
    this.primaryC = this.attrs.palette.primary
      ? this.attrs.palette.primary
      : colorPalette.gray;
    this.secondaryC = this.attrs.palette.secondary
      ? this.attrs.palette.secondary
      : colorPalette.lightGray;
    this.tertiaryC = this.attrs.palette.tertiary
      ? this.attrs.palette.tertiary
      : colorPalette.darkGray;
    this.fontC = this.attrs.palette.font
      ? this.attrs.palette.font
      : colorPalette.font;
    this.accentC = this.attrs.palette.accent
      ? this.attrs.palette.accent
      : colorPalette.accent;
    this.backgroundC = this.attrs.palette.background
      ? this.attrs.palette.background
      : colorPalette.background;

    this.attrs.font = this.attrs.font ? this.attrs.font : {};

    this.fontFamily = this.attrs.font.fontFamily
      ? this.attrs.font.fontFamily
      : "'Staatliches', cursive";
    this.fontSize = this.attrs.font.size ? this.attrs.font.size : "1.7rem";
    this.url = this.attrs.font.url
      ? this.attrs.font.url
      : "https://fonts.googleapis.com/css2?family=Staatliches&display=swap";

    this.attrs.timings = this.attrs.timings ? this.attrs.timings : {};
    this.introDur = this.attrs.timings.intro ? this.attrs.timings.intro : 0;
    this.outroDur = this.attrs.timings.outro ? this.attrs.timings.outro : 0;
    if (this.attrs.timings.static === 0) {
      this.staticDur = 0;
    } else {
      this.staticDur = this.attrs.timings.static
        ? this.attrs.timings.static
        : 1000;
    }
  }
}
