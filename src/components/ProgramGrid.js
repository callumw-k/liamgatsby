import React from "react"
import styled from "styled-components"
import { device } from "./MediaQueries"

const ProgramWrapper = styled.div`

  display: grid;
  grid-template-columns: 100%;

  @media (${device.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 500px));
  }
`

const ProgramCard = styled.div``

export default function ProgramGrid() {
  return (
    <ProgramWrapper>
      <ProgramCard>
        <p>This is the first </p>
      </ProgramCard>
      <ProgramCard>
        <p>This is the second card</p>
      </ProgramCard>
      <ProgramCard>
        <p>This is the third card.</p>
      </ProgramCard>
    </ProgramWrapper>
  )
}
