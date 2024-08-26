import React from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import "../Styles/RealTimeCollaborations.scss";
import { IoIosInformationCircle } from "react-icons/io";
import { useState } from "react";

const discussion_points = [
  {
    id: 1,
    votes: 0,
    replies: 0,
    views: 2,
    title: "Slider move till the center of the desktop not to top when clicked",
    description:
      "First of all, I tried to do by CSS but, it's not happening here. When I clicked on the menu where are the titles of that page, that section scroll up but my header is sticky, so the section title has been...",
    tags: ["javascript", "css"],
    askedBy: "Social Media Invenza",
    timeAgo: "1 min ago",
  },
  {
    id: 2,
    votes: 5,
    replies: 3,
    views: 50,
    title:
      "Finding the path/name of modules in an SBT build multi-module project",
    description:
      "I am trying to find the path of the modules present inside the SBT built projects. For example, take this project -> https://github.com/scala/scala In this project, I executed the dependency tree...",
    tags: ["java", "scala", "sbt", "sbt-assembly", "sbt-plugin"],
    askedBy: "Sri Shylesh",
    timeAgo: "10 mins ago",
  },
  {
    id: 3,
    votes: 2,
    replies: 1,
    views: 15,
    title:
      "Flutter Operation not permitted (in target 'url_launcher' from project 'Pods') iOS build error",
    description:
      "/Users/userName/.pub-cache/hosted/pub.dartlang.org/sms_autofill-2.2.0/ios/Classes/SmsAutoFillPlugin.m cannot open file...",
    tags: ["MD", "ios", "flutter", "xcode"],
    askedBy: "Moon Princess 85",
    timeAgo: "30 mins ago",
    bounty: 20,
  },
  {
    id: 4,
    votes: 0,
    replies: 0,
    views: 5,
    title: "How to fix a bug in Android Studio",
    description:
      "I am having trouble with Android Studio showing an error in my build file, can anyone help?",
    tags: ["android", "java", "android-studio"],
    askedBy: "John Doe",
    timeAgo: "45 mins ago",
  },
  {
    id: 5,
    votes: 10,
    replies: 4,
    views: 100,
    title: "Best practices for React state management",
    description:
      "What are the best practices for managing state in a large React application? I have been using Redux, but I find it a bit cumbersome for smaller components.",
    tags: ["react", "redux", "javascript"],
    askedBy: "Jane Smith",
    timeAgo: "1 hour ago",
  },
  {
    id: 6,
    votes: 3,
    replies: 2,
    views: 30,
    title: "Python vs Java for web development",
    description:
      "I am trying to decide between Python and Java for web development. Which one is better in terms of performance and community support?",
    tags: ["python", "java", "web-development"],
    askedBy: "Alice Wonderland",
    timeAgo: "2 hours ago",
  },
  {
    id: 7,
    votes: 1,
    replies: 1,
    views: 25,
    title: "Understanding Promises in JavaScript",
    description:
      "I am having trouble understanding how Promises work in JavaScript. Can someone explain it with a simple example?",
    tags: ["javascript", "promises", "asynchronous"],
    askedBy: "Bob Builder",
    timeAgo: "3 hours ago",
  },
  {
    id: 8,
    votes: 4,
    replies: 2,
    views: 40,
    title: "CSS Grid vs Flexbox for layout",
    description:
      "When should I use CSS Grid and when should I use Flexbox for laying out my web pages? What are the pros and cons of each?",
    tags: ["css", "grid", "flexbox", "layout"],
    askedBy: "Charlie Brown",
    timeAgo: "4 hours ago",
  },
  {
    id: 9,
    votes: 0,
    replies: 0,
    views: 8,
    title: "How to set up a basic Node.js server",
    description:
      "I am new to Node.js and I want to set up a basic server. What are the steps I should follow?",
    tags: ["node.js", "server", "javascript"],
    askedBy: "David Tennant",
    timeAgo: "5 hours ago",
  },
  {
    id: 10,
    votes: 7,
    replies: 3,
    views: 70,
    title: "Best way to learn machine learning",
    description:
      "I want to start learning machine learning, but I don't know where to begin. What resources or courses would you recommend?",
    tags: ["machine-learning", "python", "data-science"],
    askedBy: "Eve Online",
    timeAgo: "6 hours ago",
  },
  {
    id: 11,
    votes: 10,
    replies: 5,
    views: 120,
    title: "How to optimize SQL queries for performance?",
    description:
      "My database queries are taking too long to execute. What are the best practices for optimizing SQL queries?",
    tags: ["sql", "database", "performance"],
    askedBy: "John Doe",
    timeAgo: "20 hours ago",
  },
  {
    id: 12,
    votes: 15,
    replies: 7,
    views: 150,
    title: "What is the best framework for building REST APIs in Python?",
    description:
      "I am building a REST API and want to know which Python framework is the most efficient and easy to use.",
    tags: ["python", "rest-api", "flask", "django"],
    askedBy: "Jane Smith",
    timeAgo: "20 hours ago",
  },
  {
    id: 13,
    votes: 8,
    replies: 2,
    views: 90,
    title: "How to implement user authentication in React?",
    description:
      "I need to add user authentication to my React application. What are the best libraries or methods to achieve this?",
    tags: ["react", "authentication", "jwt"],
    askedBy: "Alice Johnson",
    timeAgo: "20 hours ago",
  },
];

const RealTimeCollaborations = () => {
  const [filterTag, setFilterTag] = React.useState("");

  const filteredDiscussionPoints = discussion_points.filter((item) =>
    item.tags.some((tag) => tag.toLowerCase().includes(filterTag.toLowerCase()))
  );
  return (
    <div className="QandA-container discussion-section">
      <Navbar />
      <div className="content-container">
        <Sidebar />
        <div className="main-content">
          <div className="discussion-leftbar">
            <div className="discussion-header">
              <div className="dis-txt">
                <div className="labs">
                  <h1>
                    Discussions <span>LABS</span>
                  </h1>
                  <p>
                    <IoIosInformationCircle />
                    Threaded, public conversations on technical topics.
                    Available for any tag on Stack Overflow and these{" "}
                    <span>
                      <a href="">8 collectives.</a>
                    </span>
                  </p>
                </div>
                <div className="start-dis-btn">
                  <button>Start discussion</button>
                </div>
              </div>
              <div className="dis-count">
                {" "}
                <p>795 Discussions</p>
                <div className="filter">
                  <span>
                    {" "}
                    <IoIosInformationCircle />
                  </span>
                  <span>Sorted by: </span>
                  <span>
                    <select name="" id="">
                      <option value="">Newest</option>
                      <option value="">Latest activity</option>
                      <option value="">Highest score</option>
                    </select>
                  </span>
                  <span>
                    <input
                      type="text"
                      id="tag-input"
                      placeholder="Enter tag name"
                      value={filterTag}
                      onChange={(e) => setFilterTag(e.target.value)}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="detailed-contents">
              {filteredDiscussionPoints.map((item) => (
                <div key={item.id} className="diss-item">
                  <div className="counter-item">
                    <p>{item.votes} votes</p>
                    <p>{item.views} views</p>
                    <p>{item.replies} replies</p>
                  </div>
                  <div className="dis-txt-item">
                    <h3>
                      <a href="">{item.title}</a>
                    </h3>
                    <p>{item.description}</p>
                    <div className="user-time-techs">
                      <div className="techs">
                        {item.tags.map((tag, index) => (
                          <span key={index} className="tag-item">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="user-details-time">
                        <span className="askedBy">{item.askedBy}</span>
                        <span className="timeAgo">{item.timeAgo}</span>
                        <span>{}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="discussion-rightbar"></div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeCollaborations;
