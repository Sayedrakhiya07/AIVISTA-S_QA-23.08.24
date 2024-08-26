import React, { useRef, useState } from 'react';
import { FaPaperclip, FaFilter } from 'react-icons/fa'; // Import icons from react-icons
import { BiFilter } from "react-icons/bi";
import '../Styles/Askquestion.scss';

const AskQuestionPage = () => {
    const fileInputRef = useRef(null);
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleAttachFileClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); // Trigger file input click
        }
    };

    const handleFileChange = (event) => {
        const files = event.target.files; // Get selected files
        setSelectedFiles(Array.from(files)); // Convert FileList to array and set state
    };

    return (
        <div className="ask-question-container">
            <div className="header">
                <h1>Ask and Answer Questions</h1>
                <button className="sort-button">
                    <BiFilter className="filter-icon" /> Sort by Best
                </button>
            </div>
            <div className="question-form">
                <input type="text" className="question-input" placeholder="Questions Title" />
                <textarea className="question-textarea" placeholder="Describe your Questions here..."></textarea>
            </div>
            <div className="button-group">
                <button className="tech-button react-button increased-radius">React</button>
                <button className="tech-button python-button increased-radius">Python</button>
                <button className="tech-button js-button increased-radius">JavaScript</button>
                <button className="tech-button attach-button" onClick={handleAttachFileClick}>
                    <FaPaperclip className="attach-icon" /> Attach File
                </button>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }} // Hide the file input
                    multiple // Allow multiple files
                    onChange={handleFileChange} // Handle file selection
                />
            </div>
            {selectedFiles.length > 0 && (
                <div className="file-preview">
                    <h3>Selected Files:</h3>
                    <ul>
                        {selectedFiles.map((file, index) => (
                            <li key={index}>{file.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default AskQuestionPage;
