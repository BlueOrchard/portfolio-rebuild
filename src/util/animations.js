export const pageTransition = {
    type: "tween",
    duration: 0.25
}

export const pageSlide = {
    initial: {
        opacity: 0,
        y: "-1rem",
    },
    in: {
        opacity: 1,
        y: 0,
    },
    out: {
        opacity: 0,
        y: "-1rem",
    },
  }

export const popIn = {
    initial: {
        opacity: 0,
        y: "-10px"
    },
    in: {
        opacity: 1,
        y: 0
    },
    out: {
        opacity: 0,
        y: "-10px"
    }
}