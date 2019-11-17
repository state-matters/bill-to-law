import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { colors } from "constants"
import { motion } from "framer-motion"

const StyledGame = styled.div`
  margin: 4rem auto 2rem;
  flex: 1;
  background: #88a9bf;
  width: 100%;
  max-width: 70rem;
  max-height: 50rem;
  border-radius: 4px;
  box-shadow: 0 3rem 3rem -2rem rgba(10, 10, 10, 0.6);
  display: flex;
  flex-direction: column;
  overflow: hidden;
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

function Splash() {
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
    <StyledSplash onMouseMove={handleMouse}>
      <img src="/images/splash/background.svg" className="background"></img>
      <motion.img
        src="/images/splash/capitol.svg"
        className="capitol"
        transition={spring}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ x: x / 10 + 24, y: y / 10, opacity: 1, scale: 1 }}
      />
      <motion.img
        src="/images/splash/foreground.svg"
        className="capitol"
        transition={spring}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ x: x / 12 - 48, y: y / 12 + 6, opacity: 1, scale: 1 }}
      />
      <motion.img
        src="/images/splash/bill.svg"
        className="bill"
        transition={spring}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ x: x / 12 + 35, y: y / 10 - 12, opacity: 1, scale: 1 }}
      />
      <motion.img
        src="/images/splash/title.svg"
        className="title"
        transition={spring}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ x: x / 18, y: y / 15, opacity: 1, scale: 1 }}
      />
      <motion.button whileHover={{ scale: 1.1 }}>Get Started</motion.button>
    </StyledSplash>
  )
}

function House() {
  return <h1>Send your bill through the house</h1>
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
      <CurrentStep />
    </StyledGame>
  )
}
