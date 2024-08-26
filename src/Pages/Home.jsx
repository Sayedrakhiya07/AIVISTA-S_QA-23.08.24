import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import '../Styles/Home.scss';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons';
import FilterModal from '../Components/FilterModal';

export const mockQuestions = [
  {
    id: 1,
    title: "How can I optimize my React application for better performance?",
    votes: 45,
    answers: 12,
    views: 1000,
    bounty: 50,
    timeAgo: "2 days ago",
    askedBy: "JohnDoe",
    tags: ["React", "Performance", "Optimization"]
  },
  {
    id: 2,
    title: "What are the best practices for state management in Redux?",
    votes: 32,
    answers: 8,
    views: 850,
    bounty: 20,
    timeAgo: "1 week ago",
    askedBy: "JaneSmith",
    tags: ["Redux", "State Management", "Best Practices"]
  },
  {
    id: 3,
    title: "How do I implement server-side rendering with Next.js?",
    votes: 28,
    answers: 15,
    views: 700,
    bounty: 30,
    timeAgo: "3 days ago",
    askedBy: "DevGuru",
    tags: ["Next.js", "Server-Side Rendering", "React"]
  },
  {
    id: 4,
    title: "What are the security considerations for a Node.js API?",
    votes: 50,
    answers: 20,
    views: 1200,
    bounty: 40,
    timeAgo: "5 days ago",
    askedBy: "SecurityExpert",
    tags: ["Node.js", "API", "Security"]
  },
  {
    id: 5,
    title: "How can I integrate TypeScript with a React project?",
    votes: 37,
    answers: 10,
    views: 900,
    bounty: 25,
    timeAgo: "2 weeks ago",
    askedBy: "TypeScriptPro",
    tags: ["TypeScript", "React", "Integration"]
  },
  {
    id: 6,
    title: "What are the benefits of using GraphQL over REST APIs?",
    votes: 40,
    answers: 22,
    views: 1100,
    bounty: 35,
    timeAgo: "1 month ago",
    askedBy: "GraphQLFan",
    tags: ["GraphQL", "REST", "API"]
  },
  {
    id: 7,
    title: "How can I use WebSockets in a React application?",
    votes: 29,
    answers: 5,
    views: 600,
    bounty: 15,
    timeAgo: "4 days ago",
    askedBy: "WebSocketUser",
    tags: ["WebSockets", "React", "Real-Time"]
  },
  {
    id: 8,
    title: "What are some effective strategies for testing React components?",
    votes: 33,
    answers: 18,
    views: 800,
    bounty: 20,
    timeAgo: "6 days ago",
    askedBy: "TestingEnthusiast",
    tags: ["Testing", "React", "Components"]
  }
];


function Q_and_A() {
  const [questions, setQuestions] = useState(mockQuestions);
  const [filter, setFilter] = useState('Interesting');
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState('');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filterOptions, setFilterOptions] = useState({ sortBy: 'Interesting', tag: '' });

  const navigate = useNavigate();

  const handleAskForHelp = () => {
    navigate("/AskForHelp");
  };

  const handleFilterChange = (filterOption) => {
    setFilter(filterOption);

    let filteredQuestions;
    switch (filterOption) {
      case 'Interesting':
        filteredQuestions = [...mockQuestions].sort((a, b) => b.votes - a.votes);
        break;
      case 'Bountied':
        filteredQuestions = [...mockQuestions].filter((q) => q.bounty > 0).sort((a, b) => b.bounty - a.bounty);
        break;
      case 'Hot':
        filteredQuestions = [...mockQuestions].sort((a, b) => b.views - a.views);
        break;
      case 'Week':
        filteredQuestions = mockQuestions.filter(q => new Date() - new Date(q.timeAgo) < 7 * 24 * 60 * 60 * 1000);
        break;
      case 'Month':
        filteredQuestions = mockQuestions.filter(q => new Date() - new Date(q.timeAgo) < 30 * 24 * 60 * 60 * 1000);
        break;
      default:
        filteredQuestions = mockQuestions;
    }

    if (selectedTag) {
      filteredQuestions = filteredQuestions.filter(q => q.tags.includes(selectedTag));
    }

    setQuestions(filteredQuestions);
  };

  const toggleDropdown = () => {
    setIsMoreDropdownOpen(!isMoreDropdownOpen);
  };

  const filterByTag = (tag) => {
    setSelectedTag(tag);
    const filteredQuestions = mockQuestions.filter(q => q.tags.includes(tag));
    setQuestions(filteredQuestions);
  };

  const openFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  const closeFilterModal = () => {
    setIsFilterModalOpen(false);
  };

  const applyFilter = () => {
    let filteredQuestions = [...mockQuestions];

    switch (filterOptions.sortBy) {
      case 'Interesting':
        filteredQuestions.sort((a, b) => b.votes - a.votes);
        break;
      case 'Bountied':
        filteredQuestions.sort((a, b) => b.bounty - a.bounty);
        break;
      case 'Hot':
        filteredQuestions.sort((a, b) => b.views - a.views);
        break;
      case 'Week':
        filteredQuestions = filteredQuestions.filter(q => new Date() - new Date(q.timeAgo) < 7 * 24 * 60 * 60 * 1000);
        break;
      case 'Month':
        filteredQuestions = filteredQuestions.filter(q => new Date() - new Date(q.timeAgo) < 30 * 24 * 60 * 60 * 1000);
        break;
      default:
        break;
    }

    if (filterOptions.tag) {
      filteredQuestions = filteredQuestions.filter(q => q.tags.includes(filterOptions.tag));
    }

    setQuestions(filteredQuestions);
  };

  return (
    <div className="QandA-container">
      <Navbar />
      <div className="content-container">
        <Sidebar />
        <div className="main-content">
          <div className="questions-header">
            <div className="header-top">
              <h2>Top Questions</h2>
              <button className="ask-question-button" onClick={handleAskForHelp}>Ask Question</button>
            </div>
            <div className="header-bottom">
              <p>{questions.length} questions</p>
              <div className="filters">
                <button className={filter === 'Interesting' ? 'active-filter' : ''} onClick={() => handleFilterChange('Interesting')}>Interesting</button>
                <button className={filter === 'Bountied' ? 'active-filter' : ''} onClick={() => handleFilterChange('Bountied')}>Bountied</button>
                <button className={filter === 'Hot' ? 'active-filter' : ''} onClick={() => handleFilterChange('Hot')}>Hot</button>
                <button className={filter === 'Week' ? 'active-filter' : ''} onClick={() => handleFilterChange('Week')}>Week</button>
                <button className={filter === 'Month' ? 'active-filter' : ''} onClick={() => handleFilterChange('Month')}>Month</button>
              </div>
            </div>
          </div>

          <div className="questions-list">
            {questions.map((question) => (
              <div key={question.id} className="question-item">
                <div className="question-stats">
                  <p>{question.votes} votes</p>
                  <p>{question.answers} answers</p>
                  <p>{question.views} views</p>
                </div>
                <div className="question-content">
                  <h3>{question.title}</h3>
                  <div className="question-tags">
                    {question.tags.map((tag, index) => (
                      <span key={index} className="tag" onClick={() => filterByTag(tag)}>{tag}</span>
                    ))}
                  </div>
                  <div className="question-meta">
                    <FontAwesomeIcon icon={faUser} />
                    <span>{question.askedBy}</span>
                    <span>{question.timeAgo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isFilterModalOpen && <FilterModal closeFilterModal={closeFilterModal} applyFilter={applyFilter} filterOptions={filterOptions} setFilterOptions={setFilterOptions} />}
    </div>
  );
}

export default Q_and_A;
