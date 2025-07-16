import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import './App.css';
import ParticleAnimation from './components/ParticleAnimation';
import AICodeBlock from './components/AICodeBlock';
import { FaJs, FaReact, FaHtml5, FaCss3, FaNodeJs, FaServer, FaDatabase, FaAws, FaDocker, FaGit, FaGithub, FaJira, FaSlack, FaCode, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiRedux, SiGraphql, SiTypescript, SiMongodb, SiMysql, SiPostgresql, SiAmazonwebservices, SiDocker as SiDockerIcon, SiGit as SiGitIcon, SiGithub as SiGithubIcon, SiJira as SiJiraIcon, SiSlack as SiSlackIcon } from 'react-icons/si';

export default function App() {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [description, setDescription] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullLine1 = "Hey There";
  const fullLine2 = "I'm Md Monazir Hussan";
  const fullDescription = "Engineering Smart, Scalable & AI-Driven Web Platforms with MERN Stack & AWS — Delivering Cloud-Native Solutions from Clean Architecture to Production with End-to-End Ownership, Modern Dev Practices & Real-World Impact";
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const heroImageRef = useRef(null);

  const fullCode = `// Backend Server Setup (Node.js)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Initialize Express App
const app = express();
dotenv.config();

// Middleware Setup
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Error:', err));

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server Running' });
});

// User Authentication
app.post('/api/auth/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'User Created' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Protected Route
app.get('/api/profile', auth, (req, res) => {
  res.json(req.user);
});

// Error Handler
app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Server Error' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(\`Server on port \${PORT}\`);
});

// JavaScript Frontend (React)
const React = require('react');
const { useState, useEffect } = require('react');

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="app">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="data-container">
          {data.map(item => (
            <div key={item.id} className="item">
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Python Backend (Flask)
from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)
load_dotenv()

@app.route('/api/python/health', methods=['GET'])
def health_check():
    return jsonify({"status": "Python Server Running"})

@app.route('/api/python/data', methods=['POST'])
def process_data():
    data = request.json
    # Process data here
    return jsonify({"message": "Data processed", "result": data})

if __name__ == '__main__':
    app.run(port=5001)`;

  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i <= fullLine1.length; i++) {
        setLine1(fullLine1.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      for (let i = 0; i <= fullLine2.length; i++) {
        setLine2(fullLine2.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      setShowCursor(false);

      for (let i = 0; i <= fullDescription.length; i++) {
        setDescription(fullDescription.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 50));
      }
    };

    typeText();

    if (heroImageRef.current) {
      const effects = ['glow-effect-1', 'glow-effect-2', 'glow-effect-3'];
      const randomEffect = effects[Math.floor(Math.random() * effects.length)];
      heroImageRef.current.classList.add(randomEffect);
    }
  }, []);

  useEffect(() => {
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
      <ParticleAnimation />
      <header>
        <div className="nav-container">
          <div className="logo">Full Stack Developer</div>
          <div className="hamburger" onClick={() => setIsNavOpen(!isNavOpen)}>☰</div>
          {/* Mobile Drawer Backdrop */}
          {isNavOpen && <div className="drawer-backdrop" onClick={() => setIsNavOpen(false)}></div>}
          {/* Drawer Navigation */}
          <nav className={`nav-links${isNavOpen ? ' drawer-open' : ''}`}>
            <a href="#about" onClick={() => setIsNavOpen(false)}>About</a>
            <a href="#skills" onClick={() => setIsNavOpen(false)}>Skills</a>
            <a href="#services" onClick={() => setIsNavOpen(false)}>Services</a>
            <a href="#experience" onClick={() => setIsNavOpen(false)}>Experience</a>
            <a href="#projects" onClick={() => setIsNavOpen(false)}>Works</a>
            <a href="#certifications" onClick={() => setIsNavOpen(false)}>Certifications</a>
            <a href="#education" onClick={() => setIsNavOpen(false)}>Education</a>
            <a href="#contact" onClick={() => setIsNavOpen(false)}>Contact</a>
            <a href="https://careerhubmonagirblog.vercel.app/" target='blank'>Blog</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              {line1}
              {line1 === fullLine1 && <br />}
              {line2}
              {showCursor && <span className="cursor">|</span>}
            </h1>
            <p className="hero-description">
              {description}
              {description.length < fullDescription.length && <span className="cursor">|</span>}
            </p>
          </div>
          <div className="hero-image" ref={heroImageRef}>
            <div className="hero-image-inner">
              <div className="hero-image-front"></div>
              <div className="hero-image-back">
                <FaCode size="4em" />
                <p>Code to Cloud</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-card">
          <h2>About Me</h2>
          <p>
          I'm a Full Stack MERN Developer with 3.6+ years of experience in building high-performance, AI-powered web applications using clean architecture and scalable system design. I specialize in combining modern development practices with cutting-edge AI and cloud technologies (AWS) to deliver intelligent, end-to-end solutions that solve real-world problems and drive business value.
          </p>
        </div>
      </section>

      <section id="certifications" className="certifications">
        <h2>Certifications</h2>
        <div className="certifications-container">
          <div className="certifications-list">
            <ul>
              <li>AWS Certified Solutions Architect – Associate</li>
              <li>Full Stack Web Development (React & Node.js)</li>
              <li>Machine Learning & AI Certification</li>
            </ul>
          </div>
          <div className="code-matrix">
            <AICodeBlock code={fullCode} />
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <h2>My Expertise</h2>
        <p className="expertise-summary">
          I build high-performance, scalable web applications from the ground up, with deep proficiency in the MERN stack and cloud technologies like AWS. My expertise covers the full development lifecycle, from creating intuitive front-end experiences with React to architecting robust back-end services with Node.js and deploying them with Docker.
        </p>
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
              <p className="project-desc-highlight">A scalable platform with real-time updates, secure payment gateways, and a user-friendly interface.</p>
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
              <p className="project-desc-highlight">Real-time messaging app with socket-based communication and group chat functionality.</p>
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
              <p className="project-desc-highlight">A robust tool for managing customer data, sales pipelines, and analytics.</p>
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
              <p className="project-desc-highlight">A full-stack finance app with budgeting tools and insightful analytics.</p>
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
              <p className="project-desc-highlight">A platform with posts, comments, likes, and real-time notifications.</p>
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
              <p className="project-desc-highlight">A cross-platform mobile app with intuitive UI/UX and seamless performance.</p>
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

      <section id="education" className="education">
        <h2>Education</h2>
        <p>Master of Computer Applications, Monad University, Ghaziabad, UP (07/2019 - 06/2021)</p>
      </section>

      <section className="testimonials">
        <h2>What People Say</h2>
        <div className="testimonial">
          <p>"Monagir's work delivered instant performance boosts to our platform."</p>
          <h5>John Allendane, Product Manager</h5>
        </div>
        <div className="testimonial">
          <p>"His system design ensured flawless uptime during peak traffic."</p>
          <h5>Anamika Sandula, CTO</h5>
        </div>
      </section>

      <section className="cta">
        <h2>Let's Build Something Extraordinary Together</h2>
        <a href="#contact">Get in Touch</a>
      </section>

      <section id="contact" className="contact">
        <div className="contact-card">
          <h2>Contact Me</h2>
          <div className="contact-info">
            <p>Noida Electronic City, Sector-62, Noida</p>
            <a href="mailto:mdmonagirhussan99@gmail.com" className="contact-item">
              <FaEnvelope />
              <span>mdmonagirhussan99@gmail.com</span>
            </a>
            <a href="tel:+918406092514" className="contact-item">
              <FaPhone />
              <span>+91 8406092514</span>
            </a>
          </div>
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
        <button 
          className="back-to-top" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>
      )}
    </>
  );
}