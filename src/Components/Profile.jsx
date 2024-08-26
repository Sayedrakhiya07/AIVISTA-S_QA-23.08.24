import React from 'react';
import './Profile.css'

function Profile() {
  return (
    <div className="profile-section flex">
      <div className="left-section">
        <div className="stat-section">
          <h3>Stats</h3>
          <div className="stat-body">
            <div className="stats-card">
              {/* <h3>Stats</h3> */}
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-value">1</div>
                  <div className="stat-label">reputation</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">0</div>
                  <div className="stat-label">reached</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">0</div>
                  <div className="stat-label">answers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">0</div>
                  <div className="stat-label">questions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="community-section">
          <div className="header">
            <h3>Communities</h3>
            <p>Edit</p>
          </div>
          <div className="body">
            <p>Stack Overflow</p>
            <p>1</p>
          </div>

        </div>

      </div>
      <div className="right-section">
        <div className="about-section">
          <h3>About</h3>
          <div className="about-body">
            <p>Your about me section is currently blank. Would you like to add one? Edit profile</p>
          </div>
        </div>
        <div className="about-section">
          <h3>Badges</h3>
          <div className="about-body">
            <p>You have not earned any badges</p>
          </div>
        </div>
        <div className="about-section">
          <h3>Posts</h3>
          <div className="about-body">
            <p>Just getting started? Try answering a question!</p>
            <p>Your most helpful questions, answers and tags will appear here. Start by answering a question or selecting tags that match topics you’re interested in.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Profile;

