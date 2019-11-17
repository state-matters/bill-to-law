import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { colors, steps } from "constants"
import { motion, AnimatePresence } from "framer-motion"

const StyledGame = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 auto;
  background: #88a9bf;
  box-shadow: 0 3rem 3rem -2rem rgba(10, 10, 10, 0.6);
  height: calc(100vh - 4rem);
  width: 100%;
  max-width: 70rem;
  overflow: hidden;
  @media (min-width: 60rem) {
    margin: 4rem auto 2rem;
    border-radius: 4px;
    height: 50rem;
  }
`

const StyledSplash = styled(motion.section)`
  padding: 2rem;
  overflow: hidden;
  position: relative;
  width: 100%;
  flex: 1;
  .background,
  .foreground,
  .capitol,
  .bill,
  .title {
    position: absolute;
    object-fit: cover;
    user-select: none;
    touch-action: none;
  }
  .background {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .bill {
    top: 20%;
    left: 50%;
    width: 25rem;
    max-width: 100%;
  }
  .capitol,
  .foreground {
    bottom: -2rem;
    left: -2rem;
    width: 105%;
  }
  .title {
    top: 4rem;
    left: 4rem;
    width: 20rem;
  }
  button {
    all: unset;
    box-sizing: border-box;
    position: absolute;
    right: 4rem;
    bottom: 4rem;
    padding: 2rem 4rem;
    background: ${colors.purple_900};
    border-radius: 4px;
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: 1px;
    cursor: pointer;
    transition: background 200ms;
    &:hover {
      background: ${colors.purple_300};
    }
  }
`

function Splash({ setIdx, currentIdx }) {
  const [[x, y], set] = useState([0, 0])
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100
  }
  function handleMouse({ clientX: x, clientY: y }) {
    function calc(x, y) {
      return [x - window.innerWidth / 2, y - window.innerHeight / 2]
    }

    set(calc(x, y))
  }
  return (
    <StyledSplash
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseMove={handleMouse}
    >
      <img src="/images/splash/background.svg" className="background"></img>
      <motion.img
        draggable="false"
        src="/images/splash/capitol.svg"
        className="capitol"
        transition={spring}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ x: x / 10 + 24, y: y / 10, opacity: 1, scale: 1 }}
      />
      <motion.img
        draggable="false"
        src="/images/splash/foreground.svg"
        className="capitol"
        transition={spring}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ x: x / 12 - 48, y: y / 12 + 6, opacity: 1, scale: 1 }}
      />
      <motion.img
        draggable="false"
        src="/images/splash/title.svg"
        className="title"
        transition={spring}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ x: x / 18, y: y / 15, opacity: 1, scale: 1 }}
      />
      <motion.button
        onClick={e => setIdx(currentIdx + 1)}
        whileHover={{ scale: 1.1 }}
      >
        Play Now
      </motion.button>
    </StyledSplash>
  )
}

function House() {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Send your bill through the house
    </motion.h1>
  )
}

function Senate() {
  return <h1>Send your bill through the senant</h1>
}

export default function Game() {
  const [currentIdx, setIdx] = useState(0)
  const steps = [Splash, House, Senate]
  const CurrentStep = steps[currentIdx]
  return (
    <StyledGame>
      <AnimatePresence>
        <CurrentStep setIdx={setIdx} currentIdx={currentIdx} />
      </AnimatePresence>
    </StyledGame>
  )
}
