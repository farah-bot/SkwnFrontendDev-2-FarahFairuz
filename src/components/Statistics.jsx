import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "../styles/Statistics.css";
import "jquery.easing";

const Statistics = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const canvas = $(chartRef.current).find("canvas")[0];
      const ctx = canvas.getContext("2d");
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      const points = [
        { x: 0, y: height * 0.6 },
        { x: width * 0.2, y: height * 0.4 },
        { x: width * 0.4, y: height * 0.7 },
        { x: width * 0.6, y: height * 0.2 },
        { x: width * 0.8, y: height * 0.5 },
        { x: width, y: height * 0.3 },
      ];

      const dots = $(chartRef.current).find(".chart-dot");

      dots.each(function (i) {
        $(this).css({
          left: (points[i].x / width) * 100 + "%",
          top: points[i].y + "px",
          opacity: 0,
        });
      });

      let progress = 0;
      const totalPoints = points.length;

      const animateChart = () => {
        ctx.clearRect(0, 0, width, height);

        ctx.beginPath();
        ctx.moveTo(0, points[0].y);

        for (let i = 0; i < totalPoints - 1; i++) {
          const currentPoint = points[i];
          const nextPoint = points[i + 1];

          const cp1x = currentPoint.x + (nextPoint.x - currentPoint.x) / 2;
          const cp1y = currentPoint.y;
          const cp2x = currentPoint.x + (nextPoint.x - currentPoint.x) / 2;
          const cp2y = nextPoint.y;

          const endX = Math.min(progress * width, nextPoint.x);

          if (endX > currentPoint.x) {
            const t = (endX - currentPoint.x) / (nextPoint.x - currentPoint.x);
            const bezierY = bezierPoint(
              currentPoint.y,
              cp1y,
              cp2y,
              nextPoint.y,
              t
            );

            ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, bezierY);

            if (endX >= nextPoint.x * 0.95 && i < dots.length) {
              $(dots[i + 1]).animate({ opacity: 1 }, 300);
            }
          }
        }

        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, "rgba(0, 128, 255, 1)");
        gradient.addColorStop(0.5, "rgba(34, 204, 221, 1)");
        gradient.addColorStop(1, "rgba(0, 128, 255, 1)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.stroke();

        if (progress < 1) {
          progress += 0.01;
          requestAnimationFrame(animateChart);
        }
      };

      $(dots[0]).animate({ opacity: 1 }, 300);
      animateChart();
    }
  }, [data]);

  const bezierPoint = (p0, p1, p2, p3, t) => {
    const cX = 3 * (p1 - p0);
    const bX = 3 * (p2 - p1) - cX;
    const aX = p3 - p0 - cX - bX;

    return aX * Math.pow(t, 3) + bX * Math.pow(t, 2) + cX * t + p0;
  };

  return (
    <div className="statistics-container">
      <div className="section-header">
        <h2 className="section-title">Statistics</h2>
        <a href="#" className="see-all">
          See All
        </a>
      </div>
      <div className="chart" ref={chartRef}>
        <div className="chart-y-axis">
          <div className="y-label">5M</div>
          <div className="y-label">4M</div>
          <div className="y-label">3M</div>
          <div className="y-label">2M</div>
          <div className="y-label">1M</div>
        </div>
        <div className="chart-content">
          <canvas width="500" height="160"></canvas>
          <div className="chart-dot" data-index="0"></div>
          <div className="chart-dot" data-index="1"></div>
          <div className="chart-dot" data-index="2"></div>
          <div className="chart-dot" data-index="3"></div>
          <div className="chart-dot" data-index="4"></div>
          <div className="chart-dot" data-index="5"></div>
          <div className="chart-x-axis">
            <div className="x-label">Jan</div>
            <div className="x-label">Feb</div>
            <div className="x-label">Mar</div>
            <div className="x-label">Apr</div>
            <div className="x-label">May</div>
            <div className="x-label">Jun</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
