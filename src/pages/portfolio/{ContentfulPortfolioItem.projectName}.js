import React from 'react'
import { graphql } from 'gatsby'

export const query = graphql`
  query MyQuery {
    allContentfulPortfolioItem {
      nodes {
        id
        projectName
      }
    }
  }
`

export default function PortfolioItem(props) {
  return (
    <>
      <h1>A thing...</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}
