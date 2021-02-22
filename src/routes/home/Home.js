import React, { useEffect, useState } from 'react'
import background from './heroimg.jpg'
import OnVisible from 'react-on-visible'
import { Link } from 'react-router-dom'

function Home() {
  const [wordCount, setWordCount] = useState(0);
  const [wordList] = useState([
    "a Web Developer", "a System Administrator", "an IT Specialist", "a Video Game Enthusiast"
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setWordCount(wordCount => {
        if(wordCount >= wordList.length - 1){
          return 0
        } else{ 
          return wordCount + 1
        }
      })
    }, 500);
    return () => clearInterval(interval);
  })

  return (
    <div className="page-component">
      <div className="hero-part">
        <img src={background} />
        
        <div className="hero-text">
          <h1>Greetings</h1>
          <p>My Name is Joseph</p>
          <p>I'm <b>{`{ ${wordList[wordCount]} }`}</b></p>
        </div>

        <div className="scroll-down">
          Scroll Down
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>

      <OnVisible className="stats">
        <h1>About Me</h1>
        <p>I am a multidisciplinary programmer capable of picking up new concepts fairly quickly. I primarily work in the web development space, employing modern technologies and frontend frameworks such as Vue, React, Redux along with backend frameworks such as Laravel, Express, and headless WordPress.</p>
        {/* Semantic HTML5, CSS3 + Sass, Vue JS, React JS, Laravel, Express */}

        <p>In addition, I am also a Microsoft Certified Professional and specialize in configuring Windows 7 and Windows 10 computers. I also regularly work in Linux environments with CentOS and Ubuntu distros for web server administration.</p>
        {/* hardware config/troubleshooting, software config/troubleshooting, server administration, networking */}
      </OnVisible>

      <OnVisible className="projects">
        <h1>Most Recent Projects</h1>
        <div className="homepage-projects">

        </div>
        <Link to="/portfolio">View More</Link>
      </OnVisible>
    </div>
  );
}

export default Home;
