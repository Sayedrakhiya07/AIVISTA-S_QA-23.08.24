import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import '../Styles/Q_and_A.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons';
import FilterModal from '../Components/FilterModal';
import { useNavigate } from 'react-router-dom';

const mockQuestions = [
  {
    id: 1,
    votes: 0,
    answers: 0,
    views: 2,
    title: "Slider move till the center of the desktop not to top when clicked",
    description: "First of all, I tried to do by CSS but, it's not happening here. When I clicked on the menu where are the titles of that page, that section scroll up but my header is sticky, so the section title has been...",
    tags: ["javascript", "css"],
    askedBy: "Social Media Invenza",
    timeAgo: "1 min ago",
    bounty: 0,
  },
  {
    id: 2,
    votes: 5,
    answers: 3,
    views: 50,
    title: "Finding the path/name of modules in an SBT build multi-module project",
    description: "I am trying to find the path of the modules present inside the SBT built projects. For example, take this project -> https://github.com/scala/scala In this project, I executed the dependency tree...",
    tags: ["java", "scala", "sbt", "sbt-assembly", "sbt-plugin"],
    askedBy: "Sri Shylesh",
    timeAgo: "10 mins ago",
    bounty: 10,
  },
  {
    id: 3,
    votes: 2,
    answers: 1,
    views: 15,
    title: "Flutter Operation not permitted (in target 'url_launcher' from project 'Pods') iOS build error",
    description: "/Users/userName/.pub-cache/hosted/pub.dartlang.org/sms_autofill-2.2.0/ios/Classes/SmsAutoFillPlugin.m cannot open file...",
    tags: ["MD", "ios", "flutter", "xcode"],
    askedBy: "Moon Princess 85",
    timeAgo: "30 mins ago",
    bounty: 20,
  },
  {
    id: 4,
    votes: 0,
    answers: 0,
    views: 5,
    title: "How to fix a bug in Android Studio",
    description: "I am having trouble with Android Studio showing an error in my build file, can anyone help?",
    tags: ["android", "java", "android-studio"],
    askedBy: "John Doe",
    timeAgo: "45 mins ago",
    bounty: 0,
  },
  {
    id: 5,
    votes: 10,
    answers: 4,
    views: 100,
    title: "Best practices for React state management",
    description: "What are the best practices for managing state in a large React application? I have been using Redux, but I find it a bit cumbersome for smaller components.",
    tags: ["react", "redux", "javascript"],
    askedBy: "Jane Smith",
    timeAgo: "1 hour ago",
    bounty: 110,
  },
  {
    id: 6,
    votes: 3,
    answers: 2,
    views: 30,
    title: "Python vs Java for web development",
    description: "I am trying to decide between Python and Java for web development. Which one is better in terms of performance and community support?",
    tags: ["python", "java", "web-development"],
    askedBy: "Alice Wonderland",
    timeAgo: "2 hours ago",
    bounty: 0,
  },
  {
    id: 7,
    votes: 1,
    answers: 1,
    views: 25,
    title: "Understanding Promises in JavaScript",
    description: "I am having trouble understanding how Promises work in JavaScript. Can someone explain it with a simple example?",
    tags: ["javascript", "promises", "asynchronous"],
    askedBy: "Bob Builder",
    timeAgo: "3 hours ago",
    bounty: 200,
  },
  {
    id: 8,
    votes: 4,
    answers: 2,
    views: 40,
    title: "CSS Grid vs Flexbox for layout",
    description: "When should I use CSS Grid and when should I use Flexbox for laying out my web pages? What are the pros and cons of each?",
    tags: ["css", "grid", "flexbox", "layout"],
    askedBy: "Charlie Brown",
    timeAgo: "4 hours ago",
    bounty: 0,
  },
  {
    id: 9,
    votes: 0,
    answers: 0,
    views: 8,
    title: "How to set up a basic Node.js server",
    description: "I am new to Node.js and I want to set up a basic server. What are the steps I should follow?",
    tags: ["node.js", "server", "javascript"],
    askedBy: "David Tennant",
    timeAgo: "5 hours ago",
    bounty: 0,
  },
  {
    id: 10,
    votes: 7,
    answers: 3,
    views: 70,
    title: "Best way to learn machine learning",
    description: "I want to start learning machine learning, but I don't know where to begin. What resources or courses would you recommend?",
    tags: ["machine-learning", "python", "data-science"],
    askedBy: "Eve Online",
    timeAgo: "6 hours ago",
    bounty: 1,
  },
  {
    id: 11,
    votes: 10,
    answers: 5,
    views: 120,
    title: "How to optimize SQL queries for performance?",
    description: "My database queries are taking too long to execute. What are the best practices for optimizing SQL queries?",
    tags: ["sql", "database", "performance"],
    askedBy: "John Doe",
    timeAgo: "20 hours ago",
    bounty: 2,
  },
  {
    id: 12,
    votes: 15,
    answers: 7,
    views: 150,
    title: "What is the best framework for building REST APIs in Python?",
    description: "I am building a REST API and want to know which Python framework is the most efficient and easy to use.",
    tags: ["python", "rest-api", "flask", "django"],
    askedBy: "Jane Smith",
    timeAgo: "20 hours ago",
    bounty: 3,
  },
  {
    id: 13,
    votes: 8,
    answers: 2,
    views: 90,
    title: "How to implement user authentication in React?",
    description: "I need to add user authentication to my React application. What are the best libraries or methods to achieve this?",
    tags: ["react", "authentication", "jwt"],
    askedBy: "Alice Johnson",
    timeAgo: "20 hours ago",
    bounty: 1,
  },



];


function Q_and_A() {
  const [questions, setQuestions] = useState(mockQuestions);
  const [filter, setFilter] = useState('Newest');
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState('');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filterOptions, setFilterOptions] = useState({ sortBy: 'Newest', tag: '' });

  const navigate = useNavigate();

  const handleAskForHelp =()=>{
    navigate("/AskForHelp")
  }

  // Filter functionality
  const handleFilterChange = (filterOption) => {
    setFilter(filterOption);

    let filteredQuestions;
    switch (filterOption) {
      case 'Newest':

        filteredQuestions = [...mockQuestions].sort((a, b) => a.id - b.id); // Sort by newest
        break;
      case 'Most Viewed':
        filteredQuestions = [...mockQuestions].sort((a, b) => b.views - a.views); // Sort by views
        break;
      case 'Oldest':
        filteredQuestions = [...mockQuestions].sort((a, b) => b.id - a.id); // Sort by oldest
        break;
      case 'Active':
        filteredQuestions = [...mockQuestions].sort((a, b) => a.id - b.id); // Sort by most recent activity (use 'id' for simplicity)
        break;
      case 'Unanswered':
        filteredQuestions = mockQuestions.filter(q => q.answers === 0); // Filter unanswered questions
        break;
      case 'Bountied':
        filteredQuestions = [...mockQuestions].filter((q) => q.bounty > 0).sort((a, b) => b.bounty - a.bounty); // Filter and sort by bounty
        break;
      default:
        filteredQuestions = mockQuestions;
    }

    if (selectedTag) {
      filteredQuestions = filteredQuestions.filter(q =>
        q.tags.includes(selectedTag)
      );
    }

    setQuestions(filteredQuestions);
  };

  // Toggle dropdown for "More"
  const toggleDropdown = () => {
    setIsMoreDropdownOpen(!isMoreDropdownOpen);
  };

  // Filter by tag
  const filterByTag = (tag) => {
    setSelectedTag(tag);
    const filteredQuestions = mockQuestions.filter(q => q.tags.includes(tag));
    setQuestions(filteredQuestions);
  };

  // Open filter modal
  const openFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  // Close filter modal
  const closeFilterModal = () => {
    setIsFilterModalOpen(false);
  };

  // Apply filter options
  const applyFilter = () => {
    let filteredQuestions = [...mockQuestions];

    switch (filterOptions.sortBy) {
      case 'Newest':
        filteredQuestions.sort((a, b) => b.id - a.id);
        break;
      case 'Most Viewed':
        filteredQuestions.sort((a, b) => b.views - a.views);
        break;
      case 'Oldest':
        filteredQuestions.sort((a, b) => a.id - b.id);
        break;
      case 'Bountied':
        filteredQuestions.sort((a, b) => b.bounty - a.bounty);
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
              <h2>All Questions</h2>
              <button className="ask-question-button" onClick={handleAskForHelp}>Ask Question</button>

            </div>
            <div className="header-bottom">
            <p>{questions.length} questions</p>
            <div className="filters">
              <button className={filter === 'Newest' ? 'active-filter' : ''} onClick={() => handleFilterChange('Newest')}>Newest</button>
              <button className={filter === 'Active' ? 'active-filter' : ''} onClick={() => handleFilterChange('Active')}>Active</button>
              <button className={filter === 'Unanswered' ? 'active-filter' : ''} onClick={() => handleFilterChange('Unanswered')}>Unanswered</button>
              <button className={filter === 'Bountied' ? 'active-filter' : ''} onClick={() => handleFilterChange('Bountied')}>Bountied</button>

              <div className="more-dropdown">
                <button className={isMoreDropdownOpen ? 'active-filter' : ''} onClick={toggleDropdown}>
                  More <FontAwesomeIcon icon={faChevronDown} />
                </button>
                {isMoreDropdownOpen && (
                  <div className="dropdown-content">
                    <button onClick={() => handleFilterChange('Most Viewed')}>Most Viewed</button>
                    <button onClick={() => handleFilterChange('Oldest')}>Oldest</button>
                  </div>
                )}
              </div>
              <button className="filter-button" onClick={openFilterModal}>
                <FontAwesomeIcon icon={faFilter} /> Filter
              </button>
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
                  <p>{question.description}</p>
                  <div className="question-tags">
                    {question.tags.map((tag, index) => (
                      <span key={index} className="tag" onClick={() => filterByTag(tag)}>{tag}</span>
                    ))}
                  </div>
                  <div className="question-meta">
                    <FontAwesomeIcon icon={faUser} className="user-icon" />
                    <p>Asked by <span>{question.askedBy}</span> <span>{question.timeAgo}</span></p>
                  </div>
                  {question.bounty > 0 && <div className="bounty">Bounty: {question.bounty}</div>}

                  {/* <div className="question-meta">
                    <FontAwesomeIcon icon={faUser} className="user-icon" />
                    <span>{question.askedBy}</span> asked {question.timeAgo}
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={closeFilterModal}
        onApplyFilter={applyFilter}
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
      />
    </div>
  )
}

export default Q_and_A;