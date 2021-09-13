import { colorPalette } from "../../shared/colorPalette";
import { opacityControl } from "../../shared/opacityControl";
import buildCSS from "./lineGraphStylesheet";
import config from "../../incident_config";
import AnimationConstructor from "./AnimationConstructor";
import MotorCortex from "@kissmybutton/motorcortex";

/**
 * LINE GRAPH: MotorCortex Implementation
 */
export default class LineGraph extends MotorCortex.HTMLClip {
  // Building HTML tree for incident
  get html() {
    this.buildVars();

    // Title modal html generation
    const title = [];
    for (const i in this.words) {
      let word = [];

      for (let z = 0; z < this.words[i].length; z++) {
        word += this.words[i][z];
      }

      title.push(
        <div id={"word-" + i} class="fontColorOn letter-wrapper-title">
          {word}
        </div>
      );
      if (i != this.words.length - 1) {
        title.push(<div class="space-char letter-wrapper-title">-</div>);
      }
    }

    // Legend html generation
    const legend = [];
    if (this.legend) {
      const legendLine = [];
      for (let l = 0; l < this.dataSetsNum; l++) {
        legendLine.push(
          <div class="line-wrapper">
            <div class="color-wrapper">
              <div class={"line-color color-" + l}></div>
            </div>
            <div class="line-title">{this.dataSets[l].title}</div>
          </div>
        );
      }

      legend.push(<div class="legend-wrapper">{legendLine}</div>);
    }

    // Data stele html generation
    const dataSteles = [];
    if (this.grid === "steles") {
      for (const i in this.data) {
        const stele = [];
        for (let z = 0; z < this.steleBlockNum; z++) {
          stele.push(
            <div class={"stele-block-" + i + " stele-block stele-grid-block"}></div>
          );
        }
  
        dataSteles.push(
          <div id={"stele-" + i} class="data-stele stele-grid">
            {stele}
          </div>
        );
      }
    } else if (this.grid === "lines") {
      const stele = [];
      for (let z = 0; z < this.steleBlockNum; z++) {
        stele.push(
          <div class={"stele-block-" + 0 + " stele-block line-grid-block"}></div>
        );
      }

      dataSteles.push(
        <div id={"stele-" + 0} class="data-stele line-grid">
          {stele}
        </div>
      );
    }
    

    // Graph Lines SVG hmtl generation
    const lineGroups = [];
    for (let l = 0; l < this.dataSetsNum; l++) {
      const linePaths = [];
      for (let i = 0; i < this.data.length; i++) {
        const lineSegment = [];
        const xPoint1 = this.findPointX(i);
        const yPoint1 = this.findPointY(i, l);

        if (i !== this.data.length - 1) {
          const xPoint2 = this.findPointX(i + 1);
          const yPoint2 = this.findPointY(i + 1, l);

          // Dataline Generation
          lineSegment.push(
            <path
              id={`line-${l}-${i}`}
              class={`line-${l}`}
              d={`M ${xPoint1} ${yPoint1}` + `L ${xPoint2} ${yPoint2}`}
              stroke={this.dataSets[l].color}
              stroke-width={`0.65%`}
              stroke-linecap="round"
              fill="none"
            />
          );
        }

        // Datapoint Generation
        lineSegment.push(
          <circle
            id={`point-${l}-${i}`}
            class={`point-${l} datapoint`}
            cx={`${xPoint1}`}
            cy={`${yPoint1}`}
            r={`${this.r}%`}
            fill={this.senaryC}
            stroke={this.senaryC}
          />
        );
        linePaths.push(<g>{lineSegment}</g>);
      }
      lineGroups.push(<g>{linePaths}</g>);
    }

    const lines = [];
    lines.push(
      <svg
        class="lines-container"
        viewbox={`0 0 ${this.linesWidth} ${this.linesHeight}`}
      >
        {lineGroups}
      </svg>
    );

    // Graph labels html generation with data parameters as reference
    const labelGroups = [];
    for (let l = 0; l < this.dataSetsNum; l++) {
      const graphLabels = [];
      for (let i = 0; i < this.data.length; i++) {
        graphLabels.push(
          <div>
            <div
              class={`hoverPoint-${l}-${this.data[i].name} hoverPoint`}
            ></div>
            <div
              class={`label-${l}-${this.data[i].name} inner-label-container`}
              id={`label-${l}-${this.data[i].name}`}
            >
              <div class="inner-label">
                {`${parseFloat(this.data[i].values[l].toFixed(2))} ${
                  this.unit
                }`}
              </div>
            </div>
          </div>
        );
      }
      labelGroups.push(
        <div class={`line-${l}-label-container`}>{graphLabels}</div>
      );
    }

    // X-axis labels html generation with data parameter as reference
    const xLabels = [];
    for (const i in this.data) {
      const labelX = [];

      if (this.data[i].name.length > 4) {
        this.data[i].name = this.data[i].name.slice(0, 4);
      }
      for (const z in this.data[i].name) {
        labelX.push(
          <div id={"letter-" + i + "-" + z} class="letter-container">
            <div class="letter-wrapper-label fontColorOn">
              {this.data[i].name[z]}
            </div>
          </div>
        );
      }
      xLabels.push(
        <div class="label-container" id={"label-" + i}>
          {labelX}
        </div>
      );
    }

    // MAIN HTML TREE
    const lineGraphHTML = (
      <div class="container-lineGraph">
        <div class="viewport-lineGraph">
          <div class="title-container-lineGraph">
            <div class="title-wrapper-lineGraph">{title}</div>
          </div>
          {legend}
          <div class="graph-background"></div>
          <div class="dataStele-container">{dataSteles}</div>
          <div class="svg-container">{lines}</div>
          <div class="graph-labels-container">{labelGroups}</div>
          <div class="x-labels-container-lineGraph">{xLabels}</div>
          <div class="x-labels-back-wrapper-lineGraph">
            <div class="block-background"></div>
          </div>
        </div>
      </div>
    );

    return lineGraphHTML;
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
    opacityControl(this, `.container-lineGraph`);

    // INTRO CONTROL
    if (this.attrs.timings.intro) {
      let introGroup = new MotorCortex.Group();

      // Background Intro Animation
      introGroup.addIncident(
        this.animConstructor.buildBackgroundIntro(),
        this.introDur * 0
      );

      // Main Title Intro Animation
      introGroup.addIncident(
        this.animConstructor.buildTitleIntroCombo(),
        Math.trunc(this.introDur * 0.14)
      );

      // Legend Intro Animation
      introGroup.addIncident(
        this.animConstructor.buildIntroLegend(),
        Math.trunc(this.introDur * 0.1)
      );

      // Label Intro Animation
      introGroup.addIncident(
        this.animConstructor.buildIntroLabels(),
        Math.trunc(this.introDur * 0.18)
      );

      // Data Stele intro animation
      introGroup.addIncident(
        this.animConstructor.buildIntroStele(),
        Math.trunc(this.introDur * 0.45)
      );

      // Graph SVG, Labels, & Zoom Intro Animation
      const segmentDur = this.introDur / this.data.length;
      const pointDur = segmentDur * 0.35;
      const [targetGroup, pathGroup, pointGroup] = [
        ...this.animConstructor.buildIntroGraph(introGroup),
      ];

      introGroup = targetGroup;
      introGroup.addIncident(pathGroup, Math.trunc(pointDur));
      introGroup.addIncident(pointGroup, 0);

      this.addIncident(introGroup, 0);
    }

    // OUTRO CONTROL
    if (this.attrs.timings.outro) {
      let outroGroup = new MotorCortex.Group();

      // Background Outro Animation
      outroGroup.addIncident(
        this.animConstructor.buildBackgroundOutro(),
        Math.trunc(this.outroDur * 0.8)
      );

      // Main Title Outro Animation
      outroGroup.addIncident(
        this.animConstructor.buildTitleOutroCombo(),
        Math.trunc(this.outroDur * 0.76)
      );

      // Legend Outro Animation
      outroGroup.addIncident(
        this.animConstructor.buildOutroLegend(),
        Math.trunc(this.outroDur * 0.1)
      );

      // Label Outro Animation
      outroGroup.addIncident(
        this.animConstructor.buildOutroLabels(),
        this.outroDur - this.outroDur * 0.55
      );

      // Data Stele Outro Animation
      outroGroup.addIncident(
        this.animConstructor.buildOutroStele(),
        this.outroDur * 0.25
      );

      // Graph SVG & Labels Outro Animation
      const segmentDur = this.outroDur / (this.data.length + 1);
      const pointDur = segmentDur * 0.25;
      const [targetGroup, pathGroup, pointGroup] = [
        ...this.animConstructor.buildOutroGraph(outroGroup),
      ];

      outroGroup = targetGroup;
      outroGroup.addIncident(pathGroup, Math.trunc(pointDur));
      outroGroup.addIncident(pointGroup, 0);

      this.addIncident(outroGroup, 0 + this.introDur + this.staticDur);
    }

    // STATIC DURATION CONTROL
    this.addIncident(this.animConstructor.buildStaticControl(), this.introDur);
  }

  buildVars() {
    // AnimConstructor Init
    this.animConstructor = new AnimationConstructor(this);

    // Data init
    this.data = this.attrs.data.data;

    // Colors control
    this.colorPalette = colorPalette;
    this.attrs.palette = this.attrs.palette ? this.attrs.palette : {};
    this.primaryC = this.attrs.palette.primary
      ? this.attrs.palette.primary
      : this.colorPalette.gray;
    this.secondaryC = this.attrs.palette.secondary
      ? this.attrs.palette.secondary
      : this.colorPalette.lightGray;
    this.tertiaryC = this.attrs.palette.tertiary
      ? this.attrs.palette.tertiary
      : this.colorPalette.darkGray;
    this.quaternaryC = this.attrs.palette.quaternary
      ? this.attrs.palette.quaternary
      : this.colorPalette.whiteBack;
    this.quinaryC = this.attrs.palette.quinary 
      ? this.attrs.palette.quinary
      : this.colorPalette.gray
    this.senaryC = this.attrs.palette.senary 
      ? this.attrs.palette.senary
      : this.colorPalette.accent
    this.fontC = this.attrs.palette.font
      ? this.attrs.palette.font
      : this.colorPalette.font;
    this.accentC = this.attrs.palette.accent
      ? this.attrs.palette.accent
      : this.colorPalette.accent;
    this.backgroundC = this.attrs.palette.background
      ? this.attrs.palette.background
      : this.colorPalette.background;

    // Data processing
    this.title = this.attrs.data.title;
    this.words = this.title.split(" ");
    this.dataSets = this.attrs.data.dataSets
      ? this.attrs.data.dataSets
      : [
          {
            title: "",
            color: this.accentC,
          },
        ];
    this.dataSetsNum = this.dataSets.length;
    let colorCount = 2;
    this.dataSets.map((dataSet, l) => {
      if (dataSet.color === "" || !dataSet.color) {
        (dataSet.color = this.colorPalette.dataColors[colorCount]),
          colorCount++;
      }
      if (dataSet.title === "" || !dataSet.title) {
        dataSet.title = `Dataset-${l + 1}`;
      } else if (dataSet.title.length > 10) {
        dataSet.title = dataSet.title.substr(0, 10);
      }
    });
    this.legend = this.attrs.legend ? this.attrs.legend : false;
    this.legend = this.dataSetsNum > 1 ? true : this.legend;
    this.maxPoint = 0;
    for (const datum of this.data) {
      if (Math.max(...datum.values) > this.maxPoint) {
        this.maxPoint = Math.max(...datum.values);
      }
    }
    this.maxPoint = this.attrs.data.maxValue
      ? this.attrs.data.maxValue
      : this.maxPoint;
    this.hover = this.attrs.data.hover ? this.attrs.data.hover : false;
    this.hover = this.dataSetsNum !== 1 ? true : this.hover;
    this.grid = this.attrs.grid ? this.attrs.grid : "lines";
    this.grid =
      this.grid !== "lines" && this.grid !== "steles" ? "lines" : this.grid;
    this.gridH = this.attrs.gridH ? this.attrs.gridH : 1;    
    this.attrs.trace = this.attrs.trace ? this.attrs.trace : {};
    this.trace = this.attrs.trace.toggle ? this.attrs.trace.toggle : false;
    this.trace = this.dataSetsNum === 1 ? this.trace : false;
    this.traceScale = this.attrs.trace.scale ? this.attrs.trace.scale : 1.4;
    this.unit = this.attrs.data.unit ? this.attrs.data.unit : "%";
    this.interval = this.attrs.data.interval ? this.attrs.data.interval : 5;
    this.steleBlockNum = this.maxPoint / this.interval + 1;

    // Sizing and position controls
    this.config = config;
    this.graphScale = {
      width: 0.76,
      height: 0.58,
    };
    this.legendHeightFactor = this.dataSetsNum === 1 ? 1 : this.dataSetsNum / 2;
    this.legendHeight =
      4 * (this.legendHeightFactor + (this.legendHeightFactor % 1 ? 1 : 0));
    this.linesWidth =
      config.lineGraph.originalDims.width * this.graphScale.width;
    this.linesHeight =
      config.lineGraph.originalDims.height * this.graphScale.height;
    this.steleWidth = this.linesWidth * 0.01;
    this.spaceAround =
      (this.linesWidth - this.steleWidth * this.data.length) /
      (this.data.length * 2);
    this.r = this.attrs.dataPointR 
    ? this.attrs.dataPointR
    : 0.65;

    // Global access data process functions
    this.findPointX = (datapoint) => {
      return (
        this.steleWidth / 2 +
        this.spaceAround +
        datapoint * (2 * this.spaceAround + this.steleWidth)
      );
    };
    this.findPointY = (datapoint, line) => {
      return (
        this.linesHeight -
        (this.data[datapoint].values[line] * this.linesHeight) / this.maxPoint
      );
    };

    // Fonts control
    this.attrs.font = this.attrs.font ? this.attrs.font : {};
    this.fontFamily = this.attrs.font.fontFamily
      ? this.attrs.font.fontFamily
      : "'Staatliches', cursive";
    this.fontSizeLabel = this.attrs.font.size ? this.attrs.font.size : "1.7rem";
    this.fontSizeTitle = "200%";
    this.fontSizeInner = "80%";
    this.url = this.attrs.font.url
      ? this.attrs.font.url
      : "https://fonts.googleapis.com/css2?family=Staatliches&display=swap";

    // Timeline control
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
