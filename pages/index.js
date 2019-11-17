import Game from "components/game"
import styled from "styled-components"

const StyledHome = styled.main`
  .game-container {
    min-height: calc(100vh - 10rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .description {
    max-width: 74rem;
    margin: 0 auto 5rem;
    padding: 2rem;
    h1 {
      margin: 3rem 0 2rem;
    }
    h2 {
      margin: 2rem 0 2rem;
    }
    h3 {
      margin: 1rem 0 1rem;
    }
    h4 {
      margin: 1rem 0 0.5rem;
    }
    p {
      margin: 1rem 0 0;
    }
  }
`

export default function Home() {
  return (
    <StyledHome>
      <section className="game-container">
        <Game />
      </section>
      <section className="description">
        <h2>Learn what it takes for a bill to become a law in Illinois.</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
          maxime odio atque eos recusandae dolorem deleniti nihil, eaque
          aspernatur obcaecati nostrum eligendi officia et necessitatibus,
          possimus consequatur quasi optio sunt.
        </p>
      </section>
    </StyledHome>
  )
}
