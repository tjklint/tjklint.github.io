import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./contribution_map.scss";

const ContributionMap: React.FC = () => {
  const theme = {
    light: ["#e6ccff", "#c299ff", "#9f66ff", "#7a33cc", "#592699"],
    dark: ["#e6ccff", "#c299ff", "#9f66ff", "#7a33cc", "#592699"],
  };

  const labels = {
    months: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    weekdays: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    totalCount: '{{count}} in {{year}}', // Shortened string for mobile
    legend: {
      less: 'Weniger',
      more: 'Mehr',
    },
  };

  return (
    <div className="contribution-map-container">
      <section className="contribution-map">
        <h2>My Github Contributions</h2>
        <div className="react-github-calendar">
          <div className="calendar-wrapper">
            <GitHubCalendar
              username="tjklint"
              blockSize={15}
              fontSize={16}
              theme={{
                light: ["#e6ccff", "#c299ff", "#9f66ff", "#7a33cc", "#592699"],
                dark: ["#e6ccff", "#c299ff", "#9f66ff", "#7a33cc", "#592699"],
              }}
              labels={labels}

            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContributionMap;
