

import React from 'react';
import '../Styles/Sidebaractivity.scss';

function Sidebaractivity({ onSidebarSectionChange }) {
  const handleItemClick = (section) => {
    onSidebarSectionChange(section);
  };

  return (
    <div className="Sidebaractivity">
      <ul>
        <li onClick={() => handleItemClick('Summary')}>Summary</li>
        <li onClick={() => handleItemClick('Answers')}>Answers</li>
        <li onClick={() => handleItemClick('Questions')}>Questions</li>
        <li onClick={() => handleItemClick('Tags')}>Tags</li>
        <li onClick={() => handleItemClick('Articles')}>Articles</li>
        <li onClick={() => handleItemClick('Badges')}>Badges</li>
        <li onClick={() => handleItemClick('Following')}>Following</li>
        <li onClick={() => handleItemClick('Bounties')}>Bounties</li>
        <li onClick={() => handleItemClick('Reputation')}>Reputation</li>
        <li onClick={() => handleItemClick('All actions')}>All actions</li>
        <li onClick={() => handleItemClick('Responses')}>Responses</li>
        <li onClick={() => handleItemClick('Votes')}>Votes</li>
      </ul>
    </div>
  );
}

export default Sidebaractivity;
