import React from 'react'

import Layout from '../components/layout'

import { css } from 'react-emotion'

import Img from "gatsby-image"

const IndexPage = ({data}) => {
  console.log(data)
  return (
    <Layout>
      <Img className={
        css`
          border: 1px solid;
        `
      }
        sizes={data.fileName.childImageSharp.sizes}
        backgroundColor
        title={`Photo by Ken Treloar on Unsplash`}
      />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "info1.png" }) {
      childImageSharp {
        sizes(maxWidth: 599) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
  }
`