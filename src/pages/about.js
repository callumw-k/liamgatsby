import React from 'react';
import styled from 'styled-components';
import CentredContent from "../components/globals/styling-components/CentredContent"

const AboutWrapper = styled(CentredContent)`

`


export default function  About() {
  return(
    <AboutWrapper>
      <p>This is a test.</p>
    </AboutWrapper>
  )
}

