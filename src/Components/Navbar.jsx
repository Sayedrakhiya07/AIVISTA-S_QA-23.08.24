import React, { useState } from 'react';
import '../Styles/Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faInbox, faTrophy, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import logo from "../Assets/images/AivistaQA Logo.png"; // Replace with your logo path
import img from "../Assets/images/download.jpg";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [profilePic, setProfilePic] = useState(img); // Default profile picture
  const navigate = useNavigate();

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfilePicClick = () => {
    navigate('/ProfilePage'); // Navigate to ProfilePage on click
  };

  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-items">
        <button>Products</button>
        <button>OverflowAI</button>
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="profile-picture-container" onClick={handleProfilePicClick}>
          <label htmlFor="profile-pic-input">
            <img src={profilePic} alt="Profile" className="profile-picture" />
          </label>
          <input
            type="file"
            id="profile-pic-input"
            accept="image/*"
            onChange={handleProfilePicChange}
            style={{ display: 'none' }}
          />
        </div>
        <div className="icon-buttons">
          <FontAwesomeIcon icon={faInbox} className="icon" title="Inbox" />
          <FontAwesomeIcon icon={faTrophy} className="icon" title="Achievements" />
          <FontAwesomeIcon icon={faQuestionCircle} className="icon" title="Help" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
