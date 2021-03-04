import React from 'react'
import { Link } from 'gatsby'

const error = () => {
  return (
    <div>
      <h3>Something went wrong...</h3>
      <Link to="/">Back home</Link>
    </div>
  )
}

export default error
