// Charts.js
import React from 'react';
import { Chart } from 'chart.js/auto';

const Charts = ({ data }) => {
  const generatePieChart = (chartData, chartLabels, chartColors, chartTitle) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: chartLabels,
        datasets: [
          {
            label: chartTitle,
            data: chartData,
            backgroundColor: chartColors,
          },
        ],
      },
    });

    return canvas.toDataURL('image/png');
  };

  const gradesPieChart = generatePieChart(
    data.gradesDistribution,
    ['A', 'B', 'C', 'D', 'F'],
    ['#4caf50', '#ff9800', '#f44336', '#2196f3', '#9c27b0'],
    'Grades Distribution'
  );

  const attendancePieChart = generatePieChart(
    data.attendanceDistribution,
    ['Present', 'Absent'],
    ['#4caf50', '#f44336'],
    'Attendance'
  );

  return {
    gradesPieChart,
    attendancePieChart,
  };
};

export default Charts;
