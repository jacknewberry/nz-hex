import React, { CSSProperties, FC, useEffect, useRef } from 'react'
import { SvgArea } from '../components/SvgArea'
import { HexGrid } from '../components/HexGrid'
import { HexTile } from '../components/HexTile'
import { GlobalStyle } from '../components/GlobalStyle'
import { hexData } from '../data/hexData'
import styled from 'styled-components'
import { forceCollide, forceManyBody, forceSimulation, forceX, forceY, SimulationNodeDatum } from 'd3-force'

const pageStyles: CSSProperties = {
  color: '#232129',
  paddingLeft: 96,
  paddingRight: 96,
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

const Wrapper = styled.div`
  height: 60%;
`

const IndexPage: FC = () => {
  const hexResultData = hexData.nzAllElectorates2020

  return (
    <main style={pageStyles}>
      <GlobalStyle />
      <title>NZ Hex</title>
      <h1 style={headingStyles}>
        New Zealand General Election 2020 🇳🇿
      </h1>
      <Wrapper>
        <HexGrid size={12}>
          <SvgArea style={svgStyles}>
            {hexResultData.map((hex, i) => <HexTile
              key={hex.id}
              index={i}
              {...hex}
                                           />)}
          </SvgArea>
        </HexGrid>
      </Wrapper>
    </main>
  )
}

export default IndexPage
