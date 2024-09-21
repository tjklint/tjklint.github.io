import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./contribution_map.scss";

const ContributionMap: React.FC = () => {
  const theme = {
    light: ["#e6ccff", "#c299ff", "#9f66ff", "#7a33cc", "#592699"],
    dark: ["#e6ccff", "#c299ff", "#9f66ff", "#7a33cc", "#592699"],
  };

  const labels = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    totalCount: '{{count}} contributions in 2024', 
    legend: {
      less: 'Less',
      more: 'More',
    },
  };

  return (
    <div className="contribution-map-container">
      <section className="contribution-map">
        <div className="content-wrapper">
          <h2>My Github Contributions</h2>
          <div className="react-github-calendar">
            <div className="calendar-wrapper">
            <GitHubCalendar
              username="tjklint"
              blockSize={20}
              fontSize={16}
              theme={{
                light: ["#ffffff", "#c299ff", "#9f66ff", "#7a33cc", "#592699"],
                dark: ["#ffffff", "#c299ff", "#9f66ff", "#7a33cc", "#592699"],
              }}
              labels={labels}
            
            />
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContributionMap;
