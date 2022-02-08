import * as React from 'react'
import { CSSProperties, FC } from 'react'

// styles
const pageStyles: CSSProperties = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif'
}
const headingStyles: CSSProperties = {
  marginTop: 0,
  marginBottom: 64,
}

const IndexPage: FC = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        New Zealand Population 🇳🇿
      </h1>
    </main>
  )
}

export default IndexPage
