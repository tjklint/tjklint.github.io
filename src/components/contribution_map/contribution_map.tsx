import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./contribution_map.scss";

const ContributionMap: React.FC = () => {
  const labels = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    totalCount: '{{count}} contributions', 
    legend: {
      less: 'Less',
      more: 'More',
    },
  };

  const theme = {
    light: ["#ffffff", "#c299ff", "#9f66ff", "#7a33cc", "#592699"],
    dark: ["#ffffff", "#c299ff", "#9f66ff", "#7a33cc", "#592699"],
  };

  return (
    <div className="contribution-map-container">
      <section className="contribution-map">
        <div className="calendar-section">
          <h3 className="year-label">/2025</h3>
          <div className="calendar-wrapper">
            <GitHubCalendar
              username="tjklint"
              blockSize={18}
              fontSize={16}
              theme={theme}
              labels={labels}
              year={2025}
            />
          </div>
        </div>

        <div className="calendar-section">
          <h3 className="year-label">/2024</h3>
          <div className="calendar-wrapper">
            <GitHubCalendar
              username="tjklint"
              blockSize={18}
              fontSize={16}
              theme={theme}
              labels={labels}
              year={2024}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContributionMap;
