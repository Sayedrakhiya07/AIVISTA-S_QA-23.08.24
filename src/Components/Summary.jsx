import React from 'react';
import "./Summary.css"

function Summary() {
  return (
    <div className="summary-section" style={{padding:"20px"}}>
      <h3>Summary</h3>
      <div className="summary">

        <div className="sum1">
          
          <p1 className='f-s'>Reputation is how the community thanks you</p1>
          <p1 className='s-s'>When users upvote your helpful posts, you'll earn reputation and unlock new privileges.</p1>

          <p1 className='t-s'>Learn more about reputation and privileges</p1>
        </div>
        <div className="sum1">
          <p1 className='f-s'>Earn badges for helpful actions</p1>
          <p1 className='s-s'>Badges are bits of digital flair that you get when you participate in especially helpful ways.</p1>

          <button className='sum-btn'>Take the taur and earn your first badge</button>
        </div>
        <div className="sum1">
          <p1 className='f-s'>Measure your impact
          </p1>
          <p1 className='s-s'>Your posts and helpful actions here help hundreds or thousands of people searching for help</p1>

          {/* <p1>Learn more about reputation and privileges</p1> */}
        </div>
      </div>
      <div className='card-inline'>
        <div className="card-box flex">
          <div className="card-header">
            <h3>Answers</h3>
            <div className="filter-items">
              <p1>Score</p1>
              <p1>Activity</p1>
              <p1>Newest</p1>
            </div>
          </div>
          <div className="card-content">
            You have not answer any questions.
          </div>
        </div>
        <div className="card-box flex">
          <div className="card-header">
            <h3>Answers</h3>
            <div className="filter-items">
              <p1>Score</p1>
              <p1>Activity</p1>
              <p1>Newest</p1>
            </div>
          </div>
          <div className="card-content">
            You have not answer any questions.
          </div>
        </div>
      </div>
      <div className='card-inline'>
        <div className="card-box flex">
          <div className="card-header">
            <h3>Tag</h3>

          </div>
          <div className="card-content">
            You have not participated in any tags.
          </div>
        </div>
        <div className="card-box flex">
          <div className="card-header">
            <h3>Reputation</h3>

          </div>
          <div className="card-content">
            You have no recent reputation changes.
          </div>
        </div>
      </div>
      <div className="card-box ">
        <div className="card-header">
          <h3>Badges</h3>

        </div>
        <div className="card-content">
          You have not earned any badges.
        </div>
      </div>
      <div className="card-box ">
          <div className="card-header">
            <h3>Followed Post</h3>
            
          </div>
          <div className="card-content">
            You are not following any post.
          </div>
        </div>
        <div className="card-box">
          <div className="card-header">
            <h3>Accounts</h3>
            
          </div>
          <div className="card-content" style={{textAlign:"start",color:"blue",fontSize:"20px"}}>
            Stackoverflow
          </div>
        </div>
        <div className="card-box ">
          <div className="card-header">
            <h3>Active Bounties(0)</h3>
            <div className="filter-items">
              <p1>Active</p1>
              <p1>Offered</p1>
              <p1>Earn</p1>
            </div>
          </div>
          <div className="card-content">
            You have no active bounties.
          </div>
        </div>
        <div className="card-box ">
          <div className="card-header">
            <h3>Article</h3>
            <div className="filter-items">
              <p1>Score</p1>
              <p1>Activity</p1>
              <p1>Newest</p1>
              <p1>View</p1>
            </div>
          </div>
          <div className="card-content">
            You have not created any articles.
          </div>
        </div>
        <div className="card-box ">
          <div className="card-header">
            <h3>Votes Cast</h3>
            
          </div>
          <div className="card-content">
            You have not cast any votes.
          </div>
        </div>



    </div>


  );
}

export default Summary;

