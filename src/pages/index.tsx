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
  const domNodes = useRef<SVGGElement[]>([])

  useEffect(() => {
    const nodes: SimulationNodeDatum[] = hexResultData.map(hexResult => ({
      id: hexResult.id,
      partyId: hexResult.result.partyId
    }))

    const simulation = forceSimulation()
      .force('x', forceX(0))
      .force('y', forceY(300))
      .force('charge', forceManyBody().strength(2))
      .force('collision', forceCollide(11))
      .on('tick', () => {
        if (nodes[0] === undefined) return

        const length = domNodes.current.length
        for (let i = 0; i < length; i++) {
          const transform = `translate(${nodes[i].x} ${nodes[i].y})`
          domNodes.current[i].setAttribute('transform', transform)
        }
      })
      .stop()
      .nodes(nodes)

    simulation.restart()

    return () => { simulation.stop() }
  }, [])

  return (
    <main style={pageStyles}>
      <GlobalStyle />
      <title>NZ Hex</title>
      <h1 style={headingStyles}>
        New Zealand General Election 2020 🇳🇿
      </h1>
      <Wrapper>
        <SvgArea style={svgStyles}>
          <HexGrid size={12}>
            {hexResultData.map((hex, i) => <HexTile
              key={hex.id}
              // Callback ref to keep a list of DOM nodes
              ref={(domNode) => {
                if (domNode === null) {
                  console.log('null ref')
                  return
                }
                domNodes.current[i] = domNode
              }}
              {...hex}
            />)}
          </HexGrid>
        </SvgArea>
      </Wrapper>
    </main>
  )
}

export default IndexPage
