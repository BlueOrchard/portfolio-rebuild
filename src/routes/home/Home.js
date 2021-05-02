import React, { createRef, useEffect } from 'react'
import lottie from 'lottie-web'
import Stars from './Stars'
import HomeText from './HomeText'

import earthJSON from './40402-earth.json'
import moonJSON from './40441-moon.json'
import marsJSON from './40399-mars.json'
import neptuneJSON from './40400-neptune.json'

import dig from './dig.png'
import dug from './dug.png'

function Home() {
    const Earth = createRef();
    const Mars = createRef();
    const Neptune = createRef();
    const Moon = createRef();

    const windowWidth = window.innerWidth;
    const breakpoint = 640;

    const animationOptions = {
        renderer: "svg",
        loop: true,
        autoplay: true,
    }

    useEffect(() => {
        document.title = "Home"

        const earth = lottie.loadAnimation({
            container: Earth.current,
            animationData: earthJSON,
            ...animationOptions
        })

        const moon = lottie.loadAnimation({
            container: Moon.current,
            animationData: moonJSON,
            ...animationOptions
        })

        const mars = lottie.loadAnimation({
            container: Mars.current,
            animationData: marsJSON,
            ...animationOptions
        })

        const neptune = lottie.loadAnimation({
            container: Neptune.current,
            animationData: neptuneJSON,
            ...animationOptions
        })

        if(windowWidth < breakpoint){
            earth.pause()
            moon.pause()
            mars.pause()
            neptune.pause()
        }

        return(() => {
            earth.destroy()
            moon.destroy()
            mars.destroy()
            neptune.destroy()
        })
    }, [])

  return (
    <div className="page-component homepage-inner">
        <HomeText />

        <div className="earth-orbit">
            <div className="planet earth" ref={Earth}></div>

            <div className="moon-orbit">
                <div className="planet moon" ref={Moon}></div>
            </div>
        </div>

        <div className="planet mars" ref={Mars}></div>
        <div className="planet neptune" ref={Neptune}></div>
        
        <div className="stars">
            <Stars count={50} />
        </div>

        <div className="dig-dug">
            <img src={dig} />
            <img src={dug} />
            <img src={dug} />
            <img src={dug} />
        </div>
    </div>
  );
}

export default Home;
