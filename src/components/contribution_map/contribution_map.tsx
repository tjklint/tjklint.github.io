import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import './contribution_map.scss';

const ContributionMap: React.FC = () => {
  const theme = {
    light: ['#f5e6ff', '#d9b3ff', '#b366ff', '#7a00cc', '#4c0080'],
    dark: ['#f5e6ff', '#d9b3ff', '#b366ff', '#7a00cc', '#4c0080']
  };

  return (
    <div className="contribution-map">
      <h2>My GitHub Contributions</h2>
      <GitHubCalendar 
        username="tjklint"
        blockSize={15}
        fontSize={16}
        theme={{ 
          light:['#f5e6ff', '#d9b3ff', '#b366ff', '#7a00cc', '#4c0080'], 
          dark: ['#f5e6ff', '#d9b3ff', '#b366ff', '#7a00cc', '#4c0080']}}
      />
    </div>
  );
};

export default ContributionMap;
