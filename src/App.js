import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from './Pages/Home';
// import Settings from './Pages/Settings';
// import Q_and_A from './Pages/Q_and_A';
// import Channels from './Pages/Channels';
// import AskQuestion from './Components/AskQuestion';
import LoginPage from "./Pages/Login";
import Register from "./Pages/Register";
import HomePage from "./Pages/Home";
import Q_and_A from "./Pages/Q_and_A";
import AskQuestionPage from "./Components/AskForHelp";
import TagsPage from "./Pages/TagsPage.jsx";
import RealTimeCollaborations from "./Pages/RealTimeCollaborations";
import ProfilePage from './Pages/ProfilePage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Homepage" element={<HomePage />} />
          <Route path="/QandA" element={<Q_and_A />} />
          <Route path="/AskForHelp" element={<AskQuestionPage />} />
          <Route path="/Tags" element={<TagsPage />} />
          <Route path="/Collaborations" element={<RealTimeCollaborations />} />
          <Route path='/ProfilePage' element={<ProfilePage/>}/>

          {/* <Route path="/settings" element={<Settings/>}/>
          <Route path='/channels' element={<Channels/>}/>
          <Route path='/askquestion' element={<AskQuestion/>}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
