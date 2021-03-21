import React, { useEffect, useState } from 'react'
import background from './heroimg.jpg'
import OnVisible from 'react-on-visible'
import { Link } from 'react-router-dom'
import ConfidenceBar from './ConfidenceBar';
import { useSelector } from 'react-redux'
import SinglePost from '../../common/SinglePost';
import Image from '../../common/Image'

function Home() {
  const [wordCount, setWordCount] = useState(0);
  const [wordList] = useState([
    "a Web Developer", "a System Administrator", "an IT Specialist", "a Video Game Enthusiast", "a Car Enthusiast"
  ])
  const posts = useSelector(state => state.portfolioCatalog.posts)

  useEffect(() => {
    document.title = "Home"
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
  }, [wordCount])

  return (
    <div className="page-component">
      <div className="hero-part">
        <Image directSource={background} />
        
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
        <p>I am a multidisciplinary programmer capable of picking up new concepts fairly quickly. I primarily work in the web development space, employing modern technologies and frontend frameworks such as Vue and React along with backend frameworks such as Laravel, Express, and headless WordPress.</p>
        <div className="bar-holder">
          <ConfidenceBar icon="fab fa-vuejs" name="Vue JS" value="95" />
          <ConfidenceBar icon="fab fa-vuejs" name="VueX" value="95" />
          <br />
          <ConfidenceBar icon="fab fa-react" name="React JS" value="95" />
          <ConfidenceBar icon="fab fa-react" name="MobX" value="85" />
          <ConfidenceBar icon="fab fa-react" name="Redux" value="80" />
          <br />
          <ConfidenceBar icon="fab fa-laravel" name="Laravel" value="85" />
          <ConfidenceBar icon="fab fa-node" name="Express" value="80" />
          <ConfidenceBar icon="fab fa-wordpress" name="Headless WordPress" value="80" />
        </div>

        <p>In addition, I am also a Microsoft Certified Professional and specialize in configuring Windows 7 and Windows 10 computers. I also regularly work in Linux environments with CentOS and Ubuntu distros for web server administration.</p>
        <div className="bar-holder">
          <ConfidenceBar name="Hardware Configuration" value="95" />
          <ConfidenceBar name="Software Configuration" value="85" />
          <ConfidenceBar name="Server Administration" value="85" />
          <ConfidenceBar name="Networking" value="70" />
        </div>
      </OnVisible>

      <OnVisible className="projects">
        <h1>Most Recent Projects</h1>
        <p>Here are a few of my current projects.</p>
        <div className="homepage-projects">
          {Object.entries(posts).length > 0 && posts.slice(0, 3).map(post => (
            <SinglePost key={post.id} postData={post} />
          ))}
        </div>
        <Link className="view-more" to="/portfolio">View More <i className="fas fa-chevron-right"></i></Link>
      </OnVisible>
    </div>
  );
}

export default Home;
