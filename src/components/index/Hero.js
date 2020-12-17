import React from "react"
import styled from "styled-components"
import Rubbish from "../../images/stockholder.jpg"
import GlobalComponents from "../globals/GlobalsComponents"

const HeroWrapper = styled.div`
  position: relative;
  height: 75vh;
  background-image: url(${Rubbish});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`

const HeroInner = styled(GlobalComponents.CentreContent)`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    text-align: center;
    color: white;
  }
  a {
    margin-top: 1rem;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: white;
  padding: 2.5rem;
  border-radius: 10px;
`

const Title = styled.h1`
  text-align: center;
  color: white;
  font-weight: bold;
`

export default function Hero() {
  return (
    <HeroWrapper>
      <HeroInner>
        <Title>READY TO LOOK WET?</Title>
        <p>placeholder text placeholder text placeholder text placeholder textplaceholder text placeholder textplaceholder text placeholder text</p>
        <GlobalComponents.ButtonLink to="/contact">
          PERSONAL TRAINING
        </GlobalComponents.ButtonLink>
      </HeroInner>
    </HeroWrapper>
  )
}
