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

const PortfolioItem = props => {
  return <pre>{JSON.stringify(props, null, 2)}</pre>
}

export default PortfolioItem
