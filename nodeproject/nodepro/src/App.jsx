import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
      </header>

      <section id="about-me">
        <h2>About Me</h2>
        <p>
          Hi, I'm Sriman, a second-year B.Sc. IT student at Sri Krishna College of Engineering and Technology. 
          I am passionate about software development and currently working on multiple projects to enhance my skills.
        </p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>Java</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML/CSS</li>
        </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Employee Tracking Web App</h3>
            <p>A web application to track employee data using HTML, CSS, and Python for backend management.</p>
          </div>
          <div className="project-card">
            <h3>BMI Calculator</h3>
            <p>A BMI calculator program built using Java to compute and categorize body mass index.</p>
          </div>
          <div className="project-card">
            <h3>Transport Business System</h3>
            <p>Software to manage customer priorities for a transport business, implemented in Java.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2025 Sriman. All rights reserved.</p>
      </footer>
    </div>

    </>
  )
}

export default App
