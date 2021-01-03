import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { device } from "../MediaQueries"
import GlobalComponents from "../globals/GlobalsComponents"

const AboutWrapper = styled.div`
  background-color: #efefef;


  padding: 2rem 0;
`

const AboutInner = styled(GlobalComponents.CentreContent)`
  @media (${device.tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`

const AboutContent = styled.div`
  @media (${device.tablet}) {
    padding-right: 2rem;
  }
`

const ImgWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
`

const HeroImg = styled(Img)`
  border-radius: 10px;
`



export default class About extends React.Component {
  render() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "stockholder.jpg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <AboutWrapper>
      <AboutInner>
        <AboutContent>
          <h2>LIAM HAINTZ SPEAKS FLUENT LOREM IPSUM</h2>
          <p>
            If you've got a clean-up job in-front of you that you want done,
            give us a call. We specialise in fast and efficient rubbish removal
            services.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            gravida imperdiet gravida.
          </p>
          <p>
            Integer vitae lectus et leo placerat molestie ut quis tellus. In ex
            augue, lobortis sodales viverra vel, scelerisque aliquam leo.
            Integer sodales tincidunt malesuada.
          </p>
          <p>
            Maecenas hendrerit turpis dolor, vitae interdum arcu pellentesque
            eu.
          </p>
        </AboutContent>
        <ImgWrapper>
          <HeroImg
            fluid={data.file.childImageSharp.fluid}
            alt="Gatsby Docs are awesome"
          />
        </ImgWrapper>
      </AboutInner>
    </AboutWrapper>
  )
}
}
