import React, { CSSProperties, FC } from 'react'
import { SvgArea } from '../components/SvgArea'
import { HexGrid } from '../components/HexGrid'
import { Wrapper } from '../pageSupport/index.styles'
import { HexTile } from '../components/HexTile'
import { nzElectoratesMaori2008 } from '../data/nzElectoratesMaori2008'
import { nzElectorateResults2020 } from '../data/nzResults2020'
import { GlobalStyle } from '../components/GlobalStyle'

// styles
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

const IndexPage: FC = () => {
  const hexes = nzElectoratesMaori2008
  const results = nzElectorateResults2020

  return (
    <main style={pageStyles}>
      <GlobalStyle />
      <title>NZ Hex</title>
      <h1 style={headingStyles}>
        New Zealand General Election 2020 🇳🇿
      </h1>
      <Wrapper>
        <SvgArea style={svgStyles}>
          {/* Hexgrid supports odd-r layout - odd rows to the right */}
          <HexGrid size={24}>
            {Object.values(hexes).map(hex => <HexTile key={hex.id} {...hex} result={results[hex.id]} />)}
          </HexGrid>
        </SvgArea>
      </Wrapper>
    </main>
  )
}

export default IndexPage
