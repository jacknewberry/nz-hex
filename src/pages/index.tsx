import React, { CSSProperties, FC } from 'react'
import { SvgArea } from '../components/SvgArea'
import { HexGrid } from '../components/HexGrid'
import { Wrapper } from './index.styles'
import { HexTile } from '../components/HexTile'

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
            <HexTile col={1} row={2} fill='#004400' name='North Shore North' />
            <HexTile col={1} row={3} fill='#006600' name='South Auckland' />
            <HexTile col={2} row={4} fill='#008800' name='Waikato and Bays' />
            <HexTile col={1} row={5} fill='#00aa00' name='Taranaki to Wellington' />
            <HexTile col={0} row={7} fill='#00cc00' name='South Island' />
          </HexGrid>
        </SvgArea>
      </Wrapper>
    </main>
  )
}

export default IndexPage
