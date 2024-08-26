import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import '../Styles/ProfilePage.scss';
import Header from '../Components/Header';
import Profile from '../Components/Profile';
import Sidebaractivity from '../Components/Sidebaractivity';
import Saves from '../Components/Saves';
import Settings from '../Components/Settings';
import Summary from '../Components/Summary';

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState('Profile');
  const [sidebarSection, setSidebarSection] = useState(null);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setSidebarSection(null); // Reset sidebar section when switching main sections
  };

  const handleSidebarSectionChange = (section) => {
    setSidebarSection(section);
  };

  const renderSidebarSection = () => {
    switch (sidebarSection) {
      case 'Summary':
        return <Summary />;
      default:
        return null;
    }
  };

  return (
    <div className="ProfilePage-container">
      <Navbar />
      <div className="content-container">
        <Sidebar />
        <div className="main-content">
          <Header onSectionChange={handleSectionChange} activeSection={activeSection}/>
          <div className="content">
            {activeSection === 'Activity' && (
              <>
                <Sidebaractivity onSidebarSectionChange={handleSidebarSectionChange} />
                <div className="Sidebaractivity-content">
                  {renderSidebarSection()}
                </div>
              </>
            )}
            {activeSection === 'Profile' && <Profile />}
            {activeSection === 'Saves' && <Saves />}
            {activeSection === 'Settings' && <Settings />}
          </div>
        </div>
      </div>
    // </div>
  );
};

export default ProfilePage;
