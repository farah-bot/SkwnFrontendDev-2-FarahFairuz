import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "../styles/Statistics.css";
import "jquery.easing";

const Statistics = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      $(chartRef.current).find(".chart-line").css("width", "0");
      $(chartRef.current).find(".chart-line").animate(
        {
          width: "100%",
        },
        1500,
        "easeOutQuart"
      );

      $(chartRef.current).find(".chart-dot").css("opacity", "0");
      setTimeout(() => {
        $(chartRef.current).find(".chart-dot").animate(
          {
            opacity: 1,
          },
          300
        );
      }, 1000);
    }
  }, [data]);

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
          <div className="chart-line"></div>
          <div className="chart-dot" style={{ left: "50%", top: "60%" }}></div>
          <div className="chart-x-axis">
            <div className="x-label">Jan</div>
            <div className="x-label">Feb</div>
            <div className="x-label">Mar</div>
            <div className="x-label">Apr</div>
            <div className="x-label">May</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
