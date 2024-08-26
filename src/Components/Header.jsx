import React from 'react';
import '../Styles/Header.scss';
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { GoClock } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { MdEdit } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";

function Header({ onSectionChange ,activeSection}) {
  return (
    <div className="header">
      <div className="profile-picture">
        <img src="../assets/profile.png" alt="Profile" />
      </div>
      <div className="profile-info">
        <h1>Reetick Maity</h1>
        <p style={{display:'flex',alignItems:'center',gap:'4px'}}><LiaBirthdayCakeSolid /> Member since today <GoClock /> Last seen this week <SlCalender /> Visited 1 day, 1 consecutive</p>
        <div className="profile-options">
          <span className={activeSection=='Profile'?'active-badge':''} onClick={() => onSectionChange('Profile')}>Profile</span>
          <span className={activeSection=='Activity'?'active-badge':''} onClick={() => onSectionChange('Activity')}>Activity</span>
          <span className={activeSection=='Saves'?'active-badge':''}onClick={() => onSectionChange('Saves')}>Saves</span>
          <span className={activeSection=='Settings'?'active-badge':''} onClick={() => onSectionChange('Settings')}>Settings</span>
        </div>
      </div>
      <div className="header-buttons" style={{display:'flex',alignItems:'center',gap:'4px'}}>
        <button style={{display:'flex',alignItems:'center',gap:'4px'}}><MdEdit /> Edit profile</button>
        <button style={{display:'flex',alignItems:'center',gap:'4px'}}><MdOutlineMessage /> Network profile</button>
      </div>
    </div>
  );
}

export default Header;
