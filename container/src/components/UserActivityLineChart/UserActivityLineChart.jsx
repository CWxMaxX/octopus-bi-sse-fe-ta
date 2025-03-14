import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from 'highcharts-react-official';

const UserActivityLineChart = () => {
  const chartData={
    yAxis: [
      4500, 5200, 6100, 7000, 6800, 7200, 8100, 9000, 8700, 9400, 10200, 11000,
    ],
    xAxis:["1 Sep", "2 Sep", "3 Sep", "4 Sep", "5 Sep", "6 Sep", "7 Sep", "8 Sep", "9 Sep", "10 Sep", "11 Sep", "12 Sep"]

  }
  const options = {
    title: {
      text: "User Activity",
    },
    xAxis: {
      categories: chartData.xAxis,
    },
    yAxis: {
      title: {
      },
    },
    series: [
      {
        name: "User Activity",
        data: chartData.yAxis,
      },
    ],
    chart: {
      type: "line",
    },
  };

  return <div>
    <HighchartsReact highcharts={Highcharts} allowChartUpdate options={options} />
  </div>
};

export default UserActivityLineChart;
