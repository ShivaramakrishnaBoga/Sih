// Chart data for years and months
const yearsData = {
  innovations: {
      categories: [2015, 2016, 2017, 2018, 2019],
      series: [
          { name: "Students", data: [10, 20, 30, 40, 50] },
          { name: "Innovations", data: [5, 15, 25, 35, 45] }
      ]
  },
  grants: {
      categories: [2015, 2016, 2017, 2018, 2019],
      series: [
          { name: "Students", data: [12, 22, 32, 42, 52] },
          { name: "Grants", data: [6, 16, 26, 36, 46] }
      ]
  },
  startup: {
      categories: [2015, 2016, 2017, 2018, 2019],
      series: [
          { name: "Students", data: [14, 24, 34, 44, 54] },
          { name: "Startup Incubated", data: [7, 17, 27, 37, 47] }
      ]
  },
  achievements: {
      categories: [2015, 2016, 2017, 2018, 2019],
      series: [
          { name: "Students", data: [16, 26, 36, 46, 56] },
          { name: "Achievements", data: [8, 18, 28, 38, 48] }
      ]
  }
};

const monthsData = {
  innovations: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
      series: [
          { name: "Students", data: [15, 25, 35, 45, 55] },
          { name: "Innovations", data: [10, 20, 30, 40, 50] }
      ]
  },
  grants: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
      series: [
          { name: "Students", data: [18, 28, 38, 48, 58] },
          { name: "Grants", data: [12, 22, 32, 42, 52] }
      ]
  },
  startup: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
      series: [
          { name: "Students", data: [20, 30, 40, 50, 60] },
          { name: "Startup Incubated", data: [14, 24, 34, 44, 54] }
      ]
  },
  achievements: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
      series: [
          { name: "Students", data: [22, 32, 42, 52, 62] },
          { name: "Achievements", data: [16, 26, 36, 46, 56] }
      ]
  }
};

// Initial settings
let currentData = yearsData;
let currentBarChart = "innovations";

// Initialize the chart
const options = {
  chart: {
      type: "bar",
      height: 250
  },
  series: currentData[currentBarChart].series,
  xaxis: {
      categories: currentData[currentBarChart].categories
  }
};

const chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// Event listeners for Year/Month toggle
document.querySelectorAll(".student-indicators-part1 h3").forEach((el, index) => {
  const type = index === 0 ? "years" : "months";
  el.setAttribute("data-type", type);

  el.addEventListener("click", () => {
      document.querySelectorAll(".student-indicators-part1 h3").forEach(btn => btn.classList.remove("active"));
      el.classList.add("active");
      currentData = type === "years" ? yearsData : monthsData;
      updateChart();
  });
});

// Event listeners for chart category toggle
document.querySelectorAll(".student-indicators-part2 span").forEach((el, index) => {
  const chartTypes = ["innovations", "grants", "startup", "achievements"];
  el.setAttribute("data-chart", chartTypes[index]);

  el.addEventListener("click", () => {
      document.querySelectorAll(".student-indicators-part2 span").forEach(btn => btn.classList.remove("active"));
      el.classList.add("active");
      currentBarChart = chartTypes[index];
      updateChart();
  });
});

// Function to update the chart dynamically
function updateChart() {
  chart.updateOptions({
      series: currentData[currentBarChart].series,
      xaxis: {
          categories: currentData[currentBarChart].categories
      }
  });
}

const projectYearsData = {
  grants: {
    categories: [2015, 2016, 2017, 2018, 2019],
    series: [
      { name: "Innovations", data: [10, 20, 30, 40, 50] },
      { name: "Grants", data: [5, 15, 25, 35, 45] },
    ],
  },
  startup: {
    categories: [2015, 2016, 2017, 2018, 2019],
    series: [
      { name: "Innovations", data: [12, 22, 32, 42, 52] },
      { name: "Startup Incubated", data: [6, 16, 26, 36, 46] },
    ],
  },
  achievements: {
    categories: [2015, 2016, 2017, 2018, 2019],
    series: [
      { name: "Innovations", data: [14, 24, 34, 44, 54] },
      { name: "Achievements", data: [7, 17, 27, 37, 47] },
    ],
  },
};

const projectMonthsData = {
  grants: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May"],
    series: [
      { name: "Innovations", data: [15, 25, 35, 45, 55] },
      { name: "Grants", data: [10, 20, 30, 40, 50] },
    ],
  },
  startup: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May"],
    series: [
      { name: "Innovations", data: [18, 28, 38, 48, 58] },
      { name: "Startup Incubated", data: [12, 22, 32, 42, 52] },
    ],
  },
  achievements: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May"],
    series: [
      { name: "Innovations", data: [20, 30, 40, 50, 60] },
      { name: "Achievements", data: [14, 24, 34, 44, 54] },
    ],
  },
};

let projectCurrentData = projectYearsData;
let projectCurrentChart = "grants";

const projectOptions = {
  chart: {
    type: "bar",
    height: 250,
  },
  series: projectCurrentData[projectCurrentChart].series,
  xaxis: {
    categories: projectCurrentData[projectCurrentChart].categories,
  },
};

const projectChart = new ApexCharts(
  document.querySelector("#project-chart"),
  projectOptions
);

projectChart.render();

// Event listeners for Project Year/Month toggle
document.querySelectorAll(".project-indicators-part1 h3").forEach((el, index) => {
  const type = index === 0 ? "years" : "months";
  el.setAttribute("data-type", type);

  el.addEventListener("click", () => {
    document.querySelectorAll(".project-indicators-part1 h3").forEach((btn) =>
      btn.classList.remove("active")
    );
    el.classList.add("active");
    projectCurrentData = type === "years" ? projectYearsData : projectMonthsData;
    updateProjectChart();
  });
});

// Event listeners for Project chart category toggle
document.querySelectorAll(".project-indicators-part2 span").forEach((el, index) => {
  const chartTypes = ["grants", "startup", "achievements"];
  el.setAttribute("data-chart", chartTypes[index]);

  el.addEventListener("click", () => {
    document.querySelectorAll(".project-indicators-part2 span").forEach((btn) =>
      btn.classList.remove("active")
    );
    el.classList.add("active");
    projectCurrentChart = chartTypes[index];
    updateProjectChart();
  });
});

// Function to update the Project chart dynamically
function updateProjectChart() {
  projectChart.updateOptions({
    series: projectCurrentData[projectCurrentChart].series,
    xaxis: {
      categories: projectCurrentData[projectCurrentChart].categories,
    },
  });
}const data = {
  innovation: {
    title: "Students vs Innovations",
    values: [
      { label: "bpharm", value: 21 },
      { label: "Ayurveda", value: 23 },
      { label: "Yoga", value: 19 },
      { label: "Unani", value: 15 },
      { label: "Siddha", value: 11 },
      { label: "Homeopathy", value: 7 },
    ],
  },
  grants: {
    title: "Students vs Grants",
    values: [
      { label: "bpharm", value: 25 },
      { label: "Ayurveda", value: 20 },
      { label: "Yoga", value: 15 },
      { label: "Unani", value: 12 },
      { label: "Siddha", value: 18 },
      { label: "Homeopathy", value: 10 },
    ],
  },
  startup: {
    title: "Students vs Startup Incubated",
    values: [
      { label: "bpharm", value: 30 },
      { label: "Ayurveda", value: 15 },
      { label: "Yoga", value: 25 },
      { label: "Unani", value: 20 },
      { label: "Siddha", value: 10 },
      { label: "Homeopathy", value: 10 },
    ],
  },
  achievements: {
    title: "Students vs Achievements",
    values: [
      { label: "bpharm", value: 10 },
      { label: "Ayurveda", value: 20 },
      { label: "Yoga", value: 30 },
      { label: "Unani", value: 25 },
      { label: "Siddha", value: 15 },
      { label: "Homeopathy", value: 5 },
    ],
  },
};

// DOM elements
const heading = document.getElementById("dynamic-heading1");
const piechart = document.getElementById("project-piechart");
const spans = document.querySelectorAll(".dynamic-text1");

// Initialize ApexCharts Pie Chart
let pieChart;

function renderChart(dataValues) {
  if (pieChart) pieChart.destroy(); // Destroy the existing chart to prevent duplicates

  pieChart = new ApexCharts(piechart, {
    chart: {
      type: "pie",
      height: 300,
    },
    series: dataValues.map((d) => d.value), // Pie chart values
    labels: dataValues.map((d) => d.label), // Pie chart labels
    colors: ["#3c91e6", "#ffce26", "#fd7238", "#db504a", "#a29bfe", "#00cec9"],
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  pieChart.render(); // Render the chart
}

// Update Chart and Heading on Span Click
spans.forEach((span) => {
  span.addEventListener("click", () => {
    document.querySelector(".dynamic-text1.active").classList.remove("active");
    span.classList.add("active");

    const chartType = span.dataset.chart; // Get the selected chart type
    heading.textContent = data[chartType].title; // Update heading
    renderChart(data[chartType].values); // Render the new chart
  });
});

// Initialize Default Chart
renderChart(data.innovation.values);
// Chart data for years and months
const chartData = {
  years: {
    categories: [2015, 2016, 2017, 2018, 2019, 2020],
    series: [
      { name: "Innovations", data: [10, 15, 20, 25, 30, 35] },
      { name: "Startup Incubated", data: [5, 10, 15, 20, 25, 30] },
      { name: "Grants", data: [8, 12, 18, 24, 30, 36] },
      { name: "Achievements", data: [7, 14, 21, 28, 35, 42] }
    ]
  },
  months: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    series: [
      { name: "Innovations", data: [12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34] },
      { name: "Startup Incubated", data: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17] },
      { name: "Grants", data: [10, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31] },
      { name: "Achievements", data: [9, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30] }
    ]
  }
};

// Initialize the chart
let currentDatametrics = chartData.years; // Set initial data
const chartOptions = {
  chart: {
    type: "area", // Use area chart
    height: 300
  },
  series: currentDatametrics.series,
  xaxis: {
    categories: currentDatametrics.categories
  }
};

const chartmetrics = new ApexCharts(document.querySelector("#metrics-areachart"), chartOptions);
chartmetrics.render(); // Corrected to chartmetrics.render()

// Event listeners for Year/Month toggle
document.querySelectorAll(".metrics-indicators-part1 h3").forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelectorAll(".metrics-indicators-part1 h3").forEach((btn) => btn.classList.remove("active"));
    element.classList.add("active");

    const type = element.getAttribute("data-type");
    currentDatametrics = chartData[type];

    // Update the chart with new data
    chartmetrics.updateOptions({
      series: currentDatametrics.series,
      xaxis: {
        categories: currentDatametrics.categories
      }
    });
  });
});let chartOptionscollege = {
  chart: {
    type: 'line',
    height: 350
  },
  series: [{
    name: 'Overall Performance',
    data: [10, 20, 15, 30, 25, 40] // Dummy data for years
  }],
  xaxis: {
    categories: ['2015', '2016', '2017', '2018', '2019', '2020'], // Default: Years
    title: {
      text: 'Years'
    }
  }
};

// Render the chart
let chartcollege = new ApexCharts(document.querySelector("#collegemetrics-areachart"), chartOptionscollege);
chartcollege.render(); // Corrected .render() method usage

// Event listeners for Years and Months toggle
document.getElementById("yearsBtn").addEventListener("click", function () {
  updateChart(['2015', '2016', '2017', '2018', '2019', '2020'], [10, 20, 15, 30, 25, 40], 'Years');
  toggleActive('yearsBtn');
});

document.getElementById("monthsBtn").addEventListener("click", function () {
  updateChart(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], [5, 10, 15, 10, 20, 30, 25, 35, 20, 15, 10, 5], 'Months');
  toggleActive('monthsBtn');
});

// Function to update the chart
function updateChart(categories, data, title) {
  chartcollege.updateOptions({
    series: [{
      name: 'Overall Performance',
      data: data
    }],
    xaxis: {
      categories: categories,
      title: {
        text: title
      }
    }
  });
}

// Toggle active class
function toggleActive(activeId) {
  document.getElementById("yearsBtn").classList.remove("active");
  document.getElementById("monthsBtn").classList.remove("active");
  document.getElementById(activeId).classList.add("active");
}