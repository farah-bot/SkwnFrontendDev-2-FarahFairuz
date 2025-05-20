import React from "react";
// import "../styles/Statistics.css";

const Statistics = ({ months, values }) => {
  const maxValue = Math.max(...values);

  return (
    <div className="statistics-container">
      <div className="statistics-header">
        <h2>Statistics</h2>
        <span className="see-all">See All</span>
      </div>

      <div className="chart-container">
        <div className="y-axis">
          {[5, 4, 3, 2, 1].map((value, index) => (
            <div className="y-label" key={index}>
              {value}M
            </div>
          ))}
        </div>

        <div className="chart">
          {months.map((month, index) => {
            const heightPercent = (values[index] / maxValue) * 100;
            return (
              <div className="chart-column" key={index}>
                <div
                  className="chart-bar"
                  style={{ height: `${heightPercent}%` }}
                >
                  {index === 2 && (
                    <div className="data-point">
                      <div className="point-marker"></div>
                      <div className="point-line"></div>
                    </div>
                  )}
                </div>
                <div className="x-label">{month}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
