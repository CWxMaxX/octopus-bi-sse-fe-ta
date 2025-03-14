import './DailyActiveUsersPieChart.css'
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Grid } from "@chakra-ui/react";

const DailyActiveUsersPieChart = () => {
  const data={
    chartData:[
      { name: "Staff", y: 151 },
      { name: "Students", y: 200 },
      { name: "Students", y: 200 },
      { name: "Other", y: 200 },
    ],
    countsByAuthMethod:[
      { name: "Microsoft", count: 1000 },
      { name: "Internal", count: 1000 },
      { name: "Email", count: 1000 },
    ]

  }
  const options = {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
      color: "#fff",
    },
    title: {
      text: "Daily Active Users",
      align: "left",
      style: { color: "#fff" },
    },
    subtitle: {
      text: "<b>1051</b>",
      align: "left",
      floating: true,
      y: 40,
      useHTML: true,
      style: { fontSize: "24px", color: "#fff" },
    },
    legend: {
      align: "left",
      verticalAlign: "middle",
      layout: "vertical",
      itemStyle: { color: "#fff" },
    },
    tooltip: {
      pointFormat: "<b>{point.y}</b>",
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Users",
        colorByPoint: true,
        data: data.chartData,
      },
    ],
  };

  return (
    <div className="daily-active-users-pie-chart-container">
      <Grid templateColumns="repeat(1, 1fr)" gap="6">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Grid>
      <div>By Authentication Method</div>
      <Grid templateColumns="repeat(2, 1fr)" gap="6">
        {data.countsByAuthMethod.map((item) => (
          <div className='auth-counts-container' key={item.name}>
            <div>{item.name}</div>
            <div>{item.count}</div>
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default DailyActiveUsersPieChart;
