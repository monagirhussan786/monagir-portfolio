import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import './App.css';
import ParticleAnimation from './components/ParticleAnimation';
import AICodeBlock from './components/AICodeBlock';
import { FaJs, FaReact, FaHtml5, FaCss3, FaNodeJs, FaServer, FaDatabase, FaAws, FaDocker, FaGit, FaGithub, FaJira, FaSlack, FaCode, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiRedux, SiGraphql, SiTypescript, SiMongodb, SiMysql, SiPostgresql, SiAmazonwebservices, SiDocker as SiDockerIcon, SiGit as SiGitIcon, SiGithub as SiGithubIcon, SiJira as SiJiraIcon, SiSlack as SiSlackIcon, SiNextdotjs, SiAngular, SiTensorflow, SiPytorch, SiScikitlearn, SiN8N } from 'react-icons/si';

export default function App() {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [description, setDescription] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullLine1 = "Hey There";
  const fullLine2 = "I'm Md Monazir Hussan";
  const fullDescription = "Results-driven Full Stack MERN Developer with over 4 years of experience in architecting and deploying scalable web applications. Expert in JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, and AWS. Proficient in integrating AI, Large Language Models (LLMs) and Agentic AI to enhance functionality and user experience.";
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
          Results-driven Full Stack MERN Developer with over 4 years of experience in architecting and deploying scalable web applications. Expert in JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, and AWS. Proficient in integrating AI, Large Language Models (LLMs) and Agentic AI to enhance functionality and user experience. Skilled in leading cross-functional teams, mentoring developers, and optimizing system performance. Known for delivering high-impact, end-to-end solutions on time, with a focus on scalability and measurable business outcomes.
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
              <li>Agile Scrum Master</li>
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
          I build high-performance, scalable web applications from the ground up, with deep proficiency in the MERN stack, AI technologies, and cloud platforms like AWS. My expertise covers the full development lifecycle, from creating intuitive front-end experiences with React and Next.js to architecting robust back-end services with Node.js, integrating AI and LLMs, and deploying them with Docker and CI/CD pipelines.
        </p>
        <div className="skill-category technical-skills">
          <h3>Technical Skills</h3>
          <div className="subcategory">
            <h4>Frontend</h4>
            <ul>
              <li><FaJs /> JavaScript</li>
              <li><FaReact /> React.js</li>
              <li><SiNextdotjs /> Next.js</li>
              <li><SiAngular /> Angular</li>
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
            <h4>AI & LLMs</h4>
            <ul>
              <li><SiTensorflow /> TensorFlow</li>
              <li><SiPytorch /> PyTorch</li>
              <li><SiScikitlearn /> scikit-learn</li>
              <li><FaCode /> Natural Language Processing (NLP)</li>
              <li><FaCode /> Predictive Analytics</li>
              <li><FaCode /> Generative AI</li>
              <li><FaCode /> Agentic AI</li>
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
              <li><SiN8N /> n8n</li>
            </ul>
          </div>
        </div>
        <div className="skill-category professional-strengths">
          <h3>Professional Strengths</h3>
          <ul>
            <li>Full Stack Expertise: Proficient in building robust MERN stack applications</li>
            <li>API Development: Skilled in designing scalable RESTful and GraphQL APIs</li>
            <li>AI & LLM Integration: Experienced in deploying AI and Large Language Models, and Agentic AI for enhanced functionality</li>
            <li>Cloud Architecture: Adept at leveraging AWS for scalable deployments</li>
            <li>Leadership: Proven ability to lead teams and mentor junior developers</li>
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
          <h3>AI & LLM Integration</h3>
          <p>Deploying AI, Large Language Models, and Agentic AI for enhanced functionality</p>
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
              <div className="entry-date">06/2022 – Present</div>
              <h3>Full Stack MERN Developer @ Xotive Technologies</h3>
              <p>
                • Led a team of 11 developers to design and launch an e-commerce platform, resolving 45+ features and bugs, enhancing user satisfaction by 20%.<br/>
                • Spearheaded implementation of an ERP system, collaborating with Technology, Business Development, and Management teams, boosting revenue by 25% in one year.<br/>
                • Earned promotion within 6 months for exceptional performance, six months ahead of schedule.<br/>
                • Developed a high-performance e-commerce front-end using React.js with 14,000 reusable components, achieving a Lighthouse score of 100/100.<br/>
                • Optimized MongoDB data models and service layers to handle 74,000–96,000 requests/sec during flash sales.<br/>
                • Integrated an AI-driven recommendation engine using TensorFlow, increasing user engagement by 15%.
              </p>
            </div>
          </div>
          <div className="entry entry-2">
            <div className="entry-icon">💻</div>
            <div className="entry-content">
              <div className="entry-date">08/2021 – 05/2022</div>
              <h3>Full Stack Developer @ WebInOrbit</h3>
              <p>
                • Developed scalable web applications using React, Node.js, and Sails.js, leveraging MySQL, PostgreSQL, and MongoDB.<br/>
                • Designed and implemented RESTful APIs, integrating third-party services like Google Maps, Mapbox, and payment gateways.<br/>
                • Applied distributed computing and large-scale design to optimize real-time data processing for web applications.<br/>
                • Built a data analytics module to analyze user trends, improving application performance by 20%.<br/>
                • Wrote 200+ unit tests, ensuring 100% bug-free code within the SDLC.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="freelancing-section">
        <div className="freelancing-content">
          <h2>I'm <span className="highlight-yellow">Available</span> for freelancing</h2>
          <p>I am available for freelance web development projects, ready to bring your ideas to life with expertise and creativity. Let's collaborate and create something amazing together.</p>
          <a href="#contact" className="freelancing-cta">Hire Me</a>
        </div>
      </section>

      <section id="projects">
        <h2>Signature Projects</h2>
        <div className="projects-grid">
          <div className="project">
            <img src="/images/eCommerce.jpeg" alt="E-Commerce App" />
            <div className="project-content">
              <h4>E-Commerce Web App</h4>
              <p className="project-desc-highlight">Built a scalable platform with real-time updates and secure payment integrations using React, Node.js, and MongoDB. Integrated AI-based recommendation system with TensorFlow, boosting sales by 10%.</p>
              <div className="project-tech">
                <span>React.js</span><span>Node.js</span><span>MongoDB</span><span>TensorFlow</span>
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
              <p className="project-desc-highlight">Developed a real-time messaging app with socket-based communication and user authentication using Socket.io and Express.js.</p>
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
              <p className="project-desc-highlight">Created a system for managing customer data and sales pipelines. Added an LLM-based churn prediction model, reducing churn by 8%.</p>
              <div className="project-tech">
                <span>React.js</span><span>Node.js</span><span>PostgreSQL</span><span>LLM</span>
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
              <p className="project-desc-highlight">Designed a platform with posts, comments, and notifications using MERN stack.</p>
              <div className="project-tech">
                <span>React.js</span><span>Node.js</span><span>MongoDB</span><span>Express.js</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                <a href="#" target="_blank" rel="noreferrer">GitHub</a>
                <a href="#" className="view-details">View Details</a>
              </div>
            </div>
          </div>
          <div className="project">
            <img src="/images/ui-designers.webp" alt="AI Chatbot" />
            <div className="project-content">
              <h4>AI Chatbot</h4>
              <p className="project-desc-highlight">Built a conversational chatbot using TensorFlow and LLMs for customer support, reducing response time by 30%.</p>
              <div className="project-tech">
                <span>TensorFlow</span><span>LLMs</span><span>Node.js</span><span>React.js</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                <a href="#" target="_blank" rel="noreferrer">GitHub</a>
                <a href="#" className="view-details">View Details</a>
              </div>
            </div>
          </div>
          <div className="project">
            <img src="/images/expense-tracker-dashboard.webp" alt="AI Sales Forecasting" />
            <div className="project-content">
              <h4>AI-Powered Sales Forecasting Tool</h4>
              <p className="project-desc-highlight">Developed a predictive tool with scikit-learn, enhancing inventory management by 15%.</p>
              <div className="project-tech">
                <span>scikit-learn</span><span>Python</span><span>React.js</span><span>Node.js</span>
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
            <a href="https://linkedin.com/in/md-monagir-hussan-7140b7266" target="_blank" rel="noreferrer">GitHub</a>
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