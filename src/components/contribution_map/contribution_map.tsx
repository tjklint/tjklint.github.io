import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import './contribution_map.scss';

const ContributionMap: React.FC = () => {
  const theme = {
    light: ['#e6ccff', '#c299ff', '#9f66ff', '#7a33cc', '#592699'],
    dark:  ['#e6ccff', '#c299ff', '#9f66ff', '#7a33cc', '#592699']
  };

  return (
    <div className="contribution-map">
      <h2>My GitHub Contributions</h2>
      <GitHubCalendar 
        username="tjklint"
        blockSize={15}
        fontSize={16}
        theme={{ 
          light: ['#e6ccff', '#c299ff', '#9f66ff', '#7a33cc', '#592699'], 
          dark:  ['#e6ccff', '#c299ff', '#9f66ff', '#7a33cc', '#592699']}}
      />
    </div>
  );
};

export default ContributionMap;
