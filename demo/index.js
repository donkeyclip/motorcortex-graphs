import { loadPlugin, HTMLClip } from "@donkeyclip/motorcortex";
import Player from "@donkeyclip/motorcortex-player";
import MotorCortexGraph from "../dist/motorcortex-graphs.esm";
import barChartData from "./data/barChartData.json";
import lineGraphData from "./data/lineGraphData.json";
import pieChartData from "./data/pieChartData.json";
import progressBarData from "./data/progressBarData.json";
import progressMeterData from "./data/progressMeterData.json";

const MCGraphs = loadPlugin(MotorCortexGraph);

const clip = new HTMLClip({
  html: `
    <div class="container">
        <div id="htmlclip"></div>
        <div id="html-hoverclip"></div>
    </div>`,
  css: `
    .container{
        width: 1024px;
        height: 768px;
        background: #D3CDCD;
    }
    .container>div{
        width: 50%;
        height: 50%;
        position: absolute;
    }
    #htmlclip {
        z-index: 0;
    }
    #html-hoverclip {
        z-index: 1;
    }
    `,
  host: document.getElementById("clip"),
  containerParams: {
    width: "1024px",
    height: "768px",
  },
});

const barChart = new MCGraphs.BarChartSimple(
  {
    data: barChartData,
    timings: {
      intro: 2000,
      static: 1500,
      outro: 2000,
    },
    palette: {
      background: "#D3CDCD",
    },
  },
  {
    selector: "#htmlclip",
    containerParams: {
      width: "1024px",
      height: "768px",
    },
  }
);

const lineGraph = new MCGraphs.LineGraph(
  {
    data: lineGraphData,
    trace: {
      toggle: false,
      scale: 1.45,
    },
    legend: true,
    grid: "lines",
    timings: {
      intro: 7000,
      static: 1000,
      outro: 7000,
    },
    palette: {},
    font: {
      size: "1.7rem",
    },
  },
  {
    selector: "#html-hoverclip",
    containerParams: {
      width: "1024px",
      height: "768px",
    },
  }
);

const pieChart = new MCGraphs.PieChart(
  {
    data: pieChartData,
    timings: {
      intro: 2000,
      static: 1000,
      outro: 2000,
    },
    font: {
      size: "1.6rem",
    },
  },
  {
    selector: "#htmlclip",
    containerParams: {
      width: "1024px",
      height: "768px",
    },
  }
);

const progressBar = new MCGraphs.ProgressBar(
  {
    data: progressBarData,
    timings: {
      intro: 2000,
      static: 1500,
      outro: 2000,
    },
    palette: {
      background: "#D3CDCD",
    },
    font: {
      size: "1.6rem",
    },
  },
  {
    selector: "#htmlclip",
    containerParams: {
      width: "1024px",
      height: "768px",
    },
  }
);

const progressMeter = new MCGraphs.ProgressMeter(
  {
    data: progressMeterData,
    innerImage: "battery",
    timings: {
      intro: 3000,
      static: 1000,
      outro: 3000,
    },
    palette: {
      background: "#D3CDCD",
    },
    font: {
      size: "8rem",
    },
  },
  {
    selector: "#htmlclip",
    containerParams: {
      width: "1024px",
      height: "768px",
    },
  }
);

clip.addIncident(barChart, 0);
clip.addIncident(lineGraph, 5500);
clip.addIncident(pieChart, 20500);
clip.addIncident(progressBar, 26000);
clip.addIncident(progressMeter, 31500);

new Player({
  clip,
  scaleToFit: true,
  autoplay: true,
  pointerEvents: false,
});
