import React, { useEffect, useState } from 'react';
import '../Styles/TagsPage.scss';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const TagsPage = () => {
  const [tags, setTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('Popular');
  const tagsPerPage = 8;

  

  // Mock data for demonstration, replace with API call in actual implementation
  const allTags = [
    {
        id: 1,
        name: 'javascript',
        description: 'For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript).',
        questionsCount: 2534264,
        askedToday: 138,
        askedThisWeek: 910
      },
      {
        id: 2,
        name: 'python',
        description: 'Python is a dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax.',
        questionsCount: 2208376,
        askedToday: 277,
        askedThisWeek: 1574
      },
      {
        id: 3,
        name: 'java',
        description: 'Java is a high-level object-oriented programming language. Use this tag when you\'re having problems using or understanding the language itself.',
        questionsCount: 1920396,
        askedToday: 107,
        askedThisWeek: 531
      },
      {
        id: 4,
        name: 'csharp',
        description: 'C# (pronounced "see sharp") is a high-level, statically typed, multi-paradigm programming language developed by Microsoft. C# code usually targets Microsoft\'s .NET family of tools and frameworks.',
        questionsCount: 1621538,
        askedToday: 100,
        askedThisWeek: 546
      },
      {
        id: 5,
        name: 'php',
        description: 'PHP is an open-source, multi-paradigm, dynamically-typed, and interpreted scripting language designed initially for server-side web development.',
        questionsCount: 1467791,
        askedToday: 41,
        askedThisWeek: 295
      },
      {
        id: 6,
        name: 'android',
        description: 'Android is Google\'s mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, and Smartwatches).',
        questionsCount: 1419824,
        askedToday: 74,
        askedThisWeek: 454
      },
      {
        id: 7,
        name: 'html',
        description: 'HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser.',
        questionsCount: 1189681,
        askedToday: 64,
        askedThisWeek: 343
      },
      {
        id: 8,
        name: 'jquery',
        description: 'jQuery is a JavaScript library. jQuery is a popular cross-browser JavaScript library that facilitates Document Object Model (DOM) traversal, event handling, and AJAX.',
        questionsCount: 1034370,
        askedToday: 9,
        askedThisWeek: 68
      },
      {
        id: 9,
        name: 'css',
        description: 'CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML.',
        questionsCount: 1026389,
        askedToday: 35,
        askedThisWeek: 207
      },
      {
        id: 10,
        name: 'sql',
        description: 'SQL (Structured Query Language) is a language for querying databases. Questions should include code examples, table structure, sample data, and a detailed description of the problem.',
        questionsCount: 987473,
        askedToday: 43,
        askedThisWeek: 192
      },
      {
        id: 11,
        name: 'reactjs',
        description: 'React is a JavaScript library for building user interfaces, maintained by Facebook and a community of developers.',
        questionsCount: 877653,
        askedToday: 92,
        askedThisWeek: 370
      },
      {
        id: 12,
        name: 'nodejs',
        description: 'Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.',
        questionsCount: 801254,
        askedToday: 78,
        askedThisWeek: 301
      },
      {
        id: 13,
        name: 'angular',
        description: 'Angular is a platform for building mobile and desktop web applications using TypeScript/JavaScript and other languages.',
        questionsCount: 742369,
        askedToday: 53,
        askedThisWeek: 211
      },
      {
        id: 14,
        name: 'swift',
        description: 'Swift is a general-purpose, compiled programming language developed by Apple Inc. and the open-source community.',
        questionsCount: 693145,
        askedToday: 36,
        askedThisWeek: 184
      },
      {
        id: 15,
        name: 'kotlin',
        description: 'Kotlin is a statically typed programming language for modern multiplatform applications, developed by JetBrains.',
        questionsCount: 621287,
        askedToday: 40,
        askedThisWeek: 213
      },
      {
        id: 16,
        name: 'ruby',
        description: 'Ruby is a dynamic, open-source programming language with a focus on simplicity and productivity.',
        questionsCount: 564831,
        askedToday: 29,
        askedThisWeek: 132
      },
      {
        id: 17,
        name: 'typescript',
        description: 'TypeScript is a superset of JavaScript that compiles to clean JavaScript output.',
        questionsCount: 482516,
        askedToday: 73,
        askedThisWeek: 264
      },
      {
        id: 18,
        name: 'flutter',
        description: 'Flutter is Google’s UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.',
        questionsCount: 453817,
        askedToday: 57,
        askedThisWeek: 198
      },
      {
        id: 19,
        name: 'docker',
        description: 'Docker is an open-source platform designed to automate the deployment of applications inside lightweight, portable containers.',
        questionsCount: 426891,
        askedToday: 25,
        askedThisWeek: 140
      },
      {
        id: 20,
        name: 'r',
        description: 'R is a language and environment for statistical computing and graphics, similar to S and S-Plus.',
        questionsCount: 385427,
        askedToday: 18,
        askedThisWeek: 94
      }
      
  ];

  useEffect(() => {
    handleSort('Popular'); // Initial sorting by popular when the page loads
    // Calculate the start and end index of the tags for the current page
    const startIndex = (currentPage - 1) * tagsPerPage;
    const endIndex = startIndex + tagsPerPage;
    
    // Set the current page tags
    const currentTags = allTags.slice(startIndex, endIndex);
    setTags(currentTags);
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSort = (option) => {
    let sortedTags = [];
    if (option === 'Popular') {
      sortedTags = [...allTags].sort((a, b) => b.questionsCount - a.questionsCount);
    } else if (option === 'Name') {
      sortedTags = [...allTags].sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === 'New') {
      sortedTags = [...allTags].sort((a, b) => b.createdAt - a.createdAt);
    }
    setTags(sortedTags);
    setSortOption(option);
  };

  return (
    <div className="tags-page">
      <Navbar />
      <div className="content-container">
        <Sidebar />
        <div className="main-content">
          <h1>Tags</h1>
          <p>
            A tag is a keyword or label that categorizes your question with other, similar questions.<br />
           Using the right tags makes it easier for others to find and answer your question.
          </p>
          <a href="#" className="tag-synonyms-link">Show all tag synonyms</a>
          <div className="tags-filter-bar">
            <div className="tag-filter-input-wrapper">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input type="text" className="tag-filter-input" placeholder="Filter by tag name" />
            </div>
            <div className="tags-sort">
          <button onClick={() => handleSort('Popular')} className={sortOption === 'Popular' ? 'active' : ''}>Popular</button>
          <button onClick={() => handleSort('Name')} className={sortOption === 'Name' ? 'active' : ''}>Name</button>
          <button onClick={() => handleSort('New')} className={sortOption === 'New' ? 'active' : ''}>New</button>
        </div>
          </div>
          <div className="tags-grid">
            {tags.map(tag => (
              <div key={tag.id} className="tag-card">
                <h3 className="tag-name">{tag.name}</h3>
                <p className="tag-description">{tag.description}</p>
                <div className="tag-stats">
                  <span>{tag.questionsCount.toLocaleString()} questions</span>
                  <span>{tag.askedToday} asked today, {tag.askedThisWeek} this week</span>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination">
            {/* Assuming there are 2 pages for demonstration. Update accordingly */}
            {[...Array(Math.ceil(allTags.length / tagsPerPage))].map((_, index) => (
              <button
                key={index}
                className={`page-button ${index + 1 === currentPage ? 'active' : ''}`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagsPage;

