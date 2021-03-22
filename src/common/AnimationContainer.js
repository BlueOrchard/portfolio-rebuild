import {motion} from 'framer-motion'
import {popIn, pageSlide, pageTransition} from '../util/animations'
import {useState, useEffect} from 'react'

function AnimationContainer(props){
    const classNameProp = props.classNameProp
    const animationProp = props.animationProp
    const key = props.key
    const [animationType, setAnimationType] = useState("")

    useEffect(() => {
        setAnimationType(resolveAnimation(animationProp))
    }, [])

    function resolveAnimation(animation){
        switch (animation){
            case "POP_IN":
                return popIn
            case "FADE_UP":
                return pageSlide
            default:
                return pageSlide
        }
    }

    return(
        <motion.div
            key={key}
            initial="initial"
            animate="in"
            exit="out"
            variants={animationType}
            transition={pageTransition}
            className={classNameProp}
            >
                {props.children}
        </motion.div>
    )
}

export default AnimationContainer