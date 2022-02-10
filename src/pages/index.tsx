import React, { CSSProperties, FC } from 'react'
import { SvgArea } from '../components/SvgArea'
import { Hexagon } from '../components/Hexagon'
import { HexGrid } from '../components/HexGrid'
import { HexGroup } from '../components/HexGroup'
import { Wrapper } from './index.styles'

// styles
const pageStyles: CSSProperties = {
  color: '#232129',
  paddingLeft: 96,
  paddingRight: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
  height: '100vh'
}
const headingStyles: CSSProperties = {
  marginTop: 0,
  marginBottom: 64
}
const svgStyles: CSSProperties = {
  border: '1px dashed gainsboro',
  width: '100%',
  height: '100%'
}

const IndexPage: FC = () => {
  const size = 24

  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        New Zealand Population 🇳🇿
      </h1>
      <Wrapper>
        <SvgArea style={svgStyles}>
          {/* Hexgrid supports odd-r layout - odd rows to the right */}
          <HexGrid size={size}>
            {/* Should x, y / col,row  be passed via context or renderProps? */}
            <HexGroup col={1} row={2}><Hexagon size={size} fill='#004400' /></HexGroup>
            <HexGroup col={1} row={3}><Hexagon size={size} fill='#006600' /></HexGroup>
            <HexGroup col={2} row={4}><Hexagon size={size} fill='#008800' /></HexGroup>
            <HexGroup col={1} row={5}><Hexagon size={size} fill='#00aa00' /></HexGroup>
            <HexGroup col={0} row={7}><Hexagon size={size} fill='#00cc00' /></HexGroup>
          </HexGrid>
        </SvgArea>
      </Wrapper>
    </main>
  )
}

export default IndexPage
