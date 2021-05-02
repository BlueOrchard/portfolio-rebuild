import { useEffect, useState } from "react";
import OnVisible from "react-on-visible";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SinglePost from "../../common/SinglePost";

function HomeText(){
    const posts = useSelector(state => state.portfolioCatalog.posts)
    const [wordCount, setWordCount] = useState(0);
    const [wordList] = useState([
        "a Web Developer", "a System Administrator", "an IT Specialist", "a Video Game Enthusiast", "a Car Enthusiast"
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
        }, 1000);
        return () => clearInterval(interval);
    }, [wordCount])

    return(
        <>
            <div className="hero-part">
                {/* <Image directSource={background} /> */}
                
                <div className="hero-text">
                    <h1>Greetings</h1>
                    <p>My Name is Joseph.</p>
                    <p>I'm <b>{`{ ${wordList[wordCount]} }`}</b></p>
                </div>

                <div className="scroll-down">
                    Scroll Down
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>

            <OnVisible className="stats">
                <span>Web Development</span>
                <h1>Websites and Web Applications</h1>
                <p>Hello! I'm Joseph. I'm a software engineer based in Jacksonville, FL. I primarily develop applications for the web. My goal is to build intuitive and modern applications that provide a streamlined experience for users.</p>
                <p>I am a multidisciplinary programmer capable of picking up new concepts fairly quickly. Here are a few technologies I've worked with recently:</p>
                <ul>
                    <li>Javascript (ES6+)</li>
                    <li>React</li>
                    <li>Vue</li>
                    <li>Laravel</li>
                    <li>HTML & (S)CSS</li>
                    <li>Headless Wordpress</li>
                </ul>
            </OnVisible>

            <OnVisible className="stats">
                <span>Information Technology</span>
                <h1>Computers and System Administration</h1>
                <p>In addition, I am also a Microsoft Certified Professional and specialize in configuring Windows 7 and Windows 10 computers. I also regularly work in Linux environments with CentOS and Ubuntu distros for web server administration.</p>
                <p>My proficiencies in Information Technology include:</p>
                <ul>
                    <li>Windows 10</li>
                    <li>Ubuntu & Red Hat Linux</li>
                    <li>Hardware Configuration</li>
                    <li>Software Configuration</li>
                    <li>Server Administration</li>
                    <li>Networking</li>
                </ul>
            </OnVisible>

            <OnVisible className="projects">
                <div className="project-text">
                    <span>Recent Projects</span>
                    <h1>Some Things I've Made</h1>
                    <p>Here are a few of my current projects</p>
                </div>
                <div className="homepage-projects">
                    {Object.entries(posts).length > 0 && posts.slice(0, 3).map(post => (
                    <SinglePost key={post.id} postData={post} />
                    ))}
                </div>
                <Link className="view-more" to="/portfolio">View More <i className="fas fa-chevron-right"></i></Link>
            </OnVisible>
        </>
    )
}

export default HomeText;