import React, { useEffect, useRef } from "react";
import $ from "jquery";
// import "../styles/Statistics.css";

const Statistics = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
        const canvas = chartRef.current;
        const ctx = canvas.getContext("2d");
        
      const dataPoints = [
        { month: "Jan", value: 2.3 },
        { month: "Feb", value: 4.8 },
        { month: "Mar", value: 2.9 },
        { month: "Apr", value: 4.3 },
        { month: "May", value: 5.0 },
      ];

      canvas.width = 600;
      canvas.height = 300;


      drawChart(ctx, dataPoints);

      $(document).ready(function () {
        $(".statistics-card").css("opacity", 0).animate(
          {
            opacity: 1,
          },
          600
        );

        $(".highlight-point").hover(
          function () {
            $(this).css("transform", "scale(1.2)");
          },
          function () {
            $(this).css("transform", "scale(1)");
          }
        );
      });
    }
  }, []);

  const drawChart = (ctx, dataPoints) => {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;

    ctx.clearRect(0, 0, width, height);

    const maxValue = Math.max(...dataPoints.map((dp) => dp.value));

    ctx.beginPath();
    ctx.moveTo(
      padding,
      height - padding - (dataPoints[0].value / maxValue) * chartHeight
    );

    for (let i = 1; i < dataPoints.length; i++) {
      const x = padding + (i / (dataPoints.length - 1)) * chartWidth;
      const y =
        height - padding - (dataPoints[i].value / maxValue) * chartHeight;
      ctx.lineTo(x, y);
    }

    ctx.strokeStyle = "#4285f4";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.lineTo(padding + chartWidth, height - padding);
    ctx.lineTo(padding, height - padding);
    ctx.closePath();
    ctx.fillStyle = "rgba(66, 133, 244, 0.1)";
    ctx.fill();

    ctx.fillStyle = "#757575";
    ctx.font = "12px Arial";
    ctx.textAlign = "center";

    dataPoints.forEach((point, i) => {
      const x = padding + (i / (dataPoints.length - 1)) * chartWidth;
      ctx.fillText(point.month, x, height - padding + 20);
    });
  };

  return (
    <div className="statistics-card">
      <div className="section-header">
        <h2 className="section-title">Statistics</h2>
        <a href="#" className="see-all">
          See All
        </a>
      </div>

      <div className="chart-container">
        <canvas ref={chartRef} className="chart-canvas"></canvas>
        <div className="chart-static">
          <div className="y-axis">
            <div className="y-label">5M</div>
            <div className="y-label">4M</div>
            <div className="y-label">3M</div>
            <div className="y-label">2M</div>
            <div className="y-label">1M</div>
          </div>
          <div className="x-axis">
            <div className="x-label">Jan</div>
            <div className="x-label">Feb</div>
            <div className="x-label">Mar</div>
            <div className="x-label">Apr</div>
            <div className="x-label">May</div>
          </div>
          <div className="chart-line"></div>
          <div
            className="highlight-point"
            style={{ top: "60%", left: "50%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
