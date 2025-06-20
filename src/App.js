import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import './App.css';
import { FaJs, FaReact, FaHtml5, FaCss3, FaNodeJs, FaServer, FaDatabase, FaAws, FaDocker, FaGit, FaGithub, FaJira, FaSlack, FaCode } from 'react-icons/fa';
import { SiRedux, SiGraphql, SiTypescript, SiMongodb, SiMysql, SiPostgresql, SiAmazonwebservices, SiDocker as SiDockerIcon, SiGit as SiGitIcon, SiGithub as SiGithubIcon, SiJira as SiJiraIcon, SiSlack as SiSlackIcon } from 'react-icons/si';

export default function App() {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullLine1 = "Hey There,";
  const fullLine2 = "I’m Md Monazir Hussan";
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef(null);
  const [codeText, setCodeText] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const fullCode = `const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello, Md Monagir Hussan!');
});

app.get('/about', (req, res) => {
  res.send('This is the About page for Md Monagir Hussan\'s portfolio server.');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`;

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i <= fullLine1.length; i++) {
        setLine1(fullLine1.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 200));
      }
      for (let i = 0; i <= fullLine2.length; i++) {
        setLine2(fullLine2.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 200));
      }
      setShowCursor(false);
    };

    const typeCode = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      for (let i = 0; i <= fullCode.length; i++) {
        setCodeText(fullCode.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 50));
      }
    };

    typeText();
    typeCode();

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startCount) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 }
    );
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, [startCount]);

  return (
    <>
      <header>
        <div className="nav-container">
          <div className="logo"><strong>Full Stack Developer</strong></div>
          <div className="hamburger" onClick={toggleNav}>☰</div>
          <nav className={`nav-links ${isNavOpen ? 'active' : ''}`}>
            <a href="#about" onClick={toggleNav}>About</a>
            <a href="#skills" onClick={toggleNav}>Skills</a>
            <a href="#services" onClick={toggleNav}>Services</a>
            <a href="#experience" onClick={toggleNav}>Experience</a>
            <a href="#projects" onClick={toggleNav}>Works</a>
            <a href="#certifications" onClick={toggleNav}>Certifications</a>
            <a href="#education" onClick={toggleNav}>Education</a>
            <a href="#contact" onClick={toggleNav}>Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-text">
          <h1>
            {line1}
            {line1 === fullLine1 && <br />}
            {line2}
            {showCursor && <span className="cursor">|</span>}
          </h1>
          <p className="hero-description">Architecting Scalable Systems & Crafting Full Stack Solutions with MERN and AWS</p>
        </div>
        <div className="hero-img">
          <img
            src="/images/hero.jpg"
            alt="Md Monazir Hussan"
          />
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-card">
          <h2>About Me</h2>
          <p>
            I’m a seasoned Full Stack MERN Developer with over 3.6 years of experience, delivering high-impact, scalable web applications. 
            My expertise spans JavaScript, React.js, Node.js, Express.js, MongoDB, and AWS, with a knack for mentoring teams and optimizing performance. 
            I thrive on transforming complex challenges into elegant, end-to-end solutions that drive measurable results.
          </p>
        </div>
      </section>

      <section id="skills" className="skills">
        <h2>My Expertise</h2>
        <div className="skill-category technical-skills">
          <h3>Technical Skills</h3>
          <div className="subcategory">
            <h4>Frontend</h4>
            <ul>
              <li><FaJs /> JavaScript</li>
              <li><FaReact /> React.js</li>
              <li><FaHtml5 /> HTML5</li>
              <li><FaCss3 /> CSS3</li>
              <li><SiRedux /> Redux</li>
              <li><FaCode /> Material UI</li>
            </ul>
          </div>
          <div className="subcategory">
            <h4>Backend</h4>
            <ul>
              <li><FaNodeJs /> Node.js</li>
              <li><FaNodeJs /> Express.js</li>
              <li><FaServer /> RESTful API</li>
              <li><SiGraphql /> GraphQL</li>
              <li><SiTypescript /> TypeScript</li>
            </ul>
          </div>
          <div className="subcategory">
            <h4>Databases</h4>
            <ul>
              <li><SiMongodb /> MongoDB</li>
              <li><SiMysql /> MySQL</li>
              <li><SiPostgresql /> PostgreSQL</li>
            </ul>
          </div>
          <div className="subcategory">
            <h4>Cloud & DevOps</h4>
            <ul>
              <li><SiAmazonwebservices /> AWS</li>
              <li><SiDockerIcon /> Docker</li>
              <li><FaServer /> CI/CD Pipelines</li>
            </ul>
          </div>
          <div className="subcategory">
            <h4>Version Control & Collaboration</h4>
            <ul>
              <li><SiGitIcon /> Git</li>
              <li><SiGithubIcon /> GitHub</li>
              <li><SiJiraIcon /> Jira</li>
              <li><SiSlackIcon /> Slack</li>
            </ul>
          </div>
          <div className="subcategory">
            <h4>Tools & Methodologies</h4>
            <ul>
              <li><FaServer /> SDLC</li>
              <li><FaServer /> Agile/Scrum</li>
              <li><SiJiraIcon /> Jira</li>
              <li><FaServer /> MS Project</li>
            </ul>
          </div>
        </div>
        <div className="skill-category professional-strengths">
          <h3>Professional Strengths</h3>
          <ul>
            <li>Full Stack Development</li>
            <li>API Design & Integration</li>
            <li>Cloud Architecture & Scalability</li>
            <li>Agile Practices</li>
            <li>Leadership & Mentorship</li>
            <li>Problem Solving</li>
          </ul>
        </div>
        <div className="skill-category soft-skills">
          <h3>Soft Skills</h3>
          <ul>
            <li>Communication</li>
            <li>Collaboration</li>
            <li>Leadership</li>
            <li>Time Management</li>
            <li>Problem Solving</li>
          </ul>
        </div>
        <div className="skill-category languages">
          <h3>Languages</h3>
          <ul>
            <li>English (Fluent)</li>
            <li>Hindi (Native)</li>
          </ul>
        </div>
      </section>

      <section id="services" className="services">
        <div className="service">
          <h3>Full Stack Development</h3>
          <p>Crafting robust MERN applications from concept to deployment</p>
        </div>
        <div className="service">
          <h3>API Design & Integration</h3>
          <p>Building seamless RESTful and GraphQL APIs for efficiency</p>
        </div>
        <div className="service">
          <h3>Cloud Solutions</h3>
          <p>Scaling applications with AWS and DevOps best practices</p>
        </div>
      </section>

      <section className="stats" ref={statsRef}>
        <div className="stat">
          <h4>
            {startCount ? <CountUp start={1} end={285} duration={2} /> : 0}+
          </h4>
          <p>Projects Completed</p>
        </div>
        <div className="stat">
          <h4>
            {startCount ? <CountUp start={1} end={190} duration={2} /> : 0}+
          </h4>
          <p>Happy Clients</p>
        </div>
        <div className="stat">
          <h4>
            {startCount ? <CountUp start={1} end={100} duration={2} /> : 0}/100
          </h4>
          <p>Lighthouse Score</p>
        </div>
      </section>

      <section id="experience">
        <h2>Professional Journey</h2>
        <div className="timeline">
          <div className="entry entry-1">
            <div className="entry-icon">💼</div>
            <div className="entry-content">
              <div className="entry-date">Jun 2022 – Present</div>
              <h3>Full Stack MERN Developer @ Xotive Technologies</h3>
              <p>
                Led an 11-member team to launch an e-commerce platform and ERP system, boosting revenue by 25%. 
                Achieved a perfect 100/100 Lighthouse score and optimized backend to handle 96,000 req/sec.
              </p>
            </div>
          </div>
          <div className="entry entry-2">
            <div className="entry-icon">💻</div>
            <div className="entry-content">
              <div className="entry-date">Aug 2021 – May 2022</div>
              <h3>Full Stack Developer @ WebInOrbit</h3>
              <p>
                Developed web apps with React, Node.js, and Sails.js, integrating APIs like Google Maps and payment gateways, 
                while optimizing large-scale data processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2>Signature Projects</h2>
        <div className="projects-grid">
          <div className="project">
            <img src="/images/eCommerce.jpeg" alt="E-Commerce App" />
            <div className="project-content">
              <h4>E-Commerce Web App</h4>
              <p>A scalable platform with real-time updates, secure payment gateways, and a user-friendly interface.</p>
              <div className="project-tech">
                <span>React.js</span><span>Node.js</span><span>MongoDB</span><span>AWS</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                <a href="#" target="_blank" rel="noreferrer">GitHub</a>
                <a href="#" className="view-details">View Details</a>
              </div>
            </div>
          </div>
          <div className="project">
            <img src="/images/group-chat-app.webp" alt="Group Chat App" />
            <div className="project-content">
              <h4>Group Chat App</h4>
              <p>Real-time messaging app with socket-based communication and group chat functionality.</p>
              <div className="project-tech">
                <span>React.js</span><span>Express.js</span><span>Socket.io</span><span>MongoDB</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                <a href="#" target="_blank" rel="noreferrer">GitHub</a>
                <a href="#" className="view-details">View Details</a>
              </div>
            </div>
          </div>
          <div className="project">
            <img src="/images/image-crm.webp" alt="CRM System" />
            <div className="project-content">
              <h4>CRM System</h4>
              <p>A robust tool for managing customer data, sales pipelines, and analytics.</p>
              <div className="project-tech">
                <span>React.js</span><span>Node.js</span><span>PostgreSQL</span><span>GraphQL</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                <a href="#" target="_blank" rel="noreferrer">GitHub</a>
                <a href="#" className="view-details">View Details</a>
              </div>
            </div>
          </div>
          <div className="project">
            <img src="/images/expense-tracker-dashboard.webp" alt="Expense Tracker" />
            <div className="project-content">
              <h4>Expense Tracker App</h4>
              <p>A full-stack finance app with budgeting tools and insightful analytics.</p>
              <div className="project-tech">
                <span>React.js</span><span>Express.js</span><span>MongoDB</span><span>Material UI</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                <a href="#" target="_blank" rel="noreferrer">GitHub</a>
                <a href="#" className="view-details">View Details</a>
              </div>
            </div>
          </div>
          <div className="project">
            <img src="/images/Social-Media-App.png" alt="Social Media App" />
            <div className="project-content">
              <h4>Social Media App</h4>
              <p>A platform with posts, comments, likes, and real-time notifications.</p>
              <div className="project-tech">
                <span>React.js</span><span>Node.js</span><span>MongoDB</span><span>Socket.io</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                <a href="#" target="_blank" rel="noreferrer">GitHub</a>
                <a href="#" className="view-details">View Details</a>
              </div>
            </div>
          </div>
          <div className="project">
            <img src="/images/ui-designers.webp" alt="Mobile App Design" />
            <div className="project-content">
              <h4>Mobile App Design</h4>
              <p>A cross-platform mobile app with intuitive UI/UX and seamless performance.</p>
              <div className="project-tech">
                <span>React Native</span><span>TypeScript</span><span>Firebase</span><span>Redux</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                <a href="#" target="_blank" rel="noreferrer">GitHub</a>
                <a href="#" className="view-details">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="certifications">
        <h2>Certifications</h2>
        <div className="certifications-container">
          <div className="certifications-list">
            <ul>
              <li>AWS Certified Solutions Architect – Associate</li>
              <li>Full Stack Web Development (React & Node.js)</li>
              <li>Agile Scrum Master</li>
            </ul>
          </div>
          <div className="code-matrix">
            <div className="code-block">
              <pre>
                {codeText}
                <span className="typing-cursor">|</span>
              </pre>
            </div>
            <div className="binary-rain"></div>
            <div className="orbit-icons">
              <span className="aws-icon">☁️</span>
              <span className="agile-icon">🔄</span>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="education">
        <h2>Education</h2>
        <p>Master of Computer Applications, Monad University, Ghaziabad, UP (07/2019 - 06/2021)</p>
      </section>

      <section className="testimonials">
        <h2>What People Say</h2>
        <div className="testimonial">
          <p>“Monagir’s work delivered instant performance boosts to our platform.”</p>
          <h5>John Allendane, Product Manager</h5>
        </div>
        <div className="testimonial">
          <p>“His system design ensured flawless uptime during peak traffic.”</p>
          <h5>Anamika Sandula, CTO</h5>
        </div>
      </section>

      <section className="cta">
        <h2>Let’s Build Something Extraordinary Together</h2>
        <a href="#contact">Get in Touch</a>
      </section>

      <section id="contact" className="contact">
        <div className="contact-card">
          <h2>Contact Me</h2>
          <p>Noida Electronic City, Sector-62, Noida</p>
          <p>✉️ mdmonagirhussan99@gmail.com | 📞 +91 8406092514</p>
          <div className="contact-links">
            <a href="https://github.com/monagirhussan786" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/md-monagir-hussan-7140b7266" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer>
        © 2025 Md Monazir Hussan. All Rights Reserved.
      </footer>

      {showBackToTop && (
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑
        </button>
      )}
    </>
  );
}