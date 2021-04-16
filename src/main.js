import BarChartSimple from "./Incidents/barChartSimple/barChartSimple";
import ProgressBar from "./Incidents/progressBar/progressBar";
import ProgressMeter from "./Incidents/progressMeter/progressMeter";
import LineGraph from "./Incidents/lineGraph/lineGraph";
import PieChart from "./Incidents/pieChart/pieChart";
import config from "./incident_config";
import validationRules from "./validation";
import { name, version } from "../package.json";

export default {
  npm_name: name,
  version: version,
  incidents: [
    {
      exportable: ProgressBar,
      name: "ProgressBar",
      attributesValidationRules: validationRules.ProgressBar,
      originalDims: {
        width: "1200px",
        height: "900px",
      },
    },
    {
      exportable: BarChartSimple,
      name: "BarChartSimple",
      attributesValidationRules: validationRules.BarChartSimple,
      originalDims: {
        width: "1200px",
        height: "900px",
      },
    },
    {
      exportable: LineGraph,
      name: "LineGraph",
      attributesValidationRules: validationRules.LineGraph,
      originalDims: {
        width: `${config.lineGraph.originalDims.width}px`,
        height: `${config.lineGraph.originalDims.height}px`,
      },
    },
    {
      exportable: PieChart,
      name: "PieChart",
      attributesValidationRules: validationRules.PieChart,
      originalDims: {
        width: "1200px",
        height: "900px",
      },
    },
    {
      exportable: ProgressMeter,
      name: "ProgressMeter",
      attributesValidationRules: validationRules.ProgressMeter,
      originalDims: {
        width: `${config.progressMeter.originalDims.width}px`,
        height: `${config.progressMeter.originalDims.height}px`,
      },
    },
  ],
};
