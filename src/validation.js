export default {
  ProgressBar: {
    data: {
      type: "array",
      items: { type: "any" },
    },
    timings: {
      type: "object",
      props: {
        intro: {
          type: "number",
          min: 0,
          optional: true,
        },
        static: {
          type: "number",
          min: 0,
          optional: true,
        },
        outro: {
          type: "number",
          min: 0,
          optional: true,
        },
      },
    },
    pallete: {
      type: "object",
      optional: true,
      props: {
        primary: { type: "color", optional: true },
        secondary: { type: "color", optional: true },
        font: { type: "color", optional: true },
        accent: { type: "color", optional: true },
        background: { type: "color", optional: true },
      },
    },
    font: {
      type: "object",
      optional: true,
      props: {
        url: {
          type: "string",
          optional: true,
        },
        fontFamily: {
          type: "string",
          optional: true,
        },
        size: {
          type: "measurement",
          optional: true,
          min: 0,
          units: ["px", "%", "em", "rem"],
        },
      },
    },
    options: {
      type: "object",
      optional: true,
      props: {
        hidePercentage: {
          type: "boolean",
          optional: true,
        },
      },
    },
  },
  BarChartSimple: {
    data: {
      type: "object",
      props: {
        title: { type: "string", optional: true },
        subtitle: { type: "string", optional: true },
        showGrid: { type: "boolean", optional: true },
        maxValue: { type: "number", min: 0, optional: true },
        data: { type: "array", items: { type: "any" } },
      },
    },
    timings: {
      type: "object",
      props: {
        intro: {
          type: "number",
          min: 0,
          optional: true,
        },
        static: {
          type: "number",
          min: 0,
          optional: true,
        },
        outro: {
          type: "number",
          min: 0,
          optional: true,
        },
      },
    },
    pallete: {
      type: "object",
      optional: true,
      props: {
        primary: { type: "color", optional: true },
        secondary: { type: "color", optional: true },
        tertiary: { type: "color", optional: true },
        font: { type: "color", optional: true },
        accent: { type: "color", optional: true },
        background: { type: "color", optional: true },
      },
    },
    font: {
      type: "object",
      optional: true,
      props: {
        url: {
          type: "string",
          optional: true,
        },
        fontFamily: {
          type: "string",
          optional: true,
        },
        size: {
          type: "measurement",
          optional: true,
          min: 0,
          units: ["px", "%", "em", "rem"],
        },
      },
    },
  },
  LineGraph: {
    data: {
      type: "object",
      props: {
        title: { type: "string", optional: true },
        showGrid: { type: "boolean", optional: true },
        interval: { type: "number", min: 0, optional: true },
        maxValue: { type: "number", min: 0, optional: true },
        unit: { type: "string", optional: true },
        hover: { type: "boolean", optional: true },
        data: { type: "array", items: { type: "any" } },
        dataSets: { type: "array", items: { type: "any" } },
      },
    },
    timings: {
      type: "object",
      props: {
        intro: {
          type: "number",
          min: 0,
          optional: true,
        },
        static: {
          type: "number",
          min: 0,
          optional: true,
        },
        outro: {
          type: "number",
          min: 0,
          optional: true,
        },
      },
    },
    pallete: {
      type: "object",
      optional: true,
      props: {
        primary: { type: "color", optional: true },
        secondary: { type: "color", optional: true },
        tertiary: { type: "color", optional: true },
        quaternary: { type: "color", optional: true },
        font: { type: "color", optional: true },
        accent: { type: "color", optional: true },
        background: { type: "color", optional: true },
      },
    },
    font: {
      type: "object",
      optional: true,
      props: {
        url: {
          type: "string",
          optional: true,
        },
        fontFamily: {
          type: "string",
          optional: true,
        },
        size: {
          type: "measurement",
          optional: true,
          min: 0,
          units: ["px", "%", "em", "rem"],
        },
      },
    },
    hover: { type: "boolean", optional: true },
    legend: { type: "boolean", optional: true },
    trace: {
      type: "object",
      optional: true,
      props: {
        toggle: {
          type: "boolean",
          optional: true,
        },
        scale: {
          type: "number",
          optional: true,
        },
      },
    },
  },
  PieChart: {
    data: {
      type: "object",
      props: {
        title: { type: "string", optional: true },
        data: { type: "array", items: { type: "any" } },
      },
    },
    timings: {
      type: "object",
      props: {
        intro: {
          type: "number",
          min: 0,
          optional: true,
        },
        static: {
          type: "number",
          min: 0,
          optional: true,
        },
        outro: {
          type: "number",
          min: 0,
          optional: true,
        },
      },
    },
    pallete: {
      type: "object",
      optional: true,
      props: {
        font: { type: "color", optional: true },
        background: { type: "color", optional: true },
      },
    },
    font: {
      type: "object",
      optional: true,
      props: {
        url: {
          type: "string",
          optional: true,
        },
        fontFamily: {
          type: "string",
          optional: true,
        },
        size: {
          type: "measurement",
          optional: true,
          min: 0,
          units: ["px", "%", "em", "rem"],
        },
      },
    },
  },
};
